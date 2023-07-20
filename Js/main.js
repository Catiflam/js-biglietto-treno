//# inserimento input iniziali
const userage = parseInt(prompt("inserire l'età"));
const userkm = parseFloat(prompt(" inserire quanti km si vuole percorrere"));

let eurokm = 0.21;
const tiketprice = userkm * eurokm;
let userdiscount = 0;

if (userage < 18) {
	userdiscount = tiketprice * 0.2;
	console.log(userdiscount);
} else if (userage > 65) {
	userdiscount = tiketprice * 0.4;
	console.log(userdiscount);
}

const ticketfinalprice = tiketprice - userdiscount;

const finalmessage = `
il prezzo finale del tuo biglietto è €

${ticketfinalprice}`;

document.getElementById("example").innerHTML = finalmessage;
