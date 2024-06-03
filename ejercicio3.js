
function generarSecuencia() {
  let secuencia = [];
  let numero = 1;
  let limite = 100; 

  while (numero <= limite) {
    secuencia.push(numero);
    numero++;
  }

  return secuencia;
}

var secuencia = generarSecuencia();

console.log( secuencia.join(", ")); 


    