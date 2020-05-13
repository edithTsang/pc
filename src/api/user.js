import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/webapi/user/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/webapi/user/logout',
    method: 'post'
  })
}

export function mobilelogin(data) {
  return request({
    url: '/webapi/user/mobilelogin',
    method: 'post',
    data
  })
}

export function sendCode(data) {
  return request({
    url: '/webapi/pub/sendloginMessage',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

