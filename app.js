let palabras = ['manzana', 'puerta', 'tobillo','tocar', 'estupido', 'computadora', 'estadio', 'anillo', 'casa', 'caja', 'gato', 'extra', 'cara', 'bota', 'tornillo','pala','raspar','trabajo', 'doctor', 'empresa', 'abrigo', 'jirafa', 'perro', 'toro', 'ganzo', 'botella', 'libro', 'tuerca', 'carro', 'hogar', 'esposa', 'esposo', 'hijo', 'hija', 'pintar', 'cartera', 'bolso', 'entrada', 'salida', 'cuerno'];

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

function adivinarLetra(letra) {
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

            if(intentos == 1){
                agregarFallo('O');
            }else if(intentos == 2){
                agregarFallo('|');
            }else if(intentos == 3){
                agregarFallo('/');
            }

        }else if(intentos === intentosMaximos){
            alert('perdiste');
            reiniciarJuego();
        }
    }

    actualizarPalabra();
    return;
}


function actualizarPalabra(){
    let palabraHTML = document.getElementById('palabra');
    palabraHTML.innerHTML = palabraOculta.join(' ');
    return;
}

function agregarFallo(parteDeCuerpo) {
    let cuerpo = document.getElementById('cuerpo');
    let elemento = document.createElement('p');
    elemento.innerHTML = parteDeCuerpo;
    cuerpo.appendChild(elemento);
}

function reiniciarJuego(){
    location.reload();
}

console.log(palabraSecreta);
console.log(palabraOculta);

