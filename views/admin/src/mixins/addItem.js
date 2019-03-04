export default {
    data() {
        return {
            dialogFormVisible: false,
            addActive: 1,
            fileList: []
        };
    },
    created() {
        this.$eventBus.$on('addItem', () => {
            this.init();
        });
    },
    computed: {
        tags() {
            return this.$store.state.Tag;
        }
    },
    methods: {
        init(cpu) {
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

            this.$api.hardwareAPI.createItem(this.url, this.form).then(res => {
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
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        upload(response, file, fileList) {
            this.form.image = `http://localhost:3000${response.result}`;
        },
        // 初始化数据
        initData() {
            for (let item in this.form) {
                if (typeof this.form[item] == 'boolean') {
                    // boolean类型默认为false
                    this.form[item] = false;
                } else if (Array.isArray(this.form[item])) {
                    // 数组类型默认为空数组[]
                    this.form[item] = [];
                } else {
                    this.form[item] = '';
                }
            }
            this.addActive = 1;
            this.fileList = [];
        }
    },
    // 无须销毁
    // destroyed() {
    //     this.$eventBus.$off('addItem');
    // }
}