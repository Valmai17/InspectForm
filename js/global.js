$(document).ready(function () {
  var a = navigator.userAgent;
  if ((a.indexOf('Android') > - 1 || a.indexOf('Linux') > - 1) || (a.indexOf('iPhone') > - 1) || (a.indexOf('Windows Phone') > - 1)) {
  } else {

    $('#right_fixed a').hover(function () {
      $('#right_fixed').css('width', '110px');
      $(this).children('span').stop();
      $(this).children('span').animate({
        width: '+56px',
        'padding-left': '8px'
      }, 200)
    }, function () {
      $('#right_fixed').css('width', '46px');
      $(this).children('span').stop();
      $(this).children('span').animate({
        width: '-56px',
        'padding-left': '0px'
      }, 200)
    })
  }

  //返回顶部
  $('#top_v2').click(function () {
    if ($(window).scrollTop() != 0) {
      $('html,body').animate({
        scrollTop: 0
      }, 10)
    }
  });

  // 页头搜索
  $('body').on('click', '.in02_search .up span', function (c) {
    $('#flSsInputVal').attr('t', $(this).attr('id'));
    $(this).addClass('current').siblings().removeClass('current')
  });

  // 微信
  $('.wap').hover(function () {
    $('.wap_img').css('display', 'block')
  }, function () {
    $('.wap_img').css('display', 'none')
  });
  $('.phone').mouseover(function () {
    $('.phone_img').css('display', 'block')
  });
  $('.phone').mouseout(function () {
    $('.phone_img').css('display', 'none')
  });

  // 消息的定位left
  var b = $('.landed p span:first').width() + 20;
  $('.landed_in2').css('left', b);
  $(document).on('click', '.landed', function () {
    console.log('landed')
  });

  // 吊顶登陆
  $(document).on('mouseover', '.landed span', function () {
    var c = $(this).index();
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.landed_in').eq(c).css('display', 'block').siblings('.landed_in').css('display', 'none');
    var d = $('.landed p span:first').width() + 20;
    $('.landed_in2').css('left', d)
  });
  $(document).on('mouseout', '.landed span', function () {
    var c = $(this).index();
    $('.landed_in').eq(c).css('display', 'none');
    $(this).removeClass('cur')
  });
  $(document).on('mouseenter', '.landed_in', function () {
    var c = $(this).index();
    $(this).css('display', 'block');
    $('.landed span').eq(c).addClass('cur').siblings().removeClass('cur')
  });
  $(document).on('mouseleave', '.landed_in', function () {
    var c = $(this).index();
    $(this).css('display', 'none');
    $('.landed span').eq(c).removeClass('cur')
  });
  if (typeof console !== 'undefined') {
    console.log('%c科技创新，改变未来！', 'color:blue');
    console.log('企业科技创新服务平台开发团队： %c欢迎您的加入', 'color:red')
  }

  // 页头地区
  $('body').on('mouseenter', '.in02_City', function () {
    $(this).addClass('in02_City_kai');
    $('.More_City').css('display', 'block')
  });
  $('body').on('mouseleave', '.in02_City', function () {
    $(this).removeClass('in02_City_kai');
    $('.More_City').css('display', 'none')
  });
  $('body').on('mouseenter', '.More_City', function () {
    $('.in02_City').addClass('in02_City_kai');
    $('.More_City').css('display', 'block')
  });
  $('body').on('mouseleave', '.More_City', function () {
    $('.in02_City').removeClass('in02_City_kai');
    $('.More_City').css('display', 'none')
  });

  // 延缓加载
  if ($.isFunction($.fn.lazyload)) {
    $('img.lazy').lazyload({
      placeholder: '../../images/index/grey.gif',
      effect: 'fadeIn',
      failurelimit: 50,
      threshold: 200
    })
  }
  $('#xuqiuFaBu').click(function () {
    window.open('/redirect/xqfb.html')
  });
  $('#flSsBtn').click(function () {
    if ($.trim($('#flSsInputVal').val()) == '') {
      alert('请输入搜索内容！');
      return
    }
    window.location.href = $('#' + $('#flSsInputVal').attr('t')).attr('url') + '?w=' + encodeURIComponent($('#flSsInputVal').val())
  })
});

// 弹窗登陆
var dynamicLoading = {
  css: function (c) {
    if (!c || c.length === 0) {
      console.log('argument "path" is required !')
    }
    var a = document.getElementsByTagName('head') [0];
    var b = document.createElement('link');
    b.href = c;
    b.rel = 'stylesheet';
    b.type = 'text/css';
    b.onload = function () {
      return true
    };
    a.appendChild(b)
  },
  js: function (c) {
    if (!c || c.length === 0) {
      console.log('argument "path" is required !')
    }
    var b = document.getElementsByTagName('head') [0];
    var a = document.createElement('script');
    a.src = c;
    a.type = 'text/javascript';
    b.appendChild(a)
  }
};
function lbSrcLoad() { //加载登陆弹窗函数
  if (typeof (LBfsPlug) !== 'undefined') {
    LBfsPlug.showBox();
    return true
  }
  setTimeout('lbSrcLoad()', 300);
  dynamicLoading.js('/js/member/LBfsPlug.min.js');
  dynamicLoading.css('/css/member/rl.css');
  return
}
var xNLBCode = - 101011; //需要显示登录弹窗的状态码
