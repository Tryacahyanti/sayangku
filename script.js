const noBtn = document.querySelector('.no-btn');

function moveButton() {
    noBtn.style.position = 'fixed'; 
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});

// Logika Klik Yes: Putar Musik & Pindah Halaman
function playAndGo() {
    const music = document.getElementById('myMusic');
    
    // Memberikan perintah putar tepat saat klik tombol
    music.play().then(() => {
        // Jika berhasil putar, tunggu sebentar baru pindah halaman
        setTimeout(() => {
            window.location.href = "yes.html";
        }, 500); 
    }).catch(error => {
        // Jika autoplay diblokir, tetap pindah ke halaman ucapan
        console.log("Musik diblokir, pindah halaman...");
        window.location.href = "yes.html";
    });
}

// Efek Hujan Hati
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const icons = ['❤️', '💖', '🌸', '✨'];
    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);


