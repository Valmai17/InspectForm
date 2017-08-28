$(document).ready(function(){

   //下拉列表
    $('.sel_show').click(function(event) {
        $(this).toggleClass('cur');
        //$('.sel_more').slideUp("fast");
        $(this).siblings('.sel_more').slideToggle("fast");
        $(this).parent().siblings('.sel_box').children('.sel_more').slideUp("fast");
        $(this).parent().siblings('.sel_box').children('.sel_show').removeClass('cur');
        //$(this).siblings('.sel_more').toggleClass('in');

        var text = $(this).text();
        var ele = $(this).siblings('.sel_more').children('p');
        for(var i=0;i<ele.length;i++){
            if(ele.eq(i).text() == text){
                ele.eq(i).addClass("on");
                ele.eq(i).siblings().removeClass("on");
            }
        }
        if($('.sel_box').parent().children('div').is('.sel_meng')){
            if(!$('.sel_show').is('.cur')){
                $('div.sel_meng').remove();
                // console.log($(this));
                // console.log('删除');
            }
        }else{
            $('.sel_box').eq(0).before('<div class="sel_meng" style="width:100%;height:100%;position: fixed;left:0;top:0;z-index:1;/* background:#000;*/"></div>')
        }

    });
    $('body').on('click','.sel_meng',function(){
        $('.sel_show').removeClass('cur');
        $('.sel_more').slideUp("fast");
        $(this).remove();
    });
    $('body').on('click','.sel_more p',function(){
        //console.log('x');
        var text = $(this).text();
        var value = $(this).attr('value');
        $(this).parent().siblings('.sel_show').text(text);
        $(this).parent().siblings('input').attr('value',value);
        $(this).parent().slideUp("fast");
        $(this).parent().siblings('.sel_show').removeClass('cur');

        $(this).addClass("on").siblings().removeClass("on");
        if(!$('.sel_show').is('.cur')){
            $('div.sel_meng').remove();
            // console.log($(this));
            // console.log('删除');
        }
    });

    /*—————————————————————————————— 主页菜单-添加单页 ——————————————————————————————*/
    var editor;
    //编辑器
    if($('textarea').is("#ckeditorArea")){
        editor = CKEDITOR.replace("ckeditorArea");
    }
    //editor.setData('这里是需要传递给CKEditor编辑器实例的值');
    //var val = editor.getData();  //获取编辑器内容


    //验证
    textareaLimit.word_deal("#unionTitle",3,20);  //联盟名称
    _inputFocus("sortNumber"); //排序

    //提交修改
    $('#menuPageSub01').click(function(){
        textareaLimit.panduan("#unionTitle",3,20); //名称
        _sortNumber("sortNumber"); //排序
        if(textareaLimit.panduan("#unionTitle",3,20) && _sortNumber("sortNumber")){
            console.log("yes");
            return true;
        } else {
            console.log("no");
            return false;
        }

    });

    /*—————————————————————————————— 主页菜单-添加子菜单单页 ——————————————————————————————*/

    //提交修改
    $('#menuPageSub02').click(function(){
        textareaLimit.panduan("#unionTitle",3,20); //联盟名称
        _sortNumber("sortNumber"); //排序
        if(textareaLimit.panduan("#unionTitle",3,20) && _sortNumber("sortNumber")){
            return true;
        } else {
            return false;
        }

    });

    /*————————————————————————————— 主页菜单-添加文章页/添加子菜单文章页 —————————————————————————————*/
    //复选框初始化
    $('.b_check').each(function(){
        var check = $(this).prop('checked');
        if(check){
            $(this).parent('.branch_box').addClass("branched");
        }else{
            $(this).parent('.branch_box').removeClass("branched");
        }
    });
    //多选
    $('body').on("change",".b_check",function(){
        $(this) .closest(".branCheck").siblings(".form_tips").removeClass("error_tips").removeClass("right_tips").html("&nbsp");
        var check = $(this).prop('checked');
        if(check){
            $(this).parent('.branch_box').addClass("branched");
        } else{
            $(this).parent('.branch_box').removeClass("branched");
        }
    });

    //添加分类
    $('.addBrSort').click(function(){
        $('.branchBomb_wrap').css("display",'block');
        BomBox($('.branchBomb')); //弹出框居中
        $('#noteTitle').val("");
        $('#noteDesc').val("");  //清空
    });
    //添加分类文字限制
    textareaLimit.word_deal("#noteTitle",0,20); 
    textareaLimit.word_deal("#noteDesc",0,200); 

    //弹框-添加分类-提交保存
    $('.bombSub').click(function(){
        if($('#noteTitle').val()==""){
            $('#noteTitle').focus();
            return false;
        }else{
            $('.branchBomb_wrap').css("display",'none');
            var text = $('#noteTitle').val();
            $.ajax({
                url:"",
                type:"GET",
                data:"",
                success:function(){
                    $('.addBrSort').before("<label class='branch_box'><input type='checkbox' class='b_check'>"+text+"</label>");
                },
                error:function(){
                    alert("添加失败");
                }
            });
            return true;
        }
    });

    //验证多选是否一个都没选
    function NoCheck(){
        if($(".branch_box .b_check:checked").length == 0){
            $(".branch_box .b_check") .closest(".branCheck").siblings(".form_tips").addClass("error_tips").removeClass("right_tips").html("请选择下属分类");
            return false;
        }else{
            $(".branch_box .b_check") .closest(".branCheck").siblings(".form_tips").addClass("right_tips").removeClass("error_tips").html("&nbsp");
            return true;
        }
    }

    //提交修改
    $('#subMenuPageSub').click(function(){
        textareaLimit.panduan("#unionTitle",3,20); //联盟名称
        _sortNumber("sortNumber"); //排序
        NoCheck();
        if(textareaLimit.panduan("#unionTitle",3,20) && _sortNumber("sortNumber") && NoCheck()){
            return true;
        } else {
            return false;
        }
    });







});