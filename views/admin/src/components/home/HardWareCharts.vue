<template>
  <div id="hard-container" style="height: 260px;width: 100%">

  </div>
</template>

<script>
  export default {
    name: 'HardWareCharts',
    data() {
      return {
        charts: null,
        data: [],
        colors: ['#6EE8CB', '#F5A623', '#FF5646', '#2F97FF', '#2DCDCD']
      };
    },
    mounted() {
      this.getData();
      // this.init();
    },
    methods: {
      getData() {
        this.$api.chartsAPI.getHardWareCount().then(res => {
          if (res.code == 0 && res.result) {
            for (let item in res.result) {
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
        let _this = this;
        this.charts = echarts.init(document.getElementById('hard-container'));

        let option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: _this.data,
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }]
        };

        this.charts.setOption(option);
      }
    }
  };
</script>

<style scoped>
</style>