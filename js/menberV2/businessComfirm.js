$(document).ready(function(){

    function toggleFun(element,defaultText,siblingsClass){
        if(element.text() == "收起"){
            element.parent().siblings().slideUp(300);
            element.text(defaultText);
        } else {
            element.parent().siblings(siblingsClass).slideDown(300);
            element.text("收起");
        }
    }

    //未认证展开
    $('.comfirmTog01').click(function(){
        toggleFun($(this),"立即认证",".busComBot");
    });



    //点击提交上传图片
    $('#busComImgBtn').click(function(){
        if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)){
            //alert('你是使用IE');
            var fileStream = $('#imgUpload').val();
        } else {
            var fileStream = $('.js_showBox').find('img').attr('src');
        }
        _csrf = $("meta[name=csrf-token]").attr('content');
        //console.log(fileStream);
        $.ajax({ url:'',type:"post",
            data:'fs='+fileStream+'&_csrf='+_csrf, async:false,
            success:function(data){
                if (data.code==1) {
                    window.location.href = "";
                }else {  console.log(data.content); }
            }
        });
    });


    //等待认证展开
    $('.comfirmTog02').click(function(){
        toggleFun($(this),"查看认证信息",".busComBot");
    });


    //已认证展开
    $('.comfirmTog03').click(function(){
        toggleFun($(this),"查看认证信息",".busComBot");
    });





});