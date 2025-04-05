//Constantes Modal
const modal = document.getElementById("modal");
const tituloModal = document.getElementById("tituloModal");
const ejercicioModal = document.getElementById("ejercicioModal");
const respuesta = document.getElementById("respuesta");
const btnVerificar = document.getElementById("verificar");
const mensaje = document.getElementById("mensaje");
const btnCerrar = document.getElementById("cerrar");

//CONSTANTES IMC
const IndiceMasaCorporal = document.getElementById("IndiceMasaCorporal");
const tituloImc = document.getElementById("tituloImc");
const ejercicioImc = document.getElementById("ejercicioImc");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura")
const btnCalcular= document.getElementById("calcular");
const resultado = document.getElementById("resultado")
const btnCerrarImc =document.getElementById("cerrarImc");

//Constantes calculadora
/* const Calculadora = document.getElementById("calculadora");
const TituloCalculadora = document.getElementById("TituloCalculadora")
const EjercicioCalculadora = document.getElementById("EjercicioCalculadora");
const Dato1 =document.getElementById("Dato1");
const Dato2 = document.getElementById("Dato2");
const Operacion = document.getElementById("Operacion")
const Calcular_datos =document.getElementById("calcular_datos");
 */



//Constantes a cada botón
const btnParImpar = document.getElementById("btnParImpar");
const btnMayorEdad = document.getElementById("btnMayorEdad");
const btnImc = document.getElementById("btnImc");
const btnCalculadora = document.getElementById("btnCalculadora");


let funcionEjercicioActual = null;

//Eventos
btnParImpar.addEventListener("click",function(){
  abrirModal("Número Par o Impar","Ingresa un número para verificar si es par o impar", verificarParImpar);
});

btnMayorEdad.addEventListener("click",function(){
  abrirModal ("Mayor de Edad","Ingresa tu edad para saber si eres mayor de edad",verificarEdad);
});

btnImc.addEventListener("click", function(){
  abrirImc("Calculadora Indice Masa Corporal", "Coloca tus datos",calcularImc);
});

/* btnCalculadora.addEventListener("click", function(){
  abrirCal("Calculadora Indice Masa Corporal", "Coloca tus datos",calcu);
});
 */
function abrirModal(titulo, descripcion, funcionEjercicio){
  tituloModal.textContent = titulo;
  ejercicioModal.textContent = descripcion;
  respuesta.value = "";
  mensaje.textContent = "";
  funcionEjercicioActual = funcionEjercicio;
  modal.classList.add("activarModal");
}

function abrirImc(titulo, descripcion, funcionEjercicio){
  tituloImc.textContent = titulo;
  EjercicioCalculadora.textContent = descripcion;
  peso.value = "";
  altura.value = "";
  resultado.textContent = " ";
  funcionEjercicioActual = funcionEjercicio;
  IndiceMasaCorporal.classList.add("activarImc");
}

function abriCal(){
  tituloImc.textContent = titulo;
  ejercicioImc.textContent = descripcion;
  Dato1.value = "";
  Dato2.value = "";
  Operacion.value ="";
  Calcular_datos.textContent = "";
  funcionEjercicioActual = funcionEjercicio;
  Calculadora.classList.add("activarCal");
}


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

function calcularImc(){
  let dtPeso=parseInt(peso.value);
  let dtAlt=parseInt(altura.value);

  if (dtPeso!="" && dtAlt!=""){

		//Calculamos el imc
		dtAlt=dtAlt/100;
		var imc=dtPeso/(dtAlt*dtAlt);


		var estado="";

		if (imc<18){
			estado="Peso Bajo";
		}
		else if(imc>=18 && imc<25){
			estado="Peso Normal";
		}
		else if(imc>=25 && imc<27){
			estado="Sobrepeso";
		}
		else if(imc>=27 && imc<30){
			estado="Obesidad grado I";
		}
		else if(imc>=30 && imc<40){
			estado="Obesidad grado II";
		}
		else {
			estado="Obesidad grado III";	
		}
    //Mostramos los resultados
    resultado.textContent = ("tienes: " + estado)
    console.log(resultado)
    	
	}
	else{
		resultado.textContent=("prueba");
	}
}



/* function calcu(){

  let n1= parseInt(Dato1.value);
  let n2 = parseInt(Dato2.value)
  let op = Operacion.value;
  let res= "";

    switch (op) {
      case "suma":
        res =n1+n2;
      break;
      
      case "resta":
          res =n1-n2;
      break;

      case "multiplicacion":
        res =n1+n2;
      break;

      case "division":
        res =n1/n2;
      break;
    
      default:
        alert("Ingresa una operacion valida")
        break;
    };
};
 */

btnVerificar.addEventListener("click",function(){
  if(funcionEjercicioActual){
    funcionEjercicioActual ();
  }
});

btnCerrar.addEventListener("click",function(){
  modal.classList.remove("activarModal");
});

btnCalcular.addEventListener("click",function(){
  if(funcionEjercicioActual){
    funcionEjercicioActual ();
  }
});

btnCerrarImc.addEventListener("click",function(){
  IndiceMasaCorporal.classList.remove("activarImc");
});

btnCerrarImc.addEventListener("click",function(){
  Calculadora.classList.remove("activarCal");
});



