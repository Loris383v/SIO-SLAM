window.addEventListener("scroll", function() {
    const backTopBtn = document.getElementById("backTopBtn");
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const opacity = scrollPosition / (documentHeight - windowHeight);

    backTopBtn.style.opacity = opacity;

    if (scrollPosition > 100) {
        backTopBtn.style.display = "block"; // Affiche le bouton quand on descend
    } else {
        backTopBtn.style.display = "none";  // Masque le bouton quand on est tout en haut
    }
});

// Animation de retour en haut avec défilement fluide
document.getElementById("backTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,                      // Défilement jusqu'en haut de la page
        behavior: "smooth"           // L'effet de défilement fluide
        
    });
});
