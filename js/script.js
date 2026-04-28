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

// Run functions
getGreeting();
showOfferExpiry();

// Services loop
var services = ['Family Photography', 'Sports Media', 'Portrait Sessions'];
var serviceList = '';

for (var i = 0; i < services.length; i++) {
    serviceList += services[i] + '<br>';
}

document.getElementById('services').innerHTML = serviceList;

<script>
document.addEventListener("DOMContentLoaded", function () {

  const services = [
    { name: "Portrait Session", available: true },
    { name: "Wedding Package", available: true },
    { name: "Mini Session", available: false },
    { name: "Event Coverage", available: true }
  ];

  let output = "";
  let i = 0;

  // Chapter 4 decision loop
  while (i < services.length) {

    if (services[i].available === true) {
      output += "📸 " + services[i].name + " — Available Now<br>";
    } else {
      output += "⛔ " + services[i].name + " — Currently Unavailable<br>";
    }

    i++;
  }

  const el = document.getElementById("serviceList");

  if (el) {
    el.innerHTML = output;
  } else {
    console.log("ERROR: serviceList element not found");
  }

});
</script>
