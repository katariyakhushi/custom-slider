
---

## Slider Component

### Live Demo
Demo Link : https://custom-slider-khushi.netlify.app

### Description
The Slider component is designed for a questionnaire where users respond to questions using a slider input. Each question is categorized into one of four types: IDEALISTIC, DISILLUSIONED, CYNICAL, and HOPEFUL. Based on user responses, the progress bars at the top update dynamically to reflect the count of responses in each category.

### Features
- Sequential navigation through questions using "Next" and "Prev" buttons.
- Real-time updates of progress bars based on user responses categorized into IDEALISTIC, DISILLUSIONED, CYNICAL, and HOPEFUL.
- Responsive design using Material-UI components.

### How to Use
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Navigate through questions using the "Next" and "Prev" buttons.
5. Drag the slider to select your answer for each question.

### Dependencies
- React
- Material-UI

### Example Usage
```jsx
import React from 'react';
import Slider from './Slider';

function App() {
  return (
    <div className="App">
      <Slider />
    </div>
  );
}

export default App;
```

### Screenshots
- Include screenshots here if applicable.

---

Feel free to adjust and expand this README based on your specific project details and additional functionalities.