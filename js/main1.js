// JavaScript Document
/* Jamil Assi */

var htmlTitreSite="";
var htmlMenuSite="";
var htmlTitreBanniere="";
var htmlContenuSection="";
var htmlBanniereHorizontale="";
var htmlGrandeBanniereHorizontale="";
var htmlcontenuGrandeSection="";
var htmlcontenuPetiteSection="";
var htmlFooter="";



function init() {	
document.getElementById("logo").innerHTML=titreSite('Briefcase','J.A.');
document.getElementById("nav").innerHTML=menuSite('Homepage','index.html','Javascript','javascript.html','','','','','','');
/*document.getElementById("titreBanniere").innerHTML=titreBanniere('Javascript Projects');*/
/*document.getElementById("banniereHorizontale").innerHTML=banniereHorizontale();*/
document.getElementById("grandeBanniereHorizontale").innerHTML=grandeBanniereHorizontale();
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
	

function grandeBanniereHorizontale() {
	htmlGrandeBanniereHorizontale += contenuGrandeSection('Javascript','The script language of the web','pics02.jpg','Some Native JS Projects','javascript.html');
	htmlGrandeBanniereHorizontale += contenuPetiteSection('More...', 'From the Web', '','http://jsfiddle.net','The JSFiddle Platform Website','http://www.codecademy.com/learn','The Codecademy Site','','');
	return htmlGrandeBanniereHorizontale;
}

	
			  function contenuGrandeSection(titre, sousTitre, imageFichier, texte, lien) {
				  htmlcontenuGrandeSection = "";
				  htmlcontenuGrandeSection += '<!-- Content -->';
				  htmlcontenuGrandeSection += '<div class="8u skel-cell-important">';
				  htmlcontenuGrandeSection += '<section id="content">';
				  htmlcontenuGrandeSection += '<header>';
				  htmlcontenuGrandeSection += '<h2><a href="'+lien+'">'+titre+'</a></h2>';
				  htmlcontenuGrandeSection += '<span class="byline">'+sousTitre+'</span>';
				  htmlcontenuGrandeSection += '</header>';
				  htmlcontenuGrandeSection += '<p><a href="'+lien+'" class="image full"><img src="images/'+imageFichier+'" alt=""></a></p>';
				  htmlcontenuGrandeSection += '<p><a href="'+lien+'">'+texte+'</a></p>';
				  /*htmlcontenuGrandeSection += '<a href="'+lien+'" class="button">Open</a>';*/
				  htmlcontenuGrandeSection += '</section>';
				  htmlcontenuGrandeSection += '</div>';
				  htmlcontenuGrandeSection += '<!-- /Content -->';
				  htmlcontenuGrandeSection += '<!-- Sidebar -->';
				  return htmlcontenuGrandeSection;
				  }
				  
			  function contenuPetiteSection(titre,provenance, explications,lien1,source1,lien2,source2,lien3,source3) {
				  htmlcontenuPetiteSection = "";
				  htmlcontenuPetiteSection += '<div id="sidebar" class="4u">';
				  htmlcontenuPetiteSection += '<section>';
				  htmlcontenuPetiteSection += '<header>';
				  htmlcontenuPetiteSection += '<h2>'+titre+'</h2>';
				  htmlcontenuPetiteSection += '<span class="byline">'+provenance+'</span>';
				  htmlcontenuPetiteSection += '</header>';
				  htmlcontenuPetiteSection += '<p>'+explications+'</p>';
				  htmlcontenuPetiteSection += '<ul class="default">';
				  htmlcontenuPetiteSection += '<li><a href="'+lien1+'">'+source1+'</a></li>';
				  htmlcontenuPetiteSection += '<li><a href="'+lien2+'">'+source2+'</a></li>';
				  htmlcontenuPetiteSection += '<li><a href="'+lien3+'">'+source3+'</a></li>';
				  htmlcontenuPetiteSection += '</ul>';
				  htmlcontenuPetiteSection += '</section>';
				  htmlcontenuPetiteSection += '</div>';
				  htmlcontenuPetiteSection += '<!-- Sidebar -->';
								  return htmlcontenuPetiteSection;
				  }
	
function footer() {
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

