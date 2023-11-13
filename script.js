AOS.init();



// Definir un array de preguntas con sus respuestas correctas
let preguntas = [
    { pregunta: "¿En que año empece a trabajar en GMS SA?", respuestaCorrecta: "2022" },
    { pregunta: "¿En que año deje de trabajar en Mobile - i - Business ?", respuestaCorrecta: "2022" },
    { pregunta: "¿En qué Universidad estudio?", respuestaCorrecta: "UADE" }
];

// Función para hacer una pregunta y verificar la respuesta
function hacerPregunta() {
    // Obtener un índice aleatorio dentro del rango del array de preguntas
    const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    
    // Obtener la pregunta y la respuesta correcta correspondiente al índice aleatorio
    const pregunta = preguntas[indiceAleatorio].pregunta;
    const respuestaCorrecta = preguntas[indiceAleatorio].respuestaCorrecta;

    // Hacer la pregunta
    const respuestaUsuario = prompt(pregunta);

    // Verificar la respuesta
    if (respuestaUsuario === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
    } else {
        alert(`Respuesta incorrecta. La respuesta correcta es: ${respuestaCorrecta}`);
    }
}

// Asignar la función a un botón
document.getElementById('botonPregunta').addEventListener('click', hacerPregunta);



