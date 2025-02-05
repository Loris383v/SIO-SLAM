document.addEventListener("DOMContentLoaded", function () {
    const tocContainer = document.getElementById("toc-container");
    const toggleBtn = document.getElementById("toggle-btn");
    const toc = document.getElementById("toc");

    toggleBtn.addEventListener("click", function () {
        tocContainer.classList.toggle("hidden");
    });

    function generateTOC() {
        const headers = document.querySelectorAll("h2, h3");
        headers.forEach(header => {
            const link = document.createElement("a");
            const id = header.textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprime les accents
                         .replace(/[^a-zA-Z0-9\-]/g, "") // Supprime les caractères non alphanumériques sauf "-"
                         .replace(/\s+/g, "-") // Remplace les espaces par "-"
                         .toLowerCase();

            header.id = id;
            link.href = "#" + id;
            link.textContent = header.textContent;
            link.className = header.tagName.toLowerCase();
            toc.appendChild(link);
        });
    }
    generateTOC();

    document.querySelectorAll("#toc a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});
