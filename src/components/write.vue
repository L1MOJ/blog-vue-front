<template>
    <div>
    <div>
        <el-dialog title="请先登录" :visible.sync="loginVisible" width="30%">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="user.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="user.pwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login()">登录</el-button>
                    <el-button @click="loginFalse()">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginVisible: true,
            user: {
                name:'',
                pwd:''
            }
            
        };
    },

    mounted() {
        
    },

    methods: {
        login() {
            if (1) {
                alert("success!");
                this.loginVisible = false;
            }
            else {
                this.loginFalse();
            }
        },
        //登录失败则跳转到首页
        loginFalse() {
            console.log("请输入正确的用户名和密码以登录来编辑博客");
            this.$router.push({
			path: '/'
		})
        }
        
    },
};
</script>

<style>

</style>