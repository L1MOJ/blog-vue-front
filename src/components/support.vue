<template>

    <div class="tRewardBox">
        <h1>扫一扫请我喝奶茶</h1>
        <el-row :gutter="30">
            <el-col :span="12" class="donate-item">
                <div class="donate-tip">
                    <img :src="
                        rewardData.wechat_image
                            ? rewardData.wechat_image
                            : 'static/img/Wechat.jpg'
                    " :onerror="$store.state.errorImg" />
                </div>
            </el-col>
            <el-col :span="12" class="donate-item">
                <div class="donate-tip">
                    <img :src="
                        rewardData.alipay_image
                            ? rewardData.alipay_image
                            : 'static/img/Alipay.jpg'
                    " :onerror="$store.state.errorImg" />
                </div>
            </el-col>
        </el-row>
        <h1>@赞赏记录：</h1>
        <el-table :data="donatorData" border style="width: 100%">
            <el-table-column prop="donateTime" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="money" label="金额">
            </el-table-column>
        </el-table>
        <el-button type="info" plain @click="dialogVisible = true">添加打赏人</el-button>
        <el-dialog :visible.sync="dialogVisible" width="30%">
            <span>您给钱了吗</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">。。。</el-button>
                <el-button type="primary" @click="addForm()">给了</el-button>
            </span>
        </el-dialog>

        <el-dialog title="" :visible.sync="addFormVisible" width="30%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="打赏人">
                    <el-input v-model="donator.name"></el-input>
                </el-form-item>
                <el-form-item label="打赏金额">
                    <el-input v-model="donator.money"></el-input>
                </el-form-item>
                <el-form-item label="打赏时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="donator.donateTime" style="width: 100%;">
                        </el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                    <el-button @click="addFormVisible=false">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script>
import axios from 'axios'
import {donatorList} from '../api/support'
export default {
   
    data() {
        return {
            rewardData: "",  //赞赏二维码
            queryParams: {
                    pageNum: 1,
                    pageSize: 4,
                },
            //所有打赏人的数据
            donatorData: [],
            dialogVisible: false,
            addFormVisible: false,
            //储存打赏人的数据
            donator: {
                name: '',
                money: '',
                donateTime: ''
            }
        }
    },

    methods: {
        addForm() {
            this.dialogVisible = false;
            this.addFormVisible = true;
        },
        onSubmit() {
            console.log('submit!');
        },
        getDonators(){
            console.log(this.queryParams)
            donatorList(this.queryParams).then((response)=>{
                console.log(response.rows)
                this.donatorData = this.donatorData.concat(response.rows)
                if(response.total<=this.donatorData.length){

                    }else{
                        this.queryParams.pageNum++
                    }
            })
        }
    },
    created() {
        // axios.get("/Support").then(res => {
        //     console.log(res.data)
        //     this.donatorData=res.data.data;
        // })
        var that = this;
        that.getDonators();
        
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