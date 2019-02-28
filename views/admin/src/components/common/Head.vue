<template>
  <el-row>
    <el-col :span="24">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="0"
                      class="web-name">计算机硬件配置推荐系统</el-menu-item>

        <el-submenu index="1"
                    class="user-info">
          <template slot="title">管理员</template>
          <el-menu-item index="1-1">修改资料</el-menu-item>
          <el-menu-item index="1-1">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-header {
  padding: 0 !important;
}

.web-name {
  font-size: 18px;
}

.user-info {
  float: right !important;
}
</style>
