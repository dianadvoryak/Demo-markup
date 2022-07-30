const slides = document.querySelectorAll('.slider__items')
const dots = document.querySelectorAll('.slider__circle')
const left_arrow = document.querySelector('.slider__left-img')
const right_arrow = document.querySelector('.slider__right-img')
const date_fill_l = document.querySelector('[date-fill-l]')
const date_fill_r = document.querySelector('[date-fill-r]')

let slideIndex = 0
showSlide(slideIndex)

function currentSlide(n){
    showSlide(slideIndex = n)
}

function plusSlide(n){
    showSlide(slideIndex += n)
}

function showSlide(n){

    if (n > slides.length-1) {
        slideIndex = slides.length-1
    } 
    if (n < 0) {
        slideIndex = 0
    }

    slides.forEach((item)=>{
        item.className = item.className.replace(" active__slide", "");
    })
    dots.forEach((item)=>{
        item.className = item.className.replace(" active__circle", "");
    })

    dots[slideIndex].className += " active__circle";
    slides[slideIndex].className += " active__slide";


    if(slideIndex == 0){
        date_fill_l.setAttribute('fill', 'black')
    }else{
        date_fill_l.setAttribute('fill', 'red')
    }
    if(slideIndex == slides.length-1){
        date_fill_r.setAttribute('fill', 'black')
    }else{
        date_fill_r.setAttribute('fill', 'red')
    }

}



let getMenu = document.querySelector('.menu')
let getBody = document.querySelector('body')
let getBurgerMenu = document.querySelector('.burger_menu')
let getLi = document.querySelectorAll('.menu__item')
let getBtn = document.querySelector('.header__btn')

getLi.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})
getBtn.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})


function Rotate(click){
    getBurgerMenu.classList.toggle('rotate')
    getMenu.classList.toggle('active')
    getBtn.classList.toggle('active')
	getBody.classList.toggle('hidden')
}