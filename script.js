//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        squares.forEach(otherSquare => {
            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = "#6F4E37"; // Coffee
            }
        });
    });

    square.addEventListener("mouseleave", () => {
        squares.forEach(otherSquare => {
            otherSquare.style.backgroundColor = "#E6E6FA"; // Lavender
        });
    });
});
function volume_sphere() {
    const radius = parseFloat(document.getElementById("radius").value);
    const volumeField = document.getElementById("volume");

    let volume;

    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4);
    }

    volumeField.value = volume;
    return false; // Prevent form submission
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;