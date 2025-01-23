let palabras = ['manzana', 'puerta', 'tobillo','tocar', 'estupido', 'computadora', 'estadio', 'anillo', 'casa', 'caja', 'gato', 'extra', 'cara', 'bota', 'tornillo','pala','raspar','trabajo', 'doctor', 'empresa', 'abrigo', 'jirafa', 'perro', 'toro', 'ganzo', 'botella', 'libro', 'tuerca', 'carro', 'hogar', 'esposa', 'esposo', 'hijo', 'hija', 'pintar', 'cartera', 'bolso', 'entrada', 'salida', 'cuerno'];

let palabra = generarPalabra();

function generarPalabra(){
    let palabraRandom = Math.floor(Math.random() * palabras.length);
    let palabra = palabras[palabraRandom];
    return palabra;
}
console.log(palabra)