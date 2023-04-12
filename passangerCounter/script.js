/* `document.getElementById('count');` is selecting the HTML element with the `id`attribute of "count" and storing it in the `countEl` variable. */
let countEl = document.getElementById('count');
let saveEl = document.getElementById('saveEntries')
let count = 0;

function increment() {
    count = count + 1;
    countEl.textContent = count;
}
function save() {
    let countStr = count + '-';
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}