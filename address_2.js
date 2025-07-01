const message2 = document.getElementById('message-2');

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

function showMessage_2() {
  if (i == 4) {
    i = 0;
  }
  message2.textContent = messages[i];
  message2.style.backgroundColor = bgColors[i];
  i++;
}

setInterval(showMessage_2, 2000);