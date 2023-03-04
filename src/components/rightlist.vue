<!-- 右侧固定导航栏 -->
<template>
  <div class="rightlistBox">
    <section>
      <h2 class="ui-label">最新文章</h2>
      <ul>
        <li v-for="item in newArticleList" :key="item.id">
          <!-- 去除原点 在后续style中设置 -->
          <a :href="'#/DetailArticle?aid=' + item.id">{{ item.title }}</a>
          —{{ showInitDate(item.createTime, "newDate") }}
        </li>
      </ul>
    </section>
    <section>
      <h2 class="ui-label">精选文章</h2>
      <ul>
        <li v-for="item in staredArticleList" :key="item.id">
          <!-- 去除原点 在后续style中设置 -->
          <a :href="'#/DetailArticle?aid=' + item.id">{{ item.title }}</a>
          —{{ showInitDate(item.createTime, "newDate") }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { initDate } from "../utils/server.js";
import { newArticles, staredArticles } from "../api/article";
export default {
  data() {
    return {
      newArticleList: [],
      staredArticleList: [],
    };
  },
  methods: {
    showInitDate: function (oldDate, full) {
      return initDate(oldDate, full);
    },

    getList() {
      newArticles().then((response) => {
        this.newArticleList = response;
      });
      staredArticles().then((response) => {
        this.staredArticleList = response;
      });
    },
  },
  components: {
    //定义组件
  },

  created() {
    //生命周期函数
    var that = this;
    that.getList();
  },
};
</script>

<style>
/* 右边栏的样式 */
a {
  color: #263159;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-decoration: none;
}
a:hover {
  color: #000;
}
/* 悬浮效果 */
.rightlistBox section {
  transition: all 0.2s linear;
  position: relative;
  background: #f3f3e4;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.rightlistBox section:hover {
  transform: translate(0, -2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.rightlistBox {
  margin-left: 150px;
  width: 350px;
}
</style>
