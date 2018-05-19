function anim() {
    win3pos = win3.offset().top - (win3.height() / 1.5);
    if (pos >= win3pos) {
        $(".garant").animate({
            'opacity': 1
        }, 1400).animate({
            'border-radius': '0%'
        }, 2400);
    }
}

function goto(a) {
    m = '#' + a;
    $('body,html').animate({scrollTop: $(m).offset().top - 50}, 500);
}

function showimg() {
    pos = $(window).scrollTop();

    if (pos >= win4pos) {
        $("#img1").animate({
            left: "40"
        }, 1800, function () {
        });
        $("#img2").animate({
            left: "80"
        }, 1800, function () {
        });
        $("#img3").animate({
            left: "40"
        }, 1800, function () {
        });
    }
}

function darkmenu() {
    if (pos >= fixed.offset().top) {
        fixed.addClass('darkmenu');
        $('#piclogo').attr('width', '130px')
    }
    if (pos < 42) {
        fixed.removeClass('darkmenu');
        $('#piclogo').attr('width', '160px')
    }
}

$(window).resize(function () {
    win1.css('min-height', screen.height);
    bgs.css('height', win1.height());
    level2.css('min-height', win1.height());
    level2.css('padding-top', win1.height() / 2.5);
});

function scrollUpdate() {
    // if (screen.width > 760) {
    //     bgs.css('background-position-y', $(window).scrollTop() / 1.5);
    // }
    // else {
    //     bgs.css('background-position-x', '80%');
    //     bgs.css('background-position-y', $(window).scrollTop() / 1.5);
    // }

    if (pos >= win3.offset().top - win3.height()) {
        t = $(window).scrollTop() - win3.offset().top;
        win3.css('background-position-y', t / 1.5);
    }

    darkmenu();
    showimg();
    anim();
}

var bgs = null;

var win1 = null;
var win3 = null;
var win4 = null;

var level2 = null;
var fixed = null;

window.onload = function () {
  $('.owl-carousel').owlCarousel({
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    loop:true,
    dots:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
    bgs = $('#bg1,#bg2,#bg3');

    win1 = $("#win1");
    win3 = $("#win3");
    win4 = $('#win4');

    level2 = $('.level2');
    fixed = $('#fixed');

    win1.css('background-position-y', $(window).scrollTop() / 1.5);

    $(document).scroll(scrollUpdate);

    fixed.show();

    pos = $(window).scrollTop();
    win4pos = win4.offset().top - ((win4.height() / 3)  );

    showimg();
    darkmenu();
};
