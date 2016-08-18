function getElementsByClassName(className, parent) {
    var oParent = parent ? document.getElementById(parent) : document,
        children = oParent.getElementsByTagName('*'),
        elements = [];
    for (var i = 0; i < children.length; i++) {
        if (children[i].className == className) {
            elements.push(children[i]);
        }
    }
    return elements;
}

window.onload = drag;

function drag() {
    var webqq = getElementsByClassName('login_logo_webqq', 'loginPanel')[0];
    var panel = document.getElementById('loginPanel');
    var close = document.getElementById('ui_boxyClose');
    var loginState = document.getElementById('loginState');
    var loginStatePanel = document.getElementById('loginStatePanel');
    var statePanel_li = getElementsByClassName('statePanel_li', 'loginStatePanel');
    webqq.onmousedown = function (event) {
        // 光标与面板的距离
        var disX = event.clientX - panel.offsetLeft;
        var disY = event.clientY - panel.offsetTop;
        dragMove(event, disX, disY);
    };

    close.onclick = function(){
        panel.style.display = 'none';
    };
    
    loginState.onclick = function () {
        loginStatePanel.style.display = 'block';
    };

    for(var i = 0; i < statePanel_li.length; i ++){
        statePanel_li[i].onclick = function(){
            var id = this.id ,
                text = getElementsByClassName('stateSelect_text',id)[0].innerHTML;
            document.getElementById('login2qq_state_txt').
            loginStatePanel.style.display = 'none';
        }
    }

}
function dragMove(event, posX, posY) {
    var panel = document.getElementById('loginPanel')
    panel.onmousemove = function (event) {
        // 面板移动的距离=光标的位置 - 光标与面板之间
        var disX = event.clientX - posX,
            disY = event.clientY - posY,
            clientW = document.documentElement.clientWidth || document.body.clientWidth,
            clientH = document.documentElement.clientWidth || document.body.clientWidth,
            maxX = clientW - panel.offsetWidth - 10,
            maxY = clientH - panel.offsetHeight;
        // 计算面板的移动范围
        if(disX<0){
            disX = 0;
        }else if(disX>maxX){
            disX = maxX;
        }
        if(disY<0){
            disY = 10;
        }else if(disY>maxY){
            disY = maxY;
        }

        panel.style.left = disX + 'px';
        panel.style.top = disY + 'px';
    };
    
    panel.onmouseup = function(){
        panel.onmousemove = null;
    };
}