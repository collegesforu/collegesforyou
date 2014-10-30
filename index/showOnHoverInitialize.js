			jQuery(function(){
				var log = jQuery('.log');
				jQuery('.showOnHover').showOnHover({
					fx: 'rt',
					durationIn: 600,
					durationOut: 1200,
					easingIn: 'swing',
					easingOut: 'swing',
					enter: function(){log.html('Animation In started ...');}, 
					complete: function(){log.html('Animation In completed.');},
					out: function(){log.html('Animation Out started ...');},
					end: function(){log.html('Animation Out completed.');} 
				});
			});