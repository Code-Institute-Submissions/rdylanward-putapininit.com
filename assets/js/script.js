/**********************************************************************/
/***                     Initialise Parameters                      ***/
/**********************************-***********************************/


window.onscroll = function() {stickyNavbar()};

let navbar = document.getElementById("navbar");
let navbarMobile = document.getElementById("navbar-mobile");
let sticky = navbar.offsetHeight;

let modalEmailSubmit = document.getElementById("modal-email-submit");
let modalEmailContainer = document.getElementById("modal-email-container");
let modalEmailBox = document.getElementById("modal-email-box");
let modalEmailBtn = document.getElementById("modal-email-btn");

const btn = document.querySelector(".btn");
let ripple;


/**********************************************************************/
/***                         STICKY NAVBAR                          ***/
/**********************************-***********************************/


/* The following Javascript was originally written by W3Schools (https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)
   and repurposed to aid in the function of the sticky menu */
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-navbar");
        navbarMobile.classList.add("sticky-navbar-mobile");
    } else {
        navbar.classList.remove("sticky-navbar");
        navbarMobile.classList.remove("sticky-navbar-mobile");
    }
}


/**********************************************************************/
/***                          MOBILE MENU                           ***/
/**********************************-***********************************/


/* This function was originally written by W3Schools (https://www.w3schools.com/howto/howto_js_mobile_navbar.asp) and
   repurposed to aid in the function of the mobile menu */
function mobileMenu() {
    if (navbarMobile.style.display === "none") {
        navbarMobile.style.display = "grid";
    } else {
        navbarMobile.style.display = "none";
    }
}


/**********************************************************************/
/***                        EMAIL MODAL BOX                         ***/
/**********************************-***********************************/


/* The following Javascript was originally written by W3Schools (https://www.w3schools.com/howto/howto_css_modals.asp)
   and repurposed to aid in the function of the email modal box. When the user clicks on the button, it opens the modal */
modalEmailSubmit.onclick = function() {
    modalEmailContainer.style.display = "grid";
    modalEmailBox.style.display = "grid";
}

/* When the user clicks on 'Close' in the modal */
modalEmailBtn.onclick = function() {
    modalEmailContainer.style.display = "none";
    modalEmailBox.style.display = "none";
}


/**********************************************************************/
/***                         RIPPLE EFFECT                          ***/
/**********************************-***********************************/

btn.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple.document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
})

btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
})
