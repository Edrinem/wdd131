document.addEventListener("DOMContentLoaded", function () {
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("wind-chill").textContent = windChill;
    
    document.getElementById("lastModified").textContent = document.lastModified;
});

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return Math.round(
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        ) + "°C";
    } else {
        return "N/A";
    }
}
