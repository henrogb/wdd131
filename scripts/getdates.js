// Obter o ano atual dinamicamente
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = currentYear;

// Obter a data da última modificação do documento
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;
