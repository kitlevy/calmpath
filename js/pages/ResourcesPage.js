/**
 * Crisis Resources Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.ResourcesPage = {
    /**
     * Render resources page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/resources')}
        
        <main>
          <section class="crisis-resources">
            <h1>Crisis Resources</h1>
            <div class="resource-item">
              <h3>Emergency Services:</h3>
              <p>
                If experiencing a life-threatening emergency, immediately call 
                <a href="tel:911">911</a>.
              </p>
            </div>
            <div class="resource-item">
              <h3>National Suicide and Crisis Lifeline:</h3>
              <p>
                Call or text 
                <a href="tel:988">988</a>
                for free, confidential support. Available 24/7 anywhere in the United States.
              </p>
            </div>
            <div class="resource-item">
              <h3>Local Crisis Centers:</h3>
              <p>
                Visit 
                <a href="https://988lifeline.org" target="_blank" rel="noopener">
                  988lifeline.org
                </a>
                to find crisis centers (available by phone or in-person) local to your U.S. state or zip code.
              </p>
            </div>
            <div class="resource-item">
              <h3>National Mental Health Helpline:</h3>
              <p>
                Call 
                <a href="tel:18006624357">1-800-662-HELP (4357)</a>
                for guidance on seeking mental health treatment, appropriate next steps when in a mental health crisis,
                and connection to local resources.
              </p>
            </div>
            <div class="resource-item">
              <h3>Boston College Mental Health Resources:</h3>
              <p>
                <strong>University Counseling Services (UCS):</strong> Provides individual counseling, group counseling, 
                emergency same-day appointments, psychiatric services, and referral services. For urgent mental health 
                concerns, contact the Psychological Emergency Clinician (PEC) at UCS.
              </p>
              <p>
                <strong>Murray Center for Student Wellness:</strong> Offers comprehensive health and wellness services 
                including 24/7 medical care, counseling services, and wellness resources.
              </p>
              <p>
                <strong>WellTrack:</strong> Online platform with mood tracking and self-help resources for mental health 
                and wellness.
              </p>
              <p>
                Visit 
                <a href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/health-wellness/counseling/services.html" target="_blank" rel="noopener">
                  Boston College Counseling Services
                </a>
                for more information. For medical emergencies on campus, contact Boston College Police at 
                <a href="tel:6175524444">617-552-4444</a>.
              </p>
            </div>
          </section>
        </main>
      `;
    }
  };
})();
