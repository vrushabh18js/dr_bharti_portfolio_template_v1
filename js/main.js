/**
 * Portfolio JavaScript: Dr. D. B. Bharti
 * Director — MBA
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAchievementFilters();
  initLightboxModal();
  initContactForm();
  initBackToTop();
  initPrintCV();
});

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
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Highlighting
  function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  }
}

/* ===================================================================
   ACHIEVEMENT & GALLERY FILTERING
   =================================================================== */
function initAchievementFilters() {
  const sections = document.querySelectorAll('#achievements, #gallery');

  sections.forEach(sec => {
    const filterBtns = sec.querySelectorAll('.filter-btn');
    const cards = sec.querySelectorAll('.achievement-card');

    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  });
}

/* ===================================================================
   IMAGE LIGHTBOX MODAL (FOR ACHIEVEMENT PICS)
   =================================================================== */
function initLightboxModal() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  const modalImg = modal.querySelector('#modalImage');
  const modalTitle = modal.querySelector('#modalTitle');
  const modalDesc = modal.querySelector('#modalCaption');
  const closeBtn = modal.querySelector('.modal-close-btn');

  // Trigger modal when clicking on image box or view button
  const triggerBoxes = document.querySelectorAll('.achievement-img-box');

  triggerBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const img = box.querySelector('img');
      const card = box.closest('.achievement-card');
      const title = card ? card.querySelector('.achievement-title')?.innerText : 'Achievement View';
      const desc = card ? card.querySelector('.achievement-desc')?.innerText : '';

      if (img && modalImg) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || title;
      }
      if (modalTitle) modalTitle.innerText = title;
      if (modalDesc) modalDesc.innerText = desc;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close handlers
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

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
   CONTACT FORM SUBMISSION HANDLER
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('academicContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;

    // Simulate sending state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="animation: spin 1s linear infinite;">
        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
      </svg>
      Sending Inquiry...
    `;

    setTimeout(() => {
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Inquiry Sent Successfully!
      `;
      submitBtn.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';

      // Alert feedback message
      const alertBox = document.createElement('div');
      alertBox.style.cssText = `
        margin-top: 1rem;
        padding: 0.85rem 1.2rem;
        background: #ECFDF5;
        border: 1px solid #A7F3D0;
        border-radius: 8px;
        color: #065F46;
        font-size: 0.9rem;
        font-weight: 600;
      `;
      alertBox.innerText = "Thank you! Your message has been routed to Dr. D. B. Bharti's Executive Academic Office.";
      form.appendChild(alertBox);

      form.reset();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        submitBtn.style.background = '';
        setTimeout(() => alertBox.remove(), 4000);
      }, 3500);
    }, 1000);
  });
}

/* ===================================================================
   PRINT CV FUNCTIONALITY
   =================================================================== */
function initPrintCV() {
  const printBtns = document.querySelectorAll('.print-cv-btn');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}

/* ===================================================================
   BACK TO TOP BUTTON
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

