var formulario = document.querySelector("#form") /* Se le añade el id al html para poder hacer uso de él */

formulario.onsubmit = function(e) {

  e.preventDefault(); /* Es preventDefault pues queremos evitar que actue como un formulario por defecto, en cambio lo utilizaremos con acciones que queremos */
  
  /* No es muy buena práctica que se use solo una letra para los nombres
  esntonces ocuparemos los nombres como tal */
  var nombreForm = formulario.elements[0]
  var edadForm = formulario.elements[1]
  var nacionalidadForm = formulario.elements[2]
/* Dado que cambiamos el nombre de las variables se cambian las referencias */
  var nombre = nombreForm.value
  var edad = edadForm.value
/* Cambiamos nombre de i por uno nuevo*/
  var indiceNacionalidad = nacionalidadForm.selectedIndex
  var nacionalidad = nacionalidadForm.options[indiceNacionalidad].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  /* Vamos a cambiar el nombre de las variables  */
  if (nombre.length === 0) {
    nombreForm.classList.add("error"); /* faltan : */
  } else {
    nombreForm.classList.remove("error"); 
  }
  /* Verificamos la edad */
  if (edad < 18 || edad > 120) {
    edadForm.classList.add("error"); /* Falta ; */
  } else {
    edadForm.classList.remove("error");
  }
/* Siempre es mejor que las condicionales esten juntas para mejorar legibilidad */
if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); /* Falta ; */

  /* Sgregamos un formulario.reset para que se resetee */
  formulario.reset();
  }
}

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }
/* Faltan varios ; */
var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
/* el metodo es add no added */
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

/* Vamo a quitar esta parte pues lo tenemos abajo */
/* var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio) */

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}