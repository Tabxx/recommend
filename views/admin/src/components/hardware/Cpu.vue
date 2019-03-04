<template>
  <el-row>
    <el-col>
      <!-- 操作栏 -->
      <el-row class="mb-15">
        <el-col>
          <el-button @click="selectAll">全选</el-button>
          <el-button type="primary" @click="addItem">添加</el-button>
          <el-button type="danger" @click="delItem()">删除</el-button>
        </el-col>
      </el-row>
      <!-- ./操作栏 -->

      <!-- CPU列表 -->
      <el-row>
        <el-col>
          <el-table :data="tableData" border style="width: 100%" v-loading="loading" @selection-change="handleSelectionChange"
            fit ref="tablelist">
            <el-table-column fixed type="selection" width="55">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="70">
            </el-table-column>
            <el-table-column prop="name" label="名称" width="280">
            </el-table-column>
            <el-table-column prop="brand" label="品牌" align="center" width="120">
            </el-table-column>
            <el-table-column prop="price" label="价格(元)" align="center" width="120">
            </el-table-column>
            <el-table-column prop="series" label="系列" align="center" width="120">
            </el-table-column>
            <el-table-column prop="slot" label="插槽" align="center" width="120">
            </el-table-column>
            <el-table-column prop="frequency" label="CPU主频(GHz)" align="center" width="120">
            </el-table-column>
            <el-table-column prop="process" label="制作工艺" align="center" width="120">
            </el-table-column>
            <el-table-column prop="features" label="特性" align="center" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <!-- <el-button type="text"
                           size="small"
                           @click="edit(scope.row)">编辑</el-button> -->
                <el-button type="text" size="small" @click="delItem(scope.row)">删除</el-button>
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
  import detail from '@/mixins/detail.js';

  export default {
    name: 'CPU',
    components: {
      addCpu
    },
    data() {
      return {
        rules: {
          id: 'ID',
          name: 'CPU名称',
          brand: '品牌',
          price: '价格',
          series: '系列',
          features: '特性',
          slot: '插槽',
          tag: '标签',
          status: '状态',
          image: '图片',
          process: '制作工艺',
          frequency: 'CPU主频',
          core_code: '核心代号',
          core_number: '核心数量',
          threads_number: '线程数量',
          power_consumption: '功耗',
          max_memory: '最大内存',
          bus_specification: '总线规格',
          tree_cache: '三级缓存',
          memory_type: '内存类型',
          is_Integ_graphics: '是否集成显卡',
          graphics_max_frequency: '最大动态频率',
          graphice_base_frequency: '基本频率',
          Integ_graphics: '集成显卡'
        },
        filter: ['id', 'image', 'status', 'tag', 'hardware_name'],
        url: 'cpu'
      };
    },
    mixins: [detail]
  };
</script>

<style scoped>
</style>