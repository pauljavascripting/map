var rotate_white = '/assets/icons/rotate-white.svg';
var rotate = '/assets/icons/rotate.svg';
var dimensions_white = '/assets/icons/dimensions-white.svg';
var dimensions = '/assets/icons/dimensions.svg';

var removeHighlighted = function ($ctrl) {
    $ctrl.removeClass("btn-dimmity").addClass("btn-pudge");
};

var addHighlighted = function ($ctrl) {
    $ctrl.addClass("btn-dimmity").removeClass("btn-pudge");
};

var hideImage = function ($ctrl) {
    $ctrl.css('display', 'none');
};

var showImage = function ($ctrl) {
    $ctrl.css('display', 'block');
};

var hide = function (s) {
    hideImage($("#" + s));
    removeHighlighted($("#button" + s));
};

var show = function (s) {
    showImage($("#" + s));
    addHighlighted($("#button" + s));
};

var buttonGroundFloor360 = function () {
    show("GroundFloor360");
    hide("GroundFloorDimensions");
    hide("FirstFloor360");
    hide("FirstFloorDimensions");

    $("#buttonGroundFloor360 img").attr('src', rotate_white);
    $("#buttonGroundFloorDimensions img").attr('src', dimensions);
    $("#buttonFirstFloor360 img").attr('src', rotate);
    $("#buttonFirstFloorDimensions img").attr('src', dimensions);
};

var buttonGroundFloorDimensions = function () {
    show("GroundFloorDimensions");
    hide("GroundFloor360");
    hide("FirstFloor360");
    hide("FirstFloorDimensions");

    $("#buttonGroundFloorDimensions img").attr('src', dimensions_white);
    $("#buttonGroundFloor360 img").attr('src', rotate);
    $("#buttonFirstFloor360 img").attr('src', rotate);
    $("#buttonFirstFloorDimensions img").attr('src', dimensions);
};

var buttonFirstFloor360 = function () {
    show("FirstFloor360");
    hide("GroundFloorDimensions");
    hide("GroundFloor360");
    hide("FirstFloorDimensions");

    $("#buttonFirstFloor360 img").attr('src', rotate_white);
    $("#buttonGroundFloor360 img").attr('src', rotate);
    $("#buttonGroundFloorDimensions img").attr('src', dimensions);
    $("#buttonFirstFloorDimensions img").attr('src', dimensions);
};

var buttonFirstFloorDimensions = function () {
    show("FirstFloorDimensions");
    hide("FirstFloor360");
    hide("GroundFloorDimensions");
    hide("GroundFloor360");

    $("#buttonFirstFloorDimensions img").attr('src', dimensions_white);
    $("#buttonGroundFloor360 img").attr('src', rotate);
    $("#buttonGroundFloorDimensions img").attr('src', dimensions);
    $("#buttonFirstFloor360 img").attr('src', rotate);
};

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
    let hero = document.getElementsByClassName("house-intro")[0];

   new ScrollMagic.Scene({
            triggerElement: hero,
            duration: 100
        })
        .on("enter", function () {
            drawPlant3();
            drawLampshade1();
            drawChair2();
        })
        .addTo(controller);
}

