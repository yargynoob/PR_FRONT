const modal = document.getElementById("modal");
const form = document.getElementById("contactForm");

form.onsubmit = function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        window.location.href = "thx.html";
    } else {
        form.reportValidity();
    }
};