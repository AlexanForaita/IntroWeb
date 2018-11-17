function btnCalculer_onclick()
{
   if(validChampOblig()===true) {
       resultat = traiterInfo();
   }
}











function traiterInfo()

{

    var Note1,Note2,Operateur,resultat;
    Note1 = parseFloat(document.getElementById("txtNbre1").value);
    Note2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur =(document.getElementById("txtOperateur").value);
    resultat = calculer(Note1,Note2,Operateur);
    document.getElementById("lblMessage").innerHTML ="Le resultat est "+resultat;

}



function calculer(Note1,Note2,Operateur)
{


    switch(Operateur)
    {
        case "-":
            resultat = Note1 - Note2;
            break;
        case "*":
            resultat = Note1 * Note2;
            break;
        case "/":
            resultat = Note1 / Note2;
            break;
        case "+":
            resultat = Note1 + Note2;
            break;
    }
    return resultat;

}

function ValiExist(NomID)
{
    var valide =true;
    if(document.getElementById(NomID).value ==="")

    {
       valide = false;
        document.getElementById(NomID).style.backgroundColor = "Red";

    }
    else
        {
        valide = true;
            document.getElementById(NomID).style.backgroundColor = "White";
    }

    return valide;
}

function validChampOblig()

{
    var valide = true;
var TabNote = new Array("txtNbre1","txtNbre2","txtOperateur")

   for (var i = 0;i<TabNote.length;i++){
    if(ValiExist(TabNote[i])===false){
        valide = false;
    }
   }
    return valide;
}

