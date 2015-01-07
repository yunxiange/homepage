function lazyLoad(obj) {
    if (!obj) {
        return;
    }
    var aLi = document.getElementById(obj).getElementsByTagName('li');
    for (var i = 0, len = aLi.length; i < len; i++) {
        (function(i) {
            var oImg = aLi[i].getElementsByTagName('img')[0];
            var sSrc = oImg.src;
            var regExp = /(\/s\/)/g;
            if (regExp.test(sSrc)) {
                var oImg_load = new Image();
                var temp = sSrc.replace(regExp, '/n/');
                oImg_load.src = temp;
                oImg_load.onload = function() {
                    oImg.src = temp;
                    oImg_load = null;
                }
            }
        })(i);
    }
};
