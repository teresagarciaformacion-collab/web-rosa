// 1. Buscamos el formulario
//const formulario = document.querySelector('form');

// 2. Escuchamos cuando se le da al botón de ACCESO
formulario.onsubmit = function(event) {
    event.preventDefault(); // Evita que la página se vuelva loca

    // Opcional: Aquí puedes poner un mensaje de "Entrando..."
    console.log("Validando datos rosa...");

    // 3. LA CONEXIÓN: Redirigir al otro archivo
    //window.location.href = "bienvenida.html";
}