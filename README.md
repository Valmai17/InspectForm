# 表单验证小插件
这是一个基于jquery封装的表单验证的小插件，使用简单，并且可以随意增加或者修改验证表单的正则。


### 表单验证
**引入文件**
```html
    <script src="js/jquery-1.12.3.min.js"></script>
    <script src="js/jquery.InspectForm.js"></script>
```

**使用说明**

html:
```html
    //需要验证的input必须要存在一个兄弟<span class="form_tips">&nbsp;</span>，用来提示验证信息
	<form class="rrr">
	     //普通input验证
	    <div class='tab fl'><span class="importent">*</span>用户名：</div>
	    <div class='content fl'><input id="name" type="text" autocomplete="off" class="textbox"/>
	    <span class="form_tips">&nbsp;</span></div>

	    //
	    //提交
	    <div class='content fl'><button  type="button" class="sub">保存修改</button></div>
	</form>
```

js:
```js
	$(document).ready(function(){
	    //提交表单
	        $('.sub').click(function(){
	            $('.rrr').submit();
	        });

	              //初始化表单验证，给form表单绑定InspectForm方法
	        $('.rrr').InspectForm({
	            only:true, //是否需要做唯一校验（用户名、邮箱、企业/机构名称）
	            name:'#name',
	            Password1:'#pw1',
	            Password2:'#pw2',
	            str:[{name:'.conpamy',min:2,max:10},{name:'#www',min:19,max:20}],
	            number:[{name:'.nu',min:2,max:10}],
	            divSelect:[{id:['#property'],child:'.sel_show'},{id:['#province','#city','#County'],child:'.sel_show'}],
	            checkbox:[{id:'.q1',child:'input'},{id:'.q2',child:'input'}]
	        });
	});

```