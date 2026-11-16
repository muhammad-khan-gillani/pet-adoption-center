// Family Paws - Lab 12 JavaScript

function adoptPet(petName) {
    alert("Yayyyy! Thank you for choosing to adopt " + petName + "!");
}

// Simple front-end form validation and confirmation.
// This form does not send data to an email server.
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (name === "") {
                formMessage.textContent = "Please enter your name.";
                return;
            }

            formMessage.textContent = "Thank you, " + name + "! Your message is ready.";
            alert("Thank you for contacting Family Paws, " + name + "!");
            contactForm.reset();
        });
    }
});
