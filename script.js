//your JS code here. If required.
function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// Initial call to update the size
updateSize();

// Add event listener for window resize event
window.addEventListener('resize', updateSize);