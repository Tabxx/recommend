Date.prototype.format = function (fmt) {
    const rule = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ""));
    }
    for (let attr in rule) {
        if (new RegExp("(" + attr + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (rule[attr]) : (("00" + rule[attr]).substr(("" + rule[attr]).length)));
        }
    }
    return fmt;
}