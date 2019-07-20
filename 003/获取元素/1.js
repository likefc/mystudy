(function () {
    /**
     * getCss 获取当前元素的一个样式的属性值
     *
     * @param
     *      curEle[object]： 当前要操作的元素
     *      attr[string]： 当前获取的样式属性名
     * @return
     *      获取到的样式属性值
     **/
    let getCss = function getCss(curEle, attr) {
        // 判断全局（window）下是否有getComputedStyle 这个属性
        if ('getComputedStyle' in window) {
            // 获取 我们要操作的元素的属性值
            let val = window.getComputedStyle(curEle, null)[attr],
                /*
                *  1. 负号可有可没有
                *  2. 1到多个数字，或许有小数点获取没有并且跟着1到多个数字
                *  3. 或许有单位或许没有(单位的rem, px. em, pt)
                * */
                reg = /^-?\d+(\.\d+)?(px|rem|em|pt)$/g;
            console.log(window.getComputedStyle(curEle, null));
            reg.test(val) ? val = parseFloat(val) : null;
            return val;
        }
        throw new SyntaxError('对不起，你的浏览器版本太低，请升级版本');
    };

    console.log(getCss(outer, 'padding'));


// -----------------------------------------------
    /**
     * window.getComputedStyle 获取浏览器经过计算之后的样式的大小
     *
     * @param
     *  element： 用于获取计算样式的基类
     *  pseudoElt： 制定一个要匹配的伪元素的字符串。必须对普通元素省略（或null）
     */
// ------------------------------------------------------
    /**
     * 设置Css 样式
     * @param curEle：要为添加样式的基类
     * @param attr： 添加的属性名字
     * @param value： 属性值
     */
    let setCss = function setCss(curEle, attr, value) {
        /**
         * 在css中opacity不兼容
         */
        if (attr === 'opacity') {
            curEle.style.opacity = value;
            curEle.style.filter = `alpha(opacity=${value * 100})`;
        }
        if (!isNaN(value)) {
            let reg = /^(width|height|fontSize|((margin|padding)?(Top|Left|Right|Bottom)))$/g;
            reg.test(attr) ? value += 'px' : null;
        }
        curEle['style'][attr] = value;
    };

// ------------------------------------------------------
    /*
    * setGroupCss: 批量设置样式
    * */
    let setGroupCss = function setGroupCss(curEle, options = {}) {
        for (let item in options) {
            if (!options.hasOwnProperty(item)) break;
            setCss(curEle, item, options[item]);
        }
    };
    // setGroupCss(outer, {
    //     width: 500,
    //     height: 200,
    //     padding: 20
    // })
// ------------------------------------------------------
    /**
     *  css, 将get, set 和 setGroup集合在一起
     * @param arg
     * @return
     */
    let css = function css(...arg) {
        let len = arg.length;
        if (len >= 3) {
            setCss(...arg);
            return;
        }
        if (len === 2 && typeof arg[1] === 'object' && arg[1] !== null) {
            setGroupCss(...arg);
            return;
        }
        return getCss(...arg);
    };
})();


(function () {
    /**
     * getCss : 获取指定标签的属性值
     * @param curEle： 指定的元素标签
     * @param attr： 属性名
     * @returns {string}： 返回的是属性值
     */
    let getCss = function getCss(curEle, attr) {
        if ('getComputedStyle' in window) {
            let val = window.getComputedStyle(curEle, null)[attr],
                reg = /^-?\d+(\.\d+)?(rem|px|pt|em)$/g;
            reg.test(val) ? val = parseFloat(val) : null;
            return val;
        }
        throw new SyntaxError('对不起，你的浏览器版本太低，请升级版本');
    };

    /**
     * serCss 设置css 的样式
     * @param curEle： 选择标签的基类
     * @param attr： 属性名
     * @param value： 属性值
     */
    let setCss = function setCss(curEle, attr, value) {
        if (attr === 'opacity') {
            curEle.style.opacity = value;
            curEle.style.filter = `alpha(opacity=${value * 100})`;
        }
        if (!isNaN(value)) {
            let reg = /(width|height|FontSize|(margin|padding)?(Top|Bottom|Left|Right))/g;
            reg.test(attr) ? value += 'px' : null;
        }
        curEle['style'][attr] = value;
    };

    /**
     * setGroupCss 批量设置css样式
     * @param curEle： 选择的标签
     * @param options： 属性组
     */
    let setGroupCss = function setGroupCss(curEle, options = {}) {
        for (let item in options) {
            if (!options.hasOwnProperty(item)) break;
            setCss(curEle, item, options[item]);
        }
    };

    /**
     * css ： 统一将set，get和setGroup 整合
     * @param arg
     * @returns {string}
     */
    let css = function css(...arg) {
        let len = arg.length,
            fn = getCss;
        len >= 3 ? fn = setCss : null;
        len === 2 && (arg[1] !== null) && (typeof  arg[1] === 'object') ? fn = setGroupCss : null;
        return fn(...arg);
    };


})();