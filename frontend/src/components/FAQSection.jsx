import React, { useState } from 'react'

export default function FAQSection({ onBookClick }) {
  const [activeCategory, setActiveCategory] = useState('General')
  // No item open by default
  const [openIndex, setOpenIndex] = useState(null)

  const CATEGORIES = [
    'General',
    'Pricing & Packages',
    'Treatment-Specific',
    'Fertility-Related',
    'Others',
  ]

  const FAQ_DATA = {
    'General': [
      {
        q: 'How long should we try naturally before seeing a fertility specialist?',
        a: 'If you are under 35 and have been having regular unprotected intercourse for 1 year without conceiving, it is advised to consult a fertility specialist. If you are 35 or older, we recommend seeking an evaluation after 6 months of trying, or earlier if you have known conditions like irregular cycles, PCOS, endometriosis, or previous pelvic surgeries.',
      },
      {
        q: 'Can stress prevent pregnancy?',
        a: 'While everyday stress does not cause absolute infertility, chronic or severe stress can disrupt the hypothalamic-pituitary-ovarian axis, leading to irregular ovulation, delayed periods, or hormonal imbalances. At Sequel IVF, we offer holistic counseling and supportive care alongside clinical treatments.',
      },
      {
        q: 'Can I still conceive naturally?',
        a: 'Yes, depending on your diagnostic findings. Unless both fallopian tubes are blocked, severe male factor infertility is present, or menopause has occurred, natural conception is possible. A thorough initial assessment at Sequel IVF helps determine whether natural cycle monitoring, IUI, or IVF offers you the safest and fastest route to parenthood.',
      },
      {
        q: 'What should we expect during our first consultation at Sequel IVF?',
        a: 'Your first visit includes a detailed medical and reproductive history review for both partners, a transvaginal ultrasound scan (AFC) for the female partner, and a personalized diagnostic roadmap. We focus on transparent, compassionate guidance without unnecessary tests or pressure.',
      },
      {
        q: 'How does lifestyle impact our fertility potential?',
        a: 'Maintaining a balanced BMI, avoiding tobacco and alcohol, eating an antioxidant-rich diet, managing sleep cycles, and moderate physical activity significantly optimize sperm quality and egg health, improving both natural and assisted conception outcomes.',
      },
    ],

    'Pricing & Packages': [
      {
        q: 'What is the approximate cost of IVF treatment at Sequel IVF?',
        a: 'At Sequel IVF, we maintain 100% transparent and ethical pricing without hidden charges. An IVF cycle cost depends on individual patient protocols, medication dosage, and whether advanced procedures like ICSI, Blastocyst Culture, or LAH are needed. A clear cost breakdown is provided during your consultation.',
      },
      {
        q: 'Are injections and medications included in the IVF package?',
        a: 'Stimulation medications vary widely based on your ovarian reserve (AMH) and body weight. Our treatment counselor provides an itemized estimate separating lab procedures from pharmaceutical costs so you have complete visibility before starting.',
      },
      {
        q: 'Is IVF or fertility treatment covered by health insurance in India?',
        a: 'While routine IVF procedures were historically out-of-pocket, several modern corporate and private health insurance policies now provide maternity and fertility riders covering initial diagnostic evaluations, laparoscopy/hysteroscopy, and partial IVF cycles. Our helpdesk assists with insurance documentation.',
      },
      {
        q: 'Do you provide 0% interest EMI or flexible payment options?',
        a: 'Yes, Sequel IVF partners with leading healthcare financial institutions to provide affordable, zero-cost EMI plans. This allows couples to focus on their emotional and medical journey without immediate financial strain.',
      },
      {
        q: 'Are there extra charges for embryo freezing and annual storage?',
        a: 'Cryopreservation of surplus high-grade embryos is billed transparently for the initial vitrification procedure and includes the first year of liquid nitrogen maintenance. Renewal for subsequent years is billed at nominal annual maintenance rates.',
      },
    ],

    'Treatment-Specific': [
      {
        q: 'What is a Test Tube Baby?',
        a: '"Test Tube Baby" is a popular non-medical term for In-Vitro Fertilization (IVF). In IVF, mature eggs retrieved from the ovaries are fertilized with sperm in our high-precision cleanroom embryology laboratory (in a specialized culture dish, not an actual test tube). The healthiest resulting embryo is then transferred into the uterus to establish pregnancy.',
      },
      {
        q: 'Is IVF painful?',
        a: 'Most IVF steps cause minimal discomfort rather than severe pain. Daily hormone injections use ultra-fine pen needles that feel like a mild pinch. The egg retrieval procedure is performed under short, gentle sedation so you feel no pain during the process. Any post-procedure cramping is typically mild and easily relieved with prescribed medication.',
      },
      {
        q: 'What is embryo grading and blastocyst culture?',
        a: 'Embryo grading is a non-invasive microscopic evaluation performed by our embryologists on Day 3 or Day 5 (Blastocyst stage). It analyzes cell count, symmetry, inner cell mass, and outer cell layer quality. Culturing embryos to Day 5 blastocyst stage allows us to select the most viable embryo, significantly improving implantation rates.',
      },
      {
        q: 'What is the difference between IUI and IVF?',
        a: 'IUI (Intrauterine Insemination) is a less invasive procedure where concentrated, washed sperm is placed directly inside the uterus during natural ovulation. IVF involves stimulating the ovaries, retrieving eggs, fertilizing them in the embryology lab, and transferring the developed embryo into the uterus.',
      },
      {
        q: 'What is Laser-Assisted Hatching (LAH) and who needs it?',
        a: 'Laser-Assisted Hatching uses a precise, cold diode laser to create a microscopic opening in the embryo’s outer shell (zona pellucida) before transfer. It is recommended for advanced maternal age, frozen-thawed embryos, thick zona, or repeated implantation failures to facilitate hatching and uterine attachment.',
      },
    ],

    'Fertility-Related': [
      {
        q: 'Do irregular periods mean I am infertile?',
        a: 'Not necessarily. Irregular periods indicate irregular or absent ovulation (anovulation), commonly caused by conditions like PCOS, thyroid disorders, or hyperprolactinemia. Once the root hormonal cause is diagnosed and ovulation is medically regulated, most women can successfully achieve pregnancy.',
      },
      {
        q: 'Which fertility tests should we do first?',
        a: 'Fertility assessments evaluate both partners simultaneously. For women, baseline tests include a pelvic ultrasound (Antral Follicle Count), blood tests for ovarian reserve (AMH), and basic hormonal profile (FSH, LH, TSH, Prolactin), followed by a tubal test (HSG/HyCoSy) if indicated. For men, a comprehensive semen analysis evaluates sperm count, motility, and morphology.',
      },
      {
        q: 'What is ovarian reserve?',
        a: 'Ovarian reserve refers to the quantity and reproductive quality of a woman’s remaining eggs in her ovaries. Every woman is born with a finite number of eggs that naturally declines over time. Ovarian reserve is evaluated primarily through an Anti-Müllerian Hormone (AMH) blood test and an ultrasound Antral Follicle Count (AFC).',
      },
      {
        q: 'What does AMH mean?',
        a: 'AMH stands for Anti-Müllerian Hormone, a protein produced by the granulosa cells of small ovarian follicles. An AMH blood test provides a reliable snapshot of your remaining egg supply (ovarian reserve). Higher AMH suggests good egg reserves (frequently seen in PCOS), while lower AMH suggests diminished reserve. It can be tested on any day of your menstrual cycle.',
      },
      {
        q: 'What are the common causes of male factor infertility?',
        a: 'Common causes include low sperm count (oligozoospermia), poor sperm motility (asthenozoospermia), abnormal sperm morphology (teratozoospermia), varicoceles, hormonal imbalances, and lifestyle factors. Many cases can be treated with medical therapy or advanced techniques like ICSI and IMSI.',
      },
    ],

    'Others': [
      {
        q: 'Can working women continue their daily jobs during IVF treatment?',
        a: 'Yes, absolutely. IVF does not require complete bed rest. Clinic visits for follicular monitoring scans are scheduled in the morning and take only 15–20 minutes. Only the day of egg retrieval and the day of embryo transfer require 1–2 days of rest, after which routine office and desk work can resume.',
      },
      {
        q: 'What precautions should be taken after an embryo transfer?',
        a: 'You should continue prescribed progesterone support diligently, avoid heavy weight lifting, vigorous workouts, hot tubs, and extreme physical exhaustion. However, complete bed rest is scientifically proven to NOT increase success rates; light walking and normal daily routines are encouraged.',
      },
      {
        q: 'Can we choose the gender of the baby in IVF?',
        a: 'No. Gender selection or determination is strictly illegal in India under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994. At Sequel IVF, we adhere strictly to the highest ethical and legal medical standards set by the Government of India and ICMR.',
      },
      {
        q: 'How many embryos are transferred in one cycle?',
        a: 'Following international and ICMR guidelines, we advocate Single Embryo Transfer (eSET) with top-quality blastocysts to maximize singleton pregnancy rates while minimizing risks associated with multiple pregnancies (twins/triplets). Depending on maternal age and history, 1 or at most 2 embryos are transferred.',
      },
      {
        q: 'How long can embryos or eggs remain safely cryopreserved?',
        a: 'Vitrification (ultra-rapid freezing) stops all biological and cellular aging without degrading embryo quality. Scientifically, embryos, eggs, and sperm can be safely stored in liquid nitrogen at -196°C for many years without any reduction in survival or success rates upon thawing.',
      },
    ],
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setOpenIndex(null)
  }

  const currentFaqs = FAQ_DATA[activeCategory] || []
  const half = Math.ceil(currentFaqs.length / 2)
  const col1 = currentFaqs.slice(0, half)
  const col2 = currentFaqs.slice(half)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#F5F2F8] py-14 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#603085] animate-pulse" />
            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase">
              FAQS & GUIDANCE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-medium tracking-tight">
            <span className="text-[#603085]">Popular</span>{' '}
            <span className="text-[#C49F64]">Questions</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-3" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 category-scroll pb-3.5 mb-8 sm:mb-10 sm:flex-wrap">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#603085] text-white shadow-md shadow-[#603085]/25 border border-[#603085] scale-102'
                    : 'bg-white text-[#241132] border border-[#F0D5E6] hover:border-[#C49F64]/70 hover:text-[#603085] hover:bg-[#FDF8FB]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* 2-Column Responsive FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4.5 items-start">
          
          {/* Column 1 */}
          <div className="space-y-3 sm:space-y-4">
            {col1.map((item, idx) => {
              const actualIdx = idx
              const isOpen = openIndex === actualIdx

              return (
                <div
                  key={item.q}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#603085]/50 shadow-md ring-1 ring-[#603085]/20'
                      : 'border-[#F0D5E6] hover:border-[#C49F64]/60 shadow-xs hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(actualIdx)}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-3.5 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-[14.5px] sm:text-[16px] font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#603085]' : 'text-[#241132] group-hover:text-[#603085]'
                    }`}>
                      {item.q}
                    </span>

                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#603085] text-white rotate-180'
                        : 'bg-[#F5F2F8] text-[#603085] group-hover:bg-[#FCE4F2]'
                    }`}>
                      <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4.5 pb-4.5 sm:px-5 sm:pb-5 pt-0">
                      <div className="h-px bg-gradient-to-r from-[#F0D5E6] via-[#F5F2F8] to-transparent mb-3.5" />
                      <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed">
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
            {col2.map((item, idx) => {
              const actualIdx = idx + half
              const isOpen = openIndex === actualIdx

              return (
                <div
                  key={item.q}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-[#603085]/50 shadow-md ring-1 ring-[#603085]/20'
                      : 'border-[#F0D5E6] hover:border-[#C49F64]/60 shadow-xs hover:shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(actualIdx)}
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between gap-3.5 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-serif text-[14.5px] sm:text-[16px] font-medium leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#603085]' : 'text-[#241132] group-hover:text-[#603085]'
                    }`}>
                      {item.q}
                    </span>

                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#603085] text-white rotate-180'
                        : 'bg-[#F5F2F8] text-[#603085] group-hover:bg-[#FCE4F2]'
                    }`}>
                      <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4.5 pb-4.5 sm:px-5 sm:pb-5 pt-0">
                      <div className="h-px bg-gradient-to-r from-[#F0D5E6] via-[#F5F2F8] to-transparent mb-3.5" />
                      <p className="text-[#555555] text-xs sm:text-[13.5px] leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

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
