async function insertHead() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertHead');
    highlightLine('ch1'); await sleep(800);
    highlightLine('ch2'); await sleep(800);
    
    cll.insertAtHead(val);
    
    highlightLine('ch3');
    renderList();
    document.getElementById('nodeValue').value = '';
}

async function insertTail() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertTail');
    highlightLine('ct1'); await sleep(800);
    highlightLine('ct2'); await sleep(800);
    
    cll.insertAtTail(val);
    
    highlightLine('ct3');
    renderList();
    document.getElementById('nodeValue').value = '';
}

function clearAll() {
    cll.clear();
    renderList();
}