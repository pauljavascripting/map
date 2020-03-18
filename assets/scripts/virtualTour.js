$(document).ready(function () {
    if ($(".virtual-tour").length > 0) {
        if (window.document.documentMode) {
            $(".virtual-tour .vrview").remove();
        } else {
            $(".virtual-tour iframe").remove();
        }
    }
});