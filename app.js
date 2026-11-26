document.addEventListener("DOMContentLoaded", () => {

    const botonGuardar = document.getElementById("guardarBtn");
    const tabla = document.querySelector("tbody");

    function cargarSesiones() {

        const sesiones =
            JSON.parse(localStorage.getItem("sesiones")) || [];

        tabla.innerHTML = "";

        sesiones.forEach((sesion) => {

            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${sesion.fecha}</td>
                <td>${sesion.residente}</td>
                <td>${sesion.ejercicio}</td>
                <td>${sesion.goals}</td>
            `;

            tabla.appendChild(fila);

        });

        if (sesiones.length === 0) {

            tabla.innerHTML = `
                <tr>
                    <td>Sin datos</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            `;
        }
    }

    cargarSesiones();

    botonGuardar.addEventListener("click", () => {

        const residente = document.querySelectorAll("input")[0].value;

        const fecha =
            document.querySelector("input[type='date']").value;

        const ejercicio =
            document.querySelectorAll("select")[1].value;

        const nuevaSesion = {
            fecha: fecha,
            residente: residente,
            ejercicio: ejercicio,
            goals: "Pendiente"
        };

        const sesiones =
            JSON.parse(localStorage.getItem("sesiones")) || [];

        sesiones.push(nuevaSesion);

        localStorage.setItem(
            "sesiones",
            JSON.stringify(sesiones)
        );

        cargarSesiones();

        alert("Sesión guardada correctamente");

    });

});