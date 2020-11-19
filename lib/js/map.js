var map = L.map('map').setView([51.505, -0.09], 13);

//var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
   // streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

//var map = L.map('map', {
   //center: [39.73, -104.99],
   //zoom: 10,
   // layers: [grayscale, dark]
//});
var grayscale = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'})
streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
   accessToken: 'pk.eyJ1IjoiY2hhaXRhbGkxIiwiYSI6ImNraG44YW53aDB1M2EzNHJ0NWd1M3hwdnUifQ.7mg-E6qD_o_OHA4fniIhsA'
}).addTo(map);

 worldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

var dark = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
	
	bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
	minZoom: 1,
	maxZoom: 8,
	format: 'jpg',
	time: '',
	tilematrixset: 'GoogleMapsCompatible_Level'
});
var baseMaps = {
  "Grayscale": grayscale,
  "Streets": streets,

  "WorldImagery": worldImagery,
 
};


var overlayMaps = {
  "Dark":dark,
}

L.control.layers(baseMaps , overlayMaps).addTo(map);
var x = document.getElementById("demo");
navigator.geolocation.getCurrentPosition(function(location) {
  var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
  const iconn = L.divIcon({
    className: 'custom-div-icon',
    html: '<i class="fas fa-street-view fa-3x" style="color:green" ></i>',

    className: 'myDivIcon'
  });
   var lat =location.coords.latitude;
   var lng =location.coords.longitude;
   var marker = L.marker([lat,lng],{
    icon: iconn
  }).addTo(map).bindPopup("YOU ARE HERE");
  });

