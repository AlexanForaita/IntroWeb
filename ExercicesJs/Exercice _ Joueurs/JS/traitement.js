
var TabJoueur = new Array(4);
var TabPoints = new Array(4);
var cpt = 0;
var saisi;
var points;

function btnAjouter_onclick()
{

    saisi=(document.getElementById("txtNom").value);
    points=parseFloat(document.getElementById("txtPoints").value);
    TabJoueur[cpt]= saisi;
    TabPoints[cpt]=points;
    cpt++;
    document.getElementById("lblNbreJoueur").innerHTML= ("Numéro du joueur "+cpt);


    if(cpt>3)
    {
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("btnRechercher").disabled=false;
    }





}


function btnTrouverMoy_onclick()
{
    var moy = 0;
    var Tot=0;

    for(var i = 0;i<TabPoints.length;i++)
    {

        Tot += TabPoints[i];

    }

    moy = Tot/4;
    document.getElementById("lblReponse").innerHTML= ("Réponse "+ moy);



}


function btnTrouverMeilleur_onclick()

{

    var max = TabPoints[0];
    var nomMeilleur = TabJoueur[0];

    for(var i = 0;i<TabPoints.length;i++)
    {

        if(max <TabPoints[i])
        {
            max = TabPoints[i];
            nomMeilleur = TabJoueur[i];
        }

    }


    document.getElementById("lblReponse").innerHTML= "Réponse "+ max +" Joueur "+nomMeilleur;


}



function btnTrouverPire_onclick()

{
    var min = TabPoints[0];
    var nomPire = TabJoueur[0];
    for(var i = 0;i<TabPoints.length;i++)
    {

        if(min >TabPoints[i])
        {
            min = TabPoints[i];
            nomPire = TabJoueur[i];
        }

    }


    document.getElementById("lblReponse").innerHTML= "Réponse "+ min+ " Joueur "+nomPire;

}

function btnRechercher_onclick() {

    cpt = 0;
    var recherche = TabJoueur[cpt];
    var score = TabPoints[cpt];

    do {

        cpt = -1;
        cpt++;


        if (recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt] && recherche == TabJoueur[cpt]) {
            document.getElementById("lblReponse").innerHTML = "Réponse " + score + " Joueur " + recherche;


        }


    } while (recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt] && recherche != TabJoueur[cpt]);

}