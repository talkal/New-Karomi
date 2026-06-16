document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // --- Theme: respect saved choice, then OS preference ---
    const savedTheme = localStorage.getItem('nk-theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.setAttribute('data-theme', 'dark');
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('nk-theme', newTheme);
        });
    }

    // --- Scroll reveal (progressive enhancement) ---
    const revealTargets = document.querySelectorAll(
        '.feature-row, .contact-grid, .stat-item, .testimonial-card, .section-head, .product-category'
    );
    if ('IntersectionObserver' in window && revealTargets.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach((el) => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }
});
