let timerID;
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    timerID = setTimeout(() => {
        showSlides()
        timerID = null;
    }
        , 3000); // Change image every 3 seconds
}


function dropDown1() {
    let content = document.querySelector(".dropdown-content1");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu1");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu1");
        menu.style.display = "none";
    });
}
dropDown1();

function dropDown2() {
    let content = document.querySelector(".dropdown-content2");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu2");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu2");
        menu.style.display = "none";
    });
}
dropDown2();

function dropDown3() {
    let content = document.querySelector(".dropdown-content3");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu3");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu3");
        menu.style.display = "none";
    });
}
dropDown3();

function dropDown4() {
    let content = document.querySelector(".dropdown-content4");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu4");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu4");
        menu.style.display = "none";
    });
}
dropDown4();

function dropDown5() {
    let content = document.querySelector(".dropdown-content5");

    content.addEventListener("mouseover", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "block";
    });

    let menu = document.querySelector(".dropdown-menu5");
    menu.addEventListener("mouseover", function () {
        menu.style.display = "block";
        menu.addEventListener("mouseout", function () {
            menu.style.display = "none";
        });
    });

    content.addEventListener("mouseout", function () {
        let menu = document.querySelector(".dropdown-menu5");
        menu.style.display = "none";
    });
}
dropDown5();

