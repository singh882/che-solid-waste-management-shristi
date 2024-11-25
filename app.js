// app.js

// Handle waste input form submission
document.getElementById('waste-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const wasteType = document.getElementById('waste-type').value;
    const quantity = document.getElementById('quantity').value;

    if (quantity <= 0 || isNaN(quantity)) {
        alert('Please enter a valid waste quantity.');
        return;
    }

    displayWasteReport(wasteType, quantity);
});

// Display waste report with tips based on waste type
function displayWasteReport(type, quantity) {
    const reportContent = document.getElementById('report-content');
    let reportText = `You have entered ${quantity} kg of ${type} waste.`;

    // Add specific tips for each waste type
    if (type === 'recyclable') {
        reportText += "<br>Tip: Clean all recyclables before placing them in the bin!";
    } else if (type === 'organic') {
        reportText += "<br>Tip: Compost organic waste to reduce landfill use!";
    } else if (type === 'non-recyclable') {
        reportText += "<br>Tip: Reduce non-recyclable waste by choosing reusable items.";
    }

    reportContent.innerHTML = reportText;
}

// Function to get next waste collection schedule
document.getElementById('schedule-btn').addEventListener('click', function() {
    getCollectionSchedule();
});

// Simulate fetching collection schedule
function getCollectionSchedule() {
    const collectionDate = new Date();
    collectionDate.setDate(collectionDate.getDate() + 2); // Next collection in 2 days
    const collectionTime = collectionDate.toLocaleString();

    document.getElementById('collection-time').textContent = `Your next collection is on: ${collectionTime}`;
}

// Function to display recycling tips for users
function showRecyclingTips() {
    const tipsContent = document.getElementById('tips-content');
    tipsContent.innerHTML = `
        <p><strong>Recycling Tips:</strong></p>
        <ul>
            <li>Clean all recyclables before putting them in the bin.</li>
            <li>Separate organic waste for composting.</li>
            <li>Avoid mixing recyclables with food waste or liquids.</li>
        </ul>
    `;
}