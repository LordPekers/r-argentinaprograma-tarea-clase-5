const $resultado = document.querySelector('#resultado');
let acumuladorDeTiempoTotalEnSegundos = 0;
let totalMinutos;
let minutosDeTodasLasClases = 0;
let cont = 0;


//Cada una de las sigu
document.querySelector("#cargar-clase-1").onclick = function () {
    totalMinutos = 0;
    let $horas = Number(document.querySelector("#horas-clase-1").value);       //colocar Number()
    let $minutos = Number(document.querySelector("#minutos-clase-1").value);   //solucionó un error
    let $segundos = Number(document.querySelector("#segundos-clase-1").value);
    conversionHaciaMinutos($horas, $minutos, $segundos);
    document.querySelector("#resultado1").value = Math.round(totalMinutos);

    return contarMinutosDeTodoasLasClases(totalMinutos);
}
document.querySelector("#cargar-clase-2").onclick = function () {
    totalMinutos = 0;
    let $horas = Number(document.querySelector("#horas-clase-2").value);
    let $minutos = Number(document.querySelector("#minutos-clase-2").value);
    let $segundos = Number(document.querySelector("#segundos-clase-2").value);
    conversionHaciaMinutos($horas, $minutos, $segundos);
    document.querySelector("#resultado2").value = Math.round(totalMinutos);

    return contarMinutosDeTodoasLasClases(totalMinutos);
}
document.querySelector("#cargar-clase-3").onclick = function () {
    totalMinutos = 0
    let $horas = Number(document.querySelector("#horas-clase-3").value);
    let $minutos = Number(document.querySelector("#minutos-clase-3").value);
    let $segundos = Number(document.querySelector("#segundos-clase-3").value);
    conversionHaciaMinutos($horas, $minutos, $segundos);
    document.querySelector("#resultado3").value = Math.round(totalMinutos);

    return contarMinutosDeTodoasLasClases(totalMinutos);
}
document.querySelector("#cargar-clase-4").onclick = function () {
    totalMinutos = 0;
    let $horas = Number(document.querySelector("#horas-clase-4").value);
    let $minutos = Number(document.querySelector("#minutos-clase-4").value);
    let $segundos = Number(document.querySelector("#segundos-clase-4").value);
    conversionHaciaMinutos($horas, $minutos, $segundos);
    document.querySelector("#resultado4").value = Math.round(totalMinutos);

    return contarMinutosDeTodoasLasClases(totalMinutos);
}
document.querySelector("#cargar-clase-5").onclick = function () {
    totalMinutos = 0;
    let $horas = Number(document.querySelector("#horas-clase-5").value);
    let $minutos = Number(document.querySelector("#minutos-clase-5").value);
    let $segundos = Number(document.querySelector("#segundos-clase-5").value);
    conversionHaciaMinutos($horas, $minutos, $segundos);
    document.querySelector("#resultado5").value = Math.round(totalMinutos);

    return contarMinutosDeTodoasLasClases(totalMinutos);

}

//Esta function se encarga de ejecutarse para pasar todo a minutos
function conversionHaciaMinutos($horas, $minutos, $segundos) {
    segundosDeLasHorasEnVideo = $horas * 3600;
    segundosDeLosMinutosEnVideo = $minutos * 60;
    acumuladorDeTiempoTotalEnSegundos = segundosDeLasHorasEnVideo + segundosDeLosMinutosEnVideo + $segundos;
    totalMinutos = acumuladorDeTiempoTotalEnSegundos / 60;
    return totalMinutos;
}

//Esta function lo que hace es procurar que el usuario rellene todos los campos,
//para recien ahí, ejecutar el resultado con "ejecutarElResultado()"
function contarMinutosDeTodoasLasClases(totalMinutos) {

    while (cont < 5) {
        minutosDeTodasLasClases = minutosDeTodasLasClases + totalMinutos;
        cont++;
        if (cont === 5) {
            return ejecutarElResultado(minutosDeTodasLasClases);
        }
        return;
    }

}

function ejecutarElResultado(minutosDeTodasLasClases) {
    let cociente;
    let resto;
    const DIVISOR = 60;

    //Estas variables, no tienen nada que ver con las hh, mm y ss anteriormente definidas
    let horas;
    let minutos;
    let segundos;
    cociente = minutosDeTodasLasClases / DIVISOR;
    resto = minutosDeTodasLasClases % DIVISOR;

    if (resto === 0) {
        horas = Math.trunc(cociente);
        minutos = 0;
        segundos = 0;
        $resultado.innerHTML = `El resultado de la suma es: ${horas} hh, ${minutos} mm, ${segundos} ss`;


    } else {
        horas = Math.trunc(cociente);
        minutos = Math.trunc(resto);
        segundos = (resto - minutos) * 60;
        segundos = Math.round(segundos);
        $resultado.innerHTML = `El resultado de la suma es: ${horas} hh, ${minutos} mm, ${segundos} ss`;

    }
}