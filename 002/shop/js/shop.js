// let header = document.getElementById('header'),
//     titleA = header.getElementsByTagName('a'),
//     list = document.getElementById('list'),
//     li = list.getElementsByTagName('li');
// (function () {
//     // ajax 请求数据
//     let productData = null,
//         xhr = new XMLHttpRequest;
//     xhr.open('GET', 'json/product.json', false);
//     xhr.onreadystatechange = () => {
//         xhr.readyState === 4 && xhr.status === 200 ? productData = xhr.responseText : null;
//         productData ? productData = JSON.parse(productData) : null;
//     };
//     xhr.send(null);
//     let str = '';
//     for (let i = 0; i < productData.length; i++) {
//         let {title, price, time, hot, img} = productData[i];
//         str += ` <li data-price="${price}"
//                     data-time="${time}"
//                     data-hot="${hot}">
//                     <a href="javascript:;">
//                         <img src="${img}" alt="">
//                         <p>${title}</p>
//                         <span>价格：${price}</span>
//                         <span>时间：${time}</span>
//                         <span>热度：${hot}</span>
//                     </a>
//                 </li>`;
//     }
//     list.innerHTML = str;
// })();
//
// (function () {
//     console.log(titleA);
//     for (let i = 0; i < titleA.length; i++) {
//         let checkedA = titleA[i];
//         checkedA.index = i;
//         checkedA.flag = -1;
//         checkedA.onclick = function () {
//             console.log(this);
//             for (let j = 0; j < titleA.length; j++) {
//                 let item = titleA[j];
//                 item.flag = -1;
//                 if (item = this) {
//                     this.flag *= -1;
//                 }
//             }
//             sortList.call(this);
//         }
//
//     }
//     let sortList = function () {
//         let {index: _index, flag: _flag} = this,
//             productAry = [].slice.call(li);
//         console.dir(this);
//         productAry.sort((a, b) => {
//             let ary = ['data-time', 'data-price', 'data-hot'];
//             let aInn = a.getAttribute(ary[_index]),
//                 bInn = b.getAttribute(ary[_index]);
//             if (_index === 0) {
//                 aInn = aInn.replace(/-/g, '');
//                 bInn = bInn.replace(/-/g, '');
//             }
//             return (aInn - bInn) * _flag;
//         });
//         console.dir(productAry);
//         for (let i = 0; i < productAry.length; i++) {
//             let curLi = productAry[i];
//             list.appendChild(curLi);
//         }
//     }
// })();


window.onload = function () {
    let header = document.getElementById('header'),
        aList = header.getElementsByTagName('a'),
        list = document.getElementById('list'),
        li = list.getElementsByTagName('li'),
        data = null;
    let getData = function () {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'json/product.json', false);
        xhr.onreadystatechange = () => {
            xhr.status === 200 && xhr.readyState === 4 ? data = xhr.responseText : null;
            data ? data = JSON.parse(data) : null;
        };
        xhr.send(null);
    };

    let addLi = function () {
        let str = '';
        for (let i = 0; i < data.length; i++) {
            let {id, title, price, time, hot, img} = data[i];
            str += `<li data-time="${time}" 
                        data-price="${price}"
                        data-hot = "${hot}">
                        <a href="javascript:;">
                            <img src="${img}" alt="">
                            <p>${title}</p>
                            <span>价格：${price}</span>
                            <br>
                            <span>时间：${time}</span>
                            <br>
                            <span>热度：${hot}</span>
                        </a>
                    </li>`;
        }
        list.innerHTML = str;
    };

    getData();
    addLi();

    (function () {
        let sortLi = function () {
            console.dir(this);
            let arr = [].slice.call(li),
                {index: _index, flag: _flag} = this;
            arr.sort((a, b) => {
                let newArr = ['data-time', 'data-price', 'data-hot'],
                    aInn = a.getAttribute(newArr[_index]),
                    bInn = b.getAttribute(newArr[_index]);

                if (_index === 0) {
                    aInn = aInn.replace(/-/g, '');
                    bInn = bInn.replace(/-/g, '');
                }
                return (aInn - bInn) * _flag;
            });
            for (let i = 0; i < arr.length; i++) {
                let newLi = arr[i];
                list.appendChild(newLi);
            }
        };
        for (let i = 0; i < aList.length; i++) {
            let checkedA = aList[i];
            checkedA.index = i;
            checkedA.flag = -1;
            checkedA.onclick = function () {
                for (let j = 0; j < aList.length; j++) {
                    aList[i].flag = -1;
                    if (this === aList[i]) {
                        this.flag *= -1;
                    }
                }
                sortLi.call(this);
            }
        }
    })();
};