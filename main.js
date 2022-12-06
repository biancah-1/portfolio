const hamburger = document.querySelector('.hamburger');
const hamb_menu = document.querySelector('.hamb-nav');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('is-active')
    hamb_menu.classList.toggle('is-active')

})