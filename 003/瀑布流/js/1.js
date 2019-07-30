jQuery(function ($) {
    let mySelf = (function () {
        let $li = $('li');

        let getData = function () {
            $.ajax({
                url: 'json/data.json?page=' + page,
                method: 'get',
                dataType: 'json',
                cache: false,
                success: insertHTML
            })
        };

        let insertHTML = function () {

        };
        return {
            init: function () {
                getData();
            }
        }
    })();
    mySelf.init();
})();