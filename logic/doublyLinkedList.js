class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    insertAtHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    deleteValue(value) {
        if (!this.head) return false;
        let current = this.head;
        while (current) {
            if (current.value == value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                    else this.tail = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }
}
