$(function () {

    console.log("Skye Jimenez Photography site loaded");

    // =========================
    // HERO GREETING
    // =========================
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


    // =========================
    // BOOKING BUTTON
    // =========================
    $("#event-btn").on("click", function () {

        $("#feedback")
            .stop(true, true)
            .text("Thanks! Your booking request has been received.")
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


    // =========================
    // API QUOTES
    // =========================
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
                        $("#quote").text("Quote unavailable right now.");
                    });

            });
    }

    loadQuote();

    $("#quote-btn").on("click", function () {
        loadQuote();
    });


    // =========================
    // CONTENT PANELS
    // =========================
    $(".panel-btn").on("click", function () {

        const content = $(this).next(".panel-content");

        $(".panel-content").not(content).slideUp(200);

        content.stop(true, true).slideToggle(250);
    });


    // =========================
    // CHAPTER 12: SEARCH (FIXED)
    // =========================
    $("#searchInput").on("keyup", function () {

        const value = $(this).val().toLowerCase();

        $(".item").each(function () {

            const text = $(this).text().toLowerCase();

            if (text.indexOf(value) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


    // =========================
    // CHAPTER 12: FILTER (FIXED)
    // =========================
    window.filterItems = function (category) {

        $(".item").each(function () {

            const itemCategory = $(this).data("category");

            if (category === "all" || itemCategory === category) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    };


    // =========================
    // CHAPTER 12: SORT A-Z
    // =========================
    window.sortItems = function () {

        const container = $("#itemContainer");
        const items = $(".item").get();

        items.sort(function (a, b) {
            return $(a).text().toLowerCase()
                .localeCompare($(b).text().toLowerCase());
        });

        $.each(items, function (i, item) {
            container.append(item);
        });
    };

});
