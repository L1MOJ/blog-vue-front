<template>
  <div>
    <el-row>
      <el-button class="el-icon-plus" circle></el-button>
      <el-button class="el-icon-delete" circle></el-button>
      <el-input v-model="keywords" placeholder="查询文章标题"></el-input>
      <el-button class="el-icon-search" circle></el-button>
    </el-row>
    <el-checkbox-group v-model="checkedArticles">
      <div v-for="article in aList" :key="article.id" class="article-item">
        <el-checkbox :label="article.id">
          {{ article.title }}
        </el-checkbox>
        <img :src="article.thumbnailUrl" alt="" />
        <el-button class="el-icon-edit"></el-button>
      </div>
    </el-checkbox-group>
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
export default {
  data() {
    return {
      //查询文章
      keywords: "",
      //查询到的文章总数
      total: 0,
      //查询Id默认为-1，查询所有
      queryParams: {
        pageNum: 1,
        pageSize: 5,
        categoryId: -1,
      },
      //查询到的所有文章列表
      aList: [],
      checkedArticles: [], // 已勾选的文章 ID 列表
    };
  },
  methods: {
    //得到所有文章
    getAllArticles() {
      console.log(this.queryParams);
      allArticleList(this.queryParams).then((response) => {
        this.total = response.total;
        this.aList = response.rows;
      });
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
  },
};
</script>
