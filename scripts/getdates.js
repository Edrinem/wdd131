// JavaScript for dynamically updating dates in the footer

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in the footer
    const yearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Set last modified date in the footer
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }
});
