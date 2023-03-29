
let keystrokesCount = 0;
let lastKeyPressed = '';

document.addEventListener('keydown', (event) => {
  keystrokesCount++;
  lastKeyPressed = event.key.toUpperCase();
  
  document.getElementById('keystrokes').innerText = keystrokesCount;
  document.getElementById('last-key').innerText = lastKeyPressed;
});
