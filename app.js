let palabras = ['manzana', 'puerta', 'tobillo','tocar', 'estupido', 'computadora', 'estadio', 'anillo', 'casa', 'caja', 'gato', 'extra', 'cara', 'bota', 'tornillo','pala','raspar','trabajo', 'doctor', 'empresa', 'abrigo', 'jirafa', 'perro', 'toro', 'ganzo', 'botella', 'libro', 'tuerca', 'carro', 'hogar', 'esposa', 'esposo', 'hijo', 'hija', 'pintar', 'cartera', 'bolso', 'entrada', 'salida', 'cuerno'];

let palabraSecreta = generarPalabra();
let palabraOculta = '';

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

function adivinarLetra() {
    let letra = document.getElementById('letra').value;
    for(i = 0; i < palabraSecreta.length; i++){
        if(letra === palabraSecreta[i]){
            palabraOculta[i] = letra;
            console.log(palabraOculta[i]);
        }
    }

    document.getElementById('letra').value = '';
    actualizarPalabra();
    return;
}

document.getElementById('letra').addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        adivinarLetra();
    }
})

function actualizarPalabra(){
    let palabraHTML = document.getElementById('palabra');
    palabraHTML.innerHTML = palabraOculta.join(' ');
    return;
}



console.log(palabraSecreta);
console.log(palabraOculta);
