let currentLang = 'es';
const translations = {
    "title": {
        "es": "Competencias Técnicas - Adrián Brihuega",
        "en": "Technical Skills - Adrián Brihuega"
    },
    "skills_title": {
        "es": "💻 Competencias Técnicas",
        "en": "💻 Technical Skills"
    },
    "programming_languages": {
        "es": "🚀 Lenguajes de Programación",
        "en": "🚀 Programming Languages"
    },
    "web_development": {
        "es": "🌐 Desarrollo Web",
        "en": "🌐 Web Development"
    },
    "databases": {
        "es": "🗃️ Bases de Datos",
        "en": "🗃️ Databases"
    },
    "environments": {
        "es": "🔷 Entornos",
        "en": "🔷 Development Environments"
    },
    "cover_letter": {
        "es": "📊 Presentación",
        "en": "📊 Cover Letter"
    }
};

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[key][currentLang];
    });
    document.title = translations['title'][currentLang];
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });
    initFilters();
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    currentLang = localStorage.getItem('language') || 'es';
    document.querySelector('.language-toggle').textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
    updateContent();
});

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

function filterCompetencies() {
    document.querySelectorAll('.competency-card').forEach(card => {
        const cardTechs = card.dataset.tech.split(',');
        const show = activeFilters.size === 0 || 
                     cardTechs.some(tech => activeFilters.has(tech));
        card.style.display = show ? 'block' : 'none';
    });
}

function toggleFilter(tech) {
    const btn = event.target.closest('button');
    btn.classList.toggle('active');
    activeFilters.has(tech) ? activeFilters.delete(tech) : activeFilters.add(tech);
    filterCompetencies();
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLang);
    updateContent();
    document.querySelector('.language-toggle').textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
}

function toggleTheme() {
    document.body.setAttribute('data-theme',
        document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', document.body.getAttribute('data-theme'));
}

function redirectToCoverLetter() {
    window.location.href = 'coverletter.html';
}

function redirectToProjects() {
    window.location.href = 'projects.html';
}

function redirectToProject(language) {
    window.location.href = `projects.html#${language}`;
}

function redirectToPresentation() {
    window.location.href = 'presentation.html';
}

function redirectToStart() {
    window.location.href = 'coverletter.html';
}