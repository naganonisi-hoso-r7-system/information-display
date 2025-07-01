const message1 = document.getElementById('message-1');

const messages = [
  'Good morning!',
  'Hello!',
  'Good evening!',
  'Good night!'
];

const bgColors = [
  'black'
];

let i = 0;

function showMessage_1() {
  if (i == 4) {
    i = 0;
  }
  message1.textContent = messages[i];
  message1.style.backgroundColor = bgColors[i];
  i++;
}

setInterval(showMessage_1, 2000);