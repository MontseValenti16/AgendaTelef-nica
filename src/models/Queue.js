import { Node } from "./Node.js";

export class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(nombre, telefono){
        let newNode = new Node(nombre, telefono);
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next= newNode;
            newNode.prev = this.last;
            this.last = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let nodoEliminado = this.last;
        this.last = this.last.next;
            if (this.last) {
            this.last.prev = null;
        } else {
            this.last = null;
        }
            return nodoEliminado;
    }
    

    peek(){
        if(this.isEmpty()){
            return null;
        }
        let value= this.first.value;
        return value;
    }

    isEmpty(){
        return this.first === null;
    }

    size(){
        let conta = 0;
        let current = this.first;
        while(current && current !== this.last){
        conta++;
        current = current.next;
    }
    return conta ++;
    }
}