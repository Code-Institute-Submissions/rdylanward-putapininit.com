/**********************************************************************/
/***                         RIPPLE EFFECT                          ***/
/**********************************-***********************************/

const btnOrange = document.getElementById('btn-orange');

let ripple;

btnOrange.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple.document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btnOrange.prepend(ripple);
})

btnOrange.addEventListener("mouseleave", () => {
    btnOrange.removeChild(ripple);
})


/**********************************************************************/
/***                          CURRENT DATE                          ***/
/**********************************-***********************************/

/* The following Javascript was originally written by W3Schools (https://www.w3schools.com/js/js_dates.asp)
   and repurposed to aid in the function of the date elements of the bookings form */
function obtainDate() {
    const formattedDate = date => date.toISOString().slice(0, 10);

    console.log(formattedDate(new Date()));
    /* return formattedDate(new Date()); */
}
