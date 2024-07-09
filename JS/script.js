// DEFINIR ID's

const bodyID = document.getElementById('bodyID');
const toggleMenu = document.getElementById('toggleMenu');
const navID = document.getElementById('navID');
const headerID = document.getElementById('headerID');
const sectionID = document.getElementById('sectionID');
const mainID = document.getElementById('mainID');
const asideID = document.getElementById('asideID');
const articleID = document.getElementById('articleID');
const footerID = document.getElementById('footerID');

// DEFINIR ID's ---

// NAV LOAD ANIMATION

$(function(){
    setTimeout(function(){
        $("#navID").addClass("navigationIDAnimation");
    }, 350);
});

// NAV LOAD ANIMATION ---

// HEADER LOAD ANIMATION

$(function(){
    setTimeout(function(){
        $("#headerID").addClass("headerIDAnimation");
    }, 500);
});

// HEADER LOAD ANIMATION ---

// ONSCROLL NAV ANIMATION  

function scrollValue() {
    var scroll = window.scrollY;
    if (scroll < 70) {
        navID.classList.remove('navSroll');
    } else {
        navID.classList.add('navSroll');
    }
}

window.addEventListener('scroll', scrollValue);

// ONSCROLL NAV ANIMATION  ---

// MENU TOGGLE

$(function() {
    $("#burgerMenu").click(function(e) {
        $("#toggleMenu").toggleClass("toggleMenuActive");
        $("#bodyID").toggleClass("bodyToggle");
        $("#navID").toggleClass("navIDtoggleMenuActive");
        $("#progress").toggleClass("progressDeactivate");
    });

    function removeToggleClass() {
        $("#toggleMenu").removeClass("toggleMenuActive");
        $("#bodyID").removeClass("bodyToggle");
        $("#progress").removeClass("progressDeactivate");
        $("#navID").toggleClass("navIDtoggleMenuActive");
    }

    $("#headerIDCloseA, #sectionIDCloseA, #mainIDCloseA, #asideIDCloseA, #articleIDCloseA, #footerIDCloseA").click(function(e) {
        removeToggleClass();
    });
});

// MENU TOGGLE ---

// PROGRESS BAR

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.height = scrollPercentage + '%';
});

// PROGRESS BAR ---

// VIEWPORT FUNCTION

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// VIEWPORT FUNCTION ---

// VIEWPORT ANIMATIONS 1

function toggleAnimationN1() {
    var targetSection = document.getElementById("sectionTextLock");
    var targetSection2 = document.getElementById("sectionTextLockAppend");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN1');
        targetSection2.classList.add('animationN1');
    } 
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

toggleAnimationN1();

// VIEWPORT ANIMATIONS 1 ---

// RESET VIEWPORT ANIMATIONS

const sectionTextLock = document.getElementById('sectionTextLock');
const sectionTextLock2 = document.getElementById('sectionTextLockAppend');


function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        sectionTextLock.classList.remove('animationN1');
        sectionTextLock2.classList.remove('animationN1');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---


// COUNTERS

$(document).ready(function() {
    function animarContadorDecimal(contador, numeroInicio, numeroMeta, duracion) {
        var diferencia = numeroMeta - numeroInicio;
        var incremento = diferencia / (duracion / 1000 * 30); 

        var interval = setInterval(function() {
            numeroInicio += incremento;
            if (numeroInicio >= numeroMeta) {
                numeroInicio = numeroMeta;
                clearInterval(interval);
            }
            $(contador).text(numeroInicio.toFixed(1));
        }, 33); 
    }

    function animarContadorEntero(contador, numeroInicio, numeroMeta, duracion) {
        $({ count: parseInt($(contador).text()) }).animate({ count: numeroMeta }, {
            duration: duracion,
            easing: 'linear',
            step: function() {
                $(contador).text(Math.ceil(this.count));
            },
            complete: function() {
                $(contador).text(numeroMeta);
            }
        });
    }

    function iniciarAnimacion() {
        animarContadorDecimal("#counterTwo", 1.1, 3.5, 3000);

        animarContadorEntero("#counterOne", 1, 7, 3000);
        animarContadorEntero("#counterThree", 1, 61, 3000);
    }

    // Llama a la función para iniciar la animación cuando el documento esté listo
    iniciarAnimacion();
});

// COUNTERS ---