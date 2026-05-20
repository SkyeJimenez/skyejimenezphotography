$(function () {

    console.log("Skye Jimenez Photography site loaded");

    // -------------------------
    // CHAPTER 7: TIME GREETING
    // -------------------------
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


    // -------------------------
    // CHAPTER 8: BUTTON INTERACTION
    // -------------------------
    $("#event-btn").on("click", function () {

        $("#feedback")
            .stop(true, true)
            .text("Thanks! Your booking request has been received. I will contact you soon.")
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


    // -------------------------
    // CHAPTER 9/10: API (FIXED + RELIABLE)
    // -------------------------
    function loadQuote() {

    const api1 = "https://dummyjson.com/quotes/random";
    const api2 = "https://api.quotable.io/random";

    $.getJSON(api1)
        .done(function (data) {
            $("#quote").text(`"${data.quote}" — ${data.author}`);
        })
        .fail(function () {

            $.getJSON(api2)
                .done(function (data) {
                    $("#quote").text(`"${data.content}" — ${data.author}`);
                })
                .fail(function () {
                    $("#quote").text("Quote unavailable right now. Try again later.");
                });

        });
}


    // Load quote on page load
    loadQuote();


    // New quote button
    $("#quote-btn").on("click", function () {
        loadQuote();
    });


    // -------------------------
    // BONUS: GALLERY EFFECT
    // -------------------------
    $(".row img")
        .css("opacity", "0.85")
        .hover(
            function () {
                $(this).fadeTo(200, 1);
            },
            function () {
                $(this).fadeTo(200, 0.85);
            }
        );

});
