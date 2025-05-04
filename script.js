document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animatedBox');
    const toggleButton = document.getElementById('toggleAnimation');
    const colorPicker = document.getElementById('colorPicker');
    const saveColorButton = document.getElementById('saveColor');

    // Load saved color from localStorage
    const savedColor = localStorage.getItem('boxColor');
    if (savedColor) {
        box.style.backgroundColor = savedColor;
        colorPicker.value = savedColor;
    }

    // Toggle animation
    toggleButton.addEventListener('click', () => {
        box.classList.toggle('animate');
    });

    // Save color preference
    saveColorButton.addEventListener('click', () => {
        const color = colorPicker.value;
        box.style.backgroundColor = color;
        localStorage.setItem('boxColor', color);
        alert('Color preference saved!');
    });
});
