

let sizeBtn = document.querySelectorAll(".btn__froze"),
    modal = document.querySelector(".modal__size"),
    clouse = document.querySelector(".modal__cross"),
    calculationBtn = document.querySelectorAll(".btn__calculation"),
    modalCalc = document.querySelector(".modal__calculation"),
    clouseCalc = document.querySelector(".calculation__cross"),
    clouseReview = document.querySelector(".review__cross"),
    ReviewBtn  = document.querySelectorAll(".review__btn"),
    modalReview  = document.querySelector(".modal__review");

    sizeBtn.forEach(function (btn){
        btn.addEventListener("click", ()=> {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        })
    });

    ReviewBtn.forEach(function (btn){
        btn.addEventListener("click", ()=> {
            modalReview.style.display = "block";
            document.body.style.overflow = "hidden";
        })
    });

    clouseReview.addEventListener("click", ()=> {
        modalReview.style.display = "none";
        document.body.style.overflow = "";    
    });
    
    clouse.addEventListener("click", ()=> {
        modal.style.display = "none";
        
        if(isTrue === false){
            document.body.style.overflow = "hidden";
        } else if(isTrue === true) {
            document.body.style.overflow = "";
        }    
    });
    
    calculationBtn.forEach(function (btn){
        btn.addEventListener("click", ()=> {
            modalCalc.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });
    clouseCalc.addEventListener("click", ()=> {
        modalCalc.style.display = "none";
        if(isTrue === false){
            document.body.style.overflow = "hidden";
        } else if(isTrue === true) {
            document.body.style.overflow = "";
        } 
        
    });
    

var clouseServices = document.querySelector(".wrapper__services__cross"),
    servicesBlock = document.querySelector("#window"),
    modalServices = document.querySelector(".wrapper__modal__services"),

    isTrue = true,

    clouseServicesTwo = document.querySelector("#two"),
    servicesBlocTwo = document.querySelector("#windowTwo"),
    modalServicesTwo = document.querySelector(".window"),

    clouseServicesTree = document.querySelector("#tree"),
    servicesBlocTree  = document.querySelector("#windowTree"),
    modalServicesTree  = document.querySelector(".windowTree"),

    clouseServicesFour = document.querySelector("#four"),
    servicesBlocFour = document.querySelector("#windowFour"),
    modalServicesFour = document.querySelector(".windowFour");

    


    servicesBlock.addEventListener("click", ()=> {
        modalServices.style.display = "block";
        document.body.style.overflow = "hidden";
        isTrue = false;

    })
    clouseServices.addEventListener("click", ()=> {
        modalServices.style.display = "none";
        document.body.style.overflow = "";
        isTrue = true;
    })   
    servicesBlocTwo.addEventListener("click", ()=> {
        modalServicesTwo.style.display = "block";
        document.body.style.overflow = "hidden";
        isTrue = false;
    })
    clouseServicesTwo.addEventListener("click", ()=> {
        modalServicesTwo.style.display = "none";
        document.body.style.overflow = "";
        isTrue = true;
    });
    servicesBlocTree.addEventListener("click", ()=> {
        modalServicesTree.style.display = "block";
        document.body.style.overflow = "hidden";
        isTrue = false;
    })
    clouseServicesTree.addEventListener("click", ()=> {
        modalServicesTree.style.display = "none";
        document.body.style.overflow = "";
        isTrue = true;
    });
    servicesBlocFour.addEventListener("click", ()=> {
        modalServicesFour.style.display = "block";
        document.body.style.overflow = "hidden";
        isTrue = false;
    })
    clouseServicesFour.addEventListener("click", ()=> {
        modalServicesFour.style.display = "none";
        document.body.style.overflow = "";
        isTrue = true;    
    });



// сладеры без стрелок 

let sliders = document.querySelectorAll('.wrapper__slider');

for (let i = 0; i < sliders.length; i++) {
init_slider(sliders[i]);
}

function init_slider(slider) {
    let slideIndex = 1,
    slides = slider.querySelectorAll('.slider__iteam'),
    dotsWrap = slider.querySelector('.slider__dots'),
    dots = slider.querySelectorAll('.dot');

showSlides(slideIndex);

    function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot__active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot__active');
}

function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});
}


// слайдер со стрелками 

let slideIndex = 1,
slides = document.querySelectorAll('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next');
showSlides(slideIndex);

function showSlides(n) {

if (n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}

slides.forEach((item) => item.style.display = 'none');
slides[slideIndex - 1].style.display = 'block';
}

function plusSlides(n) {
showSlides(slideIndex += n); 
}
function currentSlide(n) {
showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
plusSlides(-1);
});

next.addEventListener('click', function() {
plusSlides(1);
});



// Слайдер со всеми функциями


let slideIndexArr = 1,
slidesArr  = document.querySelectorAll('.slider-item-arr'),
prevArr  = document.querySelector('.prev-arr'),
nextArr  = document.querySelector('.next-arr '),
dotsWrapArr  = document.querySelector('.slider-arr-dots'),
dotsArr  = document.querySelectorAll('.dot-arr');

showSlidesArr(slideIndexArr);

function showSlidesArr(n) {

if (n > slidesArr.length) {
    slideIndexArr = 1;
}
if (n < 1) {
    slideIndexArr = slidesArr.length;
}

slidesArr.forEach((item) => item.style.display = 'none');
dotsArr.forEach((item) => item.classList.remove('product__active'));

slidesArr[slideIndexArr - 1].style.display = 'grid';
dotsArr[slideIndexArr - 1].classList.add('product__active');
}

function plusSlidesArr(n) {
showSlidesArr(slideIndexArr += n); 
}
function currentSlideArr(n) {
showSlidesArr(slideIndexArr = n);
}

prevArr.addEventListener('click', function() {
plusSlidesArr(-1);
});

nextArr.addEventListener('click', function() {
plusSlidesArr(1);
});

dotsWrapArr.addEventListener('click', function(event) {
for (let i = 0; i < dotsArr.length + 1; i++) {
    if (event.target.classList.contains('dot-arr') && event.target == dotsArr[i-1]) {
        
        currentSlideArr(i);
    }
}
});

// Табы


let tebsBtn = document.querySelectorAll(".tab"),
tabsitem = document.querySelectorAll(".about__tab");

tebsBtn.forEach((item)=> {
    item.addEventListener("click", ()=>{
        let current = item,
            tabId = current.getAttribute("data-tab"),
            currentTab = document.querySelector(tabId);

        tebsBtn.forEach((item)=>{
            item.classList.remove("product__active");
        });

        tabsitem.forEach((item)=>{
            item.classList.remove("tab__active");
        });

        current.classList.add("product__active");
        currentTab.classList.add("tab__active");

    });
});

//Отправка form

var form = document.getElementsByTagName('form'),
    inputs = document.querySelectorAll('input');
var message = new Object();
message.loading = 'Отправляем...';
message.success = 'Спасибо! Мы свяжемся с вами';
message.failure = 'Что-то пошло не так ';
var statusMessage = document.createElement('div');
statusMessage.className = 'status';


for (let i=0;i<form.length;i++){
    form[i].addEventListener('submit', function(event) {
        event.preventDefault();
        form[i].appendChild(statusMessage);

        var formData = new FormData(form[i]);

        var request = new XMLHttpRequest();
        request.open('POST', 'server.php', true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4)
                statusMessage.innerHTML = message.loading;
            else if (request.readyState === 4 && request.status == 200) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    
                }
                else
                    statusMessage.innerHTML = message.failure;
            }
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            }
        }  
       
       
    
    });
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        item: 4,
        margin: 50,
        autoWidth: true,
        nav: true
    });


    $(".owl-carousel-certificate").owlCarousel({
        item: 5,
        margin: 10,
        autoWidth: true,
        nav: true
    });
  });  

var offset = 0,
    sliderCatr = document.querySelector(".certificate__slider"),
    btnRightCatr = document.querySelector(".prev__certificate"),
    btnLeftCatr = document.querySelector(".next_certificate");

btnLeftCatr.addEventListener("click", ()=>{
    offset += 205
    if (offset > 837){
        offset = 0
    }
    sliderCatr.style.left = -offset + "px"
})

btnRightCatr.addEventListener("click", ()=>{
    offset -= 214
    if (offset < 0){
        offset = 837
    }
    sliderCatr.style.left = -offset + "px"
})

