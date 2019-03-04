<template>
  <el-dialog title="添加主板"
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
        <el-form-item label="主板名称">
          <el-input v-model="form.name"
                    autocomplete="off"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="品牌">
          <el-col :span="10">
            <el-input v-model="form.brand"
                      autocomplete="off"
                      placeholder="AMD"
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

        <el-form-item label="CPU插槽">
          <el-col :span="10">
            <el-input v-model="form.cpu_slot"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="板型">
          <el-col :span="10">
            <el-input v-model="form.version"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="主芯片组">
          <el-col :span="10">
            <el-input v-model="form.chipset"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显示芯片">
          <el-col :span="20">
            <el-input v-model="form.display_chip"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="音频芯片">
          <el-col :span="20">
            <el-input v-model="form.audio_chips"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
      </template>
      <!-- ./重要参数 -->

      <!-- 基础参数 -->
      <template v-if="addActive==2">
        <el-form-item label="网卡芯片">
          <el-col :span="20">
            <el-input v-model="form.network_chip"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="CPU类型">
          <el-col :span="24">
            <el-input v-model="form.cpu_type"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存类型">
          <el-col :span="10">
            <el-input v-model="form.memory_type"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="内存大小">
          <el-col :span="10">
            <el-input v-model="form.memory_size"
                      autocomplete="off"
                      placeholder="8(GB)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="PCI-E标准">
          <el-col :span="10">
            <el-input v-model="form.pcie"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="PCI-E插槽">
          <el-col :span="20">
            <el-input v-model="form.pcie_slot"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="存储接口">
          <el-col :span="24">
            <el-input v-model="form.storage_interface"
                      autocomplete="off"
                      clearable></el-input>
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
      <!-- ./基础参数 -->

      <!-- 完成添加 -->
      <template v-if="addActive==3">
        <el-form-item label="USB接口">
          <el-col :span="24">
            <el-input v-model="form.usb_interface"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="视频接口">
          <el-col :span="24">
            <el-input v-model="form.video_interface"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="电源接口">
          <el-col :span="24">
            <el-input v-model="form.power_interface"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="供电模式">
          <el-col :span="10">
            <el-input v-model="form.power_mode"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
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
import addItem from '@/mixins/addItem.js';

export default {
  name: 'AddMainBoard',
  data() {
    return {
      form: {
        name: '',
        brand: '',
        price: '',
        cpu_slot: '',
        version: '',
        chipset: '', //
        image: [], //
        display_chip: '', //
        audio_chips: '', //
        network_chip: '', //
        cpu_type: '', //
        memory_type: '', //
        memory_size: '', //
        pcie: '', //
        pcie_slot: '', //
        storage_interface: '', //
        usb_interface: '', //
        video_interface: '', //
        power_interface: '', //
        power_mode: '', //
        tag: []
      },
      url: 'mainboard'
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
