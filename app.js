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
         <td>${sesion.anio || "-"}</td>
         <td>${sesion.instructor || "-"}</td>
         <td>${sesion.ejercicio}</td>
         <td>${sesion.intentos || "-"}</td>
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
        
        const anio =
            document.querySelectorAll("select")[0].value;

        const instructor =
            document.querySelectorAll("input")[1].value;
        
            const fecha =
            document.querySelector("input[type='date']").value;

        const ejercicio =
            document.querySelectorAll("select")[1].value;

        function convertirASegundos(tiempo) {

    if (!tiempo) return 0;

    const partes = tiempo.split(":");

    if (partes.length !== 2) return 0;

    const minutos = parseInt(partes[0]);
    const segundos = parseInt(partes[1]);

    return (minutos * 60) + segundos;

}

const tiempos = [

convertirASegundos(document.getElementById("rep1").value),
convertirASegundos(document.getElementById("rep2").value),
convertirASegundos(document.getElementById("rep3").value),
convertirASegundos(document.getElementById("rep4").value),
convertirASegundos(document.getElementById("rep5").value),
convertirASegundos(document.getElementById("rep6").value),
convertirASegundos(document.getElementById("rep7").value),
convertirASegundos(document.getElementById("rep8").value)

].filter(t => t > 0);

function convertirAMMSS(segundos) {

    const minutos = Math.floor(segundos / 60);
    const restoSegundos = segundos % 60;

    return (
        String(minutos).padStart(2, "0") +
        ":" +
        String(restoSegundos).padStart(2, "0")
    );
}

const mejorTiempo =
    tiempos.length > 0
    ? convertirAMMSS(Math.min(...tiempos))
    : "-";


const intentos = tiempos.length;

const promedio =
    tiempos.length > 0
    ? (tiempos.reduce((a,b)=>a+b,0) / tiempos.length).toFixed(2)
    : "-";

const nuevaSesion = {
    fecha: fecha,
    residente: residente,
    anio: anio,
    instructor: instructor,
    ejercicio: ejercicio,
    intentos: intentos,
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
