document.addEventListener('DOMContentLoaded', () => {
  initializeHeroAnimations();
  initializeAboutCards();
  initializeProjectCards();
  initializeSkillBadges();
  initializeContactForm();
  initializeFooter();
  initializeSmoothScroll();
});

function initializeHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'slideUp 1s ease-out';
  }
}

function initializeAboutCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = card.dataset.index;
        const delay = index * 0.2;

        card.style.animation = `slideInLeft 0.8s ease-out ${delay}s both`;
        if (index % 2 === 1) {
          card.style.animation = `slideInRight 0.8s ease-out ${delay}s both`;
        }
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card').forEach((card) => {
    observer.observe(card);
  });
}

function initializeProjectCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = card.dataset.index;
        const delay = index * 0.2;

        card.style.animation = `scaleIn 0.8s ease-out ${delay}s both`;
        observer.unobserve(card);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card);
  });
}

function initializeSkillBadges() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const badge = entry.target;
        const level = badge.dataset.level;

        const skillFill = badge.querySelector('.skill-fill');
        if (skillFill) {
          setTimeout(() => {
            skillFill.style.setProperty('--level', level + '%');
            skillFill.style.width = level + '%';
          }, 100);
        }
        observer.unobserve(badge);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-badge').forEach((badge) => {
    observer.observe(badge);
  });
}

function initializeContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.elements['name'].value;
      const email = form.elements['email'].value;
      const message = form.elements['message'].value;

      console.log('Form submitted:', { name, email, message });

      form.reset();

      alert('Thank you for your message! I\'ll get back to you soon.');
    });
  }
}

function initializeFooter() {
  const yearElement = document.getElementById('yearFooter');
  if (yearElement) {
    const year = new Date().getFullYear();
    yearElement.textContent = `${year} - Keep Learning, Keep Building`;
  }
}

function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
