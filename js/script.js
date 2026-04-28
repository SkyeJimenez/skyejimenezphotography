document.addEventListener("DOMContentLoaded", function () {

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

  const price = 240;
  const discount = 15;

  const roomRateEl = document.getElementById("roomRate");
  const specialRateEl = document.getElementById("specialRate");
  const offerEndsEl = document.getElementById("offerEnds");

  const finalPrice = price * (1 - discount / 100);

  if (roomRateEl) {
    roomRateEl.textContent = "$" + price.toFixed(2);
  }

  if (specialRateEl) {
    specialRateEl.textContent = "$" + finalPrice.toFixed(2);
  }

  function offerExpires() {
    const today = new Date();
    const future = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    return "Offer expires on " + future.toDateString();
  }

  if (offerEndsEl) {
    offerEndsEl.textContent = offerExpires();
  }

});
