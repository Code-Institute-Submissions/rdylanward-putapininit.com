/**********************************************************************/
/***                              MAP                               ***/
/**********************************-***********************************/

/* The following Javascript was originally written for and provided by the
   Google Maps Platform Maps JavaScript API Guide and repurposed to aid in
   the function and design of the map */

function initAutocomplete() {
     /* Create the new map inside the 'map-window' div element */
    const newMap = new google.maps.Map(document.getElementById("map-window"), {
        /* Define the center of the map */
        center: { lat: 52.27775, lng: -7.06749 },

        /* Set the initial zoom level of the map */
        zoom: 5,

        /* Set the map type */
        mapTypeId: 'hybrid',

        /* Load the saved map ID */
        mapID: '829a7370d84c8575',

        /* Remove the map type controls */
        mapTypeControl: false,
    });

    /* Set a tilt angle of the map when zoomed in using browsers that support the feature */
    newMap.setTilt(45);

    /* Create the search box and link it to the UI element */
    const input = document.getElementById('autocomplete');
    const searchBox = new google.maps.places.SearchBox(input);
    newMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    /* Bias the SearchBox results towards current map's viewport */
    newMap.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    /* Listen for the event fired when the user selects a prediction and retrieve
       more details for that place */
    searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        /* Clear out the old markers */
        markers.forEach((marker) => {
            marker.setMap(null);
        });

        markers = [];

        /* For each place, get the icon, name and location */
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            /* Create a marker for each place */
            markers.push(
                new google.maps.Marker({
                    newMap,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                /* Only geocodes have viewport */
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        newMap.fitBounds(bounds);
    });
}

/* Call the map */
initAutocomplete();
