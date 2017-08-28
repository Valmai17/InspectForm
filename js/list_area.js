/*$(function(){*/
    var Pindex;//获取省份的名称
    var Cindex;//获取城市的名称
    
    /*设置默认的选择地区*/
    function selectArea(arr){
        /*将获取的option值赋给select_show盒子*/
        $('.sel_box select').change(function(){
            var getSelectVal=$(this).children('option:selected').text();
            $(this).siblings('.sel_show').children('i').text(getSelectVal);
        })

        //获取地区省份
        init();
        function init(){
            $.each(HBAreaData,function(province){
                var _provinceid=province.split("|")[0];
                var _province=province.split("|")[1];
                $('#default1').find('.select_sheng').append('<option value="'+_provinceid+'">'+_province+'</option>');
                //设置默认省份
                if(arr[0]==province.split('|')[0]){
                    Pindex=province;
                    //console.log(Pindex);
                    $('#default1').find('.select_sheng').children('option').each(function(){                       
                        if(Pindex.split('|')[0]==$(this).val()){                           
                            $(this).val(Pindex.split('|')[0]).attr('selected','selected').siblings('option').removeAttr('selected','selected'); 
                            $('#default1').find('.sel_show').children('i').text(Pindex.split('|')[1]);
                            //只默认省份重新选择
                            mchange();
                        }
                    })
                }
            })
        }
        //动态加载出城市
        $.each(HBAreaData,function(province){
            if(province.split('|')[1]==$('#default1:eq(0)').find('.select_sheng').children('option:selected').text()){               
                $.each(HBAreaData[Pindex],function(city){
                    var _cityid=city.split('|')[0];
                    var _city=city.split('|')[1];
                    $('#default2').find('.select_city').append('<option value="'+_cityid+'">'+_city+'</option>');
                    //设置默认城市
                    if(arr[1]==city.split('|')[0]){
                        Cindex=city;
                        //console.log(Cindex);
                        $('#default2').find('.select_city').children('option').each(function(){                       
                            if(Cindex.split('|')[0]==$(this).val()){                           
                                $(this).val(Cindex.split('|')[0]).attr('selected','selected').siblings('option').removeAttr('selected','selected'); 
                                $('#default2').find('.sel_show').children('i').text(Cindex.split('|')[1]);
                                //默认城市重新选择
                                mchange();                                                       
                            }
                        }) 
                    }
                })
            }
        })

        //默认显示地区
        for(var i=0;i<HBAreaData[Pindex][Cindex].length;i++){
            var _countyid=HBAreaData[Pindex][Cindex][i].split('|')[0];
            var _county=HBAreaData[Pindex][Cindex][i].split('|')[1]
            $('#default3').find('.select_county').append('<option value="'+_countyid+'">'+_county+'</option>')
            //设置默认地区
            if(arr[2]==_countyid){
                $('#default3').find('.select_county').children('option').each(function(){                       
                    if(_countyid==$(this).val()){                           
                        $(this).val(_countyid).attr('selected','selected').siblings('option').removeAttr('selected','selected'); 
                        $('#default3').find('.sel_show').children('i').text(_county);                      
                    }
                }) 
            }
        }
    }

    /*重新选择省份开始操作*/
    function mchange(){
        $('#default1').find('.select_sheng').change(function(event) {
            var t_city=$(this).parent('.sel_box').siblings().children('.select_city');
            var t_county=$(this).parent('.sel_box').siblings().children('.select_county');
            t_city.children('option:gt(0)').remove();
            t_county.children('option:gt(0)').remove();
            t_city.change();
            t_county.change();

            var s_options=$(this).children('option:selected').text();
            //alert(s_options);
            $(this).children('option:selected').attr('selected','selected').siblings('option').removeAttr('selected','selected'); 
            //获取省份对应的市
            function initCity(){
                $.each(HBAreaData,function(province){
                    if(province.split('|')[1]==s_options){
                        //alert(province.split('|')[1]);
                        Pindex=province;
                        //alert(Pindex);
                        $.each(HBAreaData[Pindex],function(city){
                            var _cityid=city.split('|')[0];
                            var _city=city.split('|')[1];
                            t_city.append('<option value="'+_cityid+'">'+_city+'</option>');
                        })
                    }
                })
            }
            initCity();
        });

        $('#default2').find('.select_city').change(function(event){
            var t_county=$(this).parent('.sel_box').siblings().children('.select_county');
            t_county.children('option:gt(0)').remove();
            t_county.change();

            var c_options=$(this).children('option:selected').text();
            //alert(c_options);
            $(this).children('option:selected').attr('selected','selected').siblings('option').removeAttr('selected','selected'); 
           //获取城市对应的县
            function initCounty(){
                $.each(HBAreaData[Pindex],function(city){
                    if(city.split('|')[1]==c_options){
                        //alert(city.split('|')[1]);
                        Cindex=city;
                        //alert(Cindex);
                        for(var i=0;i<HBAreaData[Pindex][Cindex].length;i++){
                            t_county.append('<option value="'+HBAreaData[Pindex][Cindex][i].split('|')[0]+'">'+HBAreaData[Pindex][Cindex][i].split('|')[1]+'</option>');
                        }
                    }   
                })  
            }
            initCounty();
        })
    } 

/*})*/

//-------------------------------------- 地区 -------------------------------------------------------------
  /**
 * 全局地区选择弹框
 *调用方法  initProvince(A,B,C,D);
 * @param {type} A   (必填)指生成的元素   如<p>广东</p>；则写成 A => 'p'
 * @param {type} B   (可选)默认选中的省id
 * @param {type} C   (可选)默认选中的市id
 * @param {type} D   (可选)默认选中的县/区id
 */
function initArea(label){//初始化省
    var pro = arguments[1] ? arguments[1] :false;
    var city = arguments[2] ? arguments[2] :false;
    var xian = arguments[3] ? arguments[3] :false;
    //console.log('执行');
    $.each(HBAreaData,function(province){
        var _provinceid=province.split("|")[0];
        var _province=province.split("|")[1];
        $('#province').find('.sel_more').append('<'+label+'   onclick="initCity('+"'"+label+"','"+province +"')" +'" value="'+_provinceid+'">'+_province+'</'+label+'>');
        //$('#province').find('.sel_more').append('<'+label+' value="'+_provinceid+'">'+_province+'</'+label+'>'); 
        if(pro != false){
            if(pro == _provinceid){
                $('#province').find('.sel_show').text(_province);
                $('#province').children('input').attr('value',_provinceid);
                initCity(label,province,city,xian);
            }
        }else{ 
            $('#province').find('.sel_show').text('请选择'); 
            $('#city').find('.sel_show').text('请选择'); 
            $('#County').find('.sel_show').text('请选择'); 
            $('#province').find('input').attr('value',0); 
            $('#city').find('input').attr('value',0); 
            $('#County').find('input').attr('value',0); 
            $('#city').find('.sel_more').html('<'+label+' value="0">请选择</'+label+'>');
            $('#County').find('.sel_more').html('<'+label+' value="0">请选择</'+label+'>');
        };
    });
}

function initCity(label,Pindex){//初始化市
    var indexCity = arguments[2] ? arguments[2] :false;
    var indexXian = arguments[3] ? arguments[3] :false;
    $('#city').find('.sel_more').html('<'+label+'  onclick="initCity('+"'"+label+"','"+Pindex +"')"+'" value="0">请选择</'+label+'>');
    $('#County').find('.sel_more').html('<'+label+' value="0">请选择</'+label+'>');
    $.each(HBAreaData[Pindex],function(citys){
        var _cityid=citys.split('|')[0];
        var _city=citys.split('|')[1];
        $('#city').find('.sel_more').append('<'+label+' onclick="initCounty('+"'"+label+"','"+Pindex+"','"+ citys+"')" +'" value="'+_cityid+'">'+_city+'</'+label+'>');
        if(indexCity != false){
            if(indexCity == _cityid){
                $('#city').find('.sel_show').text(_city);
                $('#city').children('input').attr('value',_cityid);
                initCounty(label,Pindex,citys,indexXian)
            }
        }else{ 
            //console.log('看看');
            $('#city').find('.sel_show').text('请选择');
            $('#County').find('.sel_show').text('请选择');
            $('#city').find('input').attr('value',0); 
            $('#County').find('input').attr('value',0); 
            $('#County').find('.sel_more').html('<'+label+' value="0">请选择</'+label+'>');
            
        };
    })
}

function initCounty(label,Pindex,Cindex){//初始化县
    var indexXian = arguments[3] ? arguments[3] :false;
    $('#County').find('.sel_more').html('<'+label+' value="0">请选择</'+label+'>');
    for(var i=0;i<HBAreaData[Pindex][Cindex].length;i++){
        var _Countyid=HBAreaData[Pindex][Cindex][i].split('|')[0];
        var _County=HBAreaData[Pindex][Cindex][i].split('|')[1];
        $('#County').find('.sel_more').append('<'+label+' value="'+_Countyid+'">'+_County+'</'+label+'>');
        if(indexXian != false){
            if(indexXian == _Countyid){$('#County').find('.sel_show').text(_County);$('#County').children('input').attr('value',_Countyid);}
        }else{ $('#County').find('.sel_show').text('请选择');$('#County').find('input').attr('value',0);  };
    }
}

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
  
});

$('.grid_address').each(function(){
            var p = parseInt($(this).attr('p')),c = parseInt($(this).attr('c')),t=parseInt($(this).attr('t'));
            p = !isNaN(p)?p:0;c = !isNaN(c)?c:0; t = !isNaN(t)?t:0;
            if (p===0||c===0||t===0) {
                $(this).html('-&gt;-');
                return;
            }
            // loc = area_array[p]+'&gt;'+(p===c?sub_array[p][t]:sub_array[p][c]);
            loc = area_array[p]+'&gt;'+(p===c?sub_arr[p][t]:sub_array[p][c]);
            $(this).html(loc);
        });