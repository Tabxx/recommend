import request from './request/fetch';

class CPU {
    /**
     * 获取CPU列表
     */
    getCpuList() {
        return request.get('http://localhost:3000/cpu');
    }
}

export default new CPU();