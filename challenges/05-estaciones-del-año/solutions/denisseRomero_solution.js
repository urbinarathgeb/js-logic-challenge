/**
 * NOMBRE DEL RETO: [estaciones del año]
 * SOLUCIONADO POR: [Denisse Romero]
 */

  // ESCRIBE TU CÓDIGO AQUÍ
function estacionesAnio(mes) {
  if (mes >= 1 && mes <= 3) {
    return "verano";
  } else if (mes >= 4 && mes <= 6) {
    return "otoño";
  } else if (mes >= 7 && mes <= 9) {
    return "invierno";
  } else if (mes >= 10 && mes <= 12) {
    return "primavera";
  } else {
    return "error";
  }
};

// Pruebas (esto sirve para verificar)
console.log(estacionesAnio(1));
console.log(estacionesAnio(10));
console.log(estacionesAnio(15));