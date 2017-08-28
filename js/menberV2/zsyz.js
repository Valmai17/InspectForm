//删除简历
$('.resDelete').on('click', function() {

    var _this = $(this);
    var _val = $(this).parents('tr').find('input').val();

    GlobalTip.askComfirmTipBox('确定要删除该简历吗？','确定');

    $('.ComfirmTipBox_ok').on('click',function() {
        //$.get("",{_val:_val},function(result){
        _this.parents('tr').remove();
        //});
    });
});
$(document).ready(function() {
//下拉菜单防止遮挡
    var length = $('.sel_box').length;
    for (var i = 0; i < $('.sel_box').length; i++) {
        $('.sel_box').eq(i).css("zIndex", length - i);
    }
    //查看图片
    $('body').on('click','.imgShow',function(){
        var imgUrl = $('#homeImg').siblings('input[type="hidden"]').val();
        //console.log(imgUrl);
        LookImgBomb(imgUrl);
    });




});






