/**
 * Info Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.InfoPage = {
    /**
     * Render info page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/info')}
        
        <main class="info-page">
          <section class="page-hero">
            <p class="eyebrow">About CalmPath</p>
            <h1>Mental health matters</h1>
            <p class="lead">
              You deserve support, understanding, and tools that work. CalmPath bridges the gap between crisis moments and long-term care with evidence-based exercises you can use anywhere.
            </p>
          </section>

          <section class="resources-grid">
            <article class="resource-card">
              <span class="card-badge">You are not alone</span>
              <h3>A shared experience</h3>
              <p>Approximately 1 in 5 adults in the U.S. experience mental health challenges each year—about 62 million people.</p>
              <ul class="card-list">
                <li>Mental health conditions are common and treatable</li>
                <li>Many people find relief with the right tools and support</li>
                <li>You're part of a community that understands</li>
              </ul>
            </article>

            <article class="resource-card">
              <span class="card-badge">You are not weak</span>
              <h3>Strength in seeking help</h3>
              <p>These conditions can affect anyone, regardless of background, circumstances, or perceived strength.</p>
              <ul class="card-list">
                <li>Asking for help shows courage and self-awareness</li>
                <li>Mental health is health—just like physical health</li>
                <li>Recovery and resilience are possible for everyone</li>
              </ul>
            </article>

            <article class="resource-card">
              <span class="card-badge">You are valued</span>
              <h3>Your worth is real</h3>
              <p>In difficult moments, it's common to feel isolated or disconnected from your own value.</p>
              <ul class="card-list">
                <li>Your experiences and feelings are valid</li>
                <li>You matter, and your well-being matters</li>
                <li>Support is available when you're ready to reach out</li>
              </ul>
            </article>
          </section>

          <section class="mission-section">
            <div class="mission-content">
              <p class="eyebrow">Our mission</p>
              <h2>In-the-moment support when you need it most</h2>
              <p>
                CalmPath was created to fill a crucial gap in mental health support: providing accessible, immediate tools for people actively experiencing distress. While long-term treatments like therapy, medication, and stress management are essential, few resources exist to help someone cope as difficult moments are happening.
              </p>
              <p>
                CalmPath offers simple, evidence-based exercises that anyone can use anytime—at school, at work, or anywhere—to regain a sense of calm and control when it's needed most. Whether you're experiencing a panic attack, overwhelming anxiety, or just need a moment to recenter, these tools are designed to meet you where you are.
              </p>
              <div class="mission-actions">
                <a class="btn btn-primary" href="#" data-route="/breathing">Try a breathing exercise</a>
                <a class="btn btn-secondary" href="#" data-route="/resources">Explore resources</a>
              </div>
            </div>
            <div class="mission-image">
              <img src="images/calmpath.jpg" alt="CalmPath illustration showing calm and wellness" />
            </div>
          </section>

          <section class="values-grid">
            <article class="micro-card">
              <h4>Evidence-based</h4>
              <p>All exercises are grounded in established therapeutic techniques like cognitive behavioral therapy, mindfulness, and progressive muscle relaxation.</p>
            </article>
            <article class="micro-card">
              <h4>Accessible</h4>
              <p>No sign-ups, no costs, no barriers. Use CalmPath anywhere, anytime, on any device.</p>
            </article>
            <article class="micro-card">
              <h4>Student-centered</h4>
              <p>Built with Boston College students in mind, connecting you to campus resources and peer support.</p>
            </article>
          </section>
        </main>
      `;
    }
  };
})();

