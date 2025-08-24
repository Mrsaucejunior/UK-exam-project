document.addEventListener("DOMContentLoaded", function() {
    const praise = document.getElementById('praise');
    const username = localStorage.getItem("username");
    praise.textContent = `🎉 Congratulations 🎉 ${username}`;

    // Confetti animation
    const confettiCanvas = document.getElementById("confetti");
    const ctx = confettiCanvas.getContext("2d");

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confettiPieces = Array.from({ length: 150 }, () => ({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 50 + 50,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.random() * 10 - 10
    }));

    function drawConfetti() {
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

      confettiPieces.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.y += p.d / 50;
        p.x += Math.sin(p.tilt);

        if (p.y > confettiCanvas.height) {
          p.y = -10;
          p.x = Math.random() * confettiCanvas.width;
        }
      });

      requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
});