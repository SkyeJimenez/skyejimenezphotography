document.addEventListener("DOMContentLoaded", function () {

    // --- CHAPTER 5: DOM MANIPULATION (Time-based Greeting) ---
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

    // --- CHAPTER 6: EVENTS (Click Event) ---
    var elBtn = document.getElementById('event-btn');
    var elNote = document.getElementById('feedback');

    if (elBtn && elNote) {
        function showMessage() {
            elNote.textContent = 'Event Triggered: Thank you for exploring my soccer photography!';
            elNote.className = "mt-3 fs-5 text-success animate-fade-in"; 
        }

        // Standard event listener (Duckett Chapter 6)
        elBtn.addEventListener('click', showMessage, false);
    }
});
