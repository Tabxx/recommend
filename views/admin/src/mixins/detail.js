<<<<<<< HEAD
export const detail = {
    created() {
        this.$eventBus.$on('resize', () => {
            this.loading = true;
            this.getCpuList();
        });
    },
    mounted() {
        this.getCpuList();
    },
    components: {
        addCpu
    },
    methods: {

        // 查看详情
        handleClick(row) {
            // 初始化弹窗数据
            this.cpuData = [];
            for (let item in row) {
                this.cpuData.push({
=======
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
>>>>>>> b965f525aaeac9b4512e398ce068da4404a7dc64
                    value: row[item],
                    attr: item
                });
            }
            // 显示模态框
            this.$eventBus.$emit('openDialog', {
<<<<<<< HEAD
                data: this.cpuData,
                rules: this.rules,
                show: true,
                filter: this.filter
            });
        },
        // 获取CPU列表
        getCpuList() {
            this.$api.cpuAPI
                .getCpuList(this.page, this.pageSize)
                .then(res => {
                    if (res.code === 0 && res.result && res.result.length) {
                        this.total = res.msg;
                        this.tableData = [];
                        for (let item of res.result) {
                            item.price = `￥${item.price}`;
                            item.frequency = `${item.frequency}GHz`;
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
        // 添加CPU
        addCPU() {
            this.$eventBus.$emit('addCpu');
        },
        // 分页修改数据
        updateData(page) {
            this.page = page;
            this.getCpuList();
        },
        // 编辑cpu
        edit(cpu) {
            console.log(cpu);
=======
                data: this.detail, // 弹窗数据
                rules: this.rules, // 字段->文本规则，name->名称
                show: true, // 显示弹窗
                filter: this.filter, // 过滤不展示的字段
                block: this.showBlock
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
>>>>>>> b965f525aaeac9b4512e398ce068da4404a7dc64
        },
        // 选中状态改变
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 全选
        selectAll() {
            this.tableData.forEach(row => {
<<<<<<< HEAD
                this.$refs.cputable.toggleRowSelection(row);
            });
        },
        // 删除cpu
        delCPU(row) {
            if (row) {
                // 逐个删除
                this.$api.cpuAPI.delCPU(row.id).then(res => {
                    if (res.code == 0) {
                        this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getCpuList();
                    }
                });
            } else {
                // 批量删除
                let cid = [];

                this.multipleSelection.map(item => cid.push(item.id));
                this.$api.cpuAPI.delCPU(cid.join(',')).then(res => {
                    if (res.code == 0) {
                        this.$notify({
                            title: '成功',
                            message: '删除成功',
                            type: 'success'
                        });
                        // 重新请求数据
                        this.getCpuList();
                    } else {
                        this.$notify({
                            title: '失败',
                            message: '删除失败',
                            type: 'error'
                        });
                    }
                });
            }
        }
    },

    data() {
        return {
            tableData: [], // 表格数据
            loading: true,
            cpuData: [], // cpu详情
            rules: {
                id: 'ID',
                name: 'CPU名称',
                brand: '品牌',
                price: '价格',
                series: '系列',
                features: '特性',
                slot: '插槽',
                tag: '标签',
                status: '状态',
                image: '图片',
                process: '制作工艺',
                frequency: 'CPU主频',
                core_code: '核心代号',
                core_number: '核心数量',
                threads_number: '线程数量',
                power_consumption: '功耗',
                max_memory: '最大内存',
                bus_specification: '总线规格',
                tree_cache: '三级缓存',
                memory_type: '内存类型',
                is_Integ_graphics: '是否集成显卡',
                graphics_max_frequency: '最大动态频率',
                graphice_base_frequency: '基本频率',
                Integ_graphics: '集成显卡'
            },
            filter: ['id', 'image', 'status', 'tag', 'hardware_name'],
            total: 0, // cpu总数
            page: 1,
            pageSize: 8,
            multipleSelection: [] // 选中状态
        };
    },
    beforeDestroy() {
        this.$eventBus.$off('resize');
    }
};
=======
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
>>>>>>> b965f525aaeac9b4512e398ce068da4404a7dc64
