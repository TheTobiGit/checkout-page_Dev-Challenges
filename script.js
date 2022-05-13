let count = 1;
let amtEl = document.getElementById("amt-el");

function increment() {
  count ++;
  amtEl.textContent = count;
}

function decrement() {
  count --;
  amtEl.textContent = count;
}