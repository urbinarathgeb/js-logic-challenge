/**
 * NOMBRE DEL RETO: [tablas de multiplicar]
 * SOLUCIONADO POR: [Denisse Romero]
 */

  // ESCRIBE TU CÓDIGO AQUÍ
function tablaMultiplicar(numero) {
  console.log("--- Tabla del " + numero + " ---");
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
}
   

// Pruebas (esto sirve para verificar)
tablaMultiplicar(5);
tablaMultiplicar(8);
tablaMultiplicar(10);