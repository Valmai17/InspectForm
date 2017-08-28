$(document).ready(function(){

    // 点击删除消息
    $("body").on('click',".mesDelete",function(){
        del = $(this);
        u = $(this).attr('u');
        $.ajax({
            url: '',
            type: 'GET',
            data: 'u='+ u ,
            success: function(data){
                del.closest('.mesGrayBox').slideUp("slow").remove();
            },
            error:function() {
                alert("操作失败！");
            }
        });
    });

    //订阅信息更多按钮
    $('.more').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.take_nav').animate({height:'44px'},300);
            $(this).removeClass('active');
        } else {
            $('.take_nav').animate({height:'88px'},300);
            $(this).addClass('active');
        }
    });

    $('#all').on('click', function() {
        if (this.checked) {
            $(this).parent().addClass('checked');
            $('#info_list :checkbox').prop('checked', true).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
            $('#info_list :checkbox').prop('checked', false).parent().removeClass('checked');
        }
    });

    $('#info_list :checkbox').on('click', function() {
        if (this.checked) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });

    //非已读信息被点击后
    $('#info_list a').on('click', function() {
        if (!$(this).parent().hasClass('mark')) {
            var u = $(this).siblings('input').val();
            console.log(u)
            //$.get("",{u:u},function(result){
                $(this).parent().addClass('mark');
            //})
        }
    });

    //多选标记已读
    $('#mark').on('click', function() {
        //获取选择框的值
        var valArr =[];    
        $('#info_list input[type="checkbox"]:checked').each(function(){    
            valArr.push($(this).val());    
        });

        if (valArr == '') {
            return false;
        } else {
            //$.get("",{valArr:valArr},function(result){
                $('#info_list :checkbox').each(function() {
                    if ($(this).prop('checked') == true) {
                        $(this).parent().addClass('mark');
                    }
                })
            //})
        }
             
    });

    //删除
    $('#delete').on('click', function() {
        //获取选择框的值
        var valArr =[];    
        $('#info_list input[type="checkbox"]:checked').each(function(){    
            valArr.push($(this).val());    
        });

        if (valArr == '') {
            GlobalTip.ComfirmTipBox('请选择需要删除的信息。','确定');
        } else {
            GlobalTip.ComfirmTipBox('确定要删除这些信息吗？','确定');
            $('.ComfirmTipBox_ok').on('click',function() {
                //$.get("",{valArr:valArr},function(result){
                    $('#info_list :checkbox').each(function() {
                        if ($(this).prop('checked') == true) {
                            $(this).parents('li').remove();
                        }
                    }) 
                //})
            });
        }            
    });

    //订阅设置
    $('#take_set').on('click', function() {
        $('.takeBox').fadeIn(300);
    });
    //订阅热词
    $('.take_hot :checkbox').on('click', function() {
        if (this.checked) {
            $(this).parent().addClass('checked');
        } else {
            $(this).parent().removeClass('checked');
        }
    });
    //删除已订阅
    // $('.yidingyue a').on('click', function() {
    //     $(this).remove();
    // })
});



















































