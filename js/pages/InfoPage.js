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
        
        <main>
          <section class="mental-health-matters">
            <div class="mh-content">
              <h1>Mental Health Matters</h1>

              <div class="mh-point">
                <h3>You are not alone.</h3>
                <p>Approximately 1 in 5 adults in the U.S. experience mental illnesses each year - about 62 million people.</p>
              </div>

              <div class="mh-point">
                <h3>You are not weak.</h3>
                <p>These conditions can affect anyone.</p>
              </div>

              <div class="mh-point">
                <h3>You are loved.</h3>
                <p>In these moments it is common to feel isolated. It is important to acknowledge your worth and value.</p>
              </div>
            </div>

            <div class="mh-image">
              <img src="images/calmpath.jpg" alt="Mental Health Illustration" />
            </div>
          </section>

          <section class="mission">
            <h2>Our Mission:</h2>
            <p>
              CalmPath was created to fill a crucial gap in mental health support: providing accessible, in-the-moment tools for people actively experiencing a panic attack. While long-term treatments like therapy, medication, and stress management are essential, few resources exist to help someone cope as a panic attack is happening. CalmPath offers simple, evidence-based exercises that anyone can use anytime – at school, at work, or anywhere – to regain a sense of calm and control when it's needed most.
            </p>
          </section>
        </main>
      `;
    }
  };
})();

