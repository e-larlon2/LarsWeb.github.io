// JavaScript Document

// det plusser tallene sammen
let number1 = 23;
let number2 = 78;
let sum = (number1 + number2)

console.log(sum);

/*
//oppgåve nummer 6
let fornavn = "lars";
let etternavn = "lønn";

alert("Velkommen" + " " + fornavn + " " + etternavn + "." + " " + "så finta at du ville komme her" + " " + fornavn);

// oppgåve nummer 7
let text;
let navn = prompt("skriv inn navnet ditt");

text = "velkommen," + " " + navn; 
document.getElementById("header").innerHTML = text;

*/


function sjekkSvar(){
	
	let svar = document.getElementById("sporsmal");
	let rettSvar;
	let feilSvar;
	
	if (svar.value == "ja"){
		rettSvar = "GRATULERER! DU HAR SVART RETT";
	} else {
		feilSvar = "Du har svart feil";
	}
	document.getElementById("rs").innerHTML = rettSvar;
	document.getElementById("fs").innerHTML = feilSvar;
	
}
