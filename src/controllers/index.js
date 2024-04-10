import { Agenda } from "../models/Agenda.js";

const agenda = new Agenda();

document.getElementById("bt").addEventListener("click", function(){
    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("num").value;
    agenda.agregarContacto(nombre, telefono);
});

document.getElementById("btn").addEventListener("click", function() {
    const nombre = document.getElementById("name").value;
    const telefono = document.getElementById("num").value;
    agenda.eliminarContacto(nombre, telefono);
});

mostrarAgenda();

function mostrarAgenda() {
    const lista = document.getElementById("lista");
    lista.innerHTML = ""; 
    let current = agenda.agendaTel.first;
    while (current) {
        const item = document.createElement("div");
        item.textContent = `Nombre: ${current.nombre} - Teléfono: ${current.telefono}`;
        lista.appendChild(item);
        current = current.next;
    }
}
