$(document).ready(function(){

    /*—————————————————————————— 基本设置 ——————————————————————————————*/

    //主页网站描述字数限制
    word_deal($('#basicDescribe'),200);

    //验证
    _empty("basicTitle");


    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });


    //点击提交修改
    $('#basicSub').click(function(){
        if(_null("basicTitle")){
            return true;
        } else {
            return false;
        }
    });



});






















































