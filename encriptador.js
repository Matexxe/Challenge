const btnEncriptar = document.querySelector(".btn-encriptador");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptador");

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
    swal("Error","El campo de texto no debe estar vacío", "error");
  }

    else if(texto !== txt){
        swal( "Error","No debe tener acentos ni carácteres especiales","error");
        txtEncriptar.value = "";
        
    }

    else if(texto !== texto.toLowerCase()){
       swal("Error", "El texto debe ser todo en minúscula", "error");
       txtEncriptar.value = "";
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
        txtEncriptar.value = "";
        swal("Bien", "Texto encriptado con éxito", "success");
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    swal("Bien", "Has desencriptado con éxito", "success");
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
         swal("Error", "El campo de texto no debe estar vacío", "error");
        
        
    }

    else if(texto !== txt){
         swal("Error", "No debe tener acentos y carácteres especiales", "error");
         txtEncriptar.value = "";
        
        
    }

    else if(texto !== texto.toLowerCase()){
        swal("Error", "El texto debe ser todo en minúscula", "error");
        txtEncriptar.value = "";
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerText = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove(); 
        txtEncriptar.value = "";
       
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
    swal("Bien", "Texto copiado en el portapapeles", "success");
});