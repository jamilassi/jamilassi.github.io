// JavaScript Document
function calculate()	{
    
if (document.getElementById("amount").value !="")
        {

    /* LOCAL VAR DECLARATIONS */    
        var montant=document.getElementById("amount").value;
        var tps = (montant * 0.05);
        var tvq = (montant * 0.09975);
        var taxes=(tps+tvq);
        var total=Number(montant) + Number(taxes);

    /* ASSIGNMENTS CHECK OUT */
        console.log("amount is: "+ montant);
        console.log("tps is: "+ tps);
        console.log("tvq is: "+ tvq);
        console.log("taxes are: "+ taxes);
        console.log("Total is: "+ total);

    /* STATEMENTS */
        document.getElementById("tps").innerHTML="   "+tps.toFixed(2)+" &#36;";
        document.getElementById("tvq").innerHTML="   "+tvq.toFixed(2)+" &#36;";
        document.getElementById("taxes").innerHTML=" Taxes:  "+ taxes.toFixed(2)+" &#36;";
        document.getElementById("total").innerHTML=" Total:  "+ total.toFixed(2)+" &#36;";

        }
else {
        alert("Please enter an amount first");
        }
    
}