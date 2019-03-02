<template>
  <el-row class="tac h-100">
    <el-col class="h-100">
      <el-menu :default-active="path"
               class="el-menu-vertical-demo h-100"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               router>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>硬件管理</span>
          </template>
          <el-menu-item-group v-for="(item, index) of hardware"
                              :key="index">
            <el-menu-item :index="item.url">{{ item.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">方案管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-document"></i>
          <span slot="title">论坛管理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      hardware: [
        { name: 'CPU', url: '/cpu' },
        { name: '显卡', url: '/graphics' },
        { name: '主板', url: '/mainboard' },
        { name: '内存条', url: '/memory' },
        { name: '硬盘', url: '/harddisk' }
      ],
      path: '/'
    };
  },
  watch: {
    $route: {
      handler(newval, oldval) {
        this.path = newval.path;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}
</style>
