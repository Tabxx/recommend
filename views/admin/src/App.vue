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

      <!-- 详情弹窗 -->
      <DetaileInfo></DetaileInfo>
    </el-container>
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import Headbox from "@/components/common/Head.vue";
import DetaileInfo from "@/components/common/DetaileInfo.vue";
export default {
  name: "app",
  components: {
    NavTree: Nav,
    Headbox,
    DetaileInfo
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

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: rgba(221, 221, 221, 0.1);
}
::-webkit-scrollbar-thumb {
  background: rgba(48, 48, 48, 0.4);
  border-radius: 8px;
  height: 30px;
  transition: all 0.4s ease-out;
}
::-webkit-scrollbar-corner {
  background: rgba(48, 48, 48, 0);
}
</style>
