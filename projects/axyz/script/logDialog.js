//显示浮动窗口的方法
function showwin() {
    //lert("准备显示弹出窗口啦！！！");
    //1.找到窗口对应的div节点
    var winNode = $("#win");
    //2.让div对应的窗口显示出来
    //方法1,修改节点的css值，让窗口显示出来
    //winNode.css("display","block");
    //方法2，利用Jqeury的show方法
    //winNode.show("slow");
    //方法3，利用JQuery的fadeIn方法
    winNode.fadeIn("slow");
}

//隐藏窗口的方法
function hide() {
    //1.找到窗口对应的节点
    var winNode = $("#win");
    //2.将窗口隐藏起来
    //方法1，修改css
    //winNode.css("display","none");
    //方法2，利用hide方法
    //winNode.hide("slow");
    //方法3，利用fadeOut方法
    winNode.fadeOut("slow");
}

$(document).ready(function(){
    $(".alertW").click(function(){
      $(".showLog").fadeIn();
      $(".showLogBg").fadeIn();
    });
     $("#closeImg").click(function(){
    $(".showLog").fadeOut();
    $(".showLogBg").fadeOut();
     });
});