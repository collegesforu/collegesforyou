// filename: jquery.touchify.js
		
		// adaption of Ross Posterous mouse -> touch events
		// http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript
		// TODO: don't prevent default (AKA scroll) for direction opposite to that set to draggable (pass in condition to options, may have to save state in private vars...)
		(function ($) {
			
			$.fn.touchify = function() {
			
				var touchHandler = function (e) {
				
					var touches = e.changedTouches,
						first = touches[0],
						type = "",
						simulatedEvent,
						moved;
					
					switch (e.type) {
					
					case "touchstart":
					
						type = "mousedown";
						moved = false;
						
						break;
					
					case "touchmove":
					
						type = 'mousemove';
						moved = true;
						
						break;
						
					case 'touchend':
						
						type = 'mouseup';
						moved = false;
						
						break;
							
						default: return;
					}
					
					// initMouseEvent(type, canBubble, cancelable, view, clickCount, 
					//           screenX, screenY, clientX, clientY, ctrlKey, 
					//           altKey, shiftKey, metaKey, button, relatedTarget);
					
					simulatedEvent = document.createEvent('MouseEvent');
					simulatedEvent.initMouseEvent(type, true, true, window, 1, 
											  first.screenX, first.screenY, 
											  first.clientX, first.clientY, false, 
											  false, false, false, 0/*left*/, null);
					
					first.target.dispatchEvent(simulatedEvent);
					
					if (moved) { // ensure anchor links aren't prevented
						e.preventDefault();
					}
				};
			
				return this.each(function () {
				
					this.addEventListener("touchstart", touchHandler, true);
					this.addEventListener("touchmove", touchHandler, true);
					this.addEventListener("touchend", touchHandler, true);
					this.addEventListener("touchcancel", touchHandler, true);
								
				});
				
			};
			
		})(jQuery);
		