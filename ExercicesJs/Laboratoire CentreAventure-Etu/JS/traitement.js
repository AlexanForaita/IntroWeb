function btnCalculer_onclick(){

    SaisirInfo();
    tot = prixTot();
    afficheInfo();
}



function lstAct_onchange() {

    var Act;

    Act = document.getElementById("lstAct").value;
    document.getElementById("Act").src = "img/" + Act + ".jpg";
}


var guide,date,activite,personne;
function SaisirInfo()
{

    guide = document.getElementById("lstGuide").value;
    date = document.getElementById("txtDate").value;
    activite = document.getElementById("lstAct").value;
    personne = document.getElementById("txtNbPersonne").value;
}




function afficheInfo()
{
    document.getElementById("lblGuide").innerHTML = "Guide "+ guide;
    document.getElementById("lblNbPers").innerHTML = "Type "+personne;
    document.getElementById("lblDate").innerHTML = "Date "+ date;
    document.getElementById("lblAct").innerHTML = "Act " + activite;
    document.getElementById("lblNbPers").innerHTML = "Pers " +personne;
    document.getElementById("lblSousTot").innerHTML = "Pers " +resultat;
    document.getElementById("lblTot").innerHTML = "Pers " +tot;
    document.getElementById("lblTPS").innerHTML = "TPS 5%";
    document.getElementById("lblTVQ").innerHTML = "TVQ 15%";

}


function prixSousTot(){

    var resultat=0;
    var Act;

    Act = document.getElementById("lstAct").value;
    switch (Act)

    {

        case "Parcours en Arbres Régulier":
            resultat = 30;
            break;
        case "Parcours en Arbres Extrême":
            resultat = 35;
            break;
        case "Kayak de mer":
            resultat = 40;
            break;
        case "Via Ferrata":
            resultat = 45;
            break;
        case "Circuit de Tyroliennes Géantes":
            resultat = 50;
            break;
    }


    if(document.getElementById("chkEquip").checked == true){

        document.getElementById("lblEquipement").innerHTML = "Equipement oui";
        resultat += 15;
    }

    else
    {
        document.getElementById("lblEquipement").innerHTML = "Equipement non";
    }


    if(document.getElementById("radJunior").checked == true){

        document.getElementById("lblType").innerHTML = "Type junior";
        resultat *=0.80;


    }

    if(document.getElementById("radEtu").checked == true){

        document.getElementById("lblType").innerHTML = "Type Etu";
        resultat *=    0.90;
    }


    else{

        document.getElementById("lblType").innerHTML = "Type Adulte";
    }

    if (document.getElementById("txtNbPersonne").value > 5);
    {
       resultat *=   0.90;
    }

    return resultat;
}



function prixTot(){

    resultat = prixSousTot();

    var tot=resultat;
    var TPS = 1.05;
    var TVQ = 1.15;

    tot *= TVQ;
    tot*=TPS;

    return tot;

}


