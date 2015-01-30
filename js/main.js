// JavaScript Document
/* Jamil Assi */

function init() {
var calendar = new Calendar('calendar', new Date(), 'small');
}

function small() {
var calendar = new Calendar('calendar', new Date(), 'small');
}

function regular() {
var calendar = new Calendar('calendar', new Date(),'');
}

function large() {
var calendar = new Calendar('calendar', new Date(), 'large');
}


function french(){
var calendar = new Calendar('calendar', new Date(),'','fr');
}
function petit(){
var calendar = new Calendar('calendar', new Date(),'small','fr');
}
function grand(){
var calendar = new Calendar('calendar', new Date(),'large','fr');
}

jQuery(document).ready(function(){
	$("p").text();
	});