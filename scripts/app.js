function toggleModal() {
    const modal = document.getElementById('profileModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    const body = document.body;
    const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Cerrar modal al hacer click fuera
    window.onclick = function(event) {
        const modal = document.getElementById('profileModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});