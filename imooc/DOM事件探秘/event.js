/**
 * Created by siberiawolf on 2016/8/18.
 */
var eventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeHandler(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent(type, handler);
        } else {
            element['on' + element] = null;
        }
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if (event.cancelBubble) {
            event.cancelBubble = true;
        }
    },
    prepentDefault: function (event) {
        if (event.prepentDefault) {
            event.stopPropagation();
        } else if (event.returnValue) {
            event.returnValue = false;
        }
    }
};
