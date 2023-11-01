document.getElementById("passkeyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const passkey = document.getElementById("passkeyInput").value;

    // Replace 'your_passkey' with the actual passkey you want to use
    if (passkey === "your_passkey") {
        window.location.href = "your-protected-page.html";
    } else {
        document.getElementById("message").textContent = "Invalid passkey. Please try again.";
    }
});
