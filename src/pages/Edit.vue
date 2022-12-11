<template>
  <div>
    <lj-header></lj-header>
    <!-- <lj-login></lj-login> -->
    Edit Page
    <lj-edit></lj-edit>
  </div>
</template>

<script>
import header from "../components/header.vue";
import login from "../components/login.vue";
import edit from "../components/edit.vue";
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
  },
};
</script>

<style></style>
