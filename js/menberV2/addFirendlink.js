$(document).ready(function(){

    /*—————————————————————————————— 添加链接 ——————————————————————————————*/
    //验证
    textareaLimit.word_deal('#linkTitle',0,20);
    _inputFocus("linkUrl");   //链接
    _inputFocus("sortNumber");  //数字


    //保存
    $('#addLinkBtn').click(function(){
        _sortNumber("sortNumber");
        _null("linkTitle");  //数字
        _linkUrl("linkUrl"); //链接
        if(_sortNumber("sortNumber") && _null("linkTitle") && _linkUrl("linkUrl")){
            //console.log("yes");
            return true;
        } else {
            //console.log("no");
            return false;
        }

    });


    


});



















































