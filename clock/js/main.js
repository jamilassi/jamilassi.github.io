// JavaScript Document
/* Jamil Assi */

var now = new Date();

function laDate() {
	
var jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
var lesMois = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];	
var jour = now.getDay();
var numJour = now.getDate();
var mois = now.getMonth();
var annee = now.getFullYear();

 return jours[jour] +", le "+ numJour + " " + lesMois[mois] + " " + annee;
	
}

function lHeure() {
var now = new Date();
var heure = now.getHours();
var minute = now.getMinutes();
var secondes = now.getSeconds();
if (minute<10) {
	return "L'heure est "+ heure +" : 0" + minute + " : 0" + secondes;
	}
else if (secondes<10){
	return  "L'heure est "+ heure +" : " + minute + " : 0" + secondes;
	}
else if (heure<10){
	return  "L'heure est 0"+ heure +" : " + minute + " : " + secondes;
	}
else {
	return "L'heure est "+ heure +" : " + minute + " : " + secondes;
	}

}

setInterval ( function() {
	document.getElementById('cell').innerHTML = laDate() + "<br>" + lHeure();
	},1000);
