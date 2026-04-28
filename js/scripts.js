const temas = [
  "css/style.css",
  "css/style2.css",
  "css/style3.css"
];

let indice = 0;

function cambiarTema() {
  const link = document.getElementById("tema");

  indice = (indice + 1) % temas.length;
  link.setAttribute("href", temas[indice]);
}