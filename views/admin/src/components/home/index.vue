<template>
  <el-row>
    <el-col :span="10">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>硬件分布</span>
        </div>
        <div class="text item">
          <hardware></hardware>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import hardware from '@/components/home/HardWareCharts';
  export default {
    name: 'index',
    components: {
      hardware
    }
  };
</script>

<style scoped>
</style>