$(function () {
    console.log("jQuery is active and the DOM is ready!");

    // ---------------------------
    // CHAPTER 7: TIME GREETING
    // ---------------------------
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Skye Jimenez Photography 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    $("#greeting")
        .text(greeting)
        .hide()
        .fadeIn(1200);

    // ---------------------------
    // CHAPTER 8: BUTTON EVENT
    // ---------------------------
    $("#event-btn").on("click", function () {

        $("#feedback")
            .stop(true, true)
            .text("Thanks for contacting me to book now! I will reach out to you shortly.")
            .css({
                color: "#0d6efd",
                "font-weight": "bold"
            })
            .hide()
            .fadeIn(800);

        $(this)
            .text("Request Sent ✔")
            .prop("disabled", true);

        console.log("Booking request sent successfully!");
    });

    // ---------------------------
    // CHAPTER 9/10: API FEATURE (QUOTABLE)
    // ---------------------------
    function loadQuote() {

        $("#quote")
            .fadeOut(200, function () {

                $.ajax({
                    url: "https://api.quotable.io/random",
                    method: "GET",
                    success: function (data) {
                        $("#quote")
                            .text(`"${data.content}" — ${data.author}`)
                            .fadeIn(300);
                    },
                    error: function () {
                        $("#quote")
                            .text("Could not load quote. Try again.")
                            .fadeIn(300);
                    }
                });

            });
    }

    // Load quote on page load
    loadQuote();

    // New quote button
    $("#quote-btn").on("click", function () {
        loadQuote();
    });

    // ---------------------------
    // BONUS: GALLERY EFFECT
    // ---------------------------
    $(".row img")
        .css("opacity", "0.85")
        .on("mouseenter", function () {
            $(this).fadeTo(200, 1);
        })
        .on("mouseleave", function () {
            $(this).fadeTo(200, 0.85);
        });
});
