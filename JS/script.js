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