// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {

    // Select all elements class 'waterfall-stage'
    const stages = document.querySelectorAll('.waterfall-stage');

    // Iterate over each element
    stages.forEach(stage => {
        // Find the header, details section, and indicator within the current stage
        const header = stage.querySelector('.stage-header');
        const details = stage.querySelector('.stage-details');
        const indicator = stage.querySelector('.indicator'); 

        // Check if all necessary elements were found within the stage
        if (header && details && indicator) {
            // Add a click event listener to the header of the stage
            header.addEventListener('click', () => {
                // Check if the details section of the clicked stage is currently active (visible)
                const isActive = details.classList.contains('active');

                // --- Close all other stages before opening/closing the clicked one ---
                stages.forEach(otherStage => {
                    // Ensure we are not processing the currently clicked stage
                    if (otherStage !== stage) {
                        const otherDetails = otherStage.querySelector('.stage-details');
                        const otherIndicator = otherStage.querySelector('.indicator');

                        // Check if the other stage has the necessary elements
                        if (otherDetails && otherIndicator) {
                            // Remove the 'active' class to hide the details
                            otherDetails.classList.remove('active');
                            // Remove the 'rotate-180' class to reset the indicator arrow
                            otherIndicator.classList.remove('rotate-180');
                        }
                    }
                });

                // --- Toggle the clicked stage ---
                // Toggle the 'active' class on the details section
                details.classList.toggle('active');
                // Toggle the 'rotate-180' class on the indicator arrow
                indicator.classList.toggle('rotate-180');
            });
        } else {
            // Log an error to the console if essential elements are missing for a stage
            console.error('Initialization Error: Could not find required elements (header, details, or indicator) within stage:', stage.id || stage);
        }
    });
});
