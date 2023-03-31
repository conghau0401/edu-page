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

    //connect tab
    $(".ar-content .connect-content:first").show();
    $(".tab-connect li").click(function() {
        $(".ar-content .connect-content").hide();
        const id = $(this).attr("role");
        $("#" + id).fadeIn('fast');
        $(".tab-connect li").removeClass("active");
        $(this).addClass("active");
    })

    //popup subjects
    $(".subjects .see-more").click(function() {
        $(this).parent().next(".subjects-popup").fadeIn();
    })
    $(".subjects-popup .cancel-popup, .subjects-popup .done-popup").click(function() {
        $(".subjects-popup").fadeOut();
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
    $("dd.avatar, .ar-cmnd").click(function() {
        $(this).children("input[type='file']")[0].click();
    })
    //END Register
})

//--- TAB REGISTER
if ($(".right-my-account").length) {
    var currentTab = 0;
    document.addEventListener("DOMContentLoaded", function(event) {
        showTab(currentTab);
    });
    function showTab(n) {
        var x = document.getElementsByClassName("tab-register-content");
        x[n].style.display = "block";
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Hoàn thành →";
            $(".tab-register li").removeClass("active");
            $(".tab-register li:last").addClass("active");
        } else {
            document.getElementById("nextBtn").innerHTML = "Tiếp theo →";
            $(".tab-register li").removeClass("active");
            $(".tab-register li:first").addClass("active");
        }
    }
    function nextPrev(n) {
        var x = document.getElementsByClassName("tab-register-content");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {

            // $("form").submit();
            document.getElementById("nextprevious").style.display = "none";
            document.getElementById("text-message").style.display = "block";
        }
        showTab(currentTab);
    }
    function validateForm() {
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab-register-content");
        y = x[currentTab].getElementsByClassName("require");

        if (currentTab > 0) {
            const subject = $('input[name="subject[]"]:checked');
            if (subject.length == 0) {
                $(".require-subjects").show();
               valid = false;
            } else {
                $(".require-subjects").hide();
                valid = true;
            }
        }
        for (i = 0; i < y.length; i++) {
            if (y[i].value == "") {
                if (!y[i].classList.contains('invalid')) {
                    y[i].className += " invalid";
                }
                valid = false;
            } else {
                y[i].classList.remove("invalid");
            }
        }
        return valid;
    }
}
//---END TAB REGISTER
