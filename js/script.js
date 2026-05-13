$(function() {
    console.log("jQuery is active and the DOM is ready!");

    // --- CHAPTER 7: Time-based Greeting ---
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Skye Jimenez Photography 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    $('#greeting').text(greeting).hide().fadeIn(1200);


    // --- CHAPTER 8: Click Event (Contact to Book Now) ---
    $('#event-btn').on('click', function() {

        $('#feedback')
            .text('Thanks for contacting me to book now! I will reach out to you shortly.')
            .css({
                'color': '#0d6efd',
                'font-weight': 'bold'
            })
            .hide()
            .fadeIn(800);

        $(this)
            .text('Request Sent ✔')
            .prop('disabled', true);

        console.log("Booking request sent successfully!");
    });


    // --- BONUS: Gallery Fade Effect ---
    $('.row img')
        .css('opacity', '0.85')
        .fadeTo(900, 1.0);
});
