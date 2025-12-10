function fotogran(foto){
    document.getElementById('fotogran').src=foto
    document.getElementById('fotogran').style.visibility='visible'
}
function ensenya() {
    const seccio = document.getElementById("seccio");
    const text = document.getElementById("textOcult");

    seccio.style.backgroundColor = "darkpink";
    seccio.style.color = "white";
    text.style.display = "block";
}
function ensenyam() {
    const seccio = document.getElementById("seccio");
    const text = document.getElementById("textOcult");

    seccio.style.backgroundColor = "lavender";
    seccio.style.color = "black";
    text.style.display = "none";
}
