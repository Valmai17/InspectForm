$(document).ready(function(){

    //第一步，验证身份发送验证码
    $('.check_btn01').click(function(){
        $(this).html('发送中...');
        type = $(this).siblings('span').text(); console.log(type);
        _csrf = $("meta[name=csrf-token]").attr('content');
        ajaxPostCall('','type='+type+'&_csrf='+_csrf,
            function(data){
                titockFun($(this));
            },function(data){
                //console.log(data.msg);
            }
        );
    });

   //第一步，点击下一步
    $('#nextBtn').click(function(){
        _verCode("edCode01");
        if(_verCode("edCode01")){
            t=$('#edCode01').val(); console.log(t)//验证码内容
            _csrf = $("meta[name=csrf-token]").attr('content');
            // ajaxPostCall('','code='+t+'&_csrf='+_csrf,
            //     function(){
                    $('.accoModifyBox01').css('display','none');
                    //$('.accoModifyBox01').removeClass('accoBot02');

                    $('.noEmailText').css('display','none');
                    $('.accoModifyBox02').css('display','block');
                    //$('.accoModifyBox02').addClass('accoBot02');
                // },function(data){
                //     console.log(data.msg);
                // });
            return true;
        } else {
            return false;
        }
    });




    //第二步，绑定新邮箱
    //验证邮箱
    _inputFocus("userEmail");

    //发送验证码
    $('.check_btn02').click(function(){
        _userEmail("userEmail");
        if(_userEmail("userEmail")){
            $(this).html('发送中...');
            type = $("#userEmail").val(); //console.log(type);
            _csrf = $("meta[name=csrf-token]").attr('content');
            // ajaxPostCall('','type='+type+'&_csrf='+_csrf,
            //         function(data){
                        titockFun($(this));
                        return true;
                    // },function(data){
                    //     return data.msg;
                    // });
                    // return false;
        } else {
            return false;
        }
    });


    //确认修改
    $('#comfirmCodeBtn').click(function(){
        _userEmail("userEmail");
        _verCode("edCode02");
        if(_verCode("edCode02") && _userEmail("userEmail")){
            t=$('#edCode02').val(); console.log(t)//验证码内容
            _csrf = $("meta[name=csrf-token]").attr('content');
            // ajaxPostCall('','code='+t+'&_csrf='+_csrf,
            //     function(){
                    $('.accoModifyBox02').css('display','none');
                    $('.noEmailText').css('display','none');
                    $(this).closest('.accoModifyBox02').siblings('.accoTop').find('.accoDescri').html('已绑定邮箱：<em>'+$('#userEmail').val()+'</em>');
                    $(this).closest('.accoModifyBox02').siblings('.accoTop').find('.emailToggle02').html('修改邮箱');
            //     },function(data){
            //         console.log(data.msg);
            //     }
            // );
            return true;
        } else {
            return false;
        }
    });







});

























































