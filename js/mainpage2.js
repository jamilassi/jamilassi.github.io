// JavaScript Document
/* Jamil Assi */

var htmlTitreSite="";
var htmlMenuSite="";
var htmlTitreBanniere="";
var htmlContenuSection="";
var htmlBanniereHorizontale="";
var htmlGrandeBanniereHorizontale="";
var htmlFooter="";


function init() {	
document.getElementById("logo").innerHTML=titreSite('Briefcase','Javascript');
document.getElementById("nav").innerHTML=menuSite('Homepage','index.html','Javascript','javascript.html','','','','','','');
document.getElementById("titreBanniere").innerHTML=titreBanniere('Javascript Projects');
document.getElementById("banniereHorizontale").innerHTML=banniereHorizontale();
document.getElementById("banniereHorizontale2").innerHTML=banniereHorizontale2();
/*document.getElementById("grandeBanniereHorizontale").innerHTML=grandeBanniereHorizontale();*/
/*document.getElementById("footer").innerHTML=footer();*/
	}

function titreSite(titre,designer) {
	htmlTitreSite += '<h1><a href="#">' + titre + '</a></h1><span>' + designer + '</span>';
	return htmlTitreSite;
	}
	
function menuSite(item1,lien1,item2,lien2,item3,lien3,item4,lien4,item5,lien5) {
	/* ATTENTION: Appliquer la class "active" à la balise <li> de la page active */
	htmlMenuSite += '<ul><li class="active"><a href="'+lien1+'">'+item1+'</a></li>';
	htmlMenuSite +=	'<li><a href="'+lien2+'" >'+item2+'</a></li>';
	htmlMenuSite +=	'<li><a href="'+lien3+'" >'+item3+'</a></li>';
	htmlMenuSite +=	'<li><a href="'+lien4+'" >'+item4+'</a></li>';
	htmlMenuSite +=	'<li><a href="'+lien5+'" >'+item5+'</a></li>';
	htmlMenuSite +=	'</ul>';
	return htmlMenuSite;
	}

function titreBanniere(titre) {
	htmlTitreBanniere += '<h2>'+titre+'</h2>';
	return htmlTitreBanniere;
	}
	
function banniereHorizontale() {
	htmlBanniereHorizontale += contenuSection('1','Todo List','pics01.jpg','Shows a list of element in an Array with a for loop. Uses the push method to add element. Transfers from an array to another.','todo/index.html');
	htmlBanniereHorizontale += contenuSection('2','Tic Tac Toe Game','pics11.jpg','Uses conditions with "If" and creates interaction and scenarios interpretation as a game of Tic Tac Toe. Uses and exploit on the DOM the Document.object.getElementById()','ticTacToe/index.html');	
	htmlBanniereHorizontale += contenuSection('3','Date and Watch','pics12.jpg','Uses the Date() Object to show the date and the function setInterval() to simulate a watch by refreshing the browser each second (1000ms)','clock/index.html');
	htmlBanniereHorizontale += contenuSection('4','Tax Calculator','pics13.jpg','Uses too variables as taxes and return results of amount plus taxes','projectTax/index.html');	
	return htmlBanniereHorizontale;		
	}
	
function banniereHorizontale2() {
	var htmlBanniereHorizontale2='';
	htmlBanniereHorizontale2 += contenuSection('5','Calendar','pics14.jpg','Uses the Date(), constructing a Calendar with different options like language and size that can be modified','Calendar/index.html');
	htmlBanniereHorizontale2 += contenuSection('6','Cash Register','pics15.jpg','Outline and commentaries having on prospective a new project of Cash Register','CashRegister.html');
	/*htmlBanniereHorizontale += contenuSection('2','pics11.jpg','Uses conditions with "If" and creates interaction and scenarios interpretation as a game of Tic Tac Toe. Uses and exploit the DOM: Document.object.getElementById()','ticTacToe/index.html');	
	htmlBanniereHorizontale += contenuSection('3','pics12.jpg','Uses the Date() Object to show the date and the function setInterval() to simulate a watch by refreshing the browser each second (1000ms)','clock/index.html');
	htmlBanniereHorizontale += contenuSection('4','pics13.jpg','Simple program using too variables as taxes and return results of taxes','projectTax/index.html');	*/
	return htmlBanniereHorizontale2;		
	}
function contenuSection(numSection,titreSection,imageFichier,resume,lien) {
	htmlContenuSection ="";
	htmlContenuSection += '<div class="3u">';
	htmlContenuSection += '<section id="section'+numSection+'">';
	htmlContenuSection += '<p id="titreSection" style="font-size:70%;">'+titreSection+'<p>';
	htmlContenuSection += '<a href="'+lien+'" class="image full" target="_blank"><img src="images/'+imageFichier+'" alt="" /></a>';
	htmlContenuSection += '<div id="interneTailleOngletDesktop" style="height:75px;"><p>'+resume+'</p></div>';
	/*htmlContenuSection += '<a href="'+lien+'" class="button" target="_blank">Open</a>';*/
	htmlContenuSection += '</section>';
	htmlContenuSection += '</div>';
	return htmlContenuSection;
	}
	/*
function grandeBanniereHorizontale() {
	htmlGrandeBanniereHorizontale += '<!-- Content -->';
	htmlGrandeBanniereHorizontale += '<div class="8u skel-cell-important">';
	htmlGrandeBanniereHorizontale += '<section id="content">';
	htmlGrandeBanniereHorizontale += '<header>';
	htmlGrandeBanniereHorizontale += '<h2>Integer gravida nibh quis urna</h2>';
	htmlGrandeBanniereHorizontale += '<span class="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum</span>';
	htmlGrandeBanniereHorizontale += '</header>';
	htmlGrandeBanniereHorizontale += '<p><a href="#" class="image full"><img src="images/pics02.jpg" alt=""></a></p>';
	htmlGrandeBanniereHorizontale += '<p>This is <strong>Monochromed</strong>, a responsive HTML5 site template freebie by <a href="http://templated.co">TEMPLATED</a>. Released for free under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so use it for whatever (personal or commercial) &ndash; just give us credit! Check out more of our stuff at <a href="http://templated.co">our site</a> or follow us on <a href="http://twitter.com/templatedco">Twitter</a>.</p>';
	htmlGrandeBanniereHorizontale += '<a href="#" class="button">Read More</a>';
	htmlGrandeBanniereHorizontale += '</section>';
	htmlGrandeBanniereHorizontale += '</div>';
	htmlGrandeBanniereHorizontale += '<!-- /Content -->';
	htmlGrandeBanniereHorizontale += '<!-- Sidebar -->';
	htmlGrandeBanniereHorizontale += '<div id="sidebar" class="4u">';
	htmlGrandeBanniereHorizontale += '<section>';
	htmlGrandeBanniereHorizontale += '<header>';
	htmlGrandeBanniereHorizontale += '<h2>Gravida praesent</h2>';
	htmlGrandeBanniereHorizontale += '<span class="byline">Praesent lacus congue rutrum</span>';
	htmlGrandeBanniereHorizontale += '</header>';
	htmlGrandeBanniereHorizontale += '<p>Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue rutrum. Maecenas luctus lectus at sapien. Consectetuer adipiscing elit.</p>';
	htmlGrandeBanniereHorizontale += '<ul class="default">';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Pellentesque quis lectus gravida blandit.</a></li>';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Lorem ipsum consectetuer adipiscing elit.</a></li>';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Phasellus nec nibh pellentesque congue.</a></li>';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Cras aliquam risus pellentesque pharetra.</a></li>';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Duis non metus commodo euismod lobortis.</a></li>';
	htmlGrandeBanniereHorizontale += '<li><a href="#">Lorem ipsum dolor adipiscing elit.</a></li>';
	htmlGrandeBanniereHorizontale += '</ul>';
	htmlGrandeBanniereHorizontale += '</section>';
	htmlGrandeBanniereHorizontale += '</div>';
	htmlGrandeBanniereHorizontale += '<!-- Sidebar -->';
					return htmlGrandeBanniereHorizontale;
	}
	*/
/*function footer() {
	htmlFooter += '<div class="container">';
	htmlFooter += '<div class="row">';
	htmlFooter += '<div class="3u">';
	htmlFooter += '<section>';
	htmlFooter += '<ul class="style1">';
	htmlFooter += '<li><img src="images/pics05.jpg" width="78" height="78" alt="">';
	htmlFooter += '<p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p>';
	htmlFooter += '<p class="posted">August 11, 2014  |  (10 )  Comments</p>';
	htmlFooter += '</li>';
	htmlFooter += '<li><img src="images/pics06.jpg" width="78" height="78" alt="">';
	htmlFooter += '<p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p>';
	htmlFooter += '<p class="posted">August 11, 2014  |  (10 )  Comments</p>';
	htmlFooter += '</li>';
	htmlFooter += '<li><img src="images/pics07.jpg" width="78" height="78" alt="">';
	htmlFooter += '<p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p>';
	htmlFooter += '<p class="posted">August 11, 2014  |  (10 )  Comments</p>';
	htmlFooter += '</li>';
	htmlFooter += '</ul>';
	htmlFooter += '</section>';
	htmlFooter += '</div>';
	htmlFooter += '<div class="3u">';
	htmlFooter += '<section>';
	htmlFooter += '<ul class="style1">';
	htmlFooter += '<li class="first"><img src="images/pics08.jpg" width="78" height="78" alt=""><p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p><p class="posted">August 11, 2014  |  (10 )  Comments</p></li>';
	htmlFooter += '<li><img src="images/pics09.jpg" width="78" height="78" alt=""><p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p><p class="posted">August 11, 2014  |  (10 )  Comments</p></li>';
	htmlFooter += '<li><img src="images/pics10.jpg" width="78" height="78" alt=""><p>Nullam non wisi a sem eleifend. Donec mattis libero eget urna. </p><p class="posted">August 11, 2014  |  (10 )  Comments</p></li>';
	htmlFooter += '</ul>';
	htmlFooter += '</section>';				
	htmlFooter += '</div>';
	htmlFooter += '<div class="6u">';
	htmlFooter += '<section>';
	htmlFooter += '<header>';
	htmlFooter += '<h2>Aenean elementum</h2>';
	htmlFooter += '</header>';
	htmlFooter += '<p>In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate enim. Aliquam erat volutpat. Pellentesque tristique ante ut risus. Quisque dictum. Integer nisl risus, sagittis convallis, rutrum id, elementum congue, nibh. Suspendisse dictum porta lectus.</p>';
	htmlFooter += '<ul class="default">';
	htmlFooter += '<li><a href="#">Pellentesque quis lectus gravida blandit.</a></li>';
	htmlFooter += '<li><a href="#">Lorem ipsum consectetuer adipiscing elit.</a></li>';
	htmlFooter += '<li><a href="#">Phasellus nec nibh pellentesque congue.</a></li>';
	htmlFooter += '<li><a href="#">Cras aliquam risus pellentesque pharetra.</a></li>';
	htmlFooter += '<li><a href="#">Duis non metus commodo euismod lobortis.</a></li>';
	htmlFooter += '<li><a href="#">Lorem ipsum dolor adipiscing elit.</a></li>';
	htmlFooter += '</ul></section></div></div></div>';
	return htmlFooter;
	}
*/
