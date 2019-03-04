import request from './request/fetch';

class Charts {
    /**
     * 获取硬件数量列表
     */
    getHardWareCount() {
        return request.get('http://localhost:3000/admin/hardcount');
    }
}

export default new Charts();