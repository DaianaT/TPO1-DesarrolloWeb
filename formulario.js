var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var teléfono = document.getElementById("teléfono");
var empresa = document.getElementById("empresa");
var mensaje = document.getElementById("mensaje");


function enviarFormulario () {


    if (nombre.value ===""){
        alert ("Ingrese por favor su nombre completo");
    }
        else if (email.value ===""){
        alert ("Ingrese por favor su correo electrónico");
    }
        else if (teléfono.value ===""){
        alert ("Ingrese por favor su número de teléfono");
    }
        else if (empresa.value ===""){
        alert ("Ingrese por favor el nombre de su Empresa/negocio");
    }
        else if (mensaje.value ===""){
        alert ("Ingrese por favor su mensaje");
    }
        else {
        alert ("El mensaje fue enviado");  
    }

    
}