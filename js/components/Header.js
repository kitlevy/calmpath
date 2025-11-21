/**
 * Header/Navigation Component
 * Reusable header with navigation and theme toggle
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.Header = {
    /**
     * Render header component
     * @param {string} currentRoute
     * @returns {string}
     */
    render(currentRoute = '/') {
      return `
        <header>
          <nav>
            <div class="nav-left">
              <a href="#" data-route="/" class="logo">CalmPath</a>
            </div>
            <div class="nav-right">
              <a href="#" data-route="/">Home</a>
              <a href="#" data-route="/resources">Crisis Resources</a>
              <a href="#" data-route="/recovery">Recovery</a>
              <button id="themeToggle" class="theme-toggle" aria-label="Toggle dark mode">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
                </svg>
              </button>
              <a href="tel:+988" class="hotline-button">Hotline</a>
            </div>
          </nav>
        </header>
      `;
    },

    init() {
      // Theme toggle is initialized in utils.js
      // Navigation links are handled by router
    }
  };
})();
