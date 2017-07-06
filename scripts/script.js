//Add and remove class Active
$(document).ready(function(){
    $("a").on("click", switchActive());

    function switchActive() {
	$(".nav > li > a").click(function() {
		    $(this).parent().addClass('active')
		    	.siblings().removeClass('active');
	    });
	}
});