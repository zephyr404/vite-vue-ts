import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,
    },
    // children: [
    //   {
    //     path: '/',
    //     name: 'Index',
    //     component: () => import('@/components/home/Index.vue'),
    //     meta: {
    //       requireAuth: true,
    //     }
    //   },
    // ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/About.vue'),
  //   meta: {
  //     requireAuth: true,
  //   }
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      requireAuth: false,
    }
  },
  // {
  //   path: '/regist',
  //   name: 'Regist',
  //   component: () => import('@/views/Regist.vue'),
  //   meta: {
  //     requireAuth: false,
  //   }
  // },
  // {
  //   path: '/reset',
  //   name: 'Reset',
  //   component: () => import('@/views/Reset.vue'),
  //   meta: {
  //     requireAuth: false,
  //   }
  // },
  // {
  //   path: "/:catchAll(.*)",
  //   name: 'NotFount',
  //   component: () => import('@/components/error/404.vue'),
  //   meta: {
  //     requireAuth: false,
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 导航守卫判断本地是否有 token
// router.beforeEach(async (to: any, from: any, next: any) => {
//   if (to.meta.requireAuth) {
//     if (sessionStorage.getItem("_token") && sessionStorage.getItem("_token") != '') {
//       next();
//     } else {
//       location.href = '/login';
//     }
//   } else {
//     next();
//   }
// })

export default router
