// ==================== COMPANY LIST ====================
const companies = [
    'AFN SPORTS EQUIPMENT SDN BHD',
    'AKER SOLUTIONS',
    'ANSHIN',
    'ARATA AUTO CENTRE SDN BHD',
    'BBCC DEVELOPMENT',
    'CITY UNIVERSITY',
    'CLICKASIA SDN BHD',
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT',
    'DHUB',
    'ECRL',
    'EXHIBITION SAMPLE',
    'FEDEX-BUKIT JELUTONG',
    'FEDEX-HITECH',
    'FEDEX-KLIA',
    'FINEGUARD INDUSTRIES',
    'FOODAGON CONNEXION SDN BHD',
    'FURI GLOBAL SDN BHD',
    'GBB BAKERY',
    'GOOD TIMING FOOD VILLAGE',
    'HONDA LOGISTICS',
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD',
    'ISKANDAR INNOVATIONS SDN BHD',
    'JOYCAMP PJ SDN BHD',
    'KOH TIKI OKR SDN BHD',
    'KUEHNE + NAGEL',
    'LH ELECTRIC & SERVICES',
    'LOTUS\'S STORE (MALAYSIA) SDN BHD',
    'LUXE ACRE SDN BHD',
    'MACRO PERSPECTIVE SDN BHD',
    'MILLENNIUM WELT SDN BHD',
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)',
    'NESTLE MANUFACTURING (M) SDN BHD (SA)',
    'PERCETAKAN TENAGA',
    'PERODUA MANUFACTURING SDN BHD',
    'REDVEST',
    'SAGA MAKMUR SDN BHD',
    'SEA ASIA SDN BHD',
    'SIN TAI HING',
    'SJK(C) HUA LIAN 3',
    'SJK(C) KEHSENG',
    'SK SAUJANA IMPIAN 2',
    'SMK TELOK DATOK',
    'SUNSET',
    'T7 AERO REPORT',
    'TAYLOR (TEG)',
    'UCSI INTERNATIONAL SCHOOL SB',
    'UPPER HERITAGE SDN BHD',
    'YINGWAH'
];

// ==================== MOBILE MENU ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// ==================== SEARCH FUNCTIONALITY ====================
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');
const searchForm = document.getElementById('searchForm');

if (searchInput && suggestionsList) {
    // Filter and display suggestions
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toUpperCase();
        
        if (searchTerm === '') {
            suggestionsList.classList.remove('active');
            suggestionsList.innerHTML = '';
            return;
        }
        
        const filteredCompanies = companies.filter(company => 
            company.toUpperCase().includes(searchTerm)
        );
        
        if (filteredCompanies.length > 0) {
            suggestionsList.innerHTML = filteredCompanies
                .map(company => `<div class="suggestion-item">${company}</div>`)
                .join('');
            suggestionsList.classList.add('active');
            
            // Add click handlers to suggestions
            const suggestionItems = suggestionsList.querySelectorAll('.suggestion-item');
            suggestionItems.forEach(item => {
                item.addEventListener('click', () => {
                    searchInput.value = item.textContent;
                    suggestionsList.classList.remove('active');
                    suggestionsList.innerHTML = '';
                });
            });
        } else {
            suggestionsList.classList.remove('active');
            suggestionsList.innerHTML = '';
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
            suggestionsList.classList.remove('active');
        }
    });
}

// ==================== FORM SUBMISSION ====================
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const companyName = searchInput.value.trim().toUpperCase();
        
        if (companyName === '') {
            alert('Please enter a company name.');
            return;
        }
        
        // Check if company exists in list
        const companyExists = companies.some(company => company.toUpperCase() === companyName);
        
        if (!companyExists) {
            alert('Company not found. Please select from the suggestions.');
            return;
        }
        
        // Save company name to localStorage
        localStorage.setItem('companyName', companyName);
        
        // Redirect to password page
        window.location.href = 'password.html';
    });
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CONTACT FORM ====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}