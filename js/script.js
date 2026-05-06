// GREETING MESSAGE
function getGreeting() {
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
}


// OFFER EXPIRATION MESSAGE
function offerExpires() {
    const today = new Date();
    const year = today.getFullYear();

    // End of April
    const endOfApril = new Date(year, 3, 30);

    return "🔥 20% OFF — Valid until " + endOfApril.toDateString();
}

const offerEndsEl = document.getElementById("offerEnds");
if (offerEndsEl) {
    offerEndsEl.textContent = offerExpires();
}


// BUTTON CLICK EVENT (CHAPTER 5–6 REQUIREMENT)
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");

    if (button) {
        button.addEventListener("click", function () {
            alert("Event triggered! You clicked the button.");
        });
    }
});
