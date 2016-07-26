$(function() {
    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 50
        }, 400);
        return false;
    });

    $('.nav a').on('click', function(){
        if ($(document).width() <= 767){
            $(".navbar-toggle").click();
        }
    });
})
