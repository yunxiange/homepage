// JavaScript Document

function startMove(obj, json, fn) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {

        var bBtn = true;

        for (var attr in json) {

            var iCur = 0;

            if (attr == 'opacity') {
                iCur = Math.round(getStyle(obj, attr) * 100);
            } else {
                iCur = parseInt(getStyle(obj, attr)) || 0;
            }

            var iSpeed = (json[attr] - iCur) / 8;

            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if (iCur != json[attr]) {
                bBtn = false;
            }

            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
                obj.style.opacity = (iCur + iSpeed) / 100;
            } else {
                obj.style[attr] = iCur + iSpeed + 'px';
            }

        }

        if (bBtn) {
            clearInterval(obj.timer);

            if (fn) {
                fn.call(obj);
            }
        }


    }, 30);

}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function getElementsByClassName(root, className) {
    root = document.getElementById(root);
    if (root.getElementsByClassName) {
        return root.getElementsByClassName(className);
    }

    var elements = root.getElementsByTagName('*');
    var ret = [];

    for (var i = 0, len = elements.length; i < len; i++) {
        var elem = elements[i];
        if ((' ' + elem.className + ' ').indexOf(' ' + className + '') > -1) {
            ret.push(elem);
        }
    }
    return ret;
}
