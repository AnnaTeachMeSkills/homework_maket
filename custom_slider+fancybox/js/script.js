let main = document.querySelector('.main');
main.customSlider({
    maxSlides: 1,
    slideWidth: 300,
    slideHeight: 200,
    navs: true,
    loop: true,
    autoplay: true,
    timeout: 2000,
    dots: true,
    margin: 10,
    onHover: true,
});

let block = document.querySelector('.block');
block.fancybox({
    margin:0,
})


