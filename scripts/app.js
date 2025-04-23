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
    },
    "projects": {
        "es": "📁 Proyectos",
        "en": "📁 Projects"
    },
    "projects_title": {
        "es": "📁 Proyectos",
        "en": "📁 Projects"
    },
    "cpp_project_title": {
        "es": "Proyecto en C++",
        "en": "C++ Project"
    },
    "cpp_project_desc": {
        "es": "Descripción del proyecto en C++.",
        "en": "Description of the C++ project."
    },
    "c_project_title": {
        "es": "Proyecto en C",
        "en": "C Project"
    },
    "c_project_desc": {
        "es": "Descripción del proyecto en C.",
        "en": "Description of the C project."
    },
    "python_project_title": {
        "es": "Proyecto en Python",
        "en": "Python Project"
    },
    "python_project_desc": {
        "es": "Descripción del proyecto en Python.",
        "en": "Description of the Python project."
    },
    "java_project_title": {
        "es": "Proyecto en Java",
        "en": "Java Project"
    },
    "java_project_desc": {
        "es": "Descripción del proyecto en Java.",
        "en": "Description of the Java project."
    },
    "typescript_project_title": {
        "es": "Proyecto de Desarrollo Web",
        "en": "Web Development Project"
    },
    "typescript_project_desc": {
        "es": "Aplicación web para buscar personajes de Star Wars usando la SWAPI.",
        "en": "Web application to search for Star Wars characters using the SWAPI."
    },
    "ruby_project_title": {
        "es": "Blockchain Simple en Ruby",
        "en": "Simple Blockchain in Ruby"
    },
    "ruby_project_desc": {
        "es": "Este proyecto implementa una blockchain simple en Ruby.",
        "en": "This project implements a simple blockchain in Ruby."
    },
    "vhdl_project_title": {
        "es": "Proyecto en VHDL",
        "en": "VHDL Project"
    },
    "vhdl_project_desc": {
        "es": "Descripción del proyecto en VHDL.",
        "en": "Description of the VHDL project."
    },
    "view_on_github": {
        "es": "Ver en GitHub",
        "en": "View on GitHub"
    }
};

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[key][currentLang];
    });
    document.title = translations['title'][currentLang];
    document.querySelector('.projects-toggle').textContent = translations['projects'][currentLang];
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

    // Add scroll listener to toggle hidden class for fixed elements
    document.addEventListener('scroll', () => {
        const toggles = document.querySelectorAll('.language-toggle, .coverletter-toggle, .projects-toggle, .return-toggle');
        if(window.scrollY > 50) {
            toggles.forEach(el => el.classList.add('hidden'));
        } else {
            toggles.forEach(el => el.classList.remove('hidden'));
        }
    });
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
    window.location.href = 'index.html';
}