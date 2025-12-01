/**
 * Theme Toggle Functionality
 * Handles dark/light theme switching with smooth transitions and system preference detection
 */
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const html = document.documentElement;
  
  // Animation timing
  const TRANSITION_DURATION = 300; // ms - must match CSS transition duration
  
  // Function to set theme with smooth transition
  function setTheme(theme) {
    // Skip if already set to the requested theme
    const currentTheme = html.getAttribute('data-theme');
    if (currentTheme === theme) return;
    
    // Start transition
    html.classList.add('theme-transition');
    
    // Set the theme
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle state
    if (themeToggle) {
      themeToggle.checked = theme === 'dark';
    }
    
    // Update theme icons
    updateThemeIcons(theme);
    
    // Dispatch custom event for any additional theme-dependent scripts
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    
    // Remove transition class after animation completes
    setTimeout(() => {
      html.classList.remove('theme-transition');
    }, TRANSITION_DURATION);
  }
  
  /**
   * Update the theme toggle icons with smooth animations
   * @param {string} theme - The current theme ('light' or 'dark')
   */
  function updateThemeIcons(theme) {
    const sunIcon = document.querySelector('.theme-toggle-label .fa-sun');
    const moonIcon = document.querySelector('.theme-toggle-label .fa-moon');
    
    if (!sunIcon || !moonIcon) return;
    
    const isDark = theme === 'dark';
    const duration = 150; // ms - half of the transition duration
    
    // Apply initial styles
    sunIcon.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    moonIcon.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    
    if (isDark) {
      // Transition to dark mode (show sun, hide moon)
      sunIcon.style.transform = 'scale(1) rotate(0deg)';
      moonIcon.style.transform = 'scale(0.8) rotate(-90deg)';
      
      // Update opacities with slight delay for smoother transition
      requestAnimationFrame(() => {
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
      });
    } else {
      // Transition to light mode (show moon, hide sun)
      sunIcon.style.transform = 'scale(0.8) rotate(90deg)';
      moonIcon.style.transform = 'scale(1) rotate(0deg)';
      
      // Update opacities with slight delay for smoother transition
      requestAnimationFrame(() => {
        sunIcon.style.opacity = '0';
        moonIcon.style.opacity = '1';
      });
    }
  }
  
  /**
   * Initialize the theme based on user preference or system settings
   */
  function initTheme() {
    // Check for saved user preference first
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // If no saved preference, use system preference
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }
    
    // Make sure the theme is applied to the body as well
    document.body.classList.add('theme-loaded');
  }
  
  // Initialize theme when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
  
  // Theme toggle event listener with debounce
  let isToggling = false;
  const TOGGLE_DEBOUNCE = 300; // ms
  
  function handleThemeToggle() {
    if (isToggling) return;
    isToggling = true;
    
    const newTheme = themeToggle.checked ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Add haptic feedback on mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    
    // Prevent rapid toggling
    setTimeout(() => {
      isToggling = false;
    }, TOGGLE_DEBOUNCE);
  }
  
  // Add event listeners
  if (themeToggle) {
    // Click/tap event
    themeToggle.addEventListener('change', handleThemeToggle);
    
    // Keyboard navigation
    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.checked = !themeToggle.checked;
        handleThemeToggle();
      }
    });
  }
  
  // Listen for system theme changes (only if no manual preference is set)
  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // Add a class to the html element when JS is loaded
  // This helps prevent FOUC (Flash of Unstyled Content)
  document.documentElement.classList.add('js-loaded');
  
  // Dispatch an event when theme is ready
  window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    document.dispatchEvent(new CustomEvent('themeReady', { detail: { theme } }));
  });
  
  // Add smooth transitions for theme changes
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --transition-duration: 0.3s;
      --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Smooth transitions for theme changes */
    :root.theme-transition,
    :root.theme-transition *,
    :root.theme-transition *::before,
    :root.theme-transition *::after {
      transition: 
        background-color var(--transition-duration) var(--transition-timing),
        border-color var(--transition-duration) var(--transition-timing),
        color var(--transition-duration) var(--transition-timing),
        opacity var(--transition-duration) var(--transition-timing),
        box-shadow var(--transition-duration) var(--transition-timing),
        transform var(--transition-duration) var(--transition-timing) !important;
      transition-delay: 0s !important;
    }
    
    /* Disable transitions during initial page load */
    :root:not(.theme-transition) *,
    :root:not(.theme-transition) *::before,
    :root:not(.theme-transition) *::after {
      transition: none !important;
    }
  `;
  document.head.appendChild(style);
  
  // Remove the no-transition class after a short delay
  setTimeout(() => {
    document.documentElement.classList.add('theme-initialized');
  }, 100);
});
