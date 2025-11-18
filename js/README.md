# CalmPath JavaScript Modules

This directory contains the modular JavaScript code for CalmPath exercises.

## Directory Structure

```
js/
├── common/
│   └── utils.js          # Shared utilities and base classes
└── exercises/
    ├── breathing.js       # Breathing exercise controller
    ├── grounding.js       # 4-3-2-1 grounding exercise controller
    └── muscle-relaxation.js # Progressive muscle relaxation controller
```

## Module Overview

### Common Utilities (`common/utils.js`)

Shared utilities used across all exercises:

- **DOMUtils**: Helper functions for DOM manipulation
  - `getById(id)`: Get element by ID
  - `show(element, display)`: Show an element
  - `hide(element)`: Hide an element
  - `setText(element, text)`: Set text content

- **Timer**: Reusable timer class for exercise timing
  - `start()`: Start the timer
  - `stop()`: Stop the timer
  - `reset()`: Reset the timer

- **ExerciseController**: Base class for all exercises
  - Provides common interface: `start()`, `pause()`, `reset()`
  - Subclasses implement: `onStart()`, `onPause()`, `onReset()`

### Exercise Modules

Each exercise is a self-contained ES6 module that:

1. Extends `ExerciseController` base class
2. Manages its own state and DOM elements
3. Handles event listeners internally
4. Auto-initializes when DOM is ready

#### Breathing Exercise (`exercises/breathing.js`)

Manages the 4-4-4-4 breathing pattern with visual animation.

**Features:**
- Configurable phase duration and scale amount
- Smooth circle animation synchronized with breathing phases
- Start, pause, and reset controls

**Configuration:**
```javascript
{
    phaseDuration: 4000,    // Duration of each phase in ms
    updateInterval: 100,    // Update frequency in ms
    scaleAmount: 0.3         // Circle scale amount (0-1)
}
```

#### Grounding Exercise (`exercises/grounding.js`)

Manages the 4-3-2-1 sensory grounding exercise.

**Features:**
- Step-by-step navigation
- Input collection for each step
- Progress tracking

**Public Methods:**
- `getStepData()`: Get current step data
- `getAllStepData()`: Get all step data

#### Muscle Relaxation Exercise (`exercises/muscle-relaxation.js`)

Manages progressive muscle relaxation with guided steps and timers.

**Features:**
- Step-by-step muscle group guidance
- Countdown timer for each step
- Progress tracking

**Public Methods:**
- `getCurrentStep()`: Get current step information
- `getProgress()`: Get exercise progress percentage

## Usage

Each exercise module automatically initializes when the page loads. The modules are loaded as ES6 modules:

```html
<script type="module" src="js/exercises/breathing.js"></script>
```

## Extending

To create a new exercise:

1. Create a new file in `js/exercises/`
2. Import utilities from `common/utils.js`
3. Extend `ExerciseController` class
4. Implement required methods: `init()`, `onStart()`, `onPause()`, `onReset()`
5. Add auto-initialization code at the bottom

Example:

```javascript
import { ExerciseController, DOMUtils } from '../common/utils.js';

export class MyExercise extends ExerciseController {
    init() {
        // Set up DOM elements and event listeners
    }
    
    onStart() {
        // Start exercise logic
    }
    
    onPause() {
        // Pause exercise logic
    }
    
    onReset() {
        // Reset exercise logic
    }
}

// Auto-initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.myExercise = new MyExercise();
    });
} else {
    window.myExercise = new MyExercise();
}
```

## Browser Support

These modules use ES6 features (classes, modules, arrow functions). Modern browsers support these features natively. For older browser support, consider using a bundler like Webpack or Rollup.

