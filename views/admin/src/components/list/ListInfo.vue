<template>
  <!-- 详情模态框 -->
  <el-dialog title="方案详情"
             :visible.sync="dialogFormVisible"
             v-if="detail">
    <el-row>
      <el-col :span="8">
        <img :src="detail.image"
             class="image">
      </el-col>
      <el-col :span="14"
              :offset="2"
              class="list-info">
        <h2>{{ detail.name }}</h2>
        <div class="intro">{{ detail.intro }}</div>
        <div class="intro total">￥<span class="price">{{ detail.total }}</span></div>
      </el-col>

      <el-col :span="24"
              class="list-content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="硬件信息"
                       name="hardware">
            <el-row>
              <span class="label">CPU: </span>
              <span class="value">{{ detail.cpu }}</span>
            </el-row>
            <el-row>
              <span class="label">显卡: </span>
              <span class="value">{{ detail.graphics }}</span>
            </el-row>
            <el-row>
              <span class="label">内存条: </span>
              <span class="value">{{ detail.memory }}</span>
            </el-row>
            <el-row>
              <span class="label">硬盘: </span>
              <span class="value">{{ detail.harddisk }}</span>
            </el-row>
            <el-row>
              <span class="label">主板: </span>
              <span class="value">{{ detail.mainboard }}</span>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="相关评论"
                       name="comment">
            <div class="comments block">
              <el-timeline v-if="activities.length">
                <el-timeline-item v-for="(item, index) in activities"
                                  :key="index"
                                  :timestamp="$moment(item.time*1000).format('YYYY-MM-DD HH:mm:ss')"
                                  placement="top"
                                  reverse="true">
                  <el-card>
                    <h4>{{ item.content }}</h4>
                    <p>{{ item.username }} 提交于 {{ $moment(item.time*1000).format('YYYY-MM-DD HH:mm:ss') }}</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>

              <div class="time"
                   type="flex"
                   justify="center"
                   v-else>暂无评论</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </el-dialog>
  <!-- ./详情模态框 -->
</template>

<script>
export default {
  name: 'ListInfo',
  data() {
    return {
      dialogFormVisible: false,
      detail: {}, // 方案详情
      activeName: 'hardware',
      activities: []
    };
  },
  created() {
    this.$eventBus.$on('listinfo', list => {
      this.init(list);
    });
  },
  methods: {
    // 初始化模态框
    init(list) {
      this.detail = list;
      this.dialogFormVisible = true;
      this.getComment();
    },
    // 方案相关评论
    getComment(list) {
      this.activities = [];
      this.$api.listAPI.getComment(this.detail.id).then(res => {
        if (res.code == 0 && res.result && res.result.length) {
          this.activities = res.result;
        }
      });
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('listinfo');
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
  height: 153px;
}

h2 {
  margin-top: 0px;
}

.intro {
  font-size: 14px;
  color: #999;
}

.list-info {
  display: flex;
  flex-direction: column;
  height: 153px;
}

.total {
  margin-top: auto;
  margin-bottom: 10px;
}

.price {
  font-size: 22px;
  font-weight: bold;
  color: rgb(255, 76, 76);
}

.list-content {
  margin-top: 15px;
}

.label {
  width: 50px;
  text-align: right;
  display: inline-block;
  margin-bottom: 15px;
}

.value {
  padding-left: 8px;
}

.comments {
  max-height: 200px;
  overflow: auto;
}
</style>
