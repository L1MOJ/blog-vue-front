import request from '@/utils/request'

// 登录
export function userLogin(username,password) {
    return request({
        url: 'user/login',
        method: 'post',
        headers: {
            isToken: false
          },
        data: {'userName':username,'password':password}
    })
}
