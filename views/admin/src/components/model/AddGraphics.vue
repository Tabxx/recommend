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
        <el-form-item label="显卡名称">
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
        <el-form-item label="显存容量">
          <el-col :span="10">
            <el-input v-model="form.capacity"
                      autocomplete="off"
                      placeholder="11(GB)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显卡芯片">
          <el-col :span="10">
            <el-input v-model="form.chip"
                      autocomplete="off"
                      placeholder="GeForce GTX 1060"
                      clearable></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="显示芯片系列">
          <el-col :span="10">
            <el-input v-model="form.chip_type"
                      autocomplete="off"
                      placeholder="NVIDIA RTX 20系列"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显存频率">
          <el-col :span="10">
            <el-input v-model="form.frequency"
                      autocomplete="off"
                      placeholder="14000(MHz)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
      </template>
      <!-- ./重要参数 -->

      <!-- 基础参数 -->
      <template v-if="addActive==2">
        <el-form-item label="核心代号">
          <el-col :span="10">
            <el-input v-model="form.core_code"
                      autocomplete="off"
                      placeholder="TU102-300A"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="CUDA核心">
          <el-col :span="10">
            <el-input v-model="form.cuda"
                      autocomplete="off"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="散热方式">
          <el-col :span="10">
            <el-input v-model="form.radiating"
                      autocomplete="off"
                      placeholder="三风扇散热"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显存类型">
          <el-col :span="10">
            <el-input v-model="form.existing_type"
                      autocomplete="off"
                      placeholder="GDDR6"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="显存位宽">
          <el-col :span="10">
            <el-input v-model="form.bitwide"
                      autocomplete="off"
                      placeholder="352(Bit)"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="最大分辨率">
          <el-col :span="10">
            <el-input v-model="form.max_resolution"
                      autocomplete="off"
                      placeholder="7680×4320"
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
        <el-form-item label="特性">
          <el-select v-model="form.type"
                     placeholder="特性">
            <el-option label="发烧级"
                       value="发烧级"></el-option>
            <el-option label="主流级"
                       value="主流级"></el-option>
            <el-option label="入门级"
                       value="入门级"></el-option>
            <el-option label="专业级"
                       value="专业级"></el-option>
            <el-option label="矿机显卡"
                       value="矿机显卡"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="显卡接口类型">
          <el-col :span="10">
            <el-input v-model="form.graphics_interface_type"
                      autocomplete="off"
                      placeholder="PCI Express 3.0 16X"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="I/O接口">
          <el-col :span="10">
            <el-input v-model="form.io_interface"
                      autocomplete="off"
                      placeholder="HDMI接口，3×DisplayPort接口，USB Type-C接口"
                      clearable></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="电源">
          <el-col :span="10">
            <el-input v-model="form.power"
                      autocomplete="off"
                      placeholder="8pin"
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
  name: 'AddGraphics',
  data() {
    return {
      form: {
        name: '',
        brand: '',
        price: '',
        capacity: '',
        chip: '', //
        image: '', //
        type: '', //
        chip_type: '', //
        core_code: '', //
        cuda: '', //
        frequency: '', //
        existing_type: '', //
        bitwide: '', //
        max_resolution: '', //
        graphics_interface_type: '',
        io_interface: '', //
        power: '', //
        radiating: '',
        tag: []
      }
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
