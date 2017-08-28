$(document).ready(function(){
    /*—————————————————————————— 联盟-添加文章分类 ——————————————————————————————*/
    //添加分类文字限制
    textareaLimit.word_deal("#aActSort",0,20);  
    textareaLimit.word_deal("#aActText",0,200);  

    //添加分类-提交保存
    $('#aActSub01').click(function(){
        if($('#aActSort').val()==""){
            $('#aActSort').focus();
            return false;
        }else{
            return true;
        }
    });

    /*—————————————————————————— 联盟-添加文章 ——————————————————————————————*/
    //文章概要
    textareaLimit.word_deal("#cleTextarea",0,150);  

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


    //验证
    _empty("elitTitle");  //标题不为空
    _inputFocus("sortNumber");  //排序
    memberSeleChange($('.sel_show'));


    //提交修改
    $('#aActSub02').click(function(){
        _sortNumber("sortNumber"); //排序
        _null("elitTitle"); //标题不为空
        _memberSelect(["acticleSort"],".sel_show");  //所属分类不为空
        _memberSelect(["province","city","County"],".sel_show");  //地区不为空

        if(_sortNumber("sortNumber") && _null("elitTitle")){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });



});




