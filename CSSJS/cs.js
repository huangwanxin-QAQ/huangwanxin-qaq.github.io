var inputs = document.querySelectorAll('input');
console.log(inputs);
var show = document.querySelector('.show');
var pp = show.querySelector('p');
var div = show.querySelector('div');
console.log(pp);
console.log(div);

inputs[inputs.length - 1].addEventListener('click', function () {

    if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {
        alert('请输入您的信息');
    } else {
        var str = [];
        for (var i = 0; i < inputs.length - 1; i++) {
            str[i] = inputs[i].value;
        }

        str[0] = parseInt(str[0]) + 1010;


        console.log(str[0]);

        var wz = 'https://pay.qq.com/h5/index.shtml?m=buy&c=game&dialog=0&midasApiVersion=5&transactionid=CC8E5656-EEC9-4ADD-865E-D4D81C258D691558348901265&dh=1&pf=mds_storeopen_qb-__mds_default_v1_0_0.navgame_v1.0-android&appid=1450002258&zoneid=' + str[0] + '&n=' + str[1] + '&as=1&aid=&wxAppid2=wx951bdcac522929b6&u=' + str[2];

        // console.log(wz);

        // 控制下面文字显示 
        setTimeout(function () {
            pp.innerHTML = '正在生成订单...';
        }, 2000)

        setTimeout(function () {
            pp.innerHTML = '订单生成成功，请点击充值';
            div.innerHTML = '点我充值';
        }, 4000)

        div.onclick = function () {
            console.log(wz);
            window.location.href = wz;
        }
    }

})

