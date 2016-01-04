$(document).ready(main);
 
var contador = 0;
 
function main () {
	$('#main-header').click(function(){
		if (contador == 0) {
			$('#main-nav').animate({
				top: '64px'
			});
			contador = 1;
		} else {
			contador = 0;
			$('#main-nav').animate({
				top: '-100%'
			});
		}
	});
}