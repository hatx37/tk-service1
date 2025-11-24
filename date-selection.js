

window.addEventListener('DOMContentLoaded', function () {
    const companyName = localStorage.getItem('companyName');

    console.log("🔍 DATE SELECTION DEBUG");
    console.log("companyName:", companyName);

    if (!companyName) {
        alert("No company selected. Redirecting...");
        window.location.href = "index.html";
        return;
    }

    // Get service data from companyReportLinks (in company-data.js)
    const companyData = companyReportLinks[companyName];

    console.log("companyReportLinks:", companyReportLinks);
    console.log("companyData:", companyData);

    if (!companyData) {
        alert("No service data found for this company.");
        window.location.href = "index.html";
        return;
    }

    // Display company name at top
    document.getElementById("companyDisplay").textContent = companyName;

    // ❌ You no longer have lastServiceDate & nextServiceDate in your new company-data.js
    // So hide these fields safely
    document.getElementById("lastServiceDate").textContent = "N/A";
    document.getElementById("nextServiceDate").textContent = "N/A";
    document.getElementById("daysUntilNext").style.display = "none";

    // Display available dates
    displayServiceDates(companyData);
});


// =========================
// SHOW SERVICE DATES
// =========================

function displayServiceDates(companyData) {
    const datesListElement = document.getElementById("datesList");
    datesListElement.innerHTML = "";

    // All date keys from this company
    const serviceDates = Object.keys(companyData);

    console.log("📅 Available Service Dates:", serviceDates);

    if (serviceDates.length === 0) {
        datesListElement.innerHTML =
            '<p style="color: white; text-align:center;">No service reports available.</p>';
        return;
    }

    // Sort (newest first)
    const sortedDates = serviceDates.sort((a, b) => new Date(b) - new Date(a));

    sortedDates.forEach(date => {
        const btn = document.createElement("button");
        btn.className = "date-item";
        btn.innerHTML = `📅 ${formatDate(date)}`;
        btn.onclick = () => selectDate(date);

        datesListElement.appendChild(btn);
    });
}


// =========================
// DATE CHOSEN → SAVE + GO NEXT PAGE
// =========================

function selectDate(selectedDate) {
    const companyName = localStorage.getItem('companyName');

    const fansForThisDate = companyReportLinks[companyName][selectedDate];
    const fanList = Object.keys(fansForThisDate); // fan list (Fan 1, Fan 2...)

    console.log("Selected Date:", selectedDate);
    console.log("Fans on that date:", fanList);

    localStorage.setItem("selectedServiceDate", selectedDate);
    localStorage.setItem("fansServiced", JSON.stringify(fanList));

    window.location.href = "fan-selection.html";
}


// =========================
// FORMAT DATE (YYYY-MM-DD → Long text)
// =========================

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
}








