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
        
        <main class="resources-page">
          <section class="page-hero">
            <p class="eyebrow">Learn more</p>
            <h1>Know what to do and who to call</h1>
            <p class="lead">
              Keep these urgent contacts, campus pathways, and digital supports close so you can respond quickly and help others do the same.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:988">Call / text 988</a>
            </div>
          </section>

          <section class="resources-grid">
            <article class="resource-card featured">
              <span class="card-badge">Immediate danger</span>
              <h3>Emergency services</h3>
              <p>If someone’s life is in immediate danger, contact emergency responders right away.</p>
              <ul class="card-list">
                <li>Dial <a href="tel:911">911</a> anywhere in the United States</li>
                <li>On campus call <a href="tel:6175524444">BC Police (617-552-4444)</a></li>
                <li>Stay on the line until help arrives</li>
              </ul>
            </article>

            <article class="resource-card">
              <span class="card-badge">24/7 support</span>
              <h3>988 Suicide & Crisis Lifeline</h3>
              <p>Connect with trained counselors over phone, text, or chat for any mental health crisis.</p>
              <ul class="card-list">
                <li>Call or text <a href="tel:988">988</a> for immediate support</li>
                <li>Chat online at <a href="https://988lifeline.org" target="_blank" rel="noopener">988lifeline.org</a></li>
                <li>Help friends access services wherever they are</li>
              </ul>
            </article>

            <article class="resource-card">
              <span class="card-badge">Substance & mental health</span>
              <h3>SAMHSA Helpline</h3>
              <p>Get referrals for treatment, recovery housing, and financial aid options.</p>
              <ul class="card-list">
                <li>Call <a href="tel:18006624357">1-800-662-HELP (4357)</a></li>
                <li>Free, confidential, 24/7 support</li>
                <li>English and Spanish operators available</li>
              </ul>
            </article>
          </section>

          <section class="resources-grid">
            <article class="resource-card">
              <span class="card-badge">Whole-person support</span>
              <h3>Murray Center for Student Wellness</h3>
              <p>Drop-in wellness coaching, recovery and sobriety services, and educational workshops.</p>
              <ul class="card-list">
                <li>Holistic care planning and harm-reduction tools</li>
                <li>Peer-led programming across body, mind, and community</li>
                <li>Connect at Gasson Hall, Suite 013/025 or call <a href="tel:+16175529900">617-552-9900</a></li>
              </ul>
              <a class="card-link" href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/health-wellness/center-for-student-wellness.html" target="_blank" rel="noopener">Explore the Murray Center →</a>
            </article>
          </section>
        </main>
      `;
    }
  };
})();

