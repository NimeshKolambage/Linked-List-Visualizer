//Insert head
async function insertHead() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertHead'); 
    
    highlightLine('ih1'); await sleep(800); 
    highlightLine('ih2'); await sleep(800);
    
    dll.insertAtHead(val);
    
    highlightLine('ih3'); await sleep(800); 
    highlightLine('ih4'); 
    
    renderList(); 
    updateStatus(`Inserted ${val} at Head`);
    document.getElementById('nodeValue').value = '';
}

//Insert tail 
async function insertTail() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('insertTail');
    
    highlightLine('it1'); await sleep(800);
    highlightLine('it2'); await sleep(800);
    
    dll.insertAtTail(val);
    
    highlightLine('it3'); await sleep(800);
    highlightLine('it4');
    
    renderList();
    updateStatus(`Inserted ${val} at Tail`);
    document.getElementById('nodeValue').value = '';
}

//Search logic
async function runSearch() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('search');
    highlightLine('s1'); await sleep(800); 

    let temp = dll.head;
    while (temp) {
        highlightLine('s2'); await sleep(500); 
        await highlightNode(temp.value); 
        
        highlightLine('s3'); 
        if (temp.value == val) {
            await highlightNode(temp.value, true); 
            updateStatus(`Found ${val}!`);
            return;
        }
        
        highlightLine('s4'); await sleep(500); 
        temp = temp.next;
    }
    highlightLine('s5'); 
    updateStatus(`${val} not found in list.`);
}

//Delete vlue
async function runDelete() {
    const val = document.getElementById('nodeValue').value;
    if (!val) return;

    updatePseudoCode('delete');
    highlightLine('d1'); await sleep(800); 
    
    const success = dll.deleteValue(val);
    
    if (success) {
        highlightLine('d2'); await sleep(800);
        highlightLine('d3'); await sleep(800);
        highlightLine('d4');
        renderList();
        updateStatus(`Deleted ${val} from list.`);
    } else {
        updateStatus(`${val} not found.`);
    }
    document.getElementById('nodeValue').value = '';
}

//clear
function clearAll() {
    dll.clear();
    renderList();
    updateStatus("List cleared.");
    document.getElementById('code-sidebar-content').innerHTML = "<p>// Select an operation</p>";
}
async function addNode(val) {
    
    myList.insertAtTail(val); 
    renderList();

  
    await fetch(`${API_BASE_URL}/api/doubly/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: val })
    });
}