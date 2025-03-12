// Configuración inicial
const technologies = ['c++', 'python', 'java', 'typescript', 'html', 'css', 'react', 'sql', 'mysql'];
let activeFilters = new Set();

// Inicializar filtros
function initFilters() {
    const container = document.getElementById('filters-container');
    technologies.forEach(tech => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = tech;
        btn.onclick = () => toggleFilter(tech);
        container.appendChild(btn);
    });
}

// Toggle filtros
function toggleFilter(tech) {
    const btn = event.target;
    btn.classList.toggle('active');
    activeFilters.has(tech) ? activeFilters.delete(tech) : activeFilters.add(tech);
    filterCompetencies();
}

// Filtrar tarjetas
function filterCompetencies() {
    document.querySelectorAll('.competency-card').forEach(card => {
        const cardTechs = card.dataset.tech.split(',');
        const show = activeFilters.size === 0 || 
                     cardTechs.some(tech => activeFilters.has(tech));
        card.style.display = show ? 'block' : 'none';
    });
}

function toggleTheme() {
    const body = document.body;
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    
    // Fuerza la actualización de variables CSS
    const root = document.documentElement;
    if(body.getAttribute('data-theme') === 'dark') {
        root.style.setProperty('--bg-color', '#1a1a1a');
        root.style.setProperty('--text-color', '#ecf0f1');
        root.style.setProperty('--card-bg', '#2d2d2d');
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#2c3e50');
        root.style.setProperty('--card-bg', '#f8f9fa');
    }
    
    localStorage.setItem('theme', body.getAttribute('data-theme'));
    updateCharts();
}

// Configuración de gráficas
const chartConfig = (labels, data) => ({
    type: 'radar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: 'rgba(46, 204, 113, 0.2)',
            borderColor: '#2ecc71',
            pointBackgroundColor: '#2ecc71'
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: { color: 'var(--text-color)' },
                grid: { color: 'rgba(0,0,0,0.1)' },
                pointLabels: { color: 'var(--text-color)' }
            }
        },
        plugins: { legend: { display: false } }
    }
});

// Inicializar gráficas
function initCharts() {
    new Chart(document.getElementById('languagesChart'), chartConfig(
        ['C++', 'Python', 'Java', 'TypeScript'], [85, 95, 75, 70]
    ));

    new Chart(document.getElementById('webChart'), chartConfig(
        ['HTML/CSS', 'React', 'TypeScript'], [90, 80, 75]
    ));

    new Chart(document.getElementById('dbChart'), chartConfig(
        ['SQL', 'MySQL', 'Normalización'], [95, 85, 90]
    ));
}

// Actualizar gráficas al cambiar tema
function updateCharts() {
    Chart.getChart("languagesChart").destroy();
    Chart.getChart("webChart").destroy();
    Chart.getChart("dbChart").destroy();
    initCharts();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });
    initFilters();
    initCharts();
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
});