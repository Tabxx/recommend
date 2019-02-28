<template>
  <el-row>
    <el-col>

      <el-row>
        <el-col>
          <el-table :data="tableData"
                    border
                    style="width: 100%">
            <el-table-column fixed
                             type="selection"
                             width="55">
            </el-table-column>
            <el-table-column prop="id"
                             label="ID"
                             width="70">
            </el-table-column>
            <el-table-column prop="name"
                             label="名称"
                             width="280">
            </el-table-column>
            <el-table-column prop="brand"
                             label="品牌"
                             width="120">
            </el-table-column>
            <el-table-column prop="price"
                             label="价格"
                             width="120">
            </el-table-column>
            <el-table-column prop="series"
                             label="系列"
                             width="120">
            </el-table-column>
            <el-table-column prop="slot"
                             label="插槽"
                             width="120">
            </el-table-column>
            <el-table-column prop="frequency"
                             label="CPU主频"
                             width="120">
            </el-table-column>
            <el-table-column fixed="right"
                             label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"
                           type="text"
                           size="small">查看</el-button>
                <el-button type="text"
                           size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CPU",
  mounted() {
    this.getCpuList();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    // 获取CPU列表
    getCpuList() {
      this.$api.cpuAPI.getCpuList().then(res => {
        if (res.code === 0 && res.result && res.result.length) {
          this.tableData = res.result;
        }
      });
    }
  },

  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style scoped>
</style>
