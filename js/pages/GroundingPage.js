/**
 * Grounding Exercise Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.GroundingPage = {
    /**
     * Render grounding exercise page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/grounding')}
        
        <main>
          <div class="exercise-container">
            <div class="exercise-header">
              <h1>4-3-2-1 Grounding Exercise</h1>
              <p>
                Use your senses to ground yourself in the present moment. This
                technique helps reduce anxiety and panic.
              </p>
            </div>

            <div class="grounding-step active" id="step4">
              <h3>4 Things You Can See</h3>
              <p>
                Look around you and identify four things you can see. Write them
                down:
              </p>
              <input type="text" id="see1" placeholder="First thing you see..." />
              <input type="text" id="see2" placeholder="Second thing you see..." />
              <input type="text" id="see3" placeholder="Third thing you see..." />
              <input type="text" id="see4" placeholder="Fourth thing you see..." />
            </div>

            <div class="grounding-step" id="step3">
              <h3>3 Things You Can Hear</h3>
              <p>
                Listen carefully and identify three sounds you can hear. Write them
                down:
              </p>
              <input type="text" id="hear1" placeholder="First sound you hear..." />
              <input
                type="text"
                id="hear2"
                placeholder="Second sound you hear..."
              />
              <input type="text" id="hear3" placeholder="Third sound you hear..." />
            </div>

            <div class="grounding-step" id="step2">
              <h3>2 Things You Can Feel</h3>
              <p>
                Notice two things you can physically feel or touch. Write them down:
              </p>
              <input type="text" id="feel1" placeholder="First thing you feel..." />
              <input
                type="text"
                id="feel2"
                placeholder="Second thing you feel..."
              />
            </div>

            <div class="grounding-step" id="step1">
              <h3>1 Thing You Can Smell or Taste</h3>
              <p>Identify one thing you can smell or taste. Write it down:</p>
              <input
                type="text"
                id="smell1"
                placeholder="Something you can smell or taste..."
              />
            </div>

            <div class="grounding-navigation">
              <button class="btn btn-secondary" id="prevBtn" style="display: none">
                Previous
              </button>
              <button class="btn btn-primary" id="nextBtn">Next</button>
            </div>

            <div
              style="
                margin-top: 3rem;
                padding: 1.5rem;
                background: var(--purple-lightest);
                border-radius: 10px;
              "
            >
              <h3 style="color: var(--deep-purple); margin-bottom: 1rem">
                How it works:
              </h3>
              <p style="color: var(--text-primary); line-height: 1.8">
                The 4-3-2-1 grounding technique helps you reconnect with your
                immediate environment by engaging your senses. When you're feeling
                overwhelmed or disconnected, this exercise brings your attention to
                the present moment. Take your time with each step and really notice
                what you're experiencing.
              </p>
            </div>
          </div>
        </main>
      `;
    },

    /**
     * Initialize grounding exercise after page render
     */
    init() {
      if (!window.groundingExercise) {
        const GroundingExercise = window.CalmPath.Exercises?.GroundingExercise;
        if (GroundingExercise) {
          window.groundingExercise = new GroundingExercise();
          window.groundingExercise.init();
        }
      } else {
        window.groundingExercise.init();
      }
    }
  };
})();
