// Navbar: class Active and hr element
$(document).ready(function(){
	$("li > a").first().append('<hr class="hrNav">');

    $("a").on("click", switchActive());

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
    
	
    function switchActive() {
		$(".nav > li > a").click(function() {
			$(this).parent().addClass('active')
				.siblings().removeClass('active');

			$(".hrNav").remove();
			$(this).append('<hr class="hrNav">');
		});
	}

	//Form Validation
    $('#form').validate({
	    rules: {
	        name1: {
	            minlength: 2,
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
	            minlength: 2,
	            required: true
	        }
	    },
	    highlight: function (element) {
	        $(element).closest('.form-control').removeClass('success').addClass('error');
	    },
	    success: function (element) {
	        element.text('OK!').addClass('valid')
	            .closest('.form-control').removeClass('error').addClass('success');
	    }
	});



});
