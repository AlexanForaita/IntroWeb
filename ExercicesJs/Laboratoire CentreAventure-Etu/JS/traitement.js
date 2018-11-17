



// N'ayant plus retrouver la feuille que tu ma remis, j'ai utilise mes propres valeurs pour cet exercice//










function lstAct_onchange()
{
var Act;
Act = document.getElementById("lstAct").value;

document.getElementById("Act").src ="img/"+ Act +".jpg";



}

function btnCalculer_onclick(){

    afficheInfo();






}

function afficheInfo()
{

    resultat = prixSousTot();
    tot = prixTot();
    var guide,date,activite,personne;
    guide = document.getElementById("lstGuide").value;
    document.getElementById("lblGuide").innerHTML = "Guide "+ guide;
    date = document.getElementById("txtDate").value;
    document.getElementById("lblDate").innerHTML = "Date "+ date;
    activite = document.getElementById("lstAct").value;
    document.getElementById("lblAct").innerHTML = "Act " + activite;
    personne = document.getElementById("txtNbPersonne").value;
    document.getElementById("lblNbPers").innerHTML = "Pers " +personne;
     document.getElementById("lblSousTot").innerHTML = "SousTot "+resultat ;
    document.getElementById("lblTot").innerHTML = "PrixTot " +tot;
    document.getElementById("lblTPS").innerHTML = "TPS 5%";
    document.getElementById("lblTVQ").innerHTML = "TVQ 15%";



}

function prixSousTot(){
    var resultat=0;



    if(document.getElementById("lstAct").value == "Parcours en Arbres Régulier" ){
        resultat += 40;
    }


    else if(document.getElementById("lstAct").value =="Parcours en Arbres Extrême" ){
        resultat += 45;
    }



    else if(document.getElementById("lstAct").value == "Kayak de mer"){
        resultat += 50;
    }


    else if(document.getElementById("lstAct").value =="Via Ferrata"){
        resultat += 55;
    }

    else if(document.getElementById("lstAct").value == "Circuit de Tyroliennes Géantes" ){
        resultat += 60;
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

    var tot=resultat;
    var TPS = 1.05;
var TVQ = 1.15;
    tot *= TVQ;
    tot*=TPS;
return tot;

}


