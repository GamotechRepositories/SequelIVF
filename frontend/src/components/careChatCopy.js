export const LOOKING_FOR = [
  { id: 'ivf', en: 'IVF', mr: 'IVF', service: 'IVF (In Vitro Fertilization)' },
  { id: 'iui', en: 'IUI', mr: 'IUI', service: 'IUI (Intrauterine Insemination)' },
  { id: 'male', en: 'Male Fertility', mr: 'Male Fertility', service: 'Male Infertility & Andrology Care' },
  { id: 'testing', en: 'Fertility Testing', mr: 'Fertility Testing', service: 'Initial Fertility Consultation & Assessment' },
  { id: 'appointment', en: 'Appointment', mr: 'Appointment', service: 'Doctor Consultation & Guidance' },
  { id: 'followup', en: 'Follow Up', mr: 'Follow Up', service: 'Follow Up Consultation' },
]

export const FLOW_START = {
  ivf: 'ivf-intro',
  iui: 'iui-intro',
  male: 'male-intro',
  testing: 'test-intro',
  followup: 'fu-intro',
}

const option = (id, en, mr, next) => ({ id, en, mr, next })

export const NODES = {
  'ivf-intro': {
    en: 'IVF is when the egg and sperm meet in our lab, and a selected embryo is placed in the uterus. Where are you in this just now?',
    mr: 'IVF मध्ये अंडी आणि शुक्राणू आमच्या प्रयोगशाळेत भेटतात, आणि निवडलेला गर्भ गर्भाशयात ठेवला जातो. तुम्ही आत्ता कुठे आहात?',
    options: [
      option('first', 'This is our first time looking at IVF', 'आम्ही पहिल्यांदा IVF बघत आहोत', 'ivf-trying'),
      option('past', "We've already tried some treatment", 'आम्ही आधी उपचार करून पाहिले आहेत', 'ivf-past'),
      option('how', 'Just tell me how a cycle works', 'सायकल कशी चालते ते सांगा', 'ivf-cycle'),
    ],
  },
  'ivf-trying': {
    en: 'That is a good place to start. Roughly how long have you been trying to conceive?',
    mr: 'इथून सुरू करणे चांगले. अंदाजे किती काळापासून प्रयत्न चालू आहेत?',
    options: [
      option('under', 'Under a year', 'एक वर्षापेक्षा कमी', 'ivf-early'),
      option('mid', 'About 1 to 3 years', 'सुमारे १ ते ३ वर्षे', 'ivf-tests'),
      option('long', 'More than 3 years now', 'आता ३ वर्षांपेक्षा जास्त', 'ivf-long'),
    ],
  },
  'ivf-early': {
    en: 'Under a year is still early for many couples. A visit still helps if periods are irregular, there is a known condition, or you want a clear plan. What brought you to IVF this soon?',
    mr: 'एक वर्षापेक्षा कमी अनेक जोडप्यांसाठी अजून लवकर असते. पाळी अनियमित असेल, आधीची तक्रार असेल, किंवा स्पष्ट योजना हवी असेल, तर भेट उपयोगी पडते. इतक्या लवकर IVF का बघत आहात?',
    options: [
      option('irregular', 'Periods are irregular', 'पाळी अनियमित आहे', 'ivf-irregular'),
      option('known', 'We already know of a condition', 'आधीच एक तक्रार माहित आहे', 'ivf-known'),
      option('plan', 'We just want a clear plan', 'फक्त स्पष्ट योजना हवी आहे', 'ivf-plan-early'),
    ],
  },
  'ivf-irregular': {
    en: 'Irregular cycles often need a scan and hormone tests before anyone talks about IVF. Do you already track the first day of the period?',
    mr: 'अनियमित पाळीसाठी IVF बोलण्याआधी अनेकदा सोनोग्राफी आणि हार्मोन तपासणी लागते. पाळीचा पहिला दिवस नोंद करता का?',
    options: [
      option('yes', 'Yes, we track it', 'हो, आम्ही नोंद करतो', 'ivf-irregular-track'),
      option('no', 'Not really', 'फारसे नाही', 'ivf-irregular-track'),
      option('tablets', 'She is already on cycle tablets', 'तिच्या गोळ्या चालू आहेत', 'ivf-meds-how'),
    ],
  },
  'ivf-irregular-track': {
    en: 'That note helps the doctor time a scan. For irregular cycles the first look is usually ultrasound plus AMH, FSH, TSH, and prolactin — not an IVF cycle on day one. Have any of those been done?',
    mr: 'ही नोंद डॉक्टरांना स्कॅनची वेळ ठरवण्यासाठी मदत करते. अनियमित पाळीसाठी पहिली पाहणी सहसा सोनोग्राफी आणि AMH, FSH, TSH, prolactin असते — पहिल्या दिवशी IVF सायकल नाही. यातली काही तपासणी झाली आहे का?',
    options: [
      option('none', 'None of those yet', 'यापैकी काही नाही', 'ivf-tests-none'),
      option('some', 'Some blood tests or a scan', 'काही रक्त तपासणी किंवा स्कॅन', 'ivf-which-tests'),
      option('enough', "That's enough on this", 'यावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-known': {
    en: 'Then IVF is discussed only after that condition is clear on paper. Which of these is closest?',
    mr: 'मग ती तक्रार कागदावर स्पष्ट झाल्यावरच IVF बोलला जातो. यापैकी काय जवळ आहे?',
    options: [
      option('pcos', 'PCOS or ovulation trouble', 'PCOS किंवा अंडमोचनाची अडचण', 'ivf-pcos'),
      option('tubes', 'Something about the tubes', 'नळ्यांबद्दल काही', 'ivf-tubes'),
      option('endo', 'Endometriosis or pelvic pain', 'एंडोमेट्रिओसिस किंवा पेल्विक वेदना', 'ivf-endo'),
    ],
  },
  'ivf-pcos': {
    en: 'PCOS is often first managed with cycle control and timed treatment. IVF comes later if that path is not enough. Has ovulation treatment already been tried?',
    mr: 'PCOS साठी आधी पाळी नियंत्रित करणे आणि वेळेवरचा उपचार बघितला जातो. तो मार्ग पुरेसा नसेल तर IVF येतो. अंडमोचनाचा उपचार आधी झाला आहे का?',
    options: [
      option('yes', 'Yes, tablets or injections', 'हो, गोळ्या किंवा इंजेक्शन', 'ivf-meds-how'),
      option('no', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('unsure', "We're not sure what was given", 'काय दिले ते खात्री नाही', 'ivf-papers'),
    ],
  },
  'ivf-tubes': {
    en: 'If a tube is blocked, IUI usually cannot help, and IVF is often the path that is discussed. Has a tube test such as HSG already been done?',
    mr: 'नळी बंद असेल तर IUI सहसा मदत करत नाही, आणि IVF बोलला जातो. HSG सारखी नळ्यांची तपासणी झाली आहे का?',
    options: [
      option('yes', 'Yes, a tube test was done', 'हो, नळ्यांची तपासणी झाली', 'ivf-tubes-result'),
      option('no', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('surgery', 'There was pelvic surgery', 'पेल्विक शस्त्रक्रिया झाली होती', 'ivf-surgery'),
    ],
  },
  'ivf-tubes-result': {
    en: 'The doctor reads that film with you. One blocked tube is not always the same plan as both blocked. Do you remember what you were told?',
    mr: 'डॉक्टर तो अहवाल तुमच्यासोबत वाचतात. एक नळी बंद असणे आणि दोन्ही बंद असणे एकच योजना नसते. काय सांगितले होते ते आठवते का?',
    options: [
      option('one', 'One tube was a problem', 'एक नळी अडचणीची होती', 'ivf-why'),
      option('both', 'Both tubes were a problem', 'दोन्ही नळ्या अडचणीच्या होत्या', 'ivf-why'),
      option('unsure', 'We are not sure of the wording', 'शब्द खात्री नाही', 'ivf-papers'),
    ],
  },
  'ivf-endo': {
    en: 'Endometriosis is assessed with history, scan, and sometimes surgery notes. IVF is one option after that review, not an automatic first step. Do you have those notes?',
    mr: 'एंडोमेट्रिओसिस इतिहास, स्कॅन आणि कधी शस्त्रक्रियेच्या नोंदींवर बघितले जाते. त्या पुनरावलोकनानंतर IVF एक पर्याय असतो, आपोआप पहिली पायरी नाही. त्या नोंदी आहेत का?',
    options: [
      option('yes', 'Yes, we have reports or surgery notes', 'हो, अहवाल किंवा शस्त्रक्रिया नोंदी आहेत', 'ivf-papers'),
      option('pain', 'Pain is the main issue right now', 'आत्ता वेदना मुख्य अडचण आहे', 'ivf-pain'),
      option('no', 'No papers yet', 'अजून कागद नाहीत', 'ivf-tests-none'),
    ],
  },
  'ivf-pain': {
    en: 'Severe pain needs a doctor, not a chat plan. The visit can look at pain and fertility together. Is the pain during periods, all month, or after intercourse?',
    mr: 'तीव्र वेदनेसाठी डॉक्टर लागतात, चॅटची योजना नाही. भेटीत वेदना आणि फर्टिलिटी एकत्र बघता येते. वेदना पाळीत, महिनाभर, की संबंधानंतर?',
    options: [
      option('period', 'Mostly with periods', 'मुख्यतः पाळीत', 'ivf-visit'),
      option('always', 'Most days of the month', 'महिन्यातील बहुतेक दिवस', 'ivf-visit'),
      option('enough', "That's enough on this", 'यावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-plan-early': {
    en: 'A clear plan usually starts with tests, not with booking an IVF cycle. That first set is often a scan, hormones, and a semen analysis. Have any of those been done?',
    mr: 'स्पष्ट योजना IVF सायकल बुक करून नव्हे, तपासण्यांनी सुरू होते. पहिला संच अनेकदा स्कॅन, हार्मोन आणि सिमेन विश्लेषण असतो. यापैकी काही झाले आहे का?',
    options: [
      option('none', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('some', 'Some of them', 'काही झाल्या आहेत', 'ivf-which-tests'),
      option('both', 'Both of us already did tests', 'दोघांच्या तपासण्या झाल्या आहेत', 'ivf-both-tests'),
    ],
  },
  'ivf-tests': {
    en: 'After 1 to 3 years, tests usually come first. Have fertility tests already been done?',
    mr: '१ ते ३ वर्षांनंतर सहसा तपासण्या आधी येतात. फर्टिलिटी तपासण्या आधी झाल्या आहेत का?',
    options: [
      option('none', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('some', 'Yes, for one or both of us', 'हो, एकासाठी किंवा दोघांसाठी', 'ivf-which-tests'),
      option('told', 'A doctor already asked us to consider IVF', 'डॉक्टरांनी आधीच IVF सुचवले आहे', 'ivf-why'),
    ],
  },
  'ivf-long': {
    en: 'After more than 3 years the doctor usually wants the full file in one place. Have you already seen a fertility specialist, or only done some tests?',
    mr: '३ वर्षांनंतर डॉक्टर सहसा पूर्ण फाइल एकत्र बघतात. फर्टिलिटी तज्ज्ञ भेटला आहे, की फक्त काही तपासण्या झाल्या आहेत?',
    options: [
      option('tests', 'Only some tests so far', 'आत्तापर्यंत फक्त काही तपासण्या', 'ivf-which-tests'),
      option('specialist', 'We already saw a specialist', 'तज्ज्ञ आधी भेटला आहे', 'ivf-why'),
      option('none', 'Nothing formal yet', 'अजून काही औपचारिक नाही', 'ivf-tests-none'),
    ],
  },
  'ivf-which-tests': {
    en: 'Good — then the next visit is a reading of what you already have. Which reports are with you?',
    mr: 'चांगले — मग पुढची भेट म्हणजे जे आहे ते वाचणे. कोणते अहवाल तुमच्याकडे आहेत?',
    options: [
      option('her', 'Blood tests or a scan for her', 'तिच्या रक्त तपासण्या किंवा स्कॅन', 'ivf-amh'),
      option('him', 'A semen report', 'सिमेन अहवाल', 'ivf-semen-have'),
      option('both', 'Reports for both of us', 'दोघांचे अहवाल', 'ivf-both-tests'),
    ],
  },
  'ivf-amh': {
    en: 'AMH and a scan speak to egg reserve and the uterus, but they do not start IVF by themselves. Was a semen test also done?',
    mr: 'AMH आणि स्कॅन अंड्यांचा साठा आणि गर्भाशय सांगतात, पण त्यांनी IVF सुरू होत नाही. सिमेन तपासणी सुद्धा झाली का?',
    options: [
      option('yes', 'Yes, we have a semen report too', 'हो, सिमेन अहवाल सुद्धा आहे', 'ivf-both-tests'),
      option('no', 'Not yet for him', 'त्याच्यासाठी अजून नाही', 'ivf-tests-none'),
      option('visit', 'How is this read at the visit?', 'भेटीत हे कसे वाचले जाते?', 'ivf-visit'),
    ],
  },
  'ivf-semen-have': {
    en: 'One semen report is a start, not the whole couple’s file. Was her scan or hormone test also done?',
    mr: 'एक सिमेन अहवाल सुरुवात आहे, जोडप्याची पूर्ण फाइल नाही. तिची सोनोग्राफी किंवा हार्मोन तपासणी सुद्धा झाली का?',
    options: [
      option('yes', 'Yes, some tests for her too', 'हो, तिच्याही काही तपासण्या', 'ivf-both-tests'),
      option('no', 'Not yet for her', 'तिच्यासाठी अजून नाही', 'ivf-tests-none'),
      option('low', 'The semen report was called low', 'सिमेन अहवाल कमी म्हटला होता', 'ivf-icsi'),
    ],
  },
  'ivf-both-tests': {
    en: 'Bring every paper, even older ones. The doctor compares them and writes only what is still missing. IVF still does not start the same day. What is the next thing you want explained?',
    mr: 'जुने असले तरी सगळे कागद आणा. डॉक्टर तुलना करून फक्त उरलेले लिहितात. IVF त्याच दिवशी सुरू होत नाही. पुढे काय समजावू?',
    options: [
      option('why', 'Why IVF was suggested from those reports', 'त्या अहवालांवरून IVF का सुचवले', 'ivf-why'),
      option('cycle', 'How an IVF cycle would run', 'IVF सायकल कशी चालेल', 'ivf-cycle'),
      option('visit', 'What that review visit includes', 'त्या पुनरावलोकन भेटीत काय असते', 'ivf-visit'),
    ],
  },
  'ivf-papers': {
    en: 'If the wording is unclear, bring the original reports rather than remembering from memory. Photos on the phone are fine. What do you have in hand?',
    mr: 'शब्द स्पष्ट नसतील तर आठवणीपेक्षा मूळ अहवाल आणा. फोनवरील फोटो चालतात. हातात काय आहे?',
    options: [
      option('some', 'Some reports, but not all', 'काही अहवाल, सगळे नाही', 'ivf-which-tests'),
      option('visit', 'Tell me what to carry', 'काय आणावे ते सांगा', 'ivf-visit'),
      option('enough', "That's enough on papers", 'कागदांवर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-surgery': {
    en: 'Surgery notes tell the doctor about the pelvis and the tubes. Bring the discharge summary if you have it. Was the surgery for cysts, fibroids, or something else?',
    mr: 'शस्त्रक्रियेच्या नोंदी पेल्विस आणि नळ्या सांगतात. डिस्चार्ज समरी असेल तर आणा. शस्त्रक्रिया सिस्ट, फायब्रॉइड, की दुसऱ्यासाठी होती?',
    options: [
      option('cyst', 'Ovarian cyst or endometriosis surgery', 'अंडाशयाची सिस्ट किंवा एंडोमेट्रिओसिस', 'ivf-endo'),
      option('tubes', 'It was related to the tubes', 'नळ्यांशी संबंधित होती', 'ivf-tubes'),
      option('unsure', "We're not sure of the name", 'नाव खात्री नाही', 'ivf-papers'),
    ],
  },
  'ivf-tests-none': {
    en: 'That is fine. The first visit looks at your history and plans only the tests you need — often a scan, hormone tests, and a semen analysis. What should I explain about that first step?',
    mr: 'ठीक आहे. पहिल्या भेटीत इतिहास बघितला जातो आणि फक्त गरजेच्या तपासण्या ठरतात — अनेकदा सोनोग्राफी, हार्मोन तपासणी आणि सिमेन विश्लेषण. त्या पहिल्या पायरीबद्दल काय सांगू?',
    options: [
      option('visit', 'What happens in that first visit', 'त्या पहिल्या भेटीत काय होते', 'ivf-visit'),
      option('order', 'Which test is usually done first', 'कोणती तपासणी सहसा आधी होते', 'ivf-test-order'),
      option('time', 'How soon IVF could start after tests', 'तपासण्यांनंतर IVF किती लवकर', 'ivf-after-tests-wait'),
    ],
  },
  'ivf-test-order': {
    en: 'Often her scan is timed with the cycle, blood tests can be the same week, and the semen test is given at the clinic after 2 to 5 days of abstinence. The coordinator gives the order. Want the visit itself?',
    mr: 'अनेकदा तिचा स्कॅन पाळीनुसार, रक्त तपासणी त्याच आठवड्यात, आणि सिमेन तपासणी २ ते ५ दिवस स्खलनाविना क्लिनिकमध्ये. क्रम कोऑर्डिनेटर सांगतात. भेट सांगू का?',
    options: [
      option('visit', 'Yes, walk me through the visit', 'हो, भेट सांगा', 'ivf-visit'),
      option('semen', 'How is the semen test given?', 'सिमेन तपासणी कशी द्यावी?', 'ivf-semen-prep'),
      option('enough', "That's enough on tests", 'तपासण्यांवर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-semen-prep': {
    en: 'The sample is usually given at the clinic after 2 to 5 days without ejaculation. Do not use internet medicines before the report. After this, the couple’s other tests are still needed. What next?',
    mr: 'नमुना सहसा २ ते ५ दिवस स्खलनाविना क्लिनिकमध्ये द्यावा लागतो. अहवालाआधी इंटरनेटवरील औषधे घेऊ नका. यानंतर जोडप्याच्या इतर तपासण्या लागतात. पुढे काय?',
    options: [
      option('visit', 'What the first visit includes', 'पहिल्या भेटीत काय असते', 'ivf-visit'),
      option('icsi', 'If that report is low, then what?', 'अहवाल कमी असेल तर?', 'ivf-icsi'),
      option('enough', "That's enough on this", 'यावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-after-tests-wait': {
    en: 'IVF does not start the day reports arrive. The doctor reads them, writes a plan, and then a cycle is dated on the clinic calendar. That gap is often a few weeks, not the same week. What else?',
    mr: 'अहवाल आल्या दिवशी IVF सुरू होत नाही. डॉक्टर वाचून योजना लिहितात, मग क्लिनिकच्या दिनदर्शिकेवर सायकलची तारीख बसते. हे अंतर अनेकदा काही आठवडे असते, त्याच आठवडा नाही. आणखी काय?',
    options: [
      option('cycle', 'Then how does the cycle run?', 'मग सायकल कशी चालते?', 'ivf-cycle'),
      option('visit', 'What should we bring to hear the plan?', 'योजना ऐकण्यासाठी काय आणावे?', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-past': {
    en: 'Alright. Which treatment have you already tried?',
    mr: 'ठीक. आधी कोणता उपचार करून पाहिला आहे?',
    options: [
      option('iui', 'We did IUI', 'आम्ही IUI केले होते', 'ivf-iui-count'),
      option('ivf', 'We did IVF or ICSI', 'आम्ही IVF किंवा ICSI केले होते', 'ivf-ivf-count'),
      option('meds', 'Only tablets or injections', 'फक्त गोळ्या किंवा इंजेक्शन', 'ivf-meds-how'),
    ],
  },
  'ivf-iui-count': {
    en: 'The number of IUI cycles matters for the next talk. How many timed IUI cycles were done?',
    mr: 'IUI सायकल्सची संख्या पुढच्या चर्चेसाठी महत्त्वाची असते. किती वेळेवरच्या IUI सायकल्स झाल्या?',
    options: [
      option('one', 'One or two', 'एक किंवा दोन', 'ivf-iui-one'),
      option('many', 'Three or more', 'तीन किंवा अधिक', 'ivf-iui-many'),
      option('unsure', "We're not sure of the count", 'संख्या खात्री नाही', 'ivf-after-iui'),
    ],
  },
  'ivf-iui-one': {
    en: 'One or two IUIs does not always mean IVF is next. The doctor still checks tubes, ovulation, and the sperm report. Were those already reviewed after the IUI?',
    mr: 'एक-दोन IUI म्हणजे नेहमी पुढे IVF असे नाही. डॉक्टर अजून नळ्या, अंडमोचन आणि शुक्राणू अहवाल बघतात. IUI नंतर ते पुनरावलोकन झाले होते का?',
    options: [
      option('yes', 'Yes, they reviewed the reports', 'हो, अहवाल बघितले', 'ivf-after-iui'),
      option('no', 'No, we just want the next step', 'नाही, फक्त पुढची पायरी हवी', 'ivf-vs-iui'),
      option('preg', 'There was a pregnancy that did not continue', 'गर्भधारणा झाली पण पुढे गेली नाही', 'ivf-loss'),
    ],
  },
  'ivf-iui-many': {
    en: 'After several IUIs, IVF is often the next conversation, especially if tubes, eggs, or sperm need the laboratory. What do you want explained about that shift?',
    mr: 'अनेक IUI नंतर IVF अनेकदा पुढची चर्चा असते, विशेषतः नळ्या, अंडी किंवा शुक्राणूंना प्रयोगशाळा लागणार असेल तर. त्या बदलाबद्दल काय समजावू?',
    options: [
      option('diff', 'How IVF is different from those IUIs', 'त्या IUI पेक्षा IVF कसे वेगळे', 'ivf-vs-iui'),
      option('cycle', 'How the IVF cycle would run', 'IVF सायकल कशी चालेल', 'ivf-cycle'),
      option('review', 'What the doctor will re-check first', 'डॉक्टर आधी काय पुन्हा बघतील', 'ivf-after-iui'),
    ],
  },
  'ivf-after-iui': {
    en: 'When IUI has not worked, or when the tubes, egg reserve, or sperm need the laboratory, IVF is often discussed next. The earlier IUI file still comes with you. What should I explain?',
    mr: 'IUI ने काम झाले नसेल, किंवा नळ्या, अंड्यांचा साठा किंवा शुक्राणूंसाठी प्रयोगशाळा लागणार असेल, तेव्हा पुढे IVF बोलला जातो. आधीची IUI फाइल सोबत आणा. काय समजावू?',
    options: [
      option('diff', 'How IVF differs from IUI', 'IVF आणि IUI मध्ये फरक', 'ivf-vs-iui'),
      option('why', 'Why IUI may stop being the plan', 'IUI योजना का थांबू शकते', 'ivf-why'),
      option('cycle', 'How an IVF cycle runs', 'IVF सायकल कशी चालते', 'ivf-cycle'),
    ],
  },
  'ivf-ivf-count': {
    en: 'Then the next visit is a review of that earlier IVF, not a repeat of the same cycle by default. How many IVF or ICSI cycles were done?',
    mr: 'मग पुढची भेट म्हणजे त्या आधीच्या IVF चे पुनरावलोकन, तोच चक्र आपोआप पुन्हा नाही. किती IVF किंवा ICSI सायकल्स झाल्या?',
    options: [
      option('one', 'One cycle', 'एक सायकल', 'ivf-ivf-one'),
      option('many', 'More than one', 'एकापेक्षा जास्त', 'ivf-ivf-many'),
      option('frozen', 'We still have frozen embryos', 'गोठवलेले गर्भ अजून आहेत', 'ivf-frozen-have'),
    ],
  },
  'ivf-ivf-one': {
    en: 'One cycle gives the doctor eggs, fertilisation, embryos, and transfer notes to read. Do you have that summary with you?',
    mr: 'एक सायकल डॉक्टरांना अंडी, फलन, गर्भ आणि ट्रान्सफरच्या नोंदी वाचायला देते. तो सारांश तुमच्याकडे आहे का?',
    options: [
      option('yes', 'Yes, we have the cycle papers', 'हो, सायकलचे कागद आहेत', 'ivf-review'),
      option('no', 'Not all of them', 'सगळे नाहीत', 'ivf-papers'),
      option('lab', 'Fertilisation was the worry', 'फलन ही चिंता होती', 'ivf-lab'),
    ],
  },
  'ivf-ivf-many': {
    en: 'After more than one cycle the doctor looks for a pattern: eggs, lab, or lining. Bring every cycle sheet. What felt like the main issue to you?',
    mr: 'एकापेक्षा जास्त सायकल्स नंतर डॉक्टर पॅटर्न बघतात: अंडी, प्रयोगशाळा, किंवा अस्तर. प्रत्येक सायकलचे कागद आणा. तुम्हाला मुख्य अडचण काय वाटली?',
    options: [
      option('eggs', 'Few eggs or a thin lining', 'कमी अंडी किंवा पातळ अस्तर', 'ivf-review'),
      option('lab', 'The lab or fertilisation step', 'प्रयोगशाळा किंवा फलन', 'ivf-lab'),
      option('transfer', 'The transfer or the wait after', 'ट्रान्सफर किंवा नंतरची वाट', 'ivf-after-transfer'),
    ],
  },
  'ivf-frozen-have': {
    en: 'If embryos are already frozen, the next step may be a frozen transfer, not a full stimulation again. That still follows lining and the clinic calendar. Has a date been given?',
    mr: 'गर्भ आधीच गोठवले असतील तर पुढे पूर्ण उत्तेजन नव्हे, गोठवलेला ट्रान्सफर असू शकतो. तो अस्तर आणि क्लिनिकच्या दिनदर्शिकेवर चालतो. तारीख मिळाली आहे का?',
    options: [
      option('yes', 'Yes, a transfer date was discussed', 'हो, ट्रान्सफर तारीख बोलली', 'ivf-frozen-prep'),
      option('no', 'Not yet', 'अजून नाही', 'ivf-frozen-prep'),
      option('unsure', "We're not sure they survived freezing", 'गोठवताना टिकले का खात्री नाही', 'ivf-review'),
    ],
  },
  'ivf-frozen-prep': {
    en: 'Do not start lining medicines early. The coordinator confirms the scans and the tablets from your file. What do you want next on this?',
    mr: 'अस्तराची औषधे लवकर सुरू करू नका. स्कॅन आणि गोळ्या फाइलमधून कोऑर्डिनेटर सांगतात. यावर पुढे काय हवे?',
    options: [
      option('visit', 'What that FET visit checks', 'त्या FET भेटीत काय बघितले जाते', 'ivf-visit'),
      option('after', 'The wait after transfer', 'ट्रान्सफरनंतरची वाट', 'ivf-after-transfer'),
      option('enough', "That's enough on frozen embryos", 'गोठवलेल्या गर्भांवर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-loss': {
    en: 'I am sorry you went through that. The next plan is a medical review, not a chat diagnosis. Bring the papers from that pregnancy if you have them. What would help now?',
    mr: 'त्यातून जावे लागले याबद्दल खेद आहे. पुढची योजना वैद्यकीय पुनरावलोकन आहे, चॅटचे निदान नाही. त्या गर्भधारणेचे कागद असतील तर आणा. आत्ता काय मदत होईल?',
    options: [
      option('review', 'What the doctor will review', 'डॉक्टर काय पुनरावलोकन करतील', 'ivf-review'),
      option('visit', 'How to prepare for that visit', 'त्या भेटीची तयारी', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-meds-how': {
    en: 'Tablets or injections for ovulation are an earlier step. IVF is considered when a laboratory plan is clearer. Which of these did you use?',
    mr: 'अंडमोचनाच्या गोळ्या किंवा इंजेक्शन आधीची पायरी असतात. प्रयोगशाळेची योजना स्पष्ट असेल तेव्हा IVF येतो. काय वापरले होते?',
    options: [
      option('tabs', 'Tablets only', 'फक्त गोळ्या', 'ivf-meds-clomid'),
      option('inj', 'Injections as well', 'इंजेक्शन सुद्धा', 'ivf-meds-inject'),
      option('unsure', "We're not sure of the names", 'नावे खात्री नाही', 'ivf-papers'),
    ],
  },
  'ivf-meds-clomid': {
    en: 'Tablet cycles are often tried for a limited time, with scans to see if an egg is growing. Did those cycles have monitoring scans?',
    mr: 'गोळ्यांच्या सायकल्स मर्यादित काळ बघितल्या जातात, अंडी वाढते का यासाठी स्कॅनसह. त्या सायकल्समध्ये मॉनिटरिंग स्कॅन होते का?',
    options: [
      option('yes', 'Yes, we had scans', 'हो, स्कॅन झाले', 'ivf-why'),
      option('no', 'No scans, only tablets', 'स्कॅन नाही, फक्त गोळ्या', 'ivf-tests-none'),
      option('preg', 'There was a pregnancy that did not continue', 'गर्भधारणा झाली पण पुढे गेली नाही', 'ivf-loss'),
    ],
  },
  'ivf-meds-inject': {
    en: 'Injection cycles are closer to IVF stimulation, but they are not the same as a lab cycle. Were eggs collected, or was it only injections and timed intercourse or IUI?',
    mr: 'इंजेक्शन सायकल्स IVF उत्तेजनाच्या जवळ असतात, पण प्रयोगशाळेची सायकल नसतात. अंडी काढली होती, की फक्त इंजेक्शन आणि वेळेवरचे संबंध किंवा IUI?',
    options: [
      option('iui', 'Injections then IUI', 'इंजेक्शन मग IUI', 'ivf-iui-count'),
      option('timed', 'Injections then timed intercourse', 'इंजेक्शन मग वेळेवरचे संबंध', 'ivf-why'),
      option('ivf', 'Eggs were collected', 'अंडी काढली होती', 'ivf-ivf-count'),
    ],
  },
  'ivf-cycle': {
    en: 'A cycle has four parts: injections to grow eggs, egg collection, fertilisation in the lab, and embryo transfer. Which part should I explain first?',
    mr: 'सायकलचे चार भाग: अंडी वाढवण्यासाठी इंजेक्शन, अंडी काढणे, प्रयोगशाळेत फलन, आणि गर्भ ट्रान्सफर. आधी कोणता भाग सांगू?',
    options: [
      option('stim', 'The injections and egg collection', 'इंजेक्शन आणि अंडी काढणे', 'ivf-stim'),
      option('lab', 'What happens in the lab', 'प्रयोगशाळेत काय होते', 'ivf-lab'),
      option('transfer', 'The embryo transfer', 'गर्भ ट्रान्सफर', 'ivf-transfer'),
    ],
  },
  'ivf-stim': {
    en: 'Injections help a group of eggs to grow. The dose is decided after your tests, not from this chat. Most people give the injections at home after a nurse shows them. What do you want next on this step?',
    mr: 'इंजेक्शनने अंड्यांचा गट वाढवला जातो. डोस तपासण्यांनंतर ठरतो, या चॅटमधून नाही. नर्स दाखवल्यानंतर बहुतेक जण घरी इंजेक्शन देतात. या पायरीवर पुढे काय हवे?',
    options: [
      option('home', 'Can we do the injections at home?', 'इंजेक्शन घरी करता येतील का?', 'ivf-stim-home'),
      option('scan', 'How often are the monitoring scans?', 'मॉनिटरिंग स्कॅन किती वेळा?', 'ivf-stim-monitor'),
      option('egg', 'What is egg-collection day like?', 'अंडी काढण्याचा दिवस कसा?', 'ivf-egg-day'),
    ],
  },
  'ivf-stim-home': {
    en: 'Yes, after teaching, evening injections at home are common. Store them as the nurse labels them. Missed dose: call the clinic the same day — do not double it. What else on stimulation?',
    mr: 'हो, शिकवल्यानंतर संध्याकाळी घरची इंजेक्शन सामान्य आहेत. नर्सने लिहिल्याप्रमाणे ठेवा. डोस राहिला तर त्याच दिवशी क्लिनिकला कॉल करा — दुप्पट करू नका. उत्तेजनावर आणखी काय?',
    options: [
      option('scan', 'The scan visits during injections', 'इंजेक्शन दरम्यानच्या स्कॅन भेटी', 'ivf-stim-monitor'),
      option('side', 'What side effects are usual?', 'कोणते दुष्परिणाम नेहमीचे?', 'ivf-stim-side'),
      option('egg', 'Then egg collection', 'मग अंडी काढणे', 'ivf-egg-day'),
    ],
  },
  'ivf-stim-monitor': {
    en: 'During injections you come in for scans, often several times in those two weeks, so the dose can be adjusted. Blood tests may be added. The calendar is given in writing. Next part?',
    mr: 'इंजेक्शन दरम्यान स्कॅनसाठी यावे लागते, त्या दोन आठवड्यांत अनेकदा, जेणेकरून डोस बदलता येईल. रक्त तपासणीही होऊ शकते. दिनदर्शिका लेखी मिळते. पुढचा भाग?',
    options: [
      option('egg', 'Egg-collection day', 'अंडी काढण्याचा दिवस', 'ivf-egg-day'),
      option('time', 'How many weeks is this whole step?', 'ही पायरी किती आठवडे?', 'ivf-time'),
      option('side', 'Side effects during this time', 'या काळातील दुष्परिणाम', 'ivf-stim-side'),
    ],
  },
  'ivf-stim-side': {
    en: 'Mild bloating and soreness can happen. Severe pain, fainting, or trouble breathing is a same-day call to the clinic. This chat cannot change the dose. What should I explain next?',
    mr: 'हलकी फुगीरता आणि दुखणे होऊ शकते. तीव्र वेदना, बेशुद्ध पडणे किंवा श्वास घेण्यास त्रास झाल्यास त्याच दिवशी क्लिनिकला कॉल करा. हा चॅट डोस बदलत नाही. पुढे काय सांगू?',
    options: [
      option('egg', 'Egg-collection day', 'अंडी काढण्याचा दिवस', 'ivf-egg-day'),
      option('visit', 'Who to call from the file', 'फाइलमधून कुणाला कॉल करावे', 'ivf-visit'),
      option('enough', "That's enough on injections", 'इंजेक्शनवर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-egg-day': {
    en: 'Egg collection is a short day-care procedure under the team’s anaesthesia plan. You go home the same day in most cases. Someone should drive you. After this the eggs go to the lab. What next?',
    mr: 'अंडी काढणे ही टीमच्या भूल योजनेखाली छोट्या दिवसाची प्रक्रिया आहे. बहुतेक जण त्याच दिवशी घरी जातात. कोणीतरी गाडीने नेले पाहिजे. यानंतर अंडी प्रयोगशाळेत जातात. पुढे काय?',
    options: [
      option('lab', 'What the lab does that day', 'त्या दिवशी प्रयोगशाळा काय करते', 'ivf-lab'),
      option('rest', 'How much rest after collection', 'काढल्यानंतर किती विश्रांती', 'ivf-egg-rest'),
      option('time', 'How this sits in the two-week timeline', 'हे दोन आठवड्यांच्या वेळेत कुठे', 'ivf-time'),
    ],
  },
  'ivf-egg-rest': {
    en: 'That day is rest at home. The team tells you about pain relief and when to call. Long bed rest for weeks is not the usual plan. Next is the laboratory. Shall I explain that?',
    mr: 'तो दिवस घरी विश्रांतीचा. वेदनाशामक आणि कधी कॉल करायचे ते टीम सांगते. आठवडे भर दीर्घ विश्रांती सहसा नसते. पुढे प्रयोगशाळा. ती सांगू का?',
    options: [
      option('lab', 'Yes, the laboratory step', 'हो, प्रयोगशाळेची पायरी', 'ivf-lab'),
      option('transfer', 'Skip to embryo transfer', 'थेट गर्भ ट्रान्सफर', 'ivf-transfer'),
      option('enough', "That's enough on collection day", 'काढण्याच्या दिवसावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-lab': {
    en: 'Embryologists fertilise the eggs and watch the embryos. ICSI places one sperm into one egg when the sperm needs that help. Spare embryos can be frozen. What should I go into?',
    mr: 'भ्रूणतज्ञ अंडी फलित करतात आणि गर्भ बघतात. शुक्राणूंना मदत हवी असेल तेव्हा ICSI एक शुक्राणू एका अंड्यात ठेवतो. उरलेले गर्भ गोठवता येतात. कशात जाऊ?',
    options: [
      option('icsi', 'Who may need ICSI?', 'ICSI कोणाला लागू शकते?', 'ivf-icsi'),
      option('freeze', 'Fresh transfer or freeze — how is that decided?', 'ताजे ट्रान्सफर की गोठवणे — कसे ठरते?', 'ivf-fresh-vs-freeze'),
      option('transfer', 'The transfer itself', 'ट्रान्सफर कसा होतो', 'ivf-transfer'),
    ],
  },
  'ivf-icsi': {
    en: 'ICSI is used for a low sperm count, poor movement, earlier fertilisation failure, or sperm collected by a procedure. The semen report decides this, not the chat. What is linked to this for you?',
    mr: 'कमी शुक्राणू, कमी हालचाल, आधी फलन न होणे, किंवा प्रक्रियेने काढलेले शुक्राणू असल्यास ICSI वापरले जाते. सिमेन अहवाल ठरवतो, चॅट नाही. तुमच्याशी काय जुळते?',
    options: [
      option('report', 'We already have a low semen report', 'कमी सिमेन अहवाल आधीच आहे', 'ivf-semen-have'),
      option('zero', 'No sperm was seen in a sample', 'नमुन्यात शुक्राणू दिसले नाहीत', 'ivf-retrieval-note'),
      option('transfer', 'Then what happens to the embryo?', 'मग गर्भाचे काय होते?', 'ivf-transfer'),
    ],
  },
  'ivf-retrieval-note': {
    en: 'If the sample has no sperm, a surgeon may look in the epididymis or testis. That is planned with the IVF calendar, not guessed here. Want the ICSI step after sperm is found, or the visit first?',
    mr: 'नमुन्यात शुक्राणू नसतील तर शल्यचिकित्सक एपिडिडायमिस किंवा वृषणात शोधू शकतात. ते IVF दिनदर्शिकेसोबत ठरते, इथे अंदाज नाही. शुक्राणू मिळाल्यावर ICSI हवे, की आधी भेट?',
    options: [
      option('icsi', 'ICSI after sperm is found', 'शुक्राणू मिळाल्यावर ICSI', 'ivf-icsi'),
      option('visit', 'The visit that plans this', 'हे ठरवणारी भेट', 'ivf-visit'),
      option('enough', "That's enough on this", 'यावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-fresh-vs-freeze': {
    en: 'Sometimes the embryo is transferred in the same cycle. Sometimes all are frozen and transferred later, if the lining or hormone levels need more time. The lab and doctor decide, not this chat. What next?',
    mr: 'कधी गर्भ त्याच सायकलमध्ये ट्रान्सफर होतो. अस्तर किंवा हार्मोनला वेळ हवा असेल तर सगळे गोठवून नंतर. प्रयोगशाळा आणि डॉक्टर ठरवतात, चॅट नाही. पुढे काय?',
    options: [
      option('transfer', 'Explain a transfer day', 'ट्रान्सफरचा दिवस सांगा', 'ivf-transfer'),
      option('frozen', 'We may already have frozen embryos', 'गोठवलेले गर्भ असू शकतात', 'ivf-frozen-have'),
      option('after', 'The days after transfer', 'ट्रान्सफरनंतरचे दिवस', 'ivf-after-transfer'),
    ],
  },
  'ivf-transfer': {
    en: 'A selected embryo is placed in the uterus. It is a short clinic visit. Long bed rest is not the usual plan; the team gives after-care for your cycle. What do you want after this?',
    mr: 'निवडलेला गर्भ गर्भाशयात ठेवला जातो. ही छोटी क्लिनिक भेट असते. दीर्घ विश्रांती सहसा नसते; तुमच्या सायकलची पुढची काळजी टीम सांगते. यानंतर काय हवे?',
    options: [
      option('after', 'The wait until the pregnancy test', 'गर्भ तपासणीपर्यंतची वाट', 'ivf-after-transfer'),
      option('freeze', 'What if extra embryos are there?', 'जास्त गर्भ असतील तर?', 'ivf-fresh-vs-freeze'),
      option('time', 'How this fits the whole timeline', 'हे पूर्ण वेळेत कुठे बसते', 'ivf-time'),
    ],
  },
  'ivf-after-transfer': {
    en: 'After transfer you follow the medicines on the sheet. An early home test can mislead. Test on the day the clinic wrote. Heavy bleeding or severe pain: call the same day. What next?',
    mr: 'ट्रान्सफरनंतर शीटवरील औषधे चालू ठेवा. लवकरची घरगुती तपासणी दिशाभूल करू शकते. क्लिनिकने लिहिलेल्या दिवशी तपासा. जास्त रक्तस्त्राव किंवा तीव्र वेदना: त्याच दिवशी कॉल करा. पुढे काय?',
    options: [
      option('beta', 'What is that pregnancy-test day?', 'तो गर्भ-तपासणी दिवस काय?', 'ivf-beta'),
      option('work', 'Can we go to work in those days?', 'त्या दिवसांत कामावर जाता येईल का?', 'ivf-leave'),
      option('enough', "That's enough on after-care", 'नंतरच्या काळजीवर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-beta': {
    en: 'The clinic gives a blood-test day. Do not change medicines from a home kit. If the test is negative, do not start the next cycle on your own — the doctor reviews first. Anything else on this wait?',
    mr: 'क्लिनिक रक्त तपासणीचा दिवस देते. घरगुती किटनंतर औषधे बदलू नका. तपासणी नकारात्मक असेल तर पुढची सायकल स्वतः सुरू करू नका — डॉक्टर आधी बघतात. या वाटेवर आणखी काही?',
    options: [
      option('neg', 'If it is negative, then what?', 'नकारात्मक झाली तर?', 'ivf-neg'),
      option('visit', 'Who do we call with the result?', 'निकाल कुणाला सांगायचा?', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-neg': {
    en: 'A negative test needs a review of eggs, lab, and lining. The next dates come from that visit. Bring the cycle papers. What would you like now?',
    mr: 'नकारात्मक तपासणीला अंडी, प्रयोगशाळा आणि अस्तराचे पुनरावलोकन लागते. पुढच्या तारखा त्या भेटीतून येतात. सायकलचे कागद आणा. आत्ता काय हवे?',
    options: [
      option('review', 'What that review looks at', 'त्या पुनरावलोकनात काय', 'ivf-review'),
      option('frozen', 'We might use a frozen embryo next', 'पुढे गोठवलेला गर्भ वापरू', 'ivf-frozen-have'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-leave': {
    en: 'Many people do desk work during stimulation, except egg-collection day. Travel and heavy work are decided with the doctor for your cycle, not by this chat. Want the timeline in days?',
    mr: 'अंडी काढण्याचा दिवस सोडून अनेक जण उत्तेजनात डेस्क काम करतात. प्रवास आणि जड काम तुमच्या सायकलसाठी डॉक्टरांसोबत ठरते, या चॅटने नाही. दिवसांची वेळ हवी आहे का?',
    options: [
      option('time', 'Yes, the usual timeline', 'हो, नेहमीची वेळ', 'ivf-time'),
      option('egg', 'Remind me about collection day', 'काढण्याचा दिवस पुन्हा सांगा', 'ivf-egg-day'),
      option('enough', "That's enough on work", 'कामावर एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-time': {
    en: 'Stimulation is often about two to three weeks, then laboratory days, then transfer or freeze. Exact dates follow your tests and the clinic calendar. What part of that timing is unclear?',
    mr: 'उत्तेजन अनेकदा दोन ते तीन आठवडे, मग प्रयोगशाळेचे दिवस, मग ट्रान्सफर किंवा गोठवणे. अचूक तारखा तपासण्या आणि क्लिनिकच्या दिनदर्शिकेवर. त्या वेळेचा कोणता भाग अस्पष्ट आहे?',
    options: [
      option('stim', 'The injection weeks', 'इंजेक्शनच्या आठवड्या', 'ivf-stim'),
      option('after', 'The wait after transfer', 'ट्रान्सफरनंतरची वाट', 'ivf-after-transfer'),
      option('start', 'When a first cycle could be dated', 'पहिली सायकल कधी दिनांकित होईल', 'ivf-after-tests-wait'),
    ],
  },
  'ivf-who': {
    en: 'IVF is considered for blocked tubes, a low egg reserve, endometriosis, an unexplained delay, unsuccessful IUI, or when sperm needs ICSI. The doctor confirms this after reports. Which of those sounds closest?',
    mr: 'बंद नळ्या, कमी अंड्यांचा साठा, एंडोमेट्रिओसिस, स्पष्ट नसलेला विलंब, अयशस्वी IUI, किंवा शुक्राणूंसाठी ICSI लागेल तेव्हा IVF विचारात घेतला जातो. अहवालांनंतर डॉक्टर ठरवतात. यापैकी काय जवळ आहे?',
    options: [
      option('tubes', 'The tubes', 'नळ्या', 'ivf-tubes'),
      option('sperm', 'The sperm report', 'शुक्राणू अहवाल', 'ivf-icsi'),
      option('iui', 'IUI already did not work', 'IUI आधीच चालले नाही', 'ivf-iui-count'),
    ],
  },
  'ivf-why': {
    en: 'That recommendation usually comes when the tubes are blocked, IUI has not worked, sperm or eggs need the laboratory, or you want a defined next plan. The visit confirms it. What should I unpack?',
    mr: 'नळ्या बंद असतील, IUI ने काम झाले नसेल, शुक्राणू किंवा अंड्यांना प्रयोगशाळा लागणार असेल, किंवा पुढची स्पष्ट योजना हवी असेल, तेव्हा अशी शिफारस येते. भेटीत हे निश्चित होते. काय उघडून सांगू?',
    options: [
      option('cycle', 'How that IVF cycle would actually run', 'ती IVF सायकल खरे तर कशी चालेल', 'ivf-cycle'),
      option('tests', 'What must be on file before it starts', 'सुरू होण्याआधी फाइलमध्ये काय हवे', 'ivf-test-order'),
      option('vs', 'Why not another IUI instead', 'त्याऐवजी आणखी IUI का नाही', 'ivf-vs-iui'),
    ],
  },
  'ivf-vs-iui': {
    en: 'IUI places prepared sperm in the uterus, and fertilisation happens in the body. IVF fertilises the egg in the laboratory and then transfers an embryo. Which difference do you want next?',
    mr: 'IUI मध्ये तयार शुक्राणू गर्भाशयात ठेवले जातात आणि फलन शरीरात होते. IVF मध्ये अंड्याचे फलन प्रयोगशाळेत होते आणि मग गर्भ ट्रान्सफर होतो. पुढे कोणता फरक हवा?',
    options: [
      option('who', 'When IUI is no longer the usual next step', 'IUI पुढची नेहमीची पायरी केव्हा राहत नाही', 'ivf-why'),
      option('cycle', 'The extra IVF laboratory steps', 'IVF च्या अतिरिक्त प्रयोगशाळा पायऱ्या', 'ivf-cycle'),
      option('time', 'Which one takes longer', 'कोणते जास्त काळ घेते', 'ivf-time'),
    ],
  },
  'ivf-review': {
    en: 'The doctor reads eggs collected, fertilisation, embryo growth, and transfer timing, then decides whether medicines, the lab method, or the transfer day should change. Which piece should I explain?',
    mr: 'डॉक्टर काढलेली अंडी, फलन, गर्भ वाढ आणि ट्रान्सफरची वेळ वाचतात, मग औषधे, प्रयोगशाळा पद्धत किंवा ट्रान्सफर दिवस बदलायचा का ते ठरवतात. कोणता भाग सांगू?',
    options: [
      option('lab', 'The laboratory and ICSI part', 'प्रयोगशाळा आणि ICSI', 'ivf-lab'),
      option('transfer', 'The transfer timing', 'ट्रान्सफरची वेळ', 'ivf-transfer'),
      option('visit', 'What to bring for that review', 'त्या पुनरावलोकनासाठी काय आणावे', 'ivf-visit'),
    ],
  },
  'ivf-visit': {
    en: 'Bring old reports if you have them: semen analysis, ultrasound, and hormone tests. The visit is a history, an examination if needed, and a written plan. IVF does not start the same day. What still feels unclear?',
    mr: 'जुने अहवाल असतील तर आणा: सिमेन विश्लेषण, सोनोग्राफी आणि हार्मोन तपासण्या. भेटीत इतिहास, गरज असल्यास तपासणी, आणि लेखी योजना. IVF त्याच दिवशी सुरू होत नाही. अजून काय अस्पष्ट वाटते?',
    options: [
      option('cycle', 'The cycle after that plan is written', 'ती योजना लिहिल्यानंतरची सायकल', 'ivf-cycle'),
      option('tests', 'The tests they may still add', 'अजून कोणत्या तपासण्या येऊ शकतात', 'ivf-test-order'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-close': {
    en: 'We can pause here. If another IVF point is still on your mind, pick it below.',
    mr: 'इथे थांबू शकतो. IVF बद्दल आणखी काही असेल तर खाली निवडा.',
    options: [
      option('cycle', 'Walk me through a cycle', 'सायकल कशी चालते ते सांगा', 'ivf-cycle'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('again', 'Start these questions again', 'हे प्रश्न पुन्हा सुरू करा', 'ivf-intro'),
    ],
  },

  'iui-intro': {
    en: 'IUI places prepared sperm into the uterus around ovulation. It is a shorter step than IVF. What do you want to know first?',
    mr: 'IUI मध्ये अंडमोचनाच्या वेळी तयार शुक्राणू गर्भाशयात ठेवले जातात. ही IVF पेक्षा छोटी पायरी आहे. आधी काय जाणून घ्यायचे आहे?',
    options: [
      option('fit', 'Could IUI suit us?', 'IUI आम्हाला लागू शकते का?', 'iui-fit'),
      option('how', 'How is it done?', 'हे कसे केले जाते?', 'iui-how'),
      option('vs', 'Should we think IUI or IVF?', 'IUI विचारायचे की IVF?', 'iui-vs'),
    ],
  },
  'iui-fit': {
    en: 'IUI is discussed when the tubes are open, ovulation can be timed, and the sperm sample is suitable. Which of these sounds closest to you?',
    mr: 'नळ्या खुल्या असतील, अंडमोचनाची वेळ ठरवता येईल, आणि शुक्राणूंचा नमुना योग्य असेल, तेव्हा IUI बोलला जातो. तुमच्याशी काय जास्त जुळते?',
    options: [
      option('none', "We haven't had tests yet", 'आमच्या तपासण्या अजून झाल्या नाहीत', 'iui-tests'),
      option('open', 'We were told the tubes are open', 'नळ्या खुल्या आहेत असे सांगितले', 'iui-open'),
      option('failed', 'An earlier IUI did not work', 'आधीचा IUI यशस्वी झाला नाही', 'iui-failed-count'),
    ],
  },
  'iui-open': {
    en: 'Open tubes are one part. IUI still needs timed ovulation and a semen report that can be prepared in the lab. Has the semen test been done?',
    mr: 'खुल्या नळ्या एक भाग आहेत. IUI ला वेळेवरचे अंडमोचन आणि प्रयोगशाळेत तयार करता येणारा सिमेन अहवाल सुद्धा लागतो. सिमेन तपासणी झाली का?',
    options: [
      option('yes', 'Yes, we have a semen report', 'हो, सिमेन अहवाल आहे', 'iui-sperm-ok'),
      option('no', 'Not yet', 'अजून नाही', 'iui-tests'),
      option('low', 'It was called borderline or low', 'सीमारेषा किंवा कमी म्हटले होते', 'iui-sperm-low'),
    ],
  },
  'iui-sperm-ok': {
    en: 'If the report can be washed and timed with ovulation, IUI may be discussed. The doctor still confirms both sides. Do you already track ovulation?',
    mr: 'अहवाल धुवून अंडमोचनासोबत वेळेवर बसवता येत असेल तर IUI बोलला जाऊ शकतो. डॉक्टर दोन्ही बाजू निश्चित करतात. अंडमोचन आधीच नोंद करता का?',
    options: [
      option('yes', 'Yes, with kits or scans', 'हो, किट किंवा स्कॅनने', 'iui-how'),
      option('no', 'Not yet', 'अजून नाही', 'iui-ovulation'),
      option('irregular', 'Periods are irregular', 'पाळी अनियमित आहे', 'iui-irregular'),
    ],
  },
  'iui-sperm-low': {
    en: 'A low report may still suit IUI after a wash, or it may point to IVF with ICSI. That is a doctor’s reading of the numbers, not this chat. What do you want next on this report?',
    mr: 'कमी अहवाल धुतल्यानंतर IUI ला लागू शकतो, किंवा ICSI सह IVF कडे जाऊ शकतो. ही संख्या डॉक्टरांची वाचणी आहे, चॅटची नाही. या अहवालावर पुढे काय हवे?',
    options: [
      option('repeat', 'Should the test be repeated?', 'तपासणी पुन्हा करायची का?', 'iui-repeat'),
      option('vs', 'When does this become IVF instead?', 'हे IVF केव्हा होते?', 'iui-vs'),
      option('how', 'If IUI is still tried, how is it done?', 'IUI अजून केले तर कसे?', 'iui-how'),
    ],
  },
  'iui-repeat': {
    en: 'One low semen report is often repeated after the 2 to 5 day window. Do not start internet medicines before that. After the repeat, the doctor chooses IUI or IVF. What next?',
    mr: 'एक कमी सिमेन अहवाल २ ते ५ दिवसांच्या खिडकीनंतर अनेकदा पुन्हा केला जातो. त्याआधी इंटरनेटवरील औषधे सुरू करू नका. पुन्हा झाल्यावर डॉक्टर IUI किंवा IVF निवडतात. पुढे काय?',
    options: [
      option('how', 'If IUI is chosen, how is the day?', 'IUI ठरले तर तो दिवस कसा?', 'iui-day'),
      option('vs', 'If IVF is chosen instead', 'त्याऐवजी IVF ठरले तर', 'iui-vs'),
      option('enough', "That's enough on the semen report", 'सिमेन अहवालावर एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-ovulation': {
    en: 'IUI is timed around ovulation, with scans or a kit as the doctor prefers. Irregular cycles need more scans. Have periods been regular?',
    mr: 'IUI अंडमोचनाभोवती वेळेवर असतो, डॉक्टरांच्या स्कॅन किंवा किटने. अनियमित पाळीला जास्त स्कॅन लागतात. पाळी नियमित आहे का?',
    options: [
      option('yes', 'Mostly regular', 'बहुतेक नियमित', 'iui-how'),
      option('no', 'Irregular', 'अनियमित', 'iui-irregular'),
      option('tablets', 'She already takes ovulation tablets', 'तिच्या अंडमोचनाच्या गोळ्या चालू आहेत', 'iui-meds'),
    ],
  },
  'iui-irregular': {
    en: 'Then IUI, if it is chosen, usually comes with more monitoring and sometimes tablets or injections to time an egg. That is decided on scan, not in chat. What should I explain?',
    mr: 'मग IUI ठरले तर जास्त मॉनिटरिंग आणि कधी गोळ्या किंवा इंजेक्शन अंड्याची वेळ पकडण्यासाठी. हे स्कॅनवर ठरते, चॅटवर नाही. काय समजावू?',
    options: [
      option('meds', 'Those tablets or injections', 'त्या गोळ्या किंवा इंजेक्शन', 'iui-meds'),
      option('day', 'The IUI procedure day', 'IUI प्रक्रियेचा दिवस', 'iui-day'),
      option('vs', 'Maybe IVF is clearer for irregular cycles', 'अनियमित पाळीसाठी IVF स्पष्ट असेल का', 'iui-vs'),
    ],
  },
  'iui-meds': {
    en: 'Some IUI cycles use tablets or a short injection course so one egg can be timed. The dose is from the scan, not from this chat. Were those medicines already used in an earlier cycle?',
    mr: 'काही IUI सायकल्समध्ये एक अंडी वेळेवर पकडण्यासाठी गोळ्या किंवा छोटी इंजेक्शन कोर्स असते. डोस स्कॅनवरून, चॅटवरून नाही. आधीच्या सायकलमध्ये ती औषधे वापरली होती का?',
    options: [
      option('yes', 'Yes, in an earlier cycle', 'हो, आधीच्या सायकलमध्ये', 'iui-failed-count'),
      option('no', 'Not yet', 'अजून नाही', 'iui-how'),
      option('side', 'We worried about side effects', 'दुष्परिणामांची चिंता होती', 'iui-side'),
    ],
  },
  'iui-side': {
    en: 'Mild bloating can happen with ovulation medicine. Severe pain or fainting is a same-day clinic call. The doctor sets the dose after seeing the scan. What next on IUI itself?',
    mr: 'अंडमोचनाच्या औषधाने हलकी फुगीरता होऊ शकते. तीव्र वेदना किंवा बेशुद्ध पडणे झाल्यास त्याच दिवशी क्लिनिक. डोस स्कॅन बघून डॉक्टर ठरवतात. IUI वर पुढे काय?',
    options: [
      option('day', 'The procedure day', 'प्रक्रियेचा दिवस', 'iui-day'),
      option('cycles', 'How many such cycles are usual', 'अशा किती सायकल्स नेहमीच्या', 'iui-cycles'),
      option('enough', "That's enough on medicines", 'औषधांवर एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-tests': {
    en: 'That is a normal starting point. Before IUI the doctor usually checks ovulation, the tubes, and a semen analysis. Which of those should I explain first?',
    mr: 'इथून सुरू करणे सामान्य आहे. IUI आधी डॉक्टर सहसा अंडमोचन, नळ्या आणि सिमेन विश्लेषण तपासतात. आधी कोणते सांगू?',
    options: [
      option('tubes', 'The tube test', 'नळ्यांची तपासणी', 'iui-tube-test'),
      option('semen', 'The semen test', 'सिमेन तपासणी', 'iui-repeat'),
      option('day', 'Skip to what procedure day is like', 'थेट प्रक्रियेचा दिवस', 'iui-day'),
    ],
  },
  'iui-tube-test': {
    en: 'An HSG or saline scan checks whether the tubes are open. It is booked on particular cycle days. If a tube is blocked, IUI is usually not the path. Has this been done?',
    mr: 'HSG किंवा सलाइन स्कॅन नळ्या खुल्या आहेत का ते बघतो. तो पाळीच्या ठराविक दिवसांवर. नळी बंद असेल तर IUI सहसा मार्ग नसतो. ही तपासणी झाली का?',
    options: [
      option('yes', 'Yes, tubes were checked', 'हो, नळ्या तपासल्या', 'iui-open'),
      option('no', 'Not yet', 'अजून नाही', 'iui-visit'),
      option('blocked', 'We were told there is a block', 'ब्लॉक आहे असे सांगितले', 'iui-blocked'),
    ],
  },
  'iui-blocked': {
    en: 'If the tubes are blocked, IUI usually cannot place sperm where it needs to go. The doctor may then discuss IVF. The scan decides this. What would you like now?',
    mr: 'नळ्या बंद असतील तर IUI शुक्राणू जिथे हवे तिथे नेऊ शकत नाही. मग डॉक्टर IVF बोलू शकतात. स्कॅन हा निर्णय करतो. आत्ता काय हवे?',
    options: [
      option('vs', 'How IVF would be different', 'IVF कसे वेगळे असेल', 'iui-vs'),
      option('visit', 'What to take to that visit', 'त्या भेटीला काय नेवे', 'iui-visit'),
      option('enough', "That's enough on tubes", 'नळ्यांवर एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-how': {
    en: 'The laboratory washes the sample and keeps the active sperm. Around ovulation that sample is placed in the uterus. The visit is short. What detail do you want next?',
    mr: 'प्रयोगशाळा नमुना धुतो आणि सक्रिय शुक्राणू ठेवते. अंडमोचनाभोवती तो नमुना गर्भाशयात ठेवला जातो. भेट छोटी असते. पुढे कोणता तपशील हवा?',
    options: [
      option('day', 'What the day itself feels like', 'तो दिवस कसा वाटतो', 'iui-day'),
      option('sample', 'How the sample is given that morning', 'त्या सकाळी नमुना कसा द्यावा', 'iui-sample-day'),
      option('failed', 'What if that IUI does not work', 'तो IUI चालला नाही तर', 'iui-failed-count'),
    ],
  },
  'iui-sample-day': {
    en: 'The sample is usually given at the clinic the same morning, after the 2 to 5 day window. The lab prepares it before the IUI. Partner travel is planned with the coordinator. Next?',
    mr: 'नमुना सहसा त्याच सकाळी क्लिनिकमध्ये, २ ते ५ दिवसांच्या खिडकीनंतर. IUI आधी प्रयोगशाळा तयार करते. जोडीदाराचा प्रवास कोऑर्डिनेटरसोबत ठरतो. पुढे?',
    options: [
      option('day', 'Then the placement itself', 'मग ठेवणे', 'iui-day'),
      option('absent', 'What if he cannot come that morning?', 'तो सकाळी येऊ शकला नाही तर?', 'iui-absent'),
      option('enough', "That's enough on the sample", 'नमुन्यावर एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-absent': {
    en: 'If a fresh sample cannot be given that morning, the doctor may use a frozen sample if one was stored, or reschedule. Do not guess this on the day — ask the coordinator in advance. What next?',
    mr: 'त्या सकाळी ताजा नमुना देता आला नाही तर गोठवलेला नमुना असेल तर तो, किंवा तारीख बदल. त्या दिवशी अंदाज करू नका — आधी कोऑर्डिनेटरना विचारा. पुढे काय?',
    options: [
      option('day', 'The IUI day if the sample is ready', 'नमुना तयार असेल तर IUI दिवस', 'iui-day'),
      option('visit', 'How to plan this at the visit', 'भेटीत हे कसे ठरवायचे', 'iui-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-day': {
    en: 'You come in around ovulation. Placement takes a few minutes, and most people leave the same day. Cramping can be mild. The team tells you which day to test. What else about that day?',
    mr: 'अंडमोचनाभोवती यावे लागते. ठेवणे काही मिनिटांत, बहुतेक जण त्याच दिवशी जातात. हलके मुरगळणे होऊ शकते. तपासणीचा दिवस टीम सांगते. त्या दिवसाबद्दल आणखी काय?',
    options: [
      option('work', 'Can she go to work after?', 'नंतर कामावर जाता येईल का?', 'iui-work'),
      option('cycles', 'How many such days are usually planned', 'असे किती दिवस सहसा ठरतात', 'iui-cycles'),
      option('test', 'When is the pregnancy test?', 'गर्भ तपासणी केव्हा?', 'iui-test-day'),
    ],
  },
  'iui-work': {
    en: 'Most people return to ordinary work the same day. Heavy lifting or travel that day is asked of the doctor for your cycle. Next: how many cycles, or the test day?',
    mr: 'बहुतेक जण त्याच दिवशी नेहमीच्या कामावर जातात. जड उचल किंवा त्या दिवशीचा प्रवास तुमच्या सायकलसाठी डॉक्टरांना विचारा. पुढे: किती सायकल्स, की तपासणी दिवस?',
    options: [
      option('cycles', 'How many cycles are planned', 'किती सायकल्स ठरतात', 'iui-cycles'),
      option('test', 'The pregnancy-test day', 'गर्भ-तपासणी दिवस', 'iui-test-day'),
      option('enough', "That's enough on the day", 'त्या दिवसावर एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-test-day': {
    en: 'Test on the day written by the clinic. An earlier home test can mislead. If it is negative, do not start the next IUI on your own. What would you like now?',
    mr: 'क्लिनिकने लिहिलेल्या दिवशी तपासा. लवकरची घरगुती तपासणी दिशाभूल करू शकते. नकारात्मक असेल तर पुढचा IUI स्वतः सुरू करू नका. आत्ता काय हवे?',
    options: [
      option('failed', 'If it is negative', 'नकारात्मक झाली तर', 'iui-failed-count'),
      option('cycles', 'How many tries before a review', 'पुनरावलोकनाआधी किती प्रयत्न', 'iui-cycles'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-cycles': {
    en: 'A plan often reviews a few timed cycles before the next step. Age, the tubes, and the sperm report decide the number. This chat does not fix that number. What is your question on the count?',
    mr: 'योजनेत पुढच्या पायरीआधी काही वेळेवरच्या सायकल्स बघितल्या जातात. वय, नळ्या आणि शुक्राणू अहवाल संख्या ठरवतात. ही संख्या हा चॅट ठरवत नाही. संख्येबद्दल काय विचारता?',
    options: [
      option('few', 'What if two cycles already failed', 'दोन सायकल्स आधीच अयशस्वी तर', 'iui-failed-count'),
      option('vs', 'When do they move to IVF', 'IVF कडे केव्हा जातात', 'iui-vs'),
      option('visit', 'Who writes that number for us', 'आमच्यासाठी ती संख्या कोण लिहितो', 'iui-visit'),
    ],
  },
  'iui-failed-count': {
    en: 'After unsuccessful IUI the doctor reviews ovulation, the tubes, and the sperm report. How many IUI cycles were already done?',
    mr: 'अयशस्वी IUI नंतर डॉक्टर अंडमोचन, नळ्या आणि शुक्राणू अहवाल बघतात. किती IUI सायकल्स आधी झाल्या?',
    options: [
      option('one', 'One', 'एक', 'iui-failed'),
      option('many', 'Two or more', 'दोन किंवा अधिक', 'iui-failed'),
      option('preg', 'There was a pregnancy that did not continue', 'गर्भधारणा झाली पण पुढे गेली नाही', 'iui-loss'),
    ],
  },
  'iui-failed': {
    en: 'That review decides whether another IUI is reasonable or whether IVF should be discussed. Bring every IUI sheet. What do you want from that review?',
    mr: 'त्या पुनरावलोकनात आणखी IUI योग्य आहे का, की IVF बोलायचे ते ठरते. प्रत्येक IUI शीट आणा. त्या पुनरावलोकनातून काय हवे?',
    options: [
      option('vs', 'How IVF would differ', 'IVF कसे वेगळे असेल', 'iui-vs'),
      option('another', 'Could one more IUI still be tried?', 'आणखी एक IUI करता येईल का?', 'iui-cycles'),
      option('visit', 'What to carry to that review', 'त्या पुनरावलोकनाला काय नेवे', 'iui-visit'),
    ],
  },
  'iui-loss': {
    en: 'I am sorry you went through that. The next IUI or IVF is a medical review, not a chat decision. Bring those papers if you have them. What would help now?',
    mr: 'त्यातून जावे लागले याबद्दल खेद आहे. पुढचा IUI किंवा IVF वैद्यकीय पुनरावलोकन आहे, चॅटचा निर्णय नाही. कागद असतील तर आणा. आत्ता काय मदत होईल?',
    options: [
      option('visit', 'How to prepare that visit', 'ती भेट कशी तयार करावी', 'iui-visit'),
      option('vs', 'Whether IVF is discussed after that', 'त्यानंतर IVF बोलला जातो का', 'iui-vs'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-vs': {
    en: 'IUI helps sperm reach the uterus. IVF creates the embryo in the laboratory. Tubes, age, sperm numbers, and earlier cycles decide which one is discussed. Which of those is your concern?',
    mr: 'IUI शुक्राणूंना गर्भाशयापर्यंत मदत करतो. IVF गर्भ प्रयोगशाळेत तयार करतो. नळ्या, वय, शुक्राणूंची संख्या आणि आधीच्या सायकल्सवर कोणते बोलायचे ते ठरते. यापैकी तुमची चिंता कोणती?',
    options: [
      option('tubes', 'The tubes', 'नळ्या', 'iui-tube-test'),
      option('sperm', 'The semen report', 'सिमेन अहवाल', 'iui-sperm-low'),
      option('failed', 'Earlier IUI already failed', 'आधीचा IUI आधीच अयशस्वी', 'iui-failed-count'),
    ],
  },
  'iui-visit': {
    en: 'Bring a semen report, ultrasound, and any tube test you already have. The doctor confirms whether IUI is the right first step. What should I add?',
    mr: 'सिमेन अहवाल, सोनोग्राफी आणि नळ्यांची तपासणी असेल तर आणा. IUI ही योग्य पहिली पायरी आहे का ते डॉक्टर ठरवतात. काय जोडू?',
    options: [
      option('how', 'How the procedure is done if IUI is chosen', 'IUI ठरले तर प्रक्रिया कशी', 'iui-how'),
      option('cycles', 'How many cycles they may write', 'किती सायकल्स लिहू शकतात', 'iui-cycles'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-close': {
    en: 'We can pause here. If another IUI point is still on your mind, pick it below.',
    mr: 'इथे थांबू शकतो. IUI बद्दल आणखी काही असेल तर खाली निवडा.',
    options: [
      option('how', 'How is IUI done?', 'IUI कसा होतो?', 'iui-how'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'iui-visit'),
      option('again', 'Start these questions again', 'हे प्रश्न पुन्हा सुरू करा', 'iui-intro'),
    ],
  },

  'male-intro': {
    en: 'Male fertility usually starts with the semen report. Hormones or a procedure to find sperm come only if needed. Where should we start?',
    mr: 'पुरुष फर्टिलिटी सहसा सिमेन अहवालाने सुरू होते. हार्मोन किंवा शुक्राणू शोधण्याची प्रक्रिया गरज असेल तरच. कुठून सुरू करू?',
    options: [
      option('semen', 'Tell me about the semen test', 'सिमेन तपासणी सांगा', 'male-semen'),
      option('low', 'The count is low, or there is no sperm', 'संख्या कमी आहे, किंवा शुक्राणू नाहीत', 'male-count'),
      option('report', 'We already have a report', 'आमच्याकडे अहवाल आहे', 'male-report'),
    ],
  },
  'male-semen': {
    en: 'A semen test looks at count, movement, and shape. One report is not the whole story. What would you like next about that test?',
    mr: 'सिमेन तपासणीत संख्या, हालचाल आणि आकार बघितला जातो. एक अहवाल पूर्ण कहाणी नसतो. त्या तपासणीबद्दल पुढे काय हवे?',
    options: [
      option('prep', 'How should he prepare?', 'तयारी कशी करावी?', 'male-prep'),
      option('low', 'What if the result is low?', 'निकाल कमी असेल तर?', 'male-count'),
      option('repeat', 'Why is it sometimes repeated?', 'कधी कधी पुन्हा का करतात?', 'male-repeat'),
    ],
  },
  'male-prep': {
    en: 'The laboratory usually asks for 2 to 5 days without ejaculation, and the sample is given at the clinic. Fever or recent illness can change a report. Has he been unwell in the last few weeks?',
    mr: 'प्रयोगशाळा सहसा २ ते ५ दिवस स्खलनाविना सांगते, आणि नमुना क्लिनिकमध्ये द्यावा लागतो. ताप किंवा अलीकडील आजार अहवाल बदलू शकतो. गेल्या काही आठवड्यांत तो आजारी होता का?',
    options: [
      option('yes', 'Yes, fever or illness recently', 'हो, अलीकडे ताप किंवा आजार', 'male-repeat'),
      option('no', 'No, he has been well', 'नाही, तो ठीक होता', 'male-read'),
      option('meds', 'He takes other medicines', 'तो इतर औषधे घेतो', 'male-meds'),
    ],
  },
  'male-meds': {
    en: 'Bring a list of current medicines to the visit. Do not stop a prescribed medicine from this chat. The doctor reads that list with the semen report. What next?',
    mr: 'सध्याच्या औषधांची यादी भेटीला आणा. या चॅटवरून लिहिलेली औषधे थांबवू नका. डॉक्टर ती यादी सिमेन अहवालासोबत वाचतात. पुढे काय?',
    options: [
      option('read', 'What the report itself shows', 'अहवालात काय दिसते', 'male-read'),
      option('visit', 'The first visit with that list', 'त्या यादीसह पहिली भेट', 'male-visit'),
      option('enough', "That's enough on medicines", 'औषधांवर एवढे पुरे', 'male-close'),
    ],
  },
  'male-repeat': {
    en: 'A repeat after illness or after the correct 2 to 5 day window is common. One low report is not a final label. After the repeat, the doctor chooses the path. What do you want on that path?',
    mr: 'आजारानंतर किंवा योग्य २ ते ५ दिवसांच्या खिडकीनंतर पुन्हा तपासणी सामान्य आहे. एक कमी अहवाल अंतिम लेबल नसतो. पुन्हा झाल्यावर डॉक्टर मार्ग निवडतात. त्या मार्गावर काय हवे?',
    options: [
      option('low', 'If it is still low', 'अजून कमी असेल तर', 'male-count'),
      option('normal', 'If it comes back normal', 'सामान्य आला तर', 'male-normal'),
      option('visit', 'The visit that reads both reports', 'दोन्ही अहवाल वाचणारी भेट', 'male-visit'),
    ],
  },
  'male-read': {
    en: 'The report lists count, movement, and shape. The doctor reads it with history. A repeat is sometimes needed. Which number are you most worried about?',
    mr: 'अहवालात संख्या, हालचाल आणि आकार असतो. डॉक्टर तो इतिहासासह वाचतात. कधी पुन्हा लागते. कोणत्या संख्येची जास्त चिंता आहे?',
    options: [
      option('count', 'The count', 'संख्या', 'male-count'),
      option('move', 'The movement', 'हालचाल', 'male-count'),
      option('zero', 'It said no sperm', 'शुक्राणू नाहीत असे म्हटले', 'male-zero'),
    ],
  },
  'male-count': {
    en: 'A low count may still suit IUI, or IVF with ICSI. If no sperm is seen, hormones and a possible procedure are discussed. Which of those is your situation?',
    mr: 'कमी संख्या IUI ला किंवा ICSI सह IVF ला लागू शकते. शुक्राणू दिसले नाहीत तर हार्मोन आणि शक्य प्रक्रिया बोलली जाते. यापैकी तुमची स्थिती कोणती?',
    options: [
      option('low', 'Count or movement is low, but not zero', 'संख्या किंवा हालचाल कमी, शून्य नाही', 'male-low-path'),
      option('zero', 'No sperm was seen', 'शुक्राणू दिसले नाहीत', 'male-zero'),
      option('unsure', 'We only heard it was “low”', 'फक्त “कमी” ऐकले', 'male-report'),
    ],
  },
  'male-low-path': {
    en: 'Then the doctor may repeat the test, try IUI with a washed sample, or plan IVF with ICSI. That choice is from the numbers plus the partner’s reports. What should I explain?',
    mr: 'मग डॉक्टर तपासणी पुन्हा, धुतलेल्या नमुन्यासह IUI, किंवा ICSI सह IVF ठरवू शकतात. ही निवड संख्या आणि जोडीदाराच्या अहवालांवरून. काय समजावू?',
    options: [
      option('iui', 'Could IUI still be tried?', 'IUI अजून करता येईल का?', 'male-treat'),
      option('icsi', 'What ICSI would mean', 'ICSI म्हणजे काय', 'male-icsi'),
      option('repeat', 'Repeating the semen test first', 'आधी सिमेन तपासणी पुन्हा', 'male-repeat'),
    ],
  },
  'male-report': {
    en: 'Good. What was the main finding on that report?',
    mr: 'चांगले. त्या अहवालात मुख्य निष्कर्ष काय होता?',
    options: [
      option('low', 'Count or movement is low', 'संख्या किंवा हालचाल कमी आहे', 'male-low-path'),
      option('zero', 'No sperm was seen', 'शुक्राणू दिसले नाहीत', 'male-zero'),
      option('normal', 'It was called normal', 'सामान्य म्हटले होते', 'male-normal'),
    ],
  },
  'male-zero': {
    en: 'No sperm in the sample needs a doctor’s review. Some causes are hormonal. Others need a procedure such as TESA or Micro-TESE. Have hormone tests already been done?',
    mr: 'नमुन्यात शुक्राणू नसणे डॉक्टरांच्या तपासणीशिवाय समजत नाही. काही कारणे हार्मोनची. काहींसाठी TESA किंवा Micro-TESE. हार्मोन तपासण्या आधी झाल्या आहेत का?',
    options: [
      option('yes', 'Yes, some hormone tests', 'हो, काही हार्मोन तपासण्या', 'male-hormones'),
      option('no', 'Not yet', 'अजून नाही', 'male-hormones'),
      option('child', 'There was a pregnancy in the past', 'आधी गर्भधारणा झाली होती', 'male-past-preg'),
    ],
  },
  'male-hormones': {
    en: 'Hormone results help the doctor know whether the issue is production or blockage. Bring those papers even if you do not understand the names. What should I explain next?',
    mr: 'हार्मोन निकाल डॉक्टरांना उत्पादन की अडथळा ते समजण्यास मदत करतात. नावे कळली नाहीत तरी कागद आणा. पुढे काय सांगू?',
    options: [
      option('retrieval', 'Finding sperm by a procedure', 'प्रक्रियेने शुक्राणू शोधणे', 'male-retrieval'),
      option('icsi', 'Using that sperm with ICSI', 'तो शुक्राणू ICSI ने वापरणे', 'male-icsi'),
      option('visit', 'The visit that reads hormones and semen together', 'हार्मोन आणि सिमेन एकत्र वाचणारी भेट', 'male-visit'),
    ],
  },
  'male-past-preg': {
    en: 'A past pregnancy is useful history, but a new semen report is still needed. The doctor reads both. What is the current report showing?',
    mr: 'आधीची गर्भधारणा उपयुक्त इतिहास आहे, पण नवीन सिमेन अहवाल अजून लागतो. डॉक्टर दोन्ही वाचतात. सध्याचा अहवाल काय दाखवतो?',
    options: [
      option('low', 'Now it is low', 'आता कमी आहे', 'male-low-path'),
      option('zero', 'Now no sperm is seen', 'आता शुक्राणू दिसत नाहीत', 'male-zero'),
      option('none', 'We do not have a new report yet', 'नवीन अहवाल अजून नाही', 'male-prep'),
    ],
  },
  'male-normal': {
    en: 'A normal semen report does not finish the couple’s evaluation. Ovulation, tubes, and timing are still reviewed. Has her testing started?',
    mr: 'सामान्य सिमेन अहवालाने जोडप्याची तपासणी संपत नाही. अंडमोचन, नळ्या आणि वेळ अजून बघितली जाते. तिच्या तपासण्या सुरू झाल्या आहेत का?',
    options: [
      option('yes', 'Yes, some tests for her', 'हो, तिच्या काही तपासण्या', 'male-couple'),
      option('no', 'Not yet', 'अजून नाही', 'male-couple'),
      option('iui', 'They already spoke of IUI', 'IUI आधीच बोलले', 'male-treat'),
    ],
  },
  'male-couple': {
    en: 'The plan often adds the partner’s ultrasound and hormone tests, and a tube check when IUI or natural conception is considered. What should I explain on the male side still?',
    mr: 'योजनेत जोडीदाराची सोनोग्राफी आणि हार्मोन तपासणी अनेकदा येते. IUI किंवा नैसर्गिक गर्भधारणा बघत असाल तर नळ्यांची तपासणीही. पुरुष बाजूवर अजून काय सांगू?',
    options: [
      option('treat', 'How a normal sample might still be used', 'सामान्य नमुना कसा वापरला जाऊ शकतो', 'male-treat'),
      option('visit', 'The couple’s first visit', 'जोडप्याची पहिली भेट', 'male-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-treat': {
    en: 'From the report, the plan may be timed intercourse, IUI with a prepared sample, or IVF with ICSI. The doctor chooses after the full reports. Which path should I explain?',
    mr: 'अहवालानुसार योजना वेळेवरचे संबंध, तयार नमुन्यासह IUI, किंवा ICSI सह IVF असू शकते. पूर्ण अहवालांनंतर डॉक्टर निवडतात. कोणता मार्ग सांगू?',
    options: [
      option('icsi', 'ICSI', 'ICSI', 'male-icsi'),
      option('iui', 'IUI with a washed sample', 'धुतलेल्या नमुन्यासह IUI', 'male-iui-note'),
      option('prep', 'How to prepare the next sample', 'पुढचा नमुना कसा तयार करावा', 'male-prep'),
    ],
  },
  'male-iui-note': {
    en: 'For IUI the lab washes the sample the same morning and places active sperm in the uterus around ovulation. That still needs open tubes. Want ICSI instead, or the visit?',
    mr: 'IUI साठी प्रयोगशाळा त्याच सकाळी नमुना धुतो आणि अंडमोचनाभोवती सक्रिय शुक्राणू गर्भाशयात ठेवते. याला खुल्या नळ्या लागतात. त्याऐवजी ICSI हवे, की भेट?',
    options: [
      option('icsi', 'Explain ICSI', 'ICSI सांगा', 'male-icsi'),
      option('visit', 'The visit that chooses IUI or IVF', 'IUI की IVF ठरवणारी भेट', 'male-visit'),
      option('enough', "That's enough on IUI", 'IUI वर एवढे पुरे', 'male-close'),
    ],
  },
  'male-icsi': {
    en: 'During IVF, ICSI selects one sperm and places it into one egg. It is used when count or movement is low, or fertilisation failed earlier. What is linked for you?',
    mr: 'IVF दरम्यान ICSI एक शुक्राणू निवडून एका अंड्यात ठेवतो. संख्या किंवा हालचाल कमी असेल, किंवा आधी फलन झाले नसेल, तेव्हा. तुमच्याशी काय जुळते?',
    options: [
      option('retrieval', 'Sperm may need to be found by a procedure', 'शुक्राणू प्रक्रियेने शोधावे लागू शकतात', 'male-retrieval'),
      option('ivf', 'Then what does the IVF day look like', 'मग IVF चा दिवस कसा', 'male-visit'),
      option('enough', "That's enough on ICSI", 'ICSI वर एवढे पुरे', 'male-close'),
    ],
  },
  'male-retrieval': {
    en: 'If the sample has no sperm, a surgeon may look in the epididymis or testis. Sperm that is found can be used for ICSI or frozen. Has a urologist already been seen?',
    mr: 'नमुन्यात शुक्राणू नसतील तर शल्यचिकित्सक एपिडिडायमिस किंवा वृषणात शोधू शकतात. मिळालेले शुक्राणू ICSI साठी किंवा गोठवण्यासाठी. युरोलॉजिस्ट आधी भेटला आहे का?',
    options: [
      option('yes', 'Yes', 'हो', 'male-visit'),
      option('no', 'Not yet', 'अजून नाही', 'male-visit'),
      option('icsi', 'How ICSI uses that sperm', 'ICSI तो शुक्राणू कसा वापरतो', 'male-icsi'),
    ],
  },
  'male-visit': {
    en: 'Bring every semen report. The visit covers history, an examination if needed, and the next test. Please do not start internet medicines before that visit. What should I add?',
    mr: 'सगळे सिमेन अहवाल आणा. भेटीत इतिहास, गरज असल्यास तपासणी, आणि पुढची तपासणी. त्याआधी इंटरनेटवरील औषधे सुरू करू नका. काय जोडू?',
    options: [
      option('prep', 'Semen test preparation', 'सिमेन तपासणीची तयारी', 'male-prep'),
      option('icsi', 'ICSI if the report stays low', 'अहवाल कमी राहिला तर ICSI', 'male-icsi'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-close': {
    en: 'We can pause here. If another male-fertility point is still on your mind, pick it below.',
    mr: 'इथे थांबू शकतो. पुरुष फर्टिलिटी बद्दल आणखी काही असेल तर खाली निवडा.',
    options: [
      option('semen', 'Tell me about the semen test', 'सिमेन तपासणी सांगा', 'male-semen'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
      option('again', 'Start these questions again', 'हे प्रश्न पुन्हा सुरू करा', 'male-intro'),
    ],
  },

  'test-intro': {
    en: 'Fertility testing looks for a clear reason for the delay, for both partners. What would you like to know?',
    mr: 'फर्टिलिटी तपासणी विलंबाचे स्पष्ट कारण दोघांसाठी शोधते. काय जाणून घ्यायचे आहे?',
    options: [
      option('which', 'Which tests are usually done?', 'कोणत्या तपासण्या सहसा होतात?', 'test-which'),
      option('have', 'We already have some reports', 'आमच्याकडे काही अहवाल आहेत', 'test-reports'),
      option('prep', 'How should we prepare?', 'तयारी कशी करावी?', 'test-prep'),
    ],
  },
  'test-which': {
    en: 'A first look is often a semen analysis, an ultrasound, and hormone blood tests. A tube test is added only when the doctor needs it. Whose tests should I start with?',
    mr: 'पहिली पाहणी अनेकदा सिमेन विश्लेषण, सोनोग्राफी आणि हार्मोन रक्त तपासणी असते. नळ्यांची तपासणी डॉक्टरला गरज वाटली तरच. कोणाच्या तपासण्यांपासून सुरू करू?',
    options: [
      option('her', "The tests for her", 'तिच्या तपासण्या', 'test-her'),
      option('him', 'The tests for him', 'त्याच्या तपासण्या', 'test-him'),
      option('together', 'What is done together first', 'आधी एकत्र काय होते', 'test-together'),
    ],
  },
  'test-together': {
    en: 'Many couples start both tracks in the same week: her scan timed to the cycle, his semen test after 2 to 5 days, and blood tests as dated. The coordinator writes the order. What next?',
    mr: 'अनेक जोडपी त्याच आठवड्यात दोन्ही मार्ग सुरू करतात: तिचा स्कॅन पाळीनुसार, त्याची सिमेन तपासणी २ ते ५ दिवसांनंतर, आणि रक्त तपासणी दिनांकित. क्रम कोऑर्डिनेटर लिहितात. पुढे काय?',
    options: [
      option('her', 'Her tests in more detail', 'तिच्या तपासण्या अधिक', 'test-her'),
      option('him', 'His tests in more detail', 'त्याच्या तपासण्या अधिक', 'test-him'),
      option('visit', 'The visit that writes this order', 'हा क्रम लिहिणारी भेट', 'test-visit'),
    ],
  },
  'test-her': {
    en: 'For her this often includes cycle history, ultrasound, and hormones such as AMH, FSH, TSH, and prolactin. Some are timed to period days. Do you already track the first day of the period?',
    mr: 'तिच्यासाठी अनेकदा पाळीचा इतिहास, सोनोग्राफी आणि AMH, FSH, TSH, prolactin. काही पाळीच्या दिवसांवर. पाळीचा पहिला दिवस नोंद करता का?',
    options: [
      option('yes', 'Yes', 'हो', 'test-her-day'),
      option('no', 'Not really', 'फारसे नाही', 'test-her-day'),
      option('irregular', 'Periods are irregular', 'पाळी अनियमित आहे', 'test-irregular'),
    ],
  },
  'test-her-day': {
    en: 'The coordinator uses that date to book the scan. Blood tests may be the same week or on a named cycle day. What else about her tests?',
    mr: 'कोऑर्डिनेटर त्या तारखेवरून स्कॅन ठरवतात. रक्त तपासणी त्याच आठवड्यात किंवा सांगितलेल्या पाळी दिवशी. तिच्या तपासण्यांबद्दल आणखी काय?',
    options: [
      option('tubes', 'The tube test', 'नळ्यांची तपासणी', 'test-tubes'),
      option('amh', 'What AMH is for', 'AMH कशासाठी', 'test-amh'),
      option('him', 'His tests after this', 'यानंतर त्याच्या तपासण्या', 'test-him'),
    ],
  },
  'test-irregular': {
    en: 'Irregular cycles may need more than one scan before a tube test is timed. Hormone tests still help. Has any scan already been done this year?',
    mr: 'अनियमित पाळीला नळ्यांची तपासणी ठरवण्याआधी एकापेक्षा जास्त स्कॅन लागू शकतात. हार्मोन तपासण्या अजून मदत करतात. या वर्षी स्कॅन झाले का?',
    options: [
      option('yes', 'Yes, we have a scan', 'हो, स्कॅन आहे', 'test-amh'),
      option('no', 'Not yet', 'अजून नाही', 'test-visit'),
      option('tablets', 'She is on cycle tablets', 'तिच्या पाळीच्या गोळ्या चालू आहेत', 'test-prep'),
    ],
  },
  'test-amh': {
    en: 'AMH is one marker of egg reserve. It is not a pregnancy prediction by itself. The doctor reads it with the scan and age. What should I add?',
    mr: 'AMH अंड्यांच्या साठ्याचा एक निर्देशक आहे. तो एकटा गर्भधारणेचा अंदाज नाही. डॉक्टर तो स्कॅन आणि वयासोबत वाचतात. काय जोडू?',
    options: [
      option('low', 'What if AMH is called low', 'AMH कमी म्हटले तर', 'test-amh-low'),
      option('tubes', 'Do we still need a tube test', 'नळ्यांची तपासणी अजून लागते का', 'test-tubes'),
      option('visit', 'How this is explained at the visit', 'भेटीत हे कसे समजवले जाते', 'test-visit'),
    ],
  },
  'test-amh-low': {
    en: 'A low AMH changes counselling and sometimes the treatment path, but it is not read alone. Bring the lab printout. The visit decides IUI, IVF, or more tests. What next?',
    mr: 'कमी AMH सल्ला आणि कधी उपचारमार्ग बदलतो, पण एकटा वाचला जात नाही. लॅब प्रिंटआउट आणा. भेट IUI, IVF, किंवा आणखी तपासण्या ठरवते. पुढे काय?',
    options: [
      option('him', 'His semen report still matters', 'त्याचा सिमेन अहवाल अजून महत्त्वाचा', 'test-him'),
      option('visit', 'The visit that reads AMH with the scan', 'AMH स्कॅनसोबत वाचणारी भेट', 'test-visit'),
      option('enough', "That's enough on AMH", 'AMH वर एवढे पुरे', 'test-close'),
    ],
  },
  'test-him': {
    en: 'For him the first test is usually a semen analysis. Hormones or a scan are added only if that report or the history needs them. What do you want on his side?',
    mr: 'त्याच्यासाठी पहिली तपासणी सहसा सिमेन विश्लेषण. हार्मोन किंवा स्कॅन अहवाल किंवा इतिहास मागेल तरच. त्याच्या बाजूने काय हवे?',
    options: [
      option('sample', 'How does he give the sample?', 'नमुना कसा द्यावा?', 'test-sample'),
      option('low', 'What if the report is low?', 'अहवाल कमी असेल तर?', 'test-low'),
      option('her', 'Back to her tests', 'परत तिच्या तपासण्या', 'test-her'),
    ],
  },
  'test-tubes': {
    en: 'An HSG or a saline scan checks whether the tubes are open. It is booked on particular cycle days. Have you been told you need this, or not yet?',
    mr: 'HSG किंवा सलाइन स्कॅन नळ्या खुल्या आहेत का ते बघतो. तो पाळीच्या ठराविक दिवसांवर. ही तपासणी लागेल असे सांगितले आहे, की अजून नाही?',
    options: [
      option('yes', 'Yes, it was advised', 'हो, सुचवली आहे', 'test-tubes-prep'),
      option('no', 'Not yet', 'अजून नाही', 'test-visit'),
      option('blocked', 'We already heard there is a block', 'ब्लॉक आहे असे आधीच ऐकले', 'test-blocked'),
    ],
  },
  'test-tubes-prep': {
    en: 'The coordinator books it on a cycle day after the period. Mild cramping can happen. The film is read with you later. What if the result shows a block?',
    mr: 'पाळीनंतरच्या दिवशी कोऑर्डिनेटर बुक करतात. हलके मुरगळणे होऊ शकते. फिल्म नंतर सोबत वाचली जाते. निकालात ब्लॉक दिसला तर?',
    options: [
      option('blocked', 'Tell me that path', 'तो मार्ग सांगा', 'test-blocked'),
      option('visit', 'The visit after the tube test', 'नळ्या तपासणीनंतरची भेट', 'test-visit'),
      option('enough', "That's enough on the tube test", 'नळ्या तपासणीवर एवढे पुरे', 'test-close'),
    ],
  },
  'test-blocked': {
    en: 'If the tubes are blocked, IUI is usually not the path. The doctor may discuss IVF. The scan decides this, not the chat. What would you like now?',
    mr: 'नळ्या बंद असतील तर IUI सहसा मार्ग नसतो. डॉक्टर IVF बोलू शकतात. स्कॅन हा निर्णय करतो, चॅट नाही. आत्ता काय हवे?',
    options: [
      option('visit', 'The visit that reads that scan', 'तो स्कॅन वाचणारी भेट', 'test-visit'),
      option('him', 'Does his semen report still matter?', 'त्याचा सिमेन अहवाल अजून महत्त्वाचा का?', 'test-him'),
      option('enough', "That's enough on tubes", 'नळ्यांवर एवढे पुरे', 'test-close'),
    ],
  },
  'test-sample': {
    en: 'The sample is given at the clinic, usually after 2 to 5 days without ejaculation. The coordinator gives the time. Illness in the last weeks can change the result. What next?',
    mr: 'नमुना क्लिनिकमध्ये, सहसा २ ते ५ दिवस स्खलनाविना. वेळ कोऑर्डिनेटर सांगतात. गेल्या आठवड्यांतील आजार निकाल बदलू शकतो. पुढे काय?',
    options: [
      option('low', 'What a low report means', 'कमी अहवालाचा अर्थ', 'test-low'),
      option('repeat', 'If he had fever, then what', 'ताप आला होता तर', 'test-repeat'),
      option('her', "And her tests the same week", 'त्याच आठवड्यात तिच्या तपासण्या', 'test-her'),
    ],
  },
  'test-repeat': {
    en: 'After fever, a repeat semen test is often waited for a few weeks. Do not start internet medicines in that gap. What else?',
    mr: 'तापानंतर सिमेन तपासणी काही आठवडे वाट बघून पुन्हा करतात. त्या अंतराने इंटरनेटवरील औषधे सुरू करू नका. आणखी काय?',
    options: [
      option('low', 'If the repeat is still low', 'पुन्हा कमी आला तर', 'test-low'),
      option('visit', 'Who dates that repeat', 'तो पुन्हा केव्हा ठरवतो', 'test-visit'),
      option('enough', "That's enough on repeating", 'पुन्हा करण्यावर एवढे पुरे', 'test-close'),
    ],
  },
  'test-low': {
    en: 'One low semen report is often repeated. After that the doctor may plan more tests, IUI, or IVF with ICSI. The numbers decide this. What is your next question on a low report?',
    mr: 'एक कमी सिमेन अहवाल अनेकदा पुन्हा केला जातो. मग डॉक्टर आणखी तपासण्या, IUI, किंवा ICSI सह IVF ठरवू शकतात. संख्या हा निर्णय करते. कमी अहवालावर पुढचा प्रश्न काय?',
    options: [
      option('repeat', 'Repeating it first', 'आधी पुन्हा करणे', 'test-repeat'),
      option('her', 'Her tests still go on in parallel', 'तिच्या तपासण्या समांतर चालू', 'test-her'),
      option('visit', 'The visit that reads a low report', 'कमी अहवाल वाचणारी भेट', 'test-visit'),
    ],
  },
  'test-reports': {
    en: 'Bring ultrasound, blood tests, semen reports, and any HSG or surgery notes. What do you already have with you?',
    mr: 'सोनोग्राफी, रक्त तपासण्या, सिमेन अहवाल आणि HSG किंवा शस्त्रक्रियेच्या नोंदी आणा. आधीच काय आहे?',
    options: [
      option('her', 'Blood tests or an ultrasound', 'रक्त तपासणी किंवा सोनोग्राफी', 'test-her'),
      option('him', 'A semen report', 'सिमेन अहवाल', 'test-him'),
      option('tubes', 'A tube test or surgery notes', 'नळ्यांची तपासणी किंवा शस्त्रक्रिया', 'test-tubes'),
    ],
  },
  'test-prep': {
    en: 'Bring a list of current medicines, and the first day of the last period if you track it. A semen test needs the 2 to 5 day window. What should I add to that list?',
    mr: 'सध्याची औषधे लिहून आणा, आणि पाळीचा पहिला दिवस माहित असेल तर तोही. सिमेन तपासणीला २ ते ५ दिवसांची खिडकी लागते. त्या यादीत काय जोडू?',
    options: [
      option('which', 'Which tests those papers are for', 'ते कागद कोणत्या तपासण्यांसाठी', 'test-which'),
      option('sample', 'The semen-test window again', 'सिमेन तपासणीची खिडकी पुन्हा', 'test-sample'),
      option('visit', 'What the first visit does with all this', 'पहिली भेट या सगळ्याचे काय करते', 'test-visit'),
    ],
  },
  'test-visit': {
    en: 'The visit takes a history for both partners, reads old reports, and writes only the tests still needed. What do you want that visit to settle first?',
    mr: 'भेटीत दोघांचा इतिहास, जुने अहवाल, आणि फक्त उरलेल्या तपासण्या लिहिल्या जातात. ती भेट आधी काय ठरवावी असे वाटते?',
    options: [
      option('which', 'The usual first tests', 'नेहमीच्या पहिल्या तपासण्या', 'test-which'),
      option('order', 'The order in the same week', 'त्याच आठवड्यातील क्रम', 'test-together'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
    ],
  },
  'test-close': {
    en: 'We can pause here. If another testing point is still on your mind, pick it below.',
    mr: 'इथे थांबू शकतो. तपासणी बद्दल आणखी काही असेल तर खाली निवडा.',
    options: [
      option('which', 'Which tests are usually done?', 'कोणत्या तपासण्या सहसा होतात?', 'test-which'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
      option('again', 'Start these questions again', 'हे प्रश्न पुन्हा सुरू करा', 'test-intro'),
    ],
  },

  'fu-intro': {
    en: 'This is for care you already have at Sequel IVF. What is this follow-up about?',
    mr: 'हे Sequel IVF येथील आधीच्या उपचारांसाठी आहे. हा फॉलो अप कशासाठी आहे?',
    options: [
      option('report', 'A scan or blood-test report', 'स्कॅन किंवा रक्त तपासणीचा अहवाल', 'fu-report'),
      option('cycle', 'After IUI or IVF', 'IUI किंवा IVF नंतर', 'fu-cycle'),
      option('meds', 'A question about medicine', 'औषधाबद्दल प्रश्न', 'fu-meds'),
    ],
  },
  'fu-report': {
    en: 'Alright. Do you already have that report with you?',
    mr: 'ठीक. तो अहवाल आधीच तुमच्याकडे आहे का?',
    options: [
      option('yes', 'Yes, I have it', 'हो, माझ्याकडे आहे', 'fu-bring'),
      option('clinic', 'The clinic already has it', 'क्लिनिककडे आधीच आहे', 'fu-clinic'),
      option('wait', 'Not yet', 'अजून नाही', 'fu-wait'),
    ],
  },
  'fu-bring': {
    en: 'Bring the report and your earlier file. The doctor compares it with the last plan before any medicine is changed. Which report is it?',
    mr: 'अहवाल आणि आधीची फाइल आणा. औषध बदलण्याआधी डॉक्टर तो मागच्या योजनेशी तुलना करतात. कोणता अहवाल आहे?',
    options: [
      option('scan', 'A scan', 'स्कॅन', 'fu-scan'),
      option('blood', 'A blood test', 'रक्त तपासणी', 'fu-blood'),
      option('beta', 'A pregnancy-test blood result', 'गर्भ-तपासणीचा रक्त निकाल', 'fu-beta-result'),
    ],
  },
  'fu-scan': {
    en: 'A scan is read with the cycle day and the medicines you are on. Do not change those medicines from the image alone. Is this a lining scan, a follicle scan, or you are not sure?',
    mr: 'स्कॅन पाळीचा दिवस आणि चालू औषधांसोबत वाचला जातो. फक्त इमेज बघून औषधे बदलू नका. हे अस्तराचे स्कॅन, फॉलिकल स्कॅन, की खात्री नाही?',
    options: [
      option('lining', 'Lining for a transfer', 'ट्रान्सफरसाठी अस्तर', 'fu-frozen'),
      option('foll', 'Follicles during injections', 'इंजेक्शन दरम्यान फॉलिकल्स', 'fu-stim-fu'),
      option('unsure', 'Not sure of the name', 'नाव खात्री नाही', 'fu-ask'),
    ],
  },
  'fu-blood': {
    en: 'Hormone blood tests are compared with the last sheet. Do not add or stop an injection because of one number from this chat. What was the test for, as far as you know?',
    mr: 'हार्मोन रक्त तपासण्या मागच्या शीटशी तुलना होतात. एका संख्येवरून या चॅटने इंजेक्शन थांबवू किंवा वाढवू नका. तपासणी कशासाठी होती, जितके कळते?',
    options: [
      option('stim', 'During stimulation', 'उत्तेजनादरम्यान', 'fu-stim-fu'),
      option('beta', 'Pregnancy test', 'गर्भ तपासणी', 'fu-beta-result'),
      option('other', 'Thyroid or other hormones', 'थायरॉइड किंवा इतर हार्मोन', 'fu-ask'),
    ],
  },
  'fu-beta-result': {
    en: 'A pregnancy-test result is read with the day it was taken. Do not start or stop medicines from a home kit. Was this the clinic blood test, or a home kit?',
    mr: 'गर्भ-तपासणीचा निकाल घेतलेल्या दिवसासोबत वाचला जातो. घरगुती किटवरून औषधे सुरू किंवा थांबवू नका. ही क्लिनिकची रक्त तपासणी होती, की घरगुती किट?',
    options: [
      option('clinic', 'Clinic blood test', 'क्लिनिकची रक्त तपासणी', 'fu-next'),
      option('home', 'Home kit', 'घरगुती किट', 'fu-test'),
      option('neg', 'It was negative', 'नकारात्मक होती', 'fu-next'),
    ],
  },
  'fu-stim-fu': {
    en: 'During stimulation, scan and blood results change the next dose — only the team does that. Severe pain or fainting: call the same day. What is the question from today’s report?',
    mr: 'उत्तेजनात स्कॅन आणि रक्त निकाल पुढचा डोस बदलतात — फक्त टीम करते. तीव्र वेदना किंवा बेशुद्धी: त्याच दिवशी कॉल. आजच्या अहवालावर प्रश्न काय?',
    options: [
      option('dose', 'Whether the dose will change', 'डोस बदलेल का', 'fu-ask'),
      option('side', 'Bloating or pain', 'फुगीरता किंवा वेदना', 'fu-side'),
      option('egg', 'When collection might be', 'काढणे केव्हा असेल', 'fu-ask'),
    ],
  },
  'fu-clinic': {
    en: 'If the test was done here, the file is already with the team. Come at the time the coordinator gave you. Do you need the time confirmed, or a question for the doctor?',
    mr: 'तपासणी येथे झाली असेल तर फाइल टीमसोबत आहे. कोऑर्डिनेटरने दिलेल्या वेळेला या. वेळ निश्चित हवी, की डॉक्टरांसाठी प्रश्न?',
    options: [
      option('ask', 'What to ask the doctor', 'डॉक्टरांना काय विचारावे', 'fu-ask'),
      option('meds', 'A medicine question meantime', 'दरम्यान औषधाचा प्रश्न', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-wait': {
    en: 'Wait for the report before changing the plan. If the date has passed and you have not heard, ask the coordinator to check the file. How long have you been waiting?',
    mr: 'योजना बदलण्याआधी अहवालाची वाट बघा. तारीख गेली आणि काही कळले नाही तर कोऑर्डिनेटरना फाइल तपासायला सांगा. किती दिवस वाट पाहत आहात?',
    options: [
      option('soon', 'The date is still ahead', 'तारीख अजून पुढे आहे', 'fu-meds'),
      option('late', 'The date has already passed', 'तारीख आधीच गेली', 'fu-clinic'),
      option('bring', 'What to carry when it arrives', 'आल्यावर काय आणावे', 'fu-bring'),
    ],
  },
  'fu-cycle': {
    en: 'Got it. Which step are you in right now?',
    mr: 'समजले. तुम्ही आत्ता कोणत्या टप्प्यावर आहात?',
    options: [
      option('test', 'Waiting for a pregnancy test', 'गर्भ तपासणीची वाट पाहत आहे', 'fu-test'),
      option('next', 'The test was negative', 'तपासणी नकारात्मक होती', 'fu-next'),
      option('frozen', 'A later frozen transfer', 'नंतरचा गोठवलेला ट्रान्सफर', 'fu-frozen'),
    ],
  },
  'fu-test': {
    en: 'Test on the day the clinic gave you. An earlier home test can mislead. Call the same day for heavy bleeding or severe pain. What is the question while you wait?',
    mr: 'क्लिनिकने सांगितलेल्या दिवशी तपासणी करा. लवकरची घरगुती तपासणी दिशाभूल करू शकते. जास्त रक्तस्त्राव किंवा तीव्र वेदना असतील तर त्याच दिवशी कॉल. वाट पाहताना प्रश्न काय?',
    options: [
      option('meds', 'Whether to continue the medicines', 'औषधे चालू ठेवायची का', 'fu-meds'),
      option('next', 'If the test is negative', 'तपासणी नकारात्मक झाली तर', 'fu-next'),
      option('bleed', 'There is some spotting', 'थोडे स्पॉटिंग आहे', 'fu-spot'),
    ],
  },
  'fu-spot': {
    en: 'Spotting after IUI or transfer can happen and still needs the planned test day. Heavy bleeding or severe pain is a same-day call. This chat cannot say if it is implantation. What next?',
    mr: 'IUI किंवा ट्रान्सफरनंतर स्पॉटिंग होऊ शकते आणि ठरवलेली तपासणी अजून लागते. जास्त रक्तस्त्राव किंवा तीव्र वेदना: त्याच दिवशी कॉल. हे इम्प्लांटेशन आहे का हे चॅट सांगत नाही. पुढे काय?',
    options: [
      option('call', 'We will call the clinic', 'आम्ही क्लिनिकला कॉल करू', 'fu-clinic'),
      option('test', 'Wait for the given test day', 'दिलेल्या तपासणी दिवसाची वाट', 'fu-test'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-next': {
    en: 'A negative test needs a review. Do not start the next cycle on your own. The doctor looks at the last response and sets the next dates. What do you want from that review?',
    mr: 'नकारात्मक तपासणीला पुनरावलोकन लागते. पुढची सायकल स्वतः सुरू करू नका. डॉक्टर मागचा प्रतिसाद बघून पुढच्या तारखा ठरवतात. त्या पुनरावलोकनातून काय हवे?',
    options: [
      option('bring', 'What to carry', 'काय आणावे', 'fu-bring'),
      option('frozen', 'We still have frozen embryos', 'गोठवलेले गर्भ अजून आहेत', 'fu-frozen'),
      option('meds', 'Whether to stop current medicines', 'सध्याची औषधे थांबवायची का', 'fu-meds'),
    ],
  },
  'fu-frozen': {
    en: 'A frozen transfer follows the lining and the calendar the clinic sets. Do not start those medicines early. Has a lining scan already been dated?',
    mr: 'गोठवलेला ट्रान्सफर अस्तरावर आणि क्लिनिकच्या दिनदर्शिकेवर चालतो. ती औषधे लवकर सुरू करू नका. अस्तराचा स्कॅन दिनांकित झाला आहे का?',
    options: [
      option('yes', 'Yes, a scan date is given', 'हो, स्कॅन तारीख मिळाली आहे', 'fu-ask'),
      option('no', 'Not yet', 'अजून नाही', 'fu-clinic'),
      option('meds', 'We already started some tablets', 'काही गोळ्या आधीच सुरू केल्या', 'fu-meds'),
    ],
  },
  'fu-meds': {
    en: 'Do not stop or add an injection from this chat. What is the question about?',
    mr: 'या चॅटमधून इंजेक्शन थांबवू किंवा वाढवू नका. प्रश्न कशाबद्दल आहे?',
    options: [
      option('missed', 'I missed a dose', 'एक डोस राहिला', 'fu-missed'),
      option('side', "I'm having side effects", 'मला दुष्परिणाम होत आहेत', 'fu-side'),
      option('schedule', 'I need the schedule again', 'वेळापत्रक पुन्हा हवे आहे', 'fu-schedule'),
    ],
  },
  'fu-missed': {
    en: 'Note the time you missed and call the clinic the same day. Do not take a double dose unless the doctor tells you to. Was this an injection, a tablet, or a vaginal medicine?',
    mr: 'चुकलेली वेळ लिहून ठेवा आणि त्याच दिवशी क्लिनिकला कॉल करा. डॉक्टर सांगितल्याशिवाय दुप्पट डोस घेऊ नका. हे इंजेक्शन, गोळी, की योनिमार्गातील औषध होते?',
    options: [
      option('inj', 'An injection', 'इंजेक्शन', 'fu-clinic'),
      option('tab', 'A tablet', 'गोळी', 'fu-clinic'),
      option('side', 'There are side effects too', 'दुष्परिणाम सुद्धा आहेत', 'fu-side'),
    ],
  },
  'fu-side': {
    en: 'Mild bloating can happen with stimulation. Severe pain, fainting, heavy bleeding, or trouble breathing needs a call to the clinic now. Which of these is closer?',
    mr: 'उत्तेजनात हलकी फुगीरता होऊ शकते. तीव्र वेदना, बेशुद्ध पडणे, जास्त रक्तस्त्राव किंवा श्वास घेण्यास त्रास: आता क्लिनिकला कॉल. यापैकी काय जवळ आहे?',
    options: [
      option('mild', 'Mild bloating or soreness', 'हलकी फुगीरता किंवा दुखणे', 'fu-ask'),
      option('severe', 'Severe pain or bleeding', 'तीव्र वेदना किंवा रक्तस्त्राव', 'fu-clinic'),
      option('missed', 'I also missed a dose', 'एक डोस सुद्धा राहिला', 'fu-missed'),
    ],
  },
  'fu-schedule': {
    en: 'The coordinator reads dates from your file. Keep a photo of the last prescription ready. Do you need injection times, scan dates, or the test day?',
    mr: 'कोऑर्डिनेटर तारखा फाइलमधून सांगतात. शेवटच्या प्रिस्क्रिप्शनचा फोटो तयार ठेवा. इंजेक्शनच्या वेळा हव्या, स्कॅन तारखा, की तपासणी दिवस?',
    options: [
      option('inj', 'Injection times', 'इंजेक्शनच्या वेळा', 'fu-clinic'),
      option('scan', 'Scan dates', 'स्कॅन तारखा', 'fu-clinic'),
      option('cycle', 'Where we are after the last cycle', 'शेवटच्या सायकलनंतर कुठे आहोत', 'fu-cycle'),
    ],
  },
  'fu-ask': {
    en: 'Useful questions for the doctor: what this report changed, the next date, and which medicines continue. Which of those is yours?',
    mr: 'डॉक्टरांसाठी उपयोगी प्रश्न: या अहवालाने काय बदलले, पुढची तारीख, आणि कोणती औषधे चालू राहतात. यापैकी तुमचा कोणता?',
    options: [
      option('meds', 'Which medicines continue', 'कोणती औषधे चालू राहतात', 'fu-meds'),
      option('date', 'The next date', 'पुढची तारीख', 'fu-clinic'),
      option('cycle', 'The plan after this cycle', 'या सायकलनंतरची योजना', 'fu-cycle'),
    ],
  },
  'fu-close': {
    en: 'We can pause here. If another follow-up point is still on your mind, pick it below.',
    mr: 'इथे थांबू शकतो. फॉलो अप बद्दल आणखी काही असेल तर खाली निवडा.',
    options: [
      option('report', 'I have a report question', 'अहवालाबद्दल प्रश्न आहे', 'fu-report'),
      option('cycle', "It's after a cycle", 'सायकलनंतर आहे', 'fu-cycle'),
      option('again', 'Start these questions again', 'हे प्रश्न पुन्हा सुरू करा', 'fu-intro'),
    ],
  },
}

export function findService(id) {
  return LOOKING_FOR.find((item) => item.id === id) || null
}

export function getNode(id) {
  return NODES[id] || null
}

export function normalizePhone(value) {
  let digits = String(value || '').replace(/\D/g, '')
  if (digits.startsWith('91') && digits.length === 12) digits = digits.slice(2)
  if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits) ? digits : ''
}

export function isValidName(value) {
  return /^[\p{L}][\p{L}\s.'-]{1,59}$/u.test(String(value || '').trim())
}

export function copy(lang) {
  const mr = lang === 'mr'
  return {
    launcher: mr ? 'चॅट' : 'Chat',
    title: mr ? 'पेशंट केअर' : 'Patient Care',
    clinic: 'Sequel IVF · Hadapsar',
    close: mr ? 'चॅट बंद करा' : 'Close chat',
    open: mr ? 'पेशंट केअर चॅट उघडा' : 'Open patient care chat',
    newChat: mr ? 'नवीन चॅट' : 'New chat',
    namaste: 'Namaste 🙏',
    typing: mr ? 'उत्तर तयार करत आहे' : 'Thinking of a reply',
    safe: mr
      ? 'तुमची चॅट सुरक्षित आहे. तुम्ही सांगितलेली माहिती आमच्या क्लिनिक टीमकडे गोपनीय राहते.'
      : 'Your chat is private and safe. What you share stays confidential with our clinic team.',
    looking: mr ? 'तुम्ही काय शोधत आहात?' : 'What are you looking for?',
    askName: mr ? 'तुमचे नाव सांगाल का?' : 'May I have your name?',
    askNameBefore: mr
      ? 'पुढे जाण्याआधी, तुमचे नाव कळेल का?'
      : 'Before we proceed further, may I know your name?',
    askPhone: (name) =>
      mr
        ? `धन्यवाद, ${name}. पुढे जाण्यासाठी संपर्क क्रमांक द्याल का?`
        : `Thank you, ${name}. Please share your contact number so we can continue.`,
    badName: mr ? 'कृपया पूर्ण नाव लिहा.' : 'Please share your full name.',
    badPhone: mr
      ? 'कृपया 10 अंकी मोबाइल नंबर लिहा.'
      : 'Please share a 10-digit mobile number.',
    failed: mr
      ? 'विनंती जतन झाली नाही. खाली पुन्हा पाठवा. प्रश्न चालू ठेवू शकता.'
      : 'The request was not saved. Send it again below. You can keep answering.',
    retry: mr ? 'विनंती पुन्हा पाठवा' : 'Send the request again',
    appointmentNote: mr
      ? 'भेट बुक करण्यासाठी खालील consultation फॉर्म उघडा.'
      : 'Open the consultation form below to book your visit.',
    appointmentButton: 'Book Your Consultation',
    namePh: mr ? 'तुमचे नाव' : 'Your name',
    phonePh: mr ? 'संपर्क क्रमांक' : 'Contact number',
    send: mr ? 'पाठवा' : 'Send',
  }
}
