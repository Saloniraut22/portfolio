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
  aisunglasses: {
    title: 'Equal Lens - Product Design',
    externalLink: 'https://www.figma.com/proto/E1KVcFVrWMLIHWsXKtRMH7/AI-SUNGLASSES--Community---Copy-?node-id=3019-128&t=lbxMpEnTa42jjoiC-0&scaling=contain&content-scaling=responsive&page-id=1%3A2'
  },
  spendly: {
    title: 'Spendly: Making Money Simple, Not Stressful',
    description: 'AI-powered personal finance coach that helps young earners understand their spending and build better money habits without stress, spreadsheets, or math.',
    images: [
      './image/spendly/IMG_0046.jpg',
      './image/spendly/IMG_0047.PNG',
      './image/spendly/IMG_0049.PNG',
      './image/spendly/IMG_0051.PNG',
      './image/spendly/IMG_0053.PNG',
      './image/spendly/IMG_0056.PNG',
      './image/spendly/IMG_0058.PNG',
      './image/spendly/IMG_0059.PNG',
      './image/spendly/IMG_0060.PNG',
      './image/spendly/IMG_0061.PNG'
    ],
    technologies: ['React Native', 'Expo', 'Google Gemini 2.5 Flash', 'AsyncStorage', 'React Navigation', 'React Native Chart Kit', 'SVG'],
    githubLink: '[Add your GitHub repo URL]',
    demoLink: '[Add Expo demo link if available]',
    videoLink: 'https://www.youtube.com/watch?v=3_HSVCFEd6M',
    duration: '12 Weeks',
    roles: ['UX Researcher', 'UI/UX Designer', 'Developer', 'Product Manager'],
    caseStudy: {
      overview: 'Spendly is an AI-powered personal finance coach that helps young earners understand their spending and build better money habits without stress, spreadsheets, or math. The app turns confusing numbers into friendly, easy-to-read insights and small actionable steps that help users spend smarter, save consistently, and grow their confidence with money.',
      inspiration: 'This project started with a simple observation: young people around me were earning their first paychecks but had no idea where their money was going. They often spent impulsively and avoided finance apps because they felt overwhelmed. I wanted to design something that made money management feel simple, human, and calm not like homework.',
      researchMethods: [
        'Semi-structured interviews (30–45 minutes)',
        'Observation of financial habits',
        'Online surveys for spending behavior',
        'Secondary research from finance and design sources'
      ],
      keyInsights: [
        {
          title: 'People spend impulsively without tracking.',
          quote: '"I get my paycheck and it just… disappears. I don\'t even know where it goes."'
        },
        {
          title: 'Money management feels boring or stressful.',
          quote: '"Budgeting apps make me feel guilty instead of motivated."'
        },
        {
          title: 'Most users want clarity, not control.',
          quote: 'They don\'t want to log every expense, they want smart, automatic insights.'
        },
        {
          title: 'Motivation is emotional, not mathematical.',
          quote: 'Users respond better to encouragement ("You\'re doing great!") than warnings.'
        },
        {
          title: 'Lack of long-term perspective.',
          quote: 'Most young earners don\'t realize how saving small amounts compounds over time.'
        }
      ],
      secondaryInsights: [
        'Studies in behavioral finance show that small nudges and positive reinforcement improve financial habits more than strict budgeting systems.',
        'Financial literacy tools are often too complex, alienating beginners. People need simplicity and a sense of accomplishment.'
      ],
      userArchetypes: [
        {
          name: 'The Anxious Tracker',
          description: 'Worries about overspending, checks balance often, seeks reassurance.'
        },
        {
          name: 'The Reluctant Budgeter',
          description: 'Wants to save but hates logging expenses manually.'
        },
        {
          name: 'The Growth Seeker',
          description: 'Has income and curiosity about investing but lacks guidance.'
        }
      ],
      constraints: [
        { item: 'Time: Built within a single semester.' },
        { item: 'Funding: No paid APIs or cloud storage.' },
        { item: 'Scope: Focused on prototype and AI chatbot integration; no live bank data yet.' },
        { item: 'Resources: Self-built UI components and limited testing participants.' }
      ],
      productConcept: 'Spendly is a mobile app that uses AI to interpret spending, explain trends, and guide users with simple suggestions. It\'s designed to be friendly, calm, and motivational the opposite of traditional finance apps. "See where your money goes, understand why, and take small steps toward your goals all without doing math."',
      firstPrototype: [
        'A basic dashboard with category charts',
        'A chatbot panel powered by Gemini AI',
        'Action cards suggesting micro-goals ("Save $10 this week")'
      ],
      testing: {
        participants: 5,
        ageRange: '18–23',
        tasks: [
          'Review monthly spending',
          'Chat with the AI for saving tips',
          'Respond to an action card'
        ],
        methods: [
          'Moderated usability testing (10–15 minutes each)',
          'Think-aloud feedback',
          'Follow-up discussion'
        ]
      },
      testingInsights: [
        'Users loved the chatbot tone — "It feels like a friend, not an app."',
        'Charts were clear, but some wanted interactivity.',
        'Action cards motivated small savings, but users wanted confirmation after each action.',
        'Font size and contrast needed improvement for readability.',
        'AI suggestions felt smart but could be more personalized.'
      ],
      designDecisions: [
        {
          challenge: 'Users didn\'t notice the chatbot',
          change: 'Added animation + icon cue',
          result: 'Increased engagement'
        },
        {
          challenge: 'Fonts too small on mobile',
          change: 'Increased text size + spacing',
          result: 'Easier readability'
        },
        {
          challenge: 'Action cards unclear',
          change: 'Added success states ("Goal set!")',
          result: 'Better feedback loop'
        },
        {
          challenge: 'Too much text on graphs',
          change: 'Simplified data view',
          result: 'Cleaner visual flow'
        }
      ],
      techStack: [
        { category: 'Frontend', items: ['React Native', 'Expo'] },
        { category: 'AI Engine', items: ['Google Gemini 2.5 Flash'] },
        { category: 'Charts', items: ['react-native-chart-kit', 'SVG'] },
        { category: 'Navigation', items: ['React Navigation (Stack + Tabs)'] },
        { category: 'Data Storage', items: ['AsyncStorage (local device)'] },
        { category: 'Styling', items: ['LinearGradient', 'Animated API for transitions'] },
        { category: 'Coding Tools', items: ['Cursor (AI-assisted IDE)', '"vibe coding" for creative iteration'] }
      ],
      userJourneyLearnings: [
        'Users need a sense of progress and small wins keep them motivated.',
        'They prefer automation over manual input.',
        'A conversational UI increases trust and engagement far more than dashboards alone.'
      ],
      nextSteps: [
        'Integrate Credit & Banking APIs — So users no longer need to manually input expenses.',
        'Enhance AI Capabilities — Improve personalization and financial goal recommendations.',
        'Deploy on App Stores — Launch Spendly for real user testing and feedback.'
      ],
      learnings: [
        'Initially, I tried to add too many features tracking, reminders, and rewards but learned to simplify the MVP.',
        'Early testers misunderstood some icons, teaching me the value of clear microcopy.',
        'I also realized that AI alone isn\'t enough design tone and trust matter just as much.'
      ],
      keyTakeaways: [
        'Good design starts with empathy, not technology.',
        'Research shapes every decision; user voices matter.',
        'Prototyping fast and testing early saved time and improved the product.',
        'Combining research, design, and coding gave me a full view of how digital products come to life, bridging creativity and technology.'
      ],
      thoughts: 'Spendly taught me how to merge design thinking with AI technology to solve real-world problems. It\'s more than a budgeting app, it\'s a reflection of how smart design can make something complex feel human, approachable, and empowering.'
    }
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
    const linkHref = link.getAttribute('href');
    // Handle both regular sections and works section
    if (linkHref === `#${current}` || (current === 'works' && linkHref === '#works')) {
      link.classList.add('active');
    }
  });
  
  // Update URL on scroll (but don't trigger navigation)
  if (current && !window.location.hash.startsWith('#works/')) {
    const currentHash = window.location.hash.substring(1);
    if (currentHash !== current && !currentHash.includes('/')) {
      // Only update if it's a simple section hash, not a project
      window.history.replaceState({ type: 'section', section: current }, '', `#${current}`);
    }
  }
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
        // Update URL to works/projectname format
        window.history.pushState({ type: 'project', project: projectKey }, '', `#works/${projectKey}`);
        openModal(project, projectKey);
      }
    }
  });
});

// Helper function to create a section
function createSection(title, content) {
  const section = document.createElement('section');
  section.style.cssText = `
    margin-bottom: 5rem;
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: var(--transition);
  `;
  
  section.addEventListener('mouseenter', () => {
    section.style.background = 'rgba(255, 255, 255, 0.03)';
    section.style.borderColor = 'rgba(251, 169, 166, 0.2)';
  });
  
  section.addEventListener('mouseleave', () => {
    section.style.background = 'rgba(255, 255, 255, 0.02)';
    section.style.borderColor = 'rgba(255, 255, 255, 0.05)';
  });
  
  const sectionTitle = document.createElement('h3');
  sectionTitle.textContent = title;
  sectionTitle.style.cssText = `
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    color: var(--color-white);
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--color-accent);
    display: inline-block;
  `;
  section.appendChild(sectionTitle);
  
  if (typeof content === 'string') {
    const p = document.createElement('p');
    p.textContent = content;
    p.style.cssText = `
      font-size: 1.25rem;
      line-height: 2;
      color: var(--color-text);
      margin-bottom: 0;
      max-width: 100%;
    `;
    section.appendChild(p);
  } else if (content instanceof HTMLElement) {
    section.appendChild(content);
  }
  
  return section;
}

// Helper function to create a two-column layout with text and image
function createTextImageLayout(textContent, imgSrc, altText) {
  const container = document.createElement('div');
  container.className = 'text-image-layout';
  container.style.cssText = `
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    margin: 2rem 0;
    flex-wrap: wrap;
  `;
  
  // Text content wrapper
  const textWrapper = document.createElement('div');
  textWrapper.style.cssText = `
    flex: 1 1 60%;
    min-width: 300px;
    max-width: 65%;
  `;
  
  if (typeof textContent === 'string') {
    const p = document.createElement('p');
    p.textContent = textContent;
    p.style.cssText = `
      font-size: 1.3rem;
      line-height: 1.9;
      color: var(--color-text);
      margin: 0;
    `;
    textWrapper.appendChild(p);
  } else if (textContent instanceof HTMLElement) {
    textWrapper.appendChild(textContent);
  }
  
  // Image wrapper
  const imageWrapper = document.createElement('div');
  imageWrapper.style.cssText = `
    flex: 0 0 300px;
    max-width: 35%;
    min-width: 250px;
  `;
  
  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = altText || 'Project screenshot';
  img.style.cssText = `
    width: 100%;
    max-width: 100%;
    max-height: 500px;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: var(--transition);
    display: block;
  `;
  
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.02)';
    img.style.boxShadow = '0 15px 50px rgba(251, 169, 166, 0.2)';
  });
  
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
  });
  
  // Click to view full size
  img.addEventListener('click', () => {
    const fullSizeModal = document.createElement('div');
    fullSizeModal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.98);
      z-index: 3000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      cursor: pointer;
      animation: fadeIn 0.3s ease;
    `;
    
    const fullSizeImg = document.createElement('img');
    fullSizeImg.src = imgSrc;
    fullSizeImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 50px;
      height: 50px;
      background: var(--color-white);
      color: var(--color-bg);
      border: none;
      border-radius: 50%;
      font-size: 2rem;
      cursor: pointer;
      transition: var(--transition);
      z-index: 3001;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
      closeBtn.style.background = 'var(--color-accent)';
      closeBtn.style.transform = 'rotate(90deg)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
      closeBtn.style.background = 'var(--color-white)';
      closeBtn.style.transform = 'rotate(0deg)';
    });
    
    const closeModal = () => {
      document.body.removeChild(fullSizeModal);
      document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    fullSizeModal.addEventListener('click', (e) => {
      if (e.target === fullSizeModal) closeModal();
    });
    
    document.addEventListener('keydown', function escHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', escHandler);
      }
    });
    
    fullSizeModal.appendChild(fullSizeImg);
    fullSizeModal.appendChild(closeBtn);
    document.body.appendChild(fullSizeModal);
    document.body.style.overflow = 'hidden';
  });
  
  img.onerror = function() {
    imageWrapper.style.display = 'none';
  };
  
  imageWrapper.appendChild(img);
  container.appendChild(textWrapper);
  container.appendChild(imageWrapper);
  
  return container;
}

// Helper function to add a centered image (for non-caseStudy projects)
function addCenteredImage(imgSrc, altText, index = 0) {
  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = altText || 'Project screenshot';
  img.style.animationDelay = `${index * 0.1}s`;
  
  img.onerror = function() {
    console.error(`Failed to load image: ${imgSrc}`);
  };

  return img;
}

// Helper function to create a list
function createList(items, isOrdered = false) {
  const list = document.createElement(isOrdered ? 'ol' : 'ul');
  list.style.cssText = `
    list-style: none;
    padding-left: 0;
    margin: 1.5rem 0;
  `;
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.style.cssText = `
      padding: 0.75rem 0;
      padding-left: 1.5rem;
      position: relative;
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--color-text);
    `;
    
    if (!isOrdered) {
      li.style.cssText += `
        padding-left: 1.5rem;
      `;
      li.innerHTML = `<span style="position: absolute; left: 0; color: var(--color-accent);">•</span> ${item}`;
    } else {
      li.textContent = item;
    }
    
    list.appendChild(li);
  });
  
  return list;
}

function openModal(project, projectKey = null) {
  // URL is already updated by the click handler, so we don't update it here
  // Clear previous content
  modalBody.innerHTML = '';
  
  // Ensure close button is always visible
  const closeButton = document.getElementById('modalClose');
  if (closeButton) {
    closeButton.style.display = 'flex';
    closeButton.style.visibility = 'visible';
    closeButton.style.opacity = '1';
    closeButton.style.zIndex = '99999';
    closeButton.style.position = 'fixed';
    closeButton.style.pointerEvents = 'auto';
  }
  
  // Adjust modal width based on whether project has case study
  const modalContent = document.querySelector('.modal-content');
  const modalElement = document.getElementById('projectModal');
  
  if (project.caseStudy) {
    // Spendly - keep narrower width for readability
    modalContent.classList.remove('fullscreen');
    modalContent.style.maxWidth = '1000px';
    modalContent.style.padding = '3rem';
    modalContent.style.margin = '4rem auto';
    modalElement.style.background = 'rgba(0, 0, 0, 0.95)';
  
  // Add project title
  const title = document.createElement('h2');
  title.textContent = project.title;
  title.style.cssText = `
    font-family: var(--font-heading);
      font-size: clamp(2rem, 4vw, 3.5rem);
    color: var(--color-white);
      margin-bottom: 1rem;
    text-align: center;
  `;
  modalBody.appendChild(title);
  } else {
    // Other projects - full screen for maximum image size
    modalContent.classList.add('fullscreen');
    modalContent.style.maxWidth = '100vw';
    modalContent.style.width = '100vw';
    modalContent.style.padding = '0';
    modalContent.style.margin = '0';
    modalContent.style.overflow = 'visible';
    modalContent.style.background = 'transparent';
    // Keep dark background for visibility
    modalElement.style.background = 'rgba(0, 0, 0, 0.95)';
    modalElement.style.backdropFilter = 'none'; // Remove backdrop filter to fix close button positioning
    modalElement.style.overflow = 'auto';
    // Don't add title for full-screen projects - images take full space
  }
  
  // Add project metadata (duration and roles) if available - only for case study projects
  if (project.caseStudy && (project.duration || project.roles)) {
    const metadataContainer = document.createElement('div');
    metadataContainer.style.cssText = `
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      font-size: 1.1rem;
      color: var(--color-text-muted);
    `;
    
    if (project.duration) {
      const duration = document.createElement('div');
      duration.innerHTML = `<strong style="color: var(--color-accent);">Duration:</strong> ${project.duration}`;
      metadataContainer.appendChild(duration);
    }
    
    if (project.roles && project.roles.length > 0) {
      const roles = document.createElement('div');
      roles.innerHTML = `<strong style="color: var(--color-accent);">Roles:</strong> ${project.roles.join(', ')}`;
      metadataContainer.appendChild(roles);
    }
    
    modalBody.appendChild(metadataContainer);
  }
  
  // Add technologies if available - only for case study projects
  if (project.caseStudy && project.technologies && project.technologies.length > 0) {
    const techContainer = document.createElement('div');
    techContainer.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 3rem;
    `;
    
    project.technologies.forEach(tech => {
      const techTag = document.createElement('span');
      techTag.textContent = tech;
      techTag.style.cssText = `
        padding: 0.5rem 1rem;
        background: var(--color-bg-secondary);
        color: var(--color-accent);
        border-radius: 20px;
        font-size: 1rem;
        border: 1px solid rgba(251, 169, 166, 0.3);
      `;
      techContainer.appendChild(techTag);
    });
    
    modalBody.appendChild(techContainer);
  }
  
  // Add links if available - only for case study projects
  if (project.caseStudy && (project.githubLink || project.demoLink)) {
    const linksContainer = document.createElement('div');
    linksContainer.style.cssText = `
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    `;
    
    if (project.githubLink && !project.githubLink.includes('[')) {
      const githubLink = document.createElement('a');
      githubLink.href = project.githubLink;
      githubLink.target = '_blank';
      githubLink.rel = 'noopener noreferrer';
      githubLink.textContent = 'View on GitHub';
      githubLink.style.cssText = `
        padding: 0.8rem 2rem;
        background: var(--color-accent);
        color: var(--color-bg);
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        transition: var(--transition);
      `;
      githubLink.addEventListener('mouseenter', () => {
        githubLink.style.background = 'var(--color-accent-hover)';
        githubLink.style.transform = 'translateY(-2px)';
      });
      githubLink.addEventListener('mouseleave', () => {
        githubLink.style.background = 'var(--color-accent)';
        githubLink.style.transform = 'translateY(0)';
      });
      linksContainer.appendChild(githubLink);
    }
    
    if (project.demoLink && !project.demoLink.includes('[')) {
      const demoLink = document.createElement('a');
      demoLink.href = project.demoLink;
      demoLink.target = '_blank';
      demoLink.rel = 'noopener noreferrer';
      demoLink.textContent = 'Live Demo';
      demoLink.style.cssText = `
        padding: 0.8rem 2rem;
        border: 1px solid var(--color-accent);
        color: var(--color-accent);
        text-decoration: none;
        border-radius: 50px;
        font-weight: 600;
        transition: var(--transition);
      `;
      demoLink.addEventListener('mouseenter', () => {
        demoLink.style.background = 'var(--color-accent)';
        demoLink.style.color = 'var(--color-bg)';
        demoLink.style.transform = 'translateY(-2px)';
      });
      demoLink.addEventListener('mouseleave', () => {
        demoLink.style.background = 'transparent';
        demoLink.style.color = 'var(--color-accent)';
        demoLink.style.transform = 'translateY(0)';
      });
      linksContainer.appendChild(demoLink);
    }
    
    modalBody.appendChild(linksContainer);
  }
  
  // If project has case study, display detailed content
  if (project.caseStudy) {
    const cs = project.caseStudy;
    
    // Overview
    if (cs.overview) {
      const overviewSection = document.createElement('section');
      overviewSection.style.cssText = `
        margin-bottom: 5rem;
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 16px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: var(--transition);
      `;
      
      overviewSection.addEventListener('mouseenter', () => {
        overviewSection.style.background = 'rgba(255, 255, 255, 0.03)';
        overviewSection.style.borderColor = 'rgba(251, 169, 166, 0.2)';
      });
      
      overviewSection.addEventListener('mouseleave', () => {
        overviewSection.style.background = 'rgba(255, 255, 255, 0.02)';
        overviewSection.style.borderColor = 'rgba(255, 255, 255, 0.05)';
      });
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Overview';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.8rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      overviewSection.appendChild(sectionTitle);
      
      const p = document.createElement('p');
      p.textContent = cs.overview;
      p.style.cssText = `
        font-size: 1.25rem;
        line-height: 2;
        color: var(--color-text);
        margin-bottom: 0;
        max-width: 100%;
      `;
      overviewSection.appendChild(p);
      
      modalBody.appendChild(overviewSection);
    }
    
    // Inspiration
    if (cs.inspiration) {
      modalBody.appendChild(createSection('Inspiration', cs.inspiration));
    }
    
    // Problem Framing
    if (cs.researchMethods || cs.keyInsights) {
      const problemSection = document.createElement('section');
      problemSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Problem Framing';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      problemSection.appendChild(sectionTitle);
      
      // Research Methods
      if (cs.researchMethods && cs.researchMethods.length > 0) {
        const methodsTitle = document.createElement('h4');
        methodsTitle.textContent = 'Research Methods';
        methodsTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(methodsTitle);
        
        const methodsText = document.createElement('p');
        methodsText.textContent = `To understand this behavior, I conducted 6 user interviews with early earners aged 18–25, including college students and recent graduates. I also reviewed articles on behavioral finance and personal savings psychology to understand why young people delay saving or budgeting.`;
        methodsText.style.cssText = `
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--color-text);
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(methodsText);
        
        problemSection.appendChild(createList(cs.researchMethods));
      }
      
      // Key Insights
      if (cs.keyInsights && cs.keyInsights.length > 0) {
        const insightsTitle = document.createElement('h4');
        insightsTitle.textContent = 'Key Insights from Primary Research';
        insightsTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(insightsTitle);
        
        cs.keyInsights.forEach(insight => {
          const insightCard = document.createElement('div');
          insightCard.style.cssText = `
            background: var(--color-bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 3px solid var(--color-accent);
          `;
          
          const insightTitle = document.createElement('p');
          insightTitle.textContent = insight.title;
          insightTitle.style.cssText = `
            font-weight: 600;
            color: var(--color-white);
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
          `;
          insightCard.appendChild(insightTitle);
          
          if (insight.quote) {
            const quote = document.createElement('p');
            quote.textContent = insight.quote;
            quote.style.cssText = `
              color: var(--color-text-muted);
              font-style: italic;
              margin: 0;
              font-size: 1.1rem;
            `;
            insightCard.appendChild(quote);
          }
          
          problemSection.appendChild(insightCard);
        });
      }
      
      // Secondary Insights
      if (cs.secondaryInsights && cs.secondaryInsights.length > 0) {
        const secTitle = document.createElement('h4');
        secTitle.textContent = 'Insights from Secondary Research';
        secTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(secTitle);
        problemSection.appendChild(createList(cs.secondaryInsights));
      }
      
      // User Archetypes
      if (cs.userArchetypes && cs.userArchetypes.length > 0) {
        const archTitle = document.createElement('h4');
        archTitle.textContent = 'User Archetypes';
        archTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(archTitle);
        
        cs.userArchetypes.forEach(archetype => {
          const archCard = document.createElement('div');
          archCard.style.cssText = `
            background: var(--color-bg-secondary);
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 1rem;
          `;
          
          const archName = document.createElement('p');
          archName.innerHTML = `<strong style="color: var(--color-accent);">${archetype.name}</strong>`;
          archName.style.cssText = `
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
          `;
          archCard.appendChild(archName);
          
          const archDesc = document.createElement('p');
          archDesc.textContent = archetype.description;
          archDesc.style.cssText = `
            color: var(--color-text);
            margin: 0;
            font-size: 1.1rem;
          `;
          archCard.appendChild(archDesc);
          
          problemSection.appendChild(archCard);
        });
      }
      
      // Constraints
      if (cs.constraints && cs.constraints.length > 0) {
        const constTitle = document.createElement('h4');
        constTitle.textContent = 'Design Limitations / Constraints';
        constTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        problemSection.appendChild(constTitle);
        problemSection.appendChild(createList(cs.constraints.map(c => c.item)));
      }
      
      modalBody.appendChild(problemSection);
    }
    
    // Solution
    if (cs.productConcept) {
      const solutionSection = document.createElement('section');
      solutionSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Solution';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      solutionSection.appendChild(sectionTitle);
      
      const p = document.createElement('p');
      p.textContent = cs.productConcept;
      p.style.cssText = `
        font-size: 1.3rem;
        line-height: 1.9;
        color: var(--color-text);
        margin-bottom: 1rem;
      `;
      solutionSection.appendChild(p);
      
      modalBody.appendChild(solutionSection);
    }
    
    // Development Journey
    if (cs.firstPrototype || cs.testing) {
      const devSection = document.createElement('section');
      devSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Development Journey';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      devSection.appendChild(sectionTitle);
      
      const devText = document.createElement('p');
      devText.textContent = 'After finalizing wireframes and design flows in Figma, I moved into building the app using React Native and Expo, which allowed me to quickly test on both iOS and Android devices. I focused on a simple, intuitive UI — clean charts, smooth navigation, and a friendly color palette to make finance feel approachable.';
      devText.style.cssText = `
        font-size: 1.2rem;
        line-height: 1.9;
        color: var(--color-text);
        margin-bottom: 2rem;
      `;
      devSection.appendChild(devText);
      
      // First Prototype
      if (cs.firstPrototype && cs.firstPrototype.length > 0) {
        const protoTitle = document.createElement('h4');
        protoTitle.textContent = 'First Prototype';
        protoTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-bottom: 1rem;
        `;
        devSection.appendChild(protoTitle);
        
        const protoText = document.createElement('p');
        protoText.textContent = 'The initial prototype included:';
        protoText.style.cssText = `
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 1rem;
        `;
        
        devSection.appendChild(protoText);
        devSection.appendChild(createList(cs.firstPrototype));
      }
      
      // Prototype Images Gallery (always show for Spendly)
      if (project.title && project.title.includes('Spendly')) {
        const prototypeImages = [
          './image/lofi_prototype/Home.png',
          './image/lofi_prototype/Expenses.png',
          './image/lofi_prototype/Expenses-1.png',
          './image/lofi_prototype/Setting.png',
          './image/lofi_prototype/FI.png',
          './image/lofi_prototype/FI-1.png'
        ];
        
              const prototypeImagesTitle = document.createElement('h4');
              prototypeImagesTitle.textContent = 'Lo-Fi Prototype';
              prototypeImagesTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        devSection.appendChild(prototypeImagesTitle);
        
        const prototypeGallery = document.createElement('div');
        prototypeGallery.style.cssText = `
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
          width: 100%;
        `;
        
        // Responsive: 2 columns on medium screens, 1 on small
        const responsiveStyle = document.createElement('style');
        responsiveStyle.textContent = `
          @media (max-width: 900px) {
            .prototype-gallery {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .prototype-gallery {
              grid-template-columns: 1fr !important;
            }
          }
        `;
        document.head.appendChild(responsiveStyle);
        
        // Add scrollbar styling for webkit browsers
        const style = document.createElement('style');
        style.textContent = `
          .prototype-gallery::-webkit-scrollbar {
            height: 8px;
          }
          .prototype-gallery::-webkit-scrollbar-track {
            background: transparent;
          }
          .prototype-gallery::-webkit-scrollbar-thumb {
            background: var(--color-accent);
            border-radius: 4px;
          }
          .prototype-gallery::-webkit-scrollbar-thumb:hover {
            background: var(--color-accent-hover);
          }
        `;
        document.head.appendChild(style);
        prototypeGallery.className = 'prototype-gallery';
        
        prototypeImages.forEach((imgSrc, index) => {
          const imgContainer = document.createElement('div');
          imgContainer.style.cssText = `
            width: 100%;
            height: 500px;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            background: var(--color-bg-secondary);
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
          `;
          
          imgContainer.addEventListener('mouseenter', () => {
            imgContainer.style.transform = 'translateY(-5px)';
            imgContainer.style.boxShadow = '0 15px 40px rgba(251, 169, 166, 0.2)';
          });
          
          imgContainer.addEventListener('mouseleave', () => {
            imgContainer.style.transform = 'translateY(0)';
            imgContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
          });
          
    const img = document.createElement('img');
    img.src = imgSrc;
          img.alt = `Prototype screen ${index + 1}`;
          img.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            display: block;
          `;
          
          img.onload = function() {
            console.log('Successfully loaded:', imgSrc);
          };
          
          img.onerror = function() {
            console.error('Failed to load image:', imgSrc);
            imgContainer.style.border = '2px dashed var(--color-accent)';
            imgContainer.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--color-text-muted); padding: 1rem; text-align: center;">Image ${index + 1}<br/>not found</div>`;
          };
          
          // Click to view full size
          imgContainer.addEventListener('click', () => {
            const fullSizeModal = document.createElement('div');
            fullSizeModal.style.cssText = `
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.98);
              z-index: 3000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              cursor: pointer;
              animation: fadeIn 0.3s ease;
            `;
            
            const fullSizeImg = document.createElement('img');
            fullSizeImg.src = imgSrc;
            fullSizeImg.style.cssText = `
              max-width: 90%;
              max-height: 90%;
              object-fit: contain;
              border-radius: 12px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            `;
            
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.cssText = `
              position: absolute;
              top: 2rem;
              right: 2rem;
              width: 50px;
              height: 50px;
              background: var(--color-white);
              color: var(--color-bg);
              border: none;
              border-radius: 50%;
              font-size: 2rem;
              cursor: pointer;
              transition: var(--transition);
              z-index: 3001;
            `;
            
            const closeModal = () => {
              document.body.removeChild(fullSizeModal);
              document.body.style.overflow = '';
            };
            
            closeBtn.addEventListener('click', closeModal);
            fullSizeModal.addEventListener('click', (e) => {
              if (e.target === fullSizeModal) closeModal();
            });
            
            document.addEventListener('keydown', function escHandler(e) {
              if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
              }
            });
            
            fullSizeModal.appendChild(fullSizeImg);
            fullSizeModal.appendChild(closeBtn);
            document.body.appendChild(fullSizeModal);
            document.body.style.overflow = 'hidden';
          });
          
          imgContainer.appendChild(img);
          prototypeGallery.appendChild(imgContainer);
        });
        
        devSection.appendChild(prototypeGallery);
      }
      
      // Testing
      if (cs.testing) {
        const testTitle = document.createElement('h4');
        testTitle.textContent = 'Testing';
        testTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        devSection.appendChild(testTitle);
        
        const testText = document.createElement('p');
        testText.textContent = `I tested the prototype with ${cs.testing.participants} participants aged ${cs.testing.ageRange}. Each user was asked to complete three tasks:`;
        testText.style.cssText = `
          font-size: 1.2rem;
          line-height: 1.9;
          color: var(--color-text);
          margin-bottom: 1rem;
        `;
        devSection.appendChild(testText);
        
        devSection.appendChild(createList(cs.testing.tasks));
        
        const methodText = document.createElement('p');
        methodText.textContent = 'Method:';
        methodText.style.cssText = `
          font-size: 1.2rem;
          color: var(--color-text);
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
        `;
        devSection.appendChild(methodText);
        
        devSection.appendChild(createList(cs.testing.methods));
      }
      
      // Testing Insights
      if (cs.testingInsights && cs.testingInsights.length > 0) {
        const testInsightsTitle = document.createElement('h4');
        testInsightsTitle.textContent = 'Testing Insights';
        testInsightsTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        devSection.appendChild(testInsightsTitle);
        
        devSection.appendChild(createList(cs.testingInsights));
      }
      
      modalBody.appendChild(devSection);
    }
    
    // Design Decisions Table
    if (cs.designDecisions && cs.designDecisions.length > 0) {
      const designSection = document.createElement('section');
      designSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Design Decisions';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      designSection.appendChild(sectionTitle);
      
      const table = document.createElement('table');
      table.style.cssText = `
        width: 100%;
        border-collapse: collapse;
        margin-top: 1.5rem;
      `;
      
      // Table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      ['Challenge', 'Design Change', 'Result'].forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.cssText = `
          padding: 1rem;
          text-align: left;
          background: var(--color-bg-secondary);
          color: var(--color-accent);
          font-weight: 600;
          font-size: 1.2rem;
          border-bottom: 2px solid var(--color-accent);
        `;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
      
      // Table body
      const tbody = document.createElement('tbody');
      cs.designDecisions.forEach(decision => {
        const row = document.createElement('tr');
        row.style.cssText = `
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        `;
        
        [decision.challenge, decision.change, decision.result].forEach(text => {
          const td = document.createElement('td');
          td.textContent = text;
          td.style.cssText = `
            padding: 1rem;
            color: var(--color-text);
            font-size: 1.1rem;
          `;
          row.appendChild(td);
        });
        
        tbody.appendChild(row);
      });
      table.appendChild(tbody);
      designSection.appendChild(table);
      
      modalBody.appendChild(designSection);
    }
    
    // Add image carousel after Design Decisions (Visuals section) - Only for Spendly
    if (project.caseStudy && project.images && project.images.length > 0) {
      const carouselSection = document.createElement('section');
      carouselSection.style.cssText = `
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const carouselTitle = document.createElement('h3');
      carouselTitle.textContent = 'Visuals';
      carouselTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      carouselSection.appendChild(carouselTitle);
      
      // Photo gallery container (similar to about section)
      const photoGallery = document.createElement('div');
      photoGallery.className = 'photo-gallery project-visuals-gallery';
      photoGallery.style.cssText = `
        width: 100%;
        overflow: hidden;
        padding: 2rem 0;
        position: relative;
        margin-top: 2rem;
      `;
      
      // Gallery track with continuous scroll animation
      const galleryTrack = document.createElement('div');
      galleryTrack.className = 'gallery-track project-visuals-track';
      galleryTrack.style.cssText = `
        display: flex;
        gap: 2rem;
        will-change: transform;
      `;
      
      // Calculate animation duration based on number of images
      const imageCount = project.images.length;
      const itemWidth = 400; // Same as about section
      const gap = 32; // 2rem = 32px
      
      // Add images to gallery (duplicate for seamless infinite loop)
      [...project.images, ...project.images].forEach((imgSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item project-visuals-item';
        galleryItem.style.cssText = `
          flex-shrink: 0;
          width: 400px;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        `;
        
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = `${project.title} - Image ${(index % imageCount) + 1}`;
        img.style.cssText = `
          max-width: 100%;
          max-height: 600px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          transition: var(--transition);
        `;
        
        // Click to view full size
        img.addEventListener('click', () => {
          const fullSizeModal = document.createElement('div');
          fullSizeModal.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.98);
            z-index: 3000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
          `;
          
          const fullSizeImg = document.createElement('img');
          fullSizeImg.src = imgSrc;
          fullSizeImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          `;
          
          const closeBtn = document.createElement('button');
          closeBtn.innerHTML = '&times;';
          closeBtn.style.cssText = `
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: var(--color-white);
            color: var(--color-bg);
            border: none;
            border-radius: 50%;
            font-size: 2rem;
            cursor: pointer;
            transition: var(--transition);
            z-index: 3001;
          `;
          
          closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = 'var(--color-accent)';
            closeBtn.style.transform = 'rotate(90deg)';
          });
          
          closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = 'var(--color-white)';
            closeBtn.style.transform = 'rotate(0deg)';
          });
          
          const closeModal = () => {
            document.body.removeChild(fullSizeModal);
            document.body.style.overflow = '';
          };
          
          closeBtn.addEventListener('click', closeModal);
          fullSizeModal.addEventListener('click', (e) => {
            if (e.target === fullSizeModal) closeModal();
          });
          
          document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
              closeModal();
              document.removeEventListener('keydown', escHandler);
            }
          });
          
          fullSizeModal.appendChild(fullSizeImg);
          fullSizeModal.appendChild(closeBtn);
          document.body.appendChild(fullSizeModal);
          document.body.style.overflow = 'hidden';
        });
        
        img.onerror = function() {
          galleryItem.style.display = 'none';
        };
        
        galleryItem.appendChild(img);
        galleryTrack.appendChild(galleryItem);
      });
      
      // Add CSS animation dynamically
      const animationDuration = Math.max(30, imageCount * 3); // Minimum 30s, 3s per image
      const style = document.createElement('style');
      style.textContent = `
        @keyframes scrollProjectVisuals {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${itemWidth}px * ${imageCount} - ${gap}px * ${imageCount}));
          }
        }
        
        .project-visuals-track {
          animation: scrollProjectVisuals ${animationDuration}s linear infinite;
        }
        
        .project-visuals-track:hover {
          animation-play-state: paused;
        }
      `;
      document.head.appendChild(style);
      
      photoGallery.appendChild(galleryTrack);
      carouselSection.appendChild(photoGallery);
      modalBody.appendChild(carouselSection);
    }
    
    // Technology Stack
    if (cs.techStack && cs.techStack.length > 0) {
      const techSection = document.createElement('section');
      techSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Technology Behind Spendly';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      techSection.appendChild(sectionTitle);
      
      const techWrapper = document.createElement('div');
      cs.techStack.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.style.cssText = `
          margin-bottom: 1rem;
        `;
        
        const techLabel = document.createElement('span');
        techLabel.innerHTML = `<strong style="color: var(--color-accent);">${tech.category}:</strong> `;
        techLabel.style.cssText = `
          font-size: 1.2rem;
          color: var(--color-text);
        `;
        
        const techValues = document.createElement('span');
        techValues.textContent = tech.items.join(' + ');
        techValues.style.cssText = `
          color: var(--color-text-muted);
        `;
        
        techItem.appendChild(techLabel);
        techItem.appendChild(techValues);
        techWrapper.appendChild(techItem);
      });
      
      techSection.appendChild(techWrapper);
      
      modalBody.appendChild(techSection);
    }
    
    // Service Blueprint & Storyboard Section
    const blueprintSection = document.createElement('section');
    blueprintSection.style.cssText = `
      margin-bottom: 4rem;
      padding-bottom: 3rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    const blueprintTitle = document.createElement('h3');
    blueprintTitle.textContent = 'Service Blueprint & Storyboard';
    blueprintTitle.style.cssText = `
      font-family: var(--font-heading);
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      color: var(--color-white);
      margin-bottom: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--color-accent);
      display: inline-block;
    `;
    blueprintSection.appendChild(blueprintTitle);
    
    const blueprintGrid = document.createElement('div');
    blueprintGrid.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    `;
    
    // Service Blueprint image (first)
    const blueprintContainer = document.createElement('div');
    blueprintContainer.style.cssText = `
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      background: var(--color-bg-secondary);
      cursor: pointer;
      transition: var(--transition);
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    blueprintContainer.addEventListener('mouseenter', () => {
      blueprintContainer.style.transform = 'translateY(-5px)';
      blueprintContainer.style.boxShadow = '0 15px 50px rgba(251, 169, 166, 0.2)';
    });
    
    blueprintContainer.addEventListener('mouseleave', () => {
      blueprintContainer.style.transform = 'translateY(0)';
      blueprintContainer.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
    });
    
    const blueprintImg = document.createElement('img');
    blueprintImg.src = './image/spendly/service blueprint.jpg';
    blueprintImg.alt = 'Service Blueprint';
    blueprintImg.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      transition: var(--transition);
    `;
    
    blueprintImg.onerror = function() {
      blueprintContainer.style.display = 'none';
    };
    
    // Click to view full size
    blueprintContainer.addEventListener('click', () => {
      const fullSizeModal = document.createElement('div');
      fullSizeModal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.98);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
      `;
      
      const fullSizeImg = document.createElement('img');
      fullSizeImg.src = './image/spendly/service blueprint.jpg';
      fullSizeImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      `;
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--color-white);
        color: var(--color-bg);
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        cursor: pointer;
        transition: var(--transition);
        z-index: 3001;
      `;
      
      const closeModal = () => {
        document.body.removeChild(fullSizeModal);
        document.body.style.overflow = '';
      };
      
      closeBtn.addEventListener('click', closeModal);
      fullSizeModal.addEventListener('click', (e) => {
        if (e.target === fullSizeModal) closeModal();
      });
      
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', escHandler);
        }
      });
      
      fullSizeModal.appendChild(fullSizeImg);
      fullSizeModal.appendChild(closeBtn);
      document.body.appendChild(fullSizeModal);
      document.body.style.overflow = 'hidden';
    });
    
    blueprintContainer.appendChild(blueprintImg);
    blueprintGrid.appendChild(blueprintContainer);
    
    // Storyboard image (second)
    const storyboardContainer = document.createElement('div');
    storyboardContainer.style.cssText = `
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
      background: var(--color-bg-secondary);
      cursor: pointer;
      transition: var(--transition);
      height: 500px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    storyboardContainer.addEventListener('mouseenter', () => {
      storyboardContainer.style.transform = 'translateY(-5px)';
      storyboardContainer.style.boxShadow = '0 15px 50px rgba(251, 169, 166, 0.2)';
    });
    
    storyboardContainer.addEventListener('mouseleave', () => {
      storyboardContainer.style.transform = 'translateY(0)';
      storyboardContainer.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
    });
    
    const storyboardImg = document.createElement('img');
    storyboardImg.src = './image/spendly/story board.png';
    storyboardImg.alt = 'Storyboard';
    storyboardImg.style.cssText = `
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      transition: var(--transition);
    `;
    
    storyboardImg.onerror = function() {
      storyboardContainer.style.display = 'none';
    };
    
    // Click to view full size
    storyboardContainer.addEventListener('click', () => {
      const fullSizeModal = document.createElement('div');
      fullSizeModal.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.98);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        cursor: pointer;
        animation: fadeIn 0.3s ease;
      `;
      
      const fullSizeImg = document.createElement('img');
      fullSizeImg.src = './image/spendly/story board.png';
      fullSizeImg.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      `;
      
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--color-white);
        color: var(--color-bg);
        border: none;
        border-radius: 50%;
        font-size: 2rem;
        cursor: pointer;
        transition: var(--transition);
        z-index: 3001;
      `;
      
      const closeModal = () => {
        document.body.removeChild(fullSizeModal);
        document.body.style.overflow = '';
      };
      
      closeBtn.addEventListener('click', closeModal);
      fullSizeModal.addEventListener('click', (e) => {
        if (e.target === fullSizeModal) closeModal();
      });
      
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', escHandler);
        }
      });
      
      fullSizeModal.appendChild(fullSizeImg);
      fullSizeModal.appendChild(closeBtn);
      document.body.appendChild(fullSizeModal);
      document.body.style.overflow = 'hidden';
    });
    
    storyboardContainer.appendChild(storyboardImg);
    blueprintGrid.appendChild(storyboardContainer);
    
    blueprintSection.appendChild(blueprintGrid);
    modalBody.appendChild(blueprintSection);
    
    // User Journey Learnings
    if (cs.userJourneyLearnings && cs.userJourneyLearnings.length > 0) {
      const learningsSection = document.createElement('section');
      learningsSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'User Journey Learnings';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      learningsSection.appendChild(sectionTitle);
      
      learningsSection.appendChild(createList(cs.userJourneyLearnings));
      
      modalBody.appendChild(learningsSection);
    }
    
    // Reflection
    if (cs.nextSteps || cs.learnings || cs.keyTakeaways) {
      const reflectionSection = document.createElement('section');
      reflectionSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Reflection';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      reflectionSection.appendChild(sectionTitle);
      
      // Next Steps
      if (cs.nextSteps && cs.nextSteps.length > 0) {
        const nextTitle = document.createElement('h4');
        nextTitle.textContent = 'Next Steps';
        nextTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        `;
        reflectionSection.appendChild(nextTitle);
        
        reflectionSection.appendChild(createList(cs.nextSteps));
      }
      
      // What Failed & Learned
      if (cs.learnings && cs.learnings.length > 0) {
        const learnTitle = document.createElement('h4');
        learnTitle.textContent = 'What Failed & What I Learned';
        learnTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        reflectionSection.appendChild(learnTitle);
        reflectionSection.appendChild(createList(cs.learnings));
      }
      
      // Key Takeaways
      if (cs.keyTakeaways && cs.keyTakeaways.length > 0) {
        const takeawaysTitle = document.createElement('h4');
        takeawaysTitle.textContent = 'Key Takeaways';
        takeawaysTitle.style.cssText = `
          font-size: 1.3rem;
          color: var(--color-accent);
          margin-top: 2rem;
          margin-bottom: 1rem;
        `;
        reflectionSection.appendChild(takeawaysTitle);
        
        reflectionSection.appendChild(createList(cs.keyTakeaways));
      }
      
      modalBody.appendChild(reflectionSection);
    }
    
    // Thoughts
    if (cs.thoughts) {
      const thoughtsSection = document.createElement('section');
      thoughtsSection.style.cssText = `
        margin-bottom: 4rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const sectionTitle = document.createElement('h3');
      sectionTitle.textContent = 'Thoughts';
      sectionTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      thoughtsSection.appendChild(sectionTitle);
      
      const thoughtsText = document.createElement('p');
      thoughtsText.textContent = cs.thoughts;
      thoughtsText.style.cssText = `
        font-size: 1.3rem;
        line-height: 1.9;
        color: var(--color-text);
        font-style: italic;
      `;
      thoughtsSection.appendChild(thoughtsText);
      
      modalBody.appendChild(thoughtsSection);
    }
    
    // Add video if available (before carousel)
    if (project.videoLink && !project.videoLink.includes('[')) {
      const videoSection = document.createElement('section');
      videoSection.style.cssText = `
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const videoTitle = document.createElement('h3');
      videoTitle.textContent = 'Video Demo';
      videoTitle.style.cssText = `
        font-family: var(--font-heading);
        font-size: clamp(1.5rem, 3vw, 2.5rem);
        color: var(--color-white);
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--color-accent);
        display: inline-block;
      `;
      videoSection.appendChild(videoTitle);
      
      const videoContainer = document.createElement('div');
      videoContainer.style.cssText = `
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        background: var(--color-bg-secondary);
      `;
      
      // Check if it's an embed URL (YouTube/Vimeo) or local file
      const isEmbedUrl = project.videoLink.includes('youtube.com/embed') || 
                         project.videoLink.includes('youtu.be') ||
                         project.videoLink.includes('youtube.com/watch') ||
                         project.videoLink.includes('vimeo.com');
      
      if (isEmbedUrl) {
        // Handle YouTube/Vimeo embed
        let embedUrl = project.videoLink;
        
        // Convert YouTube watch URL to embed URL if needed
        if (project.videoLink.includes('youtube.com/watch')) {
          const videoId = project.videoLink.split('v=')[1]?.split('&')[0];
          if (videoId) {
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
          }
        } else if (project.videoLink.includes('youtu.be/')) {
          const videoId = project.videoLink.split('youtu.be/')[1]?.split('?')[0];
          if (videoId) {
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
          }
        }
        
        const iframe = document.createElement('iframe');
        iframe.src = embedUrl;
        iframe.style.cssText = `
          width: 100%;
          aspect-ratio: 16/9;
          border: none;
          display: block;
        `;
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', 'true');
        videoContainer.appendChild(iframe);
      } else {
        // Handle local video file
        const video = document.createElement('video');
        video.src = project.videoLink;
        video.controls = true;
        video.style.cssText = `
          width: 100%;
          height: auto;
          display: block;
        `;
        video.setAttribute('preload', 'metadata');
        videoContainer.appendChild(video);
      }
      
      videoSection.appendChild(videoContainer);
      modalBody.appendChild(videoSection);
    }
  } else {
    // For projects without caseStudy, display images (original simple approach)
    if (project.images && project.images.length > 0) {
      project.images.forEach((imgSrc, index) => {
        modalBody.appendChild(addCenteredImage(imgSrc, `${project.title} - Image ${index + 1}`, index));
      });
    }
  }
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalElement = document.getElementById('projectModal');
  modalElement.classList.remove('active');
  document.body.style.overflow = 'auto';
  
  // Reset modal content and body styling
  const modalContent = document.querySelector('.modal-content');
  modalContent.classList.remove('fullscreen');
  modalContent.style.maxWidth = '';
  modalContent.style.padding = '';
  modalContent.style.margin = '';
  modalContent.style.overflow = '';
  modalBody.style.cssText = '';
  // Reset modal background
  modalElement.style.background = '';
  modalElement.style.backdropFilter = '';
  modalElement.style.overflow = '';
  
  // Update URL to just #works when closing project modal
  if (window.location.hash.startsWith('#works/')) {
    window.history.pushState({ type: 'section', section: 'works' }, '', '#works');
    // Scroll to works section
    const worksSection = document.getElementById('works');
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = 80; // Approximate header height
    const sectionTop = section.offsetTop - headerHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Handle navigation link clicks
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const sectionId = href.substring(1); // Remove #
    
    // Update URL
    window.history.pushState({ type: 'section', section: sectionId }, '', href);
    
    // Scroll to section
    scrollToSection(sectionId);
    
    // Close mobile menu if open
    nav.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Handle URL hash changes (browser back/forward buttons and direct links)
function handleHashChange() {
  const hash = window.location.hash.substring(1); // Remove #
  
  if (!hash) {
    // No hash - close modal if open
    if (modal.classList.contains('active')) {
      closeModal();
    }
    return;
  }
  
  // Check if it's a project URL (works/projectname)
  if (hash.startsWith('works/')) {
    const projectKey = hash.split('/')[1];
    if (projectKey && projects[projectKey]) {
      // Scroll to works section first
      scrollToSection('works');
      // Then open the project modal
      setTimeout(() => {
        openModal(projects[projectKey], projectKey);
      }, 300);
      return;
    }
  }
  
  // Check if it's a regular project hash (for backward compatibility)
  if (projects[hash]) {
    scrollToSection('works');
    setTimeout(() => {
      openModal(projects[hash], hash);
    }, 300);
    return;
  }
  
  // Otherwise, it's a section - scroll to it
  scrollToSection(hash);
  
  // Close modal if open
  if (modal.classList.contains('active')) {
    closeModal();
  }
}

window.addEventListener('popstate', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

// Check URL on page load
window.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure page is fully loaded
  setTimeout(() => {
    handleHashChange();
  }, 100);
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

