/***************************PRIMER PRE-ENTREGA*************************************/
/************************Descripción del proyecto:*********************************/
/***Crear una Playlist y calcular la cantidad de canciones y la duración total ***/

/* 
 saludarUsuario();

 function saludarUsuario() {
     alert("Bienvenido, ¡Vamos a armar tu Playlist!");
 }

 let dato = prompt("Ingrese el nombre de una canción, para finalizar ingrese 0")

 let cancionTotal = 0
 let duracionTotal = 0

 while (dato !== '0') {
     cancionTotal ++
     duracionTotal += parseInt(prompt("Ingrese la duración de " + dato + " (en minutos)" ))
     dato = prompt("Ingrese el nombre de otra canción, presione 0 para salir")
 }

Con array. Permite Guardar el nombre

let lista = []

while (dato !== '0') {
    let cancion = {nombre: "", duracion: 0};
    cancion.nombre = dato;
    cancion.duracion = parseInt(prompt("Ingrese duración en minutos"));
    lista.push(cancion);
    dato = prompt("Ingrese el nombre de la canción");
}

console.table(lista)

for (let i = 0; i < lista.length; i++) {
    cancionTotal++
    duracionTotal += lista[i].duracion
}

calcularTiempo();

function calcularTiempo() {
let tiempo

if(duracionTotal <= 60) {
tiempo = "Es una Playlist corta"
}
else {
    tiempo = "Es una Playlist larga"
    }
    console.log("Tu Playlist tiene: " + cancionTotal + " canciones, y dura: " + duracionTotal + " minutos. " + tiempo )
}

Idea previa 

i = 0

let dato = prompt("Ingrese cantidad de canciones para agregar a tu Playlist")

while (i < dato) {
    let cancion = {nombre: "", duracion: 0};
    cancion.nombre = prompt("Ingrese el nombre de la canción");
    cancion.duracion = prompt("Ingrese duración en minutos")
    i++
    lista.push(cancion)
}
*/

/***************************SEGUNDA PRE-ENTREGA*************************************/
/************************Descripción del proyecto:*********************************/
/***Crear una Playlist y calcular la cantidad de canciones y la duración total ***/

/* Carga de Playlist */
const arrayPlaylist = [{nombreCancion: "Coma", artista: "STP"},
{nombreCancion: "Low", artista: "Cracker"}, {nombreCancion: "Atlanta", artista: "STP"},
{nombreCancion: "Rosier", artista: "Luna Sea"}, {nombreCancion: "Money", artista: "Pink Floyd"},];

class Playlist {
    constructor(nombreCancion, artista) {
        this.nombreCancion = nombreCancion;
        this.artista = artista;
    }
}

bienvenida();

/* Prueba Array 
const playlist1 = new Playlist("Coma", "STP");
const playlist2 = new Playlist("Low", "Cracker");
const playlist3 = new Playlist("Rosier", "Luna Sea");
const playlist4 = new Playlist("Atlanta", "STP");
arrayPlaylist.push(playlist1);
arrayPlaylist.push(playlist2);
arrayPlaylist.push(playlist3);
arrayPlaylist.push(playlist4);
*/

/* Funciones */

function bienvenida() {
    let dato = parseInt(prompt("Bienvenido, elija una opción: \n" + "1- Ingresar canciones a tu lista. \n" +
    "2- Modificar tu lista. \n" + "3- Eliminar canciones. \n" + "4- Buscar una canción en tu Playlist. \n" + "5- Salir."));
    selector(dato);
    while(dato!=5){
        dato = parseInt(prompt("Cómo seguimos?: \n" + "1- Ingresar canciones a tu lista. \n" +
        "2- Modificar tu lista. \n" + "3- Eliminar canciones. \n" + "4- Buscar una canción en tu Playlist. \n" + "5- Salir."));
        selector(dato);
    }
 }

function agregarCancion() {
    let nombreCancion = prompt("Ingresa el nombre de tu canción ");
    let artista = prompt("Ingresa el nombre del artista ");
    let playlist = new Playlist(nombreCancion, artista);
    arrayPlaylist.push(playlist);
    console.table(arrayPlaylist);
}

function modificarCancion() {
    let nombreCancion = prompt("Ingresa el título de la canción que queres modificar: \n");
    let playlist = arrayPlaylist.find(playlist => playlist.nombreCancion.toLowerCase() === nombreCancion.toLowerCase());
    let indice = arrayPlaylist.indexOf(playlist);
    let nuevaCancion = new Playlist(prompt("Ingresa el título de la nueva canción: \n"), prompt("Ingresa el artista de la nueva canción: \n"));
    arrayPlaylist.splice(indice, 1, nuevaCancion);
    console.log(arrayPlaylist);
    console.table(arrayPlaylist);
}

function eliminarCancion() {
    let nombreCancion = prompt("Busquemos la canción, por favor ingresa el nombre");
    let playlist = arrayPlaylist.find(playlist => playlist.nombreCancion.toLowerCase() === nombreCancion.toLowerCase());
    let indice = arrayPlaylist.indexOf(playlist);
    arrayPlaylist.splice(indice, 1);
    console.log(nombreCancion + " se eliminó de tu Playlist!");
    console.log(arrayPlaylist);
    console.table(arrayPlaylist);
}

function buscarCancion() {
    let nombreCancion = prompt("Busquemos tu canción, ingresa el nombre");
    let playlist = arrayPlaylist.find(playlist => playlist.nombreCancion.toLowerCase() === nombreCancion.toLowerCase());
    if(playlist) {
        alert(playlist.nombreCancion + " de " + playlist.artista + " está en tu Playlist!");
    }
    else {
        alert("Esta canción no está en tu Playlist.");
    }
}

function salir() {
    alert ("¡Nos vemos! \n para ver tus resultados consulta la consola del navegador");
    console.log ("¡Nos vemos! \n Aquí están tus resultados: \n");
    if(arrayPlaylist == ''){
        console.log("Ups... no tienes una Playlist armada");
    }
    else {
        const tabla = document.getElementById('mostrarListas');
        tabla.innerHTML = '<ul>'
        arrayPlaylist.forEach( playlist => {
        tabla.innerHTML += `<li> ${playlist.nombreCancion} 
                     ${playlist.artista}</li>`;
        })
        tabla.innerHTML += '</ul>';
        console.table(arrayPlaylist);
    }
}

function selector(dato){
    switch (dato){
    case 1:
        agregarCancion();
        break;
    case 2:
        modificarCancion();
        break;
    case 3:
        eliminarCancion();
        break;
    case 4:
        buscarCancion();
        break;
    case 5:
        salir();
        break;           
    default:
        alert(`No se admite esta opción`);
        console.log(`No se admite esta opción`);
        break;     
}}


