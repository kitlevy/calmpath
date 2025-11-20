/**
 * Simple client-side router for CalmPath
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  class Router {
    constructor() {
      this.routes = new Map();
      this.currentRoute = null;
      this.container = null;
    }

    /**
     * Register a route
     * @param {string} path
     * @param {Function} handler
     */
    register(path, handler) {
      this.routes.set(path, handler);
    }

    /**
     * Initialize router
     * @param {HTMLElement} container
     */
    init(container) {
      this.container = container;
      
      // Handle initial route
      this.handleRoute();
      
      // Handle browser back/forward
      window.addEventListener('popstate', () => {
        this.handleRoute();
      });
      
      // Handle link clicks
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-route]');
        if (link) {
          e.preventDefault();
          const route = link.getAttribute('data-route');
          if (route) {
            this.navigate(route);
          }
        }
      }, true);
    }

    /**
     * Navigate to a route
     * @param {string} path - Route path
     */
    navigate(path) {
      path = path || '/';
      if (path !== '/' && !path.startsWith('/')) {
        path = '/' + path;
      }
      if (path === '') {
        path = '/';
      }
      
      if (path !== this.currentRoute) {
        try {
          const hash = path === '/' ? '#' : `#${path}`;
          const newUrl = window.location.pathname + hash;
          window.history.pushState({ route: path }, '', newUrl);
          this.handleRoute();
        } catch (error) {
          console.error('Error navigating to route:', path, error);
          this.currentRoute = path;
          const handler = this.routes.get(path);
          if (handler) {
            this.render(handler);
          }
        }
      }
    }

    /**
     * Handle current route
     */
    handleRoute() {
      let path = window.location.hash.slice(1);
      
      if (path === '' || !path) {
        path = '/';
      } else if (!path.startsWith('/')) {
        path = '/' + path;
      }
      
      const handler = this.routes.get(path);
      
      if (handler) {
        this.currentRoute = path;
        this.render(handler);
      } else {
        console.warn(`Route not found: ${path}, defaulting to home`);
        console.log('Available routes:', Array.from(this.routes.keys()));
        const homeHandler = this.routes.get('/');
        if (homeHandler) {
          this.currentRoute = '/';
          window.history.replaceState({}, '', window.location.pathname + '#');
          this.render(homeHandler);
        } else {
          console.error('Home route not registered!');
        }
      }
    }

    /**
     * Render content
     * @param {Function} handler
     */
    async render(handler) {
      if (!this.container) {
        console.error('Router: Container not set');
        return;
      }
      
      if (!handler || typeof handler !== 'function') {
        console.error('Router: Invalid handler function');
        return;
      }
      
      try {
        const content = handler();
        const resolvedContent = content instanceof Promise ? await content : content;
        
        if (typeof resolvedContent === 'string') {
          this.container.innerHTML = resolvedContent;
        } else if (resolvedContent instanceof HTMLElement) {
          this.container.innerHTML = '';
          this.container.appendChild(resolvedContent);
        } else {
          console.error('Router: Handler returned invalid content type:', typeof resolvedContent);
          this.container.innerHTML = '<div class="error">Error loading page. Invalid content.</div>';
          return;
        }
        
        requestAnimationFrame(() => {
          this.initializePage();
        });
      } catch (error) {
        console.error('Error rendering route:', error);
        console.error('Stack:', error.stack);
        this.container.innerHTML = '<div class="error">Error loading page. Please try again.</div>';
      }
    }

    initializePage() {
      const toggleButton = document.getElementById('themeToggle');
      if (toggleButton && !toggleButton.hasAttribute('data-initialized')) {
        toggleButton.setAttribute('data-initialized', 'true');
        toggleButton.addEventListener('click', () => {
          window.CalmPath.DarkMode.toggle();
        });
        const currentTheme = window.CalmPath.DarkMode.getTheme();
        window.CalmPath.DarkMode.updateToggleIcon(toggleButton, currentTheme);
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
    }

    /**
     * Get current route
     * @returns {string}
     */
    getCurrentRoute() {
      return this.currentRoute || '/';
    }
  }

  window.CalmPath.Router = Router;
  window.CalmPath.router = new Router();
})();
