import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function OurTeamPage({ onBookClick }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMember, setSelectedMember] = useState(null)

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden'
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSelectedMember(null)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = 'auto'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [selectedMember])

  const TEAM_MEMBERS = [
    {
      name: 'Dr. Leena Patankar',
      role: 'Clinical & Managing Director | Fertility Specialist | Endoscopic Surgeon | Clinical Embryologist',
      displayPosition: 'Clinical & Managing Director at Sequel IVF',
      phone: '+91-9665 279 369',
      phoneHref: 'tel:+919665279369',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '24 Years Experience',
      location: '103, 104, First Floor, Yash Complex, Survey No. 161/7, Bhosale Garden, Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/285b926543910d790975aa5d1826a1c0-removebg-preview.png',
      category: 'doctor',
      tag: 'Clinical Director',
      bioIntro:
        'Dr. Leena Patankar is the visionary Clinical & Managing Director of Sequel IVF, a pioneer in clinical embryology, endoscopic surgery, and advanced reproductive medicine. With over two decades of transformative contributions to assisted reproductive technology (ART), she has brought hope, joy, and healthy parenthood to thousands of families across India and internationally.',
      highlights: [
        {
          title: 'A Legacy of Excellence in Fertility Care',
          text: 'Over 24 years of pioneering reproductive leadership, successfully treating complex infertility cases, recurrent implantation failures, and diminished ovarian reserves.'
        },
        {
          title: 'Expertise in Fertility & Advanced Reproductive Medicine',
          text: 'Pioneered individualized ovarian stimulation protocols, advanced reproductive endocrinology, and fertility preservation techniques.'
        },
        {
          title: 'Pioneer in Clinical Embryology & IVF Laboratory Excellence',
          text: 'Renowned for establishing state-of-the-art cleanroom IVF laboratories adhering to the highest global standards, ensuring world-class micromanipulation and culture environments.'
        },
        {
          title: 'Mentor, Teacher & Helping Hand to the IVF Community',
          text: 'Actively trains clinical embryologists and reproductive medicine fellows, leading scientific research and publishing widely in leading reproductive journals.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Dr. Patankar serves in trusted leadership roles:',
      institutions: [
        'Sequel IVF – Clinical & Managing Director',
        'Patankar Fertility Solutions – Chief Fertility Specialist & Director',
        'National Reproductive Medicine & Embryology Societies – Senior Advisory Faculty'
      ],
      closingQuote:
        'For Dr. Leena Patankar, leading Sequel IVF is guided by a team-first philosophy, combining compassionate human empathy with rigorous clinical precision to make parenthood accessible and transparent.'
    },
    {
      name: 'Dr. Monika Thavare',
      role: 'Fertility Consultant & Specialist | MD (OBGY), Fellowship in Reproductive Medicine',
      displayPosition: 'Fertility Consultant & Specialist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '10+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/9bc0ceb83d86f8767d2f02151de1ee7c-removebg-preview.png',
      category: 'doctor',
      tag: 'Fertility Specialist',
      bioIntro:
        'Dr. Monika Thavare is an accomplished Fertility Consultant and Gynecological specialist who has dedicated her career to reproductive medicine and patient-centric fertility solutions. Holding an MD in Obstetrics and Gynecology along with an advanced Fellowship in Reproductive Medicine, she combines scientific rigor with deep personal compassion.',
      highlights: [
        {
          title: 'Specialized Reproductive Medicine Expertise',
          text: 'Specializes in the evaluation and treatment of both female and male infertility, complex PCOS, endometriosis, and recurrent pregnancy loss.'
        },
        {
          title: 'Tailored Clinical Pathways',
          text: 'Designs individualized ovarian stimulation protocols and advanced follicle tracking to maximize oocyte quality and treatment success rates.'
        },
        {
          title: 'Patient-First Compassionate Care',
          text: 'Provides clear, empathetic counseling that guides couples through every medical and emotional dimension of their fertility journey with total transparency.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to patients, Dr. Monika serves in key roles:',
      institutions: [
        'Sequel IVF – Fertility Consultant & Specialist',
        'Patankar Fertility Solutions – Consultant Gynecologist & Reproductive Specialist'
      ],
      closingQuote:
        'For Dr. Monika Thavare, fertility care is a mission to empower couples with evidence-based medical innovation, sincere warmth, and the highest standard of clinical excellence.'
    },
    {
      name: 'Dr. Chirag Sharma',
      role: 'Reproductive Medicine Specialist | M.B.B.S, M.S. OBGY, Fellowship Reproductive Medicine',
      displayPosition: 'Reproductive Medicine Specialist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '7+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/ee463ed89c8028009bb195f9798676ec-removebg-preview.png',
      category: 'doctor',
      tag: 'Reproductive Medicine',
      bioIntro:
        'Dr. Chirag Sharma is a dedicated Reproductive Medicine Specialist with extensive clinical and surgical expertise in assisted conception and minimally invasive gynecological procedures. With credentials spanning MBBS, MS in OBGY, and fellowship training in reproductive endocrinology, he provides modern, evidence-based fertility solutions.',
      highlights: [
        {
          title: 'Male and Female Infertility Evaluations',
          text: 'Specialized training in comprehensive diagnostic workups, semen quality optimization, surgical sperm retrieval (PESA/TESA), and fertility preservation.'
        },
        {
          title: 'Minimally Invasive Fertility Surgery',
          text: 'Skilled in diagnostic and therapeutic laparoscopy and hysteroscopy for uterine septum, intrauterine adhesions, tubal blocks, and ovarian pathologies.'
        },
        {
          title: 'Precision Assisted Conception Protocols',
          text: 'Expertise in customized stimulation protocols, endometrial receptivity timing, and gentle, ultrasound-guided embryo transfers.'
        }
      ],
      institutionsTitle: 'Dr. Chirag Sharma actively serves in respected reproductive institutions:',
      institutions: [
        'Sequel IVF – Reproductive Medicine Specialist',
        'Patankar Fertility Solutions – Fertility & Laparoscopy Consultant'
      ],
      closingQuote:
        'Dr. Chirag Sharma believes in treating every patient as family, ensuring compassionate communication, rigorous safety protocols, and optimal outcomes.'
    },
    {
      name: 'Emb. Bharat Harpude',
      role: 'ESHRE Certified Senior Clinical Embryologist | IVF Lab Quality & Culture Specialist',
      displayPosition: 'ESHRE-Certified Senior Clinical Embryologist',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '16+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/dr_chirag_sharma.jpg',
      category: 'embryologist',
      tag: 'Senior Embryologist',
      bioIntro:
        'Emb. Bharat Harpude is an internationally certified ESHRE (European Society of Human Reproduction and Embryology) Senior Clinical Embryologist. With over 16 years of hands-on mastery in human embryology laboratories, he is recognized for extraordinary precision in micromanipulation, gamete cryopreservation, and cleanroom quality management.',
      highlights: [
        {
          title: 'Mastery in Micromanipulation & ICSI',
          text: 'Has performed thousands of delicate Intracytoplasmic Sperm Injections (ICSI), laser-assisted hatching, and blastocyst biopsies with industry-leading fertilization and survival rates.'
        },
        {
          title: 'IVF Cleanroom & Quality Assurance',
          text: 'Maintains stringent Quality Control (QC) and continuous environmental monitoring, ensuring pristine incubator gas equilibrium and sterile culture conditions.'
        },
        {
          title: 'Advanced Cryopreservation Protocols',
          text: 'Expert in ultra-rapid vitrification and warming of oocytes and blastocysts, maximizing post-thaw survival and implantation success in frozen cycles.'
        }
      ],
      institutionsTitle: 'Emb. Bharat Harpude brings his clinical laboratory leadership to premier fertility centers:',
      institutions: [
        'Sequel IVF – Senior Clinical Embryologist & IVF Lab Lead',
        'Patankar Fertility Solutions – Senior Embryology Consultant',
        'National IVF Laboratory Quality & ART Advisory Panels'
      ],
      closingQuote:
        'Emb. Bharat Harpude handles every gamete and embryo with reverence and scientific excellence, knowing that every delicate cell represents a family’s greatest dream.'
    },
    {
      name: 'Emb. Shruti Mohite',
      role: 'Programs Coordinator & Senior Clinical Embryologist | Assisted Reproductive Technology',
      displayPosition: 'Programs Coordinator at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '3 Years',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/285b926543910d790975aa5d1826a1c0-removebg-preview.png',
      category: 'embryologist',
      tag: 'Programs Coordinator',
      bioIntro:
        'Emb. Shruti Mohite is a skilled clinical professional who has spent the last 3 years dedicating her career to reproductive medicine and patient care across India. Guided by a deep commitment to excellence, compassion, and precision, she plays a vital role in ensuring that every patient’s fertility journey is handled with the highest standard of support and scientific expertise. Behind every successful clinical outcome is meticulous coordination and expert laboratory execution, and Shruti has built a promising career spanning multiple facets of assisted reproductive technology.',
      highlights: [
        {
          title: '3 Years of Dedicated Expertise',
          text: 'She brings focused hands-on experience in the specialized field of fertility care, combining administrative leadership with clinical embryology.'
        },
        {
          title: 'Coordinating Care and Hope',
          text: 'As a programs coordinator, she ensures seamless patient pathways, bridging clinical requirements with compassionate guidance for families navigating their treatment.'
        },
        {
          title: 'Advanced Embryology Expertise',
          text: 'Bringing technical precision to the laboratory, she contributes specialized embryological skills to ensure optimal environments for embryo development.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Shruti serves in trusted roles at several leading fertility institutions:',
      institutions: [
        'Sequel IVF – Programs Coordinator',
        'Genesis ART Services – Freelance Embryologist',
        'Patankar Fertility Solutions – Embryologist'
      ],
      closingQuote:
        'For Emb. Shruti Mohite, reproductive medicine is more than a profession—it is a meaningful dedication to supporting families, empowering clinical success, and bringing new life into the world.'
    },
    {
      name: 'Mr. Rajwardhan Jagtap',
      role: 'Clinical Coordinator & Senior Embryologist | Patient Guidance & Lab Management',
      displayPosition: 'Coordinator and Senior Embryologist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '7+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/ee463ed89c8028009bb195f9798676ec-removebg-preview.png',
      category: 'coordinator',
      tag: 'Clinical Coordinator',
      bioIntro:
        'Mr. Rajwardhan Jagtap serves as a Coordinator and Senior Embryologist at Sequel IVF, bringing specialized proficiency in both embryology laboratory operations and streamlined patient care management. His dual expertise ensures flawless synchronization between clinical consultations, diagnostic schedules, and embryology interventions.',
      highlights: [
        {
          title: 'Embryology Laboratory Management',
          text: 'Skilled in gamete handling, in vitro fertilization (IVF), ICSI, embryo assessment, and maintaining stringent laboratory sterility and incubator environments.'
        },
        {
          title: 'Patient Pathways & Operational Coordination',
          text: 'Works closely with clinical consultants and couples to coordinate treatment timelines, ensuring patients understand each phase of their ART cycle with clarity and peace of mind.'
        },
        {
          title: 'Andrology Diagnostics & Advanced Workups',
          text: 'Experienced in complex semen analyses, sperm processing, cryopreservation, and specialized preparation for assisted conception.'
        }
      ],
      institutionsTitle: 'Mr. Rajwardhan Jagtap contributes to leading fertility organizations:',
      institutions: [
        'Sequel IVF – Coordinator and Senior Embryologist',
        'Patankar Fertility Solutions – Senior Embryologist & Coordinator'
      ],
      closingQuote:
        'Dedicated to maintaining smooth, dependable laboratory operations and providing comforting coordination for every couple seeking fertility care.'
    },
    {
      name: 'Emb. Bhagyashree Uttekar',
      role: 'Clinical Embryologist | Advanced ICSI, Vitrification & Embryo Micromanipulation',
      displayPosition: 'Programs Coordinator & Clinical Embryologist',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '6+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/9bc0ceb83d86f8767d2f02151de1ee7c-removebg-preview.png',
      category: 'embryologist',
      tag: 'Clinical Embryologist',
      bioIntro:
        'Emb. Bhagyashree Uttekar is a devoted Clinical Embryologist and Programs Coordinator at Sequel IVF, specializing in micromanipulation, gamete vitrification, and reproductive laboratory quality maintenance. Her meticulous attention to detail has contributed to consistently high fertilization and blastocyst formation rates.',
      highlights: [
        {
          title: 'Advanced ICSI & Vitrification',
          text: 'Specializes in Intracytoplasmic Sperm Injection (ICSI), delicate oocyte denudation, and rapid vitrification and warming of high-grade embryos.'
        },
        {
          title: 'Embryo Morphological Grading',
          text: 'Adept at rigorous time-lapse and morphological grading systems, selecting the most viable embryos to enhance successful implantation.'
        },
        {
          title: 'Program Coordination & Quality Assurance',
          text: 'Active in patient cycle coordination, ensuring smooth transitions between clinical steps and adherence to standard operating procedures (SOPs).'
        }
      ],
      institutionsTitle: 'Emb. Bhagyashree Uttekar serves with distinction at:',
      institutions: [
        'Sequel IVF – Programs Coordinator & Clinical Embryologist',
        'Patankar Fertility Solutions – Clinical Embryologist'
      ],
      closingQuote:
        'Emb. Bhagyashree brings passion, meticulous scientific skill, and compassionate care to help aspiring parents build healthy families.'
    },
    {
      name: 'Emb. Maithili Kadam',
      role: 'Clinical Embryologist | Gamete Culture, Blastocyst Culture & Embryo Assessment',
      displayPosition: 'Programs Coordinator & Clinical Embryologist',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '5+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/dr_monika_thavare.jpg',
      category: 'embryologist',
      tag: 'Clinical Embryologist',
      bioIntro:
        'Emb. Maithili Kadam is an enthusiastic Clinical Embryologist and Programs Coordinator at Sequel IVF, bringing comprehensive skills in gamete processing, in vitro culture protocols, and reproductive lab maintenance.',
      highlights: [
        {
          title: 'Oocyte Retrieval & Gamete Care',
          text: 'Skilled in prompt oocyte identification, follicular fluid scanning, and delicate gamete preparation during ovum pick-up procedures.'
        },
        {
          title: 'Blastocyst Culture Excellence',
          text: 'Dedicated to creating microenvironments that mimic natural physiology, ensuring optimal blastocyst development and high embryo vitality.'
        },
        {
          title: 'Cryobanking & Sample Integrity',
          text: 'Manages liquid nitrogen storage tanks, embryo and sperm inventory tracking, and stringent cryopreservation security protocols.'
        }
      ],
      institutionsTitle: 'Emb. Maithili Kadam serves in trusted roles at:',
      institutions: [
        'Sequel IVF – Programs Coordinator & Clinical Embryologist',
        'Patankar Fertility Solutions – Clinical Embryologist'
      ],
      closingQuote:
        'Maithili is committed to scientific accuracy and the gentlest handling of gametes, supporting patient dreams with devotion and precision.'
    },
    {
      name: 'Emb. Madhu Kale',
      role: 'Clinical Embryologist & IVF Programs Team | Embryo Culture & Cryopreservation',
      displayPosition: 'Programs Coordinator at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '5+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/285b926543910d790975aa5d1826a1c0-removebg-preview.png',
      category: 'embryologist',
      tag: 'Clinical Embryologist',
      bioIntro:
        'Emb. Madhu Kale is a valued Clinical Embryologist and Programs Coordinator at Sequel IVF, specializing in andrology diagnostics, sperm preparation techniques, and IVF laboratory coordination.',
      highlights: [
        {
          title: 'Andrology Diagnostics & Sperm Preparation',
          text: 'Proficient in advanced semen analysis, sperm DNA fragmentation testing, and customized density gradient and swim-up preparation methods.'
        },
        {
          title: 'Embryo Culture Support',
          text: 'Experienced in preparing culture dishes, incubator calibration, monitoring pH/temperature equilibrium, and supporting complex ART procedures.'
        },
        {
          title: 'Patient Orientation & Care Coordination',
          text: 'Guides patients through laboratory procedures and timeline expectations, helping alleviate anxiety with warmth and clarity.'
        }
      ],
      institutionsTitle: 'Emb. Madhu Kale contributes her clinical skills at:',
      institutions: [
        'Sequel IVF – Programs Coordinator & Clinical Embryologist',
        'Patankar Fertility Solutions – Embryology Team Member'
      ],
      closingQuote:
        'Passionate about providing every patient with compassionate care, technical excellence, and the highest standard of reproductive laboratory practice.'
    },
    {
      name: 'Emb. Sanjana Chorage',
      role: 'Programs Coordinator & Clinical Embryologist | Patient Fertility Support & Protocols',
      displayPosition: 'Programs Coordinator at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '4+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/9bc0ceb83d86f8767d2f02151de1ee7c-removebg-preview.png',
      category: 'coordinator',
      tag: 'Programs Coordinator',
      bioIntro:
        'Emb. Sanjana Chorage serves as a Programs Coordinator and Clinical Embryologist at Sequel IVF, bridging clinical coordination, laboratory workflows, and patient support.',
      highlights: [
        {
          title: 'Patient Pathway Coordination',
          text: 'Coordinates IVF treatment cycles, monitoring test schedules, scheduling laboratory procedures, and ensuring timely communication across medical teams.'
        },
        {
          title: 'Embryology Laboratory Assistance',
          text: 'Experienced in sterile laboratory maintenance, gamete handling, culture media preparation, and routine embryology protocols.'
        },
        {
          title: 'Records & Compliance',
          text: 'Maintains comprehensive clinical ART documentation in compliance with national assisted reproductive regulations and quality benchmarks.'
        }
      ],
      institutionsTitle: 'Emb. Sanjana Chorage serves in dedicated roles at:',
      institutions: [
        'Sequel IVF – Programs Coordinator & Clinical Embryologist',
        'Patankar Fertility Solutions – Clinical Embryology Coordinator'
      ],
      closingQuote:
        'Emb. Sanjana is devoted to creating a warm, dependable environment where patients feel fully supported and confident throughout their treatment journey.'
    },
    {
      name: 'Emb. Sushil Waghmare',
      role: 'Clinical Embryologist | Andrology & Reproductive Laboratory Specialist',
      displayPosition: 'Founder & Lab Director | Andrology & Reproductive Specialist',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'info@sequelivf.com',
      emailHref: 'mailto:info@sequelivf.com',
      experience: '9+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: '/images/ee463ed89c8028009bb195f9798676ec-removebg-preview.png',
      category: 'embryologist',
      tag: 'Clinical Embryologist',
      bioIntro:
        'Emb. Sushil Waghmare is an accomplished Clinical Embryologist and Andrology Laboratory Specialist with nearly a decade of experience spearheading reproductive laboratory setups, advanced andrology diagnostics, and quality systems.',
      highlights: [
        {
          title: 'Advanced Andrology & Sperm Functional Testing',
          text: 'A recognized expert in comprehensive semen diagnostics, sperm morphology assessments, cryobanking, and specialized preparation for complex male factor infertility.'
        },
        {
          title: 'Laboratory Operations & Cleanroom Protocols',
          text: 'Extensive experience in designing and auditing ISO cleanroom standards, air handling units (AHU), and VOC-free embryology laboratory environments.'
        },
        {
          title: 'Comprehensive ART Skills',
          text: 'Skilled in gamete culture, micromanipulation, vitrification protocols, and laboratory risk mitigation.'
        }
      ],
      institutionsTitle: 'Emb. Sushil Waghmare contributes his expertise across premier centers:',
      institutions: [
        'Sequel IVF – Andrology & Reproductive Laboratory Specialist',
        'Genesis ART Services / Patankar Fertility Solutions – Embryologist & Lab Consultant'
      ],
      closingQuote:
        'Dedicated to setting the highest benchmarks in laboratory quality and reproductive science, ensuring every embryo has the best possible potential.'
    }
  ]

  const filteredMembers =
    activeFilter === 'all'
      ? TEAM_MEMBERS
      : activeFilter === 'doctors'
      ? TEAM_MEMBERS.filter((m) => m.category === 'doctor')
      : TEAM_MEMBERS.filter((m) => m.category === 'embryologist' || m.category === 'coordinator')

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero / Breadcrumb Header */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-[#F0D5E6]/80 bg-[#FAF2F7]">
        {/* Background Image with Multi-layer Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Clinical & Embryology Team"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Left-to-right fade so text remains 100% crisp while reception logo is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-[#FAF2F7]/95 sm:via-[#FAF2F7]/70 sm:to-transparent lg:w-1/2" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-4 uppercase tracking-wider shadow-xs">
              <Link to="/" className="hover:text-[#A21CAF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#A21CAF] font-bold">Our Team</span>
            </nav>

            <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              OUR PROFESSIONAL TEAM
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight">
              <span className="text-[#A21CAF]">Meet Our</span>{' '}
              <span className="text-[#C49F64]">Specialists</span>
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#A21CAF] to-[#C49F64] mt-3.5" />
          </div>
        </div>
      </section>

      {/* Team Content Section */}
      <section className="py-14 sm:py-20 bg-white flex-1 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* Section Header: Heading & Intro Text */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="text-[#800080] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
                DEDICATED REPRODUCTIVE MEDICINE EXPERTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium tracking-tight">
                <span className="text-[#A21CAF]">Doctors &</span>{' '}
                <span className="text-[#C49F64]">Embryology Team</span>
              </h2>
              <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed max-w-2xl mt-3">
                Click on any team member below to view their detailed personal experience, qualifications, and professional biography.
              </p>
            </div>

            {/* Filter Pill Buttons */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-[#FAF2F7] rounded-xl border border-[#F0D5E6] self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#A21CAF] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#A21CAF]'
                }`}
              >
                All Team ({TEAM_MEMBERS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('doctors')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'doctors'
                    ? 'bg-[#A21CAF] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#A21CAF]'
                }`}
              >
                Doctors ({TEAM_MEMBERS.filter((m) => m.category === 'doctor').length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('embryology')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'embryology'
                    ? 'bg-[#A21CAF] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#A21CAF]'
                }`}
              >
                Embryologists ({TEAM_MEMBERS.filter((m) => m.category !== 'doctor').length})
              </button>
            </div>
          </div>

          {/* 3-Column Responsive Grid matching Homepage Card Design with Click Action */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6">
            {filteredMembers.map((doc) => (
              <div
                key={doc.name}
                onClick={() => setSelectedMember(doc)}
                className="w-full bg-[#FAF2F7] rounded-2xl p-4.5 sm:p-5 lg:p-4.5 xl:p-5 border border-[#F0D5E6] hover:border-[#C49F64] shadow-[0_4px_16px_-4px_rgba(36,17,50,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-4.5 items-start group cursor-pointer hover:-translate-y-1"
                title={`Click to view full biography of ${doc.name}`}
              >
                {/* Doctor Avatar / Image on left */}
                <div className="relative w-full sm:w-32 md:w-36 lg:w-32 xl:w-36 h-48 sm:h-52 lg:h-48 xl:h-52 shrink-0 overflow-hidden rounded-xl bg-white/60">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#A21CAF] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      View Bio
                    </span>
                  </div>
                </div>

                {/* Doctor Details on right */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Role Tag */}
                    {doc.tag && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#A21CAF] bg-white px-2 py-0.5 rounded-md border border-[#F0D5E6] mb-1.5">
                        {doc.tag}
                      </span>
                    )}

                    {/* Name: Purple by default, Gold on hover */}
                    <h3 className="font-serif text-[#A21CAF] text-base sm:text-lg font-medium leading-snug mb-1 group-hover:text-[#C49F64] transition-colors duration-300">
                      {doc.name}
                    </h3>

                    {/* Role / Qualifications */}
                    <p className="text-[#6B7280] text-[11.5px] leading-relaxed mb-3 line-clamp-3">
                      {doc.role}
                    </p>
                  </div>

                  <div>
                    {/* Subtle Divider Line */}
                    <div className="border-b border-[#F5E6F0] mb-2.5" />

                    {/* Contact Info */}
                    <div className="space-y-1.5 text-xs text-[#4B5563]">
                      {/* Phone */}
                      <div className="flex items-center gap-2 truncate">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A21CAF] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="currentColor">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <span className="truncate">{doc.phone}</span>
                      </div>

                      {/* Email */}
                      <div className="flex items-center gap-2 truncate">
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A21CAF] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span className="truncate">{doc.email}</span>
                      </div>

                      {/* Experience */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 text-[#4B5563]">
                          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#A21CAF] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" strokeLinecap="round" />
                          </svg>
                          <span className="font-medium">{doc.experience}</span>
                        </div>

                        {/* Interactive Click Indicator */}
                        <span className="text-[11px] font-bold text-[#A21CAF] group-hover:text-[#C49F64] flex items-center gap-0.5">
                          View Details &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA Banner */}
          <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#FAF2F7] via-[#F8E7F3] to-[#FAF2F7] rounded-3xl p-8 sm:p-12 border border-[#F0D5E6] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#800080] font-bold text-xs uppercase tracking-wider block mb-1">
                NEED PERSONALIZED GUIDANCE?
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#241132] font-medium">
                Consult With Our Fertility Specialists Today
              </h3>
              <p className="text-[#555555] text-sm mt-2 max-w-xl">
                Have questions about your fertility health, IVF options, or embryonic testing? Schedule an appointment with our specialist doctors and embryologists.
              </p>
            </div>
            <button
              type="button"
              onClick={onBookClick}
              className="shrink-0 px-7 py-3.5 bg-[#A21CAF] hover:bg-[#86198F] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
            >
              MAKE AN APPOINTMENT
            </button>
          </div>

        </div>
      </section>

      {/* DETAILED TEAM MEMBER MODAL (Matching https://sequelivf.com/team/... design) */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#F0D5E6] overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F5E6F0] bg-[#FAF2F7]/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C49F64]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#A21CAF]">
                  Sequel IVF Specialist Profile
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF2F7] border border-[#F0D5E6] text-[#6B7280] hover:text-[#A21CAF] flex items-center justify-center transition-colors cursor-pointer text-lg font-bold shadow-xs"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body: 2-Column Layout matching sequelivf.com */}
            <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                {/* LEFT COLUMN: Photo, Name in gold, Position, Experience, Location, Contact */}
                <div className="lg:col-span-5 flex flex-col">
                  {/* Photo Frame */}
                  <div className="w-full aspect-[4/5] sm:max-h-[380px] rounded-2xl overflow-hidden bg-[#FAF2F7] border border-[#F0D5E6] shadow-md mb-6 relative">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {selectedMember.tag && (
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm border border-[#F0D5E6] text-[#A21CAF] font-bold text-[11px] px-3 py-1 rounded-full shadow-xs uppercase tracking-wider">
                        {selectedMember.tag}
                      </span>
                    )}
                  </div>

                  {/* Name in Signature Gold */}
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#C49F64] mb-4">
                    {selectedMember.name}
                  </h2>

                  {/* Profile Key Value Metadata */}
                  <div className="space-y-3 text-sm text-[#444444] border-t border-b border-[#F0D5E6] py-4 mb-6">
                    <div>
                      <span className="font-semibold text-[#241132]">Position:</span>{' '}
                      <span className="text-[#555555]">{selectedMember.displayPosition || selectedMember.role}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#241132]">Experience:</span>{' '}
                      <span className="text-[#555555]">{selectedMember.experience}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#241132]">Location:</span>{' '}
                      <span className="text-[#555555]">{selectedMember.location}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#241132]">Email:</span>{' '}
                      <a
                        href={selectedMember.emailHref}
                        className="text-[#A21CAF] hover:underline"
                      >
                        {selectedMember.email}
                      </a>
                    </div>

                    <div>
                      <span className="font-semibold text-[#241132]">Phone:</span>{' '}
                      <a
                        href={selectedMember.phoneHref}
                        className="text-[#A21CAF] hover:underline font-medium"
                      >
                        {selectedMember.phone}
                      </a>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMember(null)
                      if (onBookClick) onBookClick()
                    }}
                    className="w-full py-3.5 px-5 bg-[#A21CAF] hover:bg-[#86198F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                    </svg>
                    Book Consultation With {selectedMember.name.split(' ')[0]} {selectedMember.name.split(' ')[1]}
                  </button>
                </div>

                {/* RIGHT COLUMN: Personal Experience & Biography */}
                <div className="lg:col-span-7 flex flex-col justify-start">
                  {/* Gold Serif Heading matching screenshot */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#C49F64] mb-4">
                    Personal Experience & Biography
                  </h3>

                  {/* Biography Paragraph 1 */}
                  <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed mb-5 text-justify">
                    {selectedMember.bioIntro}
                  </p>

                  {/* Core Highlight Points */}
                  {selectedMember.highlights && selectedMember.highlights.length > 0 && (
                    <div className="space-y-4 mb-6">
                      {selectedMember.highlights.map((item, idx) => (
                        <div key={idx} className="bg-[#FAF2F7]/60 p-4 rounded-xl border-l-4 border-[#C49F64]">
                          <h4 className="font-bold text-sm text-[#241132] mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-[13.5px] text-[#555555] leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Affiliated Institutions */}
                  {selectedMember.institutions && (
                    <div className="mb-6">
                      <p className="text-xs sm:text-sm text-[#374151] font-medium mb-2.5">
                        {selectedMember.institutionsTitle}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {selectedMember.institutions.map((inst, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#555555]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A21CAF] shrink-0" />
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Closing Dedication Quote */}
                  {selectedMember.closingQuote && (
                    <div className="mt-auto pt-4 border-t border-[#F5E6F0]">
                      <p className="text-xs sm:text-sm text-[#7C6285] italic leading-relaxed">
                        &ldquo;{selectedMember.closingQuote}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onBookClick={onBookClick} />
    </div>
  )
}
