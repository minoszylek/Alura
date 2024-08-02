
let intentos = 1;
let limiteJuego = 10;
let numeroSecreto = 0;
let numeroUsuario;
let numerosGenerados = [];

//Recibe el número que ingresa el jugador y lo compara con el número secreto.
function validarIntentoUsuario() {
    numeroUsuario = parseInt(document.getElementById("input001").value);
    if(numeroSecreto !== numeroUsuario) {
        intentos ++;
        asignarTexto("parrafo001", `El número es ${(numeroUsuario > numeroSecreto) ? "menor" : "mayor"}`);
        limpiarInput();
    }
    //El usuario logró adivinar.
    else{
        asignarTexto("parrafo001", `Lo lograste en: ${intentos} ${(intentos === 1) ? `intento` : `intentos` }`);
        habilitarBoton();
    }
    return;
}

function habilitarBoton () {
    document.getElementById('reiniciar').removeAttribute('disabled');
}

//Asigna texto a elementos HTML por medio de su id.
function asignarTexto(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}
//Limpia el contenido en el input.
function limpiarInput () {
    document.getElementById('input001').value = '';
}
//Genera números aleatorios basado en limite Juego y controla que no se repitan.
function nuevoNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * limiteJuego + 1);
    console.log("inicio funsión");
    console.log("Secreto generado : "+numeroSecreto);
    console.log("Número generado: " + numeroGenerado);
    if(numerosGenerados.length === limiteJuego) {
        //Habilita el reinicio con un nuevo límite definido por el jugador.
        document.getElementById('reiniciar').style.display = 'none';
        document.querySelector("#reiniciartotal").style.display = 'inline-block';
        document.querySelector('.container__boton').setAttribute('disabled', true);
        return asignarTexto("parrafo001", "Lograste adivinar todas las posibilidades. Ingresa el nuevo número máximo que quieres adivinar:");
    }
    if (numerosGenerados.includes(numeroGenerado)) {
        return nuevoNumeroSecreto();
    }else {
        numerosGenerados.push(numeroGenerado);
    }
    return numeroGenerado;
}

//Crea las condiciones para la ejecución del juego.
function iniciarJuego () {
    intentos = 1;
    asignarTexto("parrafo001", `Ingresa un número de 1 a ${limiteJuego}`);
    asignarTexto("title001", "Adivina el número");
    limpiarInput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroSecreto = nuevoNumeroSecreto();
}
function reiniciarNuevoLimite () {
    limiteJuego = parseInt(document.getElementById("input001").value);
    document.querySelector('.container__boton').removeAttribute('disabled');
    document.querySelector("#reiniciartotal").style.display = 'none';
    document.getElementById('reiniciar').style.display = 'inline-block';
    numerosGenerados = [];
    iniciarJuego();
}
iniciarJuego();