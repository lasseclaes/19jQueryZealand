// JavaScript Document
//this is some mess from the tutorial at http://learn.jquery.com/about-jquery/how-jquery-works/
/*OLD alternative to first line:
$( document ).ready(function() { */
/*semi-old alternative to first line:
$(function() {*/
$(() => { //DOM ready - regarded first line
	$('a').click((event) => {
	  alert( "Thanks for visiting!" );
		$('a').toggleClass("test"); /* only in CSS */
		$('a').removeClass("green"); /* loaded with this class in CSS file and HTML*/
		console.log(event.offsetY); /* Yvalue in window (viewable area) when clicked */
		event.preventDefault(); /* don't follow link */
 	});
}); //close DOM ready

/* inline in HTML /*$( document ).ready(function() {
	$(function() {
 	/* $("a").hide(); */
	/*$( "a" ).click(function( event ) {
	    alert( "Thanks for visiting!" );
 	});

});
 */
