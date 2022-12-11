import request from '@/utils/request'

// 查询所有文章列表
export function allArticleList(query) {
    return request({
        url: '/article/allArticleList',
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

// 查询分类列表
export function getCategoryList() {
  return request({
      url: '/article/getCategoryList',
      headers: {
        isToken: false
      },
      method: 'get'
  })
}

