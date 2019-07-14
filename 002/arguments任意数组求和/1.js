(function () {
    function sum() {
        console.log(arguments);
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
                continue;
            }
            total += arguments[i];
        }
        console.log(total);
    }

    sum(1, 2, 3, 4, 5);
})();


(function () {
    let sum = (...arg) => {
        arg = arg.filter(item =>
            !isNaN(item)
        );
        return eval(arg.join('+'));
    };
    console.log(sum(1, 2, 3, 4, 5));
    let sum1 = (...arg) => {
        arg = arg.filter(item => !isNaN(item));
        return eval(arg.join('+'));
    };
    console.log(sum1(10, '20', 'AA')); //3017.匿名函数和实名函数
})();