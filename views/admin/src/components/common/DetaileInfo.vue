<template>
  <!-- 详情模态框 -->
  <el-dialog title="详细信息"
             :visible.sync="dialogFormVisible"
             v-if="detail">

    <el-form :inline="true"
             label-width="120px">
      <el-row>
        <el-col v-for="(attr, index) in detail"
                :span="showBlock && showBlock.includes(attr.attr)?24:12"
                :key="index">
          <template v-if="!hide.includes(attr.attr)">
            <el-form-item :label="((rules && rules[attr.attr]) || attr.attr)+'：'">
              {{ attr.value||'未知' }}
            </el-form-item>
          </template>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
  <!-- ./详情模态框 -->
</template>

<script>
export default {
  name: 'DetailInfo',
  created() {
    this.$eventBus.$on('openDialog', data => {
      this.init(data);
    });
  },
  data() {
    return {
      dialogFormVisible: false,
      detail: [], // 硬件详情
      rules: null, // 字段-> 文本
      hide: [], // 隐藏字段
      showBlock: [] // 单行显示字段
    };
  },
  methods: {
    init(data) {
      this.dialogFormVisible = data.show;
      this.detail = data.data;
      this.rules = data.rules;
      this.showBlock = data.block;
      this.hide = data.filter || [];
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('openDialog');
  }
};
</script>

<style scoped>
</style>
