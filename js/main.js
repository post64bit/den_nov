window.onscroll = function showHeader () {
    let header = document.querySelector('.header');
    let header_list = document.querySelector('.header_list');
    let header_nav = document.querySelector('.header_nav');
    if ($(document).scrollTop() > parseInt($('nav').css('height')) - 30) {
        header.classList.add('header_fixed');
        header_list.classList.add('header_link_fixed');
        header_nav.classList.add('header_nav_fixed');
    } else {
        header.classList.remove('header_fixed');
        header_list.classList.remove('header_link_fixed');
        header_nav.classList.remove('header_nav_fixed');
    };
    if ($(document).scrollTop() > 500) {
        $('.arrow').css('opacity','1');
    } else {
        $('.arrow').css('opacity','0');
    }
}

