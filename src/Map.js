// Import all the internal files
import config from '../src/config.js';



require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {


// Access ArcGIS Map Service URL
const featureServiceUrl = config.arcGIS.featureServiceUrl;
// Access other service URL
const customServiceUrl = config.otherServices.customServiceUrl;
// Use the URLs as needed in your code


// Add Map constructor here..
const map = new Map({
  basemap: "topo-vector"
});

// Add MapView constructor here
const view = new MapView({
  container: "viewDiv",
  map: map,
  zoom: 4,
  center: [-77.0369, 38.9072] // longitude, latitude
});


function loadToolbar(){

}
});