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

window.onhashchange = function() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(hash === 'en' || hash === 'ru') {
        location.reload();
    }
}

const allLang = ['ru', 'en'];

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    for (let key in lang_translate) {
        let elem = document.querySelector('.' + key);
        if(elem) {
            document.querySelector('.' + key).innerHTML = lang_translate[key][hash];
        }
    }
    if(hash === 'en') {
        document.querySelector('.lang_choose_en').style.color='black';
    } else {
        document.querySelector('.lang_choose_ru').style.color='black';
    }
}

changeLanguage();


