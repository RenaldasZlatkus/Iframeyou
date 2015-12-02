$(document).ready(function() {
	$('#frames-and-layout a').click(function() {
		value = $(this).data('field-value');
		number = $(this).data('field-number');
		$('#setting_style').val(value);
		$('#setting_frames').val(number);

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
	})

	$(".menubox").click(function() {
		$(".settings").hide();
		$(".menu").show();
	})

	$(document).ready(function() {
		$(".settings").hide();
	})
});