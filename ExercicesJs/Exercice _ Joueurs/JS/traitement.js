
var TabJoueur = new Array(4);
var TabPoints = new Array(4);
var cpt = 0;
var saisi;
var points;

function btnAjouter_onclick()
{

    Ajoute();
}
function btnTrouverMoy_onclick()
{
    res = Moy();


}

function btnTrouverMeilleur_onclick()

{
    aff = Meilleur();
}

function btnTrouverPire_onclick()

{
   resultat = Pire();
}


















function Moy(){
    var moy = 0;
    var Tot=0;
    var res;
    for(var i = 0;i<TabPoints.length;i++)
    {

        Tot += TabPoints[i];

    }

    moy = Tot/4;
    res=document.getElementById("lblReponse").innerHTML= ("Réponse "+ moy);
    return res;
}





function Pire(){
    var resultat;
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


    resultat= document.getElementById("lblReponse").innerHTML= "Réponse "+ min+ " Joueur "+nomPire;
    return resultat;
}



function Meilleur(){
    var max = TabPoints[0];
    var nomMeilleur = TabJoueur[0];
    var aff;
    for(var i = 0;i<TabPoints.length;i++)
    {

        if(max <TabPoints[i])
        {
            max = TabPoints[i];
            nomMeilleur = TabJoueur[i];
        }

    }


    aff=document.getElementById("lblReponse").innerHTML= "Réponse "+ max +" Joueur "+nomMeilleur;
    return aff;
}




















function Ajoute()
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















function btnRechercher_onclick() {

           var trouve;
           var NoEtu;
           var NomEtu;
           var Points = 0;
           trouve = false;
           NoEtu = 0;
           NomEtu = document.getElementById("txtNom").value;

           while(trouve == false && NomEtu <= 3)
           {

               if (TabJoueur[NoEtu] == NomEtu)
               {
                  trouve = true;
                  Points = TabPoints[NoEtu];
               }

               else {
                    NoEtu++;
               }

           }

           if (trouve == true){
               document.getElementById("lblReponse").innerHTML= "Réponse point joueur = "+Points+" Joueur "+NomEtu;
           }
           else{
               document.getElementById("lblReponse").innerHTML= "Réponse   Joueur introuvable ";
           }

}