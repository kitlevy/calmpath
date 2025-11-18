/**
 * Progressive Muscle Relaxation Exercise Controller
 * Manages guided muscle relaxation with timer
 */

(function () {
  "use strict";

  const DOMUtils = window.CalmPath.DOMUtils;
  const Timer = window.CalmPath.Timer;
  const ExerciseController = window.CalmPath.ExerciseController;

  class MuscleRelaxationExercise extends ExerciseController {
    constructor(config = {}) {
      super(config);

      // Configuration
      this.stepPauseDuration = config.stepPauseDuration || 2000; // Pause between steps (increased to 2s)

      // Exercise steps
      this.steps = [
        {
          title: "Get Ready",
          instruction:
            "Find a comfortable position. Take a few deep breaths and prepare to begin.",
          duration: 0,
        },
        {
          title: "Feet and Calves",
          instruction:
            "Tense the muscles in your feet and calves by pointing your toes downward. Hold for 5 seconds, then release and notice the relaxation.",
          duration: 5000,
        },
        {
          title: "Thighs",
          instruction:
            "Tense your thigh muscles by squeezing them together. Hold for 5 seconds, then release and feel the relaxation.",
          duration: 5000,
        },
        {
          title: "Buttocks",
          instruction:
            "Squeeze your buttocks muscles tightly. Hold for 5 seconds, then release and notice the relief.",
          duration: 5000,
        },
        {
          title: "Stomach",
          instruction:
            "Tense your abdominal muscles by pulling your stomach in. Hold for 5 seconds, then release and breathe naturally.",
          duration: 5000,
        },
        {
          title: "Hands and Arms",
          instruction:
            "Make fists with your hands and tense your entire arms. Hold for 5 seconds, then release and feel the relaxation flow through your arms.",
          duration: 5000,
        },
        {
          title: "Shoulders",
          instruction:
            "Raise your shoulders up toward your ears, tensing them tightly. Hold for 5 seconds, then release and let them drop naturally.",
          duration: 5000,
        },
        {
          title: "Face",
          instruction:
            "Scrunch up your entire face - forehead, eyes, nose, mouth. Hold for 5 seconds, then release and feel your face relax completely.",
          duration: 5000,
        },
        {
          title: "Full Body",
          instruction:
            "Tense your entire body at once - from head to toe. Hold for 5 seconds, then release everything and feel the complete relaxation.",
          duration: 5000,
        },
        {
          title: "Complete",
          instruction:
            "Take a few moments to notice how your body feels. You've completed the progressive muscle relaxation exercise. Notice the sense of calm and relaxation throughout your body.",
          duration: 0,
        },
      ];

      // State
      this.currentStepIndex = 0;
      this.stepStartTime = 0;
      this.timer = null;
      this.stepTimer = null;

      // DOM elements
      this.stepTitle = null;
      this.stepInstructions = null;
      this.timerDisplay = null;
      this.startBtn = null;
      this.pauseBtn = null;
      this.resetBtn = null;
    }

    init() {
      // Get DOM elements
      this.stepTitle = DOMUtils.getById("stepTitle");
      this.stepInstructions = DOMUtils.getById("stepInstructions");
      this.timerDisplay = DOMUtils.getById("timer");
      this.startBtn = DOMUtils.getById("startBtn");
      this.pauseBtn = DOMUtils.getById("pauseBtn");
      this.resetBtn = DOMUtils.getById("resetBtn");

      // Check if elements exist
      if (!this.stepTitle || !this.stepInstructions || !this.startBtn) {
        console.error(
          "Muscle relaxation exercise: Required DOM elements not found"
        );
        return;
      }

      // Set up event listeners
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

      // Initialize timer for step countdown
      this.stepTimer = new Timer(() => this.updateTimer(), 100);

      // Initialize display
      this.updateStep();
    }

    onStart() {
      this.currentStepIndex = 0;
      this.stepStartTime = 0;

      DOMUtils.hide(this.startBtn);
      DOMUtils.show(this.pauseBtn);
      DOMUtils.show(this.resetBtn);

      this.updateStep();
    }

    onPause() {
      this.stepTimer.stop();

      DOMUtils.show(this.startBtn);
      DOMUtils.hide(this.pauseBtn);
    }

    onReset() {
      this.stepTimer.reset();
      this.currentStepIndex = 0;
      this.stepStartTime = 0;

      DOMUtils.show(this.startBtn);
      DOMUtils.hide(this.pauseBtn);
      DOMUtils.hide(this.resetBtn);
      if (this.timerDisplay) {
        DOMUtils.hide(this.timerDisplay);
      }

      this.updateStep();
    }

    updateStep() {
      const step = this.steps[this.currentStepIndex];
      if (!step) return;

      DOMUtils.setText(this.stepTitle, step.title);
      DOMUtils.setText(this.stepInstructions, step.instruction);

      if (step.duration > 0 && this.isActive) {
        // Record when this step started
        this.stepStartTime = Date.now();

        if (this.timerDisplay) {
          DOMUtils.show(this.timerDisplay);
          DOMUtils.setText(this.timerDisplay, Math.ceil(step.duration / 1000));
        }

        this.stepTimer.start();
      } else {
        if (this.timerDisplay) {
          DOMUtils.hide(this.timerDisplay);
        }
        this.stepTimer.stop();

        // If step has no duration and we're active, move to next step after a pause
        if (
          this.isActive &&
          step.duration === 0 &&
          this.currentStepIndex < this.steps.length - 1
        ) {
          setTimeout(() => {
            if (this.isActive) {
              this.currentStepIndex++;
              this.updateStep();
            }
          }, this.stepPauseDuration);
        }
      }
    }

    updateTimer() {
      if (!this.isActive) return;

      const step = this.steps[this.currentStepIndex];
      if (!step || step.duration === 0) return;

      // Calculate actual elapsed time
      const elapsed = Date.now() - this.stepStartTime;
      const remaining = Math.max(0, step.duration - elapsed);
      const secondsRemaining = Math.ceil(remaining / 1000);

      if (this.timerDisplay) {
        DOMUtils.setText(this.timerDisplay, secondsRemaining);
      }

      // Check if step is complete
      if (remaining <= 0) {
        this.stepTimer.stop();
        if (this.timerDisplay) {
          DOMUtils.hide(this.timerDisplay);
        }

        // Move to next step
        if (this.currentStepIndex < this.steps.length - 1) {
          this.currentStepIndex++;
          setTimeout(() => {
            if (this.isActive) {
              this.updateStep();
            }
          }, this.stepPauseDuration);
        } else {
          // Exercise complete
          this.isActive = false;
          DOMUtils.show(this.startBtn);
          DOMUtils.hide(this.pauseBtn);
        }
      }
    }

    // Public method to get current step
    getCurrentStep() {
      return this.steps[this.currentStepIndex];
    }

    // Public method to get progress
    getProgress() {
      return {
        currentStep: this.currentStepIndex + 1,
        totalSteps: this.steps.length,
        progress: ((this.currentStepIndex + 1) / this.steps.length) * 100,
      };
    }
  }

  // Initialize when DOM is ready
  function init() {
    console.log("Initializing Muscle Relaxation Exercise...");
    try {
      window.muscleRelaxationExercise = new MuscleRelaxationExercise();
      window.muscleRelaxationExercise.init();
      console.log("Muscle Relaxation Exercise initialized successfully");
    } catch (error) {
      console.error("Error initializing Muscle Relaxation Exercise:", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
