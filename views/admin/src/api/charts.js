import request from './request/fetch';

class Charts {
    /**
     * 获取硬件数量列表
     */
    getHardWareCount() {
        return request.get('http://localhost:3000/admin/hardcount');
    }

    /**
     * 获取用户日点击量
     */
    getDayClicks() {
        return request.get('/admin/dayclick');
    }
}

export default new Charts();