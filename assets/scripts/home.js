
var circleDefault = "";

$(document).ready(function () {

    circleDefault=$(".sub p").html();

    hideCircle();

    setSVGs();

    drawSVGs();
});

function hideCircle() {
    gsap.set('#circle', {
        drawSVG: "0%"
    });
}

function drawCircle() {
    gsap.to('#circle', 2, {
        drawSVG: "100%",
        delay: 0.5
    });
}


$(window).on("resize", function () {
    setSVGs();
});

function positionCircle() {
    var newText = circleDefault.replace(/e a/, '<y class="start">e a</y>')
        .replace(/- /, '<y class="end">- </y>');

    $(".sub p").html(newText);

    $(".circle").css({
         width: $("y.end").position().left - $("y.start").position().left,
         top: $("y.start").position().top +22,
        left: $("y.start").position().left + 22
     });
}

function setSelectWidth() {

    $(".strapline select").css({
        'width': $(".strapline h1").width() + "px"
        // 'text-indent': $(".strapline h1").width() / 3
    });
}

$("#selectHear").change(function () {
    location.href = $(this).val();
});

function setSVGs() {
    setSelectWidth();

    positionCircle();
}

function drawSVGs() {
    gsap.registerPlugin(DrawSVGPlugin);

    if (screen.width > 992)
        enableScroll();

    drawCircle();
}

function scene1(controller) {
    var hero = document.getElementsByClassName('hero')[0];
    //let btn = document.querySelectorAll(".streetscene .btn")[0];

    var scene1 = new ScrollMagic.Scene({
            triggerElement: hero,
            duration: 100
        })
        .on("enter", function () {
            drawVaseSub();
            drawPlant2();
            drawChair1();
        })
        .on("leave", function () {
            // reset style
            // animateElem.style.backgroundColor = "";
        })
        //.addIndicators({name: "1 - change inline style"}) // add indicators (requires plugin)
        .addTo(controller);

}

function scene2(controller) {
    var vase1 = document.getElementsByClassName('vase top-left')[0];

    new ScrollMagic.Scene({
            triggerElement: vase1,
            duration: 100
        })
        .on("enter", function () {
            drawChair4();
            drawPlant1('.plant1.bg-sub');
            drawCircle();
        })
        .addTo(controller);

}

function scene3(controller) {
    var btn = document.querySelectorAll(".streetscene .btn")[0];

    new ScrollMagic.Scene({
            triggerElement: btn,
            duration: 100
        })
        .on("enter", function () {
            drawVaseDiscover();
            drawLovetoLiveUnderline();
            drawPlant1('.plant1.bg-discover');
            drawStool();
        })
       .addTo(controller);
}

function scene4(controller) {
    var btn = document.querySelectorAll(".discover-silkash .btn")[0];

    new ScrollMagic.Scene({
            triggerElement: btn,
            duration: 100
        })
        .on("enter", function () {
            drawBowl();
            drawLamp();
            drawPlant4();
        })
       .addTo(controller);
}

function enableScroll() {
    var controller = new ScrollMagic.Controller();

    scene1(controller);
    scene2(controller);
    scene3(controller);
    scene4(controller);
}

function drawChair4() {
    gsap.to('#Chair4Layer_1', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_2', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_3', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_4', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_5', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_6', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_7', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_8', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_9', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_10', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_11', 2, {
        drawSVG: 0
    });
    gsap.to('#Chair4Layer_12', 2, {
        drawSVG: 0
    });
}

function drawVaseSub() {
    drawVase('.vase.top-left');
}

function drawVaseDiscover() {
    drawVase('.vase.top-right');
}

function drawVase(specify) {
    gsap.to(specify + ' #vase', 2, {
        drawSVG: 0,
        delay: 1
    });
    gsap.to(specify + ' #vaseTop', 1, {
        drawSVG: 0
    });
}
