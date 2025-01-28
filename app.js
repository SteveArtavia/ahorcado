import palabras from './palabras.js';

let palabraSecreta = generarPalabra();
let palabraOculta = '';
let intentos = 0;
let intentosMaximos = 5;

function generarPalabra() {
    let palabra = Math.floor(Math.random() * palabras.length);
    let palabraRandom = palabras[palabra];
    palabraRandom = palabraRandom.split('');
    return palabraRandom;
}

function mostrarPalabra() {
    let palabraHTML = document.getElementById('palabra');
    palabraOculta = Array(palabraSecreta.length).fill('_');
    palabraHTML.innerHTML = palabraOculta.join(' ');
    return;
}

mostrarPalabra();

window.adivinarLetra = function(letra) {
    for(i = 0; i < palabraSecreta.length; i++){
        if(letra === palabraSecreta[i]){
            palabraOculta[i] = letra;
            console.log(palabraOculta[i]);
        }
    }

    if(!palabraSecreta.includes(letra)){
        if(intentos < intentosMaximos){
            intentos++;
            console.log(intentos);
            agregarFallo();

        }else if(intentos === intentosMaximos){
            alert('perdiste');
            reiniciarJuego();
        }
    }

    if(!palabraOculta.includes('_')){
        setTimeout(() => {
            hasGanado();
        }, 1000);
    }

    actualizarPalabra();
    return;
}

function actualizarPalabra(){
    let palabraHTML = document.getElementById('palabra');
    palabraHTML.innerHTML = palabraOculta.join(' ');
    return;
}

function agregarFallo(){
    let barra = document.getElementById('barra');
    let widthActual = parseInt(barra.style.width) || 0;
    if(widthActual < 100){
        barra.style.width = (widthActual + (100 / intentosMaximos)) + '%';
    }
}

function hasGanado() {
    alert('Has ganado!');
}

function reiniciarJuego(){
    location.reload();
}

console.log(palabraSecreta);
console.log(palabraOculta);

