$(document).ready(function(){
    globalHeight();  //调整主体高度

    if($('.col_left ul li dt i.msg').text() == 0){$('.col_left ul li dt i.msg').css('display','none');}
    if($('.col_left ul li dd i.msg').text() == 0){$('.col_left ul li dd i.msg').css('display','none');} 
    if($('.col_left ul li dd a.on').parent().index() == 1){$('.col_left ul li dd a.on').css('border-top-color','#f7f7f7')}
    if($('.col_left ul li dd a.on').parent().index() == $('.col_left ul li dd a.on').closest('dl').children('dd:last').index()){$('.col_left ul li dd a.on').css('border-bottom-color','#f7f7f7')}

    //左侧边栏点击事件
    
    $('.col_left ul li dl dt').click(function(){
        $(this).siblings('dd').slideToggle("fast");
        $(this).parent().parent().siblings('li').children('dl').children('dd').slideUp("fast");
            var index  = $(this).parent().parent().index();
        if($(this).parent().is('.cur')){
            setTimeout(function() {$('.col_left ul li').eq(index).children('dl').removeClass('cur');},200);
            //$(this).parent().removeClass('cur');
            $(this).children('.del').addClass('del0').removeClass('del180');
        }else{
            $(this).parent().addClass('cur');
            $(this).children('.del').addClass('del180').removeClass('del0');
        }
        setTimeout(function() {$('.col_left ul li').eq(index).siblings('li').children('dl').removeClass('cur').children('dt').children('.del').removeClass('del0').removeClass('del180');globalHeight(); },200);
        
    });

    //搜索点击事件
    $('body').on('click','.current_mold',function(){
        $('.logo_box .more_mold').toggleClass('more_mold_on');
        if($('body').children('div').is('.meng')){
            $('.meng').remove();
        }else{$('body').append('<div class="meng" style="width:100%;height:100%;position: fixed;left:0;top:0;z-index:1"></div>')}
    });
    $('body').on('click','.meng',function(){
        $('.more_mold').removeClass('more_mold_on');
        $(this).remove();
    });
    $('body').on('click','.more_mold p',function(){
        var text = $(this).text();
        var Type = $("#flSsInputVal").attr("t",$(this).attr("id"));
        $('.search .current_mold').children('span').text(text);
        $(this).parent().removeClass('more_mold_on');
        $('.meng').remove();
    })
    // $('#flSsBtn').click(function () {
    //     if ($.trim($('#flSsInputVal').val()) == '') {
    //       //alert('请输入搜索内容！');
    //       //GlobalTip.TipMessageBox('请输入搜索内容!');
    //       return
    //     }
    //     window.open($('#' + $('#flSsInputVal').attr('t')).attr('url') + '?w=' + encodeURIComponent($('#flSsInputVal').val()));
    // })

    //下拉列表
    // $('.sel_show').click(function(event) {
    //     $(this).toggleClass('cur');
    //     $(this).siblings('.sel_more').slideToggle("fast");
    //     //$(this).siblings('.sel_more').toggleClass('in');
    // });
    // $('body').on('click','.sel_more p',function(){
    //     var text = $(this).text();
    //     var value = $(this).attr('value');
    //     $(this).parent().siblings('.sel_show').text(text);
    //     $(this).parent().siblings('input').attr('value',value);
    //     $(this).parent().slideUp("fast");
    //     $(this).parent().siblings('.sel_show').removeClass('cur');
    // });

    //-------------弹出所在行业弹窗-----------------------------------------------------
    $('body').on('click','.industry_btn',function(event) {
        $('.industryBox').css('display','block');
        if($('#hyFtype p').length == 0 ){
        inithyFtype('hyFtype','hyStype');
        $('#hyFtype p').eq(0).addClass('on');}
        if($(this).siblings().is('span')){
            var text = $(this).siblings('span').text();
            var textArr = text.split(",");
            $('.industryBox').find('.selected').find('ul').empty();
            for(var i=0;i<textArr.length;i++){
                $('.industryBox').find('.selected').find('ul').append('<li><a href="javascript:;;">'+textArr[i]+'<span></span></a></li>');
            }
        }
    });
    $('body').on('click','#hyFtype p',function() {
        $(this).addClass('on').siblings('p').removeClass('on');
    });
    $('body').on('click','#hyStype p a',function() {
        var text = $(this).siblings('span').text();
        var l = $(this).closest('#hyStype').siblings('.selected').find('ul').children('li');
        if(l.length < 5 ){
            for(var i=0;i<l.length;i++){
                if(text == l.eq(i).text()){
                    return false;
                }
            }
            $(this).closest('#hyStype').siblings('.selected').find('ul').append('<li><a href="javascript:;;">'+text+'<span></span></a></li>');
        }else{
            GlobalTip.TipMessageBox('最多添加5个！');
        }
    });
    
    $('body').on('click','.selected_list ul li a span',function() {
        $(this).closest('li').remove();
    });

    $('body').on('click','.industry_content .selected  .ok',function() {
        var l = $(this).siblings('.selected_list').find('ul').children('li');
        var text="";
        for(var i=0;i<l.length;i++){
            text = text + l.eq(i).text() + "、";
        }
        text =text.substring(0,text.length-1);
        //console.log(text);
        if(l.length != 0){
            $('.industry_btn').parent().html('<span>'+text+'</span><a class="a_btn industry_btn" href="javascript:;;">修改</a>')
        }else{
            $('.industry_btn').parent().html('<button  type="button"  class="white_btn industry_btn">添加</button>');
        }
        $('.industryBox').css('display','none');
    });


    //------------ 弹出主营产品、所属领域弹窗 ------------------------------------------------------------------------------
    $('body').on('click','.products_btn',function(event) {
        $('.productsBox').css('display','block');
        if($('#productsA p').length == 0 ){
             initProductsA('productsA');
        }
        if($(this).siblings().is('span')){
            var text = $(this).siblings('span').text();
            var textArr = text.split("、");
            $('.productsBox').find('.selected').find('ul').empty();
            for(var i=0;i<textArr.length;i++){
                $('.productsBox').find('.selected').find('ul').append('<li><a href="javascript:;;">'+textArr[i]+'<span></span></a></li>');
            }
        }
    });
    $('body').on('click','#productsA p,#productsB p',function() {
        $(this).addClass('on').siblings('p').removeClass('on');
    });
    
    $('body').on('click','.manual_btn',function(){
        var text = $('#manual_products').val();
        if(text != '' && text != undefined){
             var textArr = text.split("，");
             for(var i=0;i<textArr.length;i++){
                
                var l = $(this).closest('.manual').siblings('.products_content').children('.selected').find('ul').children('li');
                //if(l.length < 5 ){
                    $('.productsBox').find('.selected').find('ul').append('<li><a href="javascript:;;">'+textArr[i]+'<span></span></a></li>');
                //}else{
                   // GlobalTip.TipMessageBox('最多添加5个！');
                   // return false;
               // }
                
             }
        }
    });
    $('body').on('click','#productsC p a',function() {
        var text = $(this).siblings('span').text();
        var l = $(this).closest('#productsC').siblings('.selected').find('ul').children('li');
        //if(l.length < 5 ){
            for(var i=0;i<l.length;i++){
                if(text == l.eq(i).text()){
                    return false;
                }
            }
            $(this).closest('#productsC').siblings('.selected').find('ul').append('<li><a href="javascript:;;">'+text+'<span></span></a></li>');
        //}else{
            //GlobalTip.TipMessageBox('最多添加5个！');
        //}
    });

    $('body').on('click','.products_content .selected  .products_ok',function() {
        var l = $(this).siblings('.selected_list').find('ul').children('li');
        var text="";
        for(var i=0;i<l.length;i++){
            text = text + l.eq(i).text() + "、";
        }
        text =text.substring(0,text.length-1);
        //console.log(text);
        if(l.length != 0){
            $('.products_btn').parent().html('<span>'+text+'</span><a class="a_btn products_btn" href="javascript:;;">修改</a>')
        }else{
            $('.products_btn').parent().html('<button  type="button"  class="white_btn products_btn">添加</button>');
        }
        $('.productsBox').css('display','none');
    });

    // 关注动态列表页
    $('.main_nav li').on('click', function() {
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.main_content').eq(_index).removeClass('hide').siblings('.main_content').addClass('hide');
    });





    //关闭弹窗
    $('.close').click(function(event) {
        $(this).parent().parent().css('display','none');
    });


    

});

//-----------------------------------行业---------------------------------------------------
function inithyFtype(hyFtypeid,hyStypeid){//初始化行业一级数据
    var isStyle = true ;
    $.each(hyData,function(hyFtype){
        $('#'+hyFtypeid).append('<p onclick="inithyStype('+"'"+hyFtype+"','"+hyStypeid+"'"+')">'+hyFtype+'</p>');
        if(isStyle === true){
            isStyle = false;inithyStype(hyFtype,hyStypeid);
        }
    });
}
function inithyStype(hyFtype,hyStypeid){//初始化行业二级数据
    $('#'+hyStypeid).empty();
    for(var i=0;i<hyData[hyFtype].length;i++){
        $('#'+hyStypeid).append('<p><span>'+hyData[hyFtype][i]+'</span><a href="javascript:;;">添加</a></p>');
        //console.log(hyStypeid);
    }
}

//-----------------------------------主营产品、所属专业、所属领域、服务项目、---------------------------------------------------
function initProductsA(ProductsA){//初始化行业一级数据
    console.log('执行');
    var isStyle = true;
    $.each(Data,function(Productsid){
        $('#'+ProductsA).append('<p onclick="initProductsB('+"'"+Productsid+"'"+')">'+Productsid+'</p>');
        if(isStyle === true){
            isStyle = false;initProductsB(Productsid); $('#'+ProductsA+' p').eq(0).addClass('on');
        }
    });

}
function initProductsB(ProductsA){//初始化行业二级数据
    $('#productsB').empty();
    var isStyle = true;
    $.each(Data[ProductsA],function(ProductsB){
        $('#productsB').append('<p onclick="initProductsC('+"'"+ProductsA+"','"+ProductsB+"'"+')">'+ProductsB+'</p>');
        if(isStyle === true){
            isStyle = false;initProductsC(ProductsA,ProductsB); $('#productsB p').eq(0).addClass('on');
        }
    });
}
function initProductsC(ProductsA,ProductsB){//初始化行业一级数据
    $('#productsC').empty();
    for(var i=0;i<Data[ProductsA][ProductsB].length;i++){
        $('#productsC').append('<p><span>'+Data[ProductsA][ProductsB][i]+'</span><a href="javascript:;;">添加</a></p>');
    };
}

function globalHeight(){  //调整主体高度
    //console.log($('.col_left').css('height'));
    $('.col_left').css('height','auto');
    $('.col_right').css('height','auto');
    var height = window.screen.availHeight;
    var l_height = $('.col_left').height();
    var r_height = $('.col_right').height();
    if(height*0.7 > l_height && height*0.7 > r_height){
        $('.col_left').css('height',height*0.7);
        $('.col_right').css('height',height*0.7);
    }else if(height*0.7 > l_height && height*0.7 < r_height){
        $('.col_left').css('height',r_height);
    }else if(height*0.7 < l_height && height*0.7 > r_height){
        $('.col_right').css('height',l_height);
    }else if(height*0.7 < l_height && height*0.7 < r_height){
        if(l_height>r_height){
            $('.col_right').css('height',l_height);
        }else{
            $('.col_left').css('height',r_height);
        }
    }

    var h_height = $('.col_right').height() - 170;
    $('#home_main').css('min-height', h_height);
    //console.log($('.col_left').css('height'));
}
