let etiqueta  = document.getElementById("boton");
let foto = document.getElementById("foto");
let titulo = document.getElementById("titulo");
let audio = document.getElementById("audio");

etiqueta.addEventListener("click", perroGuardian);

    function perroGuardian(){
        foto.src="../img/gunsnroses.jpg";
        audio.src="audio/cancion2.mp3";
        titulo.textContent="cancion2"

        titulo.classList.add("display-1");
    }
