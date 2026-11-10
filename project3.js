let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl);
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}
function save() {
    let countStr = count + " - ";
    saveEl.textContent = saveEl.textContent + countStr;
    console.log(saveEl.textContent);
    countEl.textContent = 0;
    count = 0;
}
save();