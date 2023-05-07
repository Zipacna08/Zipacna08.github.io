document.querySelector("#entrada").focus();
var mensaje = document.querySelector("#salida");


function encriptar() {
    
    const frase = document.querySelector("#entrada").value.toLowerCase();

    var textoencriptado = frase.replace(/e/img, "enter")
    var textoencriptado = textoencriptado.replace(/i/img, "imes")
    var textoencriptado = textoencriptado.replace(/a/img, "ai")
    var textoencriptado = textoencriptado.replace(/o/img, "ober")
    var textoencriptado = textoencriptado.replace(/u/img, "ufat")
    
    mensaje.value = textoencriptado

    document.querySelector("#entrada").value = "";
}

function desencriptar() {

    const frase = document.querySelector("#entrada").value.toLowerCase();

    var textoencriptado = frase.replace(/enter/img, "e")
    var textoencriptado = textoencriptado.replace(/imes/img, "i")
    var textoencriptado = textoencriptado.replace(/ai/img, "a")
    var textoencriptado = textoencriptado.replace(/ober/img, "o")
    var textoencriptado = textoencriptado.replace(/ufat/img, "u")
    
    mensaje.value = textoencriptado

    document.querySelector("#entrada").value = "";
}

function copiar() {
    var salida = document.querySelector("#salida");
    salida.select();
    document.execCommand("copy");
    alert("El texto ha sido copiado al portapapeles.");

    document.querySelector("#salida").value = "";
    document.querySelector("#entrada").focus();
}

