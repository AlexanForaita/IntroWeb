function btnCalculer_onclick()
{ 
 	var ArgentCAN , TauxChangeEuro , Euro;


 	ArgentCAN = parseFloat(document.getElementById("txtCAN").value);
 	TauxChangeEuro = parseFloat(document.getElementById("txtChange").value);
 	Euro = (ArgentCAN * TauxChangeEuro);
 	console.log ("Le montant en Euro est de "+Euro);


}