(function () {

    /**
     * 开头---没看懂module
     * 1. 当前容器中没有window 的话，那么将this作为父层，factory()会返回一个jquery对象
     * 对于commonJs或者commonjs-like的环境中window对象是没有问题的，如果一个执行环境，他的window对象没有document的属性，例如nodejs，那么需要暴露衣蛾factory（）方法，并将真实的window对象传入，var jquery = require（“jquery”）（window）
     */
    (function (global, factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = global.document ?
                factory(global, true) :
                function (w) {
                    if (!w.document) {
                        throw new Error("jQuery requires a window with a document");
                    }
                    return factory(w);
                };
        } else {
            factory(global);
        }
    })(typeof window !== undefined ? window : this, function (window, noGlobal) {
    });


    /**
     * factory 方法，
     * @param window： window对象
     * @param noGlobal： 没有全局
     * @returns {*}
     */
    function factory(window, noGlobal) {

        // 待议
        // if ( typeof define === "function" && define.amd ) {
        //     define( "jquery", [], function() {
        //         return jQuery;
        //     });
        // }
        var _jQuery = window.jQuery,
            _$ = window.$;


        // jquery 转让$使用权
        jQuery.noConflict = function( deep ) {
            if ( window.$ === jQuery ) {
                window.$ = _$;
            }

            if ( deep && window.jQuery === jQuery ) {
                window.jQuery = _jQuery;
            }

            return jQuery;
        };
        if (typeof  noGlobal === 'undefined') {
            window.jQuery = window.$ = jQuery;
        }
        return jQuery;
    }
})();


(function () {


    var version = '1.11.3', // 版本号
        jQuery = function jQuery(selector, context) {
            return new jQuery.fn.init(selector, context);
        };
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    var init = jQuery.fn.init = function init(selector, context) {

        var match, elem;

        /**
         *  判断选择器是否为 $(""), $(null), $(undefined), $(false)
         *  返回this：----> 在构造函数中，this一般都是当前类的实例 new jQuery();
         *  返回的诗jQuery.fn.init();
         */
        if (!selector) {
            return this;
        }
        /**
         * 如果选择器是一个字符串
         *
         */
        if (typeof selector === 'string') {

        }
    };
    window.jQuery = window.$ = jQuery;
    return jQuery;
})();