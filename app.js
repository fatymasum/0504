let span = document.getElementById("span");
let button = document.getElementById("button");
let i = 1
let direction = true;
button.addEventListener("click", () => {
    if (i === 10) {
        direction = false;

    }
    else if (i <= 1) {
        direction = true; 
    }
    if (direction === true) {
        span.textContent = i++
    }
    if(direction === false) {
        span.textContent = i--
    }
})

