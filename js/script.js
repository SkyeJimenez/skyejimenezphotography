
function getGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning! Welcome to my website 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    const g = document.getElementById("greeting");
    if (g) g.textContent = greeting;
}


function showOfferExpiry() {
    let today = new Date();
    let expireDate = new Date();

    expireDate.setDate(today.getDate() + 7);

    let formattedDate = expireDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const o = document.getElementById("offer");
    if (o) {
        o.textContent =
            "⚡ Limited Time Offer! 20% off bookings — offer expires " + formattedDate;
    }
}


// ======================
// CHAPTER 4 DECISION LOOP (ONLY ONE)
// ======================
function loadServices() {

    const services = [
        { name: "Portrait Session", available: true },
        { name: "Wedding Package", available: true },
        { name: "Mini Session", available: false },
        { name: "Event Coverage", available: true }
    ];

    let output = "";
    let i = 0;

    while (i < services.length) {

        if (services[i].available) {
            output += "📸 " + services[i].name + " — Available Now<br>";
        } else {
            output += "⛔ " + services[i].name + " — Currently Unavailable<br>";
        }

        i++;
    }

    const el = document.getElementById("serviceList");
    if (el) el.innerHTML = output;
}


// ======================
// RUN EVERYTHING (IMPORTANT)
// ======================
document.addEventListener("DOMContentLoaded", function () {
    getGreeting();
    showOfferExpiry();
    loadServices();
});
