let $listaDeNumeros = document.querySelectorAll('.number');

document.querySelector("#respuestas").onclick = function () {
    calcularPromedio();
    calcularNumeroMayor();
    calcularNumeroMenor();
    numeroMasFrecuente();
}

function calcularPromedio() {
    let arrayDeNumeros = [];

    for (let i = 0; i < $listaDeNumeros.length; i++) {
        arrayDeNumeros.push(Number($listaDeNumeros[i].innerText));
    }

    let total = 0;

    for (i = 0; i < arrayDeNumeros.length; i++) {
        let elementoArray = arrayDeNumeros[i];
        total = total + elementoArray;
    }

    let contenidoEm = document.querySelector("#promedio");

    valorPromedio = total / arrayDeNumeros.length;

    contenidoEm.innerText = `El promedio es: ${valorPromedio}`;

}


function calcularNumeroMayor() {
    let numeroMayor;
    let comparador = 0;

    for (let i = 0; i < $listaDeNumeros.length; i++) {
        let numeroAnalizado = Number($listaDeNumeros[i].innerText);

        if (numeroAnalizado >= comparador) {
            numeroMayor = numeroAnalizado;
            comparador = numeroMayor;
        }
    }

    let contenidoEm = document.querySelector("#numero-mas-grande");

    contenidoEm.innerText = `El número más grande es: ${numeroMayor}`;
}


function calcularNumeroMenor() {
    let numeroMenor;
    let comparador = 1000000;

    for (let i = 0; i < $listaDeNumeros.length; i++) {
        let numeroAnalizado = Number($listaDeNumeros[i].innerText);

        if (numeroAnalizado <= comparador) {
            numeroMenor = numeroAnalizado;
            comparador = numeroMenor;
        }
    }

    let contenidoEm = document.querySelector("#numero-mas-chico");

    contenidoEm.innerText = `El número más chico es: ${numeroMenor}`;
}


function numeroMasFrecuente() {
    //let numeroAnalizado = Number($listaDeNumeros[i].innerText);
    let contador = 0;
    let arrayDeNumerosRepetidos = [];
    let arrayDeNumerosContadores = [];

    for (let i = 0; i < $listaDeNumeros.length; i++) {
        let primerElementoAnalizado = Number($listaDeNumeros[i].innerText);
        for (let j = 0; j < $listaDeNumeros.length; j++) {
            let segundoElementoAnalizado = Number($listaDeNumeros[j].innerText);
            if (primerElementoAnalizado == segundoElementoAnalizado) {
                contador++;
            }

        }

        if (contador > 1) {
            arrayDeNumerosContadores.push(contador);
            contador = 0;
            arrayDeNumerosRepetidos.push(primerElementoAnalizado);
        }
        j = 0;
        contador = 0;
    }

    let comparador = 1;
    let indice;
    for (i = 0; i < arrayDeNumerosContadores.length; i++) {
        let numero = arrayDeNumerosContadores[i];

        if (numero > comparador) {
            comparador = numero;
            indice = i;
        }
    }

    let contenidoEm = document.querySelector("#numero-mas-frecuente");
    contenidoEm.innerText = `El número más frecuente es ${arrayDeNumerosRepetidos[indice]}`;

}
