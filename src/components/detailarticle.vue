<template>
  <div class="article-detail">
    <el-card class="article-header" style="text-align: center">
      <h1>{{ details.title }}</h1>
      <p>
        发表于 <i class="fa fa-fw fa-clock-o"></i>
        <span>{{ showInitDate(details.createTime, "newDate") }}</span>
      </p>
    </el-card>
    <el-card class="article-main">
      <div class="article-content" v-html="details.content"></div>
    </el-card>
    <el-card class="article-footer">
      <p></p>
    </el-card>
  </div>
</template>

<script>
import { getArticle } from "../api/article";
import { initDate } from "../utils/server.js";
import { mavonEditor } from "mavon-editor";
export default {
  name: "ArticleDetail",
  components: {},
  data() {
    return {
      aid: "", //文章分类id
      details: {},
    };
  },
  methods: {
    showInitDate: function (oldDate, full) {
      return initDate(oldDate, full);
    },
    getArticleDetail() {
      getArticle(this.aid).then((response) => {
        this.details = response;
        const markdownIt = mavonEditor.getMarkdownIt();
        this.details.content = markdownIt.render(response.content);
      });
    },
  },
  components: {},
  created() {
    var that = this;
    that.aid = that.$route.query.aid == undefined ? 1 : parseInt(that.$route.query.aid);
    this.getArticleDetail();
  },
};
</script>

<style>
.article-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 620px;
}

.article-detail .el-card {
  width: 800px;
  margin-bottom: 20px;
}

.article-header {
  margin-bottom: 20px;
}

.article-main {
  flex: 1;
  margin-bottom: 20px;
}

.article-footer {
  margin-top: auto;
}
</style>
