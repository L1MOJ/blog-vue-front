import Mock from 'mockjs'

//Mock赞赏数据
Mock.mock('/Support', {
    "data|4":
    [
          {
        "date": "@datetime(yyyy-MM-dd)",
        "name": "@cname",
        "money|1-999": 1,
    }
    ]
  
})

Mock.mock('/article/mainArticles', {
    "data|3":
    [
          {
        "id|+1": 1,
        "title": "@ctitle",
        "createTime": "@datetime(yyyy-MM-dd)",
    }
    ]
  
})