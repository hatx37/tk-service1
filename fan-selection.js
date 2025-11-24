// Google Drive report URLs for each company
// FORMAT: company -> date -> fan -> specific Google Drive file URL
// Each fan on each date has its own unique service report URL
const companyReportLinks = {
    'AFN SPORTS EQUIPMENT SDN BHD': {
        '2025-03-28': {
            'Fan 1': 'https://drive.google.com/drive/folders/1uRfh_HV3ly_JvUMurlineU8-H8Ru5gRq',
            'Fan 2': 'https://drive.google.com/drive/folders/13Bx5E8-sdQZDXOp7S_rGW8V8c6MEt-WK',
        }
    },
    'AKER SOLUTIONS': {
        '2025-08-30': {
            'Fan 1': 'https://drive.google.com/drive/folders/1F222aStI_HXgnj6O8PBQBivzjB5V8AFa',
            'Fan 2': 'https://drive.google.com/drive/folders/1-uDQQ_JqhY5J8CTiq2ikuiITVJlr_8DC',
            'Fan 3': 'https://drive.google.com/drive/folders/1tfX_kEduVSVt-ZHJg-tDQnwoaShudfK1',
            'Fan 4': 'https://drive.google.com/drive/folders/1qIC4HxIbWf88BoDFkqqSXU8mthVKaGfV',
            'Fan 5': 'https://drive.google.com/drive/folders/14LbTOfVDkr4H6vSv3nwyokdnkNtNaaqM',
        },
        '2025-08-16': {
            'Fan 1': 'https://drive.google.com/drive/folders/1WN_vnj9_st_JSm7GXcPxuuMWGK0ygNsq',
            'Fan 2': 'https://drive.google.com/drive/folders/1lAX-IvouUH2HjTIZZT9_0FUYRHeJS05f',
            'Fan 3': 'https://drive.google.com/drive/folders/1LKWzD-B7QHOzF4MDtmNIN3CXuvHTgXmB',
            'Fan 4': 'https://drive.google.com/drive/folders/1ph1CCmrLstHrgaJG0vmjrxXXqO1kphHv',
            'Fan 5': 'https://drive.google.com/drive/folders/1SipvpGLh_3oGBwSWTlKBABRGozRGxinQ',
        },
        '2025-11-16': {
            'Fan 1': 'https://drive.google.com/drive/folders/1NDSWJwiPYw9wRl-jBdxoJXSWwuGKWcra',
            'Fan 2': 'https://drive.google.com/drive/folders/1en6FSGYlh_ESrHV6DFhufsqQTtoE7O4l',
            'Fan 3': 'https://drive.google.com/drive/folders/11RcO0ibVI1n0QOtWGA9d-vTGJ5PzmRaL',
            'Fan 4': 'https://drive.google.com/drive/folders/1ARdZpEQnOTy549qEELMENftKsZ6WxFHu',
            'Fan 5': 'https://drive.google.com/drive/folders/1MlPdqc7tn-kl-0-8yHdrnkxRnZ_hXxJR',
        },
        '2024-08-24': {
            'Fan 1': 'https://drive.google.com/drive/folders/1ru7ramSqE-2X5auSbzNZXVXDafrGuf7x',
            'Fan 2': 'https://drive.google.com/drive/folders/17UHC1lTYrs_GGXMMDgbvNRb2RgClFc7T',
            'Fan 3': 'https://drive.google.com/drive/folders/172lfcJSOWkoxCSj5XbYbd7TzrKODv03M',
            'Fan 4': 'https://drive.google.com/drive/folders/10x0zdrKVqSP5_DOWiSgWC3XfzbVvCHn8',
            'Fan 5': 'https://drive.google.com/drive/folders/1Y9W6pQunGcU8nVwo9-YoO83NeFDLizh3',
        }
    },
    'ANSHIN': {
        '2025-01-07': {
            'Fan 1': 'https://drive.google.com/drive/folders/1AyGRJg1Ly4Az_DrrYt2kpIXi9woKfjyE',
            'Fan 2': 'https://drive.google.com/drive/folders/15AOmk2FvTeJ2EaeL5tq7RNk71GoQj9lY',
            'Fan 3': 'https://drive.google.com/drive/folders/13edlKJbHkS1JecLTzVCWvPiLdBS8xEDb',
        }
    },
    'ARATA AUTO CENTRE SDN BHD': {
        '2025-04-22': {
            'Fan 1': 'https://drive.google.com/drive/folders/18de7jhUFgtxLjFMt6BqVoriJmp_puQDc',
        }
    },
    'BBCC DEVELOPMENT': {
        '2025-03-27': {
            'Fan 6': 'https://drive.google.com/drive/folders/1pPVBku9Lbj2rhjqiXp7bDtLHcUMC2EJK',
        }
    },
    'CITY UNIVERSITY': {
        '2024-01-16': {
            'Fan 1': 'https://drive.google.com/drive/folders/1Iy8C-o9PK-zLBF3gBn74HKA3q_abxFbr',
        }
    },
    'CLICKASIA SDN BHD': {
        '2025-06-13': {
            'Fan 1': 'https://drive.google.com/drive/folders/1qejswm4pfKaNPDc2-kiXoOzp2Ha8q5wd',
            'Fan 2': 'https://drive.google.com/drive/folders/1_MjVr77vLsWJnN2nv0FYHXOV7DO7JjZW',
            'Fan 3': 'https://drive.google.com/drive/folders/18qrW0K31BEWF56mIxBUCVHi0QYX74pCF',
        }
    },
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT': {
        '2022-06-27': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1jLWePjP-2wNNiWqXBvxGOWpw0gYK8EiE',
        },
        '2025-05-20': {
            'Fan 1': 'https://drive.google.com/drive/folders/1KjQNBirf1_JupBTot6JGnJNkqpb8si-U',
        }     
    },
    'DHUB': {
        'Photo': {
            'Fan 1': 'https://drive.google.com/drive/folders/1_hOQXH_EOX_4Xklbh6WWorH51xbYweg4',
        }
    },
    'ECRL': {
        '2025-05-02': {
            'Fan 1': 'https://drive.google.com/drive/folders/1HQ551tl9ZEfAZfXQIrFLtq8rzX8E5EBD',
            'Fan 2': 'https://drive.google.com/drive/folders/127e4eh-GUpvL2XbmY4q1WlV0igvEA1kS',
        },
        '2025-05-05': {
            'Fan 1': 'https://drive.google.com/drive/folders/1eomrJGC-bZyBJpVx3cnq8vREZ8vurECq',
        }        
    },
    'EXHIBITION SAMPLE': {
        '2025-04-25': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1QBaKq_IS1ipGATSPng5ZY1ZwdKguIFaT',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1oZpPwBJEh68JNOlF6jMpdCaWFywGZlZh',
        },
        '2025-06-10': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1pNBI9rIoEpHDNHKRaMwjMOQd5CzIPgL1',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1ov71HmqbnOyehyeyFyGKOLzMtDR33kq4',
        }
    },
    'FEDEX-BUKIT JELUTONG': {
        'N/A': {
            'N/A': 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view',
        }
    },
    'FEDEX-HITECH': {
        '2025-04-29': {
            'Fan 1': 'https://drive.google.com/drive/folders/1iX1Zr0Xq16FM-q9LX0KGK_94xYFvGPsZ',
            'Fan 2': 'https://drive.google.com/drive/folders/1EwvaRy2Q2Og8GGeHbVRNCzVjZ3A2r_NX',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1ATHAA8H6zjfAYmu7BcDB6fiNP4sojW5Y',
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1n12r6DGO9biC37zzgjELwM9eEEBPs16u',
        },
        '2025-08-08': {
            'Fan 4': 'https://drive.google.com/drive/folders/1jZIxmOkRHK6ltSaq2V6h6G06z5ZCzChv',
        }
    },
    'FEDEX-KLIA': {
        '2025-04-16': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/116QRdN34EiKKQEneSagctsLz5fzSzlkw',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1I0bNvNimFSj6h6b8RwaHCACUezbNcBWv',
        }
    },
    'FINEGUARD INDUSTRIES': {
        '2025-07-04': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1jAH6yLVixyWmKB85R5AyEhzOjzDxweee',
        }
    },
    'FOODAGON CONNEXION SDN BHD': {
        '2025-05-12': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/13jUYFHR3T6e5e1Xsu4Q6ClTzdnZ5eTqU',
        }
    },
    'FURI GLOBAL SDN BHD': {
        '2025-09-08': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1Td4NQLrf5XyKRY7cMAvo-ikKwMyh6Jr4',
        }
    },
    'GBB BAKERY': {
        '2024-01-05': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/17lgZZAAeWN91xJm-W4tzcgkpyIa_n8vb',
        }
    },
    'GOOD TIMING FOOD VILLAGE': {
        '2025-07-30': {
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1BO9WUFbg2FhBpMm8M57ozLhx2ppbdQ9u',
        }
    },
    'HONDA LOGISTICS': {
        '2022-09-17': {
            'C6(BIGASS)': 'https://drive.google.com/drive/u/2/folders/11Wt2QTSGpDG5xuwcei_Ed0DBdb0s4YrF',
            'C7(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/11iqs16TEIajajMkha0RF8A2oWVz4DWaZ',
            'C8(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1m0Qei9YvMqHejZzIOx-PI49m-ySelbdj',
            'C9(BIGASS)': 'https://drive.google.com/drive/u/2/folders/1kjKQ4kdASkDAMQQc9GAYK8jYvHQWUGXu',
            'C11(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1yJrT4aRJoY8EW2dYFtyf_xtDRhR1szZT',
            'C14(BIGASS)': 'https://drive.google.com/drive/u/2/folders/1HAvNBrI533bUwFR73kRiiypuv9zfPuDy',
            'D15(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/16IvzTN7Zo8a2SlVWzTl52krqIUt0kDOc',
            'E15(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1zkpWj14GYnscXVLq-r8q0ciAzquRPgi5',
            'F14': 'https://drive.google.com/drive/u/2/folders/1a0nopnNiBXgO62_h1LMBa3C8s5_F9h10',
        },
        '2023-04-09': {
            'C6(9)(BIGASS)': 'https://drive.google.com/drive/u/2/folders/1sBLWxWh0E3TaeHURH7tlfJTwLvYgu0Qa',
            'C7(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1q7RQW145vHJIQK-rOdvKTZLJLa6OXxLk',
            'C8(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1jfhPQ0BGlmw2vuXAuBWz8wWBPtSZIhpV',
            'C9(BIGASS)': 'https://drive.google.com/drive/u/2/folders/1Iu7ou_kFcyQDn_XEpzMtPNfcsHp4diR5',
            'C10(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1wVYwoesGGubvmpX-hLfUMEEMvdddFcwR',
            'C11(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1XI469DWbjk3LQMwhjYymSk4u9JJutQaT',
            'C14(6)(BIGASS)': 'https://drive.google.com/drive/u/2/folders/1hesSILmWhWMTKmCe0PWF3DQk4-qIsffP',
            'D15(8)(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1kGEPi8r6qOthwVrDiE0BzBQIccGl7rMu',
            'E15(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/138ApH5SEZj82BRWdh_2HmzpIT9_y3Iyj',
            'F14(AIREGARD)': 'https://drive.google.com/drive/u/2/folders/1NSzpJMU7xbXXI-4SlJUuYqzDTdV4ylOa',
        },
        '2023-10-07': {
            'B6': 'https://drive.google.com/drive/u/2/folders/1v0705nBNgONInYtIYrevERoxGes17VWL',
            'B7': 'https://drive.google.com/drive/u/2/folders/1VYfT_vxP-CZ-s4PqesTtR4BhWMKsPz32',
            'B8': 'https://drive.google.com/drive/u/2/folders/1GvkCAm-_alsxEdQ12P7lKSSMB468FSNI',
            'B10': 'https://drive.google.com/drive/u/2/folders/1UDyxRkh3EC9wpA_0up5-g5ExHKEgwBOr',
            'C6': 'https://drive.google.com/drive/u/2/folders/1__68ATrttDox636ryP52zsPhsbJbJFhK',
            'C7': 'https://drive.google.com/drive/u/2/folders/1UB0gol_kZkHac9DBrSGijgiGqwbsOXeI',
            'C8': 'https://drive.google.com/drive/u/2/folders/1qqFZQrzSPxStSKiyLOroNh0lCFVf4qv8',
            'C9': 'https://drive.google.com/drive/u/2/folders/1z_XcssMFrAuqdeH9eQ67RXiXjo7TM34V',
            'C10': 'https://drive.google.com/drive/u/2/folders/1Hbg0qTgELGBcVk4vzEzRBDqAyFaxeadF',
            'C11': 'https://drive.google.com/drive/u/2/folders/1YSOm1XudQkKzUcEBPG7hlAV21NsLqY2c', 
            'C14': 'https://drive.google.com/drive/u/2/folders/1V5Y1qH79QkaLzGlqJ8jFqS4dz39Apl25',    
            'D15': 'https://drive.google.com/drive/u/2/folders/1WKQhCi_nYsr2Qyl96Tb2ayS0zXJgkerz',
            'E15': 'https://drive.google.com/drive/u/2/folders/1KHpOGkwq4de5-BcAs0mrgaa8PFB_t3iN',
            'F14': 'https://drive.google.com/drive/u/2/folders/1lr2rfF7RaAX-AUdMpNcvQlz76eoImRgT',
        },
         '2024-05-04': {
            'B6(Fan 1)': 'https://drive.google.com/drive/u/2/folders/1b00WKIxu9zVk_cIjZbKaLL31DCp7QIhN',
            'B7(Fan 2)': 'https://drive.google.com/drive/u/2/folders/1yl6xV4Ydaqbe9mg3s5UbP3aYBc2qfBPm',
            'B9(Fan 3)': 'https://drive.google.com/drive/u/2/folders/1PE1fpW6uEAb6WQAWr1QMpwx1v2jhg_eX',
            'B10(Fan 4)': 'https://drive.google.com/drive/u/2/folders/1TYBqDEz0kbfoUmoABrPMVYqUMbI-5Hla',
            'C6(Fan 14)': 'https://drive.google.com/drive/u/2/folders/1UTbY7IRXAz9vCED8GLDwPStNYTLllJru',
            'C7(Fan 13)': 'https://drive.google.com/drive/u/2/folders/10KPhzG-InVoffrdoJCmSoEfMm0eYeXAQ',
            'C8(Fan 12)': 'https://drive.google.com/drive/u/2/folders/1ujL1gtCtRlcJUuHjpi1tKSXcjYRwLdg7',
            'C9(Fan 11)': 'https://drive.google.com/drive/u/2/folders/1waCaDQqHaDwC6ndOl-lPIfZYOhdzf_Q7',
            'C10(Fan 10)': 'https://drive.google.com/drive/u/2/folders/1xbcxvtAQM12ggZZ6a62M71dcKmu6rDmV',
            'C11(Fan 9)': 'https://drive.google.com/drive/u/2/folders/1wBpUMewwIsP6MJbTET57YIPi_2JZzjgV', 
            'C14(Fan 8)': 'https://drive.google.com/drive/u/2/folders/1krGZjATx8-CmEZymGhGwtJF5CJZsWxoQ',    
            'D15(Fan 6)': 'https://drive.google.com/drive/u/2/folders/1wYuml4K9oIcSPDRPUBbak-b1XIB42SwJ',
            'F14(Fan 5)': 'https://drive.google.com/drive/u/2/folders/1utWH5eWSKfweQjoVqqvsgNNxoS0TGIWy',
            'F15 Keluar site(Fan 7)': 'https://drive.google.com/drive/u/2/folders/1jUo0IjF01fyKJ66OWl4QTPyXFWvRW_re',
        },
        '2024-12-07': {
            'AIREGARD(Fan 2)': 'https://drive.google.com/drive/u/2/folders/1e6kacepS8ixuKiZrfdAX5PNP_8rVYaWY',
            'AIREGARD(Fan 3)': 'https://drive.google.com/drive/u/2/folders/10ul2FkLhqy6pbCA8JExigbu1qrKxUOG_',
            'AIREGARD(Fan 5)': 'https://drive.google.com/drive/u/2/folders/1RCHBBsAksTF9ocWHCLnPRuAD0eqKnxyF',
            'AIREGARD(Fan 6)': 'https://drive.google.com/drive/u/2/folders/1pmA9kviLX8V8htqngk1Y9aNeKMO6Sfrs',
            'AIREGARD(Fan 8)': 'https://drive.google.com/drive/u/2/folders/1NeITurW94fkpapgoue2KZeVCGYX0Wsyg',
            'AIREGARD(Fan 9)': 'https://drive.google.com/drive/u/2/folders/15Q3_ZLd6UPJl43k7fCjKkz6-5cpB3Vlh',
            'AIREGARD(Fan 10)': 'https://drive.google.com/drive/u/2/folders/13gLJiToRTIy71z81NBjuZ555zhqZgY-1',
            'BIGASS(Fan 1)': 'https://drive.google.com/drive/u/2/folders/15Uq91XiYvoVjq8ZRXW6ZHShBxgJbp9Mj',
            'BIGASS(Fan 4)': 'https://drive.google.com/drive/u/2/folders/1kwKx0k2U9Cg0xMCAe4mKznLfpRxVUGFu',
            'BIGASS(Fan 7)': 'https://drive.google.com/drive/u/2/folders/1WmdtfqL1T6BIeS54y6tYn-G_ADBs83o5',
            'UHF-14(Fan 11)': 'https://drive.google.com/drive/u/2/folders/1rQaj9QpB70JsgmElb9nysJuqXJoMlgzH',
            'UHF-14(Fan 12)': 'https://drive.google.com/drive/u/2/folders/1Dp2jSGz1QtDtIU4tM01TUilJULUleDBl',
            'UHF-14(Fan 13)': 'https://drive.google.com/drive/u/2/folders/1WZEnRtHAo_hgMjgfBopvjvjdCBH_cECV',
            'UHF-14(Fan 14)': 'https://drive.google.com/drive/u/2/folders/1WKLUh4-CZlMoam5gD80wWNDZuKnRoCH9',
        }
    },
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD': {
        '2025-08-01': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1zT6D-gHg8thH-Io1NJXKBoO8JbssoUuA',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/10xtVL0YD8M7LOPaxIaYDq4uMsnJ7lc3R',
        }
    },
    'ISKANDAR INNOVATIONS SDN BHD': {
        '2024-06-25': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1QcTQtaEU3xfofWwbtalrPK-8cUtrVkM9',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1fw4yquiFGK7uh_GEUQQt9IScuQ7UX7Lv',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1XxB3JD-8HShfbiO05Mh97ED3kkZpaSCI',
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1GGJbgReljBh2rQSqcRdsNNTWxe44wYI2',
            'Fan 5': 'https://drive.google.com/drive/u/2/folders/1cVJO4LnSl-KV7OQ5gSwuELYRxb8M9RBt',
            'Fan 6': 'https://drive.google.com/drive/u/2/folders/1QyQ4tV-3E_r4RwXx0z7g38UBjGypSQVQ',
            'Fan 7': 'https://drive.google.com/drive/u/2/folders/1FFz-qQ0US-oe8GrbV2Utfeq-HqcGs__l',
            'Fan 8': 'https://drive.google.com/drive/u/2/folders/1P-x11ja4oL5m5UYL2kEeYcx8etS-U_Ig',
        }
    },
    'JOYCAMP PJ SDN BHD': {
        '2024-10-26': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1K5KqpNilE1cF8SDvK-PS10xrjyULpPum',
        }
    },
    'KOH TIKI OKR SDN BHD': {
        '2025-06-09': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1RC7cZEzPEnYf1-v6Ajoe6do-pXyIf3MA',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1bDatFzCUcVl2TSyN5Z28Y4_MB5EUNaTY',
        }
    },
    'KUEHNE + NAGEL': {
        '2023-12-19': {
            'Fan 1(Site A)': 'https://drive.google.com/drive/u/2/folders/1chgF5ohyS8PuqxOhIOJWiSMEh3N7N-sg',
            'Fan 2(Site A)': 'https://drive.google.com/drive/u/2/folders/1nsuj0K7UXR-Be34woxi2gSbUHvUyDv8z',
            'Fan 3(Site A)': 'https://drive.google.com/drive/u/2/folders/1PvD5sySSu3S9fxJUNT2qLlgqLvfiFKu-',
            'Fan 4(Site A)': 'https://drive.google.com/drive/u/2/folders/1btUFIIoYwju9lD2wPGoLXVkxmQBjGcx5',
            'Fan 5(Site B)': 'https://drive.google.com/drive/u/2/folders/1HQYdQvu4E09nyqoqwPvqyJ4ibLrIVuLK',
            'Fan 6(Site B)': 'https://drive.google.com/drive/u/2/folders/110PvPtSTdY6RFHL8Ul--Fs3fvpCrlRBw',
            'Fan 7(Site B)': 'https://drive.google.com/drive/u/2/folders/1CYJSNrb7NXZ3yCMX1ylBUGsgtJlU0add',
            'Fan 8(D16/D18)': 'https://drive.google.com/drive/u/2/folders/1MtbwLcmKvYgPD7T3llNWMG0WYSfTrIkq',
            'Fan 9(D16/D18)': 'https://drive.google.com/drive/u/2/folders/18PuJpHVVN8AFWzT41ji4aLyNZlu0tKfH',
            'Fan 10(D16/D18)': 'https://drive.google.com/drive/u/2/folders/1Pa-u3r28xZ6z6E9aL7i1GOnPM7mjCM-h',
        }
    },
    'LH ELECTRIC & SERVICES': {
        '2025-04-25': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1ymz8qNbOqRwss5YT5IGumrj8It0LigZk',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1lENUSjrcosXHUGvOK9T0uz_im7XnC1-U',
        }
    },
    'LOTUS\'S STORE (MALAYSIA) SDN BHD': {
        '2025-02-12': {
            'G1': 'https://drive.google.com/drive/u/2/folders/1vy4Odqq9Npy9pRiW8YHuUmNmBVTO0jMb',
            'G2': 'https://drive.google.com/drive/u/2/folders/1muGIalVsCFK4_d_0wKUKztKPqK_d8cDl',
            'G3': 'https://drive.google.com/drive/u/2/folders/1LEqZnOYiPSbEW5q70WTVCS3bHUvCAg4G',
            'G4': 'https://drive.google.com/drive/u/2/folders/1L5o8qWOAnF3QHA8_bdYyZXTf_CnvHFx5',
            'G5': 'https://drive.google.com/drive/u/2/folders/1LGSbBvr9To19RP_S8TNT2qsjfe7pVWDd',
            'G6': 'https://drive.google.com/drive/u/2/folders/1HF8cHlMixRRBXCW9-m0vixNlW235fBZw',
            'G8': 'https://drive.google.com/drive/u/2/folders/19E76m-Cay-KxV7XTKf4IpxHVgzlMmS5m',
            'G9': 'https://drive.google.com/drive/u/2/folders/1T4U-IDTCHserMt8N9qFELAjH9z5fGsW2',
            'G10': 'https://drive.google.com/drive/u/2/folders/1bwlVKnQZVHDgQXQ_j2w128JSt904aFrD',
            'G11': 'https://drive.google.com/drive/u/2/folders/1OYw-BDs8GZHMT-92_u7ieW0tKl1mBCvW',
            'G12': 'https://drive.google.com/drive/u/2/folders/1gidgmfxzxlvkfaLO1qqNaM5cq6bEogVI',
            'G14': 'https://drive.google.com/drive/u/2/folders/18x2xq_Z6_Nib5NsHBwnLwnQw7Q3-q5V8',
            'G16': 'https://drive.google.com/drive/u/2/folders/1dnybZjSiZ-qbH-bdkPgQbCMfT_U7ilxm',
            'G17': 'https://drive.google.com/drive/u/2/folders/1l7YbAwYFWeDYvQQEGcppS66GgQZisQnN',
            'G18': 'https://drive.google.com/drive/u/2/folders/1bInjAzQuulDZAM9h0eGvMSkp3_EEO_k7',
        }
    },
    'LUXE ACRE SDN BHD': {
        '2025-03-07': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1PdwfAfzXGWHYa9ZS9LePRX83Vd6gKNLz',
        }
    },
    'MACRO PERSPECTIVE SDN BHD': {
        '2025-05-14': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1bhiUM7FXqbrSx4l3dUB4ZuwVPQ1mxcZF',
        }
    },
    'MILLENNIUM WELT SDN BHD': {
        '2025-02-05': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1Te-qaR4QkYkXLFAOdCf_tsfyu-dpv975',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/11Va0bjQ5Ovu2bAWO-kK2L2rj_ipSIfzJ',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/17esKHYEgd3s14P5WZFMWmcL2B7IcFBG7',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)': {
        '2024-08-30': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1-NccdogFri1SzhAUyq55GTH77s9uVx-y',
        }
    },
    'NESTLE MANUFACTURING (M) SDN BHD (SA)': {
        '2025-04-04': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1dE7LWXD6xXXqJ_AuFOHJhQftzcz64R1g',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1Hu8fM9kFeDaYVj7sAqm4JwqwdtcaZmqD',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1n31rdeKUYjBtaybIyCxkkFozyOkiBLem',
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1lwPrCFkEWFH1kbCrq1W4o_9rOrV_mruE',
            'Fan 5': 'https://drive.google.com/drive/u/2/folders/1xAOTMPPoE5Q4IZ7r7u-HL2JpglXQBhO7',
            'Fan 6': 'https://drive.google.com/drive/u/2/folders/1dkMKjj4acIrdLX0Zaz0rIEJzYfTs_K14',
        }
    },
    'PERCETAKAN TENAGA': {
        '2025-03-22': {
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/15PerhBrwpX7TNrN5grmlXe_A1o4fmd4p',
        }
    },
    'PERODUA MANUFACTURING SDN BHD': {
        '2023-10-28': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1J1YEPxxwMo6JVE5BUm2wyrM28iF20wdc',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1k5ySPiUYrl6efSjy-y5ovWt81SR-F00W',
        },
        '2025-08-16': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1Z4iEWHT6xQnKYJlLnpalqsajqsAhN0U1',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1ydO5-CKsPV7TdAOj5qSW_MZo-O0sDWlt',
        }
    },
    'REDVEST': {
        '2025-06-17': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1cEL1F8OS317vvuiJvl1edWYAtDQ0YmBY',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1dPRUAnjGP0jc049ZTAYL3cjdYYSaE5gp',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1-P2NuN3H17E0AWn4ZOTg83QnkZDa04sK',
        }
    },
    'SAGA MAKMUR SDN BHD': {
        '2025-02-09': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/13c-tAatekrkC1jjRqQdDznRAo_cxUdB-',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1d7FpPHhoeb2-lnGGHbVIeFoy9Iirr50z',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1HvTn0eUjlubTWzOcxCfxf1tNra8_10WF',
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1stc4UfGw4fJVviV5faeIwiB1a5LzNKP2',
            'Fan 5': 'https://drive.google.com/drive/u/2/folders/1J20RIjeLRwxaJKUwk_uBZdXw2UZCLeqZ',
        },
        '2025-03-25': {
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1xv5YOJaDBXQ_EA--euY3ylbPGFjfK_9l',
        },
         '2025-04-09': {
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1g6gnxOoGZ4VrA2sVXO3E0eexh6IT4iQ0',
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/11P-Hf4qzFT3tedSbHIT_bVmatUUHUxpW',
        }
    },
    'SEA ASIA SDN BHD': {
        '2024-07-24': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1-hSr2wSu7khC9ATK9qma9oBkai-zTKEA',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1yUXYi_ADjXOIStrYAkKs-lwvxUiMTTxX',
            'Fan 3': 'https://drive.google.com/drive/u/2/folders/1jqRZ8pVpuIFwgGq_9iGpqhUHFLFQhOdb',
        }
    },
    'SIN TAI HING': {
        '2023-12-15': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1VHtaIuGPgl8FnGoXxMvhu8p2R1nbddJw',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1ybmrSRIqOnawZS7UsQvf1Ptf8g-V1xbA',
        },
        '2025-10-03': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1pFC5zfQtXoiNr5Uy0V1YZ6rmOr2v1tsJ',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1lB8z42XgiXT1qCxC8UhHfb3RQeBLOa2n', 
        }
    },
    'SJK(C) HUA LIAN 3': {
        '2024-04-06': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1HLMmhO737bmdx3AQ-lmuV_qkOfjNNO8y',
        },
        '2025-03-20': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1kqswoPbsWFcvP8rsPlbGTpE0ype97OWZ',
        }
    },
    'SJK(C) KEHSENG': {
        '2024-10-08': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1U_wr2fsS14J_U7o6BGcQluVbAehK8fur',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1sWaMYksciKi1ZJiDkCKvqf2KY4Tec7Ws',
        }
    },
    'SK SAUJANA IMPIAN 2': {
        '2025-02-20': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/13xLP9FONUQYaeZcyjukHXrbSDy-fT-8C',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1gIQbNrRqMFpiy-03ftLeu4rA8WAdGyFb',
        }
    },
    'SMK TELOK DATOK': {
        '2025-05-22': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1MXUyDlu0rGHag3azw-cejPd_HQ54P_OA',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1UdgoDid1qSpGkzbMWJGpmXaHsUnz780v',
        }
    },
    'SUNSET': {
        '2025-06-17': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1IEmK3P5KA0C1FWc-yqkzZ6pZK6V-jcU-',
        }
    },
    'T7 AERO REPORT': {
        '2024-01-17': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1Xd4LGdw7pWBsVRHhI1mDx4bktdPc3FHO',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1PsKubdEvQGlhyuFCBitXhNfbQDnzX4Ud',
        }
    },
    'TAYLOR (TEG)': {
        '2025-10-18': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1LnuOsscpjosRHIX2M1GGudifZv8lvFoQ',
            'Fan 2': 'https://drive.google.com/drive/u/2/folders/1bSGjP2Cg_ttY7sf5UlDmOH9QzORdzMvf',
        }
    },
    'UCSI INTERNATIONAL SCHOOL SB': {
        '2025-08-06': {
            'Fan 4': 'https://drive.google.com/drive/u/2/folders/1f8YnvSTLbyim9pcdv4LqrqCW9o8Flh-l',
        }
    },
    'UPPER HERITAGE SDN BHD': {
        '2025-07-25': {
            'Fan 1': 'https://drive.google.com/drive/u/2/folders/1fEEStmL9l-re8yXoe4ekW0QURSC58vkW',
        }
    }
};

// ==================== FORMAT DATE ====================
function formatDate(dateString) {
    if (!dateString || dateString === "N/A") return "N/A";
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// ==================== WHATSAPP SUPPORT ====================
function openWhatsApp() {
    const whatsappNumber = '60111876933';
    const message = 'Hello, I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// ==================== BACK BUTTON ====================
function goBack() {
    window.location.href = 'date-selection.html';
}

// ==================== OPEN SPECIFIC REPORT ====================
function viewReport(fanName) {
    const companyName = localStorage.getItem('companyName');
    const selectedDate = localStorage.getItem('selectedServiceDate');

    if (!companyName || !selectedDate) {
        alert('Missing information. Please start over.');
        window.location.href = 'index.html';
        return;
    }

    // 🔥 Use EXACT name (NO uppercase)
    const companyReports = companyReportLinks[companyName];

    if (!companyReports) {
        alert('No reports found for this company.');
        return;
    }

    const dateReports = companyReports[selectedDate];
    if (!dateReports) {
        alert(`No reports found for ${formatDate(selectedDate)}.`);
        return;
    }

    const reportUrl = dateReports[fanName];

    if (!reportUrl) {
        alert(`No report found for ${fanName} on ${formatDate(selectedDate)}.`);
        return;
    }

    window.open(reportUrl, '_blank');

    console.log(`Opening report:
Company: ${companyName}
Date: ${selectedDate}
Fan: ${fanName}
URL: ${reportUrl}`);
}

// ==================== INITIALIZE PAGE ====================
window.addEventListener('DOMContentLoaded', function() {

    const companyName = localStorage.getItem('companyName');
    const selectedDate = localStorage.getItem('selectedServiceDate');
    const fansServicedData = localStorage.getItem('fansServiced');

    const companyDisplay = document.getElementById('companyDisplay');
    const dateDisplay = document.getElementById('dateDisplay');
    const fanGridEl = document.getElementById('fanGrid');

    if (!companyName || !selectedDate || !fansServicedData) {
        alert('Missing required information. Redirecting to start...');
        window.location.href = 'index.html';
        return;
    }

    // Parse fans list
    let fansServiced;
    try {
        fansServiced = JSON.parse(fansServicedData);
    } catch (e) {
        alert('Error loading fan data. Please try again.');
        window.location.href = 'date-selection.html';
        return;
    }

    // Display titles
    companyDisplay.textContent = companyName;
    dateDisplay.textContent = formatDate(selectedDate);

    // Create fan buttons
    if (fansServiced && fansServiced.length > 0) {
        fanGridEl.innerHTML = '';

        fansServiced.forEach(fanName => {
            const fanBtn = document.createElement('button');
            fanBtn.className = 'fan-btn';
            fanBtn.onclick = () => viewReport(fanName);

            fanBtn.innerHTML = `
                <div class="fan-name">${fanName}</div>
                <div class="fan-action">View Report →</div>
            `;

            fanGridEl.appendChild(fanBtn);
        });
    } else {
        fanGridEl.innerHTML = '<p class="no-fans">No fans serviced on this date</p>';
    }
});







