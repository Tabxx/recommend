<template>
  <el-row>
    <el-col>
      <!-- 操作栏 -->
      <el-row class="mb-15">
        <el-col>
          <el-button @click="selectAll">全选</el-button>
          <el-button type="primary" @click="addCPU">添加</el-button>
          <el-button type="danger" @click="delCPU()">删除</el-button>
        </el-col>
      </el-row>
      <!-- ./操作栏 -->

      <!-- CPU列表 -->
      <el-row>
        <el-col>
          <el-table :data="tableData" border style="width: 100%" v-loading="loading" @selection-change="handleSelectionChange"
            ref="cputable">
            <el-table-column fixed type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="70">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="280">
            </el-table-column>
            <el-table-column prop="brand" label="品牌" width="120">
            </el-table-column>
            <el-table-column prop="price" label="价格" width="120">
            </el-table-column>
            <el-table-column prop="series" label="系列" width="120">
            </el-table-column>
            <el-table-column prop="slot" label="插槽" width="120">
            </el-table-column>
            <el-table-column prop="frequency" label="CPU主频" width="120">
            </el-table-column>
            <el-table-column prop="process" label="制作工艺" width="120">
            </el-table-column>
            <el-table-column prop="features" label="特性" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <!-- <el-button type="text"
                           size="small"
                           @click="edit(scope.row)">编辑</el-button> -->
                <el-button type="text" size="small" @click="delCPU(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>
      <!-- ./CPU列表 -->

      <el-pagination layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="page"
        @current-change="updateData">
      </el-pagination>

      <!-- 添加CPU弹窗 -->
      <add-cpu></add-cpu>
      <!-- ./添加CPU弹窗 -->
    </el-col>
  </el-row>
</template>

<script>
  import addCpu from '@/components/model/AddCPU.vue';
  import {
    detail
  } from '@/mixins/detail.js';

  export default {
    name: 'CPU',
    mixins: [detail],
    // created() {
    //   this.$eventBus.$on('resize', () => {
    //     this.loading = true;
    //     this.getCpuList();
    //   });
    // },
    // mounted() {
    //   this.getCpuList();
    // },
    // components: {
    //   addCpu
    // },
    // methods: {

    //   // 查看详情
    //   handleClick(row) {
    //     // 初始化弹窗数据
    //     this.cpuData = [];
    //     for (let item in row) {
    //       this.cpuData.push({
    //         value: row[item],
    //         attr: item
    //       });
    //     }
    //     // 显示模态框
    //     this.$eventBus.$emit('openDialog', {
    //       data: this.cpuData,
    //       rules: this.rules,
    //       show: true,
    //       filter: this.filter
    //     });
    //   },
    //   // 获取CPU列表
    //   getCpuList() {
    //     this.$api.cpuAPI
    //       .getCpuList(this.page, this.pageSize)
    //       .then(res => {
    //         if (res.code === 0 && res.result && res.result.length) {
    //           this.total = res.msg;
    //           this.tableData = [];
    //           for (let item of res.result) {
    //             item.price = `￥${item.price}`;
    //             item.frequency = `${item.frequency}GHz`;
    //             this.tableData.push(item);
    //           }
    //           this.loading = false;
    //         } else {
    //           this.loading = false;
    //         }
    //       })
    //       .catch(error => {
    //         console.log(error);
    //         this.loading = false;
    //       });
    //   },
    //   // 添加CPU
    //   addCPU() {
    //     this.$eventBus.$emit('addCpu');
    //   },
    //   // 分页修改数据
    //   updateData(page) {
    //     this.page = page;
    //     this.getCpuList();
    //   },
    //   // 编辑cpu
    //   edit(cpu) {
    //     console.log(cpu);
    //   },
    //   // 选中状态改变
    //   handleSelectionChange(val) {
    //     this.multipleSelection = val;
    //   },
    //   // 全选
    //   selectAll() {
    //     this.tableData.forEach(row => {
    //       this.$refs.cputable.toggleRowSelection(row);
    //     });
    //   },
    //   // 删除cpu
    //   delCPU(row) {
    //     if (row) {
    //       // 逐个删除
    //       this.$api.cpuAPI.delCPU(row.id).then(res => {
    //         if (res.code == 0) {
    //           this.$notify({
    //             title: '成功',
    //             message: '删除成功',
    //             type: 'success'
    //           });
    //           this.getCpuList();
    //         }
    //       });
    //     } else {
    //       // 批量删除
    //       let cid = [];

    //       this.multipleSelection.map(item => cid.push(item.id));
    //       this.$api.cpuAPI.delCPU(cid.join(',')).then(res => {
    //         if (res.code == 0) {
    //           this.$notify({
    //             title: '成功',
    //             message: '删除成功',
    //             type: 'success'
    //           });
    //           // 重新请求数据
    //           this.getCpuList();
    //         } else {
    //           this.$notify({
    //             title: '失败',
    //             message: '删除失败',
    //             type: 'error'
    //           });
    //         }
    //       });
    //     }
    //   }
    // },

    // data() {
    //   return {
    //     tableData: [], // 表格数据
    //     loading: true,
    //     cpuData: [], // cpu详情
    //     rules: {
    //       id: 'ID',
    //       name: 'CPU名称',
    //       brand: '品牌',
    //       price: '价格',
    //       series: '系列',
    //       features: '特性',
    //       slot: '插槽',
    //       tag: '标签',
    //       status: '状态',
    //       image: '图片',
    //       process: '制作工艺',
    //       frequency: 'CPU主频',
    //       core_code: '核心代号',
    //       core_number: '核心数量',
    //       threads_number: '线程数量',
    //       power_consumption: '功耗',
    //       max_memory: '最大内存',
    //       bus_specification: '总线规格',
    //       tree_cache: '三级缓存',
    //       memory_type: '内存类型',
    //       is_Integ_graphics: '是否集成显卡',
    //       graphics_max_frequency: '最大动态频率',
    //       graphice_base_frequency: '基本频率',
    //       Integ_graphics: '集成显卡'
    //     },
    //     filter: ['id', 'image', 'status', 'tag', 'hardware_name'],
    //     total: 0, // cpu总数
    //     page: 1,
    //     pageSize: 8,
    //     multipleSelection: [] // 选中状态
    //   };
    // },
    // beforeDestroy() {
    //   this.$eventBus.$off('resize');
    // }
  };
</script>

<style scoped>
</style>

<style>
</style>