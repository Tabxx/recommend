import request from './request/fetch';

class Harddisk {
    /**
     * 获取内存条
     */
    getHarddiskList(page, pageSize) {
        return request.get('http://localhost:3000/harddisk', {
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
    createHarddisk(data) {
        return request.post(`http://localhost:3000/harddisk/add`, {
            data: {
                form: JSON.stringify(data)
            }
        })
    }

    /**
     * 删除内存条
     * @param {*} id 
     */
    delHarddisk(id) {
        return request.get(`http://localhost:3000/harddisk/del`, {
            data: {
                cid: id
            }
        })
    }
}

export default new Harddisk();