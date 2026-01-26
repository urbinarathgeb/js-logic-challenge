/**
 * NOMBRE DEL RETO: [Par o Impar]
 * SOLUCIONADO POR: [Denisse Romero]
 */

// ESCRIBE TU CÓDIGO AQUÍ
function numeroPar(numero) {
  if (numero % 2 === 0) {
    return"par";
  } else {
    return"impar";
  }

}




// Pruebas (esto sirve para verificar)
console.log(numeroPar(4)); // Debe imprimir "par"
console.log(numeroPar(7)); // Debe imprimir "impar"
console.log(numeroPar(10)); // Debe imprimir "par"
