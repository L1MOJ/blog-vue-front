<!-- 文章详情 -->
<template>
  <div>
    <lj-nav></lj-nav>
    <div class="container" id="detail">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <lj-detail></lj-detail>
        </el-col>
        <el-col :sm="24" :md="8"> </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import rightlist from "../components/rightlist.vue";
import detailarticle from "../components/detailarticle.vue";

export default {
  data() {
    //选项 / 数据
    return {};
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
    "lj-nav": header,
    "lj-detail": detailarticle,
  },
  created() {
    //生命周期函数
  },
  mounted() {},
};
</script>

<style></style>
