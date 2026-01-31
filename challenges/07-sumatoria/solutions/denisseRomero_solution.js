/**
 * NOMBRE DEL RETO: [Sumatoria]
 * SOLUCIONADO POR: [Denisse Romero]
 */
function sumatoriaRango(a,b) {
  let inicio =Math.min(a ,b)// Esto sirve para obtener el valor menor entre a y b
  let fin = Math.max(a,b)// Esto sirve para obtener el valor mayor entre a y b
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total += i;
  }
  return total;
}

// Pruebas (esto sirve para verificar)
console.log(sumatoriaRango(2, 10));
