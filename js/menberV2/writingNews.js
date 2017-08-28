$(document).ready(function(){


    var editor = CKEDITOR.replace("ckeditorArea");
    //editor.setData('这里是需要传递给CKEditor编辑器实例的值');


    //快讯标题
    $('#newsTitle').focus(function(){
        $(this).siblings('.form_tips').removeClass('error_tips').removeClass('right_tips').text("");
    });

    //点击提交修改
    $('#ckeBtn').click(function(){
        var val = editor.getData();  //获取编辑器内容
        if( _null("newsTitle") && val.length !== 0){
            return true;
        } else {
            return false;
        }
    });






});



















































