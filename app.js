document.addEventListener("DOMContentLoaded", () => {

    const botonGuardar = document.getElementById("guardarBtn");

    botonGuardar.addEventListener("click", () => {

        const tabla = document.querySelector("tbody");

        tabla.innerHTML += `
        <tr>
            <td>2026-11-25</td>
            <td>Belén</td>
            <td>PSQ1</td>
            <td>Pendiente</td>
        </tr>
        `;

        alert("Sesión registrada correctamente");

    });

});
