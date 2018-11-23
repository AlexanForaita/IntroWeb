function frmMembre_onclick()
{
        if(validChampOblig()) {
            afficheTarif();
        }
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

document.getElementById("res").innerHTML = "Le resultat est de "+resultat+" $";


}







function validChampOblig(nomID)
{
    var valide = true;

    if(document.getElementById(nomID).value == "")
    {
      valide = false;
        document.getElementById(nomID).style.borderColor ="Red";
    }

    if(document.getElementById(nomID).value == "")
    {
      valide = false;
      document.getElementById("txtPrenom").style.borderColor = "Res";
    }


return valide;

}

function afficheFalse()
{
  var valide = true
    var Tabvalid = new Array("","")


}