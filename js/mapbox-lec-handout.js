"use strict";
/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected
// "finished the above to do!"
/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO: Set map to the San Antonio area using the coordinates [-98.4861, 29.4252]
var mapBoxToken = "pk.eyJ1IjoidmljdG9yZi1oZXJuYW5kZXoiLCJhIjoiY2tuYWpybmNwMGd3cDJ2bzBzNHpxdmoyMyJ9.mV4yGvRP0UwWsvRIoZtlJQ"

mapboxgl.accessToken = mapBoxToken

var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4861, 29.4252], // starting position [lng, lat]
    zoom: 8 // starting zoom
});

//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the MapBox docs! (10 mins~)

// mapbox syntax = new mapboxgl.Map(options);


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4861, 29.4260]. This marker will mark the Alamo on our map.

// var market = new mapboxgl.Marker()
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);

// TODO TOGETHER: Change the color of the marker

var marker = new mapboxgl.Marker({color: "rebeccapurple"})
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

// TODO: Make a new marker! Let's experiment with the color and setting the LngLat [how about a marker for Codeup San Antone? -98.4895, 29.4267 Codeup Dallas? -96.8056, 32.7786]

var Hometown = new mapboxgl.Marker({color: "green"})
    .setLngLat([-66.6464, 18.4442])
    .addTo(map);



var DallasCampus = new mapboxgl.Marker({color: "red"})
    .setLngLat([-96.8056, 32.7786])
    .addTo(map);

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!

var sanAntonioCampus = new mapboxgl.Marker({color: "orange", draggable: true})
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);



/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over San Antonio's Codeup. Set the html as a paragraph that says "Codeup Rocks!"

// var marcoPopup= new mapboxgl.Popup()
//     .setHTML("<h6>Codeup Rocks!</h6>")
//     .setLngLat([-98.4861, 29.4260])
//     .addTo(map);
//
// sanAntonioCampus.setPopup(marcoPopup)

// TODO TOGETHER: We'll comment out the popup we just added. Next, let's add a popup to the Alamo marker!

// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember the Alamo</p>")
//     .addTo(map)
//
// sanAntonioCampus.setPopup(alamoPopup)

// TODO: Review the popup docs. What are some additional options we can pass to the popup? Choose one and experiment with implementing that option to a popup!


// TODO: Try setting the text of a popup by using ".setText()" instead of ".setHTML()" - what happens with HTML tags between the two?
//
// var alamoPopup = new mapboxgl.Popup()
//     .setText("<p>Remember the Alamo</p>")
//     .addTo(map)
//
// sanAntonioCampus.setPopup(alamoPopup)


/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding
// TODO TOGETHER: Let's set up our mapbox-geocoder-utils.js!

//we set up: a mapbox-goecoder-utils.js, hooked it up to our html

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup.
//https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setcenter

geocode("8646 Sunny Oaks, San Antonio, TX", mapBoxToken).then(function(results){
    console.log(results);
    map.setCenter(results);
})

//TODO: Using the geocode method above, add a marker at Codeup to the map

// geocode("600 Navarro St #600,San Antonio, TX 78205", mapBoxToken).then(function(results){
//     var popup = new mapboxgl.Popup()
//         .setHTML("<h6>Thanks Geocode</h6>")
//
//     new mapboxgl.Market()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
// });

//TODO: Instead of setCenter try using map.jumpTo()

// geocode("600 Navarro St #600,San Antonio, TX 78205", mapBoxToken).then(function(results){
//     var popup = new mapboxgl.Popup()
//         .setHTML("<h6>Thanks Geocode</h6>")
//
//     new mapboxgl.Market()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
// });
//
// map.jumpTo({center: results});

//TODO: Instead of setCenter try using map.flyTo()

// geocode("600 Navarro St #600,San Antonio, TX 78205", mapBoxToken).then(function(results){
//     var popup = new mapboxgl.Popup()
//         .setHTML("<h6>Thanks Geocode</h6>")
//
//     new mapboxgl.Market()
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
// });
//
// map.flyTo({center: results});

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the Alamo

reverseGeocode({lat: 29.4260, lng: -98.4861}, map).then(function (results){
    console.log(results);
})

// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


