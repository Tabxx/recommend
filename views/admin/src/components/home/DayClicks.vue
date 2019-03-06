<template>
  <div id="day-click"
       style="height: 260px;width: 100%">

  </div>
</template>

<script>
export default {
  name: 'DayClicks',
  data() {
    return {
      charts: null,
      data: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$api.chartsAPI.getDayClicks().then(res => {
        if (res.code == 0 && res.result) {
          this.data = res.result;
          this.init();
        }
      });
    },
    init() {
      this.charts = echarts.init(document.getElementById('day-click'));
      let values = [];
      let date = this.data.reduce((total, value, index, arr) => {
        total.push(value.date);
        values.push(value.clicks);
        return total;
      }, []);

      let option = {
        xAxis: {
          type: 'category',
          data: date,
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgba(0, 0, 0, 0.3)'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            data: values,
            type: 'line',
            color: '#2e96ff'
          }
        ],
        tooltip: {
          show: true,
          formatter: '{b0}<br />点击量: {c0}'
        }
      };

      this.charts.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
