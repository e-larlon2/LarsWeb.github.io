// JavaScript Document


let rettSvar;
let feilSvar;
let ballong;


function sjekkSvar(){
	
let svar = document.getElementById("skrivSvar");
	
	if (svar.value == "ja"){
		rettSvar = "GRATULERER! DU HAR SVART RETT";
		ballong = 'balloons.gif';
		
		
	} else {
		feilSvar = "Du har svart feil";
	}
	
	document.getElementById("tilbakeMelding").innerHTML =rettSvar;
	document.getElementById("tilbakeMelding2").innerHTML = feilSvar;
	
	document.getElementById("ballong").src = 'balloons.gif';
}