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
  


    
    /*—————————————————————————————— 文章分类管理-添加修改分类 ——————————————————————————————*/

    //添加修改分类--描述字数限制
    word_deal($('#add_modify'),150);

    //验证
    _empty("a_sort");

    $("#aMoSub").click(function(){
        if( _null("a_sort")){
            return true;
        } else {
            return false;
        }  
    });




   


});



















































