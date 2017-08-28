
/*
 * textarea文本框限制字数
 */
function word_deal(textarea,limit){
    textarea.keyup(function(){
        var comment=textarea.val();
        if(strlen(comment) > limit){
            var num=textarea.val().substr(0,limit);
            textarea.val(num);
        }
    })
}
// 去掉开头和结尾的空格
function trim(str){
    return(str+"").replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}
function strlen(str){
    var str=trim(str);
    var len=str.length;
    return len;
}



/*
 * 验证编辑器是否为空
 * editor   变量-代表CKEDITOR.replace(ID名);
 * message  编辑器内容为空时提示文字
 */
var _ckedtor = function(editor){
    if(editor.getData() == ""){
        editor.focus(); //获取焦点出现光标
        return false;
    } else {
        return true;
    }
}

/*
 * 验证是否上传文件
 * checkImg   文件file标签的ID
 */
var checkImg = function(checkImg){
    if($('#'+checkImg).val() == ""){
        $('#'+checkImg).parent().siblings('.form_tips').removeClass("right_tips").addClass("error_tips").text("请上传图片");
        return false;
    } else {
        $('#'+checkImg).parent().siblings('.form_tips').removeClass("error_tips").addClass("right_tips").html("&nbsp");
        return true;
    }
}

/*
 * 验证是否上传文件
 * checkImg   文件file标签的ID
 */
var checkImgVal = function(checkImg){
    if($('#'+checkImg).siblings('input[type="hidden"]').val() == ""){
        console.log('sss')
        $('#'+checkImg).parent().siblings('.form_tips').removeClass("right_tips").addClass("error_tips").text("请上传图片");
        return false;
    } else {
        $('#'+checkImg).parent().siblings('.form_tips').removeClass("error_tips").addClass("right_tips").html("&nbsp");
        return true;
    }
}


/*
 * 上传图片显示名字
 * id             上传图片input的ID
 * postUrl        请求的路径
 * textId         显示“查看图片”的元素ID
 * imgSize        最大的上传图片大小：单位M，此参数可传可不传，为第4个参数
 */
function homeUpImgName(id,textId){
    var file = document.getElementById(id);
    var ele = $('#'+textId); //右侧显示文字元素
    //console.log('55！');
    if (file.files && file.files[0]){
        var filePath=file.value;
        var fileName = filePath.split('\\').pop();  //上传的文件名字
    }else{
        file.select();
        var src = document.selection.createRange().text; //图片路径
        var fileName = src.split('\\').pop();  //上传的文件名字
    }
    ele.html(fileName);  //文件名字显示
}



/*
 * 上传图片
 * id             上传图片input的ID
 * postUrl        请求的路径
 * textId         显示“查看图片”的元素ID
 * imgSize        最大的上传图片大小：单位M，此参数可传可不传，为第4个参数
 */
function homeUpImg(id,textId){
    var imgSize = arguments[2] ? arguments[2] :false;
    var array = ["gif","jpeg","jpg","png"];  //可以上传的文件类型
    var size = 1024*1024*imgSize; //文件最大值
    var file = document.getElementById(id);
    $("#"+id).parent().siblings('.form_tips').removeClass("right_tips").removeClass("error_tips").text("");  //onchange时提示文字去掉

    if(imgSize != false){
        if (file.files && file.files[0]){
            var f_size = file.files[0].size;   //文件大小
            var filePath=file.value;    //文件路径：C:\fakepath\说明文档.txt
            //console.log(filePath);
            if(f_size > size){
                //GlobalTip.TipMessageBox("上传图片太大！请重新上传");
                $("#"+id).parent().siblings('.form_tips').removeClass("right_tips").addClass("error_tips").text("上传图片太大！请重新上传");
                file.value="";
                return false;
            }
        } else {   //兼容IE
            // try{
            //     file.select();
            //     var src = document.selection.createRange().text; //图片路径
            //     var fso = new ActiveXObject("Scripting.FileSystemObject");
            //     var fileSize = fso.GetFile(src).size;  //图片大小
            //     if(fileSize > size){
            //         file.value="";
            //         $("#"+id).parent().siblings('.form_tips').removeClass("right_tips").addClass("error_tips").text("上传图片太大！请重新上传");
            //         //GlobalTip.TipMessageBox("上传图片太大！请重新上传");
            //         return false;
            //     }
            // } catch(e) {
            //     alert(e+"n"+"如果错误为：Error:Automation 服务器不能创建对象；"+"n"+"请按以下方法配置浏览器："+"\n"+"请打开【Internet选项-安全-Internet-自定义级别-ActiveX控件和插件-对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本（不安全）-点击启用-确定】");
            //     //return window.location.reload();
            // }
            GlobalTip.WarningTipBox('浏览器版本过低，请更换浏览器','确定');
        }
    }

    var fileContentType = $('#'+id).val().match(/^(.*)(\.)(.{1,8})$/)[3]; //这个文件类型正则：-文件类型
    if(array.join(',').toLowerCase().indexOf(fileContentType.toLowerCase()) != -1){  //检索上传的文件类型是不是在允许的arr数组之内
        var ele = $('#'+textId); //右侧显示文字元素
        //base64
        var reader = new FileReader();
        reader.onload = function(evt){
             $("#"+id).siblings('input[type="hidden"]').val(evt.target.result);  //图片img路径
        }
        reader.readAsDataURL(file.files[0]);
        ele.html('<a href="javascript:void(0);" class="imgShow">查看图片</a>');  //点击查看图片
        return true;
    } else {
        file.value="";
        //GlobalTip.TipMessageBox("上传图片类型不正确!");
        $("#"+id).parent().siblings('.form_tips').removeClass("right_tips").addClass("error_tips").text("上传图片类型不正确!");
        return false;
    }

}



/*
 * 查看图片弹框
 * url            图片的base路径
 */
LookImgBomb = function(url){
    html= '<div class="photoMeng"></div>'
            +'<div class="IImgWrap">'
                +'<img src="'+url+'" alt="" />'
                +'<a href="javascript:void(0);" class="ImgClose"></a>'
            +'</div>';
    var _Bhtml=$('#LookImgBomb');
    if(_Bhtml.length>0){
        _Bhtml.html(html);
    }else{
        $("body").append('<div id="LookImgBomb">'+html+'</div>');
        _Bhtml=$('#LookImgBomb');
    }
    _Bhtml.css('display','block');
    $('.ImgClose').click(function(){_Bhtml.css('display','none');});
    $('.photoMeng').click(function(){_Bhtml.css('display','none');});

};






