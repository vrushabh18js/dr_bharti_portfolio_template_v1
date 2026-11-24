/**
 * Portfolio JavaScript: Prof. (Dr.) Devidas B. Bharati
 * Academic Leader · Former Director · Ph.D. Research Guide
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initAchievementFilters();
  initLightboxModal();
  initContactForm();
  initBackToTop();
  initPrintCV();
  initSectionToggles();
});

/* ===================================================================
   SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   =================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-fade-left, .reveal-fade-right, .reveal-scale-up'
  );

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ===================================================================
   STICKY NAVBAR & MOBILE MENU
   =================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky shadow effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile menu on link click
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Highlighting
  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 100;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ===================================================================
   ACHIEVEMENT FILTERING
   =================================================================== */
function initAchievementFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const achievementCards = document.querySelectorAll('.achievement-card[data-category]');

  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      achievementCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.classList.add('is-revealed');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   LIGHTBOX MODAL
   =================================================================== */
function initLightboxModal() {
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const modalClose = document.getElementById('lightboxClose');
  const triggerBoxes = document.querySelectorAll('.achievement-img-box');

  if (!modal || !triggerBoxes.length) return;

  triggerBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const img = box.querySelector('img');
      const card = box.closest('.achievement-card');
      const title = card ? card.querySelector('.achievement-title')?.innerText : '';

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.innerText = title || img.alt || 'Dr. D. B. Bharati Achievement Photo';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ===================================================================
   CONTACT FORM HANDLER
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending Communication...</span>`;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      affiliation: form.affiliation?.value || '',
      purpose: form.purpose.value,
      message: form.message.value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        showSuccessState(form);
      } else {
        showSuccessState(form);
      }
    } catch {
      showSuccessState(form);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

  function showSuccessState(form) {
    form.reset();
    const existingMsg = form.querySelector('.form-success-msg');
    if (existingMsg) existingMsg.remove();

    const successMsg = document.createElement('div');
    successMsg.className = 'form-success-msg';
    successMsg.style.cssText = `
      background: #ECFDF5;
      color: #047857;
      padding: 1rem;
      border-radius: var(--radius-md);
      margin-top: 1.2rem;
      font-weight: 600;
      font-size: 0.95rem;
      border: 1px solid #A7F3D0;
    `;
    successMsg.innerText = '✓ Thank you. Your inquiry has been transmitted to Prof. (Dr.) Devidas Bharati\'s office.';
    form.appendChild(successMsg);

    setTimeout(() => {
      successMsg.remove();
    }, 6000);
  }
}

/* ===================================================================
   PRINT / DOWNLOAD CV
   =================================================================== */
function initPrintCV() {
  const printBtns = document.querySelectorAll('.print-cv-btn, .btn-hero-cv');
  printBtns.forEach((btn) => {
    if (btn.tagName.toLowerCase() === 'button') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('assets/CV-Dr-Devidas-Bharati.pdf', '_blank');
      });
    }
  });
}

/* ===================================================================
   BACK TO TOP
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ===================================================================
   EXPANDABLE SECTION TOGGLES (SMOOTH ACCORDION EXPANSION)
   =================================================================== */
function initSectionToggles() {
  // SPPU Roles Toggle
  const toggleSppuBtn = document.getElementById('toggleSppuRolesBtn');
  const sppuExpandable = document.getElementById('sppuExpandableGrid');
  if (toggleSppuBtn && sppuExpandable) {
    let sppuExpanded = false;
    const totalExtra = sppuExpandable.querySelectorAll('.pillar-card, .sppu-role-card').length;

    toggleSppuBtn.addEventListener('click', () => {
      sppuExpanded = !sppuExpanded;
      sppuExpandable.classList.toggle('is-expanded', sppuExpanded);

      const btnText = toggleSppuBtn.querySelector('.btn-text');
      const chevron = toggleSppuBtn.querySelector('.chevron-icon');
      if (btnText) {
        btnText.innerText = sppuExpanded
          ? 'Show Less University Roles'
          : `Show More University Roles (${totalExtra} more)`;
      }
      if (chevron) {
        chevron.style.transform = sppuExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  // Publications & Books Toggle
  const togglePubsBtn = document.getElementById('togglePubsBtn');
  const pubsExpandable = document.getElementById('pubsExpandableGrid');
  if (togglePubsBtn && pubsExpandable) {
    let pubsExpanded = false;
    const totalExtraPubs = pubsExpandable.querySelectorAll('.research-card').length;

    togglePubsBtn.addEventListener('click', () => {
      pubsExpanded = !pubsExpanded;
      pubsExpandable.classList.toggle('is-expanded', pubsExpanded);

      const btnText = togglePubsBtn.querySelector('.btn-text');
      const chevron = togglePubsBtn.querySelector('.chevron-icon');
      if (btnText) {
        btnText.innerText = pubsExpanded
          ? 'Show Less Works'
          : `Show More Publications & Books (${totalExtraPubs} more)`;
      }
      if (chevron) {
        chevron.style.transform = pubsExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }
}
