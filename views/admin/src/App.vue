<template>
  <div id="app">
    <el-container style="height: 100vh;">
      <el-header>
        <Headbox></Headbox>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-tree></nav-tree>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
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
    NavTree: Nav,
    Headbox
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
  height: 100vh;
}

.el-header {
  padding: 0 !important;
}
</style>
