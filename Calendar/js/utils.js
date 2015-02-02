/* JavaScript Document 

utils.js Personal Library
Jamil Assi
*/
(function(context){



context.Appeller ={};
    
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
   

context.Appeller.show=show;

    
function hide(el) {
	el.style.display="none";
	}   
    

context.Appeller.hide=hide;    

    
function foo() {
        console.log("Function foo() (inside the object Appeller) is Called from file: utils.js");
    }
    

context.Appeller.foo=foo;

})(window);