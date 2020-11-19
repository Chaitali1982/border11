
<!doctype html>
<html lang="en">
		<head>
		  <title></title>
		  <meta charset="utf-8">
		  <meta name="viewport" content="width=device-width, initial-scale=1">
      
		    <!-- Load my style -->
        <link rel="stylesheet" href="lib/css/style.css">
        <!-- Load favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="lib/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="lib/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="lib/favicon/favicon-16x16.png">
        <link rel="manifest" href="lib/favicon/site.webmanifest">
        <link rel="shortcut icon" href="lib/favicon/favicon.ico">
      <!-- Load Bootstrap -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
		  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Load Leaflet from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
    
   <script src="https://kit.fontawesome.com//22c417b056.js" crossorigin="anonymous"></script>
</head>

<body>


<div class ="heading"><h4>GAZETTEER</h4></div>


<div class="navbar">

<a href="#"><div class="select"><select  id="data"> <option selected>SELECT COUNTRY ONLY</option></select></div></a>

<a href="#"><i class="fa fa-bars fa" style="color:blue" data-toggle="modal" id="submit" data-target="#myModal3"></i></a>
<a href="#"><i class="fas fa-minus-circle fa-1.5x "  id="remove"style="color:red"></i></a>
<a href="#"><i class="fa fa-home fa-1.5xx " style="color:green" data-toggle="modal" id="submit1" data-target="#myModal1"></i></a>
<a href="#"> <i class="fas fa-fighter-jet fa-1.5x "  id="airport" style="color:black"></i></a>

<a href="#"><i class="fas fa-cloud-sun-rain fa-1.5x" style="color:blue" data-toggle="modal" id="weather" data-target="#wea"></i></a>
</div>

<div  id="map"  ></div>
<div id="demo"></div>




  
  

  <div id ="myModal"  class="modal">
		  <div class="modal-dialog"  style="width:350px;">
		  <div class="modal-content" id="row2">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="name"></p>  </h4>
         <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>
        </div>
			  <div class="modal-body">
      
      <table>
<tr>	<td id="country_flag">	<img src="" alt=""    style="width:300px;height:150px;" ></td></tr>
</table>  

<div class ="re" >
  <table>
	<tr><td id="capital"></td></tr>								 
  <tr><td id="region"></td></tr>						  
  <tr><td id="population"></td></tr>								
  <tr><td id="currencies"></td></tr>
  <tr><td id="languages"></td></tr>	
  <tr><td id="rate"></td></tr>		
	</table>	
</div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div> 	



<div id ="myModal1"  class="modal">
		  <div class="modal-dialog"  style="width:350px;">
		  <div class="modal-content" id="row3">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="name2"></p>  </h4>
         <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>
        </div>
			  <div class="modal-body">
     
      <table>
<tr>	<td id="country_flag1">	<img src="" alt=""    style="width:300px;height:150px;" ></td></tr>
</table>   

<div class ="re" >
     <table>
	<tr><td id="capital1"></td></tr>								 
  <tr><td id="region1"></td></tr>						  
  <tr><td id="population1"></td></tr>								
  <tr><td id="currencies1"></td></tr>
  <tr><td id="languages1"></td></tr>	
   <tr><td id="rate1"></td></tr>	
 
          </table>	
</div>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div> 	



<div id ="myModal3"  class="modal">
		  <div class="modal-dialog"  style="width:350px;">
		  <div class="modal-content" id="row3">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="name3"></p>  </h4>
         <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>
        </div>
			  <div class="modal-body">
       
      <table>
<tr>	<td id="country_flag3">	<img src="" alt=""    style="width:300px;height:150px;" ></td></tr>
</table>   

<div class ="re" >
     <table>
	<tr><td id="capital3"></td></tr>								 
  <tr><td id="region3"></td></tr>						  
  <tr><td id="population3"></td></tr>								
  <tr><td id="currencies3"></td></tr>
  <tr><td id="languages3"></td></tr>	
  <tr><td id="rate3"></td></tr>		
		</table>	
</div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div> 

  
<div id ="wea"  class="modal">
		  <div class="modal-dialog"  style="width:350px;">
		  <div class="modal-content" id="row4">
			  <div class="modal-header">
        <h4 class='modal-title w-100 text-center'><p id="name5"></p>  </h4>
         <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
        </button>
        </div>
			  <div class="modal-body">
       
         <table>
<tr>	<td id="countr_flag">	<img src="" alt=""    style="width:300px;height:150px;" ></td></tr>
</table> 

<div class ="re" >
     <table>
  <tr><td id="weather1"></td></tr>	
<tr><td id="temprature"></td></tr>								  
<tr><td id="min"></td>	</tr>							 
						  
<tr><td id="humidity"></td>	</tr>							 
<tr><td id="wind"></td>	</tr>							
		
<tr><td id="border"></td></tr>	
	</table>	
</div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div> 	
<script src="lib/js/select.js"></script>
<script src="lib/js/border.js"></script>
<script src="lib/js/mark.js"></script>
<script src="lib/js/location.js"></script>
<script src="lib/js/location1.js"></script>
<script src="lib/js/userboundary.js"></script>

<script src="lib/js/weather.js"></script>
<script src="lib/js/country11.js"></script>
<script src="lib/js/country1.js"></script>
<script src="lib/js/mark1.js"></script>

<script src="lib/js/map.js"></script>

</body>
</html>

 
  


