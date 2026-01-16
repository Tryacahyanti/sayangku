const noBtn = document.querySelector('.no-btn');
const music = document.getElementById('myMusic');

// Logika Tombol No Lari-Lari
function moveButton() {
    // Memaksa posisi menjadi fixed agar koordinat random bekerja 100%
    noBtn.style.position = 'fixed'; 

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Respon mouse dan sentuhan
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Mencegah klik 'tembus' sebelum lari
    moveButton();
});

// Logika Klik Yes: Putar Musik & Pindah Halaman
// Logika Klik Yes: Putar Musik & Pindah Halaman
function playAndGo() {
    const music = document.getElementById('myMusic');
    
    // Memaksa browser memutar musik saat ada interaksi (klik tombol Yes)
    music.play().then(() => {
        // Jika musik berhasil diputar, tunggu 0.5 detik baru pindah halaman
        setTimeout(() => {
            window.location.href = "yes.html";
        }, 500); 
    }).catch(error => {
        // Jika gagal (karena diblokir browser), tetap pindah halaman
        console.log("Musik diblokir browser:", error);
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
