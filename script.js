/* =====================================================
   ÚPRAVY OBSAHU – měňte jen tuto horní část souboru
   ===================================================== */

// CENÍK: přidejte / smažte / upravte řádek { sluzba: "...", cena: "..." }
const CENIK = [
  { sluzba: "Výměna displeje",        cena: "od 990 Kč" },
  { sluzba: "Výměna baterie",         cena: "od 490 Kč" },
  { sluzba: "Výměna konektoru nabíjení", cena: "od 590 Kč" },
  { sluzba: "Výměna zadního skla",    cena: "od 690 Kč" },
  { sluzba: "Oprava po zalití",       cena: "od 390 Kč" },
  { sluzba: "Diagnostika",            cena: "zdarma" },
];

// BAZAR: každý inzerát je jeden blok { ... }. Smazáním bloku inzerát zmizí.
// foto: název souboru ve složce (např. "img/iphone12.jpg") nebo "" pro žádnou fotku
const BAZAR = [
  { nazev: "iPhone 12 128 GB", popis: "Černý, baterie 88 %, záruka 6 měsíců", cena: "8 990 Kč", foto: "" },
  { nazev: "Samsung Galaxy S21", popis: "Stav jako nový, včetně nabíječky",   cena: "6 490 Kč", foto: "" },
  { nazev: "Xiaomi Redmi Note 11", popis: "64 GB, drobné škrábance",          cena: "2 990 Kč", foto: "" },
];

// LOKALITA A KONTAKT
const ADRESA = "Ulice 123, Město, PSČ – Po–Pá 9:00–17:00";
const KONTAKT = {
  telefon: "+420 123 456 789",
  email: "info@fixphone.cz",
};

/* =====================================================
   Níže už nic upravovat nemusíte
   ===================================================== */

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

document.getElementById("cenik-list").innerHTML = CENIK
  .map(r => `<div class="price-row"><span>${esc(r.sluzba)}</span><b>${esc(r.cena)}</b></div>`).join("");

document.getElementById("bazar-list").innerHTML = BAZAR.length
  ? BAZAR.map(i => `
    <article class="card">
      ${i.foto ? `<img src="${esc(i.foto)}" alt="${esc(i.nazev)}">` : `<div class="noimg"></div>`}
      <div class="body">
        <h3>${esc(i.nazev)}</h3>
        <p>${esc(i.popis)}</p>
        <div class="price">${esc(i.cena)}</div>
      </div>
    </article>`).join("")
  : `<p class="empty">Momentálně nemáme žádné inzeráty.</p>`;

document.getElementById("adresa").textContent = ADRESA;

document.getElementById("kontakt-list").innerHTML = `
  <li>Telefon: <a href="tel:${esc(KONTAKT.telefon.replace(/\s/g, ""))}">${esc(KONTAKT.telefon)}</a></li>
  <li>E-mail: <a href="mailto:${esc(KONTAKT.email)}">${esc(KONTAKT.email)}</a></li>`;

// Zvýraznění aktivní sekce v navigaci
const links = [...document.querySelectorAll(".nav nav a")];
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  });
}, { threshold: 0.5 });
document.querySelectorAll("section").forEach(s => obs.observe(s));
