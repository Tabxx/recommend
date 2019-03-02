import request from './request/fetch';

class CPU {
    /**
     * 获取CPU列表
     */
    getCpuList(page, pageSize) {
        return request.get('http://localhost:3000/cpu', {
            data: {
                page,
                pageSize
            }
        });
    }

    /**
     * 添加CPU
     * @param {*} data 
     */
    createCPU(data) {
        return request.post(`http://localhost:3000/cpu/add`, {
            data: {
                form: JSON.stringify(data)
            }
        })
    }

    /**
     * 删除cpu
     * @param {*} id 
     */
    delCPU(id) {
        return request.get(`http://localhost:3000/cpu/del`, {
            data: {
                cid: id
            }
        })
    }
}

export default new CPU();