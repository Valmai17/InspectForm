$(document).ready(function(){

    //验证邮箱
    _inputFocus("userEmail");

    //发送验证码
    $('.check_btn').click(function(){
        _userEmail("userEmail");
        if(_userEmail("userEmail")){
            $(this).html('发送中...');
            type = $("#userEmail").val(); //console.log(type);
            _csrf = $("meta[name=csrf-token]").attr('content');
            ajaxPostCall('','type='+type+'&_csrf='+_csrf,
                    function(data){
                        titockFun($(this));
                        return true;
                    },function(data){
                        return data.msg;
                    });
                    return false;
        }else {
            return false;
        }
    });


    //确认绑定
    $('#comfirmEmBind').click(function(){
        _verCode("verCode");
        if(_verCode("verCode")){
            t=$('#verCode').val(); //验证码内容
            _csrf = $("meta[name=csrf-token]").attr('content');
            ajaxPostCall('','code='+t+'&_csrf='+_csrf,
                function(){
                    $('.accoBot').css('display','none');
                    $('.noEmailText').css('display','none');
                    $('.tureEmailYes').css('display','block');
                    $(this).closest('.accoBot').siblings('.accoTop').find('.accoIcon').removeClass('accoIconWarn').addClass('accoIconYes');
                    $(this).closest('.accoBot').siblings('.accoTop').find('.accoDescri').html('已绑定邮箱：<em>'+$('#userEmail').val()+'</em>');
                    $('.emailToggle').click(function(){
                        window.location.href = "../../memberV2/accountSetting/accountSecurity-2.html";
                    });
                },function(data){
                    console.log(data.msg);
                }
            );
            return true;
        } else {
            return false;
        }
    });



});

























































