import React, { useState, useMemo } from 'react'

export const FAQ_ITEMS = [
  {
    id: 1,
    q: 'How long should we try naturally before seeing a fertility specialist?',
    a: 'Most healthy couples conceive within one year of regular, unprotected intercourse. If you are below 35 years of age, it is advisable to seek a fertility evaluation after one year of trying. If you are 35 years or older, or if you have irregular periods, endometriosis, or other known fertility concerns, you should consult a fertility specialist as early as possible.',
    category: 'General & Conception',
  },
  {
    id: 2,
    q: 'Can stress prevent pregnancy?',
    a: 'Stress alone is not usually a direct cause of infertility, but long-term stress can affect hormone levels, ovulation, sexual health, and overall well-being. Managing stress through a healthy lifestyle, adequate sleep, and emotional support can improve your overall reproductive health while you undergo fertility treatment. Do not hesitate to seek professional help (counselling) if needed.',
    category: 'General & Conception',
  },
  {
    id: 3,
    q: 'Do irregular periods mean I am infertile?',
    a: 'Not necessarily. Irregular periods often indicate irregular ovulation, which can make it more difficult to conceive, but many women with irregular cycles can achieve pregnancy naturally while some others can achieve the same with the right diagnosis and treatment. Identifying the underlying cause is the first step toward choosing the most appropriate fertility treatment.',
    category: 'General & Conception',
  },
  {
    id: 4,
    q: 'Which fertility tests should we do first?',
    a: 'The initial fertility evaluation usually includes a detailed medical history, pelvic ultrasound, hormone tests such as AMH, a semen analysis for the male partner, and additional investigations if required. These tests help your fertility specialist understand the cause of infertility and recommend the most suitable treatment plan.',
    category: 'Fertility Tests & Causes',
  },
  {
    id: 5,
    q: 'What is a Test Tube Baby?',
    a: 'A "test tube baby" is a common term for a baby conceived through Assisted Reproductive Techniques such as In Vitro Fertilization (IVF), ICSI, etc. In IVF, the egg and sperms are fertilized in a specialized laboratory, and the resulting embryo is transferred into the uterus. In ICSI the sperm is injected in the egg to create the embryo, which is then transferred into the uterus. The pregnancy and baby\'s development are the same as in a naturally conceived pregnancy.',
    category: 'IVF & Procedures',
  },
  {
    id: 6,
    q: 'Is IVF painful?',
    a: 'Not at all! Most patients find IVF much easier than they expected. The daily hormone injections are given with very fine needles and cause minimal discomfort. Egg retrieval is performed under short anaesthesia or sedation, so you do not feel pain during the procedure. Mild bloating or cramping may occur afterward but usually settles within a few days.',
    category: 'IVF & Procedures',
  },
  {
    id: 7,
    q: 'What is embryo grading?',
    a: 'Embryo grading is a method used by the embryologists to assess the quality in terms of appearance and development of embryos under the microscope. It helps identify embryos with the best potential for implantation. While embryo grading is an important tool, it cannot guarantee pregnancy, as many other factors also influence success.',
    category: 'IVF & Procedures',
  },
  {
    id: 8,
    q: 'Can I still conceive naturally?',
    a: 'Yes. Many couples conceive naturally even after facing delays. Others may benefit from simple treatments such as ovulation induction & timed intercourse or IUI. Few couples need IVF, or ICSI. The choice of treatment depends on the underlying cause of infertility. A fertility evaluation helps determine the best approach for your individual situation.',
    category: 'General & Conception',
  },
  {
    id: 9,
    q: 'What is ovarian reserve?',
    a: 'Ovarian reserve refers to the capacity of the ovaries to produce eggs. It naturally declines with age and can be assessed using tests such as AMH and an Antral Follicle Count (AFC) on ultrasound. Understanding ovarian reserve helps doctors plan the most appropriate fertility treatment.',
    category: 'Fertility Tests & Causes',
  },
  {
    id: 10,
    q: 'What does AMH mean?',
    a: 'AMH (Anti-Müllerian Hormone) is a blood test that estimates ovarian reserve. A low AMH level suggests fewer remaining eggs and limited fertility potential. This does not necessarily mean you cannot become pregnant but you need to act fast as there is no way to increase the levels. Your fertility specialist will interpret your AMH along with your age, ultrasound findings (Antral Follicle Count) and overall fertility evaluation.',
    category: 'Fertility Tests & Causes',
  },
  {
    id: 11,
    q: 'Can low sperm count be treated?',
    a: "Yes. Treatment depends on the severity of the sperm abnormality and the couple's overall fertility. Lifestyle changes, medications, treatment of underlying medical conditions, IUI, IVF, or ICSI may all be suitable options. A semen analysis is the first step in deciding the most appropriate treatment.",
    category: 'Fertility Tests & Causes',
  },
  {
    id: 12,
    q: 'Does smoking affect fertility?',
    a: 'Yes. Smoking can reduce egg quality, sperm count, sperm motility, and embryo quality. It is also associated with lower IVF success rates and an increased risk of miscarriage. Quitting smoking is one of the most effective lifestyle changes to improve not only fertility and overall health but also the results of the treatment.',
    category: 'General & Conception',
  },
  {
    id: 13,
    q: 'Is PGT useful?',
    a: 'Preimplantation Genetic Testing (PGT) helps identify embryos with the correct number of chromosomes before transfer. It may be recommended for couples with recurrent miscarriages, repeated IVF failure, advanced maternal age, or known genetic disorders. Your fertility specialist will advise whether PGT is appropriate for your situation.',
    category: 'IVF & Procedures',
  },
  {
    id: 14,
    q: 'Is IVF /ICSI always successful?',
    a: 'No, it is not! But a failed IVF cycle does not mean that future treatment will be unsuccessful. IVF success depends on several factors, including egg quality, sperm quality, embryo development, uterine health, and age. A careful review of the previous cycle helps identify possible improvements and personalize the next treatment plan.',
    category: 'IVF & Procedures',
  },
  {
    id: 15,
    q: 'What is the total cost of IVF?',
    a: 'The cost of IVF varies from one couple to another because every treatment plan is different. Factors such as medications, IVF or ICSI, embryo freezing, genetic testing, and other advanced procedures may influence the overall cost. Your doctor will explain the expected expenses before treatment begins.',
    category: 'Cost & Transparency',
  },
  {
    id: 16,
    q: 'Are there any hidden charges in IVF?',
    a: 'At Sequel IVF, we believe in complete transparency. Before starting treatment, we provide a detailed explanation of the proposed treatment plan and the associated costs. If any additional procedures become necessary based on your clinical condition, they are discussed with you beforehand, ensuring there are no unexpected surprises.',
    category: 'Cost & Transparency',
  },
  {
    id: 17,
    q: 'When is IVF recommended?',
    a: 'IVF may be recommended for blocked fallopian tubes, severe male factor infertility, advanced maternal age, low ovarian reserve, endometriosis, repeated IUI failures, or unexplained infertility. After a detailed fertility evaluation, your specialist will recommend whether IVF is the most appropriate treatment for you.',
    category: 'IVF & Procedures',
  },
  {
    id: 18,
    q: 'What is the difference between IVF and ICSI?',
    a: 'In conventional IVF, eggs and sperm are placed together in the laboratory to allow fertilization naturally. In ICSI, a single healthy sperm is injected directly into each mature egg. Your fertility specialist and embryologist will recommend the most suitable technique based on your fertility evaluation.',
    category: 'IVF & Procedures',
  },
  {
    id: 19,
    q: 'What are the steps involved in an IVF cycle?',
    a: 'An IVF cycle typically includes fertility assessment, ovarian stimulation, ultrasound monitoring, egg retrieval, fertilization using IVF or ICSI, embryo culture, embryo transfer or freezing, and a pregnancy test about two weeks later. At every step care and caution is taken so that it mimics the natural menstrual cycle. Throughout the process, your treatment is carefully monitored and personalized.',
    category: 'IVF & Procedures',
  },
  {
    id: 20,
    q: 'What is Frozen Embryo Transfer (FET)?',
    a: 'Frozen Embryo Transfer (FET) involves thawing the previously frozen embryos and transferring them into the uterus during a carefully prepared cycle. FET has become an important part of modern IVF and offers excellent pregnancy rates in appropriately selected patients along with safety.',
    category: 'IVF & Procedures',
  },
  {
    id: 21,
    q: 'Can I continue working during IVF treatment?',
    a: 'Yes. Most women continue their normal work and daily activities during IVF treatment. You will need to attend scheduled clinic visits for ultrasound scans and monitoring, and it is generally recommended to take a day off for egg retrieval and Embryo transfer.',
    category: 'Treatment & Daily Life',
  },
  {
    id: 22,
    q: 'How many ultrasound scans will I need during IVF?',
    a: 'Most patients require 6–8 ultrasound scans during ovarian stimulation. These scans help monitor follicle growth, adjust medications when needed, and determine the ideal time for egg retrieval.',
    category: 'Treatment & Daily Life',
  },
  {
    id: 23,
    q: 'How many IVF cycles are usually needed to achieve pregnancy?',
    a: 'Some couples conceive in their first IVF cycle, while others may require more than one attempt. The number of cycles depends on factors such as age, embryo quality, ovarian reserve, and the underlying cause of infertility. Your doctor will discuss your expected chances based on your individual situation.',
    category: 'IVF & Procedures',
  },
  {
    id: 24,
    q: 'What happens after embryo transfer?',
    a: 'After embryo transfer, you can usually continue your routine daily activities while avoiding strenuous exercise, heavy lifting, or pushing and carrying heavy objects for about two weeks. There are no special dietary restrictions, and it is important to continue all prescribed medications exactly as advised by your fertility specialist. A pregnancy blood test (β-hCG) is usually performed 10–14 days after embryo transfer to confirm the result. If you experience severe abdominal pain, excessive bloating, vaginal bleeding, difficulty breathing, or persistent vomiting, please contact Sequel IVF or visit the hospital immediately.',
    category: 'Treatment & Daily Life',
  },
  {
    id: 25,
    q: 'Why should I choose Sequel IVF for my fertility treatment?',
    a: "At Sequel IVF, we believe that every fertility journey is unique and we promise to be with you at every step. Our experienced fertility specialists create individualized treatment plans based on each couple's specific needs, supported by advanced laboratory technology, meticulous ultrasound monitoring, and a highly skilled embryology team. From simple fertility treatments to advanced IVF and ICSI, our goal is to provide compassionate, evidence-based care with the highest standards of clinical excellence.",
    category: 'General & Conception',
  },
]

export default function FAQSection({ onBookClick }) {
  const [activeCategory, setActiveCategory] = useState('General & Conception')
  const [openId, setOpenId] = useState(null)

  const CATEGORIES = [
    'General & Conception',
    'Fertility Tests & Causes',
    'IVF & Procedures',
    'Treatment & Daily Life',
    'Cost & Transparency',
  ]

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setOpenId(null)
  }

  // Filter FAQs based on active category
  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const half = Math.ceil(filteredFaqs.length / 2)
  const col1 = filteredFaqs.slice(0, half)
  const col2 = filteredFaqs.slice(half)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="bg-[#F5F2F8] py-10 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-2 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#603085] animate-pulse" />
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase">
              FAQS & PATIENT GUIDANCE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
            <span className="text-[#603085]">Frequently Asked</span>{' '}
            <span className="text-[#C49F64]">Questions</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-3" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 category-scroll pb-3.5 mb-8 sm:mb-10 sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            const count = FAQ_ITEMS.filter((f) => f.category === cat).length

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-4.5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#603085] text-white shadow-md shadow-[#603085]/25 border border-[#603085]'
                    : 'bg-white text-[#241132] border border-[#F0D5E6] hover:border-[#C49F64]/70 hover:text-[#603085] hover:bg-[#FDF8FB]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-white/25 text-white' : 'bg-[#F5F2F8] text-[#603085]'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* 2-Column Responsive FAQ Accordion Grid */}
        {filteredFaqs.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4.5 items-start">
            
            {/* Column 1 */}
            <div className="space-y-3 sm:space-y-4">
              {col1.map((item) => {
                const isOpen = openId === item.id

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-[#603085]/50 shadow-md ring-1 ring-[#603085]/20'
                        : 'border-[#F0D5E6] hover:border-[#C49F64]/60 shadow-xs hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full text-left p-3 min-[380px]:p-4 sm:p-5 flex items-start justify-between gap-2.5 sm:gap-3.5 cursor-pointer select-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        <span className="text-[11px] font-bold text-[#C49F64] mt-0.5 shrink-0">
                          Q{item.id}.
                        </span>
                        <span className={`font-serif text-[14px] min-[380px]:text-[14.5px] sm:text-[15.5px] font-medium leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-[#603085]' : 'text-[#241132] group-hover:text-[#603085]'
                        }`}>
                          {item.q}
                        </span>
                      </div>

                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? 'bg-[#603085] text-white rotate-180'
                          : 'bg-[#F5F2F8] text-[#603085] group-hover:bg-[#FCE4F2]'
                      }`}>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 min-[380px]:px-4 min-[380px]:pb-4 sm:px-5 sm:pb-5 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#F0D5E6] via-[#F5F2F8] to-transparent mb-3" />
                        <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed pl-3.5 sm:pl-6 border-l-2 border-[#603085]/30">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-3 sm:space-y-4">
              {col2.map((item) => {
                const isOpen = openId === item.id

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-[#603085]/50 shadow-md ring-1 ring-[#603085]/20'
                        : 'border-[#F0D5E6] hover:border-[#C49F64]/60 shadow-xs hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full text-left p-3 min-[380px]:p-4 sm:p-5 flex items-start justify-between gap-2.5 sm:gap-3.5 cursor-pointer select-none group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-2 sm:gap-2.5">
                        <span className="text-[11px] font-bold text-[#C49F64] mt-0.5 shrink-0">
                          Q{item.id}.
                        </span>
                        <span className={`font-serif text-[14px] min-[380px]:text-[14.5px] sm:text-[15.5px] font-medium leading-snug transition-colors duration-200 ${
                          isOpen ? 'text-[#603085]' : 'text-[#241132] group-hover:text-[#603085]'
                        }`}>
                          {item.q}
                        </span>
                      </div>

                      <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? 'bg-[#603085] text-white rotate-180'
                          : 'bg-[#F5F2F8] text-[#603085] group-hover:bg-[#FCE4F2]'
                      }`}>
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-3 pb-3 min-[380px]:px-4 min-[380px]:pb-4 sm:px-5 sm:pb-5 pt-0">
                        <div className="h-px bg-gradient-to-r from-[#F0D5E6] via-[#F5F2F8] to-transparent mb-3" />
                        <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed pl-3.5 sm:pl-6 border-l-2 border-[#603085]/30">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

          </div>
        )}

        {/* Quick Consultation CTA banner at the bottom of FAQ */}
        <div className="mt-10 sm:mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-[#F0D5E6] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-[#241132]">
              Have questions about your specific fertility journey?
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Speak directly with our senior fertility specialists at Sequel IVF, Hadapsar, Pune.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#603085] hover:bg-[#4E276D] active:scale-95 shadow-md shadow-fuchsia-900/15 transition-all duration-200 cursor-pointer"
            >
              <span>Consult Our Specialists</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </button>

            <a
              href="tel:+919665279369"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold text-[#3C2048] hover:text-[#603085] bg-[#F5F2F8] hover:bg-[#F2D7E8] border border-[#F0D5E6] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#603085] shrink-0" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91 9665 279 369</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
