const cll = new CircularLinkedList();

const pseudoCodeMap = {
    insertHead: `
        <div id="line-ch1">Node newNode = new Node(val);</div>
        <div id="line-ch2">if (head == null) { head = tail = newNode; newNode.Next = head; }</div>
        <div id="line-ch3">else { newNode.Next = head; head = newNode; tail.Next = head; }</div>
    `,
    insertTail: `
        <div id="line-ct1">Node newNode = new Node(val);</div>
        <div id="line-ct2">if (head == null) { head = tail = newNode; newNode.Next = head; }</div>
        <div id="line-ct3">else { tail.Next = newNode; tail = newNode; tail.Next = head; }</div>
    `
};

function renderList() {
    const container = document.getElementById('visual-area');
    container.innerHTML = ""; 

    if (!cll.head) {
        container.innerHTML = "<p style='color: #94a3b8; width: 100%; text-align: center;'>Circular List is empty</p>";
        return;
    }

    let temp = cll.head;
    let nodesProcessed = 0;

    while (nodesProcessed < cll.size) {
        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'node';

   
        if (temp === cll.head) {
            const label = document.createElement('div');
            label.className = 'pointer-label';
            label.innerText = "HEAD";
            nodeWrapper.appendChild(label);
        }

        const nodeContent = document.createElement('div');
        nodeContent.className = 'node-content';
        nodeContent.id = `node-${temp.value}`;
        nodeContent.innerText = temp.value;
        nodeWrapper.appendChild(nodeContent);

        const arrow = document.createElement('div');
        arrow.className = 'arrow';
        arrow.innerHTML = (temp === cll.tail) ? "↺" : "→"; 
        nodeWrapper.appendChild(arrow);

        container.appendChild(nodeWrapper);
        temp = temp.next;
        nodesProcessed++;
    }
}

function updatePseudoCode(op) {
    document.getElementById('algo-title').innerText = "C# LOGIC: " + op.toUpperCase();
    document.getElementById('code-sidebar-content').innerHTML = pseudoCodeMap[op];
}

function highlightLine(lineId) {
    document.querySelectorAll('#code-sidebar-content div').forEach(div => div.classList.remove('active-line'));
    const line = document.getElementById(`line-${lineId}`);
    if (line) line.classList.add('active-line');
}

function sleep(ms = 600) { return new Promise(resolve => setTimeout(resolve, ms)); }