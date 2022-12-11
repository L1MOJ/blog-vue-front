<!-- 首页 -->
<template>
  <div>
    <lj-navbar></lj-navbar>
    main page
    <div class="container">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <lj-staredarticles></lj-staredarticles>
        </el-col>
        <el-col :sm="24" :md="8">
          <lj-rightlist></lj-rightlist>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import staredarticles from "../components/staredarticles.vue";
import rightlist from "../components/rightlist.vue";
export default {
  name: "Home",
  data() {
    //选项 / 数据
    return {};
  },
  methods: {
    //事件处理器
  },
  components: {
    //定义组件
    "lj-navbar": header,
    "lj-staredarticles": staredarticles,
    "lj-rightlist": rightlist,
    //'sg-rightlist':rightlist,
  },
  created() {
    //生命周期函数
  },
};
</script>

<style></style>
