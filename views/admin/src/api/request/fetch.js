class Request {
  constructor() {
    this.timeout = 25000;
    this.pending = [];
  }

  get(url, params = {}) {
    let myHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    params.headers = myHeaders;
    params.method = 'GET';
    // params.headers = {
    //   'Content-Type': 'application/json; charset=UTF-8'
    // };
    url = this.joinGetParams(url, params.data);
    return this.ajax(url, params);
  }

  joinGetParams(url, params) {
    if (params) {
      const paramsArr = [];
      Object.keys(params).forEach(key => {
        paramsArr.push(`${key}=${params[key]}`);
      });
      if (url.search(/\?/) === -1) {
        url += `?${paramsArr.join('&')}`;
      } else {
        url += `&${paramsArr.join('&')}`;
      }
    }
    return url;
  }

  joinPostParams(params) {
    let result = '';
    if (params) {
      const paramsArr = [];
      Object.keys(params).forEach(key => {
        paramsArr.push(`${key}=${encodeURIComponent(params[key])}`);
      });
      result += `${paramsArr.join('&')}`;
    }
    return result;
  }

  post(url, params = {}) {
    params.method = 'POST';
    let myHeaders = new Headers({
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
      // 'content-type': 'application/json'
      // Accept: 'application/json',
      // 'Content-Length': JSON.stringify(params.data).length
    });
    params.headers = myHeaders;
    // const body = params.data;
    // let formData = new FormData();
    // if (typeof body === 'object') {
    //   console.log('1298');
    //   for (let key of Object.keys(body)) {
    //     console.log(key, body[key]);
    //     formData.append(key, body[key]);
    //   }
    // }
    params.body = this.joinPostParams(params.data);
    // params.body = JSON.stringify(params.data);

    params.data = '';
    // params.headers = {
    //   'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // };
    return this.ajax(url, params);
  }

  jsonp(url, {
    jsonpCallback,
    timeout,
    data
  } = {}) {
    url = this.joinGetParams(url, data);

    jsonpCallback = jsonpCallback || 'jsonp_callback_' + +new Date() + Math.round(1000 * Math.random());
    timeout = timeout || this.timeout;
    let timeId = '';
    const clearJsonpCallBack = jsonpCallback => {
      try {
        delete window[jsonpCallback];
      } catch (e) {
        window[jsonpCallback] = undefined;
      }
    };
    const clearError = (jsonpCallback, script) => {
      clearJsonpCallBack(jsonpCallback);
      document.body.removeChild(script);
      window[jsonpCallback] = jsonpCallback => {
        clearJsonpCallBack(jsonpCallback);
      };
      if (timeId) clearTimeout(timeId);
    };
    return new Promise((resolve, reject) => {
      window[jsonpCallback] = function (data) {
        resolve(data);
        if (timeId) clearTimeout(timeId);
        clearJsonpCallBack(jsonpCallback);
        document.body.removeChild(script);
      };
      let script = document.createElement('script');
      script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + jsonpCallback;
      document.body.appendChild(script);

      timeId = setTimeout(() => {
        clearError(jsonpCallback, script);
        reject(new Error(`timed out :${timeout}ms`));
      }, timeout);

      script.onerror = () => {
        clearError(jsonpCallback, script);
        reject(new Error(`http error :404/500 etc...`));
      };
    });
  }

  removePending(promise) {
    const pending = [];
    for (let value of this.pending) {
      if (promise._url === value._url && promise._method === value._method) {
        try {
          value.cancel();
        } catch (e) {
          console.warn(`取消请求失败 : ${e.message} \n url: ${value._url}`);
        }
      } else {
        pending.push(value);
      }
    }
    this.pending = pending;
    // console.log(this.pending);
  }

  deletePending(promise) {
    this.pending = this.pending.filter(value => {
      return promise._url !== value._url && promise._method !== value._method;
    });
  }

  ajax(url, params) {
    const timeout = params.timeout || this.timeout;
    let cancel = null;
    const fetchPromise = new Promise((resolve, reject) => {
      fetch(url, params)
        .then(res => {
          this.deletePending({
            _url: url,
            _method: params.method
          });
          if (res.ok) {
            return res.json();
          } else {
            reject({
              message: `状态码返回错误：${res.status}| ${res.statusText}`
            });
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(e => {
          reject({
            message: `请求出错：${e.message}\n url: ${url}`
          });
        });
    });
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(`接口超时 :${timeout}ms`));
      }, timeout);
    });
    const cancelPromise = new Promise((resolve, reject) => {
      cancel = () => {
        reject({
          message: `取消请求：${url}`
        });
        console.warn(`请求已取消... url : ${url}`);
      };
    }).catch(e => {});
    const resultPromise = Promise.race([fetchPromise, timeoutPromise, cancelPromise]);
    resultPromise.cancel = cancel;
    resultPromise._url = url;
    resultPromise._method = params.method;
    this.removePending(resultPromise);
    this.pending.push(resultPromise);
    return resultPromise;
  }
}
export default new Request();