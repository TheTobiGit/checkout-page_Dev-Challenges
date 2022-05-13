let count1 = 1;
let count2 = 1;
let amtEl = document.getElementById("amt-el1");
let amtEl2 = document.getElementById("amt-el2");


function increment() {
  count1 ++;
  amtEl.textContent = count1;
}

function decrement() {
  count1 --;
  amtEl.textContent = count1;
}

function increment2() {
  count2 ++;
  amtEl2.textContent = count2;
}

function decrement2() {
  count2 --;
  amtEl2.textContent = count2;
}
