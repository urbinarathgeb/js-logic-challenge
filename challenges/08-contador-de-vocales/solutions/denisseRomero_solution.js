/**
 * NOMBRE DEL RETO: [Contador de vocales]
 * SOLUCIONADO POR: [Denisse Romero]
 */
function contarVocales(texto) {
  let contador = 0;
  // Convertimos todo a minúsculas para no tener que preguntar por "A" y "a" por separado
  let frase = texto.toLowerCase();
  
  // Definimos qué es una vocal, con o sin acento
  const vocales = "aeiouáéíóú"; 

  for (let i = 0; i < frase.length; i++) {
    // Si la letra actual está incluida en nuestro string de vocales, esta la suma al contador
    if (vocales.includes(frase[i])) {
      contador++;
    }
  }
  
  return contador;
}

// Prueba
console.log(contarVocales("Hola Mundo, esto es una prueba."));
console.log(contarVocales("arriba la programación!"));
console.log(contarVocales("Bootcamp de Full Stack JavaScript."));