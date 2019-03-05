<template>
  <el-dialog title="添加方案"
             :visible.sync="dialogFormVisible">

    <el-steps :active="addActive"
              class="mb-15">
      <el-step title="1 基本内容"></el-step>
      <el-step title="2 硬件选择"></el-step>
      <el-step title="3 完成"></el-step>
    </el-steps>

    <el-form :model="form"
             label-width="120px">
      <template v-if="addActive==1">
        <el-form-item label="方案标题">
          <el-col :span="10">
            <el-input v-model="form.name"
                      autocomplete="off"
                      placeholder="方案标题"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="方案简介">
          <el-col :span="20">
            <el-input type="textarea"
                      :rows="2"
                      placeholder="100字左右"
                      v-model="form.intro"></el-input>
          </el-col>
        </el-form-item>
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
      </template>

      <template v-if="addActive==2">
        <el-form-item label="CPU">
          <el-select v-model="form.cpu"
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in cpu"
                       :key="item.name"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="显卡">
          <el-select v-model="form.graphics"
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in graphics"
                       :key="item.name"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主板">
          <el-select v-model="form.mainboard"
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in mainboard"
                       :key="item.name"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内存条">
          <el-select v-model="form.memory"
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in memory"
                       :key="item.name"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="硬盘">
          <el-select v-model="form.harddisk"
                     filterable
                     placeholder="请选择">
            <el-option v-for="item in harddisk"
                       :key="item.name"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </template>

      <template v-if="addActive==3">
        <el-form-item label="总价">
          <el-input v-model="form.total"
                    :disabled="true">
          </el-input>

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
                 @click="submit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import addItem from '@/mixins/addItem.js';
export default {
  name: 'AddList',
  created() {
    this.getHardWareList();
    this.$eventBus.$on('addList', () => {
      this.dialogFormVisible = true;
    });
  },
  data() {
    return {
      form: {
        name: '',
        intro: '',
        cpu: '',
        graphics: '',
        mainboard: '',
        harddisk: '',
        memory: '',
        total: '',
        image: '',
        tag: [],
        total: 0
      },
      dialogFormVisible: false,
      addActive: 1,
      cpu: [],
      graphics: [],
      mainboard: [],
      memory: [],
      harddisk: []
    };
  },
  methods: {
    // 获取硬件信息列表
    getHardWareList() {
      this.$api.hardwareAPI.getAllList().then(res => {
        if (res.code == 0 && res.result) {
          this.cpu = res.result.cpu;
          this.graphics = res.result.graphics;
          this.mainboard = res.result.mainboard;
          this.harddisk = res.result.harddisk;
          this.memory = res.result.memory;
        }
      });
    },
    // 添加方案
    submit() {
      // 标签参数处理为字符串
      let tags = [];
      this.form.tag.map(item => {
        tags.push(this.tags.find(t => t.name == item).tid);
      });
      this.form.tag = tags.join(',');
      // 总价计算
      this.calcTotal(1);

      this.$api.listAPI.addList(this.form).then(res => {
        if (res.code == 0) {
          this.dialogFormVisible = false;
          // 初始化数据
          this.initData();
          this.$notify({
            title: '成功',
            message: '添加成功，请在列表也刷新查看',
            type: 'success',
            duration: 2000
          });
          this.$eventBus.$emit('resize');
        }
      });
    },
    nextStep() {
      this.addActive++;
      if (this.addActive == 3) {
        this.calcTotal();
      }
    },
    calcTotal(edit) {
      let hardware = ['cpu', 'memory', 'graphics', 'harddisk', 'mainboard'];
      this.$set(this.form, 'total', 0);
      for (let item of hardware) {
        if (this.form[item]) {
          let obj = this[item].find(i => i.id == this.form[item]);
          this.$set(this.form, 'total', this.form.total + obj.price);
          if (edit) {
            this.form[item] = obj.name;
          }
        }
      }
    }
  },
  mixins: [addItem]
};
</script>

<style scoped>
</style>
