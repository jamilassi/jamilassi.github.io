/* JavaScript Document 

utils.js Personal Library
Jamil Assi
*/
(function(context){

context.Utils = {};

function show(id) {
	var ele=document.getElementById(id);
	if (ele.style.display === "none")
	{
		ele.style.display="block";
	}
	else {
		ele.style.display="none";
		}
	}

context.Utils.show = show;

function hide(el) {
	el.style.display="none";
	}

context.Utils.hide = hide;

})(window);