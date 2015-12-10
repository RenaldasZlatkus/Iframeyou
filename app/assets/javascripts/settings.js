$(document).ready(function() {

	$(".settings").hide();
	$("#web2").hide();
	$("#web3").hide();
	$("#web4").hide();
	$('#frames-and-layout a').click(function() {
		value = $(this).data('field-value');
		number = $(this).data('field-number');
		$('#setting_style').val(value);
		$('#setting_frames').val(number);
	});

	$('#frames-and-layout img').click(function() {
	     	$('.selectedStyle').removeClass('selectedStyle');
	      	$(this).addClass('icon, selectedStyle');
	});

	$('#skin img').click(function() {
	     	$('.selectedSkin').removeClass('selectedSkin');
	      	$(this).addClass('selectedSkin');
	});

	$('#background img').click(function() {
	     	$('.selectedBg').removeClass('selectedBg');
	      	$(this).addClass('selectedBg');
	});

	$('#skin a').click(function() {
		value = $(this).data('field-value');
		$('#setting_skin').val(value);
	});

	$('#background a').click(function() {
		value = $(this).data('field-value');
		$('#setting_background').val(value);
	});

	$(".menu").click(function() {
		$(".settings").show();
		$(".menu").hide();
	});

	$(".menubox").click(function() {
		$(".settings").hide();
		$(".menu").show();
		$("#showtooltip").hide();
	});

	$(".one").click(function() {
		$("#web2").hide();
		$("#web3").hide();
		$("#web4").hide();
	});

	$(".two").click(function() {
		$("#web2").show();
		$("#web3").hide();
		$("#web4").hide();
	});

	$(".three").click(function() {
		$("#web2").show();
		$("#web3").show();
		$("#web4").hide();
	});

	$(".four").click(function() {
		$("#web2").show();
		$("#web3").show();
		$("#web4").show();
	});

	$("#flash" ).fadeOut(7000);

// Styles 1, 3h, 2v
	$("#fullscreen, .leftthree, .middlethree, .rightthree, .leftfull, .rightfull").height($(window).innerHeight());

	$(window).resize(function(){

		$("#fullscreen, .leftthree, .middlethree, .rightthree, .leftfull, .rightfull").height($(window).innerHeight())
	});
// Style 1
	$("#fullscreen").width($(window).innerWidth()*.99);

	$(window).resize(function(){


		$("#fullscreen").width($(window).innerWidth()*.99)
	});
// Styles 3t, 3b, 2h
	$(".full").width($(window).innerWidth()*.9795);

	$(window).resize(function(){


		$(".full").width($(window).innerWidth()*.9795)
	});
// Styles 2h, 3t, 3b, 4a, 4t, 4b

	$(".full, .left, .right, .halfleftthree, .halfmiddlethree, .halfrightthree").height($(window).innerHeight()/2);

	$(window).resize(function(){


		$(".full, .left, .right, .halfleftthree, .halfmiddlethree, .halfrightthree").height($(window).innerHeight()/2)
	});
// Styles 2v, 4a, 3t, 3b
	$(".leftfull, .rightfull, .left, .right").width($(window).innerWidth()*.485);

	$(window).resize(function(){


		$(".leftfull, .rightfull, .left, .right").width($(window).innerWidth()*.485);
	});

// Style 3h, 4t, 4b
	$(".leftthree, .middlethree, .rightthree, .halfleftthree, .halfmiddlethree, .halfrightthree").width($(window).innerWidth()*.325);

	$(window).resize(function(){


		$(".leftthree, .middlethree, .rightthree, .halfleftthree, .halfmiddlethree, .halfrightthree").width($(window).innerWidth()*.485)
	});

});


// $(window).resize(function(){ console.log($(window).innerHeight()) })



// 	$(window).resize(function(){
// 	$("#fullscreen").height($(window).innerHeight())

// 	});


	// function mouseHandler(e){
	//   // Add Picked Class
	//     if ($('.icon').hasClass('selected')) {
	//       	$('.icon').removeClass('selected');
	//     } else {
	//      	// $('.selected').removeClass('selected');
	//       	$('.icon').addClass('selected');
	//     } 
	// }
	 
	//   function start(){
	//     // Bind all li
	//     $('#frames-and-layout icon').click(mouseHandler);
	//  };

	// $('.selector').click(function(){
	//     $(this).parent().find('.selector').css('background-color','#ffffff');
	//     $(this).css('background-color','#ff0000');

	// $('.icon').click(function() {
 //    	// $(this).parent().find('.icon').addClass('selected');
 //    	$(this).addClass('selected');
 //    	$(this).next('.icon').removeClass('selected');
 //    });

	// $('#frames-and-layout a').click(function() {
	// 	$(this).next('.icon').show();
	// 	$('.icon').hide();
	// });

	// $('#frames-and-layout').click(function() {
	// 	$('.icon').css("width": "20px", "border": "2px solid black", "box-shadow": "0px 1px 3px #666666");
	// 	$(this).next('.icon').css("width": "20px", "border": "1px solid black", "box-shadow": "0px 1px 3px #666666");
	// });

