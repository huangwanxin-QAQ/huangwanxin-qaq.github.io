var run = false;
var timer;
var startButton;
var endButton;

$(document).ready(function () {
    startButton = $('#startButton');
    endButton = $('#endButton');
});

function refresh() {

    if (run) {
        var url = $('#url').val();
        if (url != "") {
            if (url.indexOf("jsons.cn") > -1 || url.indexOf("jizhuni.com") > -1) {
                JsonsMessageBox($("#url"), "请更换网址后再开始刷新");
                return false;
            }
            if (url.indexOf('http://') <= -1 && url.indexOf('https://') <= -1) {
                JsonsMessageBox($("#url"), "网址前需添加http://");
                return false;
            }
        }
        else {
            JsonsMessageBox($("#url"), "请输入要刷新的网址");
            return false;
        }
        var frame = $('#frame');
        frame.attr('src', url);
        var times = $('#times');
        times.val(parseInt(times.val()) + 1);

    }
}

function startRefresh() {
    run = true;
    try {
        var url = $('#url').val();
        if (url != "") {
            if (url.indexOf("jsons.cn") > -1 || url.indexOf("jizhuni.com") > -1) {
                JsonsMessageBox($("#url"), "请更换网址后再开始刷新");
                return false;
            }
            if (url.indexOf('http://') <= -1 && url.indexOf('https://') <= -1) {
                JsonsMessageBox($("#url"), "网址前需添加http://");
                return false;
            }
        }
        else {
            JsonsMessageBox($("#url"), "请输入要刷新的网址");
            return false;
        }
        startButton.hide();
        endButton.show();
        var frequency = parseInt($('#frequency').val());
        refresh();
        timer = setInterval("refresh()", frequency * 1000);
    } catch (Exception) {
        startButton.show();
        endButton.hide();
        showmsg('设置错误');
    }
}

function endRefresh() {
    run = false;
    clearInterval(timer);
    startButton.show();
    endButton.hide();
}
function showmsg(msg) {
    $('#errdiv').show();
    $('#errdiv').text(msg);
}