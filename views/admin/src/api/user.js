import request from './request/fetch';

class User {
    /**
     * 获取标签列表
     */
    getTags() {
        return request.get('/user/getTags');
    }
}

export default new User();