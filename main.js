var $ = jQuery;
$(function () {


    //Changing btn name
    $('.sw_btn').click(function () {
        $(this).text(function (i, text) {
            return text === 'Company' ? 'Individual' : 'Company';
        });
    });

    //Active elements css
    $('.pro').click(function () {
        $(this).addClass('active');
        $('.starter').removeClass('active');
    });
    //Active elements css
    $('.starter').click(function () {
        $(this).addClass('active');
        $('.pro').removeClass('active');
    });
    //Hamburger add class
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $('.mobile-nav').toggleClass('d-block');
    });
    //Slow scroll
    $('.watch-video').click(function () {
        $('html, body').animate({scrollTop: $('section.first-section').offset().top}, 1500);
        return false;
    });

});