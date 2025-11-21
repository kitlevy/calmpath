/**
 * Recovery Resources Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.RecoveryPage = {
    /**
     * Render recovery page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/recovery')}
        
        <main>
          <section class="recovery-resources">
            <h1>Long Term Options</h1>
            <div class="resource-item">
              <h3>Support Groups:</h3>
              <p>
                Reach out to familiar faces or other students experiencing similar struggles through <a href="https://www.bc.edu/content/bc-web/offices/studentaffairs/sites/health-wellness/counseling/services/support-groups.html" target="_blank" rel="noopener">Boston College support groups</a>.
              </p>
            </div>
            <div class="resource-item">
              <h3>Counseling Resources:</h3>
              <p>
                Learn more about on-campus resources for students struggling with mental illnesses through <a href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/health-wellness/counseling/services.html#consultations" target="_blank" rel="noopener">Boston College University Counseling</a>.
              </p>
            </div>
            <div class= "resource-item">
            <h3>Other Options:</h3>
                <p>
                    Learn more about resources outside of Boston College through <a href="https://www.mass.gov/guides/finding-mental-health-support-in-massachusetts">Massachussetts mental health support services</a>.
                </p>
            </div>
          </section>
        </main>
      `;
    }
  };
})();

