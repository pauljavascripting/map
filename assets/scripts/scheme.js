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
}

function scene1(controller) {
    let hero = document.getElementsByClassName("scheme-page-styles")[0];

    new ScrollMagic.Scene({
            triggerElement: hero,
            duration: 100
        })
        .on("enter", function () {
            drawHouse();
        })
        .addTo(controller);
}

