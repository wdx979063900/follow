// 1随机生成字符  2从大小写英文字母和数字x选取 3填充div中 4输入验证码 5点击提交 6进行判断 7正确/错误交互

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 65; i < 122; i++) {
    if (i > 90 && i < 97) {
        continue;
    }
    arr.push(String.fromCharCode(i));
}

var value;
function createCanvas() {
    // 选取要生成字符
    var canvasStr = '';
    value = '';
    for (var i = 0; i < 6; i++) {
        var a = arr[Math.floor(Math.random() * arr.length)];
        canvasStr += a + ' ';
        value += a;
    }
    // 生成验证码区域
    var myCanvas = document.getElementById('myCanvas');
    // 画笔
    var ctx = myCanvas.getContext('2d');
    var oImg = new Image();
    oImg.src = './db-footer/file-1489464722.jpg';
    oImg.onload = function () {
        var pattern = ctx.createPattern(oImg, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.textAlien = 'center';
        ctx.fillStyle = 'red';
        ctx.font = '46px Roboto Slab';
        ctx.setTransform(1, -0.12, 0.3, 1, 0, 12)
        ctx.fillText(canvasStr, myCanvas.width / 15, 60);
    }
}

createCanvas();

$('.submit').on('click', function () {
    showResult();
});

$('.refresh').on('click', function () {
    createCanvas();
});


function showResult() {
    var inputValue = $('.inputBox input').val();
    if (value == inputValue) {
        $('.inputBox span').css({
            background: 'url("./db-footer/jubao.png")',
            display: 'inline-block'
        })
        createCanvas();

    } else {
        $('.inputBox span').css({
            background: 'url("./db-footer/biaoshi.gif")',
            display: 'inline-block'
        });
        createCanvas();

    }
}