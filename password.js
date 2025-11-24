// ==================== COMPANY PASSWORD DATA ====================
const companyPasswords = {
    'AFN SPORTS EQUIPMENT SDN BHD': { password: 'Afn@tkfant' },
    'AKER SOLUTIONS': { password: 'Aker@tkfant' },
    'ANSHIN': { password: 'Anshin@tkfant' },
    'ARATA AUTO CENTRE SDN BHD': { password: 'Arata@tkfant' },
    'BBCC DEVELOPMENT': { password: 'Bbcc@tkfant' },
    'CITY UNIVERSITY': { password: 'CU@tkfant' },
    'CLICKASIA SDN BHD': { password: 'Click@tkfant' },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': { password: 'Hhh@tkfant' },
    'DHUB': { password: 'Dhub@tkfant' },
    'ECRL': { password: 'Ecrl@tkfant' },
    'EXHIBITION SAMPLE': { password: 'bbnmm' },
    'FEDEX-BUKIT JELUTONG': { password: 'Fedexbj@tkfant' },
    'FEDEX-HITECH': { password: 'Hitech@tkfant' },
    'FEDEX-KLIA': { password: 'Klia@tkfant' },
    'FINEGUARD INDUSTRIES': { password: 'Fine@tkfant' },
    'FOODAGON CONNEXION SDN BHD': { password: 'Food@tkfant' },
    'FURI GLOBAL SDN BHD': { password: 'Furi@tkfant' },
    'GBB BAKERY': { password: 'Gbb@tkfant' },
    'GOOD TIMING FOOD VILLAGE': { password: 'Good@tkfant' },
    'HONDA LOGISTICS': { password: 'Honda@tkfant' },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': { password: 'Iskandaredu@tkfant' },
    'ISKANDAR INNOVATIONS SDN BHD': { password: 'Iskandarin@tkfant' },
    'JOYCAMP PJ SDN BHD': { password: 'Joy@tkfant' },
    'KOH TIKI OKR SDN BHD': { password: 'Koh@tkfant' },
    'KUEHNE + NAGEL': { password: 'Kuehne@tkfant' },
    'LH ELECTRIC & SERVICES': { password: 'Lh@tkfant' },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': { password: 'Lotus@tkfant' },
    'LUXE ACRE SDN BHD': { password: 'Luxe@tkfant' },
    'MACRO PERSPECTIVE SDN BHD': { password: 'Macro@tkfant' },
    'MILLENNIUM WELT SDN BHD': { password: 'Millen@tkfant' },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': { password: 'Chembong@tkfant' },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': { password: 'Sa@tkfant' },
    'PERCETAKAN TENAGA': { password: 'Pt@tkfant' },
    'PERODUA MANUFACTURING SDN BHD': { password: 'Perodua@tkfant' },
    'REDVEST': { password: 'Redvest@tkfant' },
    'SAGA MAKMUR SDN BHD': { password: 'Saga@tkfant' },
    'SEA ASIA SDN BHD': { password: 'Sea@tkfant' },
    'SIN TAI HING': { password: 'Sin@tkfant' },
    'SJK(C) HUA LIAN 3': { password: 'Hualian3@tkfant' },
    'SJK(C) KEHSENG': { password: 'Kehseng@tkfant' },
    'SK SAUJANA IMPIAN 2': { password: 'Impian2@tkfant' },
    'SMK TELOK DATOK': { password: 'Smk@tkfant' },
    'SUNSET': { password: 'Sunset@tkfant' },
    'T7 AERO REPORT': { password: 'T7@tkfant' },
    'TAYLOR (TEG)': { password: 'Taylor@tkfant' },
    'UCSI INTERNATIONAL SCHOOL SB': { password: 'Ucsi@tkfant' },
    'UPPER HERITAGE SDN BHD': { password: 'Upper@tkfant' },
    'YINGWAH': { password: 'Yingwah@tkfant' }
};

// ==================== MOBILE MENU ====================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// ==================== PAGE INITIALIZATION ====================
const companyDisplay = document.getElementById('companyDisplay');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('errorMessage');
const helpSection = document.getElementById('helpSection');
const whatsappBtn = document.getElementById('whatsappBtn');
const requestPasswordBtn = document.getElementById('requestPasswordBtn');

let attemptCount = 0;

// Get company name from localStorage
const companyName = localStorage.getItem('companyName');

if (!companyName) {
    // No company selected, redirect to home
    window.location.href = 'index.html';
} else {
    companyDisplay.textContent = companyName;
}
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1yH_2bKzrs_bvN3RWuB_T6vcAAIpBgx6eurnNowMvK10/edit';

requestPasswordBtn.addEventListener('click', () => {
    // Open Google Form in a new tab
    window.open(GOOGLE_FORM_URL, '_blank');
 });
// ==================== TOGGLE PASSWORD VISIBILITY ====================
togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        togglePassword.textContent = '👁️';
    }
});

// ==================== WHATSAPP SUPPORT ====================
whatsappBtn.addEventListener('click', () => {
    const phone = '601118769339';
    const message = `Hello, I need help accessing the service reports for ${companyName}. I'm having trouble with the password.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
});

// ==================== PASSWORD VERIFICATION ====================
passwordForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const enteredPassword = passwordInput.value.trim();
    
    if (enteredPassword === '') {
        showError('Please enter a password.');
        return;
    }
    
    // Disable submit button during verification
    submitBtn.disabled = true;
    submitBtn.textContent = 'VERIFYING...';
    
    // Simulate API call delay
    setTimeout(() => {
        const company = companyPasswords[companyName];
        
        if (!company) {
            showError('Company not found in our records.');
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT';
            return;
        }
        
        if (company.password === enteredPassword) {
            // Password correct! Redirect to date selection
            localStorage.setItem('passwordVerified', 'true');
            window.location.href = 'date-selection.html';
        } else {
            // Password incorrect
            attemptCount++;
            showError('❌ Incorrect password. Please try again.');
            passwordInput.value = '';
            
            // Show help section after first failed attempt
            if (attemptCount >= 1) {
                helpSection.style.display = 'block';
            }
            
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT';
        }
    }, 500);
});

// ==================== ERROR MESSAGE DISPLAY ====================
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Add shake animation
    passwordForm.style.animation = 'shake 0.5s';
    setTimeout(() => {
        passwordForm.style.animation = '';
    }, 500);
    
    // Hide error after 5 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}




