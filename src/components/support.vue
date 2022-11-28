<template>

    <div class="tRewardBox">
        <h1>扫一扫请我喝奶茶</h1>
        <el-row :gutter="30">
            <el-col :span="12" class="donate-item">
                <div class="donate-tip">
                    <img :src="
                        rewardData.wechat_image
                            ? rewardData.wechat_image
                            : 'static/img/Wechat.JPG'
                    " :onerror="$store.state.errorImg" />
                </div>
            </el-col>
            <el-col :span="12" class="donate-item">
                <div class="donate-tip">
                    <img :src="
                        rewardData.alipay_image
                            ? rewardData.alipay_image
                            : 'static/img/Alipay.JPG'
                    " :onerror="$store.state.errorImg" />
                </div>
            </el-col>
        </el-row>
        <h1>@赞赏记录：</h1>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="money" label="金额">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
import ref from 'vue'
export default {
   
    data() {
        return {
            rewardData: "",  //赞赏二维码
            tableData: [],
           
        }
    },

    created() {
        axios.get("/Support").then(res => {
            console.log(res.data)
            this.tableData=res.data.data;
        })
        
    },

    methods: {
        
    },
};
</script>

<style>

.tRewardBox .donate-item {
  text-align: right;
}
.tRewardBox .donate-item:last-child {
  text-align: left;
}
.tRewardBox .donate-item img {
  width: 100%;
  display: block;
  height: auto;
}
.tRewardBox .donate-item .donate-tip{
  display: inline-block;
  width: 150px;
  padding: 0 6px;
  text-align: center;
  box-sizing: border-box;
}

</style>