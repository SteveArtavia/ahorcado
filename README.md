# Ahorcado
<p>Este proyecto es un juego del Ahorcado implementado en JavaScript. El usuario debe adivinar una palabra letra por letra, y tiene un número limitado de intentos.</p>

## Estructura del proyecto
- index.html: El archivo principal que carga el juego.
- app.js: Contiene la lógica principal del juego, incluyendo la generación de palabras aleatorias, el seguimiento de los intentos y la actualización de la interfaz de usuario.
- palabras.js: Contiene un array de palabras que se utilizarán en el juego.

## Estructura del código
palabras.js: Contiene un array de palabras que se utilizan como palabras secretas en el juego.

app.js:
generarPalabra(): Selecciona una palabra aleatoria del array de palabras.
mostrarPalabra(): Muestra la palabra secreta oculta en la interfaz de usuario.
adivinarLetra(): Comprueba si la letra ingresada por el usuario está en la palabra secreta y actualiza la interfaz.
agregarFallo(): Incrementa el contador de intentos y actualiza la barra de progreso.
hasGanado(): Muestra un mensaje de victoria cuando el jugador adivina todas las letras.
reiniciarJuego(): Recarga la página para iniciar una nueva partida.

## Posibles mejoras
- Interfaz de usuario: Se puede mejorar la interfaz con CSS para hacerla más atractiva y amigable.
- Dificultad ajustable: Implementar diferentes niveles de dificultad ajustando el número máximo de intentos o la longitud de las palabras.
- Temas personalizables: Permitir al usuario elegir diferentes temas visuales para el juego.

## Tecnologias
- Javascript
- HTML
- CSS
