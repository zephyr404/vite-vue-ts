import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import { getToken, removeToken } from "../utils/auth"

let baseURL: string = ''

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const service = axios.create({
  baseURL,
  timeout: 3000,
})

// 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    const token = getToken();
    token && (config.headers.Authorization = token)
    return config;
  },
  (error: any) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  // 请求成功
  (res: any) => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      // 请求不在2xx的范围 errorHandle(response.status, response.data.message);
      return Promise.reject(response)
    } else {
      // 请求超时或断网时更新state的network状态
      store.commit('changeNetwork', false)
    }
  });

/**
  * 跳转登录页
  * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
  */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: (router.currentRoute as any).fullPath
    }
  });
}

/**
* 请求失败后的错误统一处理
* @param {Number} status 请求失败的状态码
*/
const errorHandle = (status: any, other: any) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页   
    case 401:
      toLogin();
      break;
    // 403 token过期 清除token并跳转登录页
    case 403:
      console.log('登录过期，请重新登录');
      removeToken();
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      console.log('请求的资源不存在');
      break;
    default:
      console.log(other);
  }
}

export default service