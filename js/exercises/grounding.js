/**
 * 4-3-2-1 Grounding Exercise Controller
 * Manages step-by-step sensory grounding exercise
 */

(function () {
  "use strict";

  const DOMUtils = window.CalmPath.DOMUtils;
  const ExerciseController = window.CalmPath.ExerciseController;

  class GroundingExercise extends ExerciseController {
    constructor(config = {}) {
      super(config);

      // Configuration
      this.totalSteps = 4;
      this.currentStep = this.totalSteps; // Start with step 4 (4 things you can see)

      // Step configurations
      this.steps = [
        {
          id: 1,
          title: "1 Thing You Can Smell or Taste",
          description:
            "Identify one thing you can smell or taste. Write it down:",
          inputIds: ["smell1"],
        },
        {
          id: 2,
          title: "2 Things You Can Feel",
          description:
            "Notice two things you can physically feel or touch. Write them down:",
          inputIds: ["feel1", "feel2"],
        },
        {
          id: 3,
          title: "3 Things You Can Hear",
          description:
            "Listen carefully and identify three sounds you can hear. Write them down:",
          inputIds: ["hear1", "hear2", "hear3"],
        },
        {
          id: 4,
          title: "4 Things You Can See",
          description:
            "Look around you and identify four things you can see. Write them down:",
          inputIds: ["see1", "see2", "see3", "see4"],
        },
      ];

      // DOM elements
      this.prevBtn = null;
      this.nextBtn = null;
      this.completionSection = null;
    }

    init() {
      // Get DOM elements
      this.prevBtn = DOMUtils.getById("prevBtn");
      this.nextBtn = DOMUtils.getById("nextBtn");
      this.completionSection = DOMUtils.getById("completionSection");

      // Check if elements exist
      if (!this.nextBtn) {
        console.error("Grounding exercise: Required DOM elements not found");
        return;
      }

      // Set up event listeners
      if (this.prevBtn) {
        this.prevBtn.addEventListener("click", () => {
          console.log("Previous button clicked");
          this.previousStep();
        });
      }
      this.nextBtn.addEventListener("click", () => {
        console.log("Next button clicked, current step:", this.currentStep);
        this.nextStep();
      });

      // Initialize display
      this.updateStepDisplay();
    }

    updateStepDisplay() {
      // Hide all steps first
      for (let i = 1; i <= this.totalSteps; i++) {
        const stepEl = DOMUtils.getById(`step${i}`);
        if (stepEl) {
          stepEl.classList.remove("active");
          DOMUtils.hide(stepEl);
        }
      }

      // Show only the current step
      const currentStepEl = DOMUtils.getById(`step${this.currentStep}`);
      if (currentStepEl) {
        currentStepEl.classList.add("active");
        DOMUtils.show(currentStepEl, "block");
        // Scroll to current step
        currentStepEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      // Update navigation buttons
      if (this.prevBtn) {
        if (this.currentStep < this.totalSteps) {
          DOMUtils.show(this.prevBtn, "inline-block");
        } else {
          DOMUtils.hide(this.prevBtn);
        }
      }
      if (this.nextBtn) {
        DOMUtils.setText(
          this.nextBtn,
          this.currentStep > 1 ? "Next" : "Complete"
        );
      }
    }

    nextStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.updateStepDisplay();
      } else {
        // Complete the exercise
        this.onComplete();
      }
    }

    previousStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.updateStepDisplay();
      }
    }

    onComplete() {
      // Hide all step sections
      for (let i = 1; i <= this.totalSteps; i++) {
        const stepEl = DOMUtils.getById(`step${i}`);
        if (stepEl) {
          DOMUtils.hide(stepEl);
        }
      }

      // Hide navigation buttons
      if (this.prevBtn) DOMUtils.hide(this.prevBtn);
      if (this.nextBtn) DOMUtils.hide(this.nextBtn);

      // Show completion section
      if (this.completionSection) {
        DOMUtils.show(this.completionSection, "block");
        this.completionSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback if completion section doesn't exist
        this.showCompletionMessage();
      }

      // Set up restart functionality
      const restartBtn = DOMUtils.getById("restartBtn");
      if (restartBtn) {
        restartBtn.addEventListener("click", () => {
          this.restart();
        });
      }
    }

    restart() {
      // Clear all inputs
      this.steps.forEach((step) => {
        step.inputIds.forEach((inputId) => {
          const input = DOMUtils.getById(inputId);
          if (input) {
            input.value = "";
          }
        });
      });

      // Hide completion section
      if (this.completionSection) {
        DOMUtils.hide(this.completionSection);
      }

      // Show all steps again
      for (let i = 1; i <= this.totalSteps; i++) {
        const stepEl = DOMUtils.getById(`step${i}`);
        if (stepEl) {
          DOMUtils.show(stepEl, "block");
        }
      }

      // Reset to first step
      this.currentStep = this.totalSteps;

      // Show navigation buttons
      if (this.nextBtn) DOMUtils.show(this.nextBtn);

      this.updateStepDisplay();
    }

    showCompletionMessage() {
      // Fallback completion message if DOM element doesn't exist
      const message =
        "Great job! You've completed the grounding exercise. Take a moment to notice how you feel now.";
      alert(message);
    }

    // Public method to get current step data (useful for saving progress)
    getStepData() {
      const step = this.steps.find((s) => s.id === this.currentStep);
      if (!step) return null;

      const data = {
        stepId: step.id,
        title: step.title,
        inputs: {},
      };

      step.inputIds.forEach((inputId) => {
        const input = DOMUtils.getById(inputId);
        if (input) {
          data.inputs[inputId] = input.value;
        }
      });

      return data;
    }

    // Public method to get all step data
    getAllStepData() {
      const allData = {};
      this.steps.forEach((step) => {
        const stepData = {
          title: step.title,
          inputs: {},
        };

        step.inputIds.forEach((inputId) => {
          const input = DOMUtils.getById(inputId);
          if (input) {
            stepData.inputs[inputId] = input.value;
          }
        });

        allData[step.id] = stepData;
      });

      return allData;
    }
  }

  // Initialize when DOM is ready
  function init() {
    console.log("Initializing Grounding Exercise...");
    try {
      window.groundingExercise = new GroundingExercise();
      window.groundingExercise.init();
      console.log("Grounding Exercise initialized successfully");
    } catch (error) {
      console.error("Error initializing Grounding Exercise:", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
