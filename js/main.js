$(function() {

    $(window).on('popstate', function(e) {
        if (! e.state) {
            var top = $('body').offset().top*-1
            $('body').css({
                top: '',
                position: ''
            }).scrollTop(top)
            if ($(document).width() <= 767) {
                $('#desc').animate({top: $(window).height()}, 400, function () {
                    $('#desc').hide()
                    $('.shadow').animate({opacity: 0}, 200, function() {$(this).hide()})
                })
            } else if ($(document).width() >= 992) {
                $('#desc').animate({left: -800}, 400, function () {
                    $('#desc').hide()
                    $('.shadow').animate({opacity: 0}, 200, function() {$(this).hide()})
                })
            } else {
                $('#desc').animate({left: $(window).width()*-.8}, 400, function () {
                    $('#desc').hide()
                    $('.shadow').animate({opacity: 0}, 200, function() {$(this).hide()})
                })
            }
        }
    })

    var $root = $('html, body'),
        $members = $("#team-members");

    if ($(document).width() <= 767) {
        $members.removeClass('text-left');
        $members.addClass('text-center');
        $('.resu').addClass('text-left')
    }

    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 50
        }, 400);
        return false;
    });

    $('.nav a').on('touchstart', function(){
        if ($(document).width() <= 767){
            $(".navbar-toggle").click();
        }
    });

    $('.panel-body.lead ul li').click(function() {
        $('body').css({
            top: '-'+$('body').scrollTop()+'px',
            position: 'fixed'
        })
        var title = $(this).children('.service-title').text()
        var desc = $(this).children('.service-desc').html()
        history.pushState({content: title}, "description", "#desc");
        if ($(document).width() <= 767){
            $('.shadow').show().animate({opacity: .4}, 200, function () {
                $('#desc h1').text(title).siblings('p').html(desc).parent().show().animate({top: $(window).height()*.2}, 400)
            });
        } else {
            $('.shadow').show().animate({opacity: .4}, 200, function () {
                $('#desc h1').text(title).siblings('p').html(desc).parent().show().animate({left: 0}, 400)
            });
        }
    })

    $('.shadow').click(function () {
        history.back()
    })

    $(document).on('touchstart',function (event) {
        if ($(document).width() <= 767){
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("collapse in");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                $("button.navbar-toggle").click();
            }
        }
    });
})
