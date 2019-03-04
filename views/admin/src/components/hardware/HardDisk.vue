<template>
  <el-row>
    <el-col>
      <!-- 操作栏 -->
      <el-row class="mb-15">
        <el-col>
          <el-button>全选</el-button>
          <el-button type="primary"
                     @click="addItem">添加</el-button>
          <el-button type="danger"
                     @click="delItem()">删除</el-button>
        </el-col>
      </el-row>
      <!-- ./操作栏 -->

      <!-- 硬盘列表 -->
      <el-row>
        <el-col>
          <el-table :data="tableData"
                    border
                    style="width: 100%"
                    v-loading="loading"
                    @selection-change="handleSelectionChange"
                    ref="cputable">
            <el-table-column fixed
                             type="selection"
                             width="55">
            </el-table-column>
            <el-table-column prop="id"
                             label="ID"
                             width="70">
            </el-table-column>
            <el-table-column prop="name"
                             label="硬盘名称"
                             width="480">
            </el-table-column>
            <el-table-column prop="brand"
                             label="品牌"
                             width="120">
            </el-table-column>
            <el-table-column prop="price"
                             label="价格"
                             width="120">
            </el-table-column>
            <el-table-column prop="capacity"
                             label="硬盘容量"
                             width="120">
            </el-table-column>
            <el-table-column prop="speed"
                             label="转速"
                             width="120">
            </el-table-column>
            <el-table-column prop="cache"
                             label="缓存"
                             width="120">
            </el-table-column>
            <el-table-column prop="interface_rate"
                             label="接口速率"
                             width="120">
            </el-table-column>
            <el-table-column prop="interface_type"
                             label="接口类型"
                             width="120">
            </el-table-column>
            <el-table-column fixed="right"
                             label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)"
                           type="text"
                           size="small">查看</el-button>
                <!-- <el-button type="text"
                           size="small"
                           @click="edit(scope.row)">编辑</el-button> -->
                <el-button type="text"
                           size="small"
                           @click="delItem(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>
      <!-- ./内存条列表 -->

      <el-pagination layout="prev, pager, next"
                     :total="total"
                     :page-size="pageSize"
                     :current-page="page"
                     @current-change="updateData">
      </el-pagination>

      <AddHardDisk></AddHardDisk>
    </el-col>
  </el-row>
</template>

<script>
import AddHardDisk from '@/components/model/AddHarddisk.vue';
import detail from '@/mixins/detail.js';

export default {
  name: 'HardDisk',
  components: {
    AddHardDisk
  },
  data() {
    return {
      rules: {
        id: 'ID',
        name: '名称', //
        brand: '品牌', //
        price: '价格', // 价格
        capacity: '容量', //
        cache: '缓存', //
        speed: '转速', //
        image: '图片', //
        status: '状态',
        interface_type: '接口类型', //
        interface_rate: '接口速率', // 6Gb/秒
        power: '功率', //
        tag: '标签'
      },
      filter: ['id', 'image', 'status', 'hardware_name', 'tag'],
      url: 'harddisk'
    };
  },
  mixins: [detail]
};
</script>

<style scoped>
.mb-15 {
  margin-bottom: 15px;
}
</style>
