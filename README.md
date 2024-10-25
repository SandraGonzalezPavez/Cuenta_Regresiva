1. Variables
let regresiva: Aquí se declara una variable llamada regresiva que se usará para almacenar el temporizador.
let tiempoRestante: Esta variable guarda cuánto tiempo queda en segundos.
2. Función Inicio()
¿Qué hace?: Comienza la cuenta regresiva.
Pasos:
Toma los valores de horas, minutos y segundos que el usuario ingresó.
Convierte todo a segundos (por ejemplo, 1 hora = 3600 segundos).
Si hay tiempo (más de 0 segundos), inicia el temporizador y llama a actualizaTiempo() cada segundo.
3. Función actualizaTiempo()
¿Qué hace?: Actualiza el tiempo que queda.
Pasos:
Primero, verifica si tiempoRestante es menor o igual a 0. Si es así, detiene el temporizador, muestra un mensaje de que el tiempo ha terminado y llama a resetearRegresiva().
Si aún hay tiempo, calcula cuántas horas, minutos y segundos quedan.
Muestra el tiempo en la pantalla (con dos dígitos, como "02" en lugar de "2").
Finalmente, resta 1 segundo de tiempoRestante.
4. Función cancelarRegresiva()
¿Qué hace?: Detiene la cuenta regresiva cuando el usuario presiona el botón de cancelar.
Pasos:
Detiene el temporizador y llama a resetearRegresiva() para limpiar todo.
5. Función resetearRegresiva()
¿Qué hace?: Limpia el reloj y los campos de entrada.
Pasos:
Restablece el tiempo mostrado en pantalla a "00:00:00".
Vacía los campos donde el usuario ingresó horas, minutos y segundos.
6. Escuchadores de Eventos
document.querySelector(".btn-primary").addEventListener("click", Inicio);: Cuando el usuario hace clic en el botón "Empezar", se llama a la función Inicio().
document.querySelector(".btn-danger").addEventListener("click", cancelarRegresiva);: Cuando el usuario hace clic en el botón "Cancelar", se llama a cancelarRegresiva().
Resumen
Todo el código: Se encarga de que el usuario pueda ingresar un tiempo, iniciar un temporizador que cuenta hacia atrás, mostrar el tiempo que queda, y detenerse cuando el tiempo se acaba o cuando el usuario decide cancelarlo.
