function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerHTML = translations[key][currentLang]; // Usa innerHTML para soportar imágenes y texto
        }
    });
    document.title = translations['title'][currentLang];
    const projectsToggle = document.querySelector('.projects-toggle');
    if (projectsToggle) {
        projectsToggle.innerHTML = translations['projects'][currentLang];
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLang);
    updateContent();
    document.querySelector('.language-toggle').textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function redirectToProjects() {
    window.location.href = 'projects.html'; // Asegúrate de que la ruta sea correcta
}

function redirectToStart() {
    window.location.href = 'index.html'; // Redirige correctamente al inicio
}

function handleContactFormSubmission(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    // Simula el envío del formulario
    alert(`Gracias, ${name}. Hemos recibido tu mensaje:\n"${message}"\nNos pondremos en contacto contigo a través de ${email}.`);

    // Limpia el formulario después del envío
    document.getElementById('contact-form').reset();
}
