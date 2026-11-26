document.addEventListener("DOMContentLoaded", () => {

    const botonGuardar = document.getElementById("guardarBtn");

    botonGuardar.addEventListener("click", () => {

        const tabla = document.querySelector("tbody");

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${new Date().toLocaleDateString()}</td>
            <td>Prueba</td>
            <td>PSQ1</td>
            <td>Pendiente</td>
        `;

        tabla.appendChild(fila);

        alert("Sesión registrada correctamente");

    });

});