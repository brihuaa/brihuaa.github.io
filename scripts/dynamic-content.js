// Utility Functions
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

// Form Handling
async function handleContactFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const messageContainer = document.getElementById('form-message');

    try {
        const response = await fetch('https://brihuaa.github.io/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            messageContainer.textContent = 'Email enviado correctamente. ¡Gracias por tu mensaje!';
            messageContainer.className = 'form-message success';
        } else {
            messageContainer.textContent = 'Hubo un error al enviar el email. Por favor, inténtalo de nuevo.';
            messageContainer.className = 'form-message error';
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        messageContainer.textContent = 'No se pudo enviar el mensaje. Verifica tu conexión o contacta al administrador.';
        messageContainer.className = 'form-message error';
    }

    messageContainer.style.display = 'block'; // Muestra el mensaje
    setTimeout(() => {
        messageContainer.style.display = 'none'; // Oculta el mensaje después de 5 segundos
    }, 5000);

    event.target.reset();
}

// Dynamic Content Loading
function loadSkills() {
    fetch('partials/skills.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('skills-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading skills:', error));
}

function loadSocialLinks() {
    fetch('partials/social-links.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('social-links-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading social links:', error));
}

// Highlight Project Card Based on URL Hash
function highlightProjectCard() {
    const projectId = window.location.hash.slice(1);
    if (projectId) {
        const projectCard = document.getElementById(projectId);
        if (projectCard) {
            projectCard.classList.add('highlight');
            projectCard.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Initialization
function initializeDynamicContent() {
    loadSkills();
    loadSocialLinks();
    highlightProjectCard();
}

// Event Listeners
window.addEventListener('DOMContentLoaded', initializeDynamicContent);
