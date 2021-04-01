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


/**********************************************************************/
/***                              MAP                               ***/
/**********************************-***********************************/

/* The following Javascript was originally written for and provided by the
   Google Maps Platform Maps JavaScript API Guide and repurposed to aid in
   the function and design of the map */
let newMap;

function initMap() {
     /* Create the new map inside the 'map-window' div element */
    newMap = new google.maps.Map(document.getElementById("map-window"), {
        /* Define the center of the map */
        center: { lat: 52.27775, lng: -7.06749 },

        /* Set the initial zoom level of the map */
        zoom: 5,

        /* Set the map type */
        mapTypeId: 'hybrid',

        mapID: '829a7370d84c8575'
    });

    /* Set a tilt angle of the map when zoomed in using browsers that support the feature */
    newMap.setTilt(45);
}

/* Call the map */
initMap();
