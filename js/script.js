//Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//Constantes a cada botón
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");

let funcionEjercicioActual = null;

//Eventos
btnParImpar.addEventListener("click",function(){
  abrirModal("Número Par o Impar","Ingresa un número para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click",function(){
  abrirModal ("Mayor de Edad","Ingresa tu edad para saber si eres mayor de edad",verificarEdad);
});

function abrirModal (titulo, descripcion, funcionEjercicio){
  tituloModal.textContent = titulo;
  ejercicioModal.textContent = descripcion;
  respuesta.value = "";
  mensaje.textContent = "";
  funcionEjercicioActual = funcionEjercicio;
  modal.classList.add("activarModal");
}

btnCerrar.addEventListener("click",function(){
  modal.classList.remove("activarModal");
});

function verificarParImpar(){
  let numero = parseInt (respuesta.value);
  if (isNaN(numero)){
  mensaje.textContent = "Ingresa un número válido.";
  }
  else{
    mensaje.textContent = (numero % 2 === 0) ? "Es un número PAR" : "Es un número IMPAR";
  }
}


function verificarEdad(){
  let numero= parseInt(respuesta.value)

  if (isNaN(numero)){
    mensaje.textContent = "Ingresa tu edad.";
    }
    else{
      mensaje.textContent = (numero >=18) ? "Eres Mayor de edad" : "Eres menor de edad";
    }
}

btnVerificar.addEventListener("click",function(){
  if(funcionEjercicioActual){
    funcionEjercicioActual ();
  }
});

