$(document).ready(function(){
	$('#triggermenu').click(function(e){
		e.preventDefault();
		$('#menu').slideToggle();
	})
});