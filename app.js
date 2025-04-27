// Function to load content into placeholders
async function loadSection(sectionId, filePath) {
    try {
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(sectionId).innerHTML = content;
        } else {
            console.error("Error loading content: " + response.statusText);
        }
    } catch (error) {
        console.error("Fetch error: " + error);
    }
}

// Initialize content and AOS after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    loadSection("section-why-take-care", "why-take-care.html");
    loadSection("section-activities", "activities.html");
    loadSection("section-Meditation","Meditation.html");
 
    AOS.init(); // Initialize AOS for animations
});
