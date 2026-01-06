class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; 
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; 
        }
        this.size++;
    }

    insertAtHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; 
        }
        this.size++;
    }

    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }
}
