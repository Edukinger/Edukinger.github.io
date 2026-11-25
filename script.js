const toast = document.getElementById("toast");
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.getElementById("open-gift").addEventListener("click", (event) => {
  const button = event.currentTarget;
  button.classList.add("open");
  document.getElementById("reveal-bear").classList.add("show");
  button.querySelector(".gift-hint").textContent = "¡Tu sorpresa está aquí! ♡";
  showToast("Un peluchito lleno de buenos deseos 🧸");
});

document.getElementById("open-letter").addEventListener("click", (event) => {
  const letter = document.getElementById("letter-content");
  letter.classList.toggle("show");
  event.currentTarget.textContent = letter.classList.contains("show")
    ? "Cerrar mi mensajito 💌" : "Leer mi mensajito 💌";
});

const wishes = [
  "Que hoy encuentres algo que te haga reír de verdad. 🌷",
  "Que tengas un día ligero, tranquilo y lleno de cosas bonitas. ☁️",
  "Que nunca te falten motivos para sentirte orgullosa de ti. ✨",
  "Que este pequeño detalle te recuerde que alguien te desea lo mejor. 🧸"
];
let wishIndex = 0;
document.getElementById("wish-button").addEventListener("click", () => {
  document.getElementById("wish-result").textContent = wishes[wishIndex % wishes.length];
  wishIndex++;
});
