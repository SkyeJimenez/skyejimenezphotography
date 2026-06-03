document.addEventListener("DOMContentLoaded", function () {

    console.log("Gallery script loaded");

    // =========================
    // SEARCH FUNCTION (FIXED)
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
    // FILTER FUNCTION (FIXED)
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
    // SORT A-Z (FIXED)
    // =========================
    window.sortItems = function () {

        const container = document.getElementById("itemContainer");
        const items = Array.from(document.querySelectorAll(".item"));

        items.sort((a, b) => {

            return a.innerText.toLowerCase()
                .localeCompare(b.innerText.toLowerCase());

        });

        items.forEach(item => container.appendChild(item));
    };

});
