document.addEventListener("DOMContentLoaded", function () {

    // --- GREETING (Time-Based) ---
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Skye Jimenez Photography 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    const greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        greetingEl.textContent = greeting;
    }

    // --- CHAPTER 6: CLICK EVENT (Feedback Message) ---
    var elBtn = document.getElementById('event-btn');
    var elNote = document.getElementById('feedback');

    if (elBtn && elNote) {
        function showMessage() {
            elNote.textContent = 'The event was successfully triggered!';
        }
        elBtn.addEventListener('click', showMessage, false);
    }

    // --- CHAPTER 6: CLICK EVENT (Alert) ---
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function () {
            alert("Thanks for visiting Skye Jimenez Photography!");
        });
    }
});
