async function insertAtHead() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertHead');
    highlightLine('ih1'); await sleep();
    let newNode = new Node(val);

    highlightLine('ih2'); await sleep();
    newNode.next = head;

    highlightLine('ih3'); await sleep();
    head = newNode;

    document.getElementById('nodeValue').value = '';
    renderList();
    updateStatus(`Inserted ${val} at Head`);
}

async function insertAtTail() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertTail');
    highlightLine('it1'); await sleep();
    let newNode = new Node(val);

    if (!head) {
        highlightLine('it2'); await sleep();
        head = newNode;
    } else {
        highlightLine('it3'); await sleep();
        let temp = head;
        highlightLine('it4'); await sleep();
        while (temp.next) {
            highlightLine('it5'); await sleep();
            temp = temp.next;
        }
        highlightLine('it6'); await sleep();
        temp.next = newNode;
    }
    document.getElementById('nodeValue').value = '';
    renderList();
    updateStatus(`Inserted ${val} at Tail`);
}

async function insertAtPosition() {
    const val = document.getElementById('nodeValue').value;
    const index = parseInt(document.getElementById('nodeIndex').value);
    
    if (!val || isNaN(index) || index < 0) {
        updateStatus("Invalid input!");
        return;
    }
    
    updatePseudoCode('insertPosition');
    highlightLine('ip1'); await sleep();
    let newNode = new Node(val);

    if (index === 0) {
        highlightLine('ip2'); await sleep();
        newNode.next = head;
        head = newNode;
    } else {
        highlightLine('ip3'); await sleep();
        let temp = head;
        let count = 0;
        
        highlightLine('ip4'); await sleep();
        while (temp && count < index - 1) {
            highlightLine('ip5'); await sleep();
            temp = temp.next;
            count++;
        }

        if (temp) {
            highlightLine('ip6'); await sleep();
            newNode.next = temp.next;
            temp.next = newNode;
        } else {
            updateStatus(`Index ${index} out of range!`);
            return;
        }
    }
    document.getElementById('nodeValue').value = '';
    document.getElementById('nodeIndex').value = '';
    renderList();
    updateStatus(`Inserted ${val} at Index ${index}`);
}

async function deleteNode() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;
    
    updatePseudoCode('delete');
    highlightLine('d1'); await sleep();
    
    if (head && head.value == val) {
        head = head.next;
    } else {
        highlightLine('d2'); await sleep();
        let temp = head;
        
        highlightLine('d3'); await sleep();
        while (temp && temp.next) {
            highlightLine('d4'); await sleep();
            if (temp.next.value == val) {
                highlightLine('d5'); await sleep();
                temp.next = temp.next.next;
                break;
            }
            highlightLine('d6'); await sleep();
            temp = temp.next;
        }
    }
    document.getElementById('nodeValue').value = '';
    renderList();
    updateStatus(`Deleted ${val}`);
}

async function searchNode() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('search');
    updateStatus(`Searching for ${val}...`);
    
    let temp = head;
    highlightLine('s1'); await sleep();

    while(temp) {
        highlightLine('s2');
        const el = document.getElementById(`node-${temp.value}`);
        if (el) el.classList.add('highlight');
        await sleep();
        
        highlightLine('s3');
        if(temp.value == val) {
            updateStatus(`Found ${val}!`);
            return;
        }
        
        highlightLine('s4');
        if (el) el.classList.remove('highlight');
        temp = temp.next;
        await sleep();
    }
    
    highlightLine('s6');
    updateStatus(`${val} Not Found`);
}

async function reverseList() {
    updatePseudoCode('reverse');
    updateStatus("Reversing Linked List...");
    await reverseAlgorithm();
    renderList();
    updateStatus("Reverse Completed!");
}

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
