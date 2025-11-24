// Service history data for each company
// FORMAT: Each date lists which fans were serviced on that specific date
// YOU MUST UPDATE THESE WITH YOUR ACTUAL SERVICE DATES
const companyServiceData = {
    'AFN SPORTS EQUIPMENT SDN BHD': {
        lastServiceDate: '2025-03-28',
        nextServiceDate: '2026-03-28',
        serviceDates: {
            '2025-03-28': ['Fan 1', 'Fan 2'],
  
        }
    },
    'AKER SOLUTIONS': {
        lastServiceDate: '2025-08-16',
        nextServiceDate: '2026-08-16',
        serviceDates: {
            '2025-08-30': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2025-08-16': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2025-11-16': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2024-08-24': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
        }
    },
    'ANSHIN': {
        lastServiceDate: '2025-01-07',
        nextServiceDate: '2026-01-07',
        serviceDates: {
            '2025-01-07': ['Fan 1', 'Fan 2', 'Fan 3'],
        }
    },
    'ARATA AUTO CENTRE SDN BHD': {
        lastServiceDate: '2025-04-22',
        nextServiceDate: '2026-04-22',
        serviceDates: {
            '2025-04-22': ['Fan 1'],
        }
    },
    'BBCC DEVELOPMENT': {
        lastServiceDate: '2025-03-27',
        nextServiceDate: '2026-09-27',
        serviceDates: {
            '2025-03-27': ['Fan 6'],
        }
    },
    'CITY UNIVERSITY': {
        lastServiceDate: '2024-01-16',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2024-01-16': ['Fan 1'],
        }
    },
    'CLICKASIA SDN BHD': {
        lastServiceDate: '2025-06-13',
        nextServiceDate: '2026-06-13',
        serviceDates: {
            '2025-06-13': ['Fan 1','Fan 2', 'Fan 3'],
        }
    },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': {
        lastServiceDate: '2025-05-20',
        nextServiceDate: '2026-05-20',
        serviceDates: {
            '2022-06-27': ['Fan 1'],
            '2025-05-20': ['Fan 1'],
        }
    },
    'DHUB': {
        lastServiceDate: 'N/A',
        nextServiceDate: 'N/A',
        serviceDates: {
            'Photo': ['Fan 1'],
        }
    },
    'ECRL': {
        lastServiceDate: '2025-05-02',
        nextServiceDate: '2026-05-02',
        serviceDates: {
            '2025-05-02': ['Fan 1', 'Fan 2'],
            '2025-05-05': ['Fan 1'],
        }
    },
    'EXHIBITION SAMPLE': {
        lastServiceDate: 'N/A',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2025-04-25': ['Fan 1','Fan 2'],
            '2025-06-10': ['Fan 1','Fan 2'],
        }
    },
    'FEDEX-BUKIT JELUTONG': {
        lastServiceDate: 'N/A',
        nextServiceDate: 'N/A',
        serviceDates: {
            'N/A': ['N/A', 'N/A'],
        }
    },
    'FEDEX-HITECH': {
        lastServiceDate: '2025-04-29',
        nextServiceDate: '2026-04-29',
        serviceDates: {
            '2025-04-29': ['Fan 1', 'Fan 2','Fan 3','Fan 4'],
            '2025-08-08': ['Fan 4'],
        }
    },
    'FEDEX-KLIA': {
        lastServiceDate: '2025-04-16',
        nextServiceDate: '2026-04-16',
        serviceDates: {
            '2025-04-16': ['Fan 1', 'Fan 2'],
        }
    },
    'FINEGUARD INDUSTRIES': {
        lastServiceDate: '2025-07-04',
        nextServiceDate: '2026-07-04',
        serviceDates: {
            '2025-07-04': ['Fan 1'],
        }
    },
    'FOODAGON CONNEXION SDN BHD': {
        lastServiceDate: '2025-05-12',
        nextServiceDate: '2026-05-12',
        serviceDates: {
            '2025-05-12': ['Fan 1'],
        }
    },
    'FURI GLOBAL SDN BHD': {
        lastServiceDate: '2025-09-08',
        nextServiceDate: '2026-09-08',
        serviceDates: {
            '2025-09-08': ['Fan 1'],
        }
    },
    'GBB BAKERY': {
        lastServiceDate: '2024-01-05',
        nextServiceDate: '2025-01-05',
        serviceDates: {
            '2024-01-05': ['Fan 1'],
        }
    },
    'GOOD TIMING FOOD VILLAGE': {
        lastServiceDate: '2025-07-30',
        nextServiceDate: '2026-07-30',
        serviceDates: {
            '2025-07-30': ['Fan 2'],
        }
    },
    'HONDA LOGISTICS': {
        lastServiceDate: '2024-12-07',
        nextServiceDate: '2025-06-07',
        serviceDates: {
            '2022-09-17': ['C6(BIGASS)', 'C7(AIREGARD)', 'C8(AIREGARD)','C9(BIGASS)', 'C11(AIREGARD)', 'C14(BIGASS)', 'D15(AIREGARD)','E15(AIREGARD)','F14'],
            '2023-04-09': ['C6(9)(BIGASS)', 'C7(AIREGARD)', 'C8(AIREGARD)','C9(BIGASS)','C10(AIREGARD)','C11(AIREGARD)', 'C14(6)(BIGASS)', 'D15(8)(AIREGARD)','E15(AIREGARD)','F14(AIREGARD)'],
            '2023-10-07': ['B6','B7','B8','B10','C6','C7','C8','C9','C10','C11','C14','D15','E15','F14'],
            '2024-05-04': ['B6(Fan 1)','B7(Fan 2)','B9(Fan 3)','B10(Fan 4)','C6(Fan 14)','C7(Fan 13)','C8(Fan 12)','C9(Fan 11)','C10(Fan 10)','C11(Fan 9)','C14(Fan 8)','D16(Fan 6)','F14(Fan 5)','F15 Keluar site(Fan 7)'],
            '2024-12-07': ['AIREGARD(Fan 2)','AIREGARD(Fan 3)','AIREGARD(Fan 5)','AIREGARD(Fan 6)','AIREGARD(Fan 8)','AIREGARD(Fan 9)','BIGASS(Fan 1)','BIGASS(Fan 4)','BIGASS(Fan 7)','UHF-14(Fan 11)','UHF-14(Fan 12)','UHF-14(Fan 13)','UHF-14(Fan 14)',]
        }
    },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': {
        lastServiceDate: '2025-08-01',
        nextServiceDate: '2026-08-01',
        serviceDates: {
            '2025-08-01': ['Fan 1','Fan 2'],
        }
    },
    'ISKANDAR INNOVATIONS SDN BHD': {
        lastServiceDate: '2024-06-25',
        nextServiceDate: '2025-06-25',
        serviceDates: {
            '2024-06-25': ['Fan 1','Fan 2','Fan 3','Fan 4','Fan 5','Fan 6','Fan 7','Fan 8'],
        }
    },
    'JOYCAMP PJ SDN BHD': {
        lastServiceDate: '2024-10-26',
        nextServiceDate: '2025-10-26',
        serviceDates: {
            '2024-10-26': ['Fan 1'],
        }
    },
    'KOH TIKI OKR SDN BHD': {
        lastServiceDate: '2025-06-09',
        nextServiceDate: '2026-06-09',
        serviceDates: {
            '2025-06-09': ['Fan 1','Fan 2'],
        }
    },
    'KUEHNE + NAGEL': {
        lastServiceDate: '2023-12-19',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2023-12-19': ['Fan 1(Site A)', 'Fan 2(Site A)','Fan 3(Site A)','Fan 4(Site A)','Fan 5(Site B)','Fan 6(Site B)','Fan 7(Site B)','Fan 8(D16/D18)','Fan 9(D16/D18)','Fan 10(D16/D18)',],
        }
    },
    'LH ELECTRIC & SERVICES': {
        lastServiceDate: '2025-04-25',
        nextServiceDate: '2026-04-25',
        serviceDates: {
            '2025-04-25': ['Fan 1','Fan 2'],
        }
    },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': {
        lastServiceDate: '2025-02-12',
        nextServiceDate: '2025-07-01',
        serviceDates: {
            '2025-02-12': ['G1', 'G2', 'G3','G4','G5','G6','G8','G9','G10','G11','G12','G14','G16','G17','G18'],
        }
    },
    'LUXE ACRE SDN BHD': {
        lastServiceDate: '2025-03-07',
        nextServiceDate: '2026-03-07',
        serviceDates: {
            '2025-03-07': ['Fan 1'],
        }
    },
    'MACRO PERSPECTIVE SDN BHD': {
        lastServiceDate: '2025-05-14',
        nextServiceDate: '2026-05-14',
        serviceDates: {
            '2025-05-14': ['Fan 1'],
        }
    },
    'MILLENNIUM WELT SDN BHD': {
        lastServiceDate: '2025-02-05',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2025-02-05': ['Fan 1','Fan 2','Fan 3'],
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': {
        lastServiceDate: '2024-08-30',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2024-08-30': ['Fan 1'],
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': {
        lastServiceDate: '2025-04-04',
        nextServiceDate: '2026-04-05',
        serviceDates: {
            '2025-04-04': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5','Fan 6'],
        }
    },
    'PERCETAKAN TENAGA': {
        lastServiceDate: '2025-03-22',
        nextServiceDate: '2026-03-22',
        serviceDates: {
            '2025-03-22': ['Fan 3'],
        }
    },
    'PERODUA MANUFACTURING SDN BHD': {
        lastServiceDate: '2025-08-16',
        nextServiceDate: '2026-08-16',
        serviceDates: {
            '2023-10-28': ['Fan 1', 'Fan 2'],
            '2025-08-16': ['Fan 1', 'Fan 2'],
        }
    },
    'REDVEST': {
        lastServiceDate: '2025-06-17',
        nextServiceDate: '2026-06-17',
        serviceDates: {
            '2025-06-17': ['Fan 1','Fan 2','Fan 3'],
        }
    },
    'SAGA MAKMUR SDN BHD': {
        lastServiceDate: '2025-02-09',
        nextServiceDate: '2026-02-09',
        serviceDates: {
            '2025-02-09': ['Fan 1', 'Fan 2','Fan 3','Fan 4','Fan 5'],
            '2025-03-25': ['Fan 4'],
            '2025-04-09': ['Fan 3','Fan 4'],
        }
    },
    'SEA ASIA SDN BHD': {
        lastServiceDate: '2024-07-14',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2024-07-24': ['Fan 1','Fan 2','Fan 3'],
        }
    },
    'SIN TAI HING': {
        lastServiceDate: '2025-10-03',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2023-12-15': ['Fan 1', 'Fan 2'],
            '2025-10-03': ['Fan 1','Fan 2'],
        }
    },
    'SJK(C) HUA LIAN 3': {
        lastServiceDate: '2025-03-20',
        nextServiceDate: '2026-03-20',
        serviceDates: {
            '2024-04-06': ['Fan 1'],
            '2025-03-20': ['Fan 1'],
        }
    },
    'SJK(C) KEHSENG': {
        lastServiceDate: '2024-10-08',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2025-10-08': ['Fan 1','Fan 2'],
        }
    },
    'SK SAUJANA IMPIAN 2': {
        lastServiceDate: '2025-02-20',
        nextServiceDate: '2026-05-22',
        serviceDates: {
            '2025-02-20': ['Fan 1', 'Fan 2'],
        }
    },
    'SMK TELOK DATOK': {
        lastServiceDate: '2025-05-22',
        nextServiceDate: '2026-05-22',
        serviceDates: {
            '2025-05-22': ['Fan 1','Fan 2'],
        }
    },
    'SUNSET': {
        lastServiceDate: '2025-06-17',
        nextServiceDate: '2026-06-17',
        serviceDates: {
            '2025-06-17': ['Fan 1'],
        }
    },
    'T7 AERO REPORT': {
        lastServiceDate: '2024-01-17',
        nextServiceDate: 'N/A',
        serviceDates: {
            '2024-01-17': ['Fan 1','Fan 2'],
        }
    },
    'TAYLOR (TEG)': {
        lastServiceDate: '2024-10-18',
        nextServiceDate: '2025-10-18',
        serviceDates: {
            '2025-10-18': ['Fan 1', 'Fan 2'],
        }
    },
    'UCSI INTERNATIONAL SCHOOL SB': {
        lastServiceDate: '2025-08-06',
        nextServiceDate: '2025-08-09',
        serviceDates: {
            '2025-08-06': ['Fan 4'],
        }
    },
    'UPPER HERITAGE SDN BHD': {
        lastServiceDate: '2025-07-25',
        nextServiceDate: '2026-07-25',
        serviceDates: {
            '2025-07-25': ['Fan 1'],
       }
    },
    'YINGWAH': {
        lastServiceDate: '2025-06-17',
        nextServiceDate: '2026-06-17',
        serviceDates: {
            '2025-06-17': ['Fan 1'],
        }
    }
};

// ========================================
// PAGE INITIALIZATION
// ========================================

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







