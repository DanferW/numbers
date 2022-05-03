// Daniel Fernando Olivas Quintana
// #19550759
let numeros = [];

window.addEventListener("load", inicio);

function inicio(){
    // escuchadores para los botones
    var btnAgregar1 = document.getElementById("btnAgregar");
    btnAgregar1.addEventListener("click", agregarNum);

    var btnLista1 = document.getElementById("btnLista");
    btnLista1.addEventListener("click", mostrarLista);

    var btnBuscar1 = document.getElementById("btnBuscar");
    btnBuscar1.addEventListener("click", buscarNumero);

    var btnPares1 = document.getElementById("btnPares");
    btnPares1.addEventListener("click", mostrarPares);

    var btnNones1 = document.getElementById("btnNones");
    btnNones1.addEventListener("click", mostrarNones); 
}


function agregarNum(){
    let inpNumero1 = document.getElementById("inpNumero");
    // agregar numero a array
    numeros.push(inpNumero1.value);
    // resetear input y hacer focus
    inpNumero1.value = "";
    inpNumero1.focus();
}

function mostrarLista(){
    let divLista1 = document.getElementById("divLista");
    let cadena = '<ul>'
    // se recorre el array y se modifica la cadena para cada elemento
    numeros.forEach(element => cadena += '<li> ' + element);
    cadena += '</ul>'
    // se agrega el contenido de la cadena al div
    divLista1.innerHTML = cadena;
}

function buscarNumero(){
    let inpBuscar1 = document.getElementById("inpBuscar");
    let divBuscar1 = document.getElementById("divBuscar");
    
    // se comprueba que el número tecleado en el input esté en el array de números
    if (numeros.includes(inpBuscar1.value) == true) {
        // si se encuentra el número, lo muestra en el div
        divBuscar1.innerHTML = "Se encontró el número: " + inpBuscar1.value;
    } else {
        //si no encuentra el número, muestra en el div que no se encontró
        divBuscar1.innerHTML = "No se encontró el número " + inpBuscar1.value + " en la lista.";
    }

    // resetear input y hacer focus
    inpBuscar1.value = "";
    inpBuscar1.focus();
}

function mostrarPares(){
    let divPares1 = document.getElementById("divPares");
    let cadena = "<ul>";

    // se crea un arreglo con los números pares
    let pares = numeros.filter(element => element % 2 == 0);

    // se recorre el array y se modifica la cadena para cada elemento
    pares.forEach(element => cadena += '<li>' + element);

    divPares1.innerHTML = cadena;
}

function mostrarNones(){
    let divNones1 = document.getElementById("divNones");
    let cadena = "<ul>";

    // se crea un arreglo con los números impares, comprobando que el residuo al dividir
    // entre 2 sea distinto de 0
    let nones = numeros.filter(element => element % 2 != 0);

    // se recorre el array y se modifica la cadena para cada elemento
    nones.forEach(element => cadena += '<li>' + element);

    divNones1.innerHTML = cadena;
}


