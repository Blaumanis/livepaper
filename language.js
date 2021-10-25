    // define language reload anchors
    var dataReload = document.querySelectorAll("[data-reload]");

    // language translations
    var language = {
        eng: {
        },

        lv: {
            home: "Sākums",
            products: "Produkti",
            aboutUs: "Par Mums",
            contacts: "Kontakti",

            mainTextA: "Latvijā ražoti papīra salmiņi",
            mainTextB: "Papīra salmiņi - zaļākai ikdienai!",
            mainTextC: "100% Ekoloģiski un bioloģiski noārdāmi",

            productHeader: "Produkti",
            short: "ĪSIE",
            shortDia: "6-8 diametrs",
            shortLen: "140mm garums",
            shortDesc: "Ideāli piemēroti dzērieniem zemās glāzēs un kokteiļiem",

            standard: "STANDARTA",
            standardDia: "6-8 diametrs",
            standardLen: "197-200mm garums ",
            standardDesc: "Piemēroti lielākajai daļai dzērienu un glāžu",

            tall: "GARIE",
            tallDia: "8-10 diametrs",
            tallLen: "230mm garums",
            tallDesc: "Garie salmiņi viss labāk noderēs smūtijiem, piena kokteiļiem un dzērieniem no garām glāzēm",

            wide: "PLATIE",
            wideDia: "12 diametrs",
            wideLen: "200 - 230mm garums",
            wideDesc: "Piemērotākie biezākiem un burbuļ dzērieniem.",

            firstProduct: "Standartā pieejami balti un melni salmiņi, taču pēc individuāla pasūtījuma var iegādāties krāsainus un apdrukātus.",
            secondProduct: "Salmiņi ražoti no celulozes, kas nozīmē, ka tie sadalās vidē, vienlaikus tiem nav nekādas piegaršas un tie neizmirkst dzērienā.",
            thirdProduct: "Salmiņus var atsevišķi iepakot gan standarta baltā iepakojumā, gan apdrukātā.",

            tableHeading: "Kādēļ LivePaper salmiņus?",
            tdOne: "Izturīgi",
            tdTwo: 'Pārstrādājami',
            tdThree: 'Bioloģiski noārdāmi',
            tdFour: 'Nesatur alergēnus',
            tdSix: 'Aktuāls tirgū',
            tdSeven: 'Pielāgojams',

            twoHeading: 'LivePaper',
            threeHeading: 'Niedru salmiņi',
            fourHeading: 'Avokado salmiņi',
            fiveHeading: ' Agaves salmiņi',
            sixHeading: 'Plastmasas un bio plastmasas salmiņi',
            sevenHeading: 'Metāla salmiņi',
            eightHeading: 'Silikona salmiņi',

            aboutUsHeading: 'Par Mums',
            firstP: 'Mūsu papīra salmiņi ir 100% ražoti ES',
            secondP: 'Visas mūsu papīru salmiņu ražošanā izmantotās izejvielas ir Eiropas izcelsmes',

            quality: 'Kvalitāte ',
            qualP: 'Ražošanā izmantojam augstas kvalitātes un sertificētus materiālus. Papīra salmiņi ir izgatavoti no FSC un PEFC sertificētiem papīriem, kas atbilst ilgtspējīgas mežsaimniecības standartiem. Ilgtspējīgi iegūti un pārtikā nekaitīgi.',
            profess: 'Profesionālisms',
            professP: 'Katrs ražošanas posms sākot ar izejmateriālu iepirkšanu līdz ražošanai, kvalitātes kontrolei un iesaiņošanai tiek veikts ar viss lielāko rūpību un profesionalitāti, lai nodrošinātu, ka jums tiek piegādāti vislabākie un higiēniskākie papīra salmiņi.',
            personal: 'Personalizēšana',
            personalP: 'Saviem klientiem mēs piedāvājam lielisku un unikālu izvēli. Salmiņus pielāgojam atbilstoši jūsu zīmola vajadzībām. Izmērs, diametrs, apdruka un iepakojums pēc jūsu velmēm.',

            missionH: 'Mūsu salmiņi - zaļākai ikdienai!',
            missionP1: 'PAPĪRA SALMIŅI UZ KURIEM TU UN MŪSU VIDE VAR PAĻAUTIES:',
            missionP2: 'Mēs ražojam 100% videi draudzīgus un pilnībā bioloģiski noārdāmus papīra salmiņus, kas ir droši dabai un okeāniem. Mūsu mērķis ir aizstāt plastmasas salmiņus ar videi draudzīgāku alternatīvu, kas neapdraud dabu, bet pilda savu funkciju tik pat labi.Uzskatām, ka nedaudz izmainot mūsu paradumus, varam padarīt daudz tīrāku vidi un gaišāku nākotni.',

            sendMsg: 'Sazinies ar mums',
            Name: 'Vārds',
            Email: 'E-pasts',
            Message: 'Ziņa',
            submit: 'Sūtīt',
            contactsH: 'Mūsu Kontakti',
            custServ: 'Klientu apkalpošana: ',
            custA: ' sales@livepaper.com',
            phone: 'Telefons ',
            phoneA: ' +371 26320424',
            address: 'Adrese: SIA “Live Paper” «Bumbieri k-2», Zaķumuiža, Ropažu nov., LV-2133',
        }

    };
// define language via window hast
    if(window.location.hash) {
        if(window.location.hash === "#lv") {
            homeNav.innerText = language.lv.home;
            productsNav.innerText = language.lv.products;
            aboutUsNav.innerText = language.lv.aboutUs;
            contactsNav.innerText = language.lv.contacts;

            mainTextA.textContent = language.lv.mainTextA;
            mainTextB.textContent = language.lv.mainTextB;
            mainTextC.textContent = language.lv.mainTextC;

            productHeader.textContent = language.lv.products;
            short.textContent = language.lv.short;
            shortDia.textContent = language.lv.shortDia;
            shortLen.textContent = language.lv.shortLen;
            shortDesc.textContent = language.lv.shortDesc;

            standard.textContent = language.lv.standard;
            standardDia.textContent = language.lv.standardDia;
            standardLen.textContent = language.lv.standardLen;
            standardDesc.textContent = language.lv.standardDesc;

            tall.textContent = language.lv.tall;
            tallDia.textContent = language.lv.tallDia;
            tallLen.textContent = language.lv.tallLen;
            tallDesc.textContent = language.lv.tallDesc;

            wide.textContent = language.lv.wide;
            wideDia.textContent = language.lv.wideDia;
            wideLen.textContent = language.lv.wideLen;
            wideDesc.textContent = language.lv.wideDesc;

            firstProduct.textContent = language.lv.firstProduct;
            secondProduct.textContent = language.lv.secondProduct;
            thirdProduct.textContent = language.lv.thirdProduct;

            tableHeading.textContent = language.lv.tableHeading;
            twoHeading.textContent = language.lv.twoHeading;
            threeHeading.textContent = language.lv.threeHeading;
            fourHeading.textContent = language.lv.fourHeading;
            fiveHeading.textContent = language.lv.fiveHeading;
            sixHeading.textContent = language.lv.sixHeading;
            sevenHeading.textContent = language.lv.sevenHeading;
            eightHeading.textContent = language.lv.eightHeading;

            tdOne.textContent = language.lv.tdOne;
            tdTwo.textContent = language.lv.tdTwo;
            tdThree.textContent = language.lv.tdThree;
            tdFour.textContent = language.lv.tdFour;
            tdSix.textContent = language.lv.tdSix;
            tdSeven.textContent = language.lv.tdSeven;

            aboutUsHeading.textContent = language.lv.aboutUsHeading;
            firstP.textContent = language.lv.firstP;
            secondP.textContent = language.lv.secondP;

            quality.textContent = language.lv.quality;
            qualP.textContent = language.lv.qualP;
            profess.textContent = language.lv.profess;
            professP.textContent = language.lv.professP;
            personal.textContent = language.lv.personal;
            personalP.textContent = language.lv.personalP;

            missionH.textContent = language.lv.missionH;
            missionP1.textContent = language.lv.missionP1;
            missionP2.textContent = language.lv.missionP2;

            sendMsg.textContent = language.lv.sendMsg;
            Name.textContent = language.lv.Name;
            Email.textContent = language.lv.Email;
            Message.textContent = language.lv.Message;
            submit.textContent = language.lv.submit;
            contactsH.textContent = language.lv.contactsH;
            custServ.innerText = language.lv.custServ;
            custA.innerText = language.lv.custA;
            phone.innerText = language.lv.phone;
            phoneA.innerText = language.lv.phoneA;
            address.textContent = language.lv.address;
        }
    }
// define language reload onclick iteration
for (i = 0; i <= dataReload.length - 1; i++) {
                dataReload[i].addEventListener('click', () => {
                    console.log('test')
                    setTimeout(function () {
                        location.reload(true);
                    }, 150) // adjust the timer that works for you (1000 = 1 second)`
                })}
