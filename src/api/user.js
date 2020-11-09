import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sessions',
    method: 'post',
    auth: data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
