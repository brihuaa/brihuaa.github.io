// Highlight the project card based on the URL hash
window.addEventListener('DOMContentLoaded', () => {
    const projectId = window.location.hash.slice(1);
    if (projectId) {
        const projectCard = document.getElementById(projectId);
        if (projectCard) {
            projectCard.classList.add('highlight');
            projectCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

function redirectToProjects() {
    window.location.href = 'projects.html';
}

function redirectToStart() {
    window.location.href = 'index.html';
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Cargar las secciones de habilidades desde el archivo externo
fetch('partials/skills.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('skills-container').innerHTML = html;
    });

// Cargar los enlaces sociales desde el archivo externo
fetch('partials/social-links.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('social-links-container').innerHTML = html;
    });
