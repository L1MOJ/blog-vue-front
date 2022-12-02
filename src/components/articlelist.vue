<!-- 文章列表 -->
<template>
    <el-row class="sharelistBox">

        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in articleList" :key="'article'+index">
            <span class="s-round-date">
                <!-- <span class="month" v-html="showInitDate(item.createTime,'month')+'月'"></span>
                <span class="day" v-html="showInitDate(item.createTime,'date')"></span> -->
            </span>
            <header>
            <h1>
                {{item.title}}
            </h1>
            
                {{item.summary}}
           
                <!-- <h1>
                    <a :href="'#/DetailArticle?aid='+item.id" target="_blank">
                        {{item.title}}
                    </a>
                </h1>
                <h2>
                    <i class="fa fa-fw fa-user"></i>发表于
                    <i class="fa fa-fw fa-clock-o"></i><span v-html="showInitDate(item.createTime,'all')">{{showInitDate(item.createTime,'all')}}</span> •
                    <i class="fa fa-fw fa-eye"></i>{{item.viewCount}} 次围观 •

                </h2> -->
                <!-- <div class="ui label">
                    <a :href="'#/Share?classId='+item.class_id">{{item.categoryName}}</a>
                </div> -->
            </header>
            <div class="article-content">
                <p style="text-indent:2em;">
                    <!-- {{item.summary}} -->
                </p>
                <!-- <p  style="max-height:300px;overflow:hidden;text-align:center;">
                    <img :src="item.thumbnail" alt="" class="maxW">
                </p> -->
            </div>
            <!-- <div class="viewdetail">
                <a class="tcolors-bg" :href="'#/DetailArticle?aid='+item.id" target="_blank">
                    阅读全文>>
                </a>
            </div> -->

        </el-col>
         <el-col class="viewmore">

        </el-col>
    </el-row>
</template>

<script>
import {initDate} from '../utils/server.js'
import axios from 'axios'
import {articleList, staredArticles} from '../api/article'
    export default {
        name:'Share',
        data() { //选项 / 数据
            return {
                articleList:[],

            }
        },

        methods: { 
            getList(){
                staredArticles().then((response)=>{
                    // console.log(response);
                    // console.log(articleList);
                     this.articleList=response;               
                })
                
            }
        },
        components: { //定义组件

        },
        watch: {
      
         },
        created() { 
            var that = this;
            that.getList();
        //     axios.get("/article/staredArticles").then(res => {
        //     this.articleList=res.data.data;
            
        // })
        }
    }
</script>

<style>

</style>
