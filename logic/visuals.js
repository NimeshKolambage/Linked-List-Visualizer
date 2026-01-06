const sleep = () => {
    const speed = document.getElementById('speedSlider').value;
    return new Promise(resolve => setTimeout(resolve, speed));
};

//Status update(singly)
function updateStatus(msg) {
    document.getElementById('status-text').innerText = `Status: ${msg}`;
}

function highlightLine(lineId) {
    document.querySelectorAll('.code-sidebar div').forEach(el => el.classList.remove('active-line'));
    const line = document.getElementById(`line-${lineId}`);
    if (line) line.classList.add('active-line');
}

//Algorithm steps view(singly)
const algorithms = {
    insertHead: `
        <div id="line-ih1">newNode = new Node(val)</div>
        <div id="line-ih2">newNode.next = head</div>
        <div id="line-ih3">head = newNode</div>
    `,
    insertTail: `
        <div id="line-it1">newNode = new Node(val)</div>
        <div id="line-it2">if (head == null) head = newNode</div>
        <div id="line-it3">temp = head</div>
        <div id="line-it4">while (temp.next != null)</div>
        <div id="line-it5">&nbsp;&nbsp;temp = temp.next</div>
        <div id="line-it6">temp.next = newNode</div>
    `,
    insertPosition: `
        <div id="line-ip1">newNode = new Node(val)</div>
        <div id="line-ip2">if (index == 0) { newNode.next = head; head = newNode; }</div>
        <div id="line-ip3">temp = head, count = 0</div>
        <div id="line-ip4">while (temp && count < index - 1)</div>
        <div id="line-ip5">&nbsp;&nbsp;temp = temp.next; count++</div>
        <div id="line-ip6">newNode.next = temp.next; temp.next = newNode;</div>
    `,
    delete: `
        <div id="line-d1">if (head.value == val) head = head.next</div>
        <div id="line-d2">temp = head</div>
        <div id="line-d3">while (temp.next != null)</div>
        <div id="line-d4">&nbsp;&nbsp;if (temp.next.value == val)</div>
        <div id="line-d5">&nbsp;&nbsp;&nbsp;&nbsp;temp.next = temp.next.next; break</div>
        <div id="line-d6">&nbsp;&nbsp;temp = temp.next</div>
    `,
    search: `
        <div id="line-s1">temp = head</div>
        <div id="line-s2">while (temp != null) {</div>
        <div id="line-s3">&nbsp;&nbsp;if (temp.value == target) return found</div>
        <div id="line-s4">&nbsp;&nbsp;temp = temp.next</div>
        <div id="line-s5">}</div>
        <div id="line-s6">return not found</div>
    `,
    reverse: `
        <div id="line-1">current = head</div>
        <div id="line-2">prev = null</div>
        <div id="line-3">while (current != null) {</div>
        <div id="line-4">&nbsp;&nbsp;next = current.next</div>
        <div id="line-5">&nbsp;&nbsp;current.next = prev</div>
        <div id="line-6">&nbsp;&nbsp;prev = current</div>
        <div id="line-7">&nbsp;&nbsp;current = next</div>
        <div id="line-9">head = prev</div>
    `
};


function updatePseudoCode(operation) {
    const sidebar = document.getElementById('code-sidebar-content');
    if (algorithms[operation]) {
        sidebar.innerHTML = algorithms[operation];
    }
}

//Visual area (singly)
function renderList() {
    const visualArea = document.getElementById('visual-area');
    visualArea.innerHTML = '';
    
    let temp = head;
    while (temp !== null) {
        const nodeWrapper = document.createElement('div');
        nodeWrapper.className = 'node';
        
       
        let pointerHtml = (temp === head) ? '<span class="pointer-label">HEAD</span>' : '';

        nodeWrapper.innerHTML = `
            ${pointerHtml}
            <div class="node-content" id="node-${temp.value}">${temp.value}</div>
            <div class="arrow">${temp.next ? '→' : '→ <span style="color: #666">NULL</span>'}</div>
        `;
        
        visualArea.appendChild(nodeWrapper);
        temp = temp.next;
    }
}