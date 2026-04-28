
function getGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning! Welcome to my Pitch 🌅";
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


<script>
document.addEventListener("DOMContentLoaded", function () {

  const services = [
    { name: "Full Game Package", available: true },
    { name: "Team Full Game Package", available: true },
    { name: "Tournament Package", available: false }
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

  const box = document.getElementById("serviceList");

  if (box) {
    box.innerHTML = output;
  }

});
</script>
