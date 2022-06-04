// JavaScript Document

var pinkode = 1234;
var pengar = 4000;

function skjekBank(){
	
var penger = document.getElementById("pengar").value;
    var brukerpin = document.getElementById("pinkode").value;
    if (brukerpin == pinkode && penger <= 4000){ 
        document.getElementById("rp").style.color = "green";
		document.getElementById("wp").style.color = "white";
		document.getElementById("rpoa").style.color = "white";
    }
	else if (brukerpin	== pinkode	&& penger >4000){
		document.getElementById("rpoa").style.color = "blue";
		document.getElementById("rp").style.color = "white";
		document.getElementById("wp").style.color = "white";
	}

    else if (pinkode != brukerpin){
		document.getElementById("wp").style.color = "red";
		document.getElementById("rp").style.color = "white";
		document.getElementById("rpoa").style.color = "white";

    }
}














/*let pincode = 1234
let maxAmount = 4000;

function sjekkPin() {

	let userpin = document.getElementById("pincode").value;
	if (userpin == pincode){
		alert("You can proceede")
	} else if (userpin != pincode){
		alert("The pincode was incorrect")
	}
}	

function sjekkMaxAmount() {

	let amount = documnet.getElementById("maxAmount").value
	if(amount <= maxAmount){
		alert("You took out money")
	} else if(amount > maxAmount){
		alert("Your max amount is 4000")
	}
}
*/