$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Slide up script
    $('.scroll-up-btn').on('click', function() {
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/nav bar
    $('.menu-btn'). on('click', function() {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });


    // Typing animation script
    let typed = new Typed(".typing", {
        strings: ["Front-end Developer", "QA Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let typed2 = new Typed(".typing-2", {
        strings: ["Front-end Developer", "QA Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Read more btn show/hide
    $('#showBtn').on('click', function(e) {
        e.preventDefault();
        $(this).closest(".skills-content").find('.read-more').slideToggle('hidden');
    });


    // Modal window show
    const modalBtn = $('[data-modal]');
    const modalClose = $("[data-close]");

    $(modalBtn).on('click', function(event) {
    
        event.preventDefault();

        $(this).closest('body').find('#modal-1').addClass('show');
        $("body").addClass('no-scroll');

    });

    $(modalClose).on('click', function() {
        $(this).closest('body').find('#modal-1').removeClass('show');
        $("body").removeClass('no-scroll');
    });

});



