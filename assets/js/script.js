function handleScrollFade() {
  const elements = document.querySelectorAll('.fade-scroll, .fade-scroll-delay, .fade-scroll-delay1, .fade-scroll-delay2, .fade-scroll-delay3');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const visible = rect.top < windowHeight && rect.bottom > windowHeight * 0.25;

    if (visible) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('DOMContentLoaded', handleScrollFade);
window.addEventListener('resize', handleScrollFade); // Tambahan untuk HP landscape/portrait

// === WHATSAPP CONTACT FORM ===
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const waNumber = "6281221447534"; // Ganti dengan nomor WA kamu
      const text = `Halo, saya *${name}* (${email}) ingin menghubungi Anda. Pesan:\n\n${message}`;
      const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

      window.open(url, "_blank");
    });
  }
});
