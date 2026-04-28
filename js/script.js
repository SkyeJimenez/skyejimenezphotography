// =========================
// GREETING MESSAGE (Chapter 3 style logic)
// =========================
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

    document.getElementById("greeting").textContent = greeting;
}


// =========================
// OFFER EXPIRATION FEATURE
// =========================
function showOfferExpiry() {
    let today = new Date();
    let expireDate = new Date();

    expireDate.setDate(today.getDate() + 7);

    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let formattedDate = expireDate.toLocaleDateString('en-US', options);

    document.getElementById("offer").textContent =
        "⚡ Limited Time Offer! 20% off bookings — offer expires " + formattedDate;
}


// =========================
// CHAPTER 4 DECISION LOOP (FIXED + REQUIRED)
// =========================
function loadServices() {

    var services = [
        { name: 'Family Photography', available: true },
        { name: 'Sports Media', available: true },
        { name: 'Portrait Sessions', available: false },
        { name: 'Event Coverage', available: true }
    ];

    var serviceList = "";

    for (var i = 0; i < services.length; i++) {

        if (services[i].available === true) {
            serviceList += "📸 " + services[i].name + " — Available<br>";
        } else {
            serviceList += "⛔ " + services[i].name + " — Currently Unavailable<br>";
        }
    }

    document.getElementById("services").innerHTML = serviceList;
}


// =========================
// RUN EVERYTHING
// =========================
getGreeting();
showOfferExpiry();
loadServices();
