//用户名:                    _userName
//密码：                     _userPw1
//确认密码：                 _userPw2
//手机号码：                 _userMobile_phone
//固话：                     _userTelephone
//邮箱：                     _userEmail
//两个div的select选项：      _userSle2
//select选项：               _userSle0
//公司名称/姓名/法人         _userChinese
//社会统一信用代码           _userShid
//营业执照注册号             _userB_license
//组织代码机构代码           _userOrgan
//身份证                     _userIdentity
//
//
var standRes_tips = {};
    standRes_tips.userName_enter = '请输入6-16位英文字母、下划线或者数字';
    standRes_tips.userName_reg = /^\w{6,16}$/;
    standRes_tips.userName_beginLetter = '用户名称必须是数字或字母';

    standRes_tips.userPw1_enter = '请输入8-20位英文字母或者数字';
    standRes_tips.userPw1_reg = /^\w{8,20}$/;
    standRes_tips.userPw1_beginLetter = '密码必须是数字或字母';

    standRes_tips.userPw2_enter = '请再次输入您的密码';
    standRes_tips.userPw2_reg = $("#userPw1").val();
    standRes_tips.userPw2_beginLetter = '两次输入的密码必须一致';

    standRes_tips.userMobile_phone_enter = '请输入您的手机号码';
    standRes_tips.userMobile_phone_reg = /^1[34578]{1}[0-9]{9}$/;
    standRes_tips.userMobile_phone_beginLetter = '手机号码格式错误';

    standRes_tips.userTelephone_enter = '请输入您的固话号码';
    standRes_tips.userTelephone_reg = /^[0-9]{3,4}\-[0-9]{7,8}$/;
    standRes_tips.userTelephone_beginLetter = '固话号码格式错误';

    standRes_tips.userEmail_enter = '请输入您的邮箱账号';
    standRes_tips.userEmail_reg = /^\w{3,}@\w+(\.\w+)+$/;
    standRes_tips.userEmail_beginLetter = '邮箱账号格式错误';

    // select选项
    standRes_tips.userSle0_enter = '请选择';
    standRes_tips.userSle0_reg = "请选择";
    standRes_tips.userSle0_beginLetter = '必须选择';

    //公司名称/姓名/法人/联系人
    standRes_tips.userChinese_enter = '请输入2-25个中文或者4-100位英文';
    standRes_tips.userChinese_reg = /^[\u2E80-\u9FFF]{2,30}$|[A-Za-z]{4,100}$/;
    standRes_tips.userChinese_spelChart = '不可包含特殊符号（除“_”外）';
    standRes_tips.userChinese_beginLetter = '必须是汉字或字母';

    standRes_tips.userShid_enter = '请输入18位数的社会统一信用代码';
    standRes_tips.userShid_reg = /^[A-Z0-9]{18}$/;
    standRes_tips.userShid_beginLetter = '社会统一信用代码格式错误';

    standRes_tips.userB_license_enter = '请输入营业执照代码';
    standRes_tips.userB_license_reg = /^[0-9]{15}$/;
    standRes_tips.userB_license_beginLetter = '营业执照代码必须是15位数字';

    standRes_tips.userOrgan_enter = '请输入组织机构代码，格式:12345678-X';
    standRes_tips.userOrgan_reg =/^[0-9]{8}\-[A-Z]{1}$/;
    standRes_tips.userOrgan_beginLetter = '组织机构代码格式错误';

    standRes_tips.userIdentity_enter = '请输入您的身份证号码';
    standRes_tips.userIdentity_reg =/^[0-9]{17}[0-9X]{1}$/;
    standRes_tips.userIdentity_beginLetter = '身份证号填写错误';

    standRes_tips.sortNumber_enter = '请输入数字';
    standRes_tips.sortNumber_reg =/^[0-9]*$/;
    standRes_tips.sortNumber_beginLetter = '数字格式填写错误';

    standRes_tips.unionTitle_enter = '请输入标题';
    standRes_tips.unionTitle_reg =/^.{10,50}$/;
    standRes_tips.unionTitle_beginLetter = '标题格式填写错误';

    standRes_tips.linkUrl_enter = '请输入链接';
    standRes_tips.linkUrl_reg =/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
    standRes_tips.linkUrl_beginLetter = '链接格式填写错误';

    var text = "";
    var reg  = "";
    var key = "";
    var return01 ="";

    // 获取焦点时操作
    var _inputFocus = function(inputFocus){
        $("#"+inputFocus).on('focus',function(){
            $(this).siblings('.form_tips').removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
            key =inputFocus + "_enter";
            text = standRes_tips[key];
            $(this).siblings('.form_tips').text(text);
            _inputBlur(inputFocus);
        });
    }
    function _inputBlur(inputBlur){
        $("#"+inputBlur).on('blur',function(){
            if($("#"+inputBlur).val()==""){
                $("#"+inputBlur).siblings('.form_tips').removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+inputBlur).siblings('.form_tips').text("不能为空!");
                return false;
            }else{
                //确认密码验证
                if(inputBlur=="userPw2"){
                    if($("#"+inputBlur).val()!=$("#userPw1").val()){
                       $("#"+inputBlur).siblings('.form_tips').removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                       key =inputBlur + "_beginLetter";
                       text = standRes_tips[key];
                       $("#"+inputBlur).siblings('.form_tips').text(text);
                       return false;
                   }else{
                       $("#"+inputBlur).siblings('.form_tips').addClass('right_tips');
                       $("#"+inputBlur).siblings('.form_tips').html("&nbsp");
                       return true;
                   }
                }
                //select 选项
                if(inputBlur=="userSle0"){
                    if($("#"+userSle0).val()=="请选择"){
                        $("#"+userSle0).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                        $("#"+userSle0).siblings('.form_tips').text("请选择！");
                        return false;
                    }else{
                        $("#"+inputBlur).siblings('.form_tips').addClass('right_tips');
                        $("#"+inputBlur).siblings('.form_tips').html("&nbsp");
                        return true;
                    }
                }

                text = $("#"+inputBlur).val();
                key =inputBlur + "_reg";
                reg = standRes_tips[key];
                if(!reg.test(text)){
                    $("#"+inputBlur).siblings('.form_tips').removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                    key =inputBlur + "_beginLetter";
                    text = standRes_tips[key];
                    $("#"+inputBlur).siblings('.form_tips').text(text);
                    return false;
                }else{
                    $("#"+inputBlur).siblings('.form_tips').addClass('right_tips');
                    $("#"+inputBlur).siblings('.form_tips').html("&nbsp");
                    return true;
                }
            }
        });
    }


    // 用户名
    var _userName = function(userName){
        if($("#"+userName).val()==""){
            $("#"+userName).siblings('.form_tips').addClass('error_tips');
            $("#"+userName).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userName).val();
            reg = /^\w{6,16}$/;
            if(!reg.test(text)){
                $("#"+userName).siblings('.form_tips').addClass('error_tips');
                $("#"+userName).siblings('.form_tips').text("请输入6-16位英文字母或者数字!");
                return false;
            }else{
                 return true;
            }
        }
    }

    //密码
    var _userPw1 = function(userPw1){
        if($("#"+userPw1).val()==""){
            $("#"+userPw1).siblings('.form_tips').addClass('error_tips');
            $("#"+userPw1).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userPw1).val();
            reg = /^\w{6,18}$/;
            if(!reg.test(text)){
                $("#"+userPw1).siblings('.form_tips').addClass('error_tips');
                $("#"+userPw1).siblings('.form_tips').text("请输入6-18位英文字母或者数字!");
                return false;
            }else{
                 return true;
            }
        };
    }


    //确认密码
    var _userPw2 = function(userPw2){
        if($("#"+userPw2).val()==""){
            $("#"+userPw2).siblings('.form_tips').addClass('error_tips');
            $("#"+userPw2).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            if(!($("#"+userPw2).val()==$("#userPw1").val())){
                $("#"+userPw2).siblings('.form_tips').addClass('error_tips');
                $("#"+userPw2).siblings('.form_tips').text("两次输入的密码需保持一致!");
               return false;
            }else{
                 return true;
            }
        };
    }

    // 手机
    var _userMobile_phone = function(userMobile_phone){
        if($("#"+userMobile_phone).val()==""){
            $("#"+userMobile_phone).siblings('.form_tips').addClass('error_tips');
            $("#"+userMobile_phone).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userMobile_phone).val();
            reg = /^1[34578]{1}[0-9]{9}$/;
            if(!reg.test(text)){
                $("#"+userMobile_phone).siblings('.form_tips').addClass('error_tips');
                $("#"+userMobile_phone).siblings('.form_tips').text("请输入正确的电话号码!");
                return false;
            }else{
                 return true;
            }
        };
    }



    //固话
    var _userTelephone = function(userTelephone){
        if($("#"+userTelephone).val()==""){
            $("#"+userTelephone).siblings('.form_tips').addClass('error_tips');
            $("#"+userTelephone).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userTelephone).val();
            reg = /^[0-9]{3,4}\-[0-9]{7,8}$/;
            if(!reg.test(text)){
                var e_mail = "";
                $("#"+userTelephone).siblings('.form_tips').addClass('error_tips');
                $("#"+userTelephone).siblings('.form_tips').text("请输入正确的电话号码!");
                return false;
            }else{
                 return true;
            }
        };
    }
    // 邮箱
    var _userEmail = function(userEmail){
        if($("#"+userEmail).val()==""){
            $("#"+userEmail).siblings('.form_tips').addClass('error_tips');
            $("#"+userEmail).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userEmail).val();
            reg = /^\w{3,}@\w+(\.\w+)+$/;
            if(!reg.test(text)){
                $("#"+userEmail).siblings('.form_tips').addClass('error_tips');
                $("#"+userEmail).siblings('.form_tips').text("请输入正确的邮箱账号!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 有两个div包裹的select选项
    var _userSle2 = function(userSle2){
        if($("#"+userSle2).val()=="请选择"){
            $("#"+userSle2).parent().parent().siblings('.form_tips').addClass('error_tips');
            $("#"+userSle2).parent().parent().siblings('.form_tips').text("请选择！");
            return false;
        }else{
                 return true;
            }
    }

    // select选项
    var _userSle0 = function(userSle0){
        if($("#"+userSle0).val()=="请选择"){
            $("#"+userSle0).siblings('.form_tips').addClass('error_tips');
            $("#"+userSle0).siblings('.form_tips').text("请选择！");
            return false;
        }else{
            return true;
        }
    }
    // 公司名称/姓名/法人/联系人
    var _userChinese = function(userChinese){
        if($("#"+userChinese).val()==""){
            $("#"+userChinese).siblings('.form_tips').addClass('error_tips');
            $("#"+userChinese).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userChinese).val();
            reg=/^[\u2E80-\u9FFF]{2,30}$|[A-Za-z]{4,100}$/;
            if(!reg.test(text)){
                $("#"+userChinese).siblings('.form_tips').addClass('error_tips');
                $("#"+userChinese).siblings('.form_tips').text("请输入2-25个中文或者4-100位英文!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 社会统一信用代码
    var _userShid = function(userShid){
        if($("#"+userShid).val()==""){
            $("#"+userShid).siblings('.form_tips').addClass('error_tips');
            $("#"+userShid).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userShid).val();
            reg=/^[A-Z0-9]{18}$/;
            if(!reg.test(text)){
                $("#"+userShid).siblings('.form_tips').addClass('error_tips');
                $("#"+userShid).siblings('.form_tips').text("请输入正确的社会统一信用代码!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 营业执照注册号
    var _userB_license = function(userB_license){
        if($("#"+userB_license).val()==""){
            $("#"+userB_license).siblings('.form_tips').addClass('error_tips');
            $("#"+userB_license).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userB_license).val();
            reg=/^[0-9]{15}$/;
            if(!reg.test(text)){
                $("#"+userB_license).siblings('.form_tips').addClass('error_tips');
                $("#"+userB_license).siblings('.form_tips').text("请输入正确的营业执照注册号!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 组织代码机构代码
    var _userOrgan = function(userOrgan){
        if($("#"+userOrgan).val()==""){
            $("#"+userOrgan).siblings('.form_tips').addClass('error_tips');
            $("#"+userOrgan).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userOrgan).val();
            reg=/^[0-9]{8}\-[A-Z]{1}$/;
            if(!reg.test(text)){
                $("#"+userOrgan).siblings('.form_tips').addClass('error_tips');
                $("#"+userOrgan).siblings('.form_tips').text("请输入正确的组织机构代码!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 身份证
    var _userIdentity = function(userIdentity){
        if($("#"+userIdentity).val()==""){
            $("#"+userIdentity).siblings('.form_tips').addClass('error_tips');
            $("#"+userIdentity).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+userIdentity).val();
            reg = /^[0-9]{17}[0-9X]{1}$/;
            if(!reg.test(text)){
                $("#"+userIdentity).siblings('.form_tips').addClass('error_tips');
                $("#"+userIdentity).siblings('.form_tips').text("请输入正确的身份证号码!");
                return false;
            }else{
                 return true;
            }
        };
    }

    //排序数字
    var _sortNumber = function(sortNumber){
        if($("#"+sortNumber).val()==""){
            $("#"+sortNumber).siblings('.form_tips').addClass('error_tips');
            $("#"+sortNumber).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+sortNumber).val();
            reg = /^[0-9]*$/;
            if(!reg.test(text)){
                $("#"+sortNumber).siblings('.form_tips').addClass('error_tips');
                $("#"+sortNumber).siblings('.form_tips').text("请输入数字!");
                return false;
            }else{
                 return true;
            }
        };
    }

    //标题
    var _unionTitle = function(unionTitle){
        if($("#"+unionTitle).val()==""){
            $("#"+unionTitle).siblings('.form_tips').addClass('error_tips');
            $("#"+unionTitle).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+unionTitle).val();
            reg = /^.{10,50}$/;
            if(!reg.test(text)){
                $("#"+unionTitle).siblings('.form_tips').addClass('error_tips');
                $("#"+unionTitle).siblings('.form_tips').text("请输入标题!");
                return false;
            }else{
                return true;
            }
        };
    }

    //链接
    var _linkUrl = function(linkUrl){
        if($("#"+linkUrl).val()==""){
            $("#"+linkUrl).siblings('.form_tips').addClass('error_tips');
            $("#"+linkUrl).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            text = $("#"+linkUrl).val();
            reg = /^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
            if(!reg.test(text)){
                $("#"+linkUrl).siblings('.form_tips').addClass('error_tips');
                $("#"+linkUrl).siblings('.form_tips').text("请输入链接!");
                return false;
            }else{
                 return true;
            }
        };
    }

    // 不能为空
    function _empty(empty){
        var msg = $("#"+empty).attr("emptymag");
        $("#"+empty).on('focus',function(){
            $(this).siblings('.form_tips').removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
            $(this).siblings('.form_tips').text(msg);
            _emptyblur(empty);
        });
    }
    function _emptyblur(emptyblur){
        $("#"+emptyblur).on('blur',function(){
            if($("#"+emptyblur).val()==""){
                $("#"+emptyblur).siblings('.form_tips').removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+emptyblur).siblings('.form_tips').text("不能为空");
                return false;
            }else{
                $("#"+emptyblur).siblings('.form_tips').addClass('right_tips');
                $("#"+emptyblur).siblings('.form_tips').html("&nbsp");
                return true;
            }
        });
    }

    // 不能为空
    var _null = function(null_val){
        if($("#"+null_val).val()==""){
                $("#"+null_val).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+null_val).siblings('.form_tips').text("不能为空");
                return false;
            }else{
                $("#"+null_val).siblings('.form_tips').addClass('right_tips');
                $("#"+null_val).siblings('.form_tips').html("&nbsp");
                return true;
            }
    }

    var is_num = function(val){
        if (isNaN($("#"+val).val())){
        $("#"+val).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+val).siblings('.form_tips').text("必须是数字");
                return false;
     }else{
         $("#"+val).siblings('.form_tips').addClass('right_tips');
                $("#"+val).siblings('.form_tips').html("&nbsp");
                return true;
     }
    }

    // 多个input不能为空
    var _nulls = function(null_vals){
        var vala = null_vals.split(",");
        var valc = [];
        for(var i=0;i<vala.length;i++){
            //判断是否有空的
            if(($("#"+vala[i]).val() == '请选择')||($("#"+vala[i]).val() == '')){
                $("#"+vala[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+vala[i]).siblings('.form_tips').text("不能为空");
                return  false ;
            }
        }
        $("#"+vala[0]).siblings('.form_tips').removeClass('error_tips');
        $("#"+vala[0]).siblings('.form_tips').text("");
        return true;
    }

    // select选项
    var _select = function(select){
        var vala = select.split(",");
        var valc = [];
        // //var j = 0;
        // console.log("vala:"+vala[0]);
        // console.log("vala:"+vala[1]);
        // console.log("vala:"+vala[2]);
        for(var i=0;i<vala.length;i++){
            //console.log($("#"+vala[i]+' option:selected').text());
            //判断是否有空的
            if(($("#"+vala[i]+' option:selected').text() == '请选择')||($("#"+vala[i]+' option:selected').text() == '')){//
                //console.log("heihei");
                if($("#"+vala[i]).siblings().is('.form_tips')){
                    $("#"+vala[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).siblings('.form_tips').text("不能为空");

                }else if($("#"+vala[i]).parent().parent().siblings().is('.form_tips')){
                    $("#"+vala[i]).parent().parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).parent().parent().siblings('.form_tips').text("不能为空");

                }else if($("#"+vala[i]).parent().siblings().is('.form_tips')){
                    $("#"+vala[i]).parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).parent().siblings('.form_tips').text("不能为空");
                }
                return  false ;
            }
        }
        return true;
    }
    // 地区 select选项
    var _area_select = function(select){
        var vala = select.split(",");
        var valc = [];
        // //var j = 0;
        // console.log("vala:"+vala[0]);
        // console.log("vala:"+vala[1]);
        // console.log("vala:"+vala[2]);
        for(var i=0;i<vala.length;i++){
            //console.log($("#"+vala[i]+' option:selected').text());
            //判断是否有空的
            if(($("#"+vala[i]+' option:selected').text() == '请选择')||($("#"+vala[i]+' option:selected').text() == '')){//
                //console.log("heihei");
                if($("#"+vala[i]).siblings().is('.form_tips')){
                    $("#"+vala[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).siblings('.form_tips').text("必须填写完整地区");

                }else if($("#"+vala[i]).parent().parent().siblings().is('.form_tips')){
                    $("#"+vala[i]).parent().parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).parent().parent().siblings('.form_tips').text("必须填写完整地区");

                }else if($("#"+vala[i]).parent().siblings().is('.form_tips')){
                    $("#"+vala[i]).parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $("#"+vala[i]).parent().siblings('.form_tips').text("必须填写完整地区");
                }
                return  false ;
            }
        }
        return true;
    }

    // 当select选项选中的发生变化时执行下面函数
    var _selectchang = function(){
        $("select").on("change",function() {
            if($(this).siblings().is('.form_tips')){
                $(this).siblings('.form_tips').removeClass('error_tips');
                $(this).siblings('.form_tips').text("");
            }else if($(this).parent().parent().siblings().is('.form_tips')){
                $(this).parent().parent().siblings('.form_tips').removeClass('error_tips');
                $(this).parent().parent().siblings('.form_tips').text("");
            }else if($(this).parent().siblings().is('.form_tips')){
                $(this).parent().siblings('.form_tips').removeClass('error_tips');
                $(this).parent().siblings('.form_tips').text("");
            }
        });
    }

    // 当checkbox选项
    var _checkbox = function(checkbox){
        var vala = checkbox.split(",");
        var valc = [];
        for(var i=0;i<vala.length;i++){
            //判断是否有空的
            if($("."+vala[i]).is(":checked")){
                $("."+vala[0]).parent().siblings('.form_tips').removeClass('error_tips');
                $("."+vala[0]).parent().siblings('.form_tips').text("");
                return true;
            }
        }

        $("."+vala[0]).parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
        $("."+vala[0]).parent().siblings('.form_tips').text("不能为空");
        return  false ;
    }

	/*
	 * textarea文本框限制字数
	 * minLimit最小字数
	 * maxLimit最大字数
	 */

	var textareaLimit = {
        word_deal:function (textarea,minLimit,maxLimit){
            $(textarea).keyup(function(){
                textareaLimit.panduan(textarea,minLimit,maxLimit)
            }).blur(function() {
                var comment = $.trim($(textarea).val());
                $(textarea).val(comment);
            })
        },
        panduan:function(textarea,minLimit,maxLimit){
            var comment = $.trim($(textarea).val());

            if (comment.length < minLimit) {
                $(textarea).siblings('.form_tips').removeClass('right_tips').addClass('error_tips').html('字符数不足！');
                return  false ;
            } else if (comment.length > minLimit && comment.length < maxLimit) {
                $(textarea).siblings('.form_tips').removeClass('error_tips').addClass('right_tips').html('&nbsp;');
            } else if(comment.length > maxLimit){
                var num=$(textarea).val().substr(0,maxLimit);
                $(textarea).val(num);
            }
            return true;
        }
    }


/*
 * 验证下拉菜单时不能为空
 * memberSelect       是一个数组，每一个下拉元素的ID名，例如["province","city","County"]
 * thisChild          下拉元素的child类，--显示已选菜单名字的标签类名，多个下拉菜单时显示已选文字的类名一样
 */
var _AreaSelect = function(memberSelect,thisChild){
    var vala = memberSelect;
    //console.log("vala:"+vala[0]);
    //console.log("vala:"+vala[1]);
    //console.log("vala:"+vala[2]);
    //console.log($("#"+vala[0]).children(thisChild).text());
    for(var i=0;i<vala.length;i++){
        //判断是否有空的
        if(($("#"+vala[i]).children(thisChild).text() == '请选择')||($("#"+vala[i]).children(thisChild).text() == '')){//
            //console.log("heihei");
            if($("#"+vala[i]).siblings().is('.form_tips')){
                $("#"+vala[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+vala[i]).siblings('.form_tips').text("不能为空");

            }else if($("#"+vala[i]).parent().parent().siblings().is('.form_tips')){
                $("#"+vala[i]).parent().parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+vala[i]).parent().parent().siblings('.form_tips').text("不能为空");

            }else if($("#"+vala[i]).parent().siblings().is('.form_tips')){
                $("#"+vala[i]).parent().siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $("#"+vala[i]).parent().siblings('.form_tips').text("不能为空");
            }
            return  false ;
        }
    }
    return true;
}
var _AreaSeleChange = function(element){
    element.click(function() {
        if($(this).siblings().is('.form_tips')){
            $(this).siblings('.form_tips').removeClass('error_tips');
            $(this).siblings('.form_tips').text("");
        }else if($(this).parent().parent().siblings().is('.form_tips')){
            $(this).parent().parent().siblings('.form_tips').removeClass('error_tips');
            $(this).parent().parent().siblings('.form_tips').text("");
        }else if($(this).parent().siblings().is('.form_tips')){
            $(this).parent().siblings('.form_tips').removeClass('error_tips');
            $(this).parent().siblings('.form_tips').text("");
        }
    });
}

