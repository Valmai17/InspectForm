$(document).ready(function (){
    //----------初始化裁剪-----------------------------------------------------
    function adjust(el, selection) {
        var scaleX = $(el).width() / (selection.width || 1);
        var scaleY = $(el).height() / (selection.width || 1);
        $(el+' img').css({
            width: Math.round(scaleX*$('#avatar').width() ) + 'px',
            height: Math.round(scaleY*$('#avatar').height() ) + 'px',
            marginLeft: '-' + Math.round(scaleX * selection.x1) + 'px',
            marginTop: '-' + Math.round(scaleY * selection.y1) + 'px'
        });
    }
    function preview(img, selection) {
        adjust('#preview100', selection);
        adjust('#preview64', selection);
    }
    var w = $('img#avatar').width()/4;
    var h = $('img#avatar').height()/4;
    var selectWH;
    if(w>h || w==h){
        selectWH = h*2 ; 
    }else{
        selectWH = w*2 ;
    }
    //console.log(w,h);
    $('#id_top').attr('value',h);
    $('#id_left').attr('value',w);
    $('#id_right').attr('value',w + selectWH);
    $('#id_bottom').attr('value',h + selectWH);
    $('#avatar100').css({'width':$('img#avatar').width()*(108/selectWH)+'px','height':$('img#avatar').height()*(108/selectWH)+'px','margin-left':-w*(108/selectWH)+'px','margin-top':-h*(108/selectWH)+'px'});
    $('#avatar64').css({'width':$('img#avatar').width()*(62/selectWH)+'px','height':$('img#avatar').height()*(62/selectWH)+'px','margin-left':-w*(62/selectWH)+'px','margin-top':-h*(62/selectWH)+'px'});
    $('img#avatar').imgAreaSelect({
      aspectRatio: "4:4",
      x1: w,
      y1: h,
      x2: w + selectWH,
      y2: h + selectWH,
      onSelectEnd:function(img, selection) {
        $('#id_top').val(selection.y1);
        $('#id_left').val(selection.x1);
        $('#id_right').val(selection.x2);
        $('#id_bottom').val(selection.y2);
      },
      onSelectChange: preview
    });

    //----------初始化裁剪-----------------------------------------------------
    $('#modify_submit').click(function() {
        if( $('#id_top').val()!='' && $('#id_left').val()!='' && $('#id_right').val()!='' && $('#id_bottom').val()!='' ){
            $('#crop_form').submit();
        }else{
            GlobalTip.WarningTipBox('请选取裁剪图片范围','确定');
        }
    });
});
function uploadImage(file,id){
    alert("触发!");
    var array = ["gif","jpeg","jpg","png"];  //可以上传的文件类型 
    var size = 1024*1024*10;//文件最大值
    //console.log('文件图片ID名：'+id);
    //var file = document.getElementById(id);
    var fileContentType = file.value.match(/^(.*)(\.)(.{1,8})$/)[3];//var fileContentType = file.val().match(/^(.*)(\.)(.{1,8})$/)[3]; //这个文件类型正则很有用
    if (file.files && file.files[0]){
        var f = document.getElementById(id).files;
        //console.log('文件图片名f：'+id);
        //console.log(f);
        var f_size = f[0].size;  //文件大小

        if ($('#'+id).val() == '') {
            alert("请选择要上传的图片!");
            return false;
        }else if(f_size > size){
            alert("上传文件大小不能超过2M！请重新上传");
            $('#'+id).val('');
            return false;
        }else {
            
            var isExists = false;
            //console.log(fileContentType);
            for(var i in array) {
                if (fileContentType.toLowerCase() == array[i].toLowerCase()) {//判断都正确，进行文件提交
                    isExists = true;
                    alert("上传!");
                    $('#uploadimage_form').submit();
                    return true;
                }
            }
            if(isExists == false){
                $('#'+id).val('');
                alert("上传文件类型不正确!");
                return false;
            }
            return false; 
        }
    }else{
        try{
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            
            file.select();
            var src = document.selection.createRange().text; //图片路径
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var fileSize = fso.GetFile(src).size;  //图片大小
            //console.log(fileSize);
            if(fileSize > size){
                alert("图片太大");
                return false;
            } else {
                alert("IE上传!");
                //console.log(array.join(',').toLowerCase());
                //console.log(fileContentType.toLowerCase());
                if(array.join(',').toLowerCase().indexOf(fileContentType.toLowerCase()) != -1){
                    
                        $('#uploadimage_form').submit();
                }else{
                    alert("文件格式不匹配，请重新上传");
                }
            }
        } catch(e) {
            alert(e+"n"+"如果错误为：Error:Automation 服务器不能创建对象；"+"n"+"请按以下方法配置浏览器："+"\n"+"请打开【Internet选项-安全-Internet-自定义级别-ActiveX控件和插件-对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本（不安全）-点击启用-确定】");
            return window.location.reload();
        }
    }
};