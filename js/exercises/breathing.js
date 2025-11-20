/**
 * Breathing Exercise Controller
 */

(function () {
  "use strict";

  const DOMUtils = window.CalmPath.DOMUtils;
  const Timer = window.CalmPath.Timer;
  const ExerciseController = window.CalmPath.ExerciseController;

  class BreathingExercise extends ExerciseController {
    constructor(config = {}) {
      super(config);

      // Config
      this.phaseDuration = config.phaseDuration || 4000; // 4 seconds per phase
      this.updateInterval = config.updateInterval || 100; // Update every 100ms
      this.scaleAmount = config.scaleAmount || 0.3; // How much to scale the circle

      // State
      this.currentPhase = 0; // 0: inhale, 1: hold in, 2: exhale, 3: hold out
      this.phaseTime = 0;
      this.timer = null;

      this.circle = null;
      this.text = null;
      this.instructions = null;
      this.startBtn = null;
      this.pauseBtn = null;
      this.resetBtn = null;

      this.phases = [
        {
          name: "Inhale",
          text: "Breathe In",
          instruction: "Breathe in slowly through your nose...",
          getScale: (progress) => 1 + progress * this.scaleAmount,
          nextPhase: 1,
        },
        {
          name: "Hold In",
          text: "Hold",
          instruction: "Hold your breath...",
          getScale: () => 1 + this.scaleAmount,
          nextPhase: 2,
        },
        {
          name: "Exhale",
          text: "Breathe Out",
          instruction: "Breathe out slowly through your mouth...",
          getScale: (progress) =>
            1 + this.scaleAmount - progress * this.scaleAmount,
          nextPhase: 3,
        },
        {
          name: "Hold Out",
          text: "Hold",
          instruction: "Hold...",
          getScale: () => 1,
          nextPhase: 0,
        },
      ];
    }

    init() {
      this.circle = DOMUtils.getById("breathingCircle");
      this.text = DOMUtils.getById("breathingText");
      this.instructions = DOMUtils.getById("instructions");
      this.startBtn = DOMUtils.getById("startBtn");
      this.pauseBtn = DOMUtils.getById("pauseBtn");
      this.resetBtn = DOMUtils.getById("resetBtn");

      if (!this.circle || !this.text || !this.instructions || !this.startBtn) {
        console.error("Breathing exercise: Required DOM elements not found");
        return;
      }

      this.startBtn.addEventListener("click", () => {
        console.log("Start button clicked");
        this.start();
      });
      if (this.pauseBtn) {
        this.pauseBtn.addEventListener("click", () => {
          console.log("Pause button clicked");
          this.pause();
        });
      }
      if (this.resetBtn) {
        this.resetBtn.addEventListener("click", () => {
          console.log("Reset button clicked");
          this.reset();
        });
      }

      this.timer = new Timer(() => this.update(), this.updateInterval);
    }

    onStart() {
      this.currentPhase = 0;
      this.phaseTime = 0;

      DOMUtils.hide(this.startBtn);
      DOMUtils.show(this.pauseBtn);
      DOMUtils.show(this.resetBtn);

      this.timer.start();
      this.update();
    }

    onPause() {
      this.timer.stop();

      DOMUtils.show(this.startBtn);
      DOMUtils.hide(this.pauseBtn);
      DOMUtils.setText(this.instructions, 'Paused. Click "Start" to continue.');
    }

    onReset() {
      this.timer.reset();
      this.currentPhase = 0;
      this.phaseTime = 0;

      if (this.circle) {
        this.circle.className = "breathing-circle";
        this.circle.style.transform = "scale(1)";
      }

      DOMUtils.setText(this.text, "Ready");
      DOMUtils.setText(
        this.instructions,
        'Click "Start" to begin your breathing exercise.'
      );
      DOMUtils.show(this.startBtn);
      DOMUtils.hide(this.pauseBtn);
      DOMUtils.hide(this.resetBtn);
    }

    update() {
      if (!this.isActive) return;

      this.phaseTime += this.updateInterval;
      const progress = Math.min(this.phaseTime / this.phaseDuration, 1);

      const phase = this.phases[this.currentPhase];

      if (this.circle) {
        const scale = phase.getScale(progress);
        this.circle.style.transform = `scale(${scale})`;
      }

      DOMUtils.setText(this.text, phase.text);
      DOMUtils.setText(this.instructions, phase.instruction);

      if (this.phaseTime >= this.phaseDuration) {
        this.currentPhase = phase.nextPhase;
        this.phaseTime = 0;
      }
    }
  }

  window.CalmPath = window.CalmPath || {};
  window.CalmPath.Exercises = window.CalmPath.Exercises || {};
  window.CalmPath.Exercises.BreathingExercise = BreathingExercise;
})();
