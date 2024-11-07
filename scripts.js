/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents form submission

        const emailInput = document.querySelector("#email");
        const emailValue = emailInput.value.trim();

        if (emailValue) {
            // Display thank you message with the entered email
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        } else {
            // Display error message if email is not provided
            messageDiv.textContent = "Please enter a valid email address.";
        }
    });
});
