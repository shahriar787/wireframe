$(document).ready(function () {
    //carousel slider
    $(".carousel").carousel({
        interval: 4000
    });
    //wow js
    new WOW().init();

    //slick slider
    $(".testimonial").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 2000
    });
});


$(document).ready(function () {
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});


//Form validation


function checkValidation() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username == null || username == '') {
        document.getElementById("username_error").innerHTML = "Please input username";
    } else {
        document.getElementById("username_error").innerHTML = "";
    }
    if (email == null || email == '') {
        document.getElementById("email_error").innerHTML = "Invalid Email address"
    } else {
        document.getElementById("email_error").innerHTML = "";
    }

}