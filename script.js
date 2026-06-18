// ===== VoltMoto Build Site — Scripts =====
document.addEventListener('DOMContentLoaded', () => {
    // Mobile hamburger
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Highlight active page in nav
    const current = window.location.pathname;
    document.querySelectorAll('nav a').forEach(a => {
        const href = a.getAttribute('href');
        if (current === href || (href !== '/' && current.startsWith(href))) {
            a.classList.add('active');
        }
    });

    // Reset nav on window resize (if mobile menu open)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640 && nav) {
            nav.classList.remove('open');
        }
    });
});

// Build log data (add entries here as you go)
const buildLogEntries = [
    {
        id: 'post-000',
        date: '2026-06-18',
        title: 'VoltMoto Begins — The Plan',
        excerpt: 'The vision, the specs, and why I\'m building a $4k electric motorbike that beats bikes costing twice as much.',
        tags: ['planning', 'vision'],
        file: 'post-000.html'
    }
];

function renderBuildLog(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = buildLogEntries.map(post => `
        <div class="post-card">
            <div class="date">${post.date}</div>
            <h3><a href="build-log/${post.file}">${post.title}</a></h3>
            <div class="excerpt">${post.excerpt}</div>
            <div class="tags">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
    `).join('');
}