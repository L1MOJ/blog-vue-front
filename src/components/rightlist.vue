<!-- 右侧固定导航栏 -->
<template>
  <div class="rightlistBox">
   <section>
    <h2 class="ui-label">最新文章</h2>
      <ul>
        <li v-for="item in newArticleList" :key="item.id"> 
        <!-- 去除原点 在后续style中设置 -->
        <a :href="'#/DetailArticle?aid' + item.id">{{item.title}}</a>
        ——{{item.createTime}}
      </li>
      </ul>
    </section>
    <section>
      <h2 class="ui-label">精选文章</h2>
      <ul>
        <li v-for="item in staredArticleList" :key="item.id"> 
        <!-- 去除原点 在后续style中设置 -->
        <a :href="'#/DetailArticle?aid' + item.id">{{item.title}}</a>
        ——{{item.createTime}}
        </li>
      </ul>
   </section>
  </div>
</template>


<script>
import {newArticles, staredArticles} from '../api/article'
export default {
  data() {
    return {
     newArticleList:[],
     staredArticleList:[],
    };
  },
  methods: {
    getList(){
                newArticles().then((response)=>{
                     this.newArticleList=response;               
                })
                staredArticles().then((response)=>{         
                     this.staredArticleList=response;               
                })
            }
    
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
.rightlistBox {
  position: relative;
}
.rightlistBox section {
  transition: all 0.2s linear;
  position: relative;
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.rightlistBox section:hover {
  transform: translate(0, -2px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}
.rightlistBox .rs4 li {
  padding: 8px 0;
  text-align: justify;
}
.rightlistBox .rs4 li a {
  font-weight: 600;
}
.rightlistBox .rs4 li a:hover {
  color: #64609e;
}
</style>
