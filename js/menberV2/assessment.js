$(document).ready(function () {

    //导航条
    $('.nav a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    //跟进提醒查看项目弹窗
    $('.view_item').on('click', function () {
        $('#viewItemBox').remove();
        var _val = $(this).siblings('input').val();
        console.log(_val)
        //$.get("",{_val:_val},function(result){
        $('.col_right').append(
            '<div id="viewItemBox">'
            + '<h3><span>项目信息</span><i class="see_close"></i></h3>'
            + '<div class="itemInfo">'
            + '<p><span>开始时间：</span><i>2017-01-16</i></p>'
            + '<p><span>结束时间：</span><i>2017-01-16</i></p>'
            + '<p><span>进度：</span><i>正在处理</i></p>'
            + '<p><span>完成度：</span><i>10%</i></p>'
            + '<p><span>来源：</span><i>杨先生</i></p>'
            + '<p><span>时间：</span><i>2017-01-16</i></p>'
            + '</div>'
            + '</div>'
        );
        //})
    })
    //移除跟进提醒查看项目弹窗
    $('body').on('click', '.see_close', function () {
        $('#viewItemBox').remove();
    });

    //已规划的项目跟进明细
    $('.planning .detail').on('click', function() {
        _this = $(this).parents('dl');
        $('.col_right').css({'min-height':'728px','height':'auto'});
        _this.siblings('dl').children('dd').slideUp();
        _this.children('dd').slideToggle().find('textarea').focus();
    });

    $('.planning .blue_btn').on('click', function() {
        var _this = $(this);
        var txt = _this.siblings('textarea').val();
        var _val = _this.siblings('input').val();

        if (txt == '') {
            GlobalTip.TipMessageBox('提交内容不能为空');
        } else {
            //$.get(url,{txt:txt,_val:_val},function(result) {
            _this.parents('tr').before(
                '<tr>'
                +'<td>2016-02-09</td>'
                +'<td>'+ txt +'</td>'
                +'<td>杨先生</td>'
                +'</tr>'
            );
            _this.siblings('textarea').val('');
            //})
        }

    });

    //添加项目
    textareaLimit.word_deal('#item_name',0,30);
    textareaLimit.word_deal('#item_txt',0,300);
    //验证
    _empty("item_name");

    $("#item_btn").click(function(){
        if( _null("a_sort")){
            return true;
        } else {
            return false;
        }
    });

});

//下单
function order(cid, item_name, iid) {
    GlobalTip.askComfirmTipBox('是否确定下单？', '确定');
    $('.ComfirmTipBox_ok').on('click', function () {
        // var url="/member/company/is_order.html";
        // $.get(url,{cid:cid,item_name:item_name,iid:iid},function(data){
        //     if (data == 1 || data == 2) {
        GlobalTip.TipMessageBox('项目下单成功');
        //     } else if(data == 3){
        //         GlobalTip.TipMessageBox("请勿重复下单");
        //     } else {
        //         GlobalTip.TipMessageBox("下单失败,请重试");
        //     }
        // });
    });
};
//退单
function todelete(id) {
    $('#viewItemBox').remove();
    // $.get("/member/center/myc/assess_company.html?flag=get_delete_status", {id: id}, function (result) {
    //     if (result === "2") {
    //         GlobalTip.TipMessageBox("正在接受审核中");
    //     } else {
            $('.col_right').append(
                '<div id="viewItemBox">'
                + '<h3><span>退单,请填写原因</span><i class="see_close"></i></h3>'
                + '<div class="todelete">'
                + '<textarea id="ask" placeholder=""></textarea>'
                + '<a href="javascript:;" id="tocancel">取消</a>'
                + '<a href="javascript:;" id="tokeep">保存</a>'
                + '</div>'
                + '</div>'
            );
            $('#ask').focus();
            //点击保存
            $('#tokeep').on('click', function() {
                var txt=$("#ask").val();
                console.log(txt)
                // $.get("/member/center/myc/assess_company.html?flag=delete",{content:txt,id:id},function(result){
                //     if(result==="1"){
                //         GlobalTip.TipMessageBox("提交成功，请等待工作人员审核");
                //     } else {
                GlobalTip.TipMessageBox("提交失败");
                //     }
                // });
                $('#viewItemBox').remove();
            });
            //点击取消
            $('#tocancel').on('click', function() {
                $('#viewItemBox').remove();
            });
    //     }
    // })
};
