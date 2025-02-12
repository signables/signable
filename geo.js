document.addEventListener("DOMContentLoaded", function () {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            const userCountry = data.country_code;
            const priceElements = document.querySelectorAll(".price");
            const currencyElements = document.querySelectorAll(".currency");

            // Define Payment Links
            const razorpayLink = "#";  // Replace with actual Razorpay link
            const paypalLink = "#";  // Replace with actual PayPal link

            if (userCountry === "IN") {
                priceElements.forEach(el => el.textContent = "999");
                currencyElements.forEach(el => el.textContent = "₹");
                localStorage.setItem("paymentLink", razorpayLink);  // Save Razorpay link
            } else {
                priceElements.forEach(el => el.textContent = "12");
                currencyElements.forEach(el => el.textContent = "$");
                localStorage.setItem("paymentLink", paypalLink);  // Save PayPal link
            }
        })
        .catch(error => console.error("Error fetching location data:", error));
});
