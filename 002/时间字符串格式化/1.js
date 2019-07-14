(function () {

    function addZero(e) {
        return e >= 10 ? e : e = '0' + e;
    }

    var str = '2018-4-4 16:32:8';
    var ary = str.split(' '),
        aryLift = ary[0].split('-'),
        aryRight = ary[1].split(':');
    var month = addZero(aryLift[1]),
        day = addZero(aryLift[2]),
        hour = addZero(aryRight[0]),
        minute = addZero(aryRight[1]);

    var result = `${month}月${day}日 ${hour}时${minute}分`;
    console.log(result);
})();

(function (pro) {
    pro.myTime = function (tel) {
        tel = tel || '{0}年{1}月{2}日 {3}时{4}分{5}秒';
        var reg = /\{(\d+)\}/g;
        var ary = this.match(/\d+/g);
        tel = tel.replace(reg, function () {
            var n = arguments[1], val = ary[n] || '0';
            return  val = val < 10 ?'0' + val : val;
        });
        return tel;
    }

})(String.prototype);
var str = '2018-4-4 16:32:8';
console.log(str.myTime());