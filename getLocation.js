async function getUserLocation() {
    // Check if Geolocation is supported
    if ("geolocation" in navigator) {
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                // Get latitude and longitude
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Display latitude and longitude on the UI
                const locationElement = document.getElementById("location");
                locationElement.innerHTML = `Latitude: ${latitude.toFixed(
                    6
                )}, Longitude: ${longitude.toFixed(6)}`;

                // Append the link to the location element
                locationElement.appendChild(document.createElement("br"));
                locationElement.appendChild(googleMapsLink);
            },
            (error) => {
                // Handle error
                console.error("Error getting user location:", error);
                const locationElement = document.getElementById("location");
                locationElement.innerHTML = "Error getting user location.";
            }
        );
    } else {
        // Geolocation not supported
        console.error("Geolocation is not supported by this browser.");
        const locationElement = document.getElementById("location");
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

export { getUserLocation };