export default {
    data() {
        return {
            tableData: [], // 表格数据
            loading: true, // loading图标
            multipleSelection: [], // 选中数据
            detail: [], // 单个硬件详情
            total: 0, // 总数
            page: 1,
            pageSize: 8,
        }
    },
    created() {
        this.$eventBus.$on('resize', () => {
            // 刷新列表
            this.loading = true;
            this.initList();
        });
    },
    mounted() {
        // 初始化数据
        this.initList();
    },
    methods: {
        // 查看详情
        handleClick(row) {
            // 初始化弹窗数据
            this.detail = [];
            for (let item in row) {
                this.detail.push({
                    value: row[item],
                    attr: item
                });
            }
            // 显示模态框
            this.$eventBus.$emit('openDialog', {
                data: this.detail, // 弹窗数据
                rules: this.rules, // 字段->文本规则，name->名称
                show: true, // 显示弹窗
                filter: this.filter // 过滤不展示的字段
            });
        },
        /**
         * 初始化数据
         */
        initList() {
            this.$api.hardwareAPI.getList({
                url: this.url,
                page: this.page,
                pageSize: this.pageSize
            }).then(res => {
                if (res.code === 0 && res.result && res.result.length) {
                    // msg：数据库中可用数据的总数
                    this.total = res.msg;
                    this.tableData = [];

                    this.tableData = res.result;
                    this.loading = false;
                } else {
                    this.loading = false;
                }
            }).catch(error => {
                // 异常处理
                console.log(error);
                this.loading = false;
            });
        },
        // 添加硬件
        addItem() {
            this.$eventBus.$emit('addItem');
        },
        // 分页更新
        updateData(page) {
            this.page = page;
            this.initList();
        },
        // 选中状态改变
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 全选
        selectAll() {
            this.tableData.forEach(row => {
                this.$refs.tablelist.toggleRowSelection(row);
            });
        },
        // 删除硬件
        delItem(row) {
            let cid = null;

            if (!row) {
                cid = [];
                this.multipleSelection.map(item => cid.push(item.id));
                cid = cid.join(',');
            } else {
                cid = row.id;
            }

            this.$api.hardwareAPI.delItem({
                url: this.url,
                id: cid
            }).then(res => {
                if (res.code == 0) {
                    this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success'
                    });
                    // 重新请求数据
                    this.initList();
                } else {
                    this.$notify({
                        title: '失败',
                        message: '删除失败',
                        type: 'error'
                    });
                }
            });
        }
    },
    beforeDestroy() {
        this.$eventBus.$off('resize');
    },
}