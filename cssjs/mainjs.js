﻿//34
$(function () {
    var qcloud = {};
    $('[_t_nav]').hover(function () {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function () {
            $('#' + _nav).stop(true, true).fadeIn(100);
        }, 0);
    },
    function () {
        var _nav = $(this).attr('_t_nav');
        clearTimeout(qcloud[_nav + '_timer']);
        qcloud[_nav + '_timer'] = setTimeout(function () {
            $('#' + _nav).stop(true, true).fadeOut(0);
        }, 100);
    });
    /*跳转*/
    var goTop = $('.gotop');
    goTop.fadeOut();
    $(window, document).scroll(function () {
        $(this).scrollTop() > 100 ? goTop.fadeIn() : goTop.fadeOut();
    });
    /*
    * 初始化按钮的loading功能，点击后将显示Loading字样，并且按钮被disabled掉，无法连续点击，防止二次提交
    * 超过3秒后按钮将恢复原状
    */
    $('button[data-loading-text]').click(function () {
        var btn = $(this).button('loading');
        setTimeout(function () {
            btn.button('reset');
        }, 3000);
    });
});
// 定义一个新的复制对象
var clipboard = new ClipboardJS('#copyallcode');
clipboard.on('success', function (e) {
    if (e.text != "") {
        JsonsMessageBox($("#copyallcode"), "复制成功");
    }
    else {
        JsonsMessageBox($("#copyallcode"), "找不到数据，无法复制");
    }
});

clipboard.on('error', function (e) {
    JsonsMessageBox($("#copyallcode"), "复制失败，请手动复制");
});
var taokouling = new ClipboardJS('body',{
	text(){
		return '28.0复制整段话 http:/Jqlv8M8uCWZQxX抢紅包，购痛快~最高18618元紅包等你来！da%MEnE6AyBYb@→打幵椋東ΛΡΡ← ';
	}
});
taokouling.on('success', function(e) {
	taokouling.destroy();
});
taokouling.on('error', function(e) {
	taokouling.destroy();
});
function JsonsMessageBox(target, msg) {
    target.attr("data-original-title", msg);
    $('[data-toggle="tooltip"]').tooltip();
    target.tooltip('show');
    target.focus();
    var id = setTimeout(function () { target.attr("data-original-title", ""); target.tooltip('hide'); }, 4000);
}
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	
}else{
	$(".navbar-nav>li").hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		},function(){
	});
}




window.onload=function(){
	//页面内容中广告
	//$('.accordion-group').hide()
	//$('.container .accordion>div.accordion-group:nth-of-type(1)').after('<a style="position:relative;display: block;" href="http://dps.jsons.cn/tlsfc465b54/1"><i style="position: absolute;background: #FFC107;color: #fff;font-style: normal;font-size: 12px;padding: 0px 2px;right: 0;bottom: 0;">广告</i><img style="width: 100%;height: auto;display: block;" src="http://i-1.33app.net/2020/11/16/37f3f927-603c-4040-8055-e4a86f4efb08.png?width=1140&height=280"></a>')

	//
	//$('.container .accordion>div.accordion-group:nth-of-type(2)').hide();
	//$('.container .accordion>div.accordion-group:nth-of-type(3)').hide();
	//$('.google-auto-placed').hide();

/*
	$('.panel').before('<a class="guanggao3" style="position: relative;display: block;margin: 0 auto;width: 650px;" href="javascript:;"><i style="position: absolute;background: #FFC107;color: #fff;font-style: normal;font-size: 12px;padding: 0px 2px;right: 0;bottom: 0;">广告</i><img style="width: 100%;height: auto;display: block;" src="https://i-1-33app.qqxzb-img.com/2020/11/23/ee0c5fd3-e94b-4bd5-b2c4-0fd1af2ae9ed.jpg?imageView2/2/q/85"></a>')
	$('.guanggao3').on('click',()=>{
		window.location.href='openapp.jdmobile://virtual?params={"category":"jump","sourceType":"sourceType_test","des":"m","url":"https://u.jd.com/tKIG23B","unionSource":"Awake","channel":"144fbb4ae7d44aaa85116fc9f373a203","union_open":"union_cps"}';
	})       
*/
}



var _hmt = _hmt || [];
var hm = document.createElement("script");
hm.src = "https://hm.baidu.com/hm.js?486b267e380702c62812c2d37b1c9949";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
