
let intentos = 1;
let limiteJuego = 10;
let numeroSecreto = nuevoNumeroSecreto();
let numeroUsuario;


//Genera números aleatorios basado en limiteJuego.
function nuevoNumeroSecreto() {
    intentos = 8;
    asignarTexto("parrafo001", `Tienes ${intentos} oportunidades`);
    return Math.floor(Math.random() * limiteJuego + 1);
    
}


function validarIntentoUsuario () {
    let numeroUsuario = parseInt(document.getElementById("input001").value);
    if(numeroSecreto !== numeroUsuario) {intentos ++;
        
    }
    else{}
    asignarTexto("parrafo001", `Tienes ${intentos} intentos`);
    console.log(numeroUsuario);
    return;
};
//Asigna texto a elementos HTML por medio de su id.
function asignarTexto(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTexto("title001", "Adivina el número secreto");

nuevoNumeroSecreto();
console.log (numeroSecreto)
console.log (intentos)