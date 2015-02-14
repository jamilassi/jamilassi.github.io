/*!
J. Assi
 */

// Element du onclick de bienvenue
function bienvenue() {
	input=document.getElementById('name_session');
	$('.intro-heading').append(input.value);
	input.innerHTML='';
	
		if ($('.intro-heading').attr('style','opacity:0;') && $('name_session'))
			{
			$('.intro-heading').fadeTo(3000,0.7);
    		$('#continue').fadeTo(5000,1);
  			} 
			else {
    		$('.intro-heading').attr('style','opacity:0;')};
}
			