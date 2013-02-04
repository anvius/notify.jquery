# JQuery Notify v1.0

## Message notify on web top with jQuery.

### Usage

Put your message on html file.

~~~
	<div id="anyIDtag">Information/Deal/Alert message</div>
~~~

Include lib & jquery.

~~~  
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script src="notify.jquery.min.js"></script>
~~~

Call plugin with styles.

~~~
	<script>
		$(document).ready(function(){
			$('#anyIDtag').notify({ // Optional parameters. Default values.
				active: true, // True: Show message, False: Show symbol to show message.
				close: false, // True: User click on close message hide, False: User click on close show arrow to show message again.
				color: "#888", // Font Color box
				background: "#FF9" // Background color box
			});
		});
	</script>
~~~

Or without slyles.

~~~
	<script>
		$(document).ready(function(){
			$('#anyIDtag').notify(); // Use default style values.
		});
	</script>
~~~

### Styles

You can add new styles to message font with css class: .notify-message.

By default this message take the document font style.

(c) 2013, [Antonio Villamarin][1]
 
License: MIT [http://opensource.org/licenses/MIT][2]
 
[1]: http://ant.onio.org
[2]: http://opensource.org/licenses/MIT
