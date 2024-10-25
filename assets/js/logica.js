let regresiva;
let tiempoRestante;

function Inicio() {
    // Obtener valores de horas, minutos y segundos de los inputs
    let horas = parseInt(document.getElementById("numberInput1").value) || 0;
    let minutos = parseInt(document.getElementById("numberInput2").value) || 0;
    let segundos = parseInt(document.getElementById("numberInput3").value) || 0;

    // Convertir el tiempo a segundos
    tiempoRestante = horas * 3600 + minutos * 60 + segundos;

    // Iniciar el temporizador solo si el tiempo total es mayor a 0
    if (tiempoRestante > 0) {
        clearInterval(regresiva);
        regresiva = setInterval(actualizaTiempo, 1000); // Corrección: Llama a la función actualizaTiempo
    }
}

function actualizaTiempo() {
    if (tiempoRestante <= 0) {
        clearInterval(regresiva);
        alert("¡Tiempo terminado!");
        resetearRegresiva(); //cuando se termina el tiempo se resetea
        return;
    }

    // Calcular horas, minutos y segundos restantes
    let horas = Math.floor(tiempoRestante / 3600); // Corrección: utiliza tiempoRestante
    let minutos = Math.floor((tiempoRestante % 3600) / 60);
    let segundos = tiempoRestante % 60;

    // Mostrar en el formato de dos dígitos
    document.querySelector(".horas").textContent = horas.toString().padStart(2, "0");
    document.querySelector(".minutos").textContent = minutos.toString().padStart(2, "0");
    document.querySelector(".segundos").textContent = segundos.toString().padStart(2, "0");

    // Reducir el tiempo en 1 segundo
    tiempoRestante--;
}

function cancelarRegresiva() {
    clearInterval(regresiva); // Detiene el temporizador
    resetearRegresiva(); // Corrección: Llama a la función resetearRegresiva
}

function resetearRegresiva() {
    // Restablece la visualización del reloj a "00:00:00"
    document.querySelector(".horas").textContent = "00";
    document.querySelector(".minutos").textContent = "00";
    document.querySelector(".segundos").textContent = "00";

    // Limpia los campos de entrada
    document.getElementById("numberInput1").value = "";
    document.getElementById("numberInput2").value = "";
    document.getElementById("numberInput3").value = "";
}

// Event listeners para los botones
document.querySelector(".btn-primary").addEventListener("click", Inicio);
document.querySelector(".btn-danger").addEventListener("click", cancelarRegresiva);
