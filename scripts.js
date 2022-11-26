/* 
Descripción del proyecto:
Crear una Playlist y calcular la cantidad de canciones y la duración total 
*/

alert ("Bienvenido, ¡Vamos a armar tu Playlist!")

let dato = prompt("Ingrese canción, para finalizar ingrese 0")

let cancionTotal = 0
let duracionTotal = 0

while (dato !== '0') {
    cancionTotal ++
    duracionTotal += parseInt(prompt("Ingrese duración en minutos"))
    dato = prompt("Ingrese el nombre de la canción")
}

/* Con array. Guarda el nombre

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
*/

let tiempo

if(duracionTotal <= 60) {
    tiempo = "Tu Playlist es corta"
}
else {
    tiempo = "Tu Playlist es larga"
}

console.log("Tu Playlist tiene: " + cancionTotal + " canciones, y dura: " + duracionTotal + " minutos. " + tiempo )

/* Idea previa 

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

