$(function() {
    var $root = $('html, body'),
        $members = $("#team-members");

    if ($(document).width() <= 767) {
        $members.removeClass('text-left');
        $members.addClass('text-center');
    }

    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 50
        }, 400);
        return false;
    });

    $('.nav a').bind('touchstart', function(){
        if ($(document).width() <= 767){
            $(".navbar-toggle").click();
        }
    });

    $(document).bind('touchstart',function (event) {
        if ($(document).width() <= 767){
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("collapse in");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                $("button.navbar-toggle").click();
            }
        }
    });
})
