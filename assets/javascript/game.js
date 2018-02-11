
	var yourWins= 0;
 	var yourLosses= 0;
 	var addition=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	
 	var red = Math.floor((Math.random() * 12) + 1);
 	var white = Math.floor((Math.random() * 12) + 1);
 	var green = Math.floor((Math.random() * 12) + 1);
 	var blue = Math.floor((Math.random() * 12) + 1);



 	var updateAddition = function () {
 		$('.addition').empty();
 		$('.addition').append(addition);

 		$('#yourWins').empty();
 		$('#yourWins').append(yourWins);

 		$('#yourLosses').empty();
 		$('#yourLosses').append(yourLosses);
 	}


 // restart game
 		var restart = function (){
 			addition = 0;
 			total = Math.floor((Math.random() * 100) + 19);

 			$('.total').empty();
 			$('.total').append(total);

 			var red = Math.floor((Math.random() * 12) + 1);
 			var white = Math.floor((Math.random() * 12) + 1);
 			var green = Math.floor((Math.random() * 12) + 1);
 			var blue = Math.floor((Math.random() * 12) + 1);
 			updateAddition();
 		}	


 	var game = function (){
 		if (addition == total) {
 			yourWins = yourWins + 1;
 			alert("You win!");
 			restart();
 		} else if (addition > total) {
 			yourLosses = yourLosses + 1;
 			alert("You lost");
 			restart();
 		} else {
 			updateAddition();
 		}
 	}

 	$('.total').append(total);
 	$('.addition').append(addition);

 	$( document ).ready(function() {
 		$('#red').click(function(){
 			addition = addition + red;
 			game();
 		})

 		$('#white').click(function(){
 			addition = addition + white;
 			game();
 		})

 		$('#green').click(function(){
 			addition = addition + green;
 			game();
 		})

 		$('#blue').click(function(){
 			addition = addition + blue;
 			game();
 		})
 	});


