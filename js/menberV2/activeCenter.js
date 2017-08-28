$(document).ready(function(){

	//活动快讯删除按钮
	$('.delete').on('click', function() {
		var _this = $(this);
		var _val = $(this).siblings('input').val();
		
		GlobalTip.ComfirmTipBox('确定要删除这条快讯吗？','确定');
		
		$('.ComfirmTipBox_ok').on('click',function() {
			//$.ajax({
	            //url: '',
	            //type: 'GET',
	            //data: '' ,
	            //success: function(data){
	               _this.parents('tr').remove();
	            //},
        	//});
		});	
	});

	//我申办的活动删除按钮
	$('.bidDelete').on('click', function() {
		var _this = $(this);
		var _val = $(this).siblings('input').val();
		
		GlobalTip.ComfirmTipBox('确定要删除该活动吗？','确定');
		
		$('.ComfirmTipBox_ok').on('click',function() {
			//$.ajax({
	            //url: '',
	            //type: 'GET',
	            //data: '' ,
	            //success: function(data){
	               _this.parents('tr').remove();
	            //},
        	//});
		});	
	});

	//我参加的活动删除按钮
	$('.joinDelete').on('click', function() {
		var _this = $(this);
		var _val = $(this).siblings('input').val();
		
		GlobalTip.ComfirmTipBox('确定要删除该活动吗？','确定');
		
		$('.ComfirmTipBox_ok').on('click',function() {
			//$.ajax({
	            //url: '',
	            //type: 'GET',
	            //data: '' ,
	            //success: function(data){
	               _this.parents('tr').remove();
	            //},
        	//});
		});	
	});

	//全选
	$('#all').on('click', function() {
        if (this.checked) {
            $(this).parents('tr').addClass('checked');
            $('.table_box :checkbox').prop('checked', true).parents('tr').addClass('checked');
        } else {
            $(this).parents('tr').removeClass('checked');
            $('.table_box :checkbox').prop('checked', false).parents('tr').removeClass('checked');
        }
    });

    //选择
    $('.table_box :checkbox').on('click', function() {
        if (this.checked) {
            $(this).parents('tr').addClass('checked');
        } else {
            $(this).parents('tr').removeClass('checked');
        }
    });

    //管理已报名成员
    //多选全选移除
    $('#memberDelete').on('click', function() {

    	//获取选择框的值
    	var valArr =[];    
		$('.table_box td input[type="checkbox"]:checked').each(function(){    
			valArr.push($(this).val());    
		});
		console.log(valArr)
    	if (valArr == '') {
    		GlobalTip.ComfirmTipBox('请选择需要移除的成员。','确定');
    	} else {
    		GlobalTip.ComfirmTipBox('确定要移除这些成员吗？','确定');
	    	$('.ComfirmTipBox_ok').on('click',function() {
				//$.ajax({
		            //url: '',
		            //type: 'GET',
		            //data: '' ,
		            //success: function(data){
		               $('.table_box td :checkbox').each(function() {
				            if ($(this).prop('checked') == true) {
				                $(this).parents('tr').remove();
				            }
				        }) 
		            //},
	        	//});
			});
    	}           
    });

    //移除按钮
	$('.remove').on('click', function() {
		var _this = $(this);
		var _val = $(this).parents('tr').find('input').val();
		console.log(_val)
		
		GlobalTip.ComfirmTipBox('确定要移除该成员吗？','确定');
		
		$('.ComfirmTipBox_ok').on('click',function() {
			//$.ajax({
	            //url: '',
	            //type: 'GET',
	            //data: '' ,
	            //success: function(data){
	               _this.parents('tr').remove();
	            //},
        	//});
		});	
	});

	//报名审核
	//多选同意
	$('#agree').on('click', function() {
		//获取选择框的值
    	var valArr =[];    
		$('.table_box td input[type="checkbox"]:checked').each(function(){    
			valArr.push($(this).val());    
		});
		console.log(valArr)
		if (valArr == '') {
    		GlobalTip.ComfirmTipBox('请选择需要同意的成员。','确定');
    	} else {
    		GlobalTip.ComfirmTipBox('确定要同意这些成员吗？','确定');
	    	$('.ComfirmTipBox_ok').on('click',function() {
				//$.ajax({
		            //url: '',
		            //type: 'GET',
		            //data: '' ,
		            //success: function(data){
		               $('.table_box td :checkbox').each(function() {
				            if ($(this).prop('checked') == true) {
				                $(this).parents('tr').children('td').eq(4).html('同意');
				            }
				        }) 
		            //},
	        	//});
			});
    	}     
	});

	//多选拒绝
	$('#refuse').on('click', function() {
		//获取选择框的值
    	var valArr =[];    
		$('.table_box td input[type="checkbox"]:checked').each(function(){    
			valArr.push($(this).val());    
		});
		console.log(valArr)
		if (valArr == '') {
    		GlobalTip.ComfirmTipBox('请选择需要拒绝的成员。','确定');
    	} else {
    		GlobalTip.ComfirmTipBox('确定要拒绝这些成员吗？','确定');
	    	$('.ComfirmTipBox_ok').on('click',function() {
				//$.ajax({
		            //url: '',
		            //type: 'GET',
		            //data: '' ,
		            //success: function(data){
		               $('.table_box td :checkbox').each(function() {
				            if ($(this).prop('checked') == true) {
				                $(this).parents('tr').children('td').eq(4).html('拒绝');
				            }
				        }) 
		            //},
	        	//});
			});
    	}     
	});

	//单条同意拒绝删除
	$('#shenhe td a').on('click', function() {
		var _this = $(this);
		var _val = $(this).parents('tr').find('input').val();
		console.log(_val)
		$('#seeMemberBox').remove();
		if (_this.attr('class') == 'agree') {
			
			GlobalTip.ComfirmTipBox('确定要同意该成员吗？','确定');
            $('.ComfirmTipBox_ok').on('click',function() {
                //$.get("",{_val:_val},function(result){   
	                _this.parents('tr').children('td').eq(4).html('同意');
                //})
            });
		} else if (_this.attr('class') == 'refuse') {
			
			GlobalTip.ComfirmTipBox('确定要拒绝该成员吗？','确定');
            $('.ComfirmTipBox_ok').on('click',function() {
                //$.get("",{_val:_val},function(result){   
	                _this.parents('tr').children('td').eq(4).html('拒绝');
                //})
            });
		} else if (_this.attr('class') == 'seeInfo') {
			
			//$.get("",{_val:_val},function(result){
				$('.col_right').append( 
					'<div id="seeMemberBox">'
			        +   '<h3><span>报名信息</span><i class="see_close"></i></h3>'
			        +   '<div class="memberInfo">'
			        +       '<p><span>申请人：</span><i>张晓明</i></p>'
			        +       '<p><span>参与意向：</span><i>意向内容</i></p>'
			        +       '<p><span>所在地：</span><i>广东省广州市白云区</i></p>'
			        +       '<p><span>联系人：</span><i>张大爷</i></p>'
			        +       '<p><span>职务：</span><i>经理</i></p>'
			        +       '<p><span>手机：</span><i>18889985665</i></p>'
			        +       '<p><span>邮箱：</span><i>897465651@qq.com</i></p>'
			        +   '</div>'
			        +'</div>'
				)
			//})


			//GlobalTip.ComfirmTipBox('确定要删除该成员吗？','确定');
            //$('.ComfirmTipBox_ok').on('click',function() {
                //$.get("",{_val:_val},function(result){   
	                // _this.parents('tr').remove();
                //})
            // });
		}

	});
	//移除报名审核会员信息弹窗
	$('body').on('click','.see_close', function() {
		$('#seeMemberBox').remove();
	})
})