import request from '@/utils/request'

// 查询文章列表
export function donatorList(query) {
    return request({
        url: '/support/donators',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}