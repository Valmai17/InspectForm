$(document).ready(function(){
    /*————————————————————————————— 主页菜单-添加招聘 —————————————————————————————*/
    //下拉菜单防止遮挡
    var length = $('.sel_box').length+2;
    for(var i=0;i<$('.sel_box').length;i++){
        $('.sel_box').eq(i).css("zIndex",length-i);
    }

    //复选框初始化
    $('.r_check').each(function(){
        var check = $(this).prop('checked');
        if(check){
            $(this).parent('.cruit_box').addClass("cruited");
        }else{
            $(this).parent('.cruit_box').removeClass("cruited");
        }
    });
    //多选
    $('body').on("change",".r_check",function(){
        $(this) .closest(".cruitCheck").siblings(".form_tips").removeClass("error_tips").removeClass("right_tips").html("&nbsp");
        var check = $(this).prop('checked');
        if(check){
            $(this).parent('.cruit_box').addClass("cruited");
        } else{
            $(this).parent('.cruit_box').removeClass("cruited");
        }
    });

    //验证
    _empty("recJob");  //职位名称
    _empty("compName");  //公司名称


    //文本域不为空
    var recFun = function(id){
        if($('#'+id).val()==""){
            $('#'+id).focus();
            return false;
        }else{
            return true;
        }
    }

    //提交修改
    $('#recruitSub').click(function(){
        _null("recJob"); //职位名称
        _null("compName"); //公司名称
        if(_null("recJob") && _null("compName") && recFun("postDuty") && recFun("jobRequire")){
            return true;
        } else {
            return false;
        }
    });







});