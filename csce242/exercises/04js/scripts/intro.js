document.getElementById("btn-show-message").onClick = () => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "done";
}