$(document).ready(function(){

    //a标签点击事件
    homeClickEvent = function(className,info) {
        var _this = $(className);
        var _val = $(className).siblings('input').val();

        GlobalTip.askComfirmTipBox(info,'确定');

        $('.ComfirmTipBox_ok').on('click',function() {
            //$.get(url,{_val:_val},function(result){
            _this.parents('tr').remove();
            //});
        });

    };

    // 幻灯片设置
    $('.picDelete').on('click', function() {
        homeClickEvent(this,'确定要删除这张幻灯片吗？')
    });



    //主页导航设置
    $('.navDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该导航吗？')
    });


    //文章分类管理
    $('.artDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该分类吗？')
    });


    //文章列表
    $('.noteDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该文章吗？')
    });


    //产品分类管理
    $('.proDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该分类吗？')
    });


    //产品列表
    $('.goodsDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该产品吗？')
    });


    //友情链接
    $('.linkDelete').on('click', function() {
        homeClickEvent(this,'确定要删除该产品吗？')
    });
   
});






















































