// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

//Para comentar un párrafo de a una linea, se una ctrl+k+c y para descomentar ctrl+k+u
//Para comentar un párrafo completo /*...*/ se usa shift+alt+a

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var suma = 0
    for (var i=1; i<11; i++){
      suma = suma + i;
    }
    return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var pares = [];
  for (var i=0; i < array.length; i++){
    if ((array[i] % 2) === 0){
      pares.push(array[i]);
    }
  }
  return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var numAlCuadradro = [];
  for (var i=0; i < array.length; i++){
    numAlCuadradro.push(array[i]**2);
  }
  return numAlCuadradro;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var sumaTodo = 0;
  for (var i=0; i < array.length; i++){
    sumaTodo = sumaTodo + array[i];
  }
  return sumaTodo;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
