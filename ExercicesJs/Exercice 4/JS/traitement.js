function btnCalculer_onclick()
{ 
 	var Destination, Distance, ConsommationVoiture, PrixLitre, Cout;

 	Destination = parseFloat(document.getElementById("txtDest").value);
 	Distance = parseFloat(document.getElementById("txtDist").value);
 	ConsommationVoiture = parseFloat(document.getElementById("txtCons").value);
 	PrixLitre = parseFloat(document.getElementById("txtPrix").value);
 	Cout = ((ConsommationVoiture * Distance)/ 100) * (PrixLitre);
 	console.log ("Le cout du voyage sera de "+Cout);



}