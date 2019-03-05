<template>
  <el-dialog title="添加CPU" :visible.sync="dialogFormVisible">
    <el-form :model="form" label-width="120px">
      <el-steps :active="addActive" class="mb-15">
        <el-step title="1 重要参数"></el-step>
        <el-step title="2 基础参数"></el-step>
        <el-step title="3 完成"></el-step>
      </el-steps>

      <!-- 重要参数 -->
      <template v-if="addActive==1">
        <el-form-item label="CPU名称">
          <el-input v-model="form.name" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-col :span="10">
            <el-input v-model="form.brand" autocomplete="off" placeholder="AMD" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="系列">
          <el-col :span="10">
            <el-input v-model="form.series" autocomplete="off" placeholder="酷睿i3" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="价格" prop="price" width="100px" placeholder="3999" :rules="[
      { required: true, message: '价格不能为空'},
      { type: 'number', message: '价格必须为数字值'}
    ]">

          <el-col :span="10">
            <el-input type="price" v-model.number="form.price" autocomplete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="CPU主频">
          <el-col :span="10">
            <el-input v-model="form.frequency" autocomplete="off" placeholder="3.6(GHz)" clearable></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="特性">
          <el-select v-model="form.features" placeholder="特性">
            <el-option label="高性能" value="高性能"></el-option>
            <el-option label="中高性能" value="中高性能"></el-option>
            <el-option label="中性能" value="中性能"></el-option>
            <el-option label="中低性能" value="中低性能"></el-option>
            <el-option label="低性能" value="低性能"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="插槽">
          <el-col :span="10">
            <el-input v-model="form.slot" autocomplete="off" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="功耗">
          <el-col :span="6">
            <el-input v-model="form.power_consumption" autocomplete="off" placeholder="90(W)" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="三级缓存">
          <el-col :span="6">
            <el-input v-model="form.tree_cache" autocomplete="off" placeholder="16(M)" clearable></el-input>
          </el-col>
        </el-form-item>
      </template>
      <!-- ./重要参数 -->

      <!-- 基础参数 -->
      <template v-if="addActive==2">
        <el-form-item label="制作工艺">
          <el-col :span="10">
            <el-input v-model="form.process" autocomplete="off" placeholder="14纳米" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="核心代号">
          <el-col :span="10">
            <el-input v-model="form.core_code" autocomplete="off" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="核心数量">
          <el-col :span="10">
            <el-input v-model="form.core_number" autocomplete="off" placeholder="填数字，8" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="线程数量">
          <el-col :span="10">
            <el-input v-model="form.threads_number" autocomplete="off" placeholder="填数字，16表示十六线程" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="最大内存">
          <el-col :span="6">
            <el-input v-model="form.max_memory" autocomplete="off" placeholder="64(GB)" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存类型">
          <el-col :span="20">
            <el-input v-model="form.memory_type" autocomplete="off" placeholder="DDR4 2666MHz" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="总线规格">
          <el-col :span="10">
            <el-input v-model="form.bus_specification" autocomplete="off" placeholder="DMI3 8GT/s" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="标签">
          <el-checkbox-group v-model="form.tag">
            <el-col v-for="(item, index) in tags" :key="index" :span="6">
              <el-checkbox name="type" :label="item.name"></el-checkbox>
            </el-col>
          </el-checkbox-group>
        </el-form-item>
      </template>
      <!-- ./基础参数 -->

      <!-- 完成添加 -->
      <template v-if="addActive==3">
        <el-form-item label="是否集成显卡">
          <el-switch v-model="form.is_Integ_graphics"></el-switch>
        </el-form-item>
        <el-form-item label="集成显卡" v-show="form.is_Integ_graphics">
          <el-col :span="10">
            <el-input v-model="form.Integ_graphics" autocomplete="off" placeholder="英特尔 超核芯显卡 630" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="最大动态频率" v-show="form.is_Integ_graphics">
          <el-col :span="10">
            <el-input v-model="form.graphics_max_frequency" autocomplete="off" placeholder="1.2(GHZ)" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="基本频率" v-show="form.is_Integ_graphics">
          <el-col :span="10">
            <el-input v-model="form.graphice_base_frequency" autocomplete="off" placeholder="350(MHz)" clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload class="upload-demo" action="http://localhost:3000/upload" :on-preview="handlePreview" :on-remove="handleRemove"
            :file-list="fileList" :on-success="upload" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </template>
      <!-- ./完成添加 -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="preStep" v-show="addActive>1">上一步</el-button>
      <el-button type="primary" v-show="addActive<3" @click="nextStep">下一步</el-button>
      <el-button type="primary" v-show="addActive==3" @click="submitCPU">确 定</el-button>
    </div>

  </el-dialog>
</template>

<script>
  import addItem from '@/mixins/addItem.js';

  export default {
    name: 'AddCPU',
    data() {
      return {
        form: {
          name: '',
          brand: '',
          price: '',
          series: '',
          features: '',
          slot: '',
          tag: [],
          image: '',
          process: '',
          frequency: '',
          core_code: '',
          core_number: '',
          threads_number: '',
          power_consumption: '',
          max_memory: '',
          bus_specification: '',
          tree_cache: '',
          memory_type: '',
          is_Integ_graphics: false,
          graphics_max_frequency: '',
          graphice_base_frequency: '',
          Integ_graphics: ''
        },
        url: 'cpu'
      };
    },
    mixins: [addItem]
  };
</script>

<style scoped>
  .unit {
    margin-left: 15px;
  }
</style>