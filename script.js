const scene = document.getElementById("scene");
const girl = document.getElementById("girl");
const giggle = document.getElementById("giggle");
const heartBurst = document.getElementById("heartBurst");
const gift = document.getElementById("gift");
const message = document.getElementById("message");
const celebrate = document.getElementById("celebrate");
const sceneHint = document.getElementById("sceneHint");

let givingTimer;

function playFlowerScene() {
  clearTimeout(givingTimer);

  scene.classList.remove("giving");
  giggle.classList.remove("show");
  heartBurst.classList.remove("show");

  // Restart CSS animations cleanly
  void scene.offsetWidth;

  scene.classList.add("giving");
  sceneHint.textContent = "💐 He's giving her the flowers...";

  // The girl reacts after the boy reaches her
  setTimeout(() => {
    giggle.classList.add("show");
    heartBurst.classList.add("show");
    sceneHint.textContent = "💗 She loves the flowers! Hehe~";
    createFloating("💕", 8);
  }, 1350);

  // Let the characters return to their starting positions
  givingTimer = setTimeout(() => {
    scene.classList.remove("giving");
    sceneHint.textContent = "💐 Watch the little surprise";
  }, 3200);
}

// Automatically repeat the little flower-giving scene
setInterval(playFlowerScene, 5000);
setTimeout(playFlowerScene, 700);

gift.addEventListener("click", () => {
  message.style.display = "block";
  createFloating("💗", 20);
  createFloating("✨", 15);

  setTimeout(() => {
    message.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 250);
});

celebrate.addEventListener("click", () => {
  createFloating("🎉", 15);
  createFloating("💖", 15);
  alert("🎉 Happy Birthday, RYZA!🥳🎂💗");
});

function createFloating(symbol, amount) {
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("div");
    item.className = "floating";
    item.textContent = symbol;
    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (18 + Math.random() * 18) + "px";
    item.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(item);

    setTimeout(() => item.remove(), 6000);
  }
}
