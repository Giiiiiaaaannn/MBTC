const gift = document.getElementById("gift");
const message = document.getElementById("message");
const celebrateBtn = document.getElementById("celebrateBtn");

// Open the gift
gift.addEventListener("click", function () {

    message.style.display = "block";

    gift.style.transform = "scale(0.9)";
    
    createHearts(15);

    setTimeout(function () {
        message.scrollIntoView({
            behavior: "smooth"
        });
    }, 300);
});


// Celebrate button
celebrateBtn.addEventListener("click", function () {

    createHearts(30);

    alert("🎉 Happy Birthday, RYZA!🥰🎂💗");
});


// Create floating hearts
function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        const hearts = ["💗", "💕", "💖", "💓", "💝", "✨"];

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);
    }
}


// Automatically create a few hearts
setInterval(function () {
    createHearts(2);
}, 2500);