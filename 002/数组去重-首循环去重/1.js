(function () {
    var ary = [1, 3, 4, 4, 4, 5, 6, 7, 3, 4, 6];
    /**
     * 1. 循环一次，拿出第一项和后面的依次比较
     * 2. 如果重复了删除掉
     */
    // for (var i = 0; i < ary.length; i++) {
    //     var item = ary[i];
    //     for (var j = i + 1; j < ary.length; j++) {
    //         if (item === ary[j]) {
    //             ary.splice(j, 1);
    //             j--;
    //         }
    //     }
    // }
    // console.log(ary);


    /*
    *  基于对象的属性名不能重复。我们可以把ary的的每一项分别存储为属性名和属性值
    *
    * */

    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        if (obj[ary[i]] === undefined) {
            obj[ary[i]] = ary[i];
        } else {
            // ary.splice(i, 1);
            // i--;
            // 这样删除不太好，如果数组很长的话，后面的索引都需要计算才可以得到。非常耗性能


            /**
             * 把最后一项获取到，来替换当前项，
             * 删除最后一项，并且i--
             */
            ary[i] = ary[ary.length - 1];
            ary.pop();
            i--;
        }
    }
    console.log(ary);
})();