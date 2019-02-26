<template>
  <div id="app">
    <el-container>
      <el-header>

      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-tree></nav-tree>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import Headbox from "@/components/common/Head.vue";
export default {
  name: "app",
  components: {
    NavTree: Nav
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
