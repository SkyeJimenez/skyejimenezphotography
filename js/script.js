document.addEventListener("DOMContentLoaded", function () {

    // GREETING (time-based)
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to my website 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        greetingEl.textContent = greeting;
    }

    // CHAPTER 5–6 EVENT (CLICK EVENT)
    const button = document.getElementById("myButton");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thanks for visiting Skye Jimenez Photography!");
        });
    }

});
