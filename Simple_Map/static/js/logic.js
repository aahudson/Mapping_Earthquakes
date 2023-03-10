// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// assigning the variable map to the object L.map(), instantiate the object with the given string 'mapid'.
// mapid  references the id tag in our <div> element on the index.html file
// setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7) 
// and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// lternative to using the setView() method
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

// We create the tile layer that will be the background of our map.
// code is altered from Leaflet Quick Start Guide titleLayer()
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

