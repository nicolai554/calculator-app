document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const calculatorElement = document.getElementById('calculator'); // Get the element with the 'calc' class

    if (themeToggleButton && calculatorElement) {
        themeToggleButton.addEventListener('click', () => {
            calculatorElement.classList.toggle('theme-purple'); // Toggle the blue theme 
        });
    } else {
         console.error("Theme button or calculator element not found.");
    }
});