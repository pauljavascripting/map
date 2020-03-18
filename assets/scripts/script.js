/*jshint esversion: 6 */

Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

//START HEADROOM - https://stackoverflow.com/questions/44055692/headroom-js-header-with-initial-static-state
var myElement = document.querySelector("header");

var headroom = new Headroom(myElement, {
    // vertical offset in px before element is first unpinned
    "offset": 220,
    // or you can specify tolerance individually for up/down scroll
    "tolerance": {
        up: 0,
        down: 0
    },
    // css classes to apply
    "classes": {
        // when element is initialised
        "initial": "header--fixed",
        // when scrolling up
        "pinned": "slideDown",
        // when scrolling down
        "unpinned": "slideUp",
        // when above offset
        "top": "top",
        // when below offset
        "notTop": "not-top",
    }
});

headroom.init();

// When the page is at the top, remove the slideDown class.
window.addEventListener('scroll', function () {
    if (window.pageYOffset === 0) {
        myElement.classList.remove('slideDown');
    }
});
//END HEADROOM

// $('.dropdown-toggle').click(function(event){
//     event.preventDefault();
//     event.stopPropagation();
// });

$(document).ready(function () {

    //  START - REMOVED
    // $('#navbarSupportedContent').on('show.bs.dropdown', function () {
    //     $('.dropdown-bar').toggle();
    //     $('.navbar').toggleClass('pb-0');
    // });

    // $('#navbarSupportedContent').on('hide.bs.dropdown', function () {
    //     $('.dropdown-bar').toggle();
    //     $('.navbar').toggleClass('pb-0');
    // });
      // END

    $('.multi-item-carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) next = $(this).siblings(':first');
        next.children(':first-child').clone().appendTo($(this));
    });
    $('.multi-item-carousel .carousel-item').each(function () {
        var prev = $(this).prev();
        if (!prev.length) prev = $(this).siblings(':last');
        prev.children(':nth-last-child(2)').clone().prependTo($(this));
    });

    $(".carousel-inner").swipe({
        //Generic swipe handler for all directions
        swipeLeft: function (event, direction, distance, duration, fingerCount) {
            $(this).parent().carousel('next');
        },
        swipeRight: function () {
            $(this).parent().carousel('prev');
        },
        //Default is 75px
        threshold: 75
    });

    SetDate();

    $(".icon-bar").delay(3000).slideToggle("slow", function () {
        // Animation complete.
    });

});

// $(".jumbotron").css({ height: $(window).height() + "px" });

// $(window).on("resize", function() {
//   $(".jumbotron").css({ height: $(window).height() + "px" });
// });

function SetDate() {
    $('#VisitDate').val(new Date().toDateInputValue());
}

//START OF HAND JS

$(".hand-btn")
    .mouseenter(function () {
        moveSubmitHandBtnEnter();
    }).mouseout(function () {
        moveSubmitHandBtnOut();
    });

function moveSubmitHandBtnEnter() {

    let img1 = document.getElementsByClassName('hand-2');
    let img2 = document.getElementsByClassName('hand-1');

    var tl = gsap.timeline();
    tl.to(img1[0], { opacity: 1,duration: 0.2 })
        .to(img2[0], { opacity: 1,duration: 0.1 })
        .to(img1[0], { opacity: 0,duration: 0.5 });
}

function moveSubmitHandBtnOut() {
    let img1 = document.getElementsByClassName('hand-1');
    let img2 = document.getElementsByClassName('hand-2');

    var tl = gsap.timeline();
    tl.to(img1[0], { opacity: 0,duration: 0.2 })
        .to(img2[0], { opacity: 1,duration: 0.1 },"0")
        .to(img2[0], { opacity: 0,duration: 0.5 });
}

// document.querySelectorAll('.hand-btn').forEach(item => {
//     item.addEventListener('mouseenter', event => {

//         let img1 = event.target.getElementsByClassName('hand-2');
//         let img2 = event.target.getElementsByClassName('hand-1');

//         var tl = gsap.timeline();
//         tl.to(img1[0], {
//                 opacity: 1,
//                 duration: 0.2
//             })
//             .to(img2[0], {
//                 opacity: 1,
//                 duration: 0.1
//             })
//             .to(img1[0], {
//                 opacity: 0,
//                 duration: 0.5
//             });
//     });
// });

// document.querySelectorAll('.hand-btn').forEach(item => {
//     item.addEventListener('mouseout', event => {

//         let img1 = event.target.getElementsByClassName('hand-1');
//         let img2 = event.target.getElementsByClassName('hand-2');

//         var tl = gsap.timeline();
//         tl.to(img1[0], {
//                 opacity: 0,
//                 duration: 0.2
//             })
//             .to(img2[0], {
//                 opacity: 1,
//                 duration: 0.1
//             }, "0")
//             .to(img2[0], {
//                 opacity: 0,
//                 duration: 0.5
//             });
//     });
// });

// $(".hand-btn")
//   .on("mouseenter", function(e) {
//     var target = $(this);

//     let img1 = target.closest('hand-1');
//     let img2 =  target.closest('hand-2');

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
//   })
//   .on("mouseout", function(e) {
//      var target = $(this);

//      console.log("here");
//      let img1 = target.closest('hand-1');
//      let img2 =  target.closest('hand-2');

//      console.log(img1);
//      console.log(img2);

//      var tl = gsap.timeline();
//      tl.to(img1[0], {
//              opacity: 0,
//              duration: 0.2
//          })
//          .to(img2[0], {
//              opacity: 1,
//              duration: 0.1
//          }, "0")
//          .to(img2[0], {
//              opacity: 0,
//              duration: 0.5
//          });
//   });

//END OF HAND JS

//START OF ARROW JS

$(".arrow-btn")
    .mouseover(function (e) {
        var $target = $(e.target).find ('.submit-arrow');

        gsap.fromTo($target, 1, {
            left: '10%'
        }, {
            visibility: 'visible',
            left: '85%',
            onComplete: function () {
               $target.css("visibility","hidden");
            }
        });

    });

// document.querySelectorAll('.arrow-btn').forEach(item => {
//     item.addEventListener('mouseover', event => {
//         var img = event.target.getElementsByClassName('submit-arrow'); //document

//         gsap.fromTo(img[0], 1, {
//             left: '10%'
//         }, {
//             visibility: 'visible',
//             left: '85%',
//             onComplete: function () {
//                 img[0].style.visibility = "hidden";
//             }
//         });
//     });
// });

//END OF ARROW JS


//START OF UNDERLINE

function positionNeighbourlyUnderline(neighbourlyLine,ctrl,topSubtract) {
    var newText = "";

    if (initialUnderlineText === "")
        initialUnderlineText = ctrl.html();

    var ctrlText = initialUnderlineText;

    if (ctrlText.indexOf("neighbourly") > -1)  {
        newText= ctrlText.replace(/ne/, '<x class="start">ne</x>')
                                .replace(/ w/, '<x class="end"> w</x>');
    }
    else if (ctrlText.indexOf("Advantage") > -1)  {
        newText = ctrlText.replace(/Ad/, '<x class="start">Ad</x>')
                                .replace(/ o/, '<x class="end"> o</x>');
    }
    else if (ctrlText.indexOf("Our Huddle") > -1)  {
        newText = ctrlText.replace(/Ou/, '<x class="start">Ou</x>')
                                .replace(/e/, '<x class="end">e</x>');
    }

    ctrl.html(newText);

    neighbourlyLine.find(".neighbourlyUnderline").css({
        width: $("x.end").position().left - $("x.start").position().left
    });

    neighbourlyLine.find(".neighbourlyLineHolder").css({
        top: ($("x.start").position().top + parseFloat(ctrl.css('font-size'))) - (topSubtract ? 10 : 0),
        left: $("x.start").position().left,
        position: 'absolute'
    });
}

var neighbourlyLine = ".hasNeighbourlyLine";
var underlineH1 = neighbourlyLine + " h1";
var underlineH2 = neighbourlyLine + " h2";
var initialUnderlineText = "";

function addNeighbourlyUnderline (addMotion) {
    var ctrl;
    // var ctrlText = "";
    var topSubtract = true;

    if ($(neighbourlyLine).html() !== undefined) {

        if ($(underlineH1).html() !== undefined) {
            ctrl= $(underlineH1);
            topSubtract = false;
        }
        else if ($(underlineH2).html() !== undefined)
            ctrl= $(underlineH2);
    }

    if (ctrl !== undefined) {

        positionNeighbourlyUnderline($(neighbourlyLine),ctrl,topSubtract);

        if (addMotion) {
            drawNeighbourlyUnderline();
        }
    }
}
//END OF UNDERLINE

//START OF LOVE TO LIVE UNDERLINE
function positionLoveToLiveUnderline(addMotion,ctrl) {

    if (initialLoveToLiveUnderlineText === "")
        initialLoveToLiveUnderlineText = ctrl.html();

    var ctrlText = initialLoveToLiveUnderlineText;

    var newText = ctrlText.replace(/l /, '<n class="start">l </n>')
                    .replace(/ive/, '<n class="end">ive</n>');

    ctrl.html(newText);

    if (addMotion) {

        $(loveToLiveUnderline).find(".svg-overlay").css({
            width: ($("n.end").position().left + $("n.end").width() /1.5) - $("n.start").position().left
        });
    }

    $(loveToLiveUnderline).find(".svg-image").css({
        width: ($("n.end").position().left + $("n.end").width()/1.5) - $("n.start").position().left
    })
    .addClass("d-block");

    $(loveToLiveUnderline).css({
        top: ($("n.start").position().top + parseFloat(ctrl.css('font-size')) + 5),
        left: ($("n.start").position().left + $("n.start").width())
    });
}

var hasloveToLiveUnderline = ".hasLoveToLiveUnderline";
var loveToLiveUnderline = ".loveToLiveUnderline";
var initialLoveToLiveUnderlineText = "";

function addLoveToLiveUnderline (addMotion) {
    var ctrl;

    if ($(hasloveToLiveUnderline).html() !== undefined)
        ctrl= $(hasloveToLiveUnderline);

    if (ctrl !== undefined) {

        positionLoveToLiveUnderline(addMotion,ctrl);

        if (addMotion)
            drawLovetoLiveUnderline();

    }
}

//END OF LOVE TO LIVE UNDERLINE

$(document).ready(function () {
    addNeighbourlyUnderline(true);

    addLoveToLiveUnderline(true);
});

$(window).on("resize", function () {
    addNeighbourlyUnderline(false);

    addLoveToLiveUnderline(false);
});




