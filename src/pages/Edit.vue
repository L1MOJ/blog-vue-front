<template>
  <div>
    <lj-header></lj-header>
    <lj-login></lj-login>
    <div class="container">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <lj-edit></lj-edit>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import header from "../components/header.vue";
import login from "../components/login.vue";
import edit from "../components/edit.vue";
import rightlist from "../components/rightlist.vue";
export default {
  name: "Write",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    "lj-header": header,
    "lj-login": login,
    "lj-edit": edit,
    "lj-rightlist": rightlist,
  },
};
</script>

<style></style>
