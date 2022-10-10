/**
 * Declaración de variables del formulario
 */
const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const mensaje = document.getElementById("mensaje");

//Variable para la expresión regular
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
//console.log(mensaje.value);
    console.log(mensaje.value.length);

//Validar Nombre
    if(!userName.value.trim() || !regUserName.test(userName.value)) {
        alert("Nombre invalido");
    }

//Validar Email
    if(!userEmail.value.trim() || !regUserEmail.test(userEmail.value)) {
        alert("Email invalido");
    }

//Validar Mensaje
    if(mensaje.value.length<1) {
        alert("Cantidad de caracteres no validos");
    }
    console.log("Los datos fueron enviados");

//Los datos fueron enviados
    alert("Los datos fueron enviados");
    
});