<template>
  <el-row>
    <el-col>
      <!-- 操作栏 -->
      <el-row class="mb-15">
        <el-col>
          <el-button>全选</el-button>
          <el-button type="primary"
                     @click="addMemory">添加</el-button>
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
export default {
  name: 'HardDisk',
  components: {
    AddHardDisk
  },
  created() {
    this.$eventBus.$on('resize', () => {
      this.loading = true;
      this.getData();
    });
  },
  mounted() {
    // 获取内存条
    this.getData();
  },
  methods: {
    // 获取内存条列表
    getData() {
      this.$api.harddiskAPI
        .getHarddiskList(this.page, this.pageSize)
        .then(res => {
          if (res.code === 0 && res.result && res.result.length) {
            this.total = res.msg;
            this.tableData = [];
            for (let item of res.result) {
              // 格式化数据
              item.price = `￥${item.price}`;
              item.capacity = `${item.capacity}GB`;
              item.interface_rate = `${item.interface_rate}Gb/秒`;
              item.cache = `${item.cache}M`;
              item.speed = `${item.speed}rpm`;
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
    // 查看内存条
    handleClick(row) {
      // 初始化弹窗数据
      this.memoryData = [];
      for (let item in row) {
        this.memoryData.push({
          value: row[item],
          attr: item
        });
      }
      // 显示模态框
      this.$eventBus.$emit('openDialog', {
        data: this.memoryData,
        rules: this.rules,
        show: true,
        filter: this.filter
      });
    },
    // 分页数据
    updateData(page) {
      this.page = page;
      this.getData();
    },
    // 添加显卡
    addMemory() {
      this.$eventBus.$emit('addHardDisk');
    },
    // 删除数据
    delItem(row) {
      let cid = null;

      if (!row) {
        cid = [];
        this.multipleSelection.map(item => cid.push(item.id));
        cid = cid.join(',');
      } else {
        cid = row.id;
      }

      this.$api.harddiskAPI.delHarddisk(cid).then(res => {
        if (res.code == 0) {
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success'
          });
          // 重新请求数据
          this.getData();
        } else {
          this.$notify({
            title: '失败',
            message: '删除失败',
            type: 'error'
          });
        }
      });
    },
    // 选中状态改变
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  data() {
    return {
      tableData: [],
      loading: true,
      rules: {
        "id": "ID",
            "name": "名称",   // 
            "brand": "品牌",    // 
            "price": "价格",   // 价格
            "capacity": "容量",    // 
            "cache": "缓存",    // 
            "speed": "转速",  // 
            "image": "图片",  // 
            "status": "状态",
            "interface_type": "接口类型",    // 
            "interface_rate": "接口速率",    // 6Gb/秒
            "power": '功率',    //
            "tag":"标签" 
      },
      page: 1,
      pageSize: 8,
      total: 0, // 显卡总数
      memoryData: [],
      multipleSelection: [],
      filter: ['id', 'image', 'status', 'hardware_name', 'tag']
    };
  }
};
</script>

<style scoped>
.mb-15 {
  margin-bottom: 15px;
}
</style>
