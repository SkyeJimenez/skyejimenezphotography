$(function () {

    console.log("Website loaded successfully");

    // ----------------------
    // CHAPTER 7: GREETING
    // ----------------------
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
        .fadeIn(1000);

    // ----------------------
    // CHAPTER 8: BUTTON
    // ----------------------
    $("#event-btn").on("click", function () {

        $("#feedback")
            .stop(true, true)
            .text("Thanks! I’ll reach out soon to book your session.")
            .css({
                color: "#0d6efd",
                fontWeight: "bold"
            })
            .hide()
            .fadeIn(600);

        $(this)
            .text("Request Sent ✔")
            .prop("disabled", true);

    });

    // ----------------------
    // CHAPTER 9/10: API
    // ----------------------
    function loadQuote() {

        $("#quote").fadeOut(150, function () {

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

    // Load on page start
    loadQuote();

    // New quote button
    $("#quote-btn").on("click", function () {
        loadQuote();
    });

});
