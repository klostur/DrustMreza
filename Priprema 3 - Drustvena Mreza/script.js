function napraviDugme() {
	var dugme = document.querySelector(".dugme");
	var ispis = "<h1>Promena Lozinke</h1>" + "<input type='password' class='dugme' id='dugme1'>" + "<input type='password' class='dugme' id='dugme2'>" 
	+ "<button onclick='promeniLozinku()'>Promeni Lozinku</button>";
	dugme.innerHTML = ispis;
}
function promeniLozinku(){
	var poruka = document.getElementsByClassName("tekst")[0];
	var dugme1 = document.querySelector("#dugme1").value;
	var dugme2 = document.querySelector("#dugme2").value;
	if (dugme1 != dugme2) {
		poruka.innerHTML = "Neispravan unos sifre";
		document.querySelector("#dugme2").value = "";
	} else {
		poruka.innerHTML = "Sifra promenjena";
		document.querySelector("#dugme1").value = "";
		document.querySelector("#dugme2").value = "";
	}
}