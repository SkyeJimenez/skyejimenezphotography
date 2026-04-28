
document.addEventListener("DOMContentLoaded", function () {

  // GREETING
  const hour = new Date().getHours();
  let greeting;

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

  // OFFER
  const hotel = {
    name: "Skye Jimenez Photography",
    roomRate: 240,
    discount: 15,
    offerPrice: function () {
      return this.roomRate * (1 - this.discount / 100);
    }
  };

  const roomRateEl = document.getElementById("roomRate");
  const specialRateEl = document.getElementById("specialRate");
  const offerEndsEl = document.getElementById("offerEnds");

  if (roomRateEl) roomRateEl.textContent = "$" + hotel.roomRate.toFixed(2);
  if (specialRateEl) specialRateEl.textContent = "$" + hotel.offerPrice().toFixed(2);

  function offerExpires() {
    const today = new Date();
    const weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return "Offer expires on " + weekFromToday.toLocaleDateString("en-US", options);
  }

  if (offerEndsEl) {
    offerEndsEl.innerHTML = offerExpires();
  }

});

    const services = [
        { name: "Full Game Package", available: true },
        { name: "Team Full Game Package", available: true },
        { name: "Tournament Package", available: false }
    ];

    let output = "";
    let i = 0;

    while (i < services.length) {

        if (services[i].available === true) {
            output += "📸 " + services[i].name + " — Available Now<br>";
        } else {
            output += "⛔ " + services[i].name + " — Currently Unavailable<br>";
        }

        i++;
    }

    const box = document.getElementById("serviceList");
    if (box) box.innerHTML = output;

});
