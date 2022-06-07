// JavaScript Document
/*
for(let i = 1; i < 100; i+=2) {
    console.log(i);
}
/// dette henter ut nummere 1 - 100
*/
/*
let favorittSpill = ["star wars", "titanfall 2", "horizon zero dawn", "overwatch", "apex legends"]

for(let i = 0; i < favorittSpill.length; i++) {
	document.write(favorittSpill[i])
}
*/
/*)
let i = 0;
while(i < 101) {
	document.write(i);
	i+=2;
}
*/
/*
let favorittSpill = ["star wars", "titanfall 2", "horizon zero dawn", "overwatch", "apex legends"]

while(favorittSpill < 4) {
	document.write(4);
	favorittSpill++;
}
/// et forsøk på while liste
*/

let krone = Math.floor(Math.random()*2);

while(krone === 0) {
    document.write("Kron! Vi flipper igjen...");
}
document.write("Mynt! Gratulerer!");




