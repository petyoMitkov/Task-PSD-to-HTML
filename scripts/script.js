$(document).ready(function(){
	$("li > a").first().append('<hr class="hrNav">');

    $("a").on("click", switchActive());

	// Navbar: class Active and hr element
    function switchActive() {
		$(".nav > li > a").click(function() {
			$(this).parent().addClass('active')
				.siblings().removeClass('active');

			$(".hrNav").remove();
			$(this).append('<hr class="hrNav">');
		});
	}

    //Change header img src when screen < 480px
    $(window).resize(changeSrc()); 
	$(window).bind( 'orientationchange', changeSrc);
	function changeSrc() {
		if (screen.width < 480) {
	    	$(".changeSrc").attr("src", "./images/background2.jpg");
	    } else {
	    	$(".changeSrc").attr("src", "./images/background.jpg ");
	    }
	}    

	//Form Validation
	jQuery.validator.addMethod("lettersonly", function(value, element) {
  		return this.optional(element) || /^[a-z]+$/i.test(value);
	}, "Letters only please");
	jQuery.validator.addMethod("noSpace", function(value, element) { 
		return value.indexOf(" ") < 0 && value != " "; 
	}, "Too many spaces please enter some text!");

	$("#message").keypress(function() {
		textValue = $.trim(this.value);
		if (textValue.length < 1) {
			$("#message").rules("add", {
				noSpace: true
			});
		} else {
			$("#message").rules("remove", "noSpace");
		}
	});

    $('#form').validate({
	    rules: {
	        name: {
	            minlength: 3,
	            maxlength: 100,
	            lettersonly: true,
	            required: true
	        },
	        email: {
	            required: true,
	            email: true
	        },
	        reason: {
	        	required: true
	        },
	        message: {
	            minlength: 10, 
				maxlength: 500,
	            required: true
	        }
	    },
	    highlight: function (element) {
	        $(element).closest('.form-control').removeClass('success').addClass('error');
	    },
	    success: function (element) {
	        element.prepend().text('OK!').addClass('valid')
	            .closest('.form-control').removeClass('error').addClass('success');
	    }
	});
});

