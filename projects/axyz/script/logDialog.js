//��ʾ�������ڵķ���
function showwin() {
    //lert("׼����ʾ����������������");
    //1.�ҵ����ڶ�Ӧ��div�ڵ�
    var winNode = $("#win");
    //2.��div��Ӧ�Ĵ�����ʾ����
    //����1,�޸Ľڵ��cssֵ���ô�����ʾ����
    //winNode.css("display","block");
    //����2������Jqeury��show����
    //winNode.show("slow");
    //����3������JQuery��fadeIn����
    winNode.fadeIn("slow");
}

//���ش��ڵķ���
function hide() {
    //1.�ҵ����ڶ�Ӧ�Ľڵ�
    var winNode = $("#win");
    //2.��������������
    //����1���޸�css
    //winNode.css("display","none");
    //����2������hide����
    //winNode.hide("slow");
    //����3������fadeOut����
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