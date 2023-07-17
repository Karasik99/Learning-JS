const SLIDER = document.querySelector(".slider")
const SLIDER_WRAPPER = document.querySelector(".slider__images")
const SLIDER_BUTTONS = document.querySelector(".slider__buttons_nav")
const SLIDER_DOTS_CONTAINER = document.querySelector(".slider__dots")
const SLIDER_GALLERY_BUTTON = document.querySelector(".slider__gallery")
let offset, movingPosition = (0,0)
let movingPositionStep, maxPosition, slideShow

////////////////////////////////////////////////  Гибкое создание точек  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
createDot()
const SLIDER_DOT = document.querySelectorAll(".slider__dots_nav")
let sliderDot = Array.from(SLIDER_DOT)
let indexActiveDot = 0

//////////////////////////////////////////////////  Прокрутка слайдера  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

SLIDER_BUTTONS.addEventListener('click',(event)=>{
    if(event.target.closest('.button__right')){
        moveSliderLeft()
    }
    if(event.target.closest('.button__left')){
        moveSliderRight()
    }
    if(event.target.closest('.button__end')){
        moveSliderEnd()
    }
    if(event.target.closest('.button__start')){
        moveSliderStart()
    }
})

//////////////////////////////////////////////////  Клик на кнопку  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
SLIDER_DOTS_CONTAINER.addEventListener("click", moveToDot)

//////////////////////////////////////////////////  Зум галереи  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
SLIDER_GALLERY_BUTTON.addEventListener("click", zoomGallery)

//////////////////////////////////////////////////  слайд-шоу \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

SLIDER_BUTTONS.addEventListener('click',(event)=>{
    if(event.target.closest('.button__play')){
        showSlideShow()
        event.target.classList.toggle('active')

    }
})

function moveSliderLeft(){
    movingPositionStep = SLIDER_WRAPPER.clientWidth
    maxPosition = (SLIDER_WRAPPER.childElementCount-1)*SLIDER_WRAPPER.clientWidth
    movingPosition += movingPositionStep
    if(movingPosition>maxPosition){
        movingPosition = 0
        SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    } else {
        SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    }
    getActiveDot()
}

function moveSliderRight(){
    movingPositionStep = SLIDER_WRAPPER.clientWidth
    maxPosition = (SLIDER_WRAPPER.childElementCount-1)*SLIDER_WRAPPER.clientWidth
    movingPosition -= movingPositionStep
    if(movingPosition<0){
        movingPosition = maxPosition
        SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    } else {
        SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    }
    getActiveDot()
}

function moveSliderEnd(){
    movingPosition = (SLIDER_WRAPPER.childElementCount-1)*SLIDER_WRAPPER.clientWidth
    SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    getActiveDot()
}

function moveSliderStart(){
    movingPosition = 0
    SLIDER_WRAPPER.style.transform = `translateX(${movingPosition}px)`
    getActiveDot()
}

function createDot() {
    for (let j = 0; j < 1; j++) {
      let dot = document.createElement("div");
      dot.classList.add("slider__dots_nav");
      dot.classList.add("active");
      SLIDER_DOTS_CONTAINER.append(dot);
      for (let i = 0; i < SLIDER_WRAPPER.childElementCount - 1; i++) {
        let dot = document.createElement("div");
        dot.classList.add("slider__dots_nav");
        SLIDER_DOTS_CONTAINER.append(dot);
      }
    }
}

function moveToDot(event){
    if (event.target.closest(".slider__dots_nav")) {
        sliderDot[indexActiveDot].classList.remove("active");
        indexActiveDot = sliderDot.indexOf(event.target);
        sliderDot[indexActiveDot].classList.add("active");
        movingPositionStep = SLIDER_WRAPPER.clientWidth;
        movingPosition = movingPositionStep * indexActiveDot;
        SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`;
    }
}

//////////////////////////////////////////////////  Закрашивание точки  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function getActiveDot(){
    sliderDot[indexActiveDot].classList.remove("active");
    indexActiveDot = movingPosition/SLIDER_WRAPPER.clientWidth;
    sliderDot[indexActiveDot].classList.add("active");
}

function zoomGallery(){
    SLIDER_WRAPPER.classList.toggle('no-transform')
    SLIDER.classList.toggle('active') 
    movingPositionStep = SLIDER_WRAPPER.clientWidth
    movingPosition=indexActiveDot*movingPositionStep
    SLIDER_WRAPPER.style.transform = `translateX(${-movingPosition}px)`
    setTimeout(() => {
        SLIDER_WRAPPER.classList.toggle('no-transform')
    }, 0);
}

function showSlideShow() {
  if (!event.target.closest(".active")) {
    slideShow = setInterval(() => {
      moveSliderLeft();
    }, 2000);
  } else {
    clearInterval(slideShow, 2000);
  }
  setTimeout(() => {
    clearInterval(slideShow);
  }, 2000 * (SLIDER_WRAPPER.childElementCount - 1));
}