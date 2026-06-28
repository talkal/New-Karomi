document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.btn-theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            const isDark = root.getAttribute('data-theme') === 'dark';
            root.setAttribute('data-theme', isDark ? 'light' : 'dark');
        });
    }
});
