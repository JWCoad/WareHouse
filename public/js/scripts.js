var slideMenu = document.querySelector('#slide_menu');
var menuButton = document.querySelector('#navButton');

/* phone menu */
/// hamburger icon
$(document).ready(function () {
    $('#nav-icon').click(function () {
        $(this).toggleClass('open');
    });
});

/// click menu link animate hamburger icon
$(document).ready(function () {
    $('#slide_menu li').click(function () {
        $('#nav-icon').toggleClass('open');

    });
});

/// slide menu
$(menuButton).on('click', slider);
$('#slide_menu li').on('click', slider);

function slider() {

    if
        (slideMenu.style.right <= "-100%") {
        slideMenu.style.right = "0px";

    }
    else if
        (slideMenu.style.right >= "0px") {
        slideMenu.style.right = "-100%";
    }
};


/* add active class to nav */
$(document).ready(function () {
    // get current URL path and assign 'active' class
    var pathname = window.location.pathname;
    $('.navUl > li > a[href="' + pathname + '"]').parent().addClass('active');
})
