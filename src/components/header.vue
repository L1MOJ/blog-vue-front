<!-- 头部公用 -->
<template>
	<div>
		<el-row>
			<el-col>
				<div>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
						text-color="#fff" :routet="true">
						<el-menu-item index="/Home">首页</el-menu-item>
						<el-menu-item index="/My">我的博客</el-menu-item>
						<el-menu-item index="/Support">赞赏</el-menu-item>
						<el-menu-item index="AboutMe">关于我</el-menu-item>
						<el-menu-item index="Write">写一篇博客吧</el-menu-item>
					</el-menu>

				</div>
			</el-col>
		</el-row>
	</div>

	
</template>
<script>
 export default {
    data() {
      return {
		activeIndex: '/',			//当前的路由模块
      };
    },
    methods: {
		//处理点击不同按钮的函数
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
		this.$router.push({
			path: key
		});
      },

	  routeChange: function() {
		var that = this;
		that.activeIndex = this.$route.path == '/' ? '/Home' : this.$route.path;
	  }
    }
  }
</script>

<style>
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
