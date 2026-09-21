// Mobile menu toggle
document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("nav-list").classList.toggle("open");
    document.getElementById("menu-toggle").classList.toggle("open");
}

// Navigation
document.getElementById("ex1-link").onclick = () => {
    document.getElementById("exercise1").classList.add("active");
    document.getElementById("exercise2").classList.remove("active");
}

document.getElementById("ex2-link").onclick = () => {
    document.getElementById("exercise2").classList.add("active");
    document.getElementById("exercise1").classList.remove("active");
}

// Exercise 1
document.getElementById("days-missed").oninput = () => {
    let days = document.getElementById("days-missed").value;
    let lost = (days / 25) * 7;
    document.getElementById("deduction-line").innerHTML =
        "You will lose " + lost.toFixed(2) + "% for skipping " + days + " days.";

    let msg = "";
    if (days == 0) msg = "Perfect attendence, you don't got anything to worry about.";
    else if (days <= 2) msg = "Very few absences, good job.";
    else if (days <= 5) msg = "It's getting to be not great, lock in.";
    else if (days <= 10) msg = "That's really bad lil man, you can't miss another class.";
    else msg = "This is not an online class, you are missing valuable learning opportunities.";

    document.getElementById("deduction-message").innerHTML = msg;
}

// Exercise 2
let today = new Date();
let lastDay = new Date(today.getFullYear(), 11, 4);
let daysLeft = Math.ceil((lastDay - today) / (1000 * 60 * 60 * 24));

document.getElementById("days-left-line").innerHTML =
    "You have " + daysLeft + " days left in the semester.";

let countMsg = "";
if (daysLeft < 0) countMsg = "DONE YIPPEEEEEEEEEE!!!";
else if (daysLeft == 0) countMsg = "ONE DAY LEFT YIPPEEEEEEEEEE!!!";
else if (daysLeft <= 7) countMsg = "LAST WEEK YIPPEEEEEEEEEE!!!";
else if (daysLeft <= 21) countMsg = "Lil bit more big man.";
else if (daysLeft <= 60) countMsg = "Lock in, hunker down it is NOT over yet.";
else countMsg = "Not time to start counting down yet.";

document.getElementById("countdown-message").innerHTML = countMsg;