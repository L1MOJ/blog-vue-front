<template>
  <div>
    <div class="eBox">
      <el-row>
        <div class="top-row">
          <el-button class="el-icon-plus" circle @click="add()"></el-button>
          <el-button class="el-icon-delete" circle @click="delArticle()"></el-button>
          <el-button class="el-icon-star-on" circle @click="starArticle()"></el-button>
        </div>
        <div class="input-group">
          <el-input
            v-model="queryParams.content"
            placeholder="输入标题关键字查询"
            size="medium"
          ></el-input>
          <el-button class="el-icon-search" circle @click="handleSearch()"></el-button>
        </div>
      </el-row>

      <el-checkbox-group v-model="checkedArticles">
        <div v-for="article in aList" :key="article.id" class="article-item">
          <el-checkbox :label="article.id">
            {{ article.title }}
          </el-checkbox>
          <img :src="article.thumbnailUrl" alt="" />
          <el-button class="el-icon-edit" @click="editArticle(article)"
            >编辑文章</el-button
          >
        </div>
      </el-checkbox-group>
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

    <!-- 新增文章 -->
    <el-dialog
      title="新增文章"
      :visible.sync="addVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="aArticle" :model="aArticle" :rules="rules" label-width="80px">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="aArticle.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要">
          <el-input type="textarea" v-model="aArticle.summary"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="category">
          <el-row>
            <el-col :span="10"
              ><el-input v-model="aCategory" placeholder="新增类名"></el-input
            ></el-col>
            <el-col :span="5">
              <el-button @click="addCategory()" :disabled="isAddDisabled"
                >增加</el-button
              ></el-col
            >
          </el-row>

          <el-select v-model="aArticle.categoryId" placeholder="请选择文章分类">
            <el-option
              v-for="category in categoryList"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="aArticle.content"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-col :span="11">
            <el-date-picker
              type="datetime"
              placeholder="选择日期"
              v-model="aArticle.createTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitAdd()" :disabled="aSubmitDisabled">增加</el-button>
          <el-button @click="cancelaForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 编辑文章 -->
    <el-dialog
      title="编辑文章"
      :visible.sync="editVisible"
      width="30%"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form ref="eArticle" :model="eArticle" :rules="rules" label-width="80px">
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="eArticle.title"></el-input>
        </el-form-item>

        <el-form-item label="摘要">
          <el-input type="textarea" v-model="eArticle.summary"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="category">
          <el-row>
            <el-col :span="10"
              ><el-input v-model="aCategory" placeholder="新增类名"></el-input
            ></el-col>
            <el-col :span="5">
              <el-button @click="addCategory()" :disabled="isAddDisabled"
                >增加</el-button
              ></el-col
            >
          </el-row>

          <el-select v-model="eArticle.categoryId" placeholder="请选择文章分类">
            <el-option
              v-for="category in categoryList"
              :key="category.id"
              :label="category.name"
              :value="category.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <el-input type="textarea" v-model="eArticle.content"></el-input>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-col :span="11">
            <el-date-picker
              type="datetime"
              placeholder="选择日期"
              v-model="eArticle.createTime"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>

        <el-form-item>
          <el-button @click="submitEdit()" :disabled="eSubmitDisabled">修改</el-button>
          <el-button @click="canceleForm()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  allArticleList,
  delArticles,
  getArticle,
  editArticle,
  addArticle,
  starArticles,
} from "../api/article";
import { getCategoryList, addCat } from "../api/category";
export default {
  data() {
    return {
      //表单验证规则
      rules: {
        title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
        category: [{ required: true, message: "请选择文章类别", trigger: "blur" }],
        createTime: [{ required: true, message: "请输入创建时间", trigger: "blur" }],
      },
      //新增分类
      aCategory: "",
      //查询文章
      keywords: "",
      //查询到的文章总数
      total: 0,
      //查询Id默认为-1，查询所有
      queryParams: {
        pageNum: 1,
        pageSize: 5,
        categoryId: -1,
        content: "",
      },
      //查询到的所有文章列表
      aList: [],
      checkedArticles: [], // 已勾选的文章 ID 列表
      //将查询出的类名储存
      categoryList: [],
      //表单显示
      editVisible: false,
      addVisible: false,

      //需要编辑的文章
      eArticle: {},
      //增加的文章
      aArticle: {},
    };
  },
  computed: {
    isAddDisabled() {
      return !this.aCategory;
    },
    eSubmitDisabled() {
      return (
        !this.eArticle.title && !this.eArticle.createTime && !this.eArticle.categoryId
      );
    },
    aSubmitDisabled() {
      return (
        !this.aArticle.title && !this.aArticle.createTime && !this.aArticle.categoryId
      );
    },
  },
  methods: {
    cancelaForm() {
      this.aArticle = {};
      this.addVisible = false;
    },
    canceleForm() {
      this.aCategory = "";
      this.editVisible = false;
    },
    //增加分类类别
    addCategory() {
      addCat(this.aCategory)
        .then((response) => {
          console.log(response);
          this.aCategory = "";
          this.getCategory();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //得到所有文章类别
    getCategory() {
      getCategoryList().then((response) => {
        this.categoryList = response;
      });
    },
    //编辑文章
    editArticle(article) {
      this.editVisible = true;
      getArticle(article.id).then((response) => {
        //console.log(response);
        this.eArticle = response;
        //console.log(this.eArticle);
      });
    },
    //提交修改
    submitEdit() {
      editArticle(this.eArticle).then((response) => {
        //console.log(response);
      });
      //刷新页面
      this.editVisible = false;
      this.getAllArticles();
      alert("修改成功");
      this.getCategory();
    },
    //按钮提交新增文章
    submitAdd() {
      addArticle(this.aArticle).then((response) => {
        console.log(response);
        this.aArticle = {};
      });
      this.addVisible = false;
      this.getAllArticles();
      alert("添加成功");
      this.getCategory();
    },
    //增加
    add() {
      this.addVisible = true;
    },
    //精选文章，在主页和侧边栏展示
    starArticle() {
      if (this.checkedArticles.length) {
        starArticles(this.checkedArticles).then((response) => {
          console.log("精选内容已修改");
        });
      }
    },
    //删除文章
    delArticle() {
      console.log(this.checkedArticles.length);
      //若没勾选，则不删除
      if (this.checkedArticles.length) {
        delArticles(this.checkedArticles).then((response) => {
          console.log("删除成功");
        });
      }
      this.getAllArticles();
    },
    //得到所有文章
    getAllArticles() {
      console.log(this.queryParams);
      allArticleList(this.queryParams).then((response) => {
        console.log(response);
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
    handleSearch() {
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
.eBox {
  width: 800px;
  margin-left: 800px;
  font-size: 50px;
}
.el-input {
  width: 200px;
}

.el-pager li.active {
  color: #fffbeb !important; /*仅设置active时的文字颜色*/
  background-color: #495579;
  border-color: #fffbeb;
}
.page {
  /* left: 60%; */
  /* transform: translate(60%, 0); */
  bottom: 0;
  margin-left: 250px;
}
.el-button {
  background-color: #fffbeb;
  color: #495579;
  border-color: #495579;
}
</style>
