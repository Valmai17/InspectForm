$(document).ready(function(){

    /*—————————————————————————————— 主页导航-添加单页页面 ——————————————————————————————*/
    var editor;
    //编辑器
    if($('textarea').is("#ckeditorArea")){
       editor = CKEDITOR.replace("ckeditorArea");
    }
    //editor.setData('这里是需要传递给CKEditor编辑器实例的值');
    //var val = editor.getData();  //获取编辑器内容


    //验证
    _empty("navTitle01");
    _inputFocus("sortNumber");


    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });

    //提交修改
    $('#navSub01').click(function(){
        _sortNumber("sortNumber");
        _null("navTitle01");
        if(_sortNumber("sortNumber") && _null("navTitle01") && _ckedtor(editor)){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });


    /*—————————————————————————————— 主页导航-添加列表页 ——————————————————————————————*/
    //验证
    _empty("navTitle02");


     //保存提交
    $('#navSub02').click(function(){
        _sortNumber("sortNumber");
        _null("navTitle02");
        if(_sortNumber("sortNumber") && _null("navTitle02")){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });


});



















































