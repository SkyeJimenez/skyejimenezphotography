document.addEventListener("DOMContentLoaded", function () {

    console.log("Site script loaded");

    // =========================
    // SEARCH FUNCTION
    // =========================
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase().trim();
            const items = document.querySelectorAll(".item");

            items.forEach(item => {
                const text = item.innerText.toLowerCase();

                item.style.display = text.includes(value) ? "block" : "none";
            });
        });
    }

    // =========================
    // FILTER FUNCTION
    // =========================
    window.filterItems = function (category) {

        const items = document.querySelectorAll(".item");

        items.forEach(item => {

            const itemCategory = item.getAttribute("data-category");

            item.style.display =
                (category === "all" || itemCategory === category)
                ? "block"
                : "none";
        });
    };

    // =========================
    // SORT FUNCTION
    // =========================
    window.sortItems = function () {

        const container = document.getElementById("itemContainer");
        if (!container) return;

        const items = Array.from(document.querySelectorAll(".item"));

        items.sort((a, b) =>
            a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase())
        );

        items.forEach(item => container.appendChild(item));
    };

    // =========================
    // FORM VALIDATION (CHAPTER 13 FIXED)
    // =========================
   const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {

        let errorMsg = "";

        const nameEl = document.getElementById("name");
        const emailEl = document.getElementById("email");
        const messageEl = document.getElementById("message");
        const errorDisplay = document.getElementById("errorMsg");

        const name = nameEl ? nameEl.value.trim() : "";
        const email = emailEl ? emailEl.value.trim() : "";
        const message = messageEl ? messageEl.value.trim() : "";

        if (!name) errorMsg += "Name is required. ";
        if (!email) errorMsg += "Email is required. ";
        else if (!email.includes("@")) errorMsg += "Enter a valid email. ";
        if (!message) errorMsg += "Message is required. ";

        if (errorMsg !== "") {
            event.preventDefault();
            if (errorDisplay) errorDisplay.textContent = errorMsg;
        } else {
            if (errorDisplay) errorDisplay.textContent = "";
            alert("Message sent successfully!");
        }
    });
}

