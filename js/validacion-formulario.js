const nombreInput = document.getElementById("nombre");
const apellidosInput = document.getElementById("apellidos");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const formulario = document.getElementById("formulario");


//Funcion para validar el nombre en base a una expresion regular que contenga espacios y un maxima de 15 letras, y  que muestre un mensaje de error si no se cumple
function validarNombre(){
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-Záéíóú][a-zA-Záéíóú\s]*$/;
    if(nombre.length <= 15 && nombrePattern.test(nombre)){
        nombreInput.classList.add("valido");
        nombreInput.classList.remove("invalido");
        document.getElementById("nombreError").textContent = " ";
    } else {
        nombreInput.classList.add("invalido");
        nombreInput.classList.remove("valido");
        document.getElementById("nombreError").textContent = "El nombre no debe superar los 15 carácteres";
    };
};
//Funcion para validar los apellidos en base a una expresion regular que contenga espacios y un maximo de 40 letras, y que muestre un mensaje de error si no se cumple
function validarApellidos(){
    const apellidos = apellidosInput.value;
    const apellidosPattern = /^[a-zA-Záéíóú][a-zA-Záéíóú\s]*$/;
    if(apellidos.length <= 40 && apellidosPattern.test(apellidos)){
        apellidosInput.classList.add("valido");
        apellidosInput.classList.remove("invalido");
        document.getElementById("apellidosError").textContent = " ";
    } else {
        apellidosInput.classList.add("invalido");
        apellidosInput.classList.remove("valido");
        document.getElementById("apellidosError").textContent = "Los apellidos no deben superar los 40 carácteres";
    };
};


//Funcion para validar el numero de telefono en base a una expresion regular que contenga solo 9 numeros, y que muestre un mensaje de error si no se cumple
function validarTelefono(){
    const telefono = telefonoInput.value;
    const telefonoPattern = /^\d{9}$/;
    if(telefonoPattern.test(telefono)){
        telefonoInput.classList.add("valido");
        telefonoInput.classList.remove("invalido");
        document.getElementById("telefonoError").textContent = " ";
    } else {
        telefonoInput.classList.add("invalido");
        telefonoInput.classList.remove("valido");
        document.getElementById("telefonoError").textContent = "El numero de telefono debe tener 9 números";
    };
};

//Funcion para validar el numero el correo electronico en base a una expresion regular que exige nombre@nombre.abreviatura solo 9 numeros que muestre un mensaje de error si no se cumple
function validarEmail(){
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(email)){
        emailInput.classList.add("valido");
        emailInput.classList.remove("invalido");
        document.getElementById("emailError").textContent = " ";
    } else {
        emailInput.classList.add("invalido");
        emailInput.classList.remove("valido");
        document.getElementById("emailError").textContent = "Ingrese un correo electronico válido";
    };
};

//Funcion para borrar el formulario una vez que todo es valido
function resetFormulario(){
    formulario.reset();
    nombreInput.classList.remove("valido");
    apellidosInput.classList.remove("valido");
    telefonoInput.classList.remove("valido");
    emailInput.classList.remove("valido");
}


//Evento que comprueba la validación correcta de cada campo de texto una vez que se escribe en él
nombreInput.addEventListener("input", validarNombre);
telefonoInput.addEventListener("input", validarTelefono);
apellidosInput.addEventListener("input", validarApellidos);
emailInput.addEventListener("input", validarEmail);


//Funcion mediante la cual se evita el envio si no están validados los cuatro campos de texto
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    validarNombre();
    validarApellidos();
    validarTelefono();
    validarEmail();
    
    //Condicion que muestra un mensaje de correcta si está todo valido y vacía lo rellenado
    if(nombreInput.classList.contains("valido") && apellidosInput.classList.contains("valido") && telefonoInput.classList.contains("valido") && emailInput.classList.contains("valido")){
        alert("Formulario enviado correctamente");
        resetFormulario();
    } else {
        alert("Por favor, corrija los errores en el formulario");
    };
});