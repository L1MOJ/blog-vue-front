import request from '@/utils/request'
// 查询分类列表
export function getCategoryList() {
    return request({
        url: '/category/getCategoryList',
        headers: {
          isToken: false
        },
        method: 'get'
    })
  }
//增加分类
export function addCat(categoryName) {
  return request({
      url: '/category/add',
      method: 'post',
      headers: {
          isToken: false
        },
      data: categoryName
  })
}