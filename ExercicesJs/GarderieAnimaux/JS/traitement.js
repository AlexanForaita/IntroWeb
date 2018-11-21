function btnCalculer_onclick()
{ 
 	valide = validChampOblig()

}


function  validChamp (ID) {

    var valide = true;

     if(document.getElementById(ID).value ==="")

    {
        valide = false;
        document.getElementById(ID).style.backgroundColor = "Red";

    }
    else
    {
        valide = true;
        document.getElementById(ID).style.backgroundColor = "White";
    }

    return valide;
}

function validChampOblig()

{
    var valide = true;
    var TabNote = new Array("txtNbreJours","nomClient","numClient")

    for (var i = 0;i<TabNote.length;i++){
        if(validChamp(TabNote[i])===false){
            valide = false;
        }
    }
    return valide;
}