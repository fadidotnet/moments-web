$(document).ready(function () {
	console.log("I am here");

	$('.upload_photo').click(function(){
		$('#myModal').modal('show');
		$("#photo_form").show();
		$("#info_form").hide();
		$("#thank_you").hide();
		$("#photo_info").hide();
		$('#photo_form')[0].reset();
		$('#info_form')[0].reset();
	});
	$(document).on('click', '.browse', function(){
	  var file = $(this).parent().parent().parent().find('.file');
	  file.trigger('click');
	});
	$(document).on('change', '.file', function(){
	  $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
	});
});

$("#save_info").click(function(e){
	e.preventDefault();
	if ($("#info_form").valid()) {
		$("#info_form").hide();
		$("#thank_you").show();
	}
});
$('#info_form').validate({
        //errorElement: "span",
        errorClass: "help-block",
        highlight: function (element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
            //this line is only used to display error message on the same line for radio button or check boxes...
            $('#is_active-error').css({
                display: 'inline-block',
                fontWeight: 'bolder'
            });
        },
        rules: {
            email: {
            	email : true,
                required: true
            },
            first_name: {
                required: true
            },
            last_name: {
                required: true
            },
            phone: {
                required: true
            },
            country: {
                required: true
            },
        },
        messages: {
            
        }
    });