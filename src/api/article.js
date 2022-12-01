import request from '@/utils/request'

// 查询文章列表
export function articleList(query) {
    return request({
        url: '/article/articleList',
        method: 'get',
        headers: {
          isToken: false
        },
        params: query
    })
}

// 查询精选文章
export function staredArticles() {
  return request({
      url: '/article/staredArticles',
      method: 'get',
      headers: {
        isToken: false
      },
  })
}

// 查询最新文章
export function newArticles() {
  return request({
      url: '/article/newArticles',
      method: 'get',
      headers: {
        isToken: false
      },
  })
}

//查询最热文章
export function hotArticleList() {
    return request({
        url: '/article/hotArticleList',
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

//获取文章详情
export function getArticle(articleId) {
    return request({
        url: '/article/' + articleId,
        headers: {
          isToken: false
        },
        method: 'get'
    })
}

export function updateViewCount(articleId) {
    return request({
        url: '/article/updateViewCount/' + articleId,
        headers: {
          isToken: false
        },
        method: 'put'
    })
    
}
