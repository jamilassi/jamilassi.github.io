// JavaScript Document TIC TAC TOE
// Jamil Assi

var player = "x";
playx.innerHTML=player+" playing";
gameover.innerHTML="";
playo.innerHTML="";


var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');

function switchPlayer() {
	
	if (player === "x") {
		player="o";
		playo.innerHTML="o playing";
		playx.innerHTML="";
		}
		else {
		player="x";
		playo.innerHTML="";
		playx.innerHTML="x playing";
		}
}

function checkWinner() {
	if ( one.innerHTML===player && two.innerHTML===player && three.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( four.innerHTML===player && five.innerHTML===player && six.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( seven.innerHTML===player && eight.innerHTML===player && nine.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( one.innerHTML===player && four.innerHTML===player && seven.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( two.innerHTML===player && five.innerHTML===player && eight.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( three.innerHTML===player && six.innerHTML===player && nine.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( three.innerHTML===player && five.innerHTML===player && seven.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
	if ( one.innerHTML===player && five.innerHTML===player && nine.innerHTML===player ) {
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=player + ' wins !';
		console.log(player + ' wins !');
		}
}

function checkTie() {
	if ( 	one.innerHTML!=="" && 
			two.innerHTML!=="" && 
			three.innerHTML!=="" &&
			four.innerHTML!=="" && 
			five.innerHTML!=="" &&
			six.innerHTML!=="" && 
			seven.innerHTML!=="" &&
			eight.innerHTML!=="" &&
			nine.innerHTML!=="" &&
			gameover.innerHTML === ""
		) 
		{
		playo.innerHTML="";
		playx.innerHTML="";
		gameover.innerHTML=" it's a tie ";
		console.log("It's a tie");
		}
	}

function chooseSquare(id) {
	
	var square= document.getElementById(id);
	square.innerHTML=player;
	console.log(player +" playing");
	checkWinner();
	checkTie();
	switchPlayer();
	
	if (gameover.innerHTML != "") {
		playo.innerHTML="";
		playx.innerHTML="";
		}
	
}