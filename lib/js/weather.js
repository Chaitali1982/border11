



$('#weather').click(function()  {
 
	$.ajax({
		url: "lib/php/getweather.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#data').val(),
			
		},
		success: function(result) {

			//console.log(result);
	

			if (result.status.name == "ok" ) {
				
				
				
				$('#temprature').html("<h4> <b>Temprature: </b>"+result['data']['main']['temp']+" &deg;C </h4>");
				$('#min').html("<h4><b>Min-Temp:</b> "+result['data']['main']['temp_min']+" &deg;C</h4>");
				$('#max').html("<h4><b> Max-temp: </b>"+result['data']['main']['temp_max']+"&deg;C </h4>");
				$('#humidity').html("<h4><b> Humidity:</b> "+result['data']['main']['humidity']+"% </h4>");
				$('#wind').html("<h4><b> Wind Speed: </b>"+result['data']['wind']['speed']+"m/s </h4>");
				$("#weather1").html("<h4><b> Weather Description:</b><img src='https://openweathermap.org/img/wn/"+result['data']['weather'][0]['icon']+".png'></h4>");
				 
			
				
			
				   
			//$("#weather").html("<h4><b> Weather Description:</b><img src='https://openweathermap.org/img/wn/"+result['data']['weather'][0]['icon']+".png'>"+result['data']['weather'][0]['description']+"</h3>");
				 
			
				

			}
	
	 },
	
	 
 }); 


})


$('#weather').click(function() {

	$.ajax({
		url: "lib/php/country.php",
		type: 'POST',
		dataType: 'json',
		data: {
			country: $('#data').val(),
			
		},
		success: function(result2) {

			//console.log(result2);
		
				if (result2.status.name == "ok") {
					
					document.querySelector('#countr_flag img').src = result2.data[0].flag;
					$('#name5').html("<h3><strong>"+result2['data'][0]['name']+"<strong></h3>");
				}
			}
		})
	})