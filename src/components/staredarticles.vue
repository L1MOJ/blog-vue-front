<!-- 文章列表 -->
<template>
  <el-row class="staredlistBox">
    <el-col
      :span="24"
      class="s-item tcommonBox floating-box"
      v-for="(item, index) in articleList"
      :key="'article' + index"
    >
      <header style="text-align: center">
        <h1>
          <a :href="'#/DetailArticle?aid=' + item.id" target="_blank">{{ item.title }}</a>
        </h1>
        {{ item.summary }}
      </header>
      <h5>
        <i class="fa fa-fw fa-clock-o"></i>发表于<span>{{
          showInitDate(item.createTime, "newDate")
        }}</span>
      </h5>
    </el-col>
    <el-col class="viewmore"> </el-col>
  </el-row>
</template>
<script>
import { initDate } from "../utils/server.js";
import { staredArticles } from "../api/article";
export default {
  name: "Share",
  data() {
    //选项 / 数据
    return {
      articleList: [],
    };
  },

  methods: {
    showInitDate: function (oldDate, full) {
      return initDate(oldDate, full);
    },
    getList() {
      staredArticles().then((response) => {
        // console.log(response);
        // console.log(articleList);
        this.articleList = response;
      });
    },
  },
  components: {
    //定义组件
  },
  watch: {},
  created() {
    var that = this;
    that.getList();
    //     axios.get("/article/staredArticles").then(res => {
    //     this.articleList=res.data.data;

    // })
  },
};
</script>

<style></style>
