<template>
  <el-row>
    <el-col :span="10">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>硬件分布</span>
        </div>
        <div class="text item">
          <hardware></hardware>
        </div>
      </el-card>
    </el-col>

    <el-col :span="10"
            :offset="2">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>用户日点击量</span>
        </div>
        <div class="text item">
          <day-clicks></day-clicks>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import hardware from '@/components/home/HardWareCharts';
import DayClicks from '@/components/home/DayClicks';
export default {
  name: 'index',
  components: {
    hardware,
    DayClicks
  }
};
</script>

<style scoped>
</style>