var currentTime = new Date();
var dayOfWeek = currentTime.getDay();
var month = currentTime.getMonth();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();

var isOpen = function(){
	if(dayOfWeek == 6){
		return ture;
	}else if(dayOfWeek == 0){
		return true;
	}else if(dayOfWeek == 5 && hours >= 17){
		return true;
	}else{
		false;
	}
	
};
var open = isOpen();

$( "#open" ).toggle( open );
$( "#closed" ).toggle( !open );