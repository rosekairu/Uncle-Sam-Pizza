$(window).scroll(function (event) {
    function footer() {
        var scroll = $(window).scrollTop();
        if (y > 800) {
            $(".footer").fadeIn("slow").addClass("show");
        } else {
            $(".footer").fadeOut("slow").removeClass("hide");
        }
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function () {
            if ($('.footer').is(':hover')) {
                footer();
            } else {
                $(".footer").fadeOut("slow");
            }
        }, 2000));
    }
    footer();
});