<template>
  <div>
    <div>
      <el-dialog
        title="请先登录"
        :visible.sync="loginVisible"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :destroy-on-close="true"
        :show-close="false"
        width="30%"
      >
        <el-form
          :model="userForm"
          :rules="rules"
          ref="userForm"
          label-width="100px"
          class="demo-userForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="userForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="userForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
            <el-button @click="cancelLogin">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { userLogin } from "../api/user";
export default {
  data() {
    return {
      loginVisible: true,
      userForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, message: "长度在1位以上", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    cancelLogin() {
      this.loginFalse();
    },
    login() {
      userLogin(this.userForm.username, this.userForm.password)
        .then((response) => {
          console.log(this.userForm.username);
          console.log(response);
          if (response != null) {
            console.log("Success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //登录失败则跳转到首页
    loginFalse() {
      console.log("请输入正确的用户名和密码以登录来编辑博客");
      this.$router.push({
        path: "/",
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style></style>
