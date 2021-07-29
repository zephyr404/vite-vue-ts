import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserId = 'User-Id'
const OrgId = 'Org-Id'
const OrgName = 'Org-Name'
const User = 'User'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token, { expires: 30 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserId() {
  return Cookies.get(UserId)
}

export function setUserId(User: any) {
  return Cookies.set(UserId, User, { expires: 30 })
}

export function removeUserId() {
  return Cookies.remove(UserId)
}

export function getOrgId() {
  return Cookies.get(OrgId)
}

export function setOrgId(Org: any) {
  return Cookies.set(OrgId, Org, { expires: 30 })
}

export function removeOrgId() {
  return Cookies.remove(OrgId)
}

export function getOrgName() {
  return Cookies.get(OrgName)
}

export function setOrgName(Name: any) {
  return Cookies.set(OrgName, Name, { expires: 30 })
}

export function removeOrgName() {
  return Cookies.remove(OrgName)
}

export function getUser() {
  return Cookies.get(User)
}

export function setUser(user: any) {
  return Cookies.set(User, user, { expires: 30 })
}

export function removeUser() {
  return Cookies.remove(User)
}