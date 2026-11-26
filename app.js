document.addEventListener("DOMContentLoaded", () => {

    const botonGuardar = document.getElementById("guardarBtn");

    botonGuardar.addEventListener("click", () => {

        const residente = document.querySelector("input[type='text']").value;
        const fecha = document.querySelector("input[type='date']").value;
        const ejercicio = document.querySelector("select").value;

        const tabla = document.querySelector("tbody");

        tabla.innerHTML += `
        <tr>
            <td>${fecha}</td>
            <td>${residente}</td>
            <td>${ejercicio}</td>
            <td>Pendiente</td>
        </tr>
        `;

        alert("Sesión registrada correctamente");

    });

});
