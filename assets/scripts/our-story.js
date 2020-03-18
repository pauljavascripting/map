
$(document).ready(function () {

    drawSVGs();
});

function drawSVGs() {
    gsap.registerPlugin(DrawSVGPlugin);

    if (screen.width > 992) {
        enableScroll();
    }
}

function enableScroll() {
    let controller = new ScrollMagic.Controller();

    scene1(controller);
    scene2(controller);
    scene3(controller);
}

function scene1(controller) {
    let btn = document.getElementsByClassName("ourstory-hero")[0];

   new ScrollMagic.Scene({
            triggerElement: btn,
            duration: 100
        })
        .on("enter", function () {
            drawPlant1('.plant1.our-story');
            drawChair2();
            drawLampshade1();
        })
        .addTo(controller);
}


function scene2(controller) {
    let btn = document.querySelectorAll(".ourstory-hero p")[0];

   new ScrollMagic.Scene({
            triggerElement: btn,
            duration: 100
        })
        .on("enter", function () {
            drawPlant4();
            drawStool();
        })
        .addTo(controller);
}

function scene3(controller) {
    let btn = document.querySelectorAll(".our-ethos h5")[0];

   new ScrollMagic.Scene({
            triggerElement: btn,
            duration: 100
        })
        .on("enter", function () {
            drawHuddle();
        })
        .addTo(controller);
}

