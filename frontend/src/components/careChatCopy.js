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
      option('long', 'More than 3 years now', 'आता ३ वर्षांपेक्षा जास्त', 'ivf-tests'),
    ],
  },
  'ivf-early': {
    en: 'Under a year is still early for many couples. A visit can still help if periods are irregular, there is a known condition, or you simply want a clear plan. Have any tests been done yet?',
    mr: 'एक वर्षापेक्षा कमी अनेक जोडप्यांसाठी अजून लवकर असते. पाळी अनियमित असेल, आधीची तक्रार असेल, किंवा फक्त स्पष्ट योजना हवी असेल, तर भेट उपयोगी पडते. काही तपासण्या झाल्या आहेत का?',
    options: [
      option('none', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('some', 'Yes, blood tests or a scan', 'हो, रक्त तपासणी किंवा सोनोग्राफी', 'ivf-visit'),
      option('unsure', "We're not sure", 'आम्हाला खात्री नाही', 'ivf-visit'),
    ],
  },
  'ivf-tests': {
    en: 'Understood. At this stage the doctor usually starts with tests. Have those already been done?',
    mr: 'समजले. या टप्प्यावर डॉक्टर सहसा तपासण्यांनी सुरू करतात. त्या आधी झाल्या आहेत का?',
    options: [
      option('none', 'Not yet', 'अजून नाही', 'ivf-tests-none'),
      option('some', 'Yes, for one or both of us', 'हो, एकासाठी किंवा दोघांसाठी', 'ivf-visit'),
      option('told', 'A doctor already asked us to consider IVF', 'डॉक्टरांनी आधीच IVF सुचवले आहे', 'ivf-why'),
    ],
  },
  'ivf-tests-none': {
    en: 'That is fine. The first visit looks at your history and plans only the tests you need — often a scan, hormone tests, and a semen analysis. What would help you most right now?',
    mr: 'ठीक आहे. पहिल्या भेटीत इतिहास बघितला जातो आणि फक्त गरजेच्या तपासण्या ठरतात — अनेकदा सोनोग्राफी, हार्मोन तपासणी आणि सिमेन विश्लेषण. आत्ता काय जाणून घ्यायचे आहे?',
    options: [
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('who', 'Who does IVF actually help?', 'IVF खरे तर कोणाला मदत करते?', 'ivf-who'),
      option('time', 'How long does a cycle take?', 'सायकलला किती वेळ लागतो?', 'ivf-time'),
    ],
  },
  'ivf-past': {
    en: 'Alright. Which treatment have you already tried?',
    mr: 'ठीक. आधी कोणता उपचार करून पाहिला आहे?',
    options: [
      option('iui', 'We did IUI', 'आम्ही IUI केले होते', 'ivf-after-iui'),
      option('ivf', 'We did IVF or ICSI', 'आम्ही IVF किंवा ICSI केले होते', 'ivf-after-ivf'),
      option('meds', 'Only tablets or injections', 'फक्त गोळ्या किंवा इंजेक्शन', 'ivf-after-meds'),
    ],
  },
  'ivf-after-iui': {
    en: 'When IUI has not worked, or when the tubes, egg reserve, or sperm need the laboratory, IVF is often the next talk. What would you like me to explain?',
    mr: 'IUI ने काम झाले नसेल, किंवा नळ्या, अंड्यांचा साठा किंवा शुक्राणूंसाठी प्रयोगशाळा लागणार असेल, तेव्हा पुढे IVF बोलला जातो. काय समजावू?',
    options: [
      option('diff', 'How is IVF different from IUI?', 'IVF आणि IUI मध्ये काय फरक आहे?', 'ivf-vs-iui'),
      option('visit', 'What happens at the next visit?', 'पुढच्या भेटीत काय होते?', 'ivf-visit'),
      option('time', 'How long does a cycle take?', 'सायकलला किती वेळ लागतो?', 'ivf-time'),
    ],
  },
  'ivf-after-ivf': {
    en: 'Then a review looks at the earlier cycle — eggs, fertilisation, embryos, and the transfer. What should I walk you through?',
    mr: 'मग पुनरावलोकनात आधीची सायकल बघितली जाते — अंडी, फलन, गर्भ आणि ट्रान्सफर. काय समजावू?',
    options: [
      option('review', 'What does that review include?', 'त्या पुनरावलोकनात काय असते?', 'ivf-review'),
      option('lab', 'Tell me about the lab and ICSI', 'प्रयोगशाळा आणि ICSI सांगा', 'ivf-lab'),
      option('time', 'How long would the next cycle take?', 'पुढच्या सायकलला किती वेळ लागेल?', 'ivf-time'),
    ],
  },
  'ivf-after-meds': {
    en: 'Tablets or injections are often an earlier step. IVF comes in when a laboratory plan is the clearer path. What would you like next?',
    mr: 'गोळ्या किंवा इंजेक्शन अनेकदा आधीची पायरी असतात. प्रयोगशाळेची योजना स्पष्ट मार्ग असेल तेव्हा IVF येतो. पुढे काय जाणून घ्यायचे?',
    options: [
      option('why', 'When do doctors consider IVF?', 'डॉक्टर IVF कधी विचारात घेतात?', 'ivf-why'),
      option('tests', 'What tests come before IVF?', 'IVF आधी कोणत्या तपासण्या होतात?', 'ivf-tests-none'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
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
    en: 'Injections help a group of eggs to grow. Egg collection is a short day-care procedure. The dose is decided after your tests, not from this chat. What else would help?',
    mr: 'इंजेक्शनने अंड्यांचा गट वाढवला जातो. अंडी काढणे ही छोट्या दिवसाची प्रक्रिया आहे. डोस तपासण्यांनंतर डॉक्टर ठरवतात, या चॅटमधून नाही. आणखी काय जाणून घ्यायचे?',
    options: [
      option('time', 'How long does this take?', 'याला किती वेळ लागतो?', 'ivf-time'),
      option('lab', 'Then what happens in the lab?', 'मग प्रयोगशाळेत काय होते?', 'ivf-lab'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
    ],
  },
  'ivf-lab': {
    en: 'Embryologists fertilise the eggs, watch the embryos, and select one for transfer. ICSI places one sperm into one egg when the sperm needs that help. Want me to go further?',
    mr: 'भ्रूणतज्ञ अंडी फलित करतात, गर्भ बघतात, आणि ट्रान्सफरसाठी एक निवडतात. शुक्राणूंना मदत हवी असेल तेव्हा ICSI मध्ये एक शुक्राणू एका अंड्यात ठेवला जातो. पुढे जाऊ का?',
    options: [
      option('icsi', 'Who may need ICSI?', 'ICSI कोणाला लागू शकते?', 'ivf-icsi'),
      option('transfer', 'Tell me about embryo transfer', 'गर्भ ट्रान्सफर सांगा', 'ivf-transfer'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
    ],
  },
  'ivf-icsi': {
    en: 'ICSI is used for a low sperm count, poor movement, an earlier fertilisation failure, or sperm collected by a procedure. The semen report decides this, not the chat. Anything else?',
    mr: 'कमी शुक्राणू, कमी हालचाल, आधी फलन न होणे, किंवा प्रक्रियेने काढलेले शुक्राणू असल्यास ICSI वापरले जाते. सिमेन अहवाल हा निर्णय करतो, चॅट नाही. आणखी काही?',
    options: [
      option('time', 'How long does a cycle take?', 'सायकलला किती वेळ लागतो?', 'ivf-time'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-transfer': {
    en: 'A selected embryo is placed in the uterus. Spare embryos can be frozen. Long bed rest is not the plan; the team gives the after-care for your cycle. What next?',
    mr: 'निवडलेला गर्भ गर्भाशयात ठेवला जातो. उरलेले गर्भ गोठवता येतात. दीर्घ विश्रांतीची गरज नसते. तुमच्या सायकलची पुढची काळजी टीम सांगते. पुढे काय?',
    options: [
      option('time', 'How long does a cycle take?', 'सायकलला किती वेळ लागतो?', 'ivf-time'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-time': {
    en: 'Stimulation is often about two to three weeks, then a few laboratory days before transfer. Your tests and the clinic calendar set the exact dates. Want to keep going?',
    mr: 'उत्तेजन अनेकदा दोन ते तीन आठवडे असते, मग ट्रान्सफरआधी प्रयोगशाळेचे काही दिवस. अचूक तारखा तपासण्या आणि क्लिनिकच्या दिनदर्शिकेवर अवलंबून असतात. पुढे चालू ठेवू का?',
    options: [
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('who', 'Who does IVF actually help?', 'IVF खरे तर कोणाला मदत करते?', 'ivf-who'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-who': {
    en: 'IVF is considered for blocked tubes, a low egg reserve, endometriosis, an unexplained delay, unsuccessful IUI, or when sperm needs ICSI. The doctor confirms this after reports. What would you like next?',
    mr: 'बंद नळ्या, कमी अंड्यांचा साठा, एंडोमेट्रिओसिस, स्पष्ट नसलेला विलंब, अयशस्वी IUI, किंवा शुक्राणूंसाठी ICSI लागेल तेव्हा IVF विचारात घेतला जातो. अहवालांनंतर डॉक्टर हे ठरवतात. पुढे काय?',
    options: [
      option('cycle', 'Walk me through a cycle', 'सायकल कशी चालते ते सांगा', 'ivf-cycle'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-why': {
    en: 'That recommendation usually comes up when the tubes are blocked, IUI has not worked, sperm or eggs need the laboratory, or you want a defined next plan. The visit confirms it. What should I explain?',
    mr: 'नळ्या बंद असतील, IUI ने काम झाले नसेल, शुक्राणू किंवा अंड्यांना प्रयोगशाळा लागणार असेल, किंवा पुढची स्पष्ट योजना हवी असेल, तेव्हा अशी शिफारस येते. भेटीत हे निश्चित होते. काय समजावू?',
    options: [
      option('cycle', 'Walk me through a cycle', 'सायकल कशी चालते ते सांगा', 'ivf-cycle'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-vs-iui': {
    en: 'IUI places prepared sperm in the uterus, and fertilisation happens in the body. IVF fertilises the egg in the laboratory and then transfers an embryo. Want the next piece?',
    mr: 'IUI मध्ये तयार शुक्राणू गर्भाशयात ठेवले जातात आणि फलन शरीरात होते. IVF मध्ये अंड्याचे फलन प्रयोगशाळेत होते आणि मग गर्भ ट्रान्सफर केला जातो. पुढचा भाग सांगू का?',
    options: [
      option('cycle', 'Walk me through an IVF cycle', 'IVF सायकल कशी चालते ते सांगा', 'ivf-cycle'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-review': {
    en: 'The doctor reads the earlier cycle and decides whether the next plan changes the medicines, the laboratory method, or the transfer timing. What else would help?',
    mr: 'डॉक्टर आधीची सायकल बघतात आणि पुढच्या योजनेत औषधे, प्रयोगशाळेची पद्धत किंवा ट्रान्सफरची वेळ बदलायची का ते ठरवतात. आणखी काय मदत होईल?',
    options: [
      option('lab', 'Tell me about the lab and ICSI', 'प्रयोगशाळा आणि ICSI सांगा', 'ivf-lab'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'ivf-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-visit': {
    en: 'Bring old reports if you have them: semen analysis, ultrasound, and hormone tests. The visit is a history, an examination if needed, and a written plan. IVF does not start the same day. Anything else?',
    mr: 'जुने अहवाल असतील तर आणा: सिमेन विश्लेषण, सोनोग्राफी आणि हार्मोन तपासण्या. भेटीत इतिहास, गरज असल्यास तपासणी, आणि लेखी योजना असते. IVF त्याच दिवशी सुरू होत नाही. आणखी काही?',
    options: [
      option('cycle', 'Walk me through a cycle', 'सायकल कशी चालते ते सांगा', 'ivf-cycle'),
      option('time', 'How long does a cycle take?', 'सायकलला किती वेळ लागतो?', 'ivf-time'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'ivf-close'),
    ],
  },
  'ivf-close': {
    en: 'We can pause here. If something else about IVF is on your mind, pick it below.',
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
      option('open', 'We were told the tubes are open', 'नळ्या खुल्या आहेत असे सांगितले', 'iui-how'),
      option('failed', 'An earlier IUI did not work', 'आधीचा IUI यशस्वी झाला नाही', 'iui-failed'),
    ],
  },
  'iui-tests': {
    en: 'That is a normal starting point. Before IUI the doctor usually checks ovulation, the tubes, and a semen analysis. What would you like next?',
    mr: 'इथून सुरू करणे सामान्य आहे. IUI आधी डॉक्टर सहसा अंडमोचन, नळ्या आणि सिमेन विश्लेषण तपासतात. पुढे काय जाणून घ्यायचे?',
    options: [
      option('day', 'What is procedure day like?', 'प्रक्रियेचा दिवस कसा असतो?', 'iui-day'),
      option('cycles', 'How many cycles are usually planned?', 'सहसा किती सायकल्स ठरतात?', 'iui-cycles'),
      option('vs', 'When is IVF discussed instead?', 'त्याऐवजी IVF कधी बोलला जातो?', 'iui-vs'),
    ],
  },
  'iui-how': {
    en: 'The laboratory washes the sample and keeps the active sperm. Around ovulation that sample is placed in the uterus. The visit is short. Want the next detail?',
    mr: 'प्रयोगशाळा नमुना धुतो आणि सक्रिय शुक्राणू ठेवते. अंडमोचनाभोवती तो नमुना गर्भाशयात ठेवला जातो. भेट छोटी असते. पुढचा तपशील हवा आहे का?',
    options: [
      option('day', 'What does that day feel like?', 'तो दिवस कसा वाटतो?', 'iui-day'),
      option('cycles', 'How many cycles do people usually do?', 'लोक सहसा किती सायकल्स करतात?', 'iui-cycles'),
      option('failed', 'What if IUI does not work?', 'IUI ने काम न झाले तर?', 'iui-failed'),
    ],
  },
  'iui-day': {
    en: 'You come in around ovulation. Placement takes a few minutes, and most people leave the same day. The team tells you which day to test. Anything else?',
    mr: 'अंडमोचनाभोवती यावे लागते. ठेवणे काही मिनिटांत होते, आणि बहुतेक जण त्याच दिवशी जातात. कोणत्या दिवशी तपासणी करायची ते टीम सांगते. आणखी काही?',
    options: [
      option('cycles', 'How many cycles are usually planned?', 'सहसा किती सायकल्स ठरतात?', 'iui-cycles'),
      option('vs', 'Should we think IUI or IVF?', 'IUI विचारायचे की IVF?', 'iui-vs'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-cycles': {
    en: 'A plan often reviews a few timed cycles before the next step. Age, the tubes, and the sperm report decide the number. This chat does not fix that number. What else?',
    mr: 'योजनेत पुढच्या पायरीआधी काही वेळेवरच्या सायकल्स बघितल्या जातात. वय, नळ्या आणि शुक्राणू अहवाल संख्या ठरवतात. ही संख्या हा चॅट ठरवत नाही. आणखी काय?',
    options: [
      option('failed', 'What if it does not work?', 'काम न झाले तर?', 'iui-failed'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'iui-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-failed': {
    en: 'After unsuccessful IUI the doctor reviews ovulation, the tubes, and the sperm report, and may then discuss IVF. What would help you now?',
    mr: 'अयशस्वी IUI नंतर डॉक्टर अंडमोचन, नळ्या आणि शुक्राणू अहवाल बघतात, आणि मग IVF बोलू शकतात. आत्ता काय मदत होईल?',
    options: [
      option('vs', 'How is IVF different?', 'IVF कसे वेगळे आहे?', 'iui-vs'),
      option('visit', 'Tell me about the review visit', 'पुनरावलोकन भेट कशी असते ते सांगा', 'iui-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-vs': {
    en: 'IUI helps sperm reach the uterus. IVF creates the embryo in the laboratory. Tubes, age, and earlier cycles decide which one is discussed. The visit settles this. What next?',
    mr: 'IUI शुक्राणूंना गर्भाशयापर्यंत मदत करतो. IVF गर्भ प्रयोगशाळेत तयार करतो. नळ्या, वय आणि आधीच्या सायकल्सवर कोणता उपचार बोलायचा ते ठरते. भेटीत हे निश्चित होते. पुढे काय?',
    options: [
      option('how', 'How is IUI done?', 'IUI कसा होतो?', 'iui-how'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'iui-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-visit': {
    en: 'Bring a semen report, ultrasound, and any tube test you already have. The doctor confirms whether IUI is the right first step. Want more detail?',
    mr: 'सिमेन अहवाल, सोनोग्राफी आणि नळ्यांची तपासणी असेल तर आणा. IUI ही योग्य पहिली पायरी आहे का ते डॉक्टर ठरवतात. आणखी तपशील हवा आहे का?',
    options: [
      option('how', 'How is the procedure done?', 'प्रक्रिया कशी होते?', 'iui-how'),
      option('cycles', 'How many cycles are usually planned?', 'सहसा किती सायकल्स ठरतात?', 'iui-cycles'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'iui-close'),
    ],
  },
  'iui-close': {
    en: 'We can pause here. If something else about IUI is on your mind, pick it below.',
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
    en: 'A semen test looks at count, movement, and shape. One report is not the whole story. What would you like next?',
    mr: 'सिमेन तपासणीत संख्या, हालचाल आणि आकार बघितला जातो. एक अहवाल पूर्ण कहाणी नसतो. पुढे काय जाणून घ्यायचे?',
    options: [
      option('prep', 'How should he prepare?', 'तयारी कशी करावी?', 'male-prep'),
      option('low', 'What if the result is low?', 'निकाल कमी असेल तर?', 'male-count'),
      option('treat', 'What paths are possible after that?', 'त्यानंतर कोणते मार्ग शक्य आहेत?', 'male-treat'),
    ],
  },
  'male-prep': {
    en: 'The laboratory usually asks for 2 to 5 days without ejaculation, and the sample is given at the clinic. The coordinator confirms the time. What else?',
    mr: 'प्रयोगशाळा सहसा २ ते ५ दिवस स्खलनाविना राहायला सांगते, आणि नमुना क्लिनिकमध्ये द्यावा लागतो. वेळ कोऑर्डिनेटर सांगतात. आणखी काय?',
    options: [
      option('read', 'What does the report show?', 'अहवालात काय दिसते?', 'male-read'),
      option('low', 'What if the count is low?', 'संख्या कमी असेल तर?', 'male-count'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
    ],
  },
  'male-read': {
    en: 'The report lists count, movement, and shape. The doctor reads it with your history. A repeat test is sometimes needed. Want to go further?',
    mr: 'अहवालात संख्या, हालचाल आणि आकार असतो. डॉक्टर तो इतिहासासह वाचतात. कधी कधी तपासणी पुन्हा करावी लागते. पुढे जाऊ का?',
    options: [
      option('low', 'The count is low or zero', 'संख्या कमी किंवा शून्य आहे', 'male-count'),
      option('treat', 'What paths are possible after that?', 'त्यानंतर कोणते मार्ग शक्य आहेत?', 'male-treat'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
    ],
  },
  'male-count': {
    en: 'A low count may still suit IUI, or IVF with ICSI. If no sperm is seen, the doctor looks at hormones and whether sperm can be collected by a procedure. What should I explain?',
    mr: 'कमी संख्या IUI ला किंवा ICSI सह IVF ला लागू शकते. शुक्राणू दिसले नाहीत तर डॉक्टर हार्मोन आणि प्रक्रियेने शुक्राणू मिळतात का ते बघतात. काय समजावू?',
    options: [
      option('icsi', 'What does ICSI mean?', 'ICSI म्हणजे काय?', 'male-icsi'),
      option('retrieval', 'How do you find sperm by a procedure?', 'प्रक्रियेने शुक्राणू कसे शोधतात?', 'male-retrieval'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
    ],
  },
  'male-report': {
    en: 'Good. What was the main finding on that report?',
    mr: 'चांगले. त्या अहवालात मुख्य निष्कर्ष काय होता?',
    options: [
      option('low', 'Count or movement is low', 'संख्या किंवा हालचाल कमी आहे', 'male-count'),
      option('zero', 'No sperm was seen', 'शुक्राणू दिसले नाहीत', 'male-zero'),
      option('normal', 'It was called normal', 'सामान्य म्हटले होते', 'male-normal'),
    ],
  },
  'male-zero': {
    en: 'No sperm in the sample needs a doctor’s review. Some causes are hormonal. Others need a procedure such as TESA or Micro-TESE to look for sperm. What would you like me to explain?',
    mr: 'नमुन्यात शुक्राणू नसणे डॉक्टरांच्या तपासणीशिवाय समजत नाही. काही कारणे हार्मोनची असतात. काहींसाठी TESA किंवा Micro-TESE सारखी प्रक्रिया लागते. काय समजावू?',
    options: [
      option('retrieval', 'What does that procedure mean?', 'ती प्रक्रिया म्हणजे काय?', 'male-retrieval'),
      option('icsi', 'What does ICSI mean?', 'ICSI म्हणजे काय?', 'male-icsi'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
    ],
  },
  'male-normal': {
    en: 'A normal semen report does not finish the couple’s evaluation. Ovulation, tubes, and timing are still reviewed. What next?',
    mr: 'सामान्य सिमेन अहवालाने जोडप्याची तपासणी संपत नाही. अंडमोचन, नळ्या आणि वेळ अजून बघितली जाते. पुढे काय?',
    options: [
      option('couple', 'What else is checked then?', 'मग आणखी काय तपासले जाते?', 'male-couple'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-couple': {
    en: 'The plan often adds the partner’s ultrasound and hormone tests, and a tube check when IUI or natural conception is being considered. Want more on how the sample is used?',
    mr: 'योजनेत जोडीदाराची सोनोग्राफी आणि हार्मोन तपासणी अनेकदा येते. IUI किंवा नैसर्गिक गर्भधारणा बघत असाल तर नळ्यांची तपासणीही. नमुना कसा वापरला जातो ते सांगू का?',
    options: [
      option('treat', 'How is the sample used?', 'नमुना कसा वापरला जातो?', 'male-treat'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-treat': {
    en: 'From the report, the plan may be timed intercourse, IUI with a prepared sample, or IVF with ICSI. The doctor chooses after the full reports. What should I explain?',
    mr: 'अहवालानुसार योजना वेळेवरचे संबंध, तयार नमुन्यासह IUI, किंवा ICSI सह IVF असू शकते. पूर्ण अहवालांनंतर डॉक्टर निवडतात. काय समजावू?',
    options: [
      option('icsi', 'What does ICSI mean?', 'ICSI म्हणजे काय?', 'male-icsi'),
      option('prep', 'How should he prepare a sample?', 'नमुन्याची तयारी कशी करावी?', 'male-prep'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
    ],
  },
  'male-icsi': {
    en: 'During IVF, ICSI selects one sperm and places it into one egg. It is used when count or movement is low, or fertilisation failed earlier. Anything else?',
    mr: 'IVF दरम्यान ICSI एक शुक्राणू निवडून एका अंड्यात ठेवतो. संख्या किंवा हालचाल कमी असेल, किंवा आधी फलन झाले नसेल, तेव्हा तो वापरला जातो. आणखी काही?',
    options: [
      option('retrieval', 'How do you find sperm by a procedure?', 'प्रक्रियेने शुक्राणू कसे शोधतात?', 'male-retrieval'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-retrieval': {
    en: 'If the sample has no sperm, a surgeon may look in the epididymis or testis. Sperm that is found can be used for ICSI or frozen. Want ICSI explained too?',
    mr: 'नमुन्यात शुक्राणू नसतील तर शल्यचिकित्सक एपिडिडायमिस किंवा वृषणात शोधू शकतात. मिळालेले शुक्राणू ICSI साठी वापरता येतात किंवा गोठवता येतात. ICSI सुद्धा सांगू का?',
    options: [
      option('icsi', 'What does ICSI mean?', 'ICSI म्हणजे काय?', 'male-icsi'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'male-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-visit': {
    en: 'Bring every semen report. The visit covers history, an examination if needed, and the next test. Please do not start internet medicines before that visit. What else?',
    mr: 'सगळे सिमेन अहवाल आणा. भेटीत इतिहास, गरज असल्यास तपासणी, आणि पुढची तपासणी असते. त्याआधी इंटरनेटवरील औषधे सुरू करू नका. आणखी काय?',
    options: [
      option('prep', 'How should he prepare for the semen test?', 'सिमेन तपासणीची तयारी कशी करावी?', 'male-prep'),
      option('icsi', 'What does ICSI mean?', 'ICSI म्हणजे काय?', 'male-icsi'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'male-close'),
    ],
  },
  'male-close': {
    en: 'We can pause here. If something else about male fertility is on your mind, pick it below.',
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
    en: 'A first look is often a semen analysis, an ultrasound, and hormone blood tests. A tube test is added only when the doctor needs it. Whose tests should I explain?',
    mr: 'पहिली पाहणी अनेकदा सिमेन विश्लेषण, सोनोग्राफी आणि हार्मोन रक्त तपासणी असते. नळ्यांची तपासणी डॉक्टरला गरज वाटली तरच. कोणाच्या तपासण्या सांगू?',
    options: [
      option('her', "The tests for her", 'तिच्या तपासण्या', 'test-her'),
      option('him', 'The tests for him', 'त्याच्या तपासण्या', 'test-him'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
    ],
  },
  'test-her': {
    en: 'For her this often includes cycle history, ultrasound, and hormones such as AMH, FSH, TSH, and prolactin. The visit decides the exact list. What else?',
    mr: 'तिच्यासाठी अनेकदा पाळीचा इतिहास, सोनोग्राफी आणि AMH, FSH, TSH, prolactin सारखे हार्मोन येतात. अचूक यादी भेटीत ठरते. आणखी काय?',
    options: [
      option('tubes', 'What about the tube test?', 'नळ्यांची तपासणी कशी असते?', 'test-tubes'),
      option('him', 'And the tests for him?', 'आणि त्याच्या तपासण्या?', 'test-him'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
    ],
  },
  'test-him': {
    en: 'For him the first test is usually a semen analysis. Hormones or a scan are added only if that report or the history needs them. What next?',
    mr: 'त्याच्यासाठी पहिली तपासणी सहसा सिमेन विश्लेषण असते. हार्मोन किंवा स्कॅन अहवाल किंवा इतिहास मागेल तरच. पुढे काय?',
    options: [
      option('sample', 'How does he give the sample?', 'नमुना कसा द्यावा?', 'test-sample'),
      option('low', 'What if the report is low?', 'अहवाल कमी असेल तर?', 'test-low'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
    ],
  },
  'test-tubes': {
    en: 'An HSG or a saline scan checks whether the tubes are open. It is booked on particular cycle days. Want to know what happens if they are blocked?',
    mr: 'HSG किंवा सलाइन स्कॅन नळ्या खुल्या आहेत का ते बघतो. तो पाळीच्या ठराविक दिवसांवर ठरवला जातो. बंद असतील तर काय होते ते सांगू का?',
    options: [
      option('blocked', 'What if the tubes are blocked?', 'नळ्या बंद असतील तर?', 'test-blocked'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
    ],
  },
  'test-blocked': {
    en: 'If the tubes are blocked, IUI is usually not the path. The doctor may discuss IVF. The scan decides this, not the chat. What else?',
    mr: 'नळ्या बंद असतील तर IUI सहसा मार्ग नसतो. डॉक्टर IVF बोलू शकतात. स्कॅन हा निर्णय करतो, चॅट नाही. आणखी काय?',
    options: [
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
      option('which', 'Which other tests are usual?', 'इतर कोणत्या तपासण्या नेहमीच्या?', 'test-which'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
    ],
  },
  'test-sample': {
    en: 'The sample is given at the clinic, usually after 2 to 5 days without ejaculation. The coordinator gives the time. What else would help?',
    mr: 'नमुना क्लिनिकमध्ये दिला जातो, सहसा २ ते ५ दिवस स्खलनाविना. वेळ कोऑर्डिनेटर सांगतात. आणखी काय मदत होईल?',
    options: [
      option('low', 'What does a low report mean?', 'कमी अहवालाचा अर्थ काय?', 'test-low'),
      option('her', "And the tests for her?", 'आणि तिच्या तपासण्या?', 'test-her'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
    ],
  },
  'test-low': {
    en: 'One low semen report is often repeated. After that the doctor may plan more tests, IUI, or IVF with ICSI. The reports decide this. What next?',
    mr: 'एक कमी सिमेन अहवाल अनेकदा पुन्हा केला जातो. मग डॉक्टर आणखी तपासण्या, IUI, किंवा ICSI सह IVF ठरवू शकतात. अहवाल हा निर्णय करतात. पुढे काय?',
    options: [
      option('her', "And the tests for her?", 'आणि तिच्या तपासण्या?', 'test-her'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
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
    en: 'Bring a list of current medicines, and the first day of the last period if you track it. A semen test needs the 2 to 5 day window. What else?',
    mr: 'सध्याची औषधे लिहून आणा, आणि पाळीचा पहिला दिवस माहित असेल तर तोही. सिमेन तपासणीला २ ते ५ दिवसांची तयारी लागते. आणखी काय?',
    options: [
      option('which', 'Which tests are usually done?', 'कोणत्या तपासण्या सहसा होतात?', 'test-which'),
      option('visit', 'Tell me about the first visit', 'पहिली भेट कशी असते ते सांगा', 'test-visit'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
    ],
  },
  'test-visit': {
    en: 'The visit takes a history for both partners, reads old reports, and writes only the tests still needed. What would you like next?',
    mr: 'भेटीत दोघांचा इतिहास घेतला जातो, जुने अहवाल वाचले जातात, आणि फक्त उरलेल्या तपासण्या लिहिल्या जातात. पुढे काय जाणून घ्यायचे?',
    options: [
      option('which', 'Which tests are usually advised?', 'सहसा कोणत्या तपासण्या सुचवल्या जातात?', 'test-which'),
      option('prep', 'How should we prepare?', 'तयारी कशी करावी?', 'test-prep'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'test-close'),
    ],
  },
  'test-close': {
    en: 'We can pause here. If something else about testing is on your mind, pick it below.',
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
    en: 'Bring the report and your earlier file. The doctor compares it with the last plan before any medicine is changed. What else is on your mind?',
    mr: 'अहवाल आणि आधीची फाइल आणा. औषध बदलण्याआधी डॉक्टर तो मागच्या योजनेशी तुलना करतात. आणखी काय विचारत आहात?',
    options: [
      option('cycle', "It's after a treatment cycle", 'उपचार सायकलनंतर आहे', 'fu-cycle'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-clinic': {
    en: 'If the test was done here, the file is already with the team. Come at the time the coordinator gave you. What else would help?',
    mr: 'तपासणी येथे झाली असेल तर फाइल टीमसोबत आहे. कोऑर्डिनेटरने दिलेल्या वेळेला या. आणखी काय मदत होईल?',
    options: [
      option('ask', 'What should I ask the doctor?', 'डॉक्टरांना काय विचारावे?', 'fu-ask'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-wait': {
    en: 'Wait for the report before changing the plan. If the date has passed and you have not heard, ask the coordinator to check the file. What else?',
    mr: 'योजना बदलण्याआधी अहवालाची वाट बघा. तारीख गेली आणि काही कळले नाही तर कोऑर्डिनेटरना फाइल तपासायला सांगा. आणखी काय?',
    options: [
      option('bring', 'What should I carry?', 'काय आणावे?', 'fu-bring'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
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
    en: 'Test on the day the clinic gave you. An earlier home test can mislead. Call the clinic the same day for heavy bleeding or severe pain. What else?',
    mr: 'क्लिनिकने सांगितलेल्या दिवशी तपासणी करा. आधीची घरगुती तपासणी दिशाभूल करू शकते. जास्त रक्तस्त्राव किंवा तीव्र वेदना असतील तर त्याच दिवशी क्लिनिकला कॉल करा. आणखी काय?',
    options: [
      option('next', 'What if the test is negative?', 'तपासणी नकारात्मक झाली तर?', 'fu-next'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-next': {
    en: 'A negative test needs a review. Do not start the next cycle on your own. The doctor looks at the last response and sets the next dates. What would help?',
    mr: 'नकारात्मक तपासणीला पुनरावलोकन लागते. पुढची सायकल स्वतः सुरू करू नका. डॉक्टर मागचा प्रतिसाद बघून पुढच्या तारखा ठरवतात. काय मदत होईल?',
    options: [
      option('bring', 'What should I carry?', 'काय आणावे?', 'fu-bring'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-frozen': {
    en: 'A frozen transfer follows the lining and the calendar the clinic sets. Do not start those medicines early. What else would help?',
    mr: 'गोठवलेला ट्रान्सफर अस्तरावर आणि क्लिनिकच्या दिनदर्शिकेवर चालतो. ती औषधे लवकर सुरू करू नका. आणखी काय मदत होईल?',
    options: [
      option('ask', 'What does that visit check?', 'त्या भेटीत काय बघितले जाते?', 'fu-ask'),
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
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
    en: 'Note the time you missed and call the clinic the same day. Do not take a double dose unless the doctor tells you to. Anything else?',
    mr: 'चुकलेली वेळ लिहून ठेवा आणि त्याच दिवशी क्लिनिकला कॉल करा. डॉक्टर सांगितल्याशिवाय दुप्पट डोस घेऊ नका. आणखी काही?',
    options: [
      option('side', "I'm also having side effects", 'दुष्परिणाम सुद्धा होत आहेत', 'fu-side'),
      option('ask', 'What should I ask at the visit?', 'भेटीत काय विचारावे?', 'fu-ask'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-side': {
    en: 'Mild bloating can happen with stimulation. Severe pain, fainting, heavy bleeding, or trouble breathing needs a call to the clinic now. What else?',
    mr: 'उत्तेजनात हलकी फुगीरता होऊ शकते. तीव्र वेदना, बेशुद्ध पडणे, जास्त रक्तस्त्राव किंवा श्वास घेण्यास त्रास झाल्यास आता क्लिनिकला कॉल करा. आणखी काय?',
    options: [
      option('missed', 'I also missed a dose', 'एक डोस सुद्धा राहिला', 'fu-missed'),
      option('ask', 'What should I ask the doctor?', 'डॉक्टरांना काय विचारावे?', 'fu-ask'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-schedule': {
    en: 'The coordinator reads dates from your file. Keep a photo of the last prescription ready. What else?',
    mr: 'कोऑर्डिनेटर तारखा तुमच्या फाइलमधून सांगतात. शेवटच्या प्रिस्क्रिप्शनचा फोटो तयार ठेवा. आणखी काय?',
    options: [
      option('bring', 'What should I carry?', 'काय आणावे?', 'fu-bring'),
      option('cycle', "It's after a cycle", 'सायकलनंतर आहे', 'fu-cycle'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-ask': {
    en: 'Useful questions for the doctor: what this report changed, the next date, and which medicines continue. Want another topic?',
    mr: 'डॉक्टरांसाठी उपयोगी प्रश्न: या अहवालाने काय बदलले, पुढची तारीख, आणि कोणती औषधे चालू राहतात. दुसरा विषय बघू का?',
    options: [
      option('meds', 'I have a medicine question', 'औषधाबद्दल प्रश्न आहे', 'fu-meds'),
      option('cycle', "It's after a cycle", 'सायकलनंतर आहे', 'fu-cycle'),
      option('enough', "That's enough for now", 'आत्ता एवढे पुरे', 'fu-close'),
    ],
  },
  'fu-close': {
    en: 'We can pause here. If something else about the follow-up is on your mind, pick it below.',
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
    help: mr ? 'आज मी तुमची कशी मदत करू?' : 'How can I help you today?',
    looking: mr ? 'तुम्ही काय शोधत आहात?' : 'What are you looking for?',
    askName: mr ? 'तुमचे नाव सांगाल का?' : 'May I have your name?',
    askPhone: (name) =>
      mr
        ? `धन्यवाद, ${name}. संपर्क क्रमांक द्याल का?`
        : `Thank you, ${name}. Please share your contact number.`,
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
