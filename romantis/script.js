// Memunculkan elemen saat discroll (Scroll Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Seberapa cepat elemen muncul sebelum masuk viewport

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal(); // Panggil sekali saat load

// Interaksi Tombol Lucu
const btn = document.getElementById('clickMeBtn');
const msg = document.getElementById('hidden-message');

btn.addEventListener('click', () => {
    msg.style.display = 'block';
    btn.style.display = 'none'; // Sembunyikan tombol setelah diklik
    createConfetti(); // Panggil efek hati meledak
});

// Efek Latar Belakang (Hati Melayang)
function createFloatingHearts() {
    const container = document.getElementById('floating-elements');
    const elements = ['🌸', '💖', '✨', '☁️'];
    
    setInterval(() => {
        const el = document.createElement('div');
        el.innerText = elements[Math.floor(Math.random() * elements.length)];
        el.style.position = 'absolute';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.bottom = '-50px';
        el.style.fontSize = Math.random() * 20 + 10 + 'px';
        el.style.opacity = Math.random() * 0.5 + 0.3; // Transparan
        el.style.transition = 'transform 10s linear, opacity 10s linear';
        el.style.zIndex = '0';
        
        container.appendChild(el);

        // Animasikan ke atas
        setTimeout(() => {
            el.style.transform = `translateY(-120vh) rotate(${Math.random() * 360}deg)`;
            el.style.opacity = '0';
        }, 50);

        // Hapus elemen setelah selesai melayang
        setTimeout(() => {
            el.remove();
        }, 10000);

    }, 800); // Munculkan elemen baru setiap 0.8 detik
}

createFloatingHearts();

// Efek Confetti Hati saat tombol diklik
function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        // Sebar ke arah acak
        let angle = Math.random() * Math.PI * 2;
        let velocity = Math.random() * 15 + 5;
        let tx = Math.cos(angle) * velocity * 20;
        let ty = Math.sin(angle) * velocity * 20;
        
        heart.style.transition = 'all 1s ease-out';
        heart.style.transform = `translate(-50%, -50%)`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0)`;
            heart.style.opacity = '0';
        }, 50);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}