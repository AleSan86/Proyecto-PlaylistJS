/* Sweet Alert */
const boton = document.getElementById("botonInfo");
boton.addEventListener("click", () => {
    Swal.fire({
        icon: 'warning',
        title: 'Descripción del proyecto',
        text: 'Crear y administrar Playlists y realizar distintos calculos informátivos para el usuario',
        backdrop: 'rgba(255, 255, 255, 0.3)'
    })
})

function mostrarAlert() {
  Swal.fire({
    title: 'Está canción ya se encuentra en tu Playlist',
    timer: 2000,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}

/* Toastify */
function llamarToastQuitar() {
  Toastify({
      text: "Canción eliminada",
      duration: 3000,
      className: "info",
      position: "right",
      gravity: "bottom",
      stopOnFocus: true,
      offset: {
        x: 50,
        y: 10
      },
      style: {
        background: "linear-gradient(to right, #FBAB7E, #F7CE68)",
      }
    }).showToast();
}

function llamarToastAgregar() {
  Toastify({
      text: "Canción agregada",
      duration: 3000,
      className: "info",
      position: "right",
      gravity: "bottom",
      stopOnFocus: true,
      offset: {
        x: 50,
        y: 10
      },
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
}
