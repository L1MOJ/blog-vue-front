<!-- 文章列表 -->
<template>
  <div class="starlist">
    <el-row>
      <el-col
        :span="24"
        class="floating-box staredlistBox"
        v-for="(item, index) in articleList"
        :key="'article' + index"
        style="margin: 20px"
      >
        <header style="text-align: center">
          <h1>
            <a :href="'#/DetailArticle?aid=' + item.id" target="_blank">{{
              item.title
            }}</a>
          </h1>
          {{ item.summary }}
        </header>
        <h5>
          <i class="fa fa-fw fa-clock-o"></i>发表于<span>{{
            showInitDate(item.createTime, "newDate")
          }}</span>
        </h5>
        <div class="viewdetail">
          <a class="tcolors-bg" :href="'#/DetailArticle?aid=' + item.id" target="_blank">
            阅读全文>>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
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
  },
};
</script>

<style>
.starlist {
  width: 800px;
  margin-left: 400px;
}
.staredlistBox {
  background-color: #f3f3e4;
  text-align: center;
  border-radius: 10px;
}
</style>
