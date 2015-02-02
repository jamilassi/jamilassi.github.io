// JavaScript Document
/* Jamil Assi */

//CLASS
function Todo(task) {
	this.task = task;
	
	//METHOD
	this.getTask=function () {
		return this.task;
		}
		
	}
	
//Variables globales
var listOfTasks = new Array();
	listOfTasks[0]= new Todo("Terminer le pgme TodoList");
	listOfTasks[1]= new Todo("Commencer le Tic Tac Toe");
	listOfTasks[2]= new Todo("Réviser Javascript");
	listOfTasks[3]= new Todo("Choisir le Design du produit auxiliaire");
	
var checked = document.getElementsByClassName("checked");	
var doneTasks = new Array();


//var dejaFait = document.getElementById("checkbox");

function showListOfTasks(list) {
	var HTML = "";
	
	for (i=0; i<list.length;i++) {
		
		HTML += '<li><input class="checked" onclick="checkDone('+i+')" type="checkbox"><input id ="desc" type="text" size="33" value="'+ list[i].task+'"></li>';
	}
	
	return HTML + "</br>";
	
}
function nouvelItem() {
	var nouveau = document.getElementById("nouveau").value;
	
	listOfTasks.push(new Todo(nouveau));
	aFaire.innerHTML=showListOfTasks(listOfTasks);
	}

function checkDone(index) {
	doneTasks.push(listOfTasks[index]);
	var tmp = new Array(); 
	for (i=0; i<listOfTasks.length;i++) {
		if (i!==index) {
			tmp.push(listOfTasks[i]);
			}
		
	}
	listOfTasks=tmp;

}
var taskDone = new Array();

function store(){
// Ajouter resteAFaire
	aFaire.innerHTML=showListOfTasks(listOfTasks);
	dejaFait.innerHTML=showListOfTasks(doneTasks);
	}
 	

aFaire.innerHTML=showListOfTasks(listOfTasks);




	
	