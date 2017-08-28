//--------------------------  全局提示框 ---------------------------------------------------------------------
var GlobalTip = {
  /**
 * 全局提示框  只显示提示内容的弹窗
 * @param {type} message      提示内容
 */

  TipMessageBox:function(message,callback_function){
    var timer = null;
    var body = document.getElementsByTagName('body')[0];
    var globalNotice = document.createElement('div');
    globalNotice.id = 'globalNotice';
    if(message.length>11){
      globalNotice.innerHTML = '<p style="line-height:35px;">'+message+'</p><div class="back"></div>';
    }else{
      globalNotice.innerHTML = '<p>'+message+'</p><div class="back"></div>';
    }
    body.appendChild(globalNotice);
    clearInterval(timer);
    timer = setTimeout(function(){
       if($.isFunction(callback_function)){callback_function();}
      document.getElementById('globalNotice').parentNode.removeChild(document.getElementById('globalNotice')); 
    },2000)
  },
  /**
 * 全局选择弹框  有"确定"与"取消"按钮的弹窗
 * @param {type} message      提示内容
 * @param {type} YesMess      右侧按钮提示
 * @param {type} callback_function 回调函数名称(可选)
 * @returns {undefined}
 */
//  ComfirmTipBox:function(message,YesMess){   
//    var callback_function = arguments[2]? arguments[2] :false;
//    var body = document.getElementsByTagName('body')[0];
//    var globaComfirmTipBox = document.createElement('div');
//    globaComfirmTipBox.id = 'ComfirmTipBox';
//    if(callback_function != false){
//         globaComfirmTipBox.innerHTML = '<h3><span>提示</span><i onclick="GlobalTip.close()"></i></h3><p>'+message+'</p><p><a  onclick="GlobalTip.close()" href="javascript:;;">取消</a><a onclick="'+callback_function+'(),GlobalTip.close()" class="ComfirmTipBox_ok" href="javascript:;;">'+YesMess+'</a></p>';
//    }else{
//         globaComfirmTipBox.innerHTML = '<h3><span>提示</span><i onclick="GlobalTip.close()"></i></h3><p>'+message+'</p><p><a  onclick="GlobalTip.close()" href="javascript:;;">取消</a><a onclick="GlobalTip.close()" class="ComfirmTipBox_ok" href="javascript:;;">'+YesMess+'</a></p>';
//    }
//    var grayBox = document.createElement('div');
//    grayBox.id = 'globalgrayBox';
//    body.appendChild(globaComfirmTipBox);
//    body.appendChild(grayBox);
//  },

  /**
 * 全局选择弹框  有"确定"与"取消"按钮的弹窗
 * @param {type} message           提示内容
 * @param {type} YesMess           右侧按钮提示
 * @param {type} callback_function 回调函数(可选)
 * @param {type} callback_param     回调函数参数，(由于参数个数不定，所以以对象方式传参)（可选）
     
    使用例子：
         GlobalTip.askComfirmTipBox(message,YesMess,callback_function,callback_param);  
         无参数：GlobalTip.askComfirmTipBox('提示消息内容','确定',回调函数);

         有参数：var param = {"one":'参数1','two':'参数二'}
                 GlobalTip.askComfirmTipBox('请选取裁剪图片范围',回调函数,param);
 */
 
  askComfirmTipBox:function(message,YesMess){ 
    var callback_function = arguments[2];
    var callback_param = arguments[3]?arguments[3]:false;
    var body = document.getElementsByTagName('body')[0];
    var globaComfirmTipBox = document.createElement('div');
    globaComfirmTipBox.id = 'ComfirmTipBox';
    globaComfirmTipBox.innerHTML = '<h3><span>提示</span><i onclick="GlobalTip.close()"></i></h3><p>'+message+'</p><p><a id="askComfirmTipbtn0" onclick="GlobalTip.close()" href="javascript:;;">取消</a><a id="askComfirmTipbtn1" onclick="GlobalTip.close()" class="ComfirmTipBox_ok" href="javascript:;;">'+YesMess+'</a></p>';
    var grayBox = document.createElement('div');
    grayBox.id = 'globalgrayBox';
    body.appendChild(globaComfirmTipBox);
    body.appendChild(grayBox);
    $('#askComfirmTipbtn1').click(function(){
        if($.isFunction(callback_function)) {
            if(callback_param != false ){
              callback_function(callback_param);
              return ;
            }
            callback_function();
        }
    })
  },

    /**
 * 全局选择弹框  只有一个"确定"按钮的弹窗
 * @param {type} message      提示内容(必填)
 * @param {type} YesMess      右侧按钮提示(必填)
 * @param {type} callback_function 回调函数名称(可选)
 * @returns {undefined}
 */
  WarningTipBox:function(message,YesMess){
    var callback_function = arguments[2];
    var callback_param = arguments[3]?arguments[3]:false;
    var body = document.getElementsByTagName('body')[0];
    var globaComfirmTipBox = document.createElement('div');
    globaComfirmTipBox.id = 'ComfirmTipBox';
    globaComfirmTipBox.innerHTML = '<h3><span>提示</span><i onclick="GlobalTip.close()"></i></h3><p>'+message+'</p><p><a onclick="GlobalTip.close()" id="askComfirmTipbtn1" class="ComfirmTipBox_ok" href="javascript:;;">'+YesMess+'</a></p>';
    var grayBox = document.createElement('div');
    grayBox.id = 'globalgrayBox';
    body.appendChild(globaComfirmTipBox);
    body.appendChild(grayBox);
    $('#askComfirmTipbtn1').click(function(){
        if($.isFunction(callback_function)) {
            if(callback_param != false ){
              callback_function(callback_param);
              return ;
            }
            callback_function();
        }
    })
  },

  /*关闭弹窗*/
  close:function(){
     document.getElementById('ComfirmTipBox').parentNode.removeChild(document.getElementById('ComfirmTipBox')); 
     document.getElementById('globalgrayBox').parentNode.removeChild(document.getElementById('globalgrayBox')); 
  }

}
