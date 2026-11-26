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
         <td>${sesion.mejorTiempo || "-"}</td>
         <td>${sesion.promedio || "-"}</td>
         <td>${sesion.goals}</td>
         `;

            tabla.appendChild(fila);

        });

        const tarjetaSesiones =
    document.getElementById("totalSesiones");

tarjetaSesiones.textContent = sesiones.length;

        const tarjetaMejorTiempo =
    document.getElementById("mejorTiempoGlobal");

const tiemposValidos = sesiones
    .map(s => Number(s.mejorTiempo))
    .filter(t => !isNaN(t) && t > 0);

if (tiemposValidos.length > 0) {

    tarjetaMejorTiempo.textContent =
        Math.min(...tiemposValidos);

} else {

    tarjetaMejorTiempo.textContent = "-";

}

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

        const tiempos = [

         Number(document.getElementById("rep1").value) || 0,
         Number(document.getElementById("rep2").value) || 0,
         Number(document.getElementById("rep3").value) || 0,
         Number(document.getElementById("rep4").value) || 0,
         Number(document.getElementById("rep5").value) || 0,
         Number(document.getElementById("rep6").value) || 0,
         Number(document.getElementById("rep7").value) || 0,
         Number(document.getElementById("rep8").value) || 0

         ].filter(t => t > 0);

const mejorTiempo =
    tiempos.length > 0 ? Math.min(...tiempos) : "-";

const promedio =
    tiempos.length > 0
    ? (tiempos.reduce((a,b)=>a+b,0) / tiempos.length).toFixed(2)
    : "-";

const nuevaSesion = {
    fecha: fecha,
    residente: residente,
    ejercicio: ejercicio,
    mejorTiempo: mejorTiempo,
    promedio: promedio,
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
