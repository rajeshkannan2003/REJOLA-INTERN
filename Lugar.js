function animateNumber(targetId, initialValue, finalValue, duration) {
    const element = document.getElementById(targetId);
    const increment = (finalValue - initialValue) / (duration / 16); // 16ms is roughly 1 frame at 60fps

    let currentValue = initialValue;

    function updateValue() {
        currentValue += increment;
        element.textContent = Math.round(currentValue);

        if (currentValue < finalValue) {
            requestAnimationFrame(updateValue);
        }
    }

    updateValue();
}

// Call the animation function for each element
animateNumber("previous-projects", 1, 34 , 2000  ); // 2000ms (2 seconds) duration
animateNumber("years-experience", 1, 20, 2000);
animateNumber("ongoing-projects", 1, 12, 2000);