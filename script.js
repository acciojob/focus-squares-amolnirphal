//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseenter", () => {
        squares.forEach(other => {
            if (other !== square) {
                other.style.backgroundColor = "#6F4E37"; // Coffee
            }
        });
    });

    square.addEventListener("mouseleave", () => {
        squares.forEach(other => {
            if (other !== square) {
                other.style.backgroundColor = "#E6E6FA"; // Lavender
            }
        });
    });
});