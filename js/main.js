window.onscroll = function showHeader () {
    let header = document.querySelector('.header');
    let header_item = document.querySelectorAll('.header_item')
    if(window.pageYOffset > 50) {
        header.classList.add('header_fixed');
        header_item.classList.add('header_link_fixed');
    } else {
        header.classList.remove('header_fixed');
        header_item.classList.remove('header_link_fixed');

    }
}

console.log('hello')

