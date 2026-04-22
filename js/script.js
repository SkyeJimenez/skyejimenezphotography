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

function showOfferExpiry() {
    let today = new Date();
    let expireDate = new Date();

    expireDate.setDate(today.getDate() + 7);

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = expireDate.toLocaleDateString('en-US', options);

    document.getElementById("offer").textContent =
        "⚡ Limited Time Offer! 20% off Book now — offer expires on 5/28 " + formattedDate;
}

getGreeting();
showOfferExpiry();
