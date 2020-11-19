var layerGroup;
var x = document.getElementById("demo");
window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;


  var apikey = 'dd23949b2baa4598a19d75070f1be9ae';
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var api_url = 'https://api.opencagedata.com/geocode/v1/json'

  var request_url = api_url
    + '?'
    + 'key=' + apikey
    + '&q=' + encodeURIComponent(latitude + ',' + longitude)
    + '&pretty=1'
   
  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    
    if (request.status == 200){ 
      
      var data = JSON.parse(request.responseText);
      //console.log(data);
 
     // alert(data.results[0].formatted);
       const countryname = data.results[0].components.country;
//alert(countryname);
$.ajax({
  url: "lib/php/get.php",
  type: 'POST',
  dataType: 'json',
  data: {
    countryCode: countryname,
    
  },
  success: function(result) {

    //console.log(result);
  
      if (result.status.name == "ok") {
        
        if (map.hasLayer(border)) {

          map.removeLayer(border);

      }



      border = L.geoJson(result.data,{

          color: '#ff7800',

          weight: 2,

          opacity: 0.65

      }).addTo(map);         

     map.fitBounds(border.getBounds());

     $.ajax({
      url: "lib/php/country.php",
      type: 'POST',
      dataType: 'json',
      data: 
      $('#data').val(countryname),
      success: function(result2) {
       
      //  console.log(result2);
    
          if (result2.status.name == "ok") {
          }
        }
      })
         

     $("#myModal").modal("show");
  $.ajax({
    url: "lib/php/country.php",
    type: 'POST',
    dataType: 'json',
    data: {
    
    country: countryname,},
    success: function(result2) {
     
    //  console.log(result2);
  
        if (result2.status.name == "ok") {
        
          $('#name').html("<h3><strong>  </strong> "+result2['data'][0]['name']+"</h3>");
          $('#capital').html("<h4><b>Capital: </b>"+result2['data'][0]['capital']+"</h4>");
          $('#region').html("<h4><b> Region :</b> "+result2['data'][0]['region']+"</h4>");
          $('#population').html("<h4><b> Population :</b> "+result2['data'][0]['population']+"</h4>");
          $('#languages').html("<h4><b> Language :</b> "+result2['data'][0]['languages'][0]['name']+"</h4>");
          $('#currencies').html("<h4><b> Currency :</b> "+result2['data'][0]['currencies'][0]['name']+"</h4>");
     
          document.querySelector('#country_flag img').src = result2.data[0].flag;
           const currency = result2['data'][0]['currencies'][0]['code'];

const country =result2['data'][0]['name'];
var name = currency;
//console.log(name);
$.ajax({
	

  type: 'POST',
 dataType: 'json',

 data: {
 name: name,
 },
 url: 'lib/php/ex.php',

 success: function(result2) {
//console.log(result2);

var cor = result2.data.rates;
//console.log(cor);



cor['key'] = name;
if('key' in cor) {      // true
//console.log(cor.key);   // >> value
var god =cor.key;
//console.log(god);
var val = cor [god]; 
//console.log(val);

$('#rate').html("<h4><b>Currency Exchange Rate :</b> "+val+" </h4>");
     
}
}

});

// get the most recent exchange rates via the "latest" endpoint:
   }
      }
    })
  //  $("#myModal1").modal("show");

   
    }
  }

    })

  } else if (request.status <= 500){ 
    
                           
    console.log("unable to geocode! Response code: " + request.status);
    var data = JSON.parse(request.responseText);
    console.log(data.status.message);
  } else {
    console.log("server error");
  }
};

request.onerror = function() {

  console.log("unable to connect to server");        
};

request.send();  
}               

