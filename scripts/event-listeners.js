document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    currentLang = localStorage.getItem('language') || 'es'; // Default to Spanish
    document.querySelector('.language-toggle').textContent = currentLang.toUpperCase();
    document.documentElement.lang = currentLang;
    updateContent();

    // Scroll-to-top button visibility
    window.addEventListener('scroll', () => {
        const scrollToTopButton = document.querySelector('.scroll-to-top');
        if (window.scrollY > 200) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });

    // Event listener for language toggle
    document.querySelector('.language-toggle').addEventListener('click', toggleLanguage);

    // Easter egg in the console
    console.log('%c¡Hola! Esta página fue creada por Adrián Brihuega. 👨‍💻', 'color: #2ecc71; font-size: 16px; font-weight: bold;');
    console.log('%cGitHub: https://github.com/brihuaa', 'color: #3498db; font-size: 14px;');
});
