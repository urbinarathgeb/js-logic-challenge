/**
 * NOMBRE DEL RETO: [mayor de tres]
 * SOLUCIONADO POR: [Denisse Romero]
 */

// ESCRIBE TU CÓDIGO AQUÍ

function numeroMayor(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  };
}

// Pruebas (esto sirve para verificar)
console.log(numeroMayor(50, 20, 15)); // Debe imprimir 50
console.log(numeroMayor(10, 30, 20)); // Debe imprimir 30
console.log(numeroMayor(15, 10, 25)); // Debe imprimir 25