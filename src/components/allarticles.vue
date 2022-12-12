<template>
  <div class="">
    <div class="Box">
      <el-row class="allarticlesBox">
        <el-col class="categoryList">
          <button
            class="categoryButton"
            round
            v-for="(item, index) in categoryList"
            :key="index"
            @click="handleCategory(item.id)"
          >
            {{ item.name }}
          </button>
        </el-col>
        <el-col
          class="floating-box articlesBox"
          v-for="(item, index) in aList"
          :key="'article' + index"
          style="margin: 20px"
        >
          <span class="s-round-date">
            <span class="month" v-html="item.categoryName" style="display: block"></span>
            <br />
            <span
              class="month"
              v-html="showInitDate(item.createTime, 'month') + '月'"
            ></span>
            <span class="day" v-html="showInitDate(item.createTime, 'date')"></span>
          </span>
          <header>
            <h1 style="text-align: center">
              <a :href="'#/DetailArticle?aid=' + item.id" target="_blank">
                {{ item.title }}
              </a>
            </h1>
            <h2 style="text-align: center">
              <i class="fa fa-fw fa-user"></i>发表于 <i class="fa fa-fw fa-clock-o"></i>
              <span>{{ showInitDate(item.createTime, "newDate") }}</span>
              <!-- <i class="fa fa-fw fa-eye"></i>{{ item.viewCount }} 次围观 • -->
            </h2>
          </header>
          <div class="article-content">
            <p style="text-indent: 2em; text-align: center">
              {{ item.summary }}
            </p>
          </div>
          <div class="viewdetail" style="text-align: center">
            <a :href="'#/DetailArticle?aid=' + item.id"> 阅读全文>> </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.queryParams.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="this.queryParams.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total"
      class="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import { allArticleList } from "../api/article";
import { initDate } from "../utils/server.js";
import { getCategoryList } from "../api/category";
export default {
  data() {
    return {
      //查询到的文章总数
      total: 0,
      //查询Id默认为-1，查询所有
      queryParams: {
        pageNum: 1,
        pageSize: 5,
        categoryId: -1,
      },
      //文章列表
      aList: [],
      //将查询出的类名储存
      categoryList: [],
    };
  },

  methods: {
    showInitDate: function (oldDate, full) {
      return initDate(oldDate, full);
    },

    //得到所有文章
    getAllArticles() {
      console.log(this.queryParams);
      allArticleList(this.queryParams).then((response) => {
        this.total = response.total;
        this.aList = response.rows;
      });
    },
    //得到所有文章类别
    getCategory() {
      getCategoryList().then((response) => {
        this.categoryList = response;
        console.log(this.categoryList);
      });
    },
    //点击分类函数
    handleCategory(id) {
      this.queryParams.categoryId = id;
      this.getAllArticles();
    },
    //处理分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.queryParams.pageSize = val;
      this.getAllArticles();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.queryParams.pageNum = val;
      this.getAllArticles();
    },
  },

  created() {
    this.getAllArticles();
    this.getCategory();
  },
};
</script>
<style>
a {
  color: #263159;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
}
a:hover {
  color: #000;
}
.floating-box {
  transition: all 0.2s linear;
  position: relative;
}
.floating-box:hover {
  transform: translate(0, -2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
/*文章列表*/
.allarticlesBox {
  transition: all 0.5s ease-out;
  font-size: 15px;
}
.s-round-date {
  background-color: #495579;
  width: 90px;
  height: 60px;
  border-radius: 10px;
  display: inline-block;
  margin-left: -800px;
}
.s-round-date .month,
.s-round-date .day {
  color: #fffbeb;
  font-weight: bold;
}
.categoryList {
  width: 50px;
  margin-left: -200px;
}
button {
  background-color: #495579;
  border: none;
  color: #fffbeb;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 8px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  background-color: #263159;
}

.page {
  left: 50%;
  bottom: 0;
  transform: translate(50%, 0);
}
.Box {
  width: 800px;
  margin-left: 400px;
}
.articlesBox {
  background-color: #f3f3e4;
  text-align: center;
  border-radius: 10px;
}

.el-pager li.active {
  color: #fffbeb !important; /*仅设置active时的文字颜色*/
  background-color: #495579;
  border-color: #fffbeb;
}
</style>
