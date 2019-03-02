<template>
  <el-dialog title="添加显卡"
             :visible.sync="dialogFormVisible">
    <el-form :model="form"
             label-width="120px">
      <el-steps :active="addActive"
                class="mb-15">
        <el-step title="1 重要参数"></el-step>
        <el-step title="2 基础参数"></el-step>
        <el-step title="3 完成"></el-step>
      </el-steps>

      <!-- 重要参数 -->
      <template v-if="addActive==1">
        <el-form-item label="内存条名称">
          <el-input v-model="form.name"
                    autocomplete="off"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-col :span="10">
            <el-input v-model="form.brand"
                      autocomplete="off"
                      placeholder="影驰"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="价格"
                      prop="price"
                      width="100px"
                      placeholder="3999"
                      :rules="[
      { required: true, message: '价格不能为空'},
      { type: 'number', message: '价格必须为数字值'}
    ]">

          <el-col :span="10">
            <el-input type="price"
                      v-model.number="form.price"
                      autocomplete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存容量">
          <el-col :span="10">
            <el-input v-model="form.capacity"
                      autocomplete="off"
                      placeholder="11(GB)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显卡类型">
          <el-col :span="10">
            <el-input v-model="form.type"
                      autocomplete="off"
                      placeholder="GDDR6"
                      clearable></el-input>
          </el-col>
        </el-form-item>

      </template>
      <!-- ./重要参数 -->

      <!-- 基础参数 -->
      <template v-if="addActive==2">
        <el-form-item label="针脚数">
          <el-col :span="10">
            <el-input v-model="form.stitch_count"
                      autocomplete="off"
                      placeholder="288pin"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="插槽类型">
          <el-col :span="10">
            <el-input v-model="form.slot_type"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="插槽延迟">
          <el-col :span="10">
            <el-input v-model="form.cl_delay"
                      autocomplete="off"
                      placeholder="三风扇散热"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存主频">
          <el-col :span="10">
            <el-input v-model="form.frequency"
                      autocomplete="off"
                      placeholder="2400(MHz)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
      </template>
      <!-- ./基础参数 -->

      <!-- 完成添加 -->
      <template v-if="addActive==3">
        <el-form-item label="标签">
          <el-checkbox-group v-model="form.tag">
            <el-col v-for="(item, index) in tags"
                    :key="index"
                    :span="6">
              <el-checkbox name="type"
                           :label="item.name"></el-checkbox>
            </el-col>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="工作电压">
          <el-col :span="10">
            <el-input v-model="form.work_voltage"
                      autocomplete="off"
                      placeholder="12(V)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="是否有散热片">
          <el-switch v-model="form.radiating"></el-switch>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload class="upload-demo"
                     action="http://localhost:3000/upload"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :file-list="fileList"
                     :on-success="upload"
                     list-type="picture">
            <el-button size="small"
                       type="primary">点击上传</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </template>
      <!-- ./完成添加 -->
    </el-form>
    <div slot="footer"
         class="dialog-footer">
      <el-button @click="preStep"
                 v-show="addActive>1">上一步</el-button>
      <el-button type="primary"
                 v-show="addActive<3"
                 @click="nextStep">下一步</el-button>
      <el-button type="primary"
                 v-show="addActive==3"
                 @click="submitCPU">确 定</el-button>
    </div>

  </el-dialog>
</template>

<script>
export default {
  name: 'AddMemory',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '', // 内存条名称
        brand: '', // 品牌
        price: '', // 价格
        type: '', // 类型
        capacity: '', // 内存容量
        image: '', // 图片
        frequency: '', // 主频
        stitch_count: '', // 针脚数pin
        slot_type: '', // 插槽类型
        cl_delay: '', // 插槽延迟
        work_voltage: '', // 工作电压（V）
        radiating: false, // 是否有散热片，1-有，0-没有
        tag: []
      },
      addActive: 1,
      fileList: []
    };
  },
  created() {
    this.$eventBus.$on('addMemory', () => {
      this.init();
    });
  },
  computed: {
    tags() {
      return this.$store.state.Tag;
    }
  },
  methods: {
    init() {
      this.dialogFormVisible = true;
    },
    // 下一步
    nextStep() {
      this.addActive++;
    },
    // 上一步
    preStep() {
      this.addActive--;
    },
    // 提交表单
    submitCPU() {
      // 标签参数处理为字符串
      let tags = [];
      this.form.tag.map(item => {
        tags.push(this.tags.find(t => t.name == item).tid);
      });
      this.form.tag = tags.join(',');
      this.form.radiating = Number(this.form.radiating);

      this.$api.memoryAPI.createMemory(this.form).then(res => {
        if (res.code == 0) {
          this.dialogFormVisible = false;
          // 初始化数据
          this.initData();
          this.$notify({
            title: '成功',
            message: '显卡添加成功，请在列表也刷新查看',
            type: 'success'
          });
          this.$eventBus.$emit('resize');
        }
      });
    },
    // 初始化数据
    initData() {
      this.form = {
        name: '', // 内存条名称
        brand: '', // 品牌
        price: '', // 价格
        type: '', // 类型
        capacity: '', // 内存容量
        image: '', // 图片
        frequency: '', // 主频
        stitch_count: '', // 针脚数pin
        slot_type: '', // 插槽类型
        cl_delay: '', // 插槽延迟
        work_voltage: '', // 工作电压（V）
        radiating: false, // 是否有散热片，1-有，0-没有
        tag: []
      };
      this.addActive = 1;
      this.fileList = [];
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    upload(response, file, fileList) {
      this.form.image = `http://localhost:3000${response.result}`;
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('addMemory');
  }
};
</script>

<style scoped>
.unit {
  margin-left: 15px;
}
</style>
