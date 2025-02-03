document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("themeToggle");

    // Applique le mode enregistré dans localStorage sur toutes les pages
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    // Gère le changement de thème et le sauvegarde dans localStorage
    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", function () {
            if (this.checked) {
                document.body.classList.add("light-mode");
                localStorage.setItem("theme", "light");
            } else {
                document.body.classList.remove("light-mode");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});
