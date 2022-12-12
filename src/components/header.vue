<!-- 头部公用 -->
<template>
  <div>
    <div class="top">
      <el-row>
        <el-col>
          <div class="header">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              :routet="true"
            >
              <el-menu-item index="/Home">首页</el-menu-item>
              <el-menu-item index="/My">我的博客</el-menu-item>
              <el-menu-item index="/Support">赞赏</el-menu-item>
              <el-menu-item index="Edit">编辑</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
    <div
      class="headImgBox"
      :style="{
        backgroundImage: 'url(static/img/bg.jpg)',
      }"
    >
      <div class="scene">
        <div><span id="luke"></span></div>
      </div>
      <div class="h-information">
        <img :src="'static/img/Zi.jpg'" alt="" />

        <h2 class="h-description">日短心长</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/", //当前的路由模块
    };
  },
  methods: {
    //处理点击不同按钮的函数
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        path: key,
      });
    },

    routeChange: function () {
      var that = this;
      that.activeIndex = this.$route.path == "/" ? "/Home" : this.$route.path;
    },
  },
  mounted() {},
};
</script>

<style>
.top {
  width: 100%;
  background: #495579;
  /*margin-bottom:30px;*/
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
}
.el-menu {
  display: flex;
  justify-content: center;
}

.header .el-menu {
  background: transparent;
  border-bottom: none !important;
}

.header li.el-menu-item,
.header {
  height: 38px;
  line-height: 38px;
  border-bottom: none !important;
}

.header ul li.el-menu-item,
.header ul li.el-menu-item.is-active,
.header ul li.el-menu-item:hover {
  color: #fff;
}

.header .el-menu--horizontal > .el-menu {
  top: 38px;
  border: none;
  padding: 0;
}

.header > ul li.el-menu-item:hover,
.header > .el-submenu__title {
  background: #263159;
  border-bottom: none;
}

/*背景图*/

.headImgBox {
  height: 650px;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
  margin-bottom: 90px;
}

.h-information {
  text-align: center;
  width: 70%;
  margin: auto;
  position: relative;
  top: 480px;
  padding: 40px 0;
  font-size: 16px;
  opacity: 0.98;
  background: rgba(230, 244, 249, 0.8);
  border-radius: 5px;
  z-index: 1;
  animation: b 1s ease-out;
  -webkit-animation: b 1s ease-out;
}

.h-information img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
}

.h-information h2 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 700;
  /*font-family: 'Sigmar One';*/
}
.h-information h2 a {
  background: linear-gradient(to right, #df2050, #48456d);
  -webkit-background-clip: text;
  color: transparent;
}
body {
  background-color: #fffbeb;
}
</style>
