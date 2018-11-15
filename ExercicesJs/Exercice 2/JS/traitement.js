function btnCalculer_onclick()
{ 
 	var MoyKmMois , TotKm;

 	MoyKmMois = parseFloat(document.getElementById("txtKm").value);
 	TotKm = (MoyKmMois) * (12*5);
    console.log ("Au bout de 5 ans les kilometres seront de "+TotKm);
}