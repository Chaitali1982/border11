
$('#submit1').click(function(){
var x = document.getElementById("demo");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
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
   

  // see full list of required and optional parameters:
  // https://opencagedata.com/api#forward

  var request = new XMLHttpRequest();
  request.open('GET', request_url, true);

  request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes

    if (request.status == 200){ 
      // Success!
      var data = JSON.parse(request.responseText);
      //console.log(data);
 

     
     
     
      const countryname = data.results[0].components.country;
  // alert(countryname);
      
//console.log(countryname);


  
 
     
     

      
      
      $.ajax({
        url: "lib/php/country.php",
        type: 'POST',
        dataType: 'json',
        data: {
          country:countryname,
          
        },
        success: function(result2) {
          $("#myModal1").modal("show");
        // console.log(result2);
      
            if (result2.status.name == "ok") {
            
              $('#name2').html("<h3><strong>  </strong> "+result2['data'][0]['name']+"</h3>");
              $('#capital1').html("<h4><b>Capital: </b>"+result2['data'][0]['capital']+"</h4>");
              $('#region1').html("<h4><b> Region :</b> "+result2['data'][0]['region']+"</h4>");
              $('#population1').html("<h4><b> Population :</b> "+result2['data'][0]['population']+"</h4>");
              $('#languages1').html("<h4><b> Language :</b> "+result2['data'][0]['languages'][0]['name']+"</h4>");
              $('#currencies1').html("<h4><b> Currency :</b> "+result2['data'][0]['currencies'][0]['name']+"</h4>");
              $('#la').html("<h4><b> Lat and lng :</b> "+result2['data'][0]['latlng']+"</h4>");
              document.querySelector('#country_flag1 img').src = result2.data[0].flag;
               const currency = result2['data'][0]['currencies'][0]['code'];
            //  console.log(currency);
              const country =result2['data'][0]['name'];
      
      
      
              var name = currency;
           //   console.log(name);
      
      // get the most recent exchange rates via the "latest" endpoint:
      $.ajax({
        
      
           type: 'POST',
          dataType: 'json',
      
          data: {
          name: name,
          },
          url: 'lib/php/ex.php',
      
          success: function(result2) {
     // console.log(result2);
      
      var cor = result2.data.rates;
     // console.log(cor);
      
      
      
      cor['key'] = name;
     if('key' in cor) {      // true
       // console.log(cor.key);   // >> value
      var god =cor.key;
     //  console.log(god);
       var val = cor [god]; 
     //  console.log(val);
      
       $('#rate1').html("<h4><b>Currency Exchange Rate :</b> "+val+" </h4>");
      }
      }
    })

        
            
}
            },
             
              }); 
              
      
              
            
} else if (request.status <= 500){ 
  // We reached our target server, but it returned an error
                       
  console.log("unable to geocode! Response code: " + request.status);
  var data = JSON.parse(request.responseText);
  console.log(data.status.message);
} else {
  console.log("server error");
}
};

request.onerror = function() {
// There was a connection error of some sort
console.log("unable to connect to server");        
};

request.send();  // make the request
}
 
})
              
    

    
    
    
    
    
    
    
    
    
    
    
    
    
       
    



























































































              
        
          