// $(document).ready(function () {
//     ResizeSelect();
// });

// $(window).on("resize", function () {
//     ResizeSelect();
// });

// function ResizeSelect() {
//     $(".strapline select").css({
//         width: $(".strapline h1").width() + "px"
//     });
// }

/*jshint esversion: 6 */
//START OF ARROW JS

document.querySelectorAll('.arrow-btn').forEach(item => {
    item.addEventListener('mouseover', event => {
        var img = event.target.getElementsByClassName('submit-arrow'); //document

        gsap.fromTo(img[0], 1, {
            left: '10%'
        }, {
            visibility: 'visible',
            left: '80%',
            onComplete: function () {
                img[0].style.visibility = "hidden";
            }
        });
    });
});

// $(".arrow-btn").mouseover(function (e) {
//     moveSubmitBtn();
// });

// function moveSubmitBtn() {
//     let img = document.getElementsByClassName('submit-arrow');
//     gsap.fromTo(img[0], 1, {
//         left: '10%'
//     }, {
//         visibility: 'visible',
//         left: '80%',
//         onComplete: function () {
//             img[0].style.visibility = "hidden";
//         }
//     });
// }

//END OF ARROW JS

//START OF HAND JS

document.querySelectorAll('.hand-btn').forEach(item => {
    item.addEventListener('mouseenter', event => {

        let img1 = event.target.getElementsByClassName('hand-2');
        let img2 = event.target.getElementsByClassName('hand-1');

        var tl = gsap.timeline();
        tl.to(img1[0], {
                opacity: 1,
                duration: 0.2
            })
            .to(img2[0], {
                opacity: 1,
                duration: 0.1
            })
            .to(img1[0], {
                opacity: 0,
                duration: 0.5
            });
    });
});

document.querySelectorAll('.hand-btn').forEach(item => {
    item.addEventListener('mouseout', event => {

        let img1 = event.target.getElementsByClassName('hand-1');
        let img2 = event.target.getElementsByClassName('hand-2');

        var tl = gsap.timeline();
        tl.to(img1[0], {
                opacity: 0,
                duration: 0.2
            })
            .to(img2[0], {
                opacity: 1,
                duration: 0.1
            }, "0")
            .to(img2[0], {
                opacity: 0,
                duration: 0.5
            });
    });
});

// $(".hand-btn").mouseenter(function () {
//     moveSubmitHandBtnEnter();
// });

// $(".hand-btn").mouseout(function () {
//     moveSubmitHandBtnOut();
// });


// function moveSubmitHandBtnEnter() {

//     let img1 = document.getElementsByClassName('hand-2');
//     let img2 = document.getElementsByClassName('hand-1');

//     var tl = gsap.timeline();
//     tl.to(img1[0], {
//             opacity: 1,
//             duration: 0.2
//         })
//         .to(img2[0], {
//             opacity: 1,
//             duration: 0.1
//         })
//         .to(img1[0], {
//             opacity: 0,
//             duration: 0.5
//         });
// }

// function moveSubmitHandBtnOut() {
//     let img1 = document.getElementsByClassName('hand-1');
//     let img2 = document.getElementsByClassName('hand-2');

//     var tl = gsap.timeline();
//     tl.to(img1[0], {
//             opacity: 0,
//             duration: 0.2
//         })
//         .to(img2[0], {
//             opacity: 1,
//             duration: 0.1
//         }, "0")
//         .to(img2[0], {
//             opacity: 0,
//             duration: 0.5
//         });
// }

//END OF HAND JS

function setCircleBtn() {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.set('#circle', {
        drawSVG: "0%"
    });
}

function moveSubmitCircleBtn() {

    gsap.registerPlugin(DrawSVGPlugin);
    gsap.to('#circle', 1, {
        drawSVG: "100%"
    });
}

$(document).ready(function () {
    setCircleBtn();

    init();
});

function init() {

    // gsap.registerPlugin(DrawSVGPlugin);
    // gsap.to('#vase', 2, {
    //     drawSVG: 0,
    //     delay: 1
    // });
    // gsap.to('#vaseTop', 1, {
    //     drawSVG: 0
    // })

    gsap.registerPlugin(DrawSVGPlugin);
            gsap.to('#Layer_1', 2, {drawSVG:0});
            gsap.to('#Layer_2', 2, {drawSVG:0});
            gsap.to('#Layer_3', 2, {drawSVG:0});
            gsap.to('#Layer_4', 2, {drawSVG:0});
            gsap.to('#Layer_5', 2, {drawSVG:0});
            gsap.to('#Layer_6', 2, {drawSVG:0});
            gsap.to('#Layer_7', 2, {drawSVG:0});
            gsap.to('#Layer_8', 2, {drawSVG:0});
            gsap.to('#Layer_9', 2, {drawSVG:0});
            gsap.to('#Layer_10', 2, {drawSVG:0});
            gsap.to('#Layer_11', 2, {drawSVG:0});
            gsap.to('#Layer_12', 2, {drawSVG:0});



}