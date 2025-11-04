// Project data for modal display
const projects = {
  musicplayer: {
    title: 'Smart Watch Music Player UI Design',
    images: [
      './image/musicplayer/Cover.png',
      './image/musicplayer/Slice 2.png',
      './image/musicplayer/Slice 3.png',
      './image/musicplayer/Slice 4.png',
      './image/musicplayer/Slice 5.png',
      './image/musicplayer/Slice 6.png',
      './image/musicplayer/Slice 7.png',
      './image/musicplayer/Slice 8.png',
      './image/musicplayer/Slice 9.png'
    ]
  },
  fitfusion: {
    title: 'Fit Fusion App Design',
    images: [
      './image/FF Case Study/Slice 1.png',
      './image/FF Case Study/Slice 2.png',
      './image/FF Case Study/Slice 3.png',
      './image/FF Case Study/Slice 5.png',
      './image/FF Case Study/Slice 6.png',
      './image/FF Case Study/Slice 7.png',
      './image/FF Case Study/Slice 8.png',
      './image/FF Case Study/Slice 9.png',
      './image/FF Case Study/Slice 10.png',
      './image/FF Case Study/Slice 11.png',
      './image/FF Case Study/Slice 12.png',
      './image/FF Case Study/Slice 13.png',
      './image/FF Case Study/Slice 14.png',
      './image/FF Case Study/mockups.png'
    ]
  },
  connectease: {
    title: 'Connect Ease',
    images: [
      './image/CE Case Study/Slice 9.png',
      './image/CE Case Study/Slice 10.png',
      './image/CE Case Study/Slice 2.png',
      './image/CE Case Study/Slice 3.png',
      './image/CE Case Study/Slice 4.png',
      './image/CE Case Study/Slice 5.png',
      './image/CE Case Study/Slice 6.png',
      './image/CE Case Study/Slice 7.png',
      './image/CE Case Study/Slice 8.png'
    ]
  },
  aisunglasses: {
    title: 'Equal Lens - Product Design',
    externalLink: 'https://www.figma.com/proto/E1KVcFVrWMLIHWsXKtRMH7/AI-SUNGLASSES--Community---Copy-?node-id=3019-128&t=lbxMpEnTa42jjoiC-0&scaling=contain&content-scaling=responsive&page-id=1%3A2',
    images: [
      './image/AI Sunglasses/Cover.png'
    ]
  }
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      const nav = document.querySelector('.nav');
      const menuToggle = document.querySelector('.menu-toggle');
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    }
  });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Active navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// Project modal functionality
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const workItems = document.querySelectorAll('.work-item');

workItems.forEach(item => {
  item.addEventListener('click', () => {
    const projectKey = item.getAttribute('data-project');
    const project = projects[projectKey];
    
    if (project) {
      // If project has external link, open in new tab
      if (project.externalLink) {
        window.open(project.externalLink, '_blank');
      } else {
        openModal(project);
      }
    }
  });
});

function openModal(project) {
  // Clear previous content
  modalBody.innerHTML = '';
  
  // Add project title
  const title = document.createElement('h2');
  title.textContent = project.title;
  title.style.cssText = `
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--color-white);
    margin-bottom: 3rem;
    text-align: center;
  `;
  modalBody.appendChild(title);
  
  // Add project images
  project.images.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `${project.title} - Image ${index + 1}`;
    img.style.animationDelay = `${index * 0.1}s`;
    modalBody.appendChild(img);
  });
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.work-item, .about-img-main, .about-info-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero-content');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - (scrolled / 600);
  }
});

// Cursor effect (optional enhancement)
const cursor = document.createElement('div');
cursor.style.cssText = `
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease, opacity 0.3s ease;
  display: none;
  opacity: 1;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursor.style.display = 'block';
});

// Hide cursor while scrolling
let scrollTimeout;
window.addEventListener('scroll', () => {
  cursor.style.opacity = '0';
  
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    cursor.style.opacity = '1';
  }, 150);
});

// Enhance cursor on hover
document.querySelectorAll('a, button, .work-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursor.style.borderColor = 'var(--color-accent-hover)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.borderColor = 'var(--color-accent)';
  });
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
}

// Preload images for better performance
window.addEventListener('load', () => {
  Object.values(projects).forEach(project => {
    project.images.forEach(imgSrc => {
      const img = new Image();
      img.src = imgSrc;
    });
  });
});

console.log('Portfolio loaded successfully! ✨');

