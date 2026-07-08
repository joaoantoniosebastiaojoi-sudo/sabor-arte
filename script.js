// ===== MOBILE NAV TOGGLE =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close nav when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.menu-card, .about-text, .contact-item, .stat');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach((el, index) => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - revealPoint) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.6s ease-out';
      }, index * 80);
    }
  });
};

// Set initial state for animated elements
revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== SMOOTH SCROLL FOR HERO BUTTONS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== WHATSAPP PULSE ANIMATION (subtle) =====
const whatsappBtn = document.querySelector('.whatsapp-btn');

if (whatsappBtn) {
  // Add a gentle pulse every 4 seconds
  let pulseCount = 0;
  const maxPulses = 3; // Only pulse 3 times then stop

  const pulseInterval = setInterval(() => {
    if (pulseCount >= maxPulses) {
      clearInterval(pulseInterval);
      return;
    }

    whatsappBtn.style.transform = 'scale(1.08)';
    whatsappBtn.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.6)';

    setTimeout(() => {
      whatsappBtn.style.transform = 'scale(1)';
      whatsappBtn.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
    }, 300);

    pulseCount++;
  }, 4000);
}

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const phone = this.querySelectorAll('input[type="text"]')[1].value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email) {
      alert('Por favor, preencha nome e e-mail.');
      return;
    }

    // Show success state
    const btn = this.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '✅ Mensagem Enviada!';
    btn.style.background = '#27ae60';
    btn.style.borderColor = '#27ae60';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '#c0392b';
      btn.style.borderColor = '#c0392b';
      btn.disabled = false;
      contactForm.reset();
    }, 2500);
  });
}

console.log('🍽️ Sabor & Arte — pronto!');
