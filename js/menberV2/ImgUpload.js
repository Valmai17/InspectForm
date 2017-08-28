    var arr = ["gif","jpeg","jpg","png"];  //可以上传的文件类型
    //图片上传预览    IE是用了滤镜。
    function previewImage(file,previewId,imgheadId){
        var MAXWIDTH  = 348;
        var MAXHEIGHT = 238;
        var size = 1024*1024*5;
        var fileContentType = file.value.match(/^(.*)(\.)(.{1,8})$/)[3]; //这个文件类型正则很有用：）-文件类型
        //console.log(fileContentType)
        var div = document.getElementById(previewId);
        if (file.files && file.files[0]){
            var f_size = file.files[0].size;   //文件大小
            var filePath=file.value;    //文件路径：C:\fakepath\说明文档.txt
            if(f_size > size){
                alert("图片太大");
                file.value="";
                return false;
            } else {
                var fileName = filePath.split('\\').pop();  //上传的文件名字
                if(arr.join(',').toLowerCase().indexOf(fileContentType.toLowerCase()) != -1){  //检索上传的文件类型是不是在允许的arr数组之内
                    div.innerHTML ='<img id='+imgheadId+'>';
                    var img = document.getElementById(imgheadId);
                    var reader = new FileReader();
                    reader.onload = function(evt){
                        img.src = evt.target.result;  //显示的图片img路径
                        //console.log(evt.target.result);
                    }
                    reader.readAsDataURL(file.files[0]);
                } else {
                    alert("文件格式不匹配，请重新上传");
                }
            }
        } else {   //兼容IE
            try{
                var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
                file.select();
                var src = document.selection.createRange().text; //图片路径
                var srcName = src.split('\\').pop();  //上传的文件名字
                var fso = new ActiveXObject("Scripting.FileSystemObject");
                var fileSize = fso.GetFile(src).size;  //图片大小
                if(fileSize > size){
                    alert("图片太大");
                    return false;
                } else {
                    if(arr.join(',').toLowerCase().indexOf(fileContentType.toLowerCase()) != -1){
                        div.innerHTML = '<img id='+imgheadId+'>';
                        var img = document.getElementById(imgheadId);
                        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
                        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
                        div.innerHTML = "<div id='divhead' style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
                        //console.log(file.value);
                    } else {
                        alert("文件格式不匹配，请重新上传");
                    }
                }
            } catch(e) {
                alert(e+"n"+"如果错误为：Error:Automation 服务器不能创建对象；"+"n"+"请按以下方法配置浏览器："+"\n"+"请打开【Internet选项-安全-Internet-自定义级别-ActiveX控件和插件-对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本（不安全）-点击启用-确定】");
                return window.location.reload();
            }
        }
    }
    function clacImgZoomParam( maxWidth, maxHeight, width, height ){
        var param = {top:0, left:0, width:width, height:height};
        if( width>maxWidth || height>maxHeight ){
            rateWidth = width / maxWidth;
            rateHeight = height / maxHeight;
            if( rateWidth > rateHeight ){
                param.width =  maxWidth;
                param.height = Math.round(height / rateWidth);
            }else{
                param.width = Math.round(width / rateHeight);
                param.height = maxHeight;
            }
        }
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
    }