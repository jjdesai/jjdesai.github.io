// Navigation smooth scrolling
const profilePicker = document.getElementById('profile-picker');
const portfolio = document.getElementById('portfolio');
const moreToggle = document.getElementById('more-toggle');
const moreMenu = document.getElementById('more-menu');
const searchToggle = document.getElementById('search-toggle');
const searchPanel = document.getElementById('search-panel');
const siteSearch = document.getElementById('site-search');
const searchResults = document.getElementById('search-results');
const profileToggle = document.getElementById('profile-toggle');
const profileMenu = document.getElementById('profile-menu');

if (moreToggle && moreMenu) {
    moreToggle.addEventListener('click', () => {
        const isExpanded = moreToggle.getAttribute('aria-expanded') === 'true';
        moreToggle.setAttribute('aria-expanded', String(!isExpanded));
        moreMenu.hidden = isExpanded;
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.nav-more')) {
            moreToggle.setAttribute('aria-expanded', 'false');
            moreMenu.hidden = true;
        }

        if (searchToggle && !event.target.closest('.search-control')) {
            searchToggle.setAttribute('aria-expanded', 'false');
            searchPanel.hidden = true;
        }

        if (profileToggle && !event.target.closest('.profile-control')) {
            profileToggle.setAttribute('aria-expanded', 'false');
            profileMenu.hidden = true;
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            moreToggle.setAttribute('aria-expanded', 'false');
            moreMenu.hidden = true;
            if (searchToggle && searchPanel) {
                searchToggle.setAttribute('aria-expanded', 'false');
                searchPanel.hidden = true;
            }
            if (profileToggle && profileMenu) {
                profileToggle.setAttribute('aria-expanded', 'false');
                profileMenu.hidden = true;
            }
            moreToggle.focus();
        }
    });

    moreMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            moreToggle.setAttribute('aria-expanded', 'false');
            moreMenu.hidden = true;
        });
    });
}

if (searchToggle && searchPanel && siteSearch && searchResults) {
    const searchItems = [
        ...Array.from(document.querySelectorAll('#portfolio section[id]'), section => ({
            title: section.querySelector('h1, h2')?.textContent.trim() || 'Home',
            href: `#${section.id}`,
            element: section
        })),
        ...Array.from(document.querySelectorAll('.project-card'), card => ({
            title: card.querySelector('h3')?.textContent.trim() || 'Project',
            href: card.querySelector('.project-link')?.getAttribute('href') || '#projects',
            element: card
        }))
    ];

    const renderSearchResults = () => {
        searchResults.replaceChildren();
        const query = siteSearch.value.trim().toLowerCase();
        if (!query) {
            return;
        }

        const matches = searchItems
            .filter(item => {
                if (item.element.hidden || item.element.closest('[data-profile-only]')?.hidden) {
                    return false;
                }
                return `${item.title} ${item.element.innerText}`.toLowerCase().includes(query);
            })
            .slice(0, 7);

        if (matches.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'No matching sections or projects.';
            searchResults.append(emptyMessage);
            return;
        }

        matches.forEach(item => {
            const result = document.createElement('a');
            result.href = item.href;
            result.textContent = item.title;
            result.addEventListener('click', () => {
                searchToggle.setAttribute('aria-expanded', 'false');
                searchPanel.hidden = true;
            });
            searchResults.append(result);
        });
    };

    searchToggle.addEventListener('click', () => {
        const isExpanded = searchToggle.getAttribute('aria-expanded') === 'true';
        searchToggle.setAttribute('aria-expanded', String(!isExpanded));
        searchPanel.hidden = isExpanded;
        if (!isExpanded) {
            siteSearch.focus();
        }
    });

    siteSearch.addEventListener('input', renderSearchResults);
}

if (profileToggle && profileMenu) {
    profileToggle.addEventListener('click', () => {
        const isExpanded = profileToggle.getAttribute('aria-expanded') === 'true';
        profileToggle.setAttribute('aria-expanded', String(!isExpanded));
        profileMenu.hidden = isExpanded;
    });
}

document.querySelectorAll('.profile-choice').forEach(profile => {
    profile.addEventListener('click', () => {
        const selectedProfile = profile.dataset.profile;
        const profileName = document.getElementById('nav-profile-name');
        const profileAvatar = document.getElementById('nav-profile-avatar');
        const profileLabels = {
            Embedded: 'Embedded Expert',
            Telecom: 'Telecom Expert'
        };

        portfolio.dataset.activeProfile = selectedProfile;
        document.querySelectorAll('#portfolio [data-profile-only]').forEach(element => {
            element.hidden = element.dataset.profileOnly !== selectedProfile;
        });
        profileName.textContent = profileLabels[selectedProfile];
        profileAvatar.dataset.profile = selectedProfile;
        profilePicker.hidden = true;
        portfolio.hidden = false;
        window.scrollTo(0, 0);
    });
});

const changeProfileButton = document.getElementById('change-profile');
if (changeProfileButton) {
    changeProfileButton.addEventListener('click', () => {
        profileToggle.setAttribute('aria-expanded', 'false');
        profileMenu.hidden = true;
        searchToggle.setAttribute('aria-expanded', 'false');
        searchPanel.hidden = true;
        portfolio.hidden = true;
        profilePicker.hidden = false;
        window.scrollTo(0, 0);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill all fields');
            return;
        }
        
        // Create mailto link (for demo purposes)
        const mailtoLink = `mailto:jaydesai36@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form
        this.reset();
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and publication cards
document.querySelectorAll('.project-card, .publication-card, .timeline-content, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Navbar background effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(180deg, rgba(15, 15, 15, 0.98) 0%, rgba(15, 15, 15, 0.9) 100%)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0.7) 100%)';
    }
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Skill badge interaction
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Add typing animation to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(typeText, 500);
}

// Scroll trigger animations for counters
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stat numbers for animation
const statNumbers = document.querySelectorAll('.stat-number');
const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, target);
            numberObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(number => numberObserver.observe(number));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');
});
