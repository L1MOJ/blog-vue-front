<template>
  <div>
    <lj-header></lj-header>

    <div class="container">
      <el-row :gutter="30">
        <el-col
          :sm="24"
          :md="16"
          style="transition: all 0.5s ease-out; margin-bottom: 30px"
        >
          <lj-support></lj-support>
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
import support from "../components/support.vue";
import rightlist from "../components/rightlist.vue";
export default {
  name: "Support",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    "lj-header": header,
    "lj-support": support,
    "lj-rightlist": rightlist,
  },
};
</script>

<style></style>
