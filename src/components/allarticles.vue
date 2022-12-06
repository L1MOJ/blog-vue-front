<template>
  <div class="">
    <el-row class="allarticlesBox">
      <el-col
        :span="24"
        class="s-item tcommonBox"
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
          <h1>
            <a :href="'#/DetailArticle?aid=' + item.id" target="_blank">
              {{ item.title }}
            </a>
          </h1>
          <h2>
            <i class="fa fa-fw fa-user"></i>发表于 <i class="fa fa-fw fa-clock-o"></i>
            <span>{{ showInitDate(item.createTime, "newDate") }}</span> •
            <!-- <i class="fa fa-fw fa-eye"></i>{{ item.viewCount }} 次围观 • -->
          </h2>
          <!-- <div class="ui label">
                        <a :href="'#/Share?classId=' + item.class_id">{{ item.categoryName }}</a>
                    </div> -->
        </header>
        <div class="article-content">
          <p style="text-indent: 2em">
            {{ item.summary }}
          </p>
          <p style="max-height: 300px; overflow: hidden; text-align: center">
            <img :src="item.thumbnail" alt="" class="maxW" />
          </p>
        </div>
        <div class="viewdetail">
          <a class="tcolors-bg" :href="'#/DetailArticle?aid=' + item.id" target="_blank">
            阅读全文>>
          </a>
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
export default {
  data() {
    return {
      total: 0,
      queryParams: {
        pageNum: 1,
        pageSize: 5,
        categoryId: -1,
      },
      //所有打赏人的数据
      aList: [],
    };
  },

  methods: {
    showInitDate: function (oldDate, full) {
      return initDate(oldDate, full);
    },
    getAllArticles() {
      console.log(this.queryParams);
      allArticleList(this.queryParams).then((response) => {
        console.log(response.rows);
        this.total = response.total;
        this.aList = response.rows;
      });
    },
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
    var that = this;
    that.getAllArticles();
  },
};
</script>
<style>
/*分享标题*/
.shareTitle {
  margin-bottom: 40px;
  position: relative;
  border-radius: 5px;
  background: #fff;
  padding: 15px;
}
.shareclassTwo {
  width: 100%;
}
.shareclassTwo li {
  display: inline-block;
}
.shareclassTwo li a {
  display: inline-block;
  padding: 3px 7px;
  margin: 5px 10px;
  color: #fff;
  border-radius: 4px;
  background: #64609e;
  border: 1px solid #64609e;
  transition: transform 0.2s linear;
  -webkit-transition: transform 0.2s linear;
}
.shareclassTwo li a:hover {
  transform: translate(0, -3px);
  -webkit-transform: translate(0, -3px);
}
.shareclassTwo li a.active {
  background: #fff;
  color: #64609e;
}
/*文章列表*/
.allarticlesBox {
  transition: all 0.5s ease-out;
  font-size: 15px;
}

/*.allarticlesBox .viewmore a:hover,.s-item .viewdetail a:hover{
        background: #48456C;
    }*/
</style>
