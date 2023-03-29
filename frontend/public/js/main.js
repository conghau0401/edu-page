const BASE_URL = "http://demo01.websitegiatot.vn/"
$(document).ready(function() {
    //banner section
    const video = $('#player').attr('src');
    $(".play-btn").click(function() {
        $('#player').attr('src', `${video}?autoplay=1&mute=1`)
    })
    if($("#staticBackdrop").hasClass("show")) {
        $('#player').attr('src', `${video}`)
    }

    $(".ar-content .connect-content:first").show();
    $(".tab-connect li").click(function() {
        $(".ar-content .connect-content").hide();
        const id = $(this).attr("role");
        console.log(id);
        $("#" + id).fadeIn('fast');


        $(".tab-connect li").removeClass("active");
        $(this).addClass("active");
    })

    //subject section
    $('.owl-subject').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay: true,
        responsive:{
            0:{
                items:2.5
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    //connect clients
    $('.owl-clients').owlCarousel({
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        navText: [`<img src="${BASE_URL}frontend/pages/assets/img/home/prev.svg" />`, `<img src="${BASE_URL}frontend/pages/assets/img/home/next.svg" />`],
        responsive:{
            0:{
                loop: true,
                nav: false,
                items: 2.5
            },
            600:{
                loop: true,
                items: 3
            },
            1000:{
                loop: false,
                items: 6
            }
        }
    })

    //connect section
    $('.owl-connect').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [`<img src="${BASE_URL}frontend/pages/assets/img/home/prev.svg" />`, `<img src="${BASE_URL}frontend/pages/assets/img/home/next.svg" />`],
        responsive:{
            0:{
                items:1.15,
                dots: false,
                margin: 15
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    //evaluate section
    $('.owl-evaluate').owlCarousel({
        loop: true,
        margin: 10,
        items:1,
        nav: true,
        dots: false,
        autoplay: true,
        navText: [`<img src="${BASE_URL}frontend/pages/assets/img/home/prev.svg" />`, `<img src="${BASE_URL}frontend/pages/assets/img/home/next.svg" />`],
    })

    //faq section
    $(".content-faq dl:first dd").show();
    $(".content-faq dl dt").click(function() {
        const _parent = $(this).parent("dl");
        _parent.toggleClass("active");
        _parent.children("dd").slideToggle();
    })

    //Register
    $(".ar-type").click(function() {
        $(".ar-type").removeClass("active");
        $(".ar-type").find("p.des").fadeOut();
        $(this).addClass("active");
        $(this).find("p.des").fadeIn();
        const type = $(this).attr("role");
        $("input#type-account").val(type);
    })

})
