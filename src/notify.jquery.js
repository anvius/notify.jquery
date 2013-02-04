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
 * 					active: true; // True: Show message, False: Show symbol to show message.
 * 					close: false; // True: User click on close message hide, False: User click on close show arrow to show message again.
 * 					color: "#888"; // Font Color box
 * 					background: "#FF9"; // Background color box
 * 					border: "#FFF"; // Bottom border Color box
 * 					opacity: ".9" // Opacity box
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
		notify:function(options){
			this.options = $.extend({
				active: true,
				close: false,
				color: "#888",
				background: "#FF9",
				border: "#FFF",
				opacity: ".9"
			}, options);
			
			var nclose = this.options.close;
			
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
				'z-index': '101',
				'position': 'absolute',
				'top': '0',
				'right': '0',
				'left': '0',
				'font-weight': 'bold',
				'font-size': '16px' ,
				'padding': '10px 20px',
				'overflow': 'hidden',
				'box-shadow': '0 0 5px #444',
				'border': '0',
				'border-bottom': '2px solid '+this.options.border,
				'opacity': this.options.opacity
			});

			$('.notify-arrow').css({
				'background-color': this.options.background,
				'z-index': '101',
				'position': 'absolute',
				'top': '0',
				'right': '50px',
				'overflow': 'hidden',
				'box-shadow': '0 0 5px #444',
				'opacity': this.options.opacity,
				'border': '0 2px 2px 2px solid '+this.options.border,
				'border-radius': '0 0 5px 5px'
			});
			
			if( this.options.active ) {
				$('.notify-message').show();
				$('.notify-arrow').hide();
			} else {
				$('.notify-message').hide();
				if( !this.options.close ) {
					$('.notify-arrow').show();
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
