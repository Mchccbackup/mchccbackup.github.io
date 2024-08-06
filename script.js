document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const audio = new Audio('"C:\Users\Giuli0\Documents\GitHub\mchcc.github.io\files\funny sound.ogg"'); // Specify the path to your sound file

    // Function to update the button label based on the current theme
    const updateButtonLabel = () => {
        toggleButton.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    };

    // Function to toggle the dark mode
    const toggleDarkMode = () => {
        body.classList.toggle('dark-mode');
        updateButtonLabel();
        // Save the current mode in local storage
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    };

    // Load the saved theme from local storage
    const loadSavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        updateButtonLabel();
    };

    // Event listener for dark mode toggle button
    toggleButton.addEventListener('click', toggleDarkMode);

    // Event listener for search functionality
    document.getElementById('search').addEventListener('input', (e) => {
        const search = e.target.value.toLowerCase();
        const sections = document.getElementsByTagName('section');
        for (let section of sections) {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(search) ? '' : 'none';
        }
    });

    // Event listener to play sound on any button click
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            audio.play();
        }
    });

    // Initialize the theme on page load
    loadSavedTheme();
});
