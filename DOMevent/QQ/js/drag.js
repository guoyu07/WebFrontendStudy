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

    close.onclick = function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancleBubble =  true;
        }
        panel.style.display = 'none';
    };
    
    loginState.onclick = function (event) {        
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancleBubble = true;
        }
        loginStatePanel.style.display = 'block';
    };

    document.onclick = function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancleBubble = true;
        }
        loginStatePanel.style.display = 'none';
    }


    for(var i = 0; i < statePanel_li.length; i ++){

        statePanel_li[i].onmouseover = function(){
            this.style.backgroundColor = '#ccc';
        }        
        statePanel_li[i].onmouseout = function(){
            this.style.backgroundColor = '#fff';
        }        


        statePanel_li[i].onclick = function(event){
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancleBubble = true;
            }
            var id = this.id ,
                text = getElementsByClassName('stateSelect_text',id)[0].innerHTML;
            document.getElementById('login2qq_state_txt').innerHTML = text;
            document.getElementById('loginStateShow').className = 'login-state-show '+id;
            loginStatePanel.style.display = 'none';
        }
    }

}
function dragMove(event, posX, posY) {
    // 因为在mousedown 的时候才是dragMove的时刻
    var panel = document.getElementById('loginPanel');
    // 这里犯了一个错误，我给元素绑定了移动事件
    // 实际上应该是给document绑定移动事件，否则当光标脱离面板时，会导致移动失效
    document.onmousemove = function (event) {
        // 面板移动的距离=光标的位置 - 光标与面板之间
        var disX = event.clientX - posX,
            disY = event.clientY - posY,
            clientW = document.documentElement.clientWidth || document.body.clientWidth,
            clientH = document.documentElement.clientHeight || document.body.clientHeight,
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
    
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    };
}