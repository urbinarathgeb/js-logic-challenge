/**
 * NOMBRE DEL RETO: [calculadora de notas]
 * SOLUCIONADO POR: [Denisse Romero]
 */

  // ESCRIBE TU CÓDIGO AQUÍ
function evaluarNota(nota) {
  if (nota >= 90 && nota <= 100) {
    return "A";
  } else if (nota >= 80 && nota < 90) {
    return "B";
  } else if (nota >= 70 && nota < 80) {
    return "C";
  } else if (nota >= 60 && nota < 70) {
    return "D";
  } else if (nota < 60) {
    return "F";
  }
}

// Pruebas (esto sirve para verificar)
console.log(evaluarNota(100));
console.log(evaluarNota(85));
console.log(evaluarNota(75));
console.log(evaluarNota(65));
console.log(evaluarNota(55));