
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.classList.add('hamburger');
document.querySelector('header').appendChild(hamburger);

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('header nav');
  nav.classList.toggle('active');
});
