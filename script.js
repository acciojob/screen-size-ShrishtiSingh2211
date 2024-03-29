//your JS code here. If required.
function updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        document.getElementById('width').textContent = width;
        document.getElementById('height').textContent = height;
    }

    // Update size when the window is resized
    window.addEventListener('resize', updateSize);

    // Initial update
    updateSize();