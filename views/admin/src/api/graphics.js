import request from './request/fetch';

class Graphics {
    /**
     * 获取CPU列表
     */
    getGraphicsList(page, pageSize) {
        return request.get('http://localhost:3000/Graphics', {
            data: {
                page,
                pageSize
            }
        });
    }

    /**
     * 添加显卡
     * @param {*} data 
     */
    createGraphics(data) {
        return request.post(`http://localhost:3000/Graphics/add`, {
            data: {
                form: JSON.stringify(data)
            }
        })
    }

    /**
     * 删除显卡
     * @param {*} id 
     */
    delGraphics(id) {
        return request.get(`http://localhost:3000/Graphics/del`, {
            data: {
                cid: id
            }
        })
    }
}

export default new Graphics();