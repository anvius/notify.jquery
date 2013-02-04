/***
 *
 *  JQuery Notify v1.0
 * 	Message notify with jQuery easily.
 * 
 * 	(c) 2013, Antonio Villamarin <http://ant.onio.org>
 *
 * 	License: MIT <http://opensource.org/licenses/MIT>
 * 
 * 	Use:
 * 		<div id="anyIDtag">Information/Deal/Alert message</div>
 * 
 * 		[...]
 * 
 * 		<script>
 * 			$(document).ready(function(){
 * 				$('#anyIDtag').notify({ // Optional parameters. Default values.
 * 					active: true, // True: Show message, False: Show symbol to show message.
 * 					close: false, // True: User click on close message hide, False: User click on close show arrow to show message again.
 * 					color: "#888", // Font Color box
 * 					background: "#FF9" // Background color box
 * 				});
 *			});
 * 		</script>
 * 
 * 		[...Maybe...]
 * 
 * 		<script>
 * 			$(document).ready(function(){
 * 				$('#anyIDtag').notify();
 *			});
 * 		</script>
 * 
 *
 ******************************/
(function(e){
	jQuery.fn.extend({
		notify:function(o){
 			/*var defaultstyles = {
				info: { 'color': '#FFF', 'background': '#222' },
				success: { 'color': "#FFF", 'background': "#5F5" },
				warning: { 'color': '#FFF', 'background': '#F90' },
				alert: { 'color': '#FFF', 'background': '#F33' },
				deal: { 'color': '#888', 'background': '#FF9' }
			};*/
			this.options = $.extend({
				active: true,
				close: false,
				color: "#444",
				background: "#FF9"
			}, o);
			
			var nclose = this.options.close;
			
			$(this).hide();
			
			$('body').append('<span class="notify-arrow"></span>');
			
			$(this).prepend('<span class="notify-close"></span>');
			
			$(this).addClass('notify-message');
			
			if( this.options.close ) {
				$('head').append("<style>.notify-arrow:before{display:block;font-size:20px;padding:5px 15px;content:'\\25BE';color:"+this.options.color+";}"+".notify-close:before{display:block;font-size:24px;float:right;margin:-7px -5px -7px 20px;content:'\\00D7';color:"+this.options.color+";}<\/style>");
			} else {
				$('head').append("<style>.notify-arrow:before{display:block;font-size:20px;padding:5px 15px;content:'\\25BE';color:"+this.options.color+";}"+".notify-close:before{display:block;font-size:20px;float:right;margin:-7px -5px -7px 20px;content:'\\25B4';color:"+this.options.color+";}<\/style>");
			}

			$('.notify-message').css({
				'background-color': this.options.background,
				'color': this.options.color,
				'z-index': '101',
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'left': '0',
				'padding': '10px 20px',
				'overflow': 'hidden',
				'box-shadow': '0 0 5px #444',
				'border': '0',
				'border-bottom': '2px solid #888',
				'opacity': '.9'
			});

			$('.notify-arrow').css({
				'background-color': this.options.background,
				'color': this.options.color,
				'z-index': '101',
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'overflow': 'hidden',
				'box-shadow': '0 0 5px #444',
				'opacity': '.9',
				'border': '0 0 2px 2px solid #888',
				'border-radius': '0 0 0 5px'
			});
			
			if( this.options.active ) {
				$('.notify-message').delay(1000).slideDown('slow');
				$('.notify-arrow').hide();
			} else {
				$('.notify-message').hide();
				if( !this.options.close ) {
					$('.notify-arrow').delay(1000).slideDown('slow');
				} else {
					$('notify-arrow').hide();
				}
			}
			$('.notify-arrow').click(function(){
				$(this).slideUp('slow');
				$('.notify-message').delay(500).slideDown('slow');
			});
			$('.notify-close').click(function(){
				$('.notify-message').slideUp('slow');
				if( !nclose ) {
					$('.notify-arrow').delay(500).slideDown('slow');
				}
			});
		}
	})
})(jQuery);
