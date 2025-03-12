const technologies = ['c++', 'python', 'java', 'typescript', 'html', 'css', 'react', 'sql', 'mysql'];
let activeFilters = new Set();

function initFilters() {
    const container = document.getElementById('filters-container');
    technologies.forEach(tech => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.innerHTML = `<i class="devicon-${tech}-plain"></i>`;
        btn.onclick = () => toggleFilter(tech);
        container.appendChild(btn);
    });
}

function toggleFilter(tech) {
    const btn = event.target.closest('button');
    btn.classList.toggle('active');
    activeFilters.has(tech) ? activeFilters.delete(tech) : activeFilters.add(tech);
    filterCompetencies();
}

function filterCompetencies() {
    document.querySelectorAll('.competency-card').forEach(card => {
        const cardTechs = card.dataset.tech.split(',');
        const show = activeFilters.size === 0 || 
                     cardTechs.some(tech => activeFilters.has(tech));
        card.style.display = show ? 'block' : 'none';
    });
}

function toggleTheme() {
    document.body.setAttribute('data-theme',
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', document.body.getAttribute('data-theme'));
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });
    
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
});
function toggleProfile() {
    const modal = document.getElementById('profileModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

AOS.init({
    duration: 1000,
    once: true
});