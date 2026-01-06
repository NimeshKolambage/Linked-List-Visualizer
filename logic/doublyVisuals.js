const dll = new DoublyLinkedList();

function sleep(ms = 600) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function renderList() {
    const container = document.getElementById('visual-area');
    container.innerHTML = ""; 

    let temp = dll.head;
    if (!temp) {
        container.innerHTML = "<p style='color: #94a3b8; width: 100%; text-align: center;'>List is empty</p>";
        return;
    }

    while (temp) {
        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'node';

        if (temp === dll.head) {
            const headLabel = document.createElement('div');
            headLabel.className = 'pointer-label'; 
            headLabel.innerText = "HEAD";
            nodeWrapper.appendChild(headLabel);
        }

        if (temp.prev) {
            const prevArr = document.createElement('div');
            prevArr.className = 'arrow';
            prevArr.innerHTML = "←";
            nodeWrapper.appendChild(prevArr);
        } 

        const nodeContent = document.createElement('div');
        nodeContent.className = 'node-content';
        nodeContent.id = `node-${temp.value}`;
        nodeContent.innerText = temp.value;
        nodeWrapper.appendChild(nodeContent);

        if (temp.next) {
            const nextArr = document.createElement('div');
            nextArr.className = 'arrow';
            nextArr.innerHTML = "→";
            nodeWrapper.appendChild(nextArr);
        }

        container.appendChild(nodeWrapper);
        temp = temp.next;
    }
}

async function highlightNode(value, isFound = false) {
    const nodeEl = document.getElementById(`node-${value}`);
    if (nodeEl) {
        nodeEl.classList.add('highlight');
        await sleep();
        if (!isFound) nodeEl.classList.remove('highlight');
    }
}

function updateStatus(msg) {
    document.getElementById('status-text').innerText = "Status: " + msg;
}

const pseudoCodeMap = {
    insertHead: `
        <div id="line-ih1">Node newNode = new Node(val);</div>
        <div id="line-ih2">newNode.Next = head;</div>
        <div id="line-ih3">if (head != null) head.Prev = newNode;</div>
        <div id="line-ih4">head = newNode;</div>
    `,
    insertTail: `
        <div id="line-it1">Node newNode = new Node(val);</div>
        <div id="line-it2">if (head == null) { head = tail = newNode; }</div>
        <div id="line-it3">else { tail.Next = newNode; newNode.Prev = tail; }</div>
        <div id="line-it4">tail = newNode;</div>
    `,
    insertPosition: `
        <div id="line-ip1">Node newNode = new Node(val);</div>
        <div id="line-ip2">if (index == 0) { newNode.Next = head; head = newNode; }</div>
        <div id="line-ip3">Node temp = head; int count = 0;</div>
        <div id="line-ip4">while (temp != null && count < index - 1) {</div>
        <div id="line-ip5">&nbsp;&nbsp;temp = temp.Next; count++; }</div>
        <div id="line-ip6">newNode.Next = temp.Next; temp.Next = newNode;</div>
    `,
    search: `
        <div id="line-s1">Node temp = head;</div>
        <div id="line-s2">while (temp != null) {</div>
        <div id="line-s3">&nbsp;&nbsp;if (temp.Value == val) return true;</div>
        <div id="line-s4">&nbsp;&nbsp;temp = temp.Next; }</div>
        <div id="line-s5">return false;</div>
    `,
    delete: `
        <div id="line-d1">Node target = Search(val);</div>
        <div id="line-d2">if (target == head) head = target.Next;</div>
        <div id="line-d3">if (target.Prev != null) target.Prev.Next = target.Next;</div>
        <div id="line-d4">if (target.Next != null) target.Next.Prev = target.Prev;</div>
    `
};

function updatePseudoCode(op) {
    const container = document.getElementById('code-sidebar-content');
    const title = document.getElementById('algo-title');
    title.innerText = "C# LOGIC: " + op.toUpperCase();
    container.innerHTML = pseudoCodeMap[op]; 
}

function highlightLine(lineId) {
    
    document.querySelectorAll('#code-sidebar-content div').forEach(div => {
        div.classList.remove('active-line');
    });
    
   
    const line = document.getElementById(`line-${lineId}`);
    if (line) {
        line.classList.add('active-line');
    }
}