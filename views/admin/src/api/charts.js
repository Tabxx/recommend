import request from './request/fetch';

class Charts {
  /**
   * 获取硬件数量列表
   */
  getHardWareCount() {
    return request.get('/admin/hardcount');
  }

  /**
   * 获取用户日点击量
   */
  getDayClicks() {
    return request.get('/admin/dayclick');
  }

  /**
   * 获取标签热度
   */
  getUseTag() {
    return request.get('/admin/usetag');
  }
}

export default new Charts();