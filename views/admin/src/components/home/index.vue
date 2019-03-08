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

    <el-col :span="10">
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>标签热度</span>
        </div>
        <div class="text item">
          <tag-map></tag-map>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import hardware from '@/components/home/HardWareCharts';
import DayClicks from '@/components/home/DayClicks';
import TagMap from '@/components/home/TagMap';
export default {
  name: 'index',
  components: {
    hardware,
    DayClicks,
    TagMap
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}
</style>