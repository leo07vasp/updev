$(function() {
	
jQuery('.carousel').cycle({
		fx:     'fade', 
        speed:  'slow', 
        timeout: 5000,
        pager:  '#nav-banner',
        fit: 1,
        width: "fit"
});



jQuery('.tab .links li').on("click", "a", function(){
	var select = jQuery(this).attr("href");
	jQuery(".tab .container > div:visible").slideUp("slow", function(){
			jQuery(".tab .container").find(select).slideDown("slow");
	});

	return false;
});


});