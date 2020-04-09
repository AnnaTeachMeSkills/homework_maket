
let moveNum = 0;

let custom_slider = document.querySelector('.custom_slider');
custom_slider.custom_slider = function( sliderSettings) {
    console.log(sliderSettings);
    
    if (sliderSettings.slideWidth == ""){
        slidesOffset = 300;
        sliderSettings.slideWidth = '300';
        console.log(sliderSettings);
    } else {slidesOffset = sliderSettings.slideWidth}
    

    
    buildSlider();
    widthSetting(sliderSettings);
    styles(sliderSettings)
    
    let nextSlideBtn = document.querySelector('.custom_slider .next_slide');
    let prevSlideBtn = document.querySelector('.custom_slider .prev_slide');

    nextSlideBtn.addEventListener('click', nextSlideClick);
    prevSlideBtn.addEventListener('click', prevSlideClick);

    function nextSlideClick() {
        moveNum = moveNum - slidesOffset;
        let custom_slider = this.closest('.custom_slider');
        let innerContainer = custom_slider.querySelector('.inner_container');
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        
    }
    
    function prevSlideClick() {
        
        moveNum = moveNum + slidesOffset;
        let custom_slider = this.closest('.custom_slider');
        let innerContainer = custom_slider.querySelector('.inner_container');
        innerContainer.style.transform = `translate(${moveNum}px, 0)`;
        
    }
    

}

function widthSetting (sliderSettings) {
    let moveNum = sliderSettings.slideWidth;
    return moveNum;

}

function styles (sliderSettings) {
    let one_slide = document.querySelectorAll('.one_slide');
    one_slide.forEach(item=>  item.style.width = `${sliderSettings.slideWidth}px`);
    let outer_container  = document.querySelector('.outer_container ');
    if (sliderSettings.maxSlide == ""){
        sliderSettings.maxSlide = 1;
    }
    outer_container.style.width = `${sliderSettings.maxSlide  * sliderSettings.slideWidth }px `;
}



function buildSlider () {
    let oneSlideArr = custom_slider.querySelectorAll('div');
    oneSlideArr.forEach(item => item.classList.add('one_slide'));

    custom_slider.innerHTML = `
    <div class="outer_container">
        <div class="inner_container">
            ${custom_slider.innerHTML}
        </div>
    <div>
    <div class="navs">
        <a href="#" class="prev_slide"><</a>
        <a href="#" class="next_slide">></a>
    </div>`
    
       
}









