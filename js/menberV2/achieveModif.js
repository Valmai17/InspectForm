$(document).ready(function(){

    /*—————————————————————————— 成果内容修改 ——————————————————————————————*/

    //下拉菜单防止遮挡
    var length = $('.sel_box').length;
    for(var i=0;i<$('.sel_box').length;i++){
        $('.sel_box').eq(i).css("zIndex",length-i);
    }

   //验证
    _empty("achTitle");   //成果名称
    _inputFocus("sortNumber");  //排序

   //研发单位信息，专利情况，应用前景
    word_deal($('#achInfo01'),150);
    word_deal($('#achInfo02'),150);
    word_deal($('#achInfo03'),150);



    var editor;
    //编辑器
    if($('textarea').is("#ckeditorArea")){
       editor = CKEDITOR.replace("ckeditorArea");
    }
        //editor.setData('这里是需要传递给CKEditor编辑器实例的值');
        //var val = editor.getData();  //获取编辑器内容


    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });


    //提交修改
    $('#achieveSub').click(function(){
        _sortNumber("sortNumber");
        _null("achTitle");
        if(_sortNumber("sortNumber") && _null("achTitle")){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });




});



















































