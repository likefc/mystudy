(function () {
    var str = 'http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher',
        ary = str.split('?'),
        aryParams = ary[1].split('#'),
        aryLeft = aryParams[0].split('&'),
        obj = {};
    obj['url'] = ary[0];
    obj['hash'] = aryParams[1];
    aryLeft.forEach(function (i, v) {
       var newArr = i.split('='),
       newObj = {};
       newObj[newArr[0]] = newArr[1];
       obj={...obj, ...newObj};
    });
    console.log(obj);
})();


(function (pro) {
    pro.getUrlParams = function () {
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;

        this.replace(reg, function () {
            console.log(arguments);
            var key = arguments[1],
               value = arguments[2] || null;
            obj[key] = value;
        });
        return obj;
    }
})(String.prototype);
var str = '/stu/?lx=1&name=AA&sex=man#teacher';
console.log(str.getUrlParams());