/**
 * CalmPath App
 */
(function () {
  "use strict";

  function init() {
    console.log("Initializing CalmPath SPA...");

    const router = window.CalmPath.router;
    const container = document.getElementById('app-container');

    if (!container) {
      console.error('App container not found');
      return;
    }

    router.register('/', () => {
      return window.CalmPath.HomePage.render();
    });

    router.register('/info', () => {
      return window.CalmPath.InfoPage.render();
    });

    router.register('/breathing', () => {
      const html = window.CalmPath.BreathingPage.render();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.CalmPath.BreathingPage.init) {
            window.CalmPath.BreathingPage.init();
          }
        });
      });
      return html;
    });

    router.register('/grounding', () => {
      const html = window.CalmPath.GroundingPage.render();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.CalmPath.GroundingPage.init) {
            window.CalmPath.GroundingPage.init();
          }
        });
      });
      return html;
    });

    router.register('/muscle-relaxation', () => {
      const html = window.CalmPath.MuscleRelaxationPage.render();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (window.CalmPath.MuscleRelaxationPage.init) {
            window.CalmPath.MuscleRelaxationPage.init();
          }
        });
      });
      return html;
    });

    router.register('/resources', () => {
      return window.CalmPath.ResourcesPage.render();
    });

    router.register('/recovery', () => {
      return window.CalmPath.RecoveryPage.render();
    });

    router.init(container);

    console.log("CalmPath SPA initialized successfully");
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
})();
