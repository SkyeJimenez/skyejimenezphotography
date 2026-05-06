function getGreeting() {
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
}

 function offerExpires() {
    const today = new Date();
    const future = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    return "Offer expires on " + future.toDateString();
  }

  if (offerEndsEl) {
    offerEndsEl.textContent = offerExpires();
  }
  function offerExpires() {
        const today = new Date();
        const year = today.getFullYear();

        // Set end of April
        const endOfApril = new Date(year, 3, 30); // Month is 0-based (3 = April)

        return "🔥 20% OFF — Valid until " + endOfApril.toDateString();
    }

    if (offerEndsEl) {
        offerEndsEl.textContent = offerExpires();
    }
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("myButton");

  button.addEventListener("click", function () {
    alert("Event triggered! You clicked the button.");
  });
});
}
});
