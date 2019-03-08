<template>
  <div id='TagMap-container'
       style="height: 300px;width: 100%">

  </div>
</template>

<script>
export default {
  name: 'TagMap',

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
      this.$api.chartsAPI.getUseTag().then(res => {
        if (res.code == 0 && res.result) {
          this.data = res.result;
          this.init();
        }
      });
    },
    init() {
      this.charts = echarts.init(document.getElementById('TagMap-container'));

      let option = {
        series: [
          {
            type: 'treemap',
            data: this.data,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            breadcrumb: {
              show: false
            },
            tooltip: {
              position: [10, 10]
            }
          }
        ]
      };

      this.charts.setOption(option);
    }
  }
};
</script>

<style scoped>
</style>
