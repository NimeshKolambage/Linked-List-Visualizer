class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let head = null;

// Reverse logic
async function reverseAlgorithm() {
    let current = head;
    let prev = null;
    let next = null;

    highlightLine(1); await sleep();
    highlightLine(2); await sleep();

    while (current !== null) {
        highlightLine(3); 
        const el = document.getElementById(`node-${current.value}`);
        el.classList.add('highlight');
        await sleep();

        highlightLine(4);
        next = current.next;
        await sleep();

        highlightLine(5);
        current.next = prev;
        await sleep();

        highlightLine(6);
        prev = current;
        await sleep();

        highlightLine(7);
        current = next;
        el.classList.remove('highlight');
        await sleep();
    }
    head = prev;
    highlightLine(9);
}


