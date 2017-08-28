
var InspectForm={
    sub:null,
    Definition:{only:false,str:null,number:null,name:null,Password1:null,Password2:null,Postcode:null,phone:null,Mphone:null,Tphone:null,phone400:null,E_mail:null,organName:null,Organ:null,Identity:null,divSelect:null,checkbox:null,Url:null},//"Shid": '请输入18位数的社会统一信用代码',
    //默认提示文字;
    tipmsg:{
        "str":"请输入文字",
        "number":"请填写数字",
        "name":"请输入6-16位数字小写字母下划线字符",
        "Password1":"请输入8-16位英文字母或者数字",
        "Password2":"请再次输入密码",
        "Postcode":"请填写邮政编码",
        "phone":"请填写手机或者固话号码",
        "Mphone":"请填写手机号码",
        "Tphone":"请填写固话号码",
        "phone400":"请填写400服务热线号码",
        "E_mail":"请填写邮箱地址",
        "organName":"请输入企业、机构或个人名称",
        //"Shid": '请输入18位数的社会统一信用代码',
        "Organ":"请输入组织机构代码，格式:12345678-X",
        "Identity":"请输入您的身份证号码",
        "Url":"请输入链接"
    },
    errormsg:{
        "str":"不能为空！",
        "number":"必须填写数字",
        "name":"必须为6-16位数字小写字母下划线字符",
        "Password1":"必须为8-16位英文字母、下划线或者数字",
        "Password2":"两次输入的密码必须一致",
        "phone":"电话号码格式错误",
        "Mphone":"手机号码格式不正确",
        "Tphone":"固话号码格式不正确",
        "phone400":"400服务热线号码格式不正确",
        "E_mail":"邮箱地址格式不正确",
        "organName":"必须是2-25个中文或者4-100位英文",
        // "Shid": '社会统一信用代码格式错误'
        "Organ":"组织机构代码格式错误",
        "Identity":"身份证号码格式错误",
        "Url":"链接格式错误"
    },
    regText:{
        "str":/^.{1,50}$/,
        "number":/^[0-9]*$/,
        "name":/^[a-z0-9_]{6,16}$/,
        "Password1":/^\w{8,16}$/,
        "phone":/^(1[34578]{1}[0-9]{9})|([0-9]{3,4}\-[0-9]{7,8})$/,
        "Mphone":/^1[34578]{1}[0-9]{9}$/,
        "Tphone":/^[0-9]{3,4}\-[0-9]{7,8}$/,
        "phone400":/^[0-9]{10}$/,
        "E_mail":/^\w{3,}@\w+(\.\w+)+$/,
        "organName":/^[\u2E80-\u9FFF]{2,30}$|[A-Za-z]{4,100}$/,
        // "Shid": '社会统一信用代码格式错误'
        "Organ":/^[0-9]{8}\-[A-Z]{1}$/,
        "Identity":/^[0-9]{17}[0-9X]{1}$/,
        "Url":/^((https|http)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
    },
    focusFn:function(id,regular){
        $('body').on('focus',id,function(){
            $(this).siblings('.form_tips').removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
            $(this).siblings('.form_tips').text(InspectForm.tipmsg[regular]);
        });
        $('body').on('keyup',id,function(){
            $(this).siblings('.form_tips').removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
            $(this).siblings('.form_tips').text(InspectForm.tipmsg[regular]);
        });
    },
    blurFn:function(id,regular,rreg){
        var errormsg = arguments[3]?arguments[3]:false;
        //console.log('errormsg'+errormsg);
        $('body').on('blur',id,function(){
            if(errormsg){
                InspectForm.regularFn(id,regular,rreg,errormsg);
            }else{
                InspectForm.regularFn(id,regular,rreg);
            }
        });
    },
    submitFn:function(id,regular,rreg){
        var errormsg = arguments[3]?arguments[3]:false;
        $(id).closest('form').submit(function(){
            if(errormsg){
                if(!InspectForm.regularFn(id,regular,rreg,errormsg)) return false;
            }else{
                if(!InspectForm.regularFn(id,regular,rreg)) return false;
            }
            return true;
        });
    },
    regularFn:function(id,regular,rreg){
        var errormsg = arguments[3]?arguments[3]:false;
        if($(id).val()==""){
            $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
            $(id).siblings('.form_tips').text("不能为空");
            return false;
        }else{
            var text = $.trim($(id).val()),reg = rreg;
            if(!reg.test(text)){
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                if(errormsg){
                    $(id).siblings('.form_tips').text(errormsg);
                }else{
                    $(id).siblings('.form_tips').text(InspectForm.errormsg[regular]);
                }
                return false;
            }else{
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('right_tips');
                $(id).siblings('.form_tips').html("&nbsp");
                return true;
            }
        }
    },
    ratioPasswordFn:function(id){
        this.focusFn(id,'Password2');
        $('body').on('blur',id,function(){
            if($.trim($(this).val()) == ''){
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $(id).siblings('.form_tips').text("不能为空");
            }else if($.trim($(this).val()) === $(InspectForm.Definition.Password1).val()){
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('right_tips');
                $(id).siblings('.form_tips').html("&nbsp");
            }else{
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $(id).siblings('.form_tips').text(InspectForm.errormsg.Password2);
            }
        });
        $(id).closest('form').submit(function(){
            if($.trim($(id).val()) !== $(InspectForm.Definition.Password1).val()){
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $(id).siblings('.form_tips').text(InspectForm.errormsg.Password2);
                return false;
            }else if($.trim($(id).val()) == ''){
                $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                $(id).siblings('.form_tips').text("不能为空");
                return false;
            }
            return true;
        });
    },
    divSelectFn:function(id,thisChild){
        $(id[0]).closest('form').submit(function(){
            for(var i=0;i<=id.length;i++){
                if(($(id[i]).find(thisChild).text() == '请选择')||($(id[i]).find(thisChild).text() == '')){
                    $(id[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $(id[i]).siblings('.form_tips').text("请选择");
                    $('body').on('click',id[i],function(){
                        $(id[i]).siblings('.form_tips').text("").removeClass('error_tips');
                    });
                    return  false ;
                }
                return true;
            }
        });

        $(id[0]).closest('form').submit(function(){
            for(var i=0;i<id.length;i++){
                if(($(id[i]).find(thisChild).text() == '请选择')||($(id[i]).find(thisChild).text() == '')){
                    $(id[i]).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
                    $(id[i]).siblings('.form_tips').text("请选择");
                    $('body').on('click',id[i],function(){
                        $(id[i]).siblings('.form_tips').text("").removeClass('error_tips');
                    });
                    return  false ;
                }
                if((i+1) == id.length){return true;}
            }
        });

    },
    checkboxFn:function(id,thisChild){
        $(id).closest('form').submit(function(){
            if($(id).find(thisChild).is(":checked")){
                $(id).siblings('.form_tips').removeClass('error_tips');
                $(id).siblings('.form_tips').text("");
                return true;
            }
            $('body').on('click',id+' '+thisChild,function(){
                $(id).siblings('.form_tips').text("").removeClass('error_tips');
            });
            $(id).siblings('.form_tips').removeClass('focus_tips').addClass('error_tips');
            $(id).siblings('.form_tips').text("请选择");
            return  false ;
        });
    },
    IsVerification:function(){
        for(var i in InspectForm.Definition){
            if(InspectForm.Definition[i] != null && InspectForm.Definition[i] != ''&& InspectForm.Definition[i] != undefined ){
                if(typeof InspectForm.Definition[i] === 'string'){
                    if(i == 'Password2'){this.ratioPasswordFn(InspectForm.Definition[i]);continue;}
                    this.focusFn(InspectForm.Definition[i],i);
                    this.blurFn(InspectForm.Definition[i],i,InspectForm.regText[i]);
                    this.submitFn(InspectForm.Definition[i],i,InspectForm.regText[i]);
                }else if(typeof InspectForm.Definition[i] === 'object'){
                    if(i == 'str'||i == 'number'){
                        for(var j=0;j<InspectForm.Definition[i].length;j++){
                            var data = InspectForm.Definition[i][j];
                            var reg,tip;
                            if(i == 'str'){
                                reg = new RegExp("^.{"+data['min']+","+data['max']+"}$");
                                tip = '限制输入'+data['min']+'-'+data['max']+'个字符';
                            }else{
                                reg = new RegExp("^[0-9]{"+data['min']+","+data['max']+"}$");  //RegExp  建立一个正则表达式对象。
                                tip = '限制输入'+data['min']+'-'+data['max']+'位数字';
                            }
                            this.focusFn(data['name'],i);
                            this.blurFn(data['name'],i,reg,tip);
                            this.submitFn(data['name'],i,reg,tip);
                        }
                    }else if(i == 'divSelect'){
                        for(var j=0;j<InspectForm.Definition[i].length;j++){
                            var data = InspectForm.Definition[i][j];
                            this.divSelectFn(data['id'],data['child']);
                        }
                    }else if(i == 'checkbox'){
                        for(var j=0;j<InspectForm.Definition[i].length;j++){
                            var data = InspectForm.Definition[i][j];
                            this.checkboxFn(data['id'],data['child']);
                        }
                    }
                }else if(typeof InspectForm.Definition[i] === 'boolean'&&InspectForm.Definition[i]== true ){
                    this.onlyOne();  //扩展唯一验证需要引入文件：jquery.InspectForm.onlyOne.js
                }
            }
        }
    }
};
$.fn.InspectForm=function(settings){
    for(var key in settings){
        InspectForm.Definition[key] = settings[key];
    }
    InspectForm.IsVerification();
};