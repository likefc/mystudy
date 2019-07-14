/**
 * 方法一：提前设置有个空对象
 * 使对象的key和value 相等
 * 然后 看循环的数字是否为 对象的 属性是的话，结束这次循环，并将累加减一
 */
(function () {
    function getCode() {
        var str = '',
            obj = {},
            codeStr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        for (var i = 0; i < 4; i++) {
            var num = Math.round(Math.random() * 61);
            if (obj[num] !== undefined) {
                i--;
                continue;
            }
            obj[num] = num;
            str += codeStr[num];
        }
        return str;
    }

    // setInterval(() =>{
    //     console.log(getCode());
    // }, 1000)
})();


(function () {
    function getCode() {
        var str = '',
            codeStr = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        for (var i = 0; i < 4; i++) {
            var num = Math.round(Math.random() * 61),
                char = codeStr.charAt(num);
            if (str.indexOf(char) > -1) {
                i--;
                continue;
            }
            str += char;
        }
        return str;
    }

    // setInterval(() => {
    //     console.log(getCode());
    // }, 1000)
})();