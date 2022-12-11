<template>
  <div class="">
    <el-row>
      <el-button
        round
        v-for="(item, index) in categoryList"
        :key="index"
        @click="handleCategory(item.categoryId)"
      >
        {{ item.categoryName }}
      </el-button>
    </el-row>
    <el-row class="allarticlesBox">
      <el-col
        :span="24"
        class="s-item tcommonBox floating-box"
        v-for="(item, index) in aList"
        :key="'article' + index"
      >
        <span class="s-round-date">
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
          {{ item.categoryName }}
        </header>
        <div class="article-content">
          <p style="text-indent: 2em; text-align: center">
            {{ item.summary }}
          </p>
          <p style="max-height: 300px; overflow: hidden; text-align: center">
            <img :src="item.thumbnail" alt="" class="maxW" />
          </p>
        </div>
        <div class="viewdetail" style="text-align: center">
          <a :href="'#/DetailArticle?aid=' + item.id"> 阅读全文>> </a>
        </div>
      </el-col>
    </el-row>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.queryParams.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="this.queryParams.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { allArticleList } from "../api/article";
import { initDate } from "../utils/server.js";
import { getCategoryList } from "../api/article";
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
    getCategoryList() {
      getCategoryList().then((response) => {
        this.categoryList = response;
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
    this.getCategoryList();
  },
};
</script>
<style>
a {
  color: #64609e;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  background-color: #ccc;
  width: 40px;
  height: 40px;
  border-radius: 35px;
  display: inline-block;
  text-align: center;
}
.s-round-date .month,
.s-round-date .day {
  color: #06c;
  font-weight: bold;
}
</style>
