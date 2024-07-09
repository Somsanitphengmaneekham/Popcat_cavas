var point = 0;
var pic = 0;
var cat_sound = new Audio("sound/pop.mp3");
var endgame = new Audio("sound/tmpg_l4whs3.mp3");
var endgame2 = new Audio("sound/perfect-fart.mp3");

//ເພີ່ມຄະແນນ
function pointup() {
    changepic()
    point++;
    document.getElementById("point").innerHTML = point
    if ( point == 50){
        drawRandomCat();
        endgame.play();
    } else if ( point == 51){
        endgame2.play();
        location.reload();
        alert("ເກີນນນນນນນ");
    }
}

//ການປ່ຽນສະຖານະຮູບພາບ
function changepic() {
    if (pic == 0) {
        pic = 1;
        cat2()
        time()
        cat_sound.play();
    } else {
        pic = 0;
        cat1()
    }
}

//ເວລາຂອງການປ່ຽນສະຖານນະຮູບ
function time() {
    var check = true;
    let start = Date.now();

    //ໃຊ້ເພື່ອກຳນົດໃຫ້ໂປຣແກຣມເຮັດວຽກເປັນໄລຍະຕາມຊ່ວງເວລາທີ່ກຳນົດ
    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);
            if (diff == 10) {
                check = false;
                changepic(); //ການທີ່ສົ່ງໄປ ແມ່ນມັນຈະປ່ຽນຮູບແລ້ວຈັບເວລາແລ້ວກະປ່ຽນເປັນຮູບທຳອິດ
            }
        }
    }, );
}

//ຮູບແມວ
var c = document.getElementById("Testing");
var ctx = c.getContext("2d");

function draw_cat1() {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.moveTo(227, 395);
    ctx.bezierCurveTo(226, 362, 234, 333, 248, 302);
    ctx.bezierCurveTo(242, 278, 234, 250, 226, 232);
    ctx.bezierCurveTo(218, 212, 234, 250, 224, 193);
    ctx.bezierCurveTo(234, 187, 250, 200, 278, 213);
    ctx.bezierCurveTo(310, 211, 333, 196, 358, 182);
    ctx.bezierCurveTo(364, 200, 368, 223, 379, 243);
    ctx.bezierCurveTo(383, 261, 376, 286, 367, 312);
    ctx.bezierCurveTo(372, 347, 372, 373, 369, 395);
    ctx.moveTo(369, 395);
    ctx.lineTo(300, 395);
    ctx.lineTo(227, 395);
    ctx.fillStyle = "lightsalmon";
    ctx.fill();
    ctx.stroke();

    //ລາຍຫູແມວ 1
    ctx.beginPath();
    ctx.bezierCurveTo(248, 302, 267, 304, 275, 274);
    ctx.bezierCurveTo(281, 242, 291, 219, 310, 206);
    ctx.bezierCurveTo(278, 213, 250, 200, 234, 187);
    ctx.bezierCurveTo(212, 176, 218, 212, 226, 232);
    ctx.bezierCurveTo(234, 250, 242, 278, 248, 302);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.stroke();

    //ລາຍຫູແມວ 2
    ctx.beginPath();
    ctx.bezierCurveTo(333, 196, 345, 210, 370, 223);
    ctx.bezierCurveTo(364, 200, 370, 159, 333, 196);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.stroke()

    //ຕາຊ້າຍ
    ctx.beginPath();
    ctx.arc(305, 239, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "lemonchiffon";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(305, 239, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "darkgreen";
    ctx.stroke();
    ctx.fill();

    //ຕາຂວາ
    ctx.beginPath();
    ctx.arc(347, 239, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "lemonchiffon";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(347, 239, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "darkgreen";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(322, 262);
    ctx.lineTo(339, 262);
    ctx.stroke();
    ctx.fill();

}


function draw_cat2() {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.moveTo(227, 395);
    ctx.bezierCurveTo(226, 362, 234, 333, 248, 302);
    ctx.bezierCurveTo(242, 278, 234, 250, 226, 232);
    ctx.bezierCurveTo(218, 212, 234, 250, 224, 193);
    ctx.bezierCurveTo(234, 187, 250, 200, 278, 213);
    ctx.bezierCurveTo(310, 211, 333, 196, 358, 182);
    ctx.bezierCurveTo(364, 200, 368, 223, 379, 243);
    ctx.bezierCurveTo(383, 261, 376, 286, 367, 312);
    ctx.bezierCurveTo(372, 347, 372, 373, 369, 395);
    ctx.moveTo(369, 395);
    ctx.lineTo(300, 395);
    ctx.lineTo(227, 395);
    ctx.fillStyle = "lightsalmon";
    ctx.fill();
    ctx.stroke();

    //ລາຍຫູແມວ 1
    ctx.beginPath();
    ctx.bezierCurveTo(248, 302, 267, 304, 275, 274);
    ctx.bezierCurveTo(281, 242, 291, 219, 310, 206);
    ctx.bezierCurveTo(278, 213, 250, 200, 234, 187);
    ctx.bezierCurveTo(212, 176, 218, 212, 226, 232);
    ctx.bezierCurveTo(234, 250, 242, 278, 248, 302);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.stroke();

    //ລາຍຫູແມວ 2
    ctx.beginPath();
    ctx.bezierCurveTo(333, 196, 345, 210, 370, 223);
    ctx.bezierCurveTo(364, 200, 370, 159, 333, 196);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.stroke()

    //ຕາຊ້າຍ
    ctx.beginPath();
    ctx.arc(305, 239, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "lemonchiffon";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(305, 239, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "darkgreen";
    ctx.stroke();
    ctx.fill();


    //ຕາຂວາ
    ctx.beginPath();
    ctx.arc(347, 239, 15, 0, 2 * Math.PI);
    ctx.fillStyle = "lemonchiffon";
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(347, 239, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "darkgreen";
    ctx.stroke();
    ctx.fill();

    //ປາກ
    ctx.beginPath();
    ctx.bezierCurveTo(296, 273, 290, 258, 328, 253);
    ctx.bezierCurveTo(357, 262, 366, 275, 358, 294);
    ctx.bezierCurveTo(334, 304, 305, 296, 296, 273);
    ctx.fillStyle = "indianred";
    ctx.stroke();
    ctx.fill();

    //ໃນປາກ
    ctx.beginPath();
    ctx.bezierCurveTo(296, 273, 340, 272, 358, 294);
    ctx.bezierCurveTo(334, 304, 305, 296, 296, 273);
    ctx.fillStyle = "firebrick";
    ctx.stroke();
    ctx.fill();
}

function cat1() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var x = 30;
    var y = 1;
    var width = 5;
    var height = 5;
    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.scale(2, 2);
    draw_cat1();
}

function cat2() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    var x = 30;
    var y = 1;
    var width = 5;
    var height = 5;
    ctx.translate(x + 0.5 * width, y + 0.5 * height);
    ctx.scale(2, 2);
    draw_cat2();
}
cat1();

//ເປັນການເພີ່ມຄວາມໄວຂອງຮູບທີ່ຈະເຄື່ອນໄຫວ
var catSpeed = 2;

//ສ້າງຈຳນວນສຸ່ມເຕັມລະຫວ່າງ 0 ເຖິງຄ່າສູງສຸດທີ່ລະບຸ (max) 
//ໃຊ້ສຳຫລັບສຸ່ມວາງຕຳແໜ່ງແມວຢູ່ Canvas
function getRandomCoordinate(max) {
    return Math.floor(Math.random() * max);
}

//ຟັງຊັ້ນນີ້ມີຫນ້າທີ່ຮັບຜິດຊອບໃນການວາດແຕ່ລະ frame ຂອງ animation 
//ເອີ້ນໃຊ້ຊໍ້າໆເພື່ອສ້າງພາບເຄື່ອນໄຫວແບບສຸ່ມ
function drawRandomCat() {
    ctx.clearRect(0, 0, c.width, c.height);

    //ສ້າງຈຸດເລີ່ມ Random ເພື່ອກຳນົດຕຳແໜ່ງ
    var startX = getRandomCoordinate(c.width);
    var startY = getRandomCoordinate(c.height);

    //ຍ້າຍ
    ctx.translate(startX, startY);

    //ສຸ່ມຮູບ ແມວ
    if (Math.random() < 0.5) {
        cat1();
    } else {
        draw_cat1();
    }

    //Reset ການປ່ຽນແປງ
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    //ອັບເດດຈຸດເລີ່ມຕົ້ນສຳຫລັບ Frame ຄັດໄປ
    startX += catSpeed;
    startY += catSpeed;

    requestAnimationFrame(drawRandomCat);
    //ເປັນການບ່ອກ browser ເອີ້ນໃຊ້ drawRandomCat() function ນີ້ທັນທີ່ພ້ອມສະແດງ Frame ຄັດໄປ
}