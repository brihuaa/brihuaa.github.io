document.addEventListener('DOMContentLoaded', () => {
    // Configuración de la gráfica de habilidades (Radar Chart)
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['C++', 'Python', 'TypeScript', 'Java', 'HTML/CSS', 'Git'],
            datasets: [{
                label: 'Nivel de habilidad',
                data: [85, 90, 75, 80, 95, 85], // Ajusta estos valores
                backgroundColor: 'rgba(45, 85, 255, 0.2)',
                borderColor: 'rgba(45, 85, 255, 1)',
                pointBackgroundColor: 'rgba(45, 85, 255, 1)',
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: { color: '#fff' }
                }
            },
            plugins: {
                legend: { labels: { color: '#fff' } }
            }
        }
    });
});