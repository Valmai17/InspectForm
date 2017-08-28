$(document).ready(function(){

    
    /*—————————————————————————————— 文章分类管理-添加修改分类 ——————————————————————————————*/

    //添加修改分类--描述字数限制
    word_deal($('#add_modify'),150);

    //验证
    _empty("a_sort");

    $("#aMoSub").click(function(){
        if( _null("a_sort")){
            return true;
        } else {
            return false;
        }  
    });




    /*—————————————————————————————— 文章列表-文章内容修改 ——————————————————————————————*/

    //文章概要
    word_deal($('#actTextarea'),150);


    var editor;
    //编辑器
    if($('textarea').is("#ckeditorArea")){
       editor = CKEDITOR.replace("ckeditorArea");
    }
        //editor.setData('这里是需要传递给CKEditor编辑器实例的值');
        //var val = editor.getData();  //获取编辑器内容


    //验证
    _empty("actTitle");
    _inputFocus("sortNumber");

    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });

    //提交修改
    $('#acticleSub').click(function(){
        _sortNumber("sortNumber");
        _null("actTitle");
        if(_sortNumber("sortNumber") && _null("actTitle") && _ckedtor(editor)){
            console.log("yes");
            return true;
        } else {
            console.log("no");
            return false;
        }

    });


});



















































