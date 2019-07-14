var oBox = document.getElementById('box'),
    oLi = oBox.getElementsByTagName('li');

for (var i = 0; i < oLi.length; i++) {
    if (i % 3 === 0) {
        oLi[i].style.background = 'yellow';
    } else if (i % 3 === 1) {
        oLi[i].style.background = 'blue';
    }else{
        oLi[i].style.background = 'red';
    }
}