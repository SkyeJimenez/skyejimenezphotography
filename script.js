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
    // CHAPTER 9/10: API QUOTES
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

    loadQuote();

    $("#quote-btn").on("click", function () {
        loadQuote();
    });


    // -------------------------
    // CHAPTER 11: CONTENT PANELS
    // -------------------------
    $(".panel-btn").on("click", function () {

        const content = $(this).next(".panel-content");

        $(".panel-content").not(content).slideUp(200);

        content.stop(true, true).slideToggle(250);
    });


    // -------------------------
    // BONUS: GALLERY HOVER EFFECT
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


    // =========================
    // CHAPTER 12: SEARCH
    // =========================
    $("#searchInput").on("keyup", function () {

        const value = $(this).val().toLowerCase();

        $(".item").filter(function () {

            const text = $(this).text().toLowerCase();
            $(this).toggle(text.indexOf(value) > -1);

        });
    });


    // =========================
    // CHAPTER 12: FILTER BUTTONS
    // =========================
    window.filterItems = function (category) {

        if (category === "all") {
            $(".item").fadeIn(200);
        } else {
            $(".item").each(function () {

                const match = $(this).data("category") === category;

                if (match) {
                    $(this).fadeIn(200);
                } else {
                    $(this).fadeOut(200);
                }
            });
        }
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

        $.each(items, function (index, item) {
            container.append(item);
        });
    };

});
