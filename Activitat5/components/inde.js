function fotogran(foto){
    document.getElementById('fotogran').src=foto
    document.getElementById('fotogran').style.visibility='visible'
}
function canviaColor(element) {
    element.style.backgroundColor = "rgb(156, 64, 136)";
}

function restauraColor(element) {
    element.style.backgroundColor = "#faebe6";
}
function seccio() {
    const seccio = document.getElementById("seccio");
    text.style.display = "block";
    
}
function mostrar(element) {
    element.style.Color = "black";
}

function amagar(element) {
    element.style.color = "#faebe6"; 
}
let temps = 0;

function iniciarRellotge() {
    setInterval(() => {
        temps++;

        let hores = Math.floor(temps / 3600);
        let minuts = Math.floor((temps % 3600) / 60);
        let segons = temps % 60;

        hores = hores.toString().padStart(2, '0');
        minuts = minuts.toString().padStart(2, '0');
        segons = segons.toString().padStart(2, '0');

        document.getElementById("rellotge").innerText = `Temps: ${hores}:${minuts}:${segons}`;
    }, 1000);
}

function validar() {
    const p1 = document.getElementById("pwd1").value;
    const p2 = document.getElementById("pwd2").value;

    if (p1.length < 8) {
        alert("Error: La contrasenya ha de tenir almenys 8 caràcters.");
    }
    else if (p1 !== p2) {
        alert("Error: Les contrasenyes no coincideixen.");
    } 
    else {
        alert("S’ha canviat correctament la contrasenya");
    }
}
