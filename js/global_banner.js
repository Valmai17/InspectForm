//$(document).ready(function() {
   
    function slide01(a){
        var mytime = 0;
        var nowing = 0;
        var _left = -$("."+a+" .bd li:first").width();
        $("."+a+" .bd li:first").clone().appendTo("."+a+' .bd');
        slide();
        function slide(){
        	window.clearInterval(mytime);
        	mytime = window.setInterval(function(){
                slide_chu();
        	}, 2000);
        }
        function slide_chu(){
            if(nowing<$("."+a+" .bd li").length-2){
                nowing++;
                $("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
                $("."+a+" .bd").stop().animate({"left":_left*($("."+a+" .bd li").length-1)},600,function(){$("."+a+" .bd").css("left",0);});
                nowing = 0;
            }
    
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        }
    
        $("."+a).mouseenter(function() {
        	window.clearInterval(mytime);
        	$("."+a+" .next").css("display","block");
        	$("."+a+" .pre").css("display","block");
        });
        $("."+a).mouseleave(function(){
            //$(".bd").stop();
        	slide();
        	$("."+a+" .next").css("display","none");
        	$("."+a+" .pre").css("display","none");
        });
    
        $("."+a+" .next").click(function(){
            if(nowing<$("."+a+" .bd li").length-2){
            	nowing++;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
            	$("."+a+" .bd").stop().animate({"left":_left*($("."+a+" .bd li").length-1)},600,function(){$("."+a+" .bd").css("left",0);});
            	nowing = 0;
            }
    
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        });
        $("."+a+" .pre").click(function(){
            if(nowing>0){
            	nowing--;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }else{
            	$("."+a+" .bd").css("left",_left * ($("."+a+" .bd li").length-1));
            	nowing = $("."+a+" .bd li").length-2;
            	$("."+a+" .bd").stop().animate({"left":_left*nowing},600);
            }
            $("."+a+" .hd li").eq(nowing).addClass('cur').siblings().removeClass('cur');
        });

        $("."+a+" .hd li").click(function(){
            $(this).addClass('cur').siblings().removeClass('cur');
            nowing = $(this).index();
            $("."+a+" .bd").stop().animate({"left":_left*nowing},600);
        });
    }
    
    
//});