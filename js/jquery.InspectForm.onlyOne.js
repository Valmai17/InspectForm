InspectForm.onlyOne = function(){
    if(this.Definition.name != null && this.Definition.name != ''&& this.Definition.name != undefined){
        $(this.Definition.name).blur(function(){
            var username = $.trim($(this).val());
            if(username != '' &&  (InspectForm.regText.name).test(username) ){
                
                $.get("/member/register/reg-call.html", {value: username,type:'username'},function(data){
                    if (data.code === 0) {
                        $(InspectForm.Definition.name).siblings('.form_tips').html(data.msg).removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                    }
                });
            }
        });
        $(this.Definition.name).keyup(function(){
            $(this).siblings('.form_tips').html(InspectForm.tipmsg.name).removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
        });
        $(this.Definition.name).closest('form').submit(function(){
            if($(InspectForm.Definition.name).siblings('.form_tips').is('.error_tips')){ return false;}
            return true;
        });
    }
    
    
    if(this.Definition.E_mail != null && this.Definition.E_mail != ''&& this.Definition.E_mail != undefined){
        $(this.Definition.E_mail).blur(function(){
            var Email = $.trim($(this).val());
            if(Email != ''&& (InspectForm.regText.E_mail).test(Email)){
                $.get("/member/register/reg-call.html", {value: Email,type:'email'},function(data){
                    if (data.code === 0) {
                        $(InspectForm.Definition.Email).siblings('.form_tips').html(data.msg).removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                    }
                });
            }
        });
        $(this.Definition.E_mail).keyup(function(){
            $(this).siblings('.form_tips').html(InspectForm.tipmsg.E_mail).removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
        });
        $(this.Definition.E_mail).closest('form').submit(function(){
            if($(InspectForm.Definition.E_mail).siblings('.form_tips').is('.error_tips')) { return false;}
            return true;
        });
    }
    
    
    
    if(this.Definition.organName != null && this.Definition.organName != ''&& this.Definition.organName != undefined){
        $(this.Definition.organName).blur(function(){
            var name = $.trim($(this).val());
            if(name != ''&&(InspectForm.regText.organName).test(name)){
                $.get("/member/register/reg-call.html", {value: name,type:'name'},function(data){
                    if (data.code === 0) {
                        $(InspectForm.Definition.organName).siblings('.form_tips').html(data.msg).removeClass('right_tips').removeClass('focus_tips').addClass('error_tips');
                    }
                });
            }
        });
        $(this.Definition.organName).keyup(function(){
            $(this).siblings('.form_tips').html(InspectForm.tipmsg.organName).removeClass('right_tips').removeClass('error_tips').addClass('focus_tips');
        });
        $(this.Definition.organName).closest('form').submit(function(){
            if($(InspectForm.Definition.organName).siblings('.form_tips').is('.error_tips')) { return false;}
            return true;
        });
    }
};