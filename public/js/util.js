/**
 * 时间戳格式化
 */
Date.prototype.format = function (fmt) {
    const rule = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'h+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds() // 秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, this.getFullYear() + '')
    }
    for (let attr in rule) {
        if (new RegExp('(' + attr + ')').test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? rule[attr] : ('00' + rule[attr]).substr(('' + rule[attr]).length)
            )
        }
    }
    return fmt
}

window.Cookie = {
    /**
     * 设置cookie
     * cname 名称
     * cvalue 值
     * exdays 过期天数
     */
    setCookie: function (cname, cvalue, exdays = 1) {
        let date = new Date()
        date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000)
        let expires = 'expires=' + date.toGMTString()
        //console.log("飒飒大")
        document.cookie = cname + '=' + cvalue + '; ' + expires
    },
    /**
     * 获取cookie
     * @param {*} cname 名称
     */
    getCookie: function (cname) {
        let name = cname + '='
        let ca = document.cookie.split(';')
        for (let item of ca) {
            let c = item.trim()
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ''
    }
}

/**
 * 添加用户行为
 * id 参数id
 */
window.UserAction = (id) => {
    let userid = Cookie.getCookie('userid');
    if (id && userid) {
        $.get('http://localhost:3000/user/action', {
            userid,
            tid: id,
        })
    }
}

/**
 * 登录
 * username 用户名
 * password 密码
 */
window.Login=(username,password)=>{
    $.ajax({
        url: 'http://localhost:3000/user/login',
        type: 'GET',
        data: {
            username: `${username}`,
            password: `${password}`
        },
        success(result) {
            console.log(window.location.pathname);
            if(window.location.pathname=="/login.html"){
                alert(result.msg);
            };
            if(result.code==0){
            Cookie.setCookie('userid', result.result.id);
            Cookie.setCookie('username',result.result.username);
            Cookie.setCookie('tag', result.result.tag);
            $(window).attr('location','index.html');
        }
        },
        error: function(error) {
            console.log(error);
            alert('登录失败');
        }
    })

}