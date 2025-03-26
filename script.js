document.addEventListener("DOMContentLoaded", () => {
    const imageDan = document.querySelector(".image-content2 img");

    imageDan.addEventListener("mouseover", () => {
        imageDan.style.transform = "translateZ(20px) scale(1.1)"; // Sposta leggermente in avanti e ingrandisce
        imageDan.style.transition = "transform 0.3s ease";
        imageDan.style.filter = "drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.5))"; // Aggiunge un'ombra 3D
    });

    imageDan.addEventListener("mouseout", () => {
        imageDan.style.transform = "translateZ(0) scale(1)"; // Torna alla posizione originale
        imageDan.style.filter = "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"; // Rimuove l'ombra
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video-element");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                video.play(); // Avvia il video quando la sezione è visibile
            } else {
                video.pause(); // Ferma il video quando la sezione non è visibile
            }
        });
    });

    observer.observe(document.querySelector(".spazio-foto")); // Osserva la sezione
});
