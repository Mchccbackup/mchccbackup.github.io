document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('dark-mode-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');

    

    // Function to update button icon based on the current theme
    const updateButtonIcon = () => {
        const isDarkMode = body.classList.contains('dark-mode');
        sunIcon.style.display = isDarkMode ? 'none' : 'block';
        moonIcon.style.display = isDarkMode ? 'block' : 'none';
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        updateButtonIcon();
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    };

    // Load saved theme from local storage
    const loadSavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        updateButtonIcon();
    };

    // Function to handle page transitions with fade effects
    const handlePageTransition = (event) => {
        const target = event.currentTarget;
        if (target.tagName === 'A') {
            event.preventDefault();
            const href = target.getAttribute('href');

            body.classList.remove('fade-in');
            body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        }
    };

    // Function to toggle mobile navigation menu
    const toggleNavMenu = () => {
        navMenu.classList.toggle('show');
    };

    // Initialize
    loadSavedTheme();
    body.classList.add('fade-in');

    // Add event listeners
    toggleButton.addEventListener('click', toggleDarkMode);
    menuToggle.addEventListener('click', toggleNavMenu);
    
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', handlePageTransition);
    });

    

});

document.getElementById('search').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(search) ? '' : 'none';
    }
});
