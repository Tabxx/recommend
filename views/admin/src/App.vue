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
          <el-row class="mb-15"
                  v-if="!['/', '/index'].includes($route.path)">
            <el-col>
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-show="navtitle">{{ navtitle }}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>
          <router-view />
        </el-main>
      </el-container>

      <!-- 详情弹窗 -->
      <DetaileInfo></DetaileInfo>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/common/Nav.vue';
import Headbox from '@/components/common/Head.vue';
import DetaileInfo from '@/components/common/DetaileInfo.vue';
export default {
  name: 'app',
  data() {
    return {
      path: '/'
    };
  },
  components: {
    NavTree: Nav,
    Headbox,
    DetaileInfo
  },
  mounted() {
    this.getTags();
  },
  computed: {
    navtitle() {
      let rules = {
        '/cpu': 'CPU管理',
        '/graphics': '显卡管理',
        '/memory': '内存条管理',
        '/harddisk': '硬盘管理',
        '/mainboard': '主板管理',
        '/list': '方案管理'
      };
      return rules[this.$route.path] || '';
    }
  },
  methods: {
    getTags() {
      this.$api.userAPI.getTags().then(res => {
        if (res.code == 0 && res.result && res.result.length) {
          this.$store.commit('setTag', res.result);
        }
      });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  background: rgba(196, 196, 196, 0.4);
  border-radius: 8px;
  height: 30px;
  transition: all 0.4s ease-out;
}
::-webkit-scrollbar-corner {
  background: rgba(48, 48, 48, 0);
}

.mb-15 {
  margin-bottom: 15px;
}
</style>
