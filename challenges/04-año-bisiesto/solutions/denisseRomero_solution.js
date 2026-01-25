/**
 * NOMBRE DEL RETO: [año bisiesto]
 * SOLUCIONADO POR: [Denisse Romero]
 */

  // ESCRIBE TU CÓDIGO AQUÍ
  function anioBisiesto(anio) {

    if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
      return "Bisiesto";
    }
    return "no Bisiesto";
  }

 console.log(anioBisiesto(2026));