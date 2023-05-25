const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// javascript for video slider 

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});


let x = document.querySelector(".div")
setTimeout(function(){
  x.style.animation = "fade 1s";
  x.style.opacity = "1"
  },1000)


  
function alerted() {
    document.getElementById("demo").src="https://www.youtube.com/embed/N7_dnpFMtvA";
  }

    function alerted2 (){
        document.getElementById("demo").src="https://www.youtube.com/embed/RYCZUVA1F9s"
    }

       
    function alerted3 (){
        document.getElementById("demo").src="https://www.youtube.com/embed/KZ4D14cklvQ";
    }

       
    function alerted4 (){
        document.getElementById("demo").src="https://www.youtube.com/embed/N7_dnpFMtvA";
    }

       
    function alerted5 (){
        document.getElementById("demo").src = "https://www.youtube.com/embed/6ZoOyrqVHIM";
    }

       
    function alerted6 (){
        document.getElementById("demo").src = "https://www.youtube.com/embed/6ZoOyrqVHIM";
    }

       
    function alerted7 (){
        document.getElementById("demo").src = "https://www.youtube.com/embed/6ZoOyrqVHIM";
    }

       
    function alerted8 (){
        document.getElementById("demo").src = "https://www.youtube.com/embed/6ZoOyrqVHIM";
    }