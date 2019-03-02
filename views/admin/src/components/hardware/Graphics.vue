<template>
  <el-row>
    <el-col>
      <!-- 操作栏 -->
      <el-row class="mb-15">
        <el-col>
          <el-button>全选</el-button>
          <el-button type="primary"
                     @click="addGraphics">添加</el-button>
          <el-button type="danger">删除</el-button>
        </el-col>
      </el-row>
      <!-- ./操作栏 -->

      <!-- CPU列表 -->
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
                             label="显卡名称"
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
            <el-table-column prop="capacity"
                             label="显存容量"
                             width="120">
            </el-table-column>
            <el-table-column prop="chip"
                             label="显卡芯片"
                             width="180">
            </el-table-column>
            <el-table-column prop="frequency"
                             label="显存频率"
                             width="120">
            </el-table-column>
            <el-table-column prop="existing_type"
                             label="显存类型"
                             width="120">
            </el-table-column>
            <el-table-column prop="type"
                             label="特性"
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
                           @click="delCPU(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

        </el-col>
      </el-row>
      <!-- ./CPU列表 -->

      <el-pagination layout="prev, pager, next"
                     :total="total"
                     :page-size="pageSize"
                     :current-page="page"
                     @current-change="updateData">
      </el-pagination>

      <add-graphics></add-graphics>
    </el-col>
  </el-row>
</template>

<script>
import addGraphics from '@/components/model/AddGraphics.vue';
export default {
  name: 'Graphics',
  components: {
    addGraphics
  },
  created() {
    this.$eventBus.$on('resize', () => {
      this.loading = true;
      this.getGraphicsList();
    });
  },
  mounted() {
    // 获取显卡
    this.getGraphicsList();
  },
  methods: {
    // 获取显卡列表
    getGraphicsList() {
      this.$api.graphicsAPI
        .getGraphicsList(this.page, this.pageSize)
        .then(res => {
          if (res.code === 0 && res.result && res.result.length) {
            this.total = res.msg;
            this.tableData = [];
            for (let item of res.result) {
              // 格式化数据
              item.price = `￥${item.price}`;
              item.capacity = `${item.capacity}GB`;
              item.frequency = `${item.frequency}MHz`;
              this.tableData.push(item);
            }
            this.loading = false;
          } else {
            this.loading = false;
          }
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    // 查看显卡
    handleClick(row) {
      // 初始化弹窗数据
      this.graphicsData = [];
      for (let item in row) {
        this.graphicsData.push({
          value: row[item],
          attr: item
        });
      }
      // 显示模态框
      this.$eventBus.$emit('openDialog', {
        data: this.graphicsData,
        rules: this.rules,
        show: true,
        filter: this.filter
      });
    },
    // 分页数据
    updateData() {
      this.page = page;
      this.getGraphicsList();
    },
    // 添加显卡
    addGraphics() {
      this.$eventBus.$emit('addGraphics');
    },
    // 选中状态改变
    handleSelectionChange() {}
  },
  data() {
    return {
      tableData: [],
      loading: false,
      rules: {
        id: 'ID',
        name: '显卡名称',
        brand: '品牌',
        price: '价格',
        capacity: '显存容量',
        chip: '显卡芯片', //
        image: '图片', //
        type: '类型', // 显卡
        status: '状态',
        chip_type: '显示芯片系列', //
        core_code: '核心代号', //
        cuda: 'CUDA核心(个)', //
        frequency: '显存频率（MHz）', //
        existing_type: '显存类型', //
        bitwide: '显存位宽(Bit)', //
        max_resolution: '最大分辨率', //
        graphics_interface_type: '显卡接口类型',
        io_interface: 'I/O接口', //
        power: '电源', //
        radiating: '散热方式'
      },
      page: 1,
      pageSize: 8,
      total: 0, // 显卡总数
      graphicsData: [],
      filter: ['id', 'image', 'status']
    };
  }
};
</script>

<style scoped>
.mb-15 {
  margin-bottom: 15px;
}
</style>
