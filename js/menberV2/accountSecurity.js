$(document).ready(function(){

     /*账号安全*/
    function toggleFun(element,defaultText,siblingsClass){
        if(element.text() == "收起"){
            element.parent().siblings().slideUp(300);
            element.text(defaultText);
            setTimeout(function(){
                var HH = $('.accoBot01').css('display');
                var WW = $('.accoBot02').css('display');
                if(HH == 'none' || WW == 'none'){
                    var height = window.screen.availHeight;
                    console.log(height);
                    $('.col_right').css('height',height*0.7+'px');
                    $('.col_left').css('height',height*0.7+'px');
                }
            }, 300);
        } else {
            element.parent().siblings(siblingsClass).slideDown(300).css('display','block');
            element.text("收起");
            var HH = $('.accoBot01').css('display');
            var WW = $('.accoBot02').css('display');
            if(HH == 'block' && WW == 'block'){
                $('.col_right').css('height','938px');
                $('.col_left').css('height','938px');
            }
        }
    }

    //修改密码切换
    $('.pwToggle').click(function(){
        toggleFun($(this),"修改密码",".accoBot");
        // var ele = $(this).closest('.grayBox').siblings().find('.emailToggle');
        // if(ele.text()=="收起"){
        //     ele.text("绑定邮箱");
        //     ele.parent().siblings().slideUp(300);
        // }
        // var ele = $(this).closest('.grayBox').siblings().find('.emailToggle02');
        // if(ele.text()=="收起"){
        //     ele.text("修改邮箱");
        //     ele.parent().siblings().slideUp(300);
        // }
    });

    //绑定邮箱切换
    $('.emailToggle').click(function(){
        toggleFun($(this),"绑定邮箱",".accoBot");
        // var ele = $(this).closest('.grayBox').siblings().find('.pwToggle');
        // if(ele.text()=="收起"){
        //     ele.text("修改密码");
        //     ele.parent().siblings().slideUp(300);
        // }
    });


    //修改邮箱切换
    $('.emailToggle02').click(function(){
        toggleFun($(this),"修改邮箱",".accoModifyBox01");
        var _email = $(this).siblings('.accoDescri').children('em').text();
        $('.accoModifyBox01').find('.check_btn').siblings('span').html(_email);
        $('.size02 input').css('width',$('.size01 .content').width()-32);
        // var ele = $(this).closest('.grayBox').siblings().find('.pwToggle');
        // if(ele.text()=="收起"){
        //     ele.text("修改密码");
        //     ele.parent().siblings().slideUp(300);
        // }
    });


    //没有收到邮件？
    $('.noEmail').click(function(){
        if($(this).hasClass('noEmail_cur')){
            $('.noEmailText').slideUp(300);
            $(this).removeClass('noEmail_cur');
        } else {
            $('.noEmailText').slideDown(300);
            $(this).addClass('noEmail_cur');
        }
    });
    $('.noEmailDeleteBtn').click(function(){
         $('.noEmail').triggerHandler('click');
    });


    //确认修改密码
    _inputFocus("userPw1");
    _inputFocus("userPw2");

    $('#comfirmPwBtn').click(function(){
        _userPw1("userPw1");
        _userPw2("userPw2");
        if(_userPw1("userPw1") && _userPw2("userPw2") && $('#oldPw').val() !== ""){
            return true;
        } else {
            return false;
        }
    });


});

//发送验证码倒计时
titockFun = function (element){
    var limit=60; //倒计时多少秒
    var setTime=null;
    element.html('<i>'+limit+'</i>s').attr('disabled',true);
    var num=parseInt(element.children('i').text());
    setTime=setInterval(function(){
        if(num<=0){
            clearInterval(setTime);
            element.html('重新发送').attr('disabled',false);
        }
        num--;
        element.children('i').text(num);
    },1000);
};

//验证码验证不能为空
_verCode = function(verCode){
    $("#"+verCode).focus(function(){$("#"+verCode).siblings('.code_tips').html(""); });
    if($("#"+verCode).val()==""){
        $("#"+verCode).siblings('.code_tips').html('请输入验证码');
        return false;
    }else{
        var text = $("#"+verCode).val();
        var reg = /^\w{6}$/;
        if(!reg.test(text)){
            $("#"+verCode).siblings('.code_tips').html('请输入6位英文字母或者数字!');
            return false;
        }else{
            $("#"+verCode).siblings('.code_tips').html('');
            return true;
        }
    }
}




















































