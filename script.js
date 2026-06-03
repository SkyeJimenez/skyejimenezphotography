document.addEventListener("DOMContentLoaded", function () {

    console.log("Gallery script loaded");

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

                if (text.includes(value)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
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

            if (category === "all" || itemCategory === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    };

    // =========================
    // SORT A-Z
    // =========================
    window.sortItems = function () {

        const container = document.getElementById("itemContainer");
        const items = Array.from(document.querySelectorAll(".item"));

        items.sort((a, b) => {
            return a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase());
        });

        items.forEach(item => container.appendChild(item));
    };


    // =========================
    // CHAPTER 13 FORM VALIDATION (ADDED)
    // =========================
    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            let errorMsg = "";

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            // Validate Name
            if (!name) {
                errorMsg += "Name is required. ";
            }

            // Validate Email
            if (!email) {
                errorMsg += "Email is required. ";
            } else if (!email.includes("@")) {
                errorMsg += "Enter a valid email address. ";
            }

            // Validate Message
            if (!message) {
                errorMsg += "Message is required. ";
            }

            // Show errors or submit
            const errorDisplay = document.getElementById("errorMsg");

            if (errorMsg !== "") {
                event.preventDefault();
                if (errorDisplay) {
                    errorDisplay.textContent = errorMsg;
                }
            } else {
                if (errorDisplay) {
                    errorDisplay.textContent = "";
                }
            }
        });
    }

});
