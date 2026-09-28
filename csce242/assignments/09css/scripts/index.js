// Loop to load in cars
function loadCars(count) {
    const container = document.getElementById("cars");
    const colors = ["#e63946", "#f4a261", "#2a9d8f", "#9c89b8", "#f77f00",
                    "#3a86ff", "#d62828", "#6a994e", "#bc6c25", "#8338ec"];
    const carWidth = 68;
    const maxLeft = container.clientWidth - carWidth - 10;

    for (let i = 0; i < count; i++) {
        const car = document.createElement("div");
        car.className = "car";
        car.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        car.style.left = Math.floor(Math.random() * (maxLeft - 10 + 1)) + 10 + "px";

        // Road and lanes
        if (Math.random() < 0.5) {
            car.style.top = "30px";
        } else {
            car.style.top = "120px";
        }

        const leftWheel = document.createElement("div");
        leftWheel.className = "wheel left";

        const rightWheel = document.createElement("div");
        rightWheel.className = "wheel right";

        car.appendChild(leftWheel);
        car.appendChild(rightWheel);

        container.appendChild(car);
    }
}

window.onload = () => {
    loadCars(7);
};