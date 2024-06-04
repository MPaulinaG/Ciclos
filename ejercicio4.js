function fizzBuzz(numero) {
    for (let i = 1; i <= numero; i++) {
        let resultado = "";

        if (i % 3 === 0) {
            resultado += "Fizz";
        }
        if (i % 5 === 0) {
            resultado += "Buzz";
        }

        console.log(resultado || i);
    }
}


const numero = 20; 
fizzBuzz(numero);
