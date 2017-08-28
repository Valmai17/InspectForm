$(document).ready(function () {

    //全选
    $('#all').on('click', function () {
        if (this.checked) {
            $(this).parents('tr').addClass('checked');
            $('.table_box :checkbox').prop('checked', true).parents('tr').addClass('checked');
        } else {
            $(this).parents('tr').removeClass('checked');
            $('.table_box :checkbox').prop('checked', false).parents('tr').removeClass('checked');
        }
    });

    //选择
    $('.table_box :checkbox').on('click', function () {
        if (this.checked) {
            $(this).parents('tr').addClass('checked');
        } else {
            $(this).parents('tr').removeClass('checked');
        }
    });

    //精英联盟checkbox多选点击事件
    eliteCheckboxClickEvent = function(name,url,data,errorInfo,rightInfo,tipsInfo) {

        //获取选择框的值
        var valArr =[];
        $('.table_box td input[type="checkbox"]:checked').each(function(){
            valArr.push($(this).val());
        });

        if (valArr == '') {
            GlobalTip.askComfirmTipBox(errorInfo,'确定');
        } else {
            GlobalTip.askComfirmTipBox(rightInfo,'确定');
            $('.ComfirmTipBox_ok').on('click',function() {
                //$.get(url,{data},function(result){
                $('.table_box td :checkbox').each(function() {
                    if ($(this).prop('checked') == true) {
                        $(this).parents('tr').remove();
                        GlobalTip.TipMessageBox(tipsInfo);
                    }
                });
                //});
            });
        }
    };
    //精英联盟ajax请求
    eliteAjaxRequest = function(name,url,data,info,tipsInfo) {
        var _this = $(name);
        var _val = $(name).parents('tr').find('input').val();
        var valArr = new Array(_val);

        GlobalTip.askComfirmTipBox(info,'确定');
        $('.ComfirmTipBox_ok').on('click',function() {
            //$.get(url,{data},function(result){
            _this.parents('tr').remove();
            GlobalTip.TipMessageBox(tipsInfo);
            //});
        });

    };

    //联盟成员
    //多选同意
    $('#agree').on('click', function() {
        eliteCheckboxClickEvent(this,'url','ids:valArr,type=1','请选择需要同意的成员。','确定要同意这些成员吗？','操作成功！');
    });

    //多选拒绝
    $('#refuse').on('click', function() {
        eliteCheckboxClickEvent(this,'url','ids:valArr,typr=2','请选择需要拒绝的成员。','确定要拒绝这些成员吗？','操作成功！');
    });

    //单条同意拒绝
    $('#shenhe td a').on('click', function() {

        if ($(this).attr('class') == 'agree') {

            eliteAjaxRequest(this,'url','ids:valArr,type=1','确定要同意该成员吗？','操作成功！')

        } else if ($(this).attr('class') == 'refuse') {

            eliteAjaxRequest(this,'url','ids:valArr,type=2','确定要拒绝该成员吗？','操作成功！')

        }
    });

    //联盟成员已通过页
    //多选全选移除
    $('#memberDelete').on('click', function () {

        eliteCheckboxClickEvent(this,'url','ids:valArr','请选择需要移除的成员。','确定要移除这些成员吗？','操作成功！')

    });

    //移除按钮
    $('.remove').on('click', function () {
        eliteAjaxRequest(this,'url','ids:valArr','确定要移除该成员吗？','操作成功！')
    });

    //幻灯片设置
    $('.picDelete').on('click', function() {
        eliteAjaxRequest(this,'url','id:_val','确定要删除这张幻灯片吗？','操作成功！')
    });

    //我加入的联盟退出按钮
    $('.signOut').on('click', function() {
        eliteAjaxRequest(this,'url','id:_val','确定要退出吗？','操作成功！')
    });

    //联盟招聘
    $('.recDelete').on('click', function() {
        eliteAjaxRequest(this,'url','id:_val','确定要删除该招聘信息吗？','操作成功！')
    });

    //会员类型
    $('.moreType').on('click', function() {
        $(this).toggleClass('active').children('ul').slideToggle();
    })

    //文章分类
    $('.artDelete').on('click', function() {
        eliteAjaxRequest(this,'url','id:_val','确定要删除该文章分类吗？','操作成功！')
    });

    //文章列表
    //多选全选删除
    $('#articleDelete').on('click', function () {
        eliteCheckboxClickEvent(this,'url','ids:valArr','请选择需要删除的文章。','确定要删除这些文章吗？','操作成功！')
    });

    //移除按钮
    $('.artDelete_list').on('click', function () {
        eliteAjaxRequest(this,'url','ids:valArr','确定要删除该文章吗？','操作成功！')
    });

    //主页菜单
    $('dt p em').on('click', function() {
        _this = $(this).parents('dl');
        $('.col_right').css('height','auto');

        _this.toggleClass('checked').siblings('dl').removeClass('checked').children('dd').slideUp();
        _this.children('dd').slideToggle();

    });
    //删除子菜单
    $('.menuDelete').on('click', function() {
        var _this = $(this);
        var _val = $(this).siblings('input').val();

        GlobalTip.askComfirmTipBox('确定要删除该栏目吗？','确定');

        $('.ComfirmTipBox_ok').on('click',function() {
            //$.get("",{_val:_val},function(result){
            _this.parents('dl').remove();
            //});
        });
    });
})
