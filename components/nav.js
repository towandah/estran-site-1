/* ===================================
   Nav — Trail de l'Estran
   Injecte la nav dans #nav
   =================================== */

function loadNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const page = document.body.dataset.page || "";

  nav.innerHTML = `
    <ul>
      <li class="${page === "index" ? "nav-page-active" : ""}"><a href="index.html#header">Accueil</a></li>
      <li class="${page === "epreuves" ? "nav-page-active" : ""}"><a href="epreuves.html">Les épreuves</a></li>
      <li><a href="index.html#inscription">Inscription</a></li>
      <li><a href="index.html#infos">Infos pratiques</a></li>
      <li><a href="index.html#archives">Archives</a></li>
      <li><a href="index.html#partenaires">Partenaires</a></li>
      <li><a href="index.html#solidarite">Le challenge de la solidarité</a></li>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", loadNav);
