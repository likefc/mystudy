let utils = (function utils() {
    /**
     * getCss 获取css样式
     * @param elem： 要获取的元素标签
     * @param attr： 属性名
     * @returns {string}： 返回的结果
     */
    let getCss = function (elem, attr) {
        if ('getComputerStyle' in window) {
            let val = window.getComputedStyle(elem, null)[attr],
                reg = /^-?\d+(\.\d+)?(rem|em|px|pt)$/g;
            reg.test(val) ? val = parseFloat(val) : val;
            return val;
        }
        throw new SyntaxError('对不起，您的浏览器版本太低，建议升级新版本');
    };

    let setCss = function setCss(elem, attr, value) {
        if (attr === 'opacity') {
            elem.style.opacity = value;
            elem.style.filter = `alpha(opacity=${value * 100})`;
        }
        if (!isNaN(value)) {
            let reg = /(width|height|fontSize|(margin|padding)(Top|Bottom|Left|Right))/;
            reg.test(attr) ? value += 'px' : null;
        }
        elem.style[attr] = value;
    };

    let setGroupCss = function setGroupCss(elem, options = {}) {
        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                setCss(elem, key, options[key]);
            }
        }
    };
    let css = function css(...arg) {
        let len = arg.length,
            fn = getCss;
        len >= 3 ? fn = setCss : null;
        len === 2 && (typeof arg[1] === 'object') && (arg[1] !== null) ? fn = setGroupCss : null;
        return fn(...arg);
    };

    let offset = function offset(elem) {
        let curLeft = elem.offsetLeft,
            curTop = elem.offsetTop,
            p = elem.offsetParent;


        while (p.tagName !== 'BODY') {
            curLeft += p.clientLeft;
            curLeft += p.offsetLeft;
            curTop += p.clientTop;
            curTop += p.offsetTop;
            p = p.offsetParent;
        }

        return {
            top: curTop,
            left: curLeft
        };
    };

    let winHandle = function winHandle(attr, value) {
        if (typeof value !== 'undefined') {
            document.documentElement[attr] = value;
            document.body[attr] = value;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    };


    return {
        css,
        offset,
        winHandle,
    };
})();