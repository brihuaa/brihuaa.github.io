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
function handleContactFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Contact Form Submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
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
