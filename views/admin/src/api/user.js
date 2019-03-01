import request from './request/fetch';

class User {
    /**
     * 获取标签列表
     */
    getTags() {
        return request.get('http://localhost:3000/user/getTags');
    }
}

export default new User();