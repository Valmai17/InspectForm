$(document).ready(function(){

    /*—————————————————————————— 联盟-幻灯片页面 ——————————————————————————————*/

    //验证
    _empty("slideTitle");


    //幻灯片点击提交
    $('#slideSub').click(function(){
        checkImg('homeImg');
        _null("slideTitle");
        if(_null("slideTitle") && checkImg('homeImg')){
            return true;
        } else {
            return false;
        }
    });



});




