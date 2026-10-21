const button = document.getElementById("loveButton");
const message = document.getElementById("message");
const note = document.getElementById("note");

const sweetMessages = [
  "You make ordinary moments feel special. ♡",
  "If kindness had a favorite face, it would be yours.",
  "A little sunshine, a little magic — that's your vibe. ✨",
  "Just in case nobody told you today: you're appreciated.",
  "Some smiles stay in our hearts long after the moment ends. 💗"
];

let lastIndex = -1;

button.addEventListener("click", () => {
  let nextIndex;
  do { nextIndex = Math.floor(Math.random() * sweetMessages.length); }
  while (sweetMessages.length > 1 && nextIndex === lastIndex);
  lastIndex = nextIndex;
  message.textContent = sweetMessages[nextIndex];
  note.textContent = "A tiny message, just for you ✨";
  makeHearts(7);
});

function makeHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.fontSize = `${14 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * 0.45}s`;
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}
