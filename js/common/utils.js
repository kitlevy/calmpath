/**
 * Common utility functions for CalmPath exercises
 */

// Create global namespace
window.CalmPath = window.CalmPath || {};

/**
 * DOM utility functions
 */
window.CalmPath.DOMUtils = {
  /**
   * Get element by ID
   * @param {string} id - Element ID
   * @returns {HTMLElement|null}
   */
  getById(id) {
    return document.getElementById(id);
  },

  /**
   * Show an element
   * @param {HTMLElement} element - Element to show
   * @param {string} display - Display style (default: 'inline-block')
   */
  show(element, display = "inline-block") {
    if (element) {
      element.style.display = display;
    }
  },

  /**
   * Hide an element
   * @param {HTMLElement} element - Element to hide
   */
  hide(element) {
    if (element) {
      element.style.display = "none";
    }
  },

  /**
   * Set text content
   * @param {HTMLElement} element - Element to update
   * @param {string} text - Text to set
   */
  setText(element, text) {
    if (element) {
      element.textContent = text;
    }
  },
};

/**
 * Timer utility for exercises
 */
window.CalmPath.Timer = class {
  constructor(callback, interval = 100) {
    // Store callback - arrow functions already preserve context
    this.callback = callback;
    this.interval = interval;
    this.timerId = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.timerId = setInterval(() => {
      try {
        this.callback();
      } catch (error) {
        console.error("Timer callback error:", error);
        this.stop();
      }
    }, this.interval);
  }

  stop() {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  reset() {
    this.stop();
  }
};

/**
 * Exercise controller base class
 */
window.CalmPath.ExerciseController = class {
    constructor(config) {
        this.config = config || {};
        this.isActive = false;
        // Don't call init() here - let subclasses call it after they're fully constructed
    }

    init() {
        // Override in subclasses
    }

    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.onStart();
    }

    pause() {
        if (!this.isActive) return;
        this.isActive = false;
        this.onPause();
    }

    reset() {
        this.isActive = false;
        this.onReset();
    }

    onStart() {
        // Override in subclasses
    }

    onPause() {
        // Override in subclasses
    }

    onReset() {
        // Override in subclasses
    }
};

/**
 * Dark Mode Toggle functionality
 */
window.CalmPath.DarkMode = {
    init() {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Set up toggle button if it exists
        const toggleButton = document.getElementById('themeToggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => this.toggle());
            this.updateToggleIcon(toggleButton, savedTheme);
        }
    },

    getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle icon if button exists
        const toggleButton = document.getElementById('themeToggle');
        if (toggleButton) {
            this.updateToggleIcon(toggleButton, theme);
        }
    },

    toggle() {
        const currentTheme = this.getTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    updateToggleIcon(button, theme) {
        const icon = button.querySelector('svg');
        if (!icon) return;
        
        // Update icon based on theme
        if (theme === 'dark') {
            // Show sun icon for light mode (to switch to light)
            icon.innerHTML = '<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757l1.591-1.59a.75.75 0 10-1.06-1.061l-1.59 1.59a.75.75 0 001.06 1.06z"/>';
        } else {
            // Show moon icon for dark mode (to switch to dark)
            icon.innerHTML = '<path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>';
        }
    }
};

// Initialize dark mode when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.CalmPath.DarkMode.init();
    });
} else {
    window.CalmPath.DarkMode.init();
}