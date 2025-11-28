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

        <main class="recovery-page">
          <section class="page-hero compact">
            <p class="eyebrow">Recovery Hub</p>
            <h1>Long-term care, simplified</h1>
            <p class="lead">
              Whether you are stabilizing after a difficult moment or exploring new routines, these resources help you build care that lasts beyond today.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="tel:+16175523310">Call BC Counseling (617-552-3310)</a>
            </div>
          </section>

          <section class="recovery-grid">
            <article class="resource-card">
              <span class="card-badge">Peer support</span>
              <h3>Support Circles</h3>
              <p>Weekly, identity-affirming groups facilitated by BC clinicians and student leaders.</p>
              <ul class="card-list">
                <li>Drop-in and registered series</li>
                <li>Trauma-informed and confidential</li>
                <li>Topic rotations every quarter</li>
              </ul>
              <a class="card-link" href="https://www.bc.edu/content/bc-web/offices/studentaffairs/sites/health-wellness/counseling/services/support-groups.html" target="_blank" rel="noopener">Explore therapy groups →</a>
            </article>

            <article class="resource-card">
              <span class="card-badge">Clinical care</span>
              <h3>University Counseling Services</h3>
              <p>Same-day triage, therapy groups, psychiatry, and referrals with clinicians who understand BC life.</p>
              <ul class="card-list">
                <li>Call <a href="tel:+16175523310">617-552-3310</a>; press option 2 after hours for the Psychological Emergency Clinician</li>
                <li>Visit Gasson Hall 001, Monday–Friday 8:45 a.m.–4:45 p.m.</li>
                <li>Specialty care match for eating, mood, or substance concerns</li>
              </ul>
              <a class="card-link" href="https://www.bc.edu/content/bc-web/offices/studentaffairs/sites/health-wellness/counseling/get-help/how-to-make-an-appointment.html" target="_blank" rel="noopener">How to make an appointment →</a>
            </article>

            <article class="resource-card">
              <span class="card-badge">Beyond campus</span>
              <h3>Massachusetts Care Network</h3>
              <p>Curated database of statewide therapists, crisis services, and culturally specific providers.</p>
              <ul class="card-list">
                <li>Sliding-scale directories</li>
                <li>Telehealth and evening availability</li>
                <li>Step-by-step insurance guidance</li>
              </ul>
              <a class="card-link" href="https://www.mass.gov/guides/finding-mental-health-support-in-massachusetts" target="_blank" rel="noopener">View the state guide →</a>
            </article>
          </section>

          <section class="micro-grid">
            <article class="micro-card">
              <h4>Peer wellness coaching</h4>
              <p>Meet student coaches who use a holistic model to help you set realistic, values-aligned recovery goals.</p>
              <a class="card-link" href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/health-wellness/center-for-student-wellness/programs-services/wellness-coaching.html" target="_blank" rel="noopener">Schedule wellness coaching →</a>
            </article>
            <article class="micro-card">
              <h4>WellTrack toolkit</h4>
              <p>Access BC’s guided CBT-based modules, mood tracking, and campus-specific coping plans.</p>
              <a class="card-link" href="https://www.bc.edu/content/bc-web/offices/studentaffairs/sites/health-wellness/counseling/self-care/welltrack.html" target="_blank" rel="noopener">Explore WellTrack →</a>
            </article>
            <article class="micro-card">
              <h4>5-minute routines</h4>
              <p>Stack grounding, breath work, or progressive relaxation using CalmPath’s guided tools.</p>
              <a class="card-link" href="#" data-route="/breathing">Try an exercise →</a>
            </article>
          </section>
        </main>
      `;
    }
  };
})();

