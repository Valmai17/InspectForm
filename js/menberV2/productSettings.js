$(document).ready(function(){

    /*—————————————————————————— 产品列表-产品内容修改 ——————————————————————————————*/

    //下拉菜单防止遮挡
    var length = $('.sel_box').length+1;
    for(var i=0;i<$('.sel_box').length;i++){
        $('.sel_box').eq(i).css("zIndex",length-i);
    }


   //产品概要
    word_deal($('#proTextarea'),150);


    var editor;
    //编辑器
    if($('textarea').is("#ckeditorArea")){
       editor = CKEDITOR.replace("ckeditorArea");
    }
        //editor.setData('这里是需要传递给CKEditor编辑器实例的值');
        //var val = editor.getData();  //获取编辑器内容


    //验证
    _empty("proTitle");
    _inputFocus("sortNumber");


    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });

    //提交修改
    $('#proSub').click(function(){
        _sortNumber("sortNumber");
        _null("proTitle");
        if(_sortNumber("sortNumber") && _null("proTitle") && _ckedtor(editor)){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });




});



















































