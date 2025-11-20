/**
 * Breathing Exercise Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.BreathingPage = {
    /**
     * Render breathing exercise page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/breathing')}
        
        <main>
          <div class="exercise-container">
            <div class="exercise-header">
              <h1>Breathing Exercise</h1>
              <p>Follow the circle and breathe at a comfortable pace. This exercise helps calm your nervous system.</p>
            </div>

            <div class="breathing-circle" id="breathingCircle">
              <span id="breathingText">Ready</span>
            </div>

            <div class="breathing-instructions" id="instructions">
              Click "Start" to begin your breathing exercise.
            </div>

            <div class="breathing-controls">
              <button class="btn btn-primary" id="startBtn">Start</button>
              <button class="btn btn-secondary" id="pauseBtn" style="display: none;">Pause</button>
              <button class="btn btn-secondary" id="resetBtn" style="display: none;">Reset</button>
            </div>

            <div style="margin-top: 3rem; padding: 1.5rem; background: var(--purple-lightest); border-radius: 10px;">
              <h3 style="color: var(--deep-purple); margin-bottom: 1rem;">How it works:</h3>
              <p style="color: var(--text-primary); line-height: 1.8;">
                This breathing exercise uses a 4-4-4-4 pattern: breathe in for 4 seconds, hold for 4 seconds, 
                breathe out for 4 seconds, and hold for 4 seconds. The circle will expand as you breathe in and 
                contract as you breathe out. Focus on the circle and your breath to help calm your mind and body.
              </p>
            </div>
          </div>
        </main>
      `;
    },

    init() {
      if (!window.breathingExercise) {
        const BreathingExercise = window.CalmPath.Exercises?.BreathingExercise;
        if (BreathingExercise) {
          window.breathingExercise = new BreathingExercise();
          window.breathingExercise.init();
        }
      } else {
        window.breathingExercise.init();
      }
    }
  };
})();
