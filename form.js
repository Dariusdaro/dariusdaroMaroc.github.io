

function verif(){	
if(/^[A-Za-z]{1,25}$/.test(document.SiteTouristique.nom.value) !=false )
if(/^[A-Za-z]{1,25}$/.test(document.SiteTouristique.prenom.value) !=false )
//if(/^\d{2}[/]\d{2}[/]\d{4}$/.test(document.SiteTouristique.dateN.value) !=false )
return test();
return false;
}


function test()
{e=document.getElementById("bod");
var n =document.SiteTouristique.nom.value;
var p=document.SiteTouristique.prenom.value;
var g = document.SiteTouristique.genre.value;
var d = document.SiteTouristique.dateN.value;
var s="<body>";
s=s+"<b>Voici les informations que vous avez validé :</br> Votre nom : "+n+" </br> Votre prenom: "+p+" </br> Votre Date de naissance:"+d+"</br>Votre sexe :"+g+ "</b> ";


s=s+"</body>";

e.innerHTML=s;
return window.confirm('Envoyer?');
}

document.getElementById("SiteTouristique").addEventListener("submit",function(){
	alert('Voici vos informations saisies');
});