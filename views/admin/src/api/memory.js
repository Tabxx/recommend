import request from './request/fetch';

class Memory {
    /**
     * 获取内存条
     */
    getMemoryList(page, pageSize) {
        return request.get('http://localhost:3000/Memory', {
            data: {
                page,
                pageSize
            }
        });
    }

    /**
     * 添加内存条
     * @param {*} data 
     */
    createMemory(data) {
        return request.post(`http://localhost:3000/Memory/add`, {
            data: {
                form: JSON.stringify(data)
            }
        })
    }

    /**
     * 删除内存条
     * @param {*} id 
     */
    delMemory(id) {
        return request.get(`http://localhost:3000/Memory/del`, {
            data: {
                cid: id
            }
        })
    }
}

export default new Memory();