let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    var saved=count;
    // 3. Render the variable in the saveEl using innerText
    document.getElementById('save-el').textContent+=" "+count+ " - ";
    // NB: Make sure to not delete the existing content of the paragraph
    
    document.getElementById('count-el').textContent="0";
    count=0;
}
``