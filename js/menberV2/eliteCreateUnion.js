$(document).ready(function(){
    //验证
    textareaLimit.word_deal("#unionTitle",10,50);  //联盟名称
    memberSeleChange($(".sel_box")); //地区

    //域名
    $("#cUnionUrl").focus(function(){
        $(this).siblings('.form_tips').removeClass("right_tips").removeClass('error_tips').html("&nbsp");
    });

    var _domainName = function(domainName){
        if($("#"+domainName).val()==""){
            $("#"+domainName).siblings('.form_tips').removeClass("right_tips").addClass('error_tips');
            $("#"+domainName).siblings('.form_tips').text("不能为空!");
            return false;
        }else{
            var text = $("#"+domainName).val();
            var reg = /^[^\u4e00-\u9fa5]{0,}$/;
            if(!reg.test(text)){
                $("#"+domainName).siblings('.form_tips').removeClass("right_tips").addClass('error_tips');
                $("#"+domainName).siblings('.form_tips').text("不能输入汉字");
                return false;
            }else{
                $("#"+domainName).siblings('.form_tips').addClass("right_tips").removeClass('error_tips').html("&nbsp");
                return true;
            }
        }
    }

    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });


    //创建联盟-保存提交
    $('#creatSub01').click(function(){
        _domainName("cUnionUrl");  //域名 
        textareaLimit.panduan("#unionTitle",10,50); //名称
        _memberSelect(["province"],".sel_show");  //验证下拉不为空
        checkImgVal("homeImg");  //验证图片

        if(_domainName("cUnionUrl") && _memberSelect(["province"],".sel_show") && _memberSelect(["province"],".sel_show") && checkImgVal("homeImg") ){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }
    });


   //我创建的联盟-修改保存
    $('#creatSub02').click(function(){
        textareaLimit.panduan("#unionTitle",10,50); //名称
        _memberSelect(["province"],".sel_show");  //验证下拉不为空
        checkImgVal("homeImg");  //验证图片

        if(textareaLimit.panduan("#unionTitle",10,50) && _memberSelect(["province"],".sel_show") && checkImgVal("homeImg")){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }
    });






});