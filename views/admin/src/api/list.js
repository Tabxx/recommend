import request from './request/fetch';

class List {
    /**
     * 获取方案列表
     */
    getList() {
        return request.get('admin/getlist');
    }
}

export default new List();