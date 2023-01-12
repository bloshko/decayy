import './style.css';

function doSomething() {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = 'test';
  div.appendChild(p);
  div.classList.add('main-window');
  document.body.appendChild(div);
}

window.onload = doSomething;
