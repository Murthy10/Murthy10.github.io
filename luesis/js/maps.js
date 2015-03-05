       function init_map() {
		var var_location = new google.maps.LatLng(47.136336,9.334056,17);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 12
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Lüsis"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
		var_marker.setMap(var_map);	
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);