<template>
  <div>
    <div class="article-detail" id="article">
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
    </div>
    <p>
      <el-button class="el-icon-share downloadBtn" circle @click="generateDownloadLink()"
        >下载并分享</el-button
      >
    </p>

    <!-- 文章分享表单 -->
    <el-dialog
      title="如果喜欢，就把它分享给你的朋友吧"
      :visible.sync="shareVisible"
      width="30%"
    >
      <el-form label-width="80px">
        <!-- 显示分享链接供复制 -->
        <el-form-item>
          <a :href="downloadLink" download>点击这里下载文章</a>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getArticle } from "../api/article";
import { initDate } from "../utils/server.js";
import { mavonEditor } from "mavon-editor";
import html2pdf from "html2pdf.js";
export default {
  name: "ArticleDetail",
  components: {},
  data() {
    return {
      aid: "", //文章分类id
      details: {},
      //下载分享
      downloadLink: "",
      shareVisible: false,
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
        if (this.details.content != null) {
          this.details.content = markdownIt.render(this.details.content);
        }
      });
    },
    generateDownloadLink() {
      const element = document.getElementById("article");
      html2pdf()
        .set({
          pagebreak: { mode: ["avoid-all"] },
          filename: this.details.title,
          margin: [0, -141],
        })
        .from(element)
        .save();
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
.downloadBtn {
  margin-left: 530px;
}
.article-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 530px;
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
