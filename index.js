// Selects the created body element
const bodyElement = document.querySelector("body");

// Action for detected mouse movement
bodyElement.addEventListener("mousemove", (event) => {
    // Logs the current point of the mouse (X,Y)
    const positionOfX = event.offsetX;
    const positionOfY = event.offsetY;

    // Creates, styles, and appends a span element
    const spanElement = document.createElement("span");
    spanElement.style.left = positionOfX + "px";
    spanElement.style.top = positionOfY + "px";
    
    // Sets random size for the span element
    const size = Math.random() * 100;  // Adjusted to create a visible size
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";

    bodyElement.appendChild(spanElement);

    // Creates a timer to remove the span element after 3 seconds
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
});
