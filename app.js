document.addEventListener("DOMContentLoaded", () => {

    const botonGuardar = document.getElementById("guardarBtn");
    const tabla = document.querySelector("tbody");

    function cargarSesiones() {

        const sesiones =
            JSON.parse(localStorage.getItem("sesiones")) || [];

        tabla.innerHTML = "";

        sesiones.forEach((sesion) => {

            tabla.innerHTML += `
            <tr>
                <td>${sesion.fecha}</td>
                <td>${sesion.residente}</td>
                <td>${sesion.ejercicio}</td>
                <td>${sesion.goals}</td>
            </tr>
            `;

        });
