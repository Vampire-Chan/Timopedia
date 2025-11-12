// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Function to get system theme preference
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Function to set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

// Function to update theme icon
function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = getSystemTheme();
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Event listener for theme toggle button
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize on page load
initTheme();

// Search functionality
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = this.querySelector('.search-input').value.trim().toLowerCase();
            if (query) {
                // For now, redirect to a search results page or show alert
                // In a full implementation, this would search through content
                alert(`Searching for: "${query}"\n\nThis is a placeholder. In a full implementation, this would search through all articles and display results.`);
                // You could redirect to a search page: window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        });
    }
}

// Randomize category cards
function randomizeCategoryCards() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (categoriesGrid) {
        const cards = Array.from(categoriesGrid.children);
        // Shuffle array using Fisher-Yates algorithm
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        // Re-append shuffled cards
        cards.forEach(card => categoriesGrid.appendChild(card));
    }
}

// Random article functionality
function initRandomArticle() {
    const randomLinks = document.querySelectorAll('a[href="#"]');
    randomLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('random article')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // List of available articles (expand this as you add more)
                const articles = [
                    'science/origin-of-the-universe.html'
                    // Add more article paths here
                ];
                if (articles.length > 0) {
                    const randomIndex = Math.floor(Math.random() * articles.length);
                    window.location.href = articles[randomIndex];
                } else {
                    alert('No articles available yet. Check back soon!');
                }
            });
        }
    });
}

// Table of Contents functionality
function initTableOfContents() {
    const tocList = document.querySelector('.toc-list');
    if (tocList) {
        // Smooth scrolling for TOC links
        tocList.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initSearch();
    randomizeCategoryCards();
    initRandomArticle();
    initTableOfContents();
});