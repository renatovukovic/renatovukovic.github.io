document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch-checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
        if (themeSwitch) {
            themeSwitch.checked = currentTheme === 'dark';
        }
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', prefersDark);
        if (themeSwitch) {
            themeSwitch.checked = prefersDark;
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', function(event) {
            if (event.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
});
