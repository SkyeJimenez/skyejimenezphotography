$(function() {
    // This function runs as soon as the DOM is ready (jQuery version of DOMContentLoaded)
    console.log("jQuery is active and the DOM is ready!");

    // --- CHAPTER 7: jQuery DOM (Time-based Greeting) ---
    const hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning! Welcome to Skye Jimenez Photography 🌅";
    } else if (hour < 18) {
        greeting = "Good Afternoon! Thanks for stopping by ☀️";
    } else {
        greeting = "Good Evening! Hope you enjoy your visit 🌙";
    }

    // In jQuery, we use .text() to change content
    $('#greeting').text(greeting);


    // --- CHAPTER 8: jQuery Events (Click Event) ---
    // We target the button and use .on() to listen for the click
    $('#event-btn').on('click', function() {
        
        // We target the feedback div
        $('#feedback')
            .text('jQuery Event Triggered! Thank you for visiting my portfolio.')
            .css({
                'color': '#0d6efd',
                'font-weight': 'bold'
            })
            .hide()      // Hide it first...
            .fadeIn(800); // ...then fade it in beautifully (Chapter 7 Effect)
            
        console.log("The jQuery click event was successful!");
    });

    // BONUS: Subtle Gallery Effect
    // This makes your images slightly transparent and fade in fully on load
    $('.row img').css('opacity', '0.8').fadeTo(1000, 1.0);

});
