function frmMembre_onsubmit()
{
    var resultat;
    var valide = true;
        if(validChampOblig()=== true) {
            if(validFormat() === true) {
                resultat=afficheTarif();
                if(confirm("Voulez vous inscrire ? Votre tarif est de "+resultat)=== true)
                {

                }
                else{
                    valide = false;

                }


            }
        }

        else{
            document.getElementById("lblMessageErreur").innerHTML = "Tout les champs avec une * doivent etre remplis."

        }

        return valide;
}

function afficheTarif()
{
  var resultat = 0;
  var type = document.getElementById("type").value;

  switch (type)

  {
      case "adulte":
          resultat = 90;
          break;
      case "étudiant":
          resultat = 60;
          break;
      case "retraité":
          resultat = 80;
  }
  return resultat;

}







function validExist(nomID)
{
    var valide = true;

    if(document.getElementById(nomID).value == "")
    {
      valide = false;
        document.getElementById(nomID).style.borderColor ="Red";
    }

    else
        {
            document.getElementById(nomID).style.borderColor ="";
    }



return valide;

}

function validChampOblig()
{
    var valide = true;
    var Tabvalid = new Array("txtNom","txtPrenom","txtAdresse","txtVille","tel");

    for(var i = 0;i<Tabvalid.length;i++)
    {
        if(validExist(Tabvalid[i])===false)
        {

          valide = false;

        }
    }

     return valide;
}



function validFormat()
{
    var valide = true;


 if(validNom(document.getElementById("txtNom").value)=== false){

     valide = false;
     document.getElementById("txtNom").style.borderColor = "Red";
 }

 if(validNom(document.getElementById("txtPrenom").value)===false){

     valide = false;
     document.getElementById("txtPrenom").style.borderColor = "Red";
 }

 if(validNom(document.getElementById("txtVille").value)===false){

     valide = false;
     document.getElementById("txtVille").style.borderColor = "Red";
 }

 if (validNum(document.getElementById("tel").value) === false) {

        valide = false;
        document.getElementById("tel").style.borderColor = "Red";
 }

 if((valideCode(document.getElementById("txtCodePostal").value)===false) && (document.getElementById("txtCodePostal").value !== "")){

     valide = false;
     document.getElementById("txtCodePostal").style.borderColor = "Red";

 }

 else{

     document.getElementById("txtCodePostal").style.borderColor = "";
 }

 if((validecodePerm(document.getElementById("txtCodePerm").value)===false) && (document.getElementById("txtCodePerm").value !== "")){

     valide = false;
     document.getElementById("txtCodePerm").style.borderColor = "Red";
 }

 else{

     document.getElementById("txtCodePerm").style.borderColor = "";
 }



return valide;
}






function validNom(chaine)
{
    return /^[A-Z]{1}[a-z]+|[\-?[A-Z|a-z]]+$/.test(chaine)
}

function validNum(chaine){

    return /^(\d{3}-\d{3}-\d{4})|(\(\d{3}\) \d{3}-\d{4})$/.test(chaine)
}

function valideCode(chaine){

    return /^[A-z][0-9][A-z] [0-9][A-z][0-9]$/.test(chaine)
}

function validecodePerm(chaine){

    return /^[A-z]{4}(\d{8})$/.test(chaine)
}
function btnAjouter_onclick()
{
    ajouterNom();
}
var TabAge = new Array(4);
var TabNom = new Array (4);
function ajouterNom()
{

    Nom = document.getElementById("txtNom").value;
    Age = parseInt(document.getElementById("txtAge").value);

  var Cpt = 0;

    TabNom [Cpt]= Nom;
    TabAge [Cpt]= Age;
    Cpt++;

    document.getElementById("lblMessageErreur").innerHTML = "Numero de Nom " + Cpt;

    if(Cpt >4)
    {
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnPlusJeune").disabled = false;
        document.getElementById("btnRechercheNomComplet").disabled = false;
    }
}

function btnPlusJeune_onclick()
{
    PlusJeune();
}

function PlusJeune()
{


    var PlusJeune = TabAge[0];
    var NomPlusJ = TabNom[0];

    for(var i=0 ; i<TabAge.length;i++)
    {
        if(PlusJeune > TabAge[i])
        {
            PlusJeune = TabAge[i];
            NomPlusJ = TabNom[i];
        }
    }


    document.getElementById("lblReponse").innerHTML = "Le plus Jeune est " + NomPlusJ +  " et son age est " + PlusJeune;


}

function btnRechercheNomComplet_onclick()
{

    Recherche()

}

function Recherche()
{
    var Recherche;
    var trouve = false;
    var Nom;
    var i = 0;

    Nom = document.getElementById("txtNom").value;

    while((trouve == false) && (i <= 4))
    {
        if (TabNom[i] == Nom)
        {
            trouve = true;
        }
        else
        {
            i++;
        }
    }
    if(trouve == true)
    {
        Recherche = document.getElementById("lblReponse").innerHTML = "Vous recherchez " + Nom + " et son age est de " + TabAge[i];
    }
    else
    {
        Recherche = document.getElementById("lblReponse").innerHTML = " Erreur, Veuillez bien entrer le nom ";
    }

    return Recherche;
}