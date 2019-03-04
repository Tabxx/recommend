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

      <!-- 内存条列表 -->
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
                             label="主板名称"
                             width="380">
            </el-table-column>
            <el-table-column prop="brand"
                             label="品牌"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="price"
                             label="价格(元)"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="cpu_slot"
                             label="CPU插槽"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="version"
                             label="版型"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="chipset"
                             label="主芯片组"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="display_chip"
                             label="显示芯片"
                             align="center"
                             width="300">
            </el-table-column>
            <el-table-column prop="audio_chips"
                             label="音频芯片"
                             align="center"
                             width="300">
            </el-table-column>
            <el-table-column prop="network_chip"
                             label="网卡芯片"
                             align="center"
                             width="300">
            </el-table-column>
            <el-table-column prop="cpu_type"
                             label="CPU类型"
                             align="center"
                             width="300">
            </el-table-column>
            <el-table-column prop="memory_type"
                             label="内存类型"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="memory_size"
                             label="内存大小(GB)"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="pcie"
                             label="PCI-E标准"
                             align="center"
                             width="120">
            </el-table-column>
            <el-table-column prop="storage_interface"
                             label="存储接口"
                             align="center"
                             width="200">
            </el-table-column>
            <el-table-column prop="usb_interface"
                             label="USB接口"
                             align="center"
                             width="300">
            </el-table-column>
            <el-table-column prop="video_interface"
                             label="视频接口"
                             align="center"
                             width="300">
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

      <AddMainBoard></AddMainBoard>
    </el-col>
  </el-row>
</template>

<script>
import AddMainBoard from '@/components/model/AddMainBoard';
import detail from '@/mixins/detail.js';

export default {
  name: 'MainBoard',
  components: {
    AddMainBoard
  },
  data() {
    return {
      rules: {
        id: 'ID',
        name: '主板名称',
        brand: '主板品牌',
        price: '价格',
        cpu_slot: 'CPU插槽',
        version: '版型',
        chipset: '主芯片组', //
        image: '图片', //
        status: '状态',
        display_chip: '显示芯片', //
        audio_chips: '音频芯片', //
        network_chip: '网卡芯片', //
        cpu_type: 'CPU类型', //
        memory_type: '内存类型', //
        memory_size: '内存大小', //
        pcie: 'PCI-E标准', //
        pcie_slot: 'PCI-E插槽', //
        storage_interface: '存储接口', //
        usb_interface: 'USB接口', //
        video_interface: '视频接口', //
        power_interface: '电源接口', //
        power_mode: '供电模式', //
        tag: '标签'
      },
      filter: ['id', 'image', 'status', 'hardware_name', 'tag'],
      url: 'mainboard',
      showBlock: [
        'name',
        'display_chip',
        'audio_chips',
        'network_chip',
        'cpu_type',
        'pcie_slot',
        'usb_interface',
        'video_interface',
        'power_interface'
      ]
    };
  },
  mixins: [detail]
};
</script>

<style scoped>
</style>
