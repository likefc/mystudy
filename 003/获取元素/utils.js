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
    return {
        getCss,
        setCss,
        setGroupCss
    };
})();