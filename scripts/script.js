// Navbar: class Active and hr element
$(document).ready(function(){
	$("li > a").first().append('<hr class="hrNav">');

    $("a").on("click", switchActive());

    function switchActive() {
		$(".nav > li > a").click(function() {
			$(this).parent().addClass('active')
				.siblings().removeClass('active');

			$(".hrNav").remove();
			$(this).append('<hr class="hrNav">');
		});
	}
});