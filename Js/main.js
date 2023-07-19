//# inserimento input iniziali
const userage = parseInt(prompt("inserire l'età"));
const userkm = parseInt(prompt(" inserire quanti km si vuole percorrere"));

let eurokm = 0.21;
const finalprice = `
prezzo finale del biglietto
`;

console.log("prezzo finale dei km percorsi" + eurokm * userkm);

let sconto20 = (eurokm / userkm) * 20;
let sconto40 = (eurokm / userkm) * 20;

if (userage >= 18) {
	console.log("se sono maggiorenne verra applicato uno sconto del 40%");
} else {
	console.log("se sono minorenne verra applicato uno sconto del 20%");
}

document.getElementById("example").innerHTML = finalprice;
