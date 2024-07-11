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

// VIEWPORT ANIMATIONS 2

function toggleAnimationN2() {
    var targetSection = document.getElementById("sectionTextLock3");
    if (isElementInViewport(targetSection)) {
        targetSection.classList.add('animationN2');
    } 
}

window.addEventListener("scroll", toggleAnimationN2);
window.addEventListener("resize", toggleAnimationN2);

toggleAnimationN2();

// VIEWPORT ANIMATIONS 2 ---

// VIEWPORT ANIMATIONS 3 4 5 ---

// COUNTERS

$(document).ready(function() {
    var counterOneAnimated = false;
    var counterTwoAnimated = false;
    var counterThreeAnimated = false;

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

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleAnimationN3() {
        var targetSection = document.getElementById("sectionLock4");
        if (isElementInViewport(targetSection) && !counterOneAnimated) {
            targetSection.classList.add('animationN3');
            setTimeout(function() {
                animarContadorEntero("#counterOne", 0, 7, 3000);
            }, 300); 
            counterOneAnimated = true;
        }
    }

    function toggleAnimationN4() {
        var targetSection = document.getElementById("sectionLock5");
        if (isElementInViewport(targetSection) && !counterTwoAnimated) {
            targetSection.classList.add('animationN3');
            setTimeout(function() {
                animarContadorDecimal("#counterTwo", 1.1, 3.5, 3000);
            }, 300); 
            counterTwoAnimated = true;
        }
    }

    function toggleAnimationN5() {
        var targetSection = document.getElementById("sectionLock6");
        if (isElementInViewport(targetSection) && !counterThreeAnimated) {
            targetSection.classList.add('animationN3');
            setTimeout(function() {
                animarContadorEntero("#counterThree", 0, 61, 3000);
            }, 300); 
            counterThreeAnimated = true;
        }
    }

    window.addEventListener("scroll", toggleAnimationN3);
    window.addEventListener("resize", toggleAnimationN3);
    window.addEventListener("scroll", toggleAnimationN4);
    window.addEventListener("resize", toggleAnimationN4);
    window.addEventListener("scroll", toggleAnimationN5);
    window.addEventListener("resize", toggleAnimationN5);

    toggleAnimationN3();
    toggleAnimationN4();
    toggleAnimationN5();
});

// VIEWPORT ANIMATIONS 3 4 5 ---

// COUNTERS ---

// VIEWPORT ANIMATIONS 6

function toggleAnimationN6() {
    var targetSection = document.getElementById("people1Look");
    var people1 = document.getElementById('people1');
    if (isElementInViewport(targetSection)) {
        people1.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN6);
window.addEventListener("resize", toggleAnimationN6);

toggleAnimationN6();

// VIEWPORT ANIMATIONS 6 ---

// VIEWPORT ANIMATIONS 7

function toggleAnimationN7() {
    var targetSection = document.getElementById("people2Look");
    var people2 = document.getElementById('people2');
    if (isElementInViewport(targetSection)) {
        people2.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN7);
window.addEventListener("resize", toggleAnimationN7);

toggleAnimationN7();

// VIEWPORT ANIMATIONS 7 ---

// VIEWPORT ANIMATIONS 8

function toggleAnimationN8() {
    var targetSection = document.getElementById("people3Look");
    var people3 = document.getElementById('people3');
    if (isElementInViewport(targetSection)) {
        people3.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN8);
window.addEventListener("resize", toggleAnimationN8);

toggleAnimationN8();

// VIEWPORT ANIMATIONS 8 ---

// VIEWPORT ANIMATIONS 9

function toggleAnimationN9() {
    var targetSection = document.getElementById("people4Look");
    var people4 = document.getElementById('people4');
    if (isElementInViewport(targetSection)) {
        people4.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN9);
window.addEventListener("resize", toggleAnimationN9);

toggleAnimationN9();

// VIEWPORT ANIMATIONS 9 ---

// VIEWPORT ANIMATIONS 10

function toggleAnimationN10() {
    var targetSection = document.getElementById("people5Look");
    var people5 = document.getElementById('people5');
    if (isElementInViewport(targetSection)) {
        people5.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN10);
window.addEventListener("resize", toggleAnimationN10);

toggleAnimationN10();

// VIEWPORT ANIMATIONS 10 ---

// VIEWPORT ANIMATIONS 11

function toggleAnimationN11() {
    var targetSection = document.getElementById("people6Look");
    var people6 = document.getElementById('people6');
    if (isElementInViewport(targetSection)) {
        people6.classList.add('animationPeople');
    } 
}

window.addEventListener("scroll", toggleAnimationN11);
window.addEventListener("resize", toggleAnimationN11);

toggleAnimationN11();

// VIEWPORT ANIMATIONS 11 ---

// VIEWPORT ANIMATIONS 12

function toggleAnimationN12() {
    var targetSection = document.getElementById("asideTxtLock");
    var asideTxtAnim = document.getElementById('asideTxtAnim');
    if (isElementInViewport(targetSection)) {
        asideTxtAnim.classList.add('asideTxtAnim');
    } 
}

window.addEventListener("scroll", toggleAnimationN12);
window.addEventListener("resize", toggleAnimationN12);

toggleAnimationN12();

// VIEWPORT ANIMATIONS 12 ---

// VIEWPORT ANIMATIONS 13

function toggleAnimationN13() {
    var targetSection = document.getElementById("asideTxtLock2");
    var asideTxtAnim2 = document.getElementById('asideTxtAnim2');
    if (isElementInViewport(targetSection)) {
        asideTxtAnim2.classList.add('articleTxtAnim');
    } 
}

window.addEventListener("scroll", toggleAnimationN13);
window.addEventListener("resize", toggleAnimationN13);

toggleAnimationN13();

// VIEWPORT ANIMATIONS 13 ---

// RESET VIEWPORT ANIMATIONS

const sectionTextLock = document.getElementById('sectionTextLock');
const sectionTextLock2 = document.getElementById('sectionTextLockAppend');
const sectionTextLock3 = document.getElementById('sectionTextLock3');
const people1 = document.getElementById('people1');
const people2 = document.getElementById('people2');
const people3 = document.getElementById('people3');
const people4 = document.getElementById('people4');
const people5 = document.getElementById('people5');
const people6 = document.getElementById('people6');
const asideTxtAnim = document.getElementById('asideTxtAnim');

function scrollValue3() {
    var scroll = window.scrollY;
    if (scroll < 10) {
        sectionTextLock.classList.remove('animationN1');
        sectionTextLock2.classList.remove('animationN1');
        sectionTextLock3.classList.remove('animationN2');
        people1.classList.remove('animationPeople');
        people2.classList.remove('animationPeople');
        people3.classList.remove('animationPeople');
        people4.classList.remove('animationPeople');
        people5.classList.remove('animationPeople');
        people6.classList.remove('animationPeople');
        asideTxtAnim.classList.remove('asideTxtAnim');
    } 
}

window.addEventListener('scroll', scrollValue3);

// RESET VIEWPORT ANIMATIONS ---

// GETTOP

const getTop = document.getElementById('getTop');

function scrollValue4() {
    var scroll = window.scrollY;
    if (scroll > 200) {
        getTop.classList.add('animatioGetTop');
    } else if (scroll < 100){
        getTop.classList.remove('animatioGetTop');
    }
}

window.addEventListener('scroll', scrollValue4);

// GETTOP ---

// TEST

