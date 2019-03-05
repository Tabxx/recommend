<template>
  <div id="hard-container"
       style="height: 260px;width: 100%">

  </div>
</template>

<script>
export default {
  name: 'HardWareCharts',
  data() {
    return {
      charts: null, // echarts 对象
      data: [], // 数据
      colors: ['#6EE8CB', '#F5A623', '#FF5646', '#2F97FF', '#2DCDCD'] // 饼图颜色配置
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.chartsAPI.getHardWareCount().then(res => {
        if (res.code == 0 && res.result) {
          for (let item in res.result) {
            // 饼图颜色配置
            res.result[item].itemStyle = {
              color: this.colors[item]
            };
            this.data.push(res.result[item]);
          }
          this.init();
        }
      });
    },
    init() {
      // 初始化节点
      this.charts = echarts.init(document.getElementById('hard-container'));

      // 配置项
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: this.data,
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };

      // 渲染图表
      this.charts.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
