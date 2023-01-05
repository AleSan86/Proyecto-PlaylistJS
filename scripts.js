//import canciones from './songs.json' assert{type: 'json'};

const canciones = [{
    id: 1, title: "Like a Rolling Stone", artist: "Bob Dylan", album: "Highway 61 Revisited", year: "1965", img: "img/OnoMichio_logo.jpg"
},
{
    id: 2, title: "(I Can't Get No) Satisfaction", artist: "The Rolling Stones", album: "Out of Our Heads", year: "1965", img: "img/OnoMichio_logo3.jpg"
},
{
    id: 3, title: "Imagine", artist: "John Lennon", album: "Imagine", year: "1971", img: "img/Fish.gif"
},
{
    id: 4, title: "What's Going On", artist: "Marvin Gaye", album: "What's Going On", year: "1971", img: "img/Hellfish.png"
},
{
    id: 5, title: "Respect", artist: "Aretha Franklin", album: "I Never Loved a Man the Way I Love You", year: "1967", img: "img/OnoMichio_logo3.jpg"
},
{
    id: 6, title: "Johnny B. Goode", artist: "Chuck Berry", album: "The Anthology", year: "1958", img: "img/Krusty.png"
},
{
    id: 7, title: "Hey Jude", artist: "The Beatles", album: "Hey Jude", year: "1968", img: "img/Rasca y Pica.jpg"
},
{
    id: 8, title: "Sweet Emotion", artist: "Aerosmith", album: "Toys in the Attic", year: "1975", img: "img/OnoMichio_ Finish.PNG"
},
{
    id: 9, title: "In Bloom", artist: "Nirvana", album: "Nevermind", year: "1991", img: "img/OnoMichio _ups.PNG"
},
{
    id: 10, title: "Piano Man", artist: "Billy Joel", album: "Piano Man", year: "1973", img: "img/Hellfish.png"
},
{
    id: 11, title: "Blue Suede Shoes", artist: "Elvis Presley", album: "2nd to None", year: "1956", img: "img/Rasca y Pica.jpg"
},
{
    id: 12, title: "William", artist: "The Smiths", album: "Louder Than Bombs", year: "1984", img: "img/OnoMichio_logo.jpg"
},
{
    id: 13, title: "American Idiot", artist: "Green day", album: "American Idiot", year: "2004", img: "img/OnoMichio_ Finish.PNG"
},
{
    id: 14, title: "Smoke on the Water", artist: "Deep Purple", album: "Machine Head", year: "1972", img: "img/Fish.gif"
},
{
    id: 15, title: "New Year's Day", artist: "U2", album: "War", year: "1983", img: "img/OnoMichio_logo.jpg"
},
{
    id: 16, title: "Ramble On", artist: "Led Zeppelin", album: "Led Zeppelin II", year: "1969", img: "img/OnoMichio_logo3.jpg"
},
{
    id: 17, title: "Last Nite", artist: "The Strokes", album: "Is This It", year: "2001", img: "img/OnoMichio_logo3.jpg"
}
]

const playlist = [];

window.onload = (event) => {
    localStorage.setItem("canciones", JSON.stringify(canciones));
    localStorage.setItem("Tu Playlist", JSON.stringify(playlist));
};

//Modificamos el DOM mostrando las canciones: 
const contenedorCanciones = document.getElementById("contenedorCanciones");

/* Función para Mostrar canciones */
const mostrarCanciones = (canciones) => {
    
    contenedorCanciones.innerHTML = "";
    canciones.forEach( cancion => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                <div class="card">
                    <img src="${cancion.img}" class="card-img-top imgCanciones" alt="${cancion.title}">
                    <div class= "card-body">
                        <h5>${cancion.artist}</h5>
                        <p> ${cancion.year} </p>
                        <button class="btn btn-warning boton-agregar" id="boton${cancion.id}"> + </button>
                    </div>
                </div>
                        `
        contenedorCanciones.appendChild(card);

        const boton = document.getElementById(`boton${cancion.id}`);
        boton.addEventListener("click", () => {
            agregarCanciones(cancion.id);
        })
    })
}

mostrarCanciones(canciones);

/* Función para Agregar canciones */
const agregarCanciones = (id) => {
    const cancionesAgregadas = playlist.find(cancion => cancion.id === id);
    if(cancionesAgregadas) {
        mostrarAlert();
        console.log("¡Esta canción ya está en tu lista!");
    } else {
        const cancion = canciones.find(cancion => cancion.id === id);
        playlist.push(cancion);
        localStorage.setItem("Tu Playlist", JSON.stringify(playlist));
        renderPlaylist();
        llamarToastAgregar();
    }
}

const cancionesAgregadas = document.getElementById("selectCanciones");

/* Función para mostrar canciones agregadas */
function renderPlaylist() {
    cancionesAgregadas.innerHTML = "<ol class=estiloSelect>";
    playlist.forEach(c => {
        cancionesAgregadas.innerHTML += 
        `<li> ${c.title}  
        <button class="btn btn-sm badge text-bg-dark eliminar-cancion" id="${c.id}"> - </button>
        </li>`
    })
    cancionesAgregadas.innerHTML += "</ol>"
    const botones = document.querySelectorAll(".eliminar-cancion");
        botones.forEach( b => {
            b.addEventListener("click", () => {
            let id = b.id
            eliminarCancion(id);
        })
    })
}

/* Función para quitar canciones seleccionadas de la Playlist */
const eliminarCancion = (id) => {
    const cancionEliminada = playlist.find(cancion => cancion.id === parseInt(id));
    if(cancionEliminada) {
        const indice = playlist.indexOf(cancionEliminada);
        playlist.splice(indice, 1);
        localStorage.setItem("Tu Playlist", JSON.stringify(playlist));
        renderPlaylist();
        llamarToastQuitar();
    } 
    else {
        console.log("No hay nada para eliminar")
    }
}

/* Función para buscar canciones */
const resultado = document.getElementById("resultado");
const buscador = document.getElementById("buscador");

const filtrarBusqueda = () => {
    resultado.innerHTML = '';
    const texto = buscador.value.toLowerCase();

    for (let cancion of canciones){

        let nombreCancion = cancion.title.toLowerCase();

            if (nombreCancion.indexOf(texto) !== -1){
                const card = document.createElement("div");
                card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
                resultado.innerHTML += 
                `<div class="col-xl-3 col-md-6 col-sm-12">
                <div class="row">
                    <div class="card" id="resultado">
                        <div class="card-body">
                            <img src="${cancion.img}" class="card-img-top imgCanciones" alt="${cancion.title}">
                            <h5 class="card-title">${cancion.title}</h5>
                            <p class="card-title">de ${cancion.artist}</p>
                            <button class="btn btn-warning agregar-cancion" id="${cancion.id}"> + </button>
                        </div>
                    </div>
                    </div>
                </div>`
            }
        }
        const botones = document.querySelectorAll(".agregar-cancion");
        botones.forEach(b => {
            b.addEventListener("click", () => {
            let id = parseInt(b.id)
            agregarCanciones(id);
        })
    })

    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<h2>No hay resultados</h2>`
    }
}

buscador.addEventListener('keypress', event => {
    if (event.key === "Enter") {
    filtrarBusqueda();
    }
})
//filtrarBusqueda();

/* Filtrar por años */
const filtro = document.querySelectorAll(".filtro");
filtro.forEach(b => {
    b.addEventListener("click", () => {
    let anio = parseInt(b.id);
    //console.log(b.id);
    renderFiltro(anio);
    })
})

function renderFiltro(anio) {
    let filtro = [];

    switch(anio){
        case 60:
            filtro = canciones.filter(cancion => cancion.year < 1970);
            break;
        case 70:
            filtro = canciones.filter(cancion => cancion.year < 1980 && cancion.year >= 1970);
            break;
        case 80:
            filtro = canciones.filter(cancion => cancion.year < 1990 && cancion.year >= 1980);
            break;
        case 90:
            filtro = canciones.filter(cancion => cancion.year < 2000 && cancion.year >= 1990);
            break;
        case 20:
            filtro = canciones.filter(cancion => cancion.year > 1999);
            break;
        default:
            mostrarCanciones(canciones);
    }

    if (filtro.length > 0) {
        mostrarCanciones(filtro);
        filtro = []
    }else 
        mostrarCanciones(canciones);
}




















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
/*
let dato = bienvenida();

class Playlist {
    constructor(nombreCancion, artista) {
        this.nombreCancion = nombreCancion;
        this.artista = artista;
    }
}

Prueba Array 
const playlist1 = new Playlist("Coma", "STP");
const playlist2 = new Playlist("Low", "Cracker");
const playlist3 = new Playlist("Rosier", "Luna Sea");
const playlist4 = new Playlist("Atlanta", "STP");

const arrayPlaylist = [];

arrayPlaylist.push(playlist1);
arrayPlaylist.push(playlist2);
arrayPlaylist.push(playlist3);
arrayPlaylist.push(playlist4);

Funciones

function bienvenida() {
    let dato = parseInt(prompt("Bienvenido, elija una opción: \n" + "1- Ingresar canciones a tu lista \n" +
    "2- Modificar tu lista. \n" + "3- Eliminar canciones \n" + "4- Buscar una canción en tu Playlist. \n" + "5- Salir."));
    return dato;
 }

function agregarCancion() {
    let nombreCancion = prompt("Ingresa el nombre de tu canción ");
    let artista = prompt("Ingresa el nombre del artista ");
    let playlist = new Playlist(nombreCancion, artista);
    arrayPlaylist.push(playlist);
    console.table(arrayPlaylist);
}

function modificarCancion() {
    let artista = prompt("Busquemos al artista: \n - Ingresa el nombre");
    let playlist = arrayPlaylist.find(playlist => playlist.artista === artista);
    let indice = arrayPlaylist.indexOf(playlist);
    let nombreCancion = prompt("Ingresa el título de la canción: \n");
    let nuevaCancion = new Playlist(nombreCancion, artista);
    arrayPlaylist.splice(indice, 1, nuevaCancion);
    console.log(arrayPlaylist);
    console.table(arrayPlaylist);
}

function eliminarCancion() {
    let artista = prompt("Busquemos al artista: \n - Ingresa el nombre");
    let playlist = arrayPlaylist.find(playlist => playlist.artista === artista);
    let indice = arrayPlaylist.indexOf(playlist);
    arrayPlaylist.splice(indice, 1);
    console.log(arrayPlaylist);
    console.table(arrayPlaylist);
}

function buscarCancion() {
    let nombreCancion = prompt("Busquemos tu canción: \n - Ingresa el nombre");
    let playlist = arrayPlaylist.find(playlist => playlist.nombreCancion === nombreCancion);
    console.log(playlist);
}

function salir() {
    alert ("¡Nos vemos! \n para ver tus resultados consulta la consola del navegador");
    console.log ("¡Nos vemos! \n Aquí están tus resultados: \n");
    if(arrayPlaylist == ''){
        console.log("Ups... no tienes una Playlist armada");
    }
    else {
        console.table(arrayPlaylist);
        for (let playlist of arrayPlaylist){
            document.write("<table><tr><th>Artista:</th></table><p>"+playlist.artista+"</p>");
            document.write("<table><tr><th>Canción:</th></table><p>"+playlist.nombreCancion+"</p>");
        }
    }
}

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
        alert(`No se admite esta opción, ${dato} no se conoce.`);
        console.log(`No se admite esta opción, ${dato} no se conoce.`);
        break;     
}
*/



