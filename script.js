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

                if (text.includes(value)) {
                    item.style.display = "";
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
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    };

    // =========================
    // SORT FUNCTION
    // =========================
    window.sortItems = function () {

        const container = document.getElementById("itemContainer");

        if (!container) return;

        const items = Array.from(
            container.querySelectorAll(".item")
        );

        items.sort((a, b) => {

            const textA = a.innerText.toLowerCase().trim();
            const textB = b.innerText.toLowerCase().trim();

            return textA.localeCompare(textB);

        });

        items.forEach(item => {
            container.appendChild(item);
        });

    };

    // =========================
    // FORM VALIDATION
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

            if (name === "") {
                errorMsg += "Name is required. ";
            }

            if (email === "") {
                errorMsg += "Email is required. ";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                errorMsg += "Please enter a valid email address. ";
            }

            if (message === "") {
                errorMsg += "Message is required. ";
            }

            if (errorMsg !== "") {

                event.preventDefault();

                if (errorDisplay) {
                    errorDisplay.textContent = errorMsg;
                }

            } else {

                if (errorDisplay) {
                    errorDisplay.textContent = "";
                }

                alert("Message sent successfully!");

            }

        });

    }

});
