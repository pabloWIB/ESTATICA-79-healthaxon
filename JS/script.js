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
    });

    // Function to remove class "pene" from #navID
    function removeToggleClass() {
        $("#toggleMenu").removeClass("toggleMenuActive");
        $("#bodyID").removeClass("bodyToggle");
        $("#navID").removeClass("navIDtoggleMenuActive");
        alert("Hola");
    }

    // Click handlers to call the function
    $("#headerIDCloseA, #sectionIDCloseA, #mainIDCloseA, #asideIDCloseA, #articleIDCloseA, #footerIDCloseA").click(function(e) {
        removeToggleClass();
    });
});

// MENU TOGGLE ---