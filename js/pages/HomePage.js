/**
 * Home Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.HomePage = {
    /**
     * Render home page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/')}
        
        <section class="hero">
          <h1>Find your CalmPath</h1>
          <p>No sign up required. Free tools for whenever you need a moment to calm down.</p>
          <a href="#" data-route="/info" class="learn-more-button">Learn More</a>
        </section>

        <section class="instant-tools">
          <h2>Instant Tools</h2>

          <div class="tools-grid">
            <article class="tool-card">
              <div class="tool-image">
                <a href="#" data-route="/breathing"><img src="breathingexercise.jpg" alt="Breathing Exercise"></a>
              </div>
              <a href="#" data-route="/breathing"><h3>Breathing Exercise</h3></a>
              <p>Use guided breathing exercises to calm physical symptoms and reduce anxiety.</p>
            </article>

            <article class="tool-card">
              <div class="tool-image">
                <a href="#" data-route="/grounding"><img src="Muscle!!.jpg" alt="4-3-2-1 Grounding Exercise"></a>
              </div>
              <a href="#" data-route="/grounding"><h3>4-3-2-1 Grounding Exercise</h3></a>
              <p>Utilize your senses to ground yourself in your surroundings and the present moment.</p>
            </article>

            <article class="tool-card">
              <div class="tool-image">
                <a href="#" data-route="/muscle-relaxation"><img src="IDK.avif" alt="Progressive Muscle Relaxation"></a>
              </div>
              <a href="#" data-route="/muscle-relaxation"><h3>Progressive Muscle Relaxation</h3></a>
              <p>Tense and release muscle groups to reduce physical tension and promote deep relaxation.</p>
            </article>
          </div>
        </section>
      `;
    }
  };
})();

