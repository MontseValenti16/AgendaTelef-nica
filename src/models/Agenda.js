
import { Queue } from "./Queue.js";

export class Agenda {
    constructor() {
        this.agendaTel = new Queue();
        this.contactListElement = document.getElementById("lista"); 
    }

    agregarContacto(nombre, telefono) {

        if (this.hasContact(telefono)) {
            alert("El contacto ya existe en la agenda.");
            return;
        }
    
        this.agendaTel.enqueue(nombre, telefono);
        this.actualizarList(); 
    }
    

    eliminarContacto(nombre, telefono) {
        let current = this.agendaTel.first;
        while (current) {
            if (current.nombre === nombre && current.telefono === telefono) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.agendaTel.first = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.agendaTel.last = current.prev;
                }
                break;
            }
            current = current.next;
        }
        this.actualizarList(); 
    }
    

    hasContact(telefono) {
        let current = this.agendaTel.first;
        while (current) {
            if (current.telefono === telefono) {
                return true; 
            }
            current = current.next;
        }
        return false;
    }
    

    actualizarList() {
        this.contactListElement.innerHTML = "";
        let current = this.agendaTel.first;
        while (current) {
            let contactItem = document.createElement("li");
            contactItem.textContent = `${current.nombre}: ${current.telefono}`;
            this.contactListElement.appendChild(contactItem);
            current = current.next;
        }
    }
}