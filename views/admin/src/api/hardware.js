import request from './request/fetch';

class CPU {
    /**
     * 获取硬件列表
     */
    getList({
        url = 'cpu',
        page = 1,
        pageSize = 10
    }) {
        return request.get(`http://localhost:3000/${url}`, {
            data: {
                page,
                pageSize
            }
        });
    }

    /**
     * 添加硬件
     * @param {*} data 
     */
    createItem(url, data) {
        return request.post(`http://localhost:3000/${url}/add`, {
            data: {
                form: JSON.stringify(data)
            }
        })
    }

    /**
     * 删除硬件
     * @param {*} id 
     */
    delItem({
        url,
        id
    }) {
        return request.get(`http://localhost:3000/${url}/del`, {
            data: {
                cid: id
            }
        })
    }
}

export default new CPU();