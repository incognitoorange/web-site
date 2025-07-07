const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const target = link.dataset.target;
        sections.forEach(sec => {
            sec.classList.remove('visible');
            if (sec.id === target) sec.classList.add('visible');
        });
    });
});
