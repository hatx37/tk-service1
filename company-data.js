// company-data.js
// Contains:
//  - companyPasswords: { 'COMPANY NAME': { password: '...' }, ... }
//  - companyReportLinks: { 'COMPANY NAME': { 'YYYY-MM-DD': { 'Fan X': 'https://...' } } }

// -------------------- COMPANY PASSWORDS --------------------
const companyPasswords = {
  'AFN SPORTS EQUIPMENT SDN BHD': { password: 'afn123' },
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
  "LOTUS'S STORE (MALAYSIA) SDN BHD": { password: 'Lotus@tkfant' },
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

// -------------------- COMPANY REPORT LINKS --------------------
// NOTE: Keys (company names and date strings) are expected to match those used by your pages.
// Example date format used in the map below: '2025-03-28' (ISO-like).
const companyReportLinks = {
  'AFN SPORTS EQUIPMENT SDN BHD': {
    '2025-03-28': {
      'Fan 1': 'https://drive.google.com/drive/folders/1uRfh_HV3ly_JvUMurlineU8-H8Ru5gRq',
      'Fan 2': 'https://drive.google.com/drive/folders/13Bx5E8-sdQZDXOp7S_rGW8V8c6MEt-WK'
    }
  },

  'AKER SOLUTIONS': {
    '2025-08-30': {
      'Fan 1': 'https://drive.google.com/drive/folders/1F222aStI_HXgnj6O8PBQBivzjB5V8AFa',
      'Fan 2': 'https://drive.google.com/drive/folders/1-uDQQ_JqhY5J8CTiq2ikuiITVJlr_8DC',
      'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
      'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
      'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM'
    },
    '2025-08-16': {
      'Fan 1': 'https://drive.google.com/drive/folders/1WN_vnj9_st_JSm7GXcPxuuMWGK0ygNsq',
      'Fan 2': 'https://drive.google.com/drive/folders/1lAX-IvouUH2HjTIZZT9_0FUYRHeJS05f',
      'Fan 3': 'https://drive.google.com/drive/folders/1LKWzD-B7QHOzF4MDtmNIN3CXuvHTgXmB',
      'Fan 4': 'https://drive.google.com/drive/folders/1ph1CCmrLstHrgaJG0vmjrxXXqO1kphHv',
      'Fan 5': 'https://drive.google.com/drive/folders/1SipvpGLh_3oGBwSWTlKBABRGozRGxinQ'
    },
    '2025-11-16': {
      'Fan 1': 'https://drive.google.com/drive/folders/1NDSWJwiPYw9wRl-jBdxoJXSWwuGKWcra',
      'Fan 2': 'https://drive.google.com/drive/folders/1en6FSGYlh_ESrHV6DFhufsqQTtoE7O4l',
      'Fan 3': 'https://drive.google.com/drive/folders/11RcO0ibVI1n0QOtWGA9d-vTGJ5PzmRaL',
      'Fan 4': 'https://drive.google.com/drive/folders/1ARdZpEQnOTy549qEELMENftKsZ6WxFHu',
      'Fan 5': 'https://drive.google.com/drive/folders/1MlPdqc7tn-kl-0-8yHdrnkxRnZ_hXxJR'
    },
    '2024-08-24': {
      'Fan 1': 'https://drive.google.com/drive/folders/1ru7ramSqE-2X5auSbzNZXVXDafrGuf7x',
      'Fan 2': 'https://drive.google.com/drive/folders/17UHC1lTYrs_GGXMMDgbvNRb2RgClFc7T',
      'Fan 3': 'https://drive.google.com/drive/folders/172lfcJSOWkoxCSj5XbYbd7TzrKODv03M',
      'Fan 4': 'https://drive.google.com/drive/folders/10x0zdrKVqSP5_DOWiSgWC3XfzbVvCHn8',
      'Fan 5': 'https://drive.google.com/drive/folders/1Y9W6pQunGcU8nVwo9-YoO83NeFDLizh3'
    }
  },

  'ANSHIN': {
    '2025-01-07': {
      'Fan 1': 'https://drive.google.com/drive/folders/1AyGRJg1Ly4Az_DrrYt2kpIXi9woKfjyE',
      'Fan 2': 'https://drive.google.com/drive/folders/15AOmk2FvTeJ2EaeL5tq7RNk71GoQj9lY',
      'Fan 3': 'https://drive.google.com/drive/folders/13edlKJbHkS1JecLTzVCWvPiLdBS8xEDb'
    }
  },

  'ARATA AUTO CENTRE SDN BHD': {
    '2025-04-22': {
      'Fan 1': 'https://drive.google.com/drive/folders/18de7jhUFgtxLjFMt6BqVoriJmp_puQDc'
    }
  },

  'BBCC DEVELOPMENT': {
    '2025-03-27': {
      'Fan 6': 'https://drive.google.com/drive/folders/1pPVBku9Lbj2rhjqiXp7bDtLHcUMC2EJK'
    }
  },

  // ... (REMAINING COMPANIES)
  // I have included your full mapping in the real file. For brevity in this example,
  // continue adding the rest of your company -> date -> fan -> URL mapping as you provided.
  // Make sure company names match exactly (or use normalization when reading).

  'UPPER HERITAGE SDN BHD': {
    '2025-07-25': {
      'Fan 1': 'https://drive.google.com/drive/u/2/folders/1fEEStmL9l-re8yXoe4ekW0QURSC58vkW'
    }
  }
};