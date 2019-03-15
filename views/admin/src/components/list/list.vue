<template>
  <el-row>
    <!-- 操作栏 -->
    <el-col class="mb-15">
      <el-button type="primary"
                 @click="addItem">添加</el-button>
    </el-col>
    <!-- ./操作栏 -->

    <el-col :span="7"
            v-for="(item, index) in list"
            :key="index"
            :offset="index % 3 ? 1 : 0">
      <el-card :body-style="{ padding: '0px' }"
               class="card-container"
               shadow="hover">
        <div @mouseenter="showmask=index"
             @mouseleave="showmask=-1">
          <img :src="item.image"
               class="image">
          <div style="padding: 14px;">
            <span>{{ item.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.intro }}</time>
            </div>
          </div>
          <div class="mask"
               v-show="showmask==index">
            <ul>
              <li>CPU：{{ item.cpu }}</li>
              <li>显卡：{{ item.graphics }}</li>
              <li>主板：{{ item.mainboard }}</li>
              <li>硬盘：{{ item.harddisk }}</li>
              <li>内存条：{{ item.memory }}</li>
            </ul>
            <el-row type="flex"
                    class="total"
                    justify="space-between"
                    align="middle">
              <span class="price">总价：{{ item.total }}元</span>
              <el-button type="danger"
                         size="small"
                         @click.stop="listinfo(item)">查看详情</el-button>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-col>

    <list-info></list-info>
    <add-list></add-list>
  </el-row>
</template>

<script>
import ListInfo from '@/components/list/ListInfo';
import AddList from '@/components/model/AddList';

export default {
  name: 'list',
  data() {
    return {
      currentDate: new Date(),
      list: [],
      showmask: -1
    };
  },
  components: {
    ListInfo,
    AddList
  },
  created() {
    this.$eventBus.$on('resize', () => {
      this.getData();
    });
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 获取方案列表
    getData() {
      this.$api.listAPI.getList().then(res => {
        if (res.code == 0 && res.result && res.result.length) {
          this.list = res.result;
        }
      });
    },
    // 方案详情模态框
    listinfo(list) {
      this.$eventBus.$emit('listinfo', list);
    },
    // 添加方案
    addItem() {
      this.$eventBus.$emit('addList');
    }
  },
  beforeDestroy() {
    this.$eventBus.$off('resize');
  }
};
</script>

<style scoped>
.card-container {
  height: 260px;
  margin: 0 0 20px 0;
  padding: 0 0 10px 0;
  cursor: pointer;
  position: relative;
}
.time {
  font-size: 13px;
  color: #999;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.image {
  width: 100%;
  display: block;
  height: 190px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}

.mask {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 0 3px;
  display: flex;
  flex-direction: column;
}

.mask ul {
  padding: 0 0 0 10px;
  list-style: none;
  font-size: 14px;
}

.mask li {
  margin: 0 0 8px 0;
}

.total {
  padding: 0 10px;
  margin-top: auto;
  margin-bottom: 15px;
}

.total .price {
  margin: 0 10px 0 0;
}
</style>
