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
const btnPositivoNegativo = document.getElementById("btnPositivoNegativo");
const btnCalificacion = document.getElementById("btnCalificacion");
const btnConteo = document.getElementById("btnConteo");
const btnTabla = document.getElementById("btnTabla");

let funcionEjercicioActual = null;

//Eventos
btnParImpar.addEventListener("click", function () {
  abrirModal(
    "Número Par o Impar",
    "Ingresa un número para verificar si es par o impar",
    verificarParImpar
  );
});

btnMayorEdad.addEventListener("click", function () {
  abrirModal(
    "Mayor de Edad",
    "Ingresa tu edad para saber si eres mayor de edad",
    verificarEdad
  );
});

btnPositivoNegativo.addEventListener("click", function () {
  abrirModal("Positivo o Negativo", "Ingresa un numero", NumPositivoNegativo);
});

btnCalificacion.addEventListener("click", function () {
  abrirModal(
    "Sistema de Calificaciones",
    "Ingresa tu nota de 1 a 10",
    Calificacion
  );
});

btnConteo.addEventListener("click", function () {
  abrirModal(
    "Conteo de numeros",
    "Coloca el numero hasta donde quieres contar",
    conteo
  );
});

btnTabla.addEventListener("click", function () {
  abrirModal(
    "Tablas de multiplicar",
    "Consulta la tabla de tu eleccion: ",
    Tabla
  );
});

function abrirModal(titulo, descripcion, funcionEjercicio) {
  tituloModal.textContent = titulo;
  ejercicioModal.textContent = descripcion;
  respuesta.value = "";
  mensaje.textContent = "";
  funcionEjercicioActual = funcionEjercicio;
  modal.classList.add("activarModal");
}

function verificarParImpar() {
  let numero = parseInt(respuesta.value);
  if (isNaN(numero)) {
    mensaje.textContent = "Ingresa un número válido.";
  } else {
    mensaje.textContent =
      numero % 2 === 0 ? "Es un número PAR" : "Es un número IMPAR";
  }
}

function verificarEdad() {
  let numero = parseInt(respuesta.value);

  if (isNaN(numero)) {
    mensaje.textContent = "Ingresa tu edad.";
  } else {
    mensaje.textContent =
      numero >= 18 ? "Eres Mayor de edad" : "Eres menor de edad";
  }
}

function NumPositivoNegativo() {
  let num = respuesta.value;
  if (isNaN(num)) {
    mensaje.textContent = "Ingresa un numero";
  } else {
    mensaje.textContent =
      num >= 0 ? "El numero es positivo" : "Numero es negativo";
  }
}

function Calificacion() {
  let calificacion = respuesta.value;

  if (calificacion < 5 && calificacion >= 0) {
    mensaje.textContent = "Calificación: Insuficiente";
  } else if (calificacion === 5) {
    mensaje.textContent = "Calificación: Suficiente";
  } else if (calificacion > 5 && calificacion <= 8) {
    mensaje.textContent = "Calificación: Bien";
  } else if (calificacion > 8 && calificacion <= 10) {
    mensaje.textContent = "Calificación: Excelente";
  } else {
    mensaje.textContent = "Calificación no valida";
  }
}

function conteo() {
  let numero = respuesta.value;
  let contador,
    res = "";

  for (contador = 1; contador < numero; contador++) {
    res += contador + " , ";
  }
  res += contador;
  mensaje.textContent = res;
}

function Tabla() {
  let dato = respuesta.value;
  let resultado,
    contador,
    prefijo,
    producto = " ";

  prefijo = "\n" + dato + " x " + "\n";
  for (contador = 1; contador <= 10; contador++) {
    producto = dato * contador;
    resultado += "\n" + prefijo + contador + " = " + producto + "\n" + "\n";
  }
  mensaje.textContent = "Tabla del " + dato + resultado;
}

btnVerificar.addEventListener("click", function () {
  if (funcionEjercicioActual) {
    funcionEjercicioActual();
  }
});

btnCerrar.addEventListener("click", function () {
  modal.classList.remove("activarModal");
});
