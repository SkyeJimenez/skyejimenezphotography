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
// 1. Select the elements
var elBtn = document.getElementById('event-btn');
var elNote = document.getElementById('feedback');

// 2. Define the function (what happens when the event fires)
function showMessage() {
  elNote.textContent = 'The event was successfully triggered!';
}

// 3. Add the event listener
// Note: We don't use 'on' (like onclick); we use the event name 'click'
elBtn.addEventListener('click', showMessage, false);
    //EVENT (CLICK EVENT)
    const button = document.getElementById("myButton");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thanks for visiting Skye Jimenez Photography!");
        });
    }

});
