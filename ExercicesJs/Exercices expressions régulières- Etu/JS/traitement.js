function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{
   alert(validerNo(document.getElementById("txtValidation").value));
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
   return /^\d{3}-\d{3}-\d{3}$/.test(Chaine);
}

function valideerTl( Chaine )  // au format (418) 876-8373  un numéro ça change
{
   return /^(\d{3})-\d{3}-\d{4}$/.test(Chaine);
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
   return /^([A-z]|\-)+$/.test(Chaine);
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{
   return /^\d+$/.test(Chaine);
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{
   return /^[10-30]$/.test(Chaine);
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{
    return /^[10-20]$/.test(Chaine);
}