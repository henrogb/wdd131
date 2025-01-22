// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (
            13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    } else {
        return "N/A";
    }
}

// Update wind chill on page load
document.addEventListener("DOMContentLoaded", () => {
    const temperature = 10; // Example static value in °C
    const windSpeed = 15; // Example static value in km/h

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = windChill;

    // Set last modified date
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleDateString();
});
