    function setupSlider(sliderClass) {
    const slider = document.querySelector(sliderClass);
    const sliderContent = slider.querySelector('.slider-content');
    const slides = slider.querySelectorAll('.slide');
    const leftArrow = slider.querySelector('.left-arrow');
    const rightArrow = slider.querySelector('.right-arrow');
    
    let currentIndex = 0; 
    
    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderContent.style.transform = `translateX(${offset}%)`; 
    }
    
    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSlider();
    });
    
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });
}

setupSlider('.projetos-slider');
setupSlider('.experiencia-slider');
