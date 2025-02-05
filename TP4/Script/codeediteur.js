document.querySelectorAll(".editable").forEach(container => {
    const textarea = container.querySelector(".codeEditor");
    const iframe = container.querySelector(".preview");
    const resetButton = container.querySelector(".resetButton");
    const copyButton = container.querySelector(".copyButton");
    let timeout = null;
    const initialCode = textarea.value; // Stocke le code initial

    function updatePreview() {
        // Utilisation de DOMPurify pour nettoyer le code, en autorisant certaines balises HTML uniquement
        const safeCode = DOMPurify.sanitize(textarea.value, {
            ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'b', 'i', 'u', 'a', 'q', 'strong', 'em', 'ul', 'ol', 'li', 'blockquote', 'br', 'cite', 'dl', 'dt', 'dd', 'pre', 'hr', 'sup', 'sub', 'ins', 's', 'del', 'small', 'bdo', 'dfn', 'abbr', 'code', 'var', 'samp', 'kbd', 'time', 'mark', 'meter', 'progress', 'summary', 'details'] // Liste des balises autorisées
        });

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(safeCode);
        iframe.contentWindow.document.close();
    }

    // Mise à jour avec un délai de 0.3s après la dernière modification
    textarea.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(updatePreview, 300);
    });

    // Réinitialisation du code
    resetButton.addEventListener("click", () => {
        textarea.value = initialCode;
        updatePreview();
    });

    // Copier le code dans le presse-papiers
    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(textarea.value);
    });

    // Chargement initial
    updatePreview();
});
