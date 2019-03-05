import request from './request/fetch';

class List {
    /**
     * 获取方案列表
     */
    getList() {
        return request.get('admin/getlist');
    }

    /**
     * 获取方案评论
     * @param {*} pid 方案id
     * @param {*} type 1-方案
     */
    getComment(pid, type = 1) {
        return request.get(`comment/getcomment`, {
            data: {
                pid,
                type
            }
        })
    }

    /**
     * 添加方案
     * @param {*} param0 
     */
    addList({
        cpu,
        graphics,
        mainboard,
        name,
        intro,
        memory,
        harddisk,
        tag,
        image,
        total,
        userid = 1
    }) {
        return request.post(`list/add`, {
            data: {
                cpu,
                graphics,
                mainboard,
                name,
                intro,
                memory,
                harddisk,
                tag,
                image,
                total,
                userid
            }
        })
    }
}

export default new List();