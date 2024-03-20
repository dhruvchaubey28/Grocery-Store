function goToHomePage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    var storeLink = document.getElementById("store-link");
    if (storeLink) {
        storeLink.addEventListener("click", goToHomePage);
    }
});
