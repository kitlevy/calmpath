/**
 * Progressive Muscle Relaxation Page Component
 */
(function () {
  "use strict";

  window.CalmPath = window.CalmPath || {};

  window.CalmPath.MuscleRelaxationPage = {
    /**
     * Render muscle relaxation exercise page
     * @returns {string}
     */
    render() {
      const Header = window.CalmPath.Header;
      
      return `
        ${Header.render('/muscle-relaxation')}
        
        <main>
          <div class="exercise-container">
            <div class="exercise-header">
              <h1>Progressive Muscle Relaxation</h1>
              <p>Tense and release different muscle groups to reduce physical tension and promote relaxation.</p>
            </div>

            <div class="relaxation-step" id="currentStep">
              <h3 id="stepTitle">Get Ready</h3>
              <p id="stepInstructions">Find a comfortable position. Click "Start" when you're ready to begin.</p>
              <div class="relaxation-timer" id="timer" style="display: none;"></div>
            </div>

            <div class="breathing-controls">
              <button class="btn btn-primary" id="startBtn">Start</button>
              <button class="btn btn-secondary" id="pauseBtn" style="display: none;">Pause</button>
              <button class="btn btn-secondary" id="resetBtn" style="display: none;">Reset</button>
            </div>

            <div style="margin-top: 3rem; padding: 1.5rem; background: var(--purple-lightest); border-radius: 10px;">
              <h3 style="color: var(--deep-purple); margin-bottom: 1rem;">How it works:</h3>
              <p style="color: var(--text-primary); line-height: 1.8;">
                Progressive Muscle Relaxation (PMR) involves tensing specific muscle groups for a few seconds, 
                then releasing the tension. This helps you become more aware of physical sensations and teaches 
                your body to recognize and release tension. Follow the instructions for each muscle group, 
                taking your time with each step.
              </p>
            </div>
          </div>
        </main>
      `;
    },

    init() {
      if (!window.muscleRelaxationExercise) {
        const MuscleRelaxationExercise = window.CalmPath.Exercises?.MuscleRelaxationExercise;
        if (MuscleRelaxationExercise) {
          window.muscleRelaxationExercise = new MuscleRelaxationExercise();
          window.muscleRelaxationExercise.init();
        }
      } else {
        window.muscleRelaxationExercise.init();
      }
    }
  };
})();
