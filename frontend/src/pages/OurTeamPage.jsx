import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const teamPhoto = (url) =>
  url.replace(
    '/image/upload/',
    '/image/upload/e_trim,c_fit,h_560,f_png,fl_preserve_transparency/'
  )

const GIRL_IMAGES = [
  teamPhoto('https://res.cloudinary.com/exmvyjeq/image/upload/v1793007478/01bb9ff0-7d96-4ed6-956d-7a522287c557.png'),
  teamPhoto('https://res.cloudinary.com/exmvyjeq/image/upload/v1793007351/a421d143-d3fd-4515-8590-c64f03e4ecb9.png'),
  teamPhoto('https://res.cloudinary.com/exmvyjeq/image/upload/v1793007065/67d4ee46-3a0e-4419-977b-0dbf80dbe7e8.png'),
]
const MALE_IMAGES = [
  teamPhoto('https://res.cloudinary.com/exmvyjeq/image/upload/v1793007859/4cea3650-1a3c-4b06-a71f-2b0058898fbe.png'),
  teamPhoto('https://res.cloudinary.com/exmvyjeq/image/upload/v1793007952/069a7f1e-4479-4dad-801b-f0917ef5a712.png'),
]

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
      qualifications: 'M.D. (Obstetrics & Gynaecology), M.Sc. Clinical Embryology, University of Leeds, United Kingdom',
      phone: '+91-9665 279 369',
      phoneHref: 'tel:+919665279369',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: '30 Years Experience',
      location: '103, 104, First Floor, Yash Complex, Survey No. 161/7, Bhosale Garden, Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[0],
      imageHover: GIRL_IMAGES[1],
      category: 'doctor',
      tag: 'Clinical Director',
      bioIntro:
        "With over 30 years of dedicated experience in reproductive medicine, Dr. Leena Patankar is one of India's most respected fertility specialists, combining expertise in clinical infertility, advanced gynaecological endoscopy, and clinical embryology. Since beginning her medical practice in 1998, she has devoted her career to helping couples achieve parenthood through ethical, evidence-based, and personalized fertility treatment. As the Clinical & Managing Director of Sequel IVF, Dr. Patankar leads a multidisciplinary team committed to delivering world-class fertility care with compassion, transparency, and scientific excellence.",
      highlights: [
        {
          title: 'International Education & Advanced Training',
          text: 'Dr. Patankar has pursued advanced education and international training to remain at the forefront of reproductive medicine. Her professional milestones include: M.D. in Obstetrics & Gynaecology; Advanced Training in Assisted Reproductive Technology (ART) at the National University Hospital, Singapore (2001); M.Sc. in Clinical Embryology from the University of Leeds, United Kingdom (2006). Her rare combination of expertise as both a fertility specialist and a trained clinical embryologist enables her to bridge the gap between clinical management and laboratory excellence, ensuring the highest standards of patient care.'
        },
        {
          title: 'Expertise in Fertility & Advanced Reproductive Medicine',
          text: 'Dr. Patankar has extensive experience in the diagnosis and management of female infertility, male factor infertility, recurrent IVF failure, recurrent pregnancy loss, PCOS and ovulation disorders, endometriosis, low ovarian reserve, advanced maternal age infertility, fertility preservation, and high-risk complex fertility cases. She also specializes in advanced fertility-enhancing laparoscopic and hysteroscopic surgeries, helping many couples conceive naturally or improve their chances of successful IVF treatment.'
        },
        {
          title: 'Pioneer in Clinical Embryology & IVF Laboratory Excellence',
          text: 'Dr. Patankar has made remarkable contributions to the field of clinical embryology. As the Laboratory Director of Patankar Fertility Solutions since 2001 and Co-founder of Genesis ART Services, she has been instrumental in establishing, developing, standardizing, and quality-assuring IVF laboratories across India. Her work extends beyond patient care into laboratory design, workflow optimization, quality management systems, embryology training, and implementation of international laboratory standards. Today, her expertise continues through Sequel IVF, where every laboratory protocol reflects decades of scientific precision and commitment to excellence.'
        },
        {
          title: 'Mentor, Teacher & Helping Hand to the IVF Community',
          text: "One of Dr. Patankar's greatest contributions has been her commitment to sharing knowledge, firmly believing that advancing reproductive medicine requires empowering future professionals. Over the years she has trained more than 50 Clinical Embryologists; conducted numerous hands-on workshops in IUI, IVF, ICSI, embryo culture, cryopreservation, and laboratory quality systems; mentored fertility specialists and embryologists from across India; and assisted in the planning, establishment, and laboratory setup of over 100 IVF centres nationwide. Many successful embryologists and fertility laboratories across India continue to benefit from her guidance, making her an educator as well as a clinician."
        },
        {
          title: 'Publications, Research & Scientific Contributions',
          text: "Dr. Leena Patankar is an active contributor to reproductive medicine and women's health research, with several publications in national and international peer-reviewed journals. Her work spans clinical embryology, IVF laboratory quality, assisted reproductive technology (ART), maternal health, and pregnancy outcomes, reflecting her commitment to evidence-based medicine and continuous innovation. Through her ongoing research and academic collaborations, Dr. Patankar ensures that the care delivered at Sequel IVF remains aligned with the latest scientific evidence and global best practices."
        },
        {
          title: 'Research, Academics & Professional Leadership',
          text: 'Dr. Patankar actively contributes to the advancement of reproductive medicine through research, teaching, and academic collaboration. She is a highly respected faculty member and invited speaker at numerous national and international conferences, where she regularly delivers lectures on Clinical Embryology, IVF Laboratory Quality, Assisted Reproductive Technology, Fertility Preservation, Cryopreservation, Advanced Embryology Techniques, and Endoscopic Fertility Surgery. Her dedication to continuous learning ensures that patients at Sequel IVF benefit from the latest advances in fertility science.'
        },
        {
          title: 'Leadership in Assisted Reproductive Technology',
          text: 'Recognizing her decades of expertise and contributions to reproductive medicine, Dr. Patankar has been appointed as a Member of the State Board Authority for Assisted Reproductive Technology. This prestigious responsibility reflects the trust placed in her professional judgment and her commitment to promoting ethical, safe, and high-quality ART practices. Her role supports the advancement of standards, governance, and quality within the field of assisted reproduction.'
        },
        {
          title: 'A Team-First Philosophy',
          text: 'Dr. Patankar strongly believes that successful fertility treatment is never the achievement of one individual—it is the result of a dedicated, collaborative team. At Sequel IVF, she has built a highly experienced clinical, embryology, nursing, counselling, and support team that shares the same commitment to excellence, empathy, and patient-centred care. Every treatment plan is discussed collectively, ensuring that each couple benefits from multidisciplinary expertise and individualized attention throughout their fertility journey. This philosophy of teamwork is one of the defining strengths of Sequel IVF.'
        },
        {
          title: 'Beyond Medicine',
          text: 'Outside her professional life, Dr. Patankar believes in maintaining a balanced and enriching lifestyle. She is a trained Indian Classical Vocalist, having earned the prestigious Sangeet Visharad qualification, reflecting her lifelong passion for music and the arts. An enthusiastic cyclist, she has a keen interest in endurance cycling and is an active participant in various cycling events, embracing fitness, discipline, and perseverance beyond the field of reproductive medicine. She is also a PADI-certified Advanced Open Water Diver, embracing adventure, exploration, and continuous learning beyond the medical profession.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Dr. Patankar serves in trusted leadership roles:',
      institutions: [
        'Sequel IVF – Clinical & Managing Director',
        'Patankar Fertility Solutions – Laboratory Director (since 2001)',
        'Genesis ART Services – Co-founder',
        'State Board Authority for Assisted Reproductive Technology – Appointed Member'
      ],
      closingQuote:
        'Today, Dr. Leena Patankar continues her mission through Sequel IVF, Hadapsar, Pune, bringing together 30 years of experience, internationally trained expertise, state-of-the-art embryology, and compassionate patient care. Her vision is to provide every couple with ethical, transparent, scientifically advanced fertility treatment while offering unwavering emotional support throughout their journey to parenthood.'
    },
    {
      name: 'Dr. Monika Thavare',
      role: 'Fertility Consultant & Specialist | MD (OBGY), Fellowship in Reproductive Medicine',
      displayPosition: 'Fertility Consultant & Specialist at Sequel IVF',
      qualifications: 'MD (OBGY), Fellowship in Reproductive Medicine',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: '10+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[1],
      imageHover: GIRL_IMAGES[2],
      category: 'doctor',
      tag: 'Fertility Consultant',
      bioIntro:
        'Dr. Monika Thavare, MD (OBGY), Fellowship in Reproductive Medicine, is a Fertility Consultant & Specialist at Sequel IVF. With over 10 years of experience in obstetrics, gynaecology, and reproductive medicine, she provides personalized fertility care with a focus on accurate diagnosis, evidence-based treatment, and compassionate support for individuals and couples on their journey to parenthood.',
      highlights: [
        {
          title: 'Expertise in Reproductive Medicine',
          text: 'Dr. Thavare brings specialist training in obstetrics, gynaecology, and reproductive medicine, offering comprehensive evaluation and treatment for a wide range of fertility concerns.'
        },
        {
          title: 'Personalized Fertility Care',
          text: 'She works closely with each couple to understand their unique medical history and goals, creating treatment plans that are ethical, transparent, and tailored to their needs.'
        },
        {
          title: 'A Trusted Clinical Partner',
          text: 'As part of the Sequel IVF medical team, Dr. Thavare supports patients through consultation, treatment, and follow-up with clear communication and dedicated clinical guidance.'
        }
      ],
      institutionsTitle: 'Dr. Monika Thavare serves in trusted clinical roles:',
      institutions: [
        'Sequel IVF – Fertility Consultant & Specialist'
      ],
      closingQuote:
        'Dr. Monika Thavare is committed to helping every couple feel informed, supported, and confident as they take the next step toward parenthood at Sequel IVF.'
    },
    {
      name: 'Dr. Chirag Sharma',
      role: 'IVF Specialist | Fertility Expert',
      displayPosition: 'IVF Specialist & Fertility Expert at Sequel IVF',
      qualifications: 'M.B.B.S, M.S. OBGY, Fellowship in Reproductive Medicine',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: '3 Years of Dedicated Expertise',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: MALE_IMAGES[0],
      imageHover: MALE_IMAGES[1],
      category: 'doctor',
      tag: 'IVF Specialist',
      bioIntro:
        "Dr. Chirag Sharma (M.B.B.S, M.S. OBGY, Fellowship in Reproductive Medicine) is a dedicated specialist in women's health and fertility who has spent the last 3 years bringing advanced medical expertise and compassionate care to families across India. Guided by a profound commitment to clinical excellence and patient well-being, Chirag combines rigorous scientific training with deep empathy, ensuring that every patient feels supported, safe, and valued throughout their reproductive journey. Behind every successful pregnancy is a foundation of advanced clinical precision, and Chirag has built a promising career dedicated to navigating everything from routine wellness to complex fertility solutions.",
      highlights: [
        {
          title: '3 Years of Dedicated Expertise',
          text: 'He brings focused, specialized experience in obstetrics, gynecology, and reproductive endocrinology, delivering high standards of care to every single cycle.'
        },
        {
          title: 'Clinical Excellence in Reproductive Medicine',
          text: 'With advanced fellowship training, he offers expert diagnostic and therapeutic strategies tailored to complex fertility needs.'
        },
        {
          title: 'A Trusted Pillar of Support',
          text: 'He provides dedicated clinical guidance and patient-centered solutions, helping individuals and couples navigate their path to parenthood with confidence.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Chirag serves in trusted clinical roles at several leading fertility institutions:',
      institutions: [
        'Sequel IVF – IVF Specialist',
        'Genesis ART Services – Freelance IVF Specialist',
        'Patankar Fertility Solutions – Consultant Fertility Expert'
      ],
      closingQuote:
        'For Dr. Chirag Sharma, reproductive medicine is more than a medical science—it is a deeply meaningful mission to bring joy, hope, and new life to families.'
    },
    {
      name: 'Emb. Sushil Waghmare',
      role: 'Founder & Lab Director | ESHRE-Certified Senior Clinical Embryologist',
      displayPosition: 'Founder & Lab Director at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sushil1june@gmail.com',
      emailHref: 'mailto:sushil1june@gmail.com',
      experience: '16 Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: MALE_IMAGES[1],
      imageHover: MALE_IMAGES[0],
      category: 'embryologist',
      tag: 'Founder & Lab Director',
      bioIntro:
        'Emb. Sushil Waghmare is an ESHRE-certified senior clinical embryologist who has spent the last 16 years turning the dream of parenthood into reality for families across India. Guided by the deeply personal philosophy of "Building Labs, Nurturing Hope, Creating Miracles," Emb. Sushil combines world-class science with profound empathy, ensuring that every family feels supported, safe, and valued throughout their fertility journey. Behind every successful pregnancy is a dedicated laboratory standard, and Sushil has spent his career building safer, highly advanced environments for the earliest stages of life. His clinical dedication is reflected in an extraordinary life’s work.',
      highlights: [
        {
          title: '20,000+ Dreams Nurtured',
          text: 'He has personally performed and guided over 20,000 IVF cases throughout India, bringing comfort, precision, and dedication to every single cycle.'
        },
        {
          title: '30+ Safe Havens Built',
          text: 'As an expert in laboratory design, he has set up over 30 state-of-the-art IVF labs from the ground up, ensuring embryos develop in optimal, international-standard environments.'
        },
        {
          title: 'A Trusted Pillar of Support',
          text: 'He provides vital embryology backup and guidance to 20 IVF centers across India, helping local clinics elevate their care and success rates for patients nationwide.'
        },
        {
          title: 'Global Scientific Benchmark',
          text: 'With international ESHRE certification, Sushil ensures that patients receive the highest benchmark of global scientific care.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Sushil serves in trusted leadership roles at several leading fertility institutions:',
      institutions: [
        'Sequel IVF – Founder & Lab Director',
        'Genesis ART Services – Managing Partner & Embryology Head',
        'Patankar Fertility Solutions – Chief Embryologist'
      ],
      closingQuote:
        'For Sushil, embryology is more than a medical science—it is a deeply meaningful mission to bring joy, hope, and new life to families.'
    },
    {
      name: 'Emb. Bharat Harpude',
      role: 'Founder & Lab Director | ESHRE-Certified Senior Clinical Embryologist',
      displayPosition: 'Founder & Lab Director at Sequel IVF',
      phone: '+91 9011 920 589',
      phoneHref: 'tel:+919011920589',
      email: 'bharat.harpudeg@gmail.com',
      emailHref: 'mailto:bharat.harpudeg@gmail.com',
      experience: '16+ Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: MALE_IMAGES[0],
      imageHover: MALE_IMAGES[1],
      category: 'embryologist',
      tag: 'Founder & Lab Director',
      bioIntro:
        'Emb. Bharat Harpude is an ESHRE-certified senior clinical embryologist with more than 16 years of experience helping families across India pursue their dream of parenthood. Guided by the philosophy "Building Labs. Nurturing Hope. Creating Miracles," he combines advanced reproductive science with empathy, precision, and a strong commitment to patient safety. Emb. Bharat believes that every successful fertility journey begins with a high-quality embryology laboratory. Throughout his career, he has focused on creating advanced, carefully controlled environments in which embryos can develop under optimal conditions. ESHRE certification is an internationally recognized credential demonstrating clinical embryology knowledge and professional standards.',
      highlights: [
        {
          title: '20,000+ IVF/ICSI Cycles Performed or Guided',
          text: 'Extensive hands-on experience in micromanipulation, gamete handling, and clinical embryology across thousands of successful cycles.'
        },
        {
          title: '50+ IVF Laboratories Established',
          text: 'Pioneered planning, cleanroom setup, and equipment validation for over 50 state-of-the-art IVF laboratories across India.'
        },
        {
          title: '20+ IVF Centers Supported',
          text: 'Provides ongoing consulting, embryology backup, and technical quality management to over 20 fertility centers nationwide.'
        },
        {
          title: '16+ Years of Expertise in Reproductive Medicine & Embryology',
          text: 'His work includes hands-on embryology, IVF laboratory planning and setup, quality management, clinical guidance, and ongoing support for fertility centers. He helps clinics strengthen laboratory systems and maintain consistent standards across critical stages of IVF and ICSI treatment.'
        }
      ],
      institutionsTitle: 'Leadership Roles:',
      institutions: [
        'Sequel IVF – Founder and Lab Director',
        'Genesis ART Services – Managing Partner and Head of Embryology',
        'Patankar Fertility Solutions – Chief Embryologist'
      ],
      closingQuote:
        'For Bharat, embryology is more than a medical discipline. It is a meaningful mission centered on scientific excellence, safe laboratory practice, compassionate care, and the creation of new possibilities for families.'
    },
    {
      name: 'Emb. Bhagyashree Uttekar',
      role: 'Coordinator & Senior Embryologist',
      displayPosition: 'Coordinator and Senior Embryologist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: 'Over 12 Years of Expertise',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[2],
      imageHover: GIRL_IMAGES[0],
      category: 'embryologist',
      tag: 'Coordinator & Senior Embryologist',
      bioIntro:
        'Emb. Bhagyashree Uttekar is a highly experienced Clinical Embryologist and reproductive healthcare professional with over 12 years of expertise in assisted reproductive technology (ART) and fertility care. Throughout her career, she has remained committed to clinical excellence, scientific precision, and compassionate patient support, playing an integral role in helping individuals and couples navigate their fertility journey with confidence.',
      highlights: [
        {
          title: 'Over 12 Years of Clinical Expertise',
          text: 'With extensive experience spanning embryology, laboratory management, and patient program coordination, Bhagyashree combines advanced technical expertise with a patient-centered approach.'
        },
        {
          title: 'Advanced Embryological Procedures & Quality Standards',
          text: 'Her proficiency includes key embryological procedures, laboratory quality standards, and the coordination of multidisciplinary fertility programs, ensuring seamless clinical workflows and exceptional standards of care.'
        },
        {
          title: 'Patient Pathways & Supportive Experience',
          text: 'As Coordinator and Senior Embryologist at Sequel IVF, she oversees patient pathways, facilitating effective communication between clinical teams and patients while ensuring a smooth and supportive treatment experience.'
        }
      ],
      institutionsTitle: 'Key Roles & Institutional Affiliations:',
      institutions: [
        'Sequel IVF – Coordinator and Senior Embryologist',
        'Genesis ART Services – Freelance Embryologist',
        'Patankar Fertility Solutions – Senior Embryologist'
      ],
      closingQuote:
        'Driven by a passion for reproductive medicine and continuous professional growth, Bhagyashree is dedicated to maintaining the highest standards of embryology practice and contributing to successful fertility outcomes. She believes that every patient deserves compassionate care, scientific excellence, and personalized support throughout their journey toward parenthood.'
    },
    {
      name: 'Emb. Rajwardhan Jagtap',
      role: 'Coordinator & Senior Embryologist | Postgraduate Senior Embryologist & ART Specialist',
      displayPosition: 'Coordinator and Senior Embryologist at Sequel IVF',
      phone: '+91 9011 920 589',
      phoneHref: 'tel:+919011920589',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: 'Over 6 Years Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: MALE_IMAGES[1],
      imageHover: MALE_IMAGES[0],
      category: 'embryologist',
      tag: 'Coordinator & Senior Embryologist',
      bioIntro:
        'Emb. Rajwardhan Jagtap is a Postgraduate Senior Embryologist and Assisted Reproductive Technology (ART) Specialist with over six years of clinical experience in reproductive medicine. He currently serves as the Coordinator and Senior Embryologist at Sequel IVF, where he oversees embryology laboratory operations, ensuring the highest standards of clinical excellence, laboratory precision, quality assurance, and patient care.',
      highlights: [
        {
          title: 'Advanced Training & Key Embryological Procedures',
          text: 'Having completed advanced training at Patankar Fertility Solutions Pvt. Ltd., Rajwardhan has developed extensive expertise in key embryological procedures, including Intracytoplasmic Sperm Injection (ICSI), embryo and gamete vitrification, thawing techniques, semen processing, and laboratory quality assurance and quality control (QA/QC).'
        },
        {
          title: 'Consistently High Standards & Reproductive Outcomes',
          text: 'His strong technical proficiency and commitment to best practices contribute to consistently high standards of laboratory performance and reproductive outcomes.'
        },
        {
          title: 'Consultation & Laboratory Optimization',
          text: 'In addition to his leadership role at Sequel IVF, Rajwardhan serves as a Freelance Embryologist with Genesis ART Services, providing specialized embryology consultation, laboratory setup and optimization, quality management, and operational support to fertility centers.'
        }
      ],
      institutionsTitle: 'Key Leadership & Institutional Roles:',
      institutions: [
        'Sequel IVF – Coordinator and Senior Embryologist',
        'Genesis ART Services – Freelance Embryologist',
        'Patankar Fertility Solutions Pvt. Ltd. – Advanced Embryology Practice'
      ],
      closingQuote:
        'Passionate about scientific innovation and clinical excellence, he remains dedicated to optimizing fertilization and embryo development outcomes while helping individuals and couples achieve their dream of parenthood through evidence-based assisted reproductive technologies.'
    },
    {
      name: 'Emb. Madhu Kale',
      role: 'Coordinator & Senior Embryologist',
      displayPosition: 'Coordinator and Senior Embryologist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: 'Over 5 Years of Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[0],
      imageHover: GIRL_IMAGES[2],
      category: 'embryologist',
      tag: 'Coordinator & Senior Embryologist',
      bioIntro:
        'Emb. Madhu Kale is a dedicated Clinical Embryologist and reproductive healthcare professional with over 5 years of experience in assisted reproductive technology (ART) and fertility care. Throughout her career, she has remained committed to delivering clinical excellence, scientific precision, and compassionate patient support, helping individuals and couples navigate their fertility journey with confidence and care.',
      highlights: [
        {
          title: 'Over 5 Years of Hands-on Experience',
          text: 'With hands-on experience in embryology, laboratory operations, and patient program coordination, Madhu combines strong technical expertise with a patient-centered approach.'
        },
        {
          title: 'Essential Embryological Procedures & Quality Management',
          text: 'She is skilled in essential embryological procedures, laboratory quality management, and the coordination of fertility programs, ensuring efficient clinical workflows and maintaining the highest standards of embryological care.'
        },
        {
          title: 'Patient Care Pathways & Multidisciplinary Communication',
          text: 'As Coordinator and Senior Embryologist at Sequel IVF, Madhu oversees patient care pathways, facilitating seamless communication between patients and clinical teams while ensuring a supportive and well-coordinated treatment experience.'
        }
      ],
      institutionsTitle: 'Key Roles & Institutional Affiliations:',
      institutions: [
        'Sequel IVF – Coordinator and Senior Embryologist',
        'Genesis ART Services – Freelance Embryologist',
        'Patankar Fertility Solutions – Senior Embryologist'
      ],
      closingQuote:
        'Passionate about reproductive medicine and continuous professional development, Madhu is dedicated to advancing embryology standards and contributing to successful fertility outcomes. She believes that every patient deserves compassionate care, scientific excellence, and personalized support throughout their journey toward parenthood.'
    },
    {
      name: 'Emb. Sanjana Chorage',
      role: 'Programs Coordinator & Clinical Embryologist',
      displayPosition: 'Programs Coordinator & Clinical Embryologist at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: 'Over 3 Years of Experience',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[1],
      imageHover: GIRL_IMAGES[0],
      category: 'embryologist',
      tag: 'Programs Coordinator',
      bioIntro:
        'Emb. Sanjana Chorage is a dedicated Clinical Embryologist and reproductive healthcare professional with over 3 years of experience in assisted reproductive technology (ART) and fertility care. She is committed to delivering clinical excellence, scientific precision, and compassionate patient support, helping individuals and couples navigate their fertility journey with confidence and care.',
      highlights: [
        {
          title: 'Over 3 Years of Hands-on Experience',
          text: 'With hands-on experience in embryology, laboratory operations, and patient program coordination, Sanjana combines technical expertise with a patient-focused approach.'
        },
        {
          title: 'Embryological Procedures & Quality-Driven Practice',
          text: 'She is skilled in essential embryological procedures, laboratory quality management, and the coordination of fertility programs, contributing to efficient clinical workflows and maintaining high standards of embryological care.'
        },
        {
          title: 'Seamless Patient Care Pathways',
          text: 'As the Programs Coordinator at Sequel IVF, Sanjana supports seamless patient care pathways by facilitating effective communication between patients and multidisciplinary clinical teams, ensuring a smooth and supportive treatment experience.'
        }
      ],
      institutionsTitle: 'Key Roles & Institutional Affiliations:',
      institutions: [
        'Sequel IVF – Programs Coordinator',
        'Genesis ART Services – Freelance Embryologist',
        'Patankar Fertility Solutions – Embryologist'
      ],
      closingQuote:
        'Passionate about reproductive medicine and committed to continuous professional development, Sanjana strives to uphold the highest standards of embryology while contributing to successful fertility outcomes. She believes that every patient deserves compassionate care, scientific excellence, and personalized support throughout their journey toward parenthood.'
    },
    {
      name: 'Emb. Shruti Mohite',
      role: 'Programs Coordinator & Clinical Embryologist',
      displayPosition: 'Programs Coordinator at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: '3 Years of Dedicated Expertise',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[2],
      imageHover: GIRL_IMAGES[1],
      category: 'embryologist',
      tag: 'Programs Coordinator',
      bioIntro:
        "Emb. Shruti Mohite is a skilled clinical professional who has spent the last 3 years dedicating her career to reproductive medicine and patient care across India. Guided by a deep commitment to excellence, compassion, and precision, she plays a vital role in ensuring that every patient's fertility journey is handled with the highest standard of support and scientific expertise. Behind every successful clinical outcome is meticulous coordination and expert laboratory execution, and Shruti has built a promising career spanning multiple facets of assisted reproductive technology.",
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
      name: 'Emb. Maithili Kadam',
      role: 'Programs Coordinator & Clinical Embryologist',
      displayPosition: 'Programs Coordinator at Sequel IVF',
      phone: '+91 9763 845 143',
      phoneHref: 'tel:+919763845143',
      email: 'sequelivf@gmail.com',
      emailHref: 'mailto:sequelivf@gmail.com',
      experience: '1 Year of Dedicated Expertise',
      location: 'Hadapsar, Pune, Maharashtra – 411028',
      image: GIRL_IMAGES[1],
      imageHover: GIRL_IMAGES[2],
      category: 'embryologist',
      tag: 'Programs Coordinator',
      bioIntro:
        'Emb. Maithili Kadam is a dedicated clinical embryologist who has spent the last year contributing her expertise to reproductive medicine and patient care. Guided by a strong commitment to excellence, compassion, and precision, she plays an important role in ensuring that patients receive high standards of support throughout their fertility journey. Behind successful clinical outcomes is careful coordination and dedicated laboratory execution, and Maithili has started a promising career in assisted reproductive technology.',
      highlights: [
        {
          title: '1 Year of Dedicated Expertise',
          text: 'She brings focused, hands-on experience in the specialized field of fertility care, combining administrative coordination with clinical embryology.'
        },
        {
          title: 'Coordinating Care and Hope',
          text: 'As a programs coordinator, she ensures smooth patient pathways, bridging clinical requirements with compassionate guidance for families navigating their treatment.'
        },
        {
          title: 'Embryology Expertise',
          text: 'Bringing technical precision to the laboratory, she contributes specialized embryological skills to support optimal environments for embryo development.'
        }
      ],
      institutionsTitle: 'To bring this level of care directly to those who need it most, Maithili serves in trusted roles at leading fertility institutions:',
      institutions: [
        'Sequel IVF – Programs Coordinator',
        'Genesis ART Services – Freelance Embryologist'
      ],
      closingQuote:
        'For Emb. Maithili Kadam, reproductive medicine is an inspiring beginning to a meaningful mission of supporting families and bringing new life into the world.'
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
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 border-b border-[#F0D5E6]/80 bg-[#F5F2F8]">
        {/* Background Image with Multi-layer Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image copy 5.png"
            alt="Sequel IVF Clinical & Embryology Team"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Left-to-right fade so text remains 100% crisp while reception logo is clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-[#F5F2F8]/95 sm:via-[#F5F2F8]/70 sm:to-transparent lg:w-1/2" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl">
            {/* Breadcrumbs */}
            <nav className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#F0D5E6] text-[#7C6285] mb-2 sm:mb-4 shadow-xs max-w-full overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-[#603085] transition-colors shrink-0">Home</Link>
              <span className="text-[#C49F64] shrink-0">/</span>
              <span className="text-[#603085] font-semibold shrink-0">Our Team</span>
            </nav>

            <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
              OUR PROFESSIONAL TEAM
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight">
              <span className="text-[#603085]">Meet Our</span>{' '}
              <span className="text-[#C49F64]">Specialists</span>
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#603085] to-[#C49F64] mt-3.5" />
          </div>
        </div>
      </section>

      {/* Team Content Section */}
      <section className="py-14 sm:py-20 bg-white flex-1 relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

          {/* Section Header: Heading & Intro Text */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <span className="text-[#603085] font-bold text-xs sm:text-sm tracking-widest uppercase block mb-2">
                DEDICATED REPRODUCTIVE MEDICINE EXPERTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium tracking-tight">
                <span className="text-[#603085]">Doctors &</span>{' '}
                <span className="text-[#C49F64]">Embryology Team</span>
              </h2>
              <p className="text-[#555555] text-sm sm:text-[15px] leading-relaxed max-w-2xl mt-3">
                Click on any team member below to view their detailed personal experience, qualifications, and professional biography.
              </p>
            </div>

            {/* Filter Pill Buttons */}
            <div className="inline-flex items-center gap-1.5 p-1 bg-[#F5F2F8] rounded-xl border border-[#F0D5E6] self-start lg:self-end">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#603085] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#603085]'
                }`}
              >
                All Team ({TEAM_MEMBERS.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('doctors')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'doctors'
                    ? 'bg-[#603085] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#603085]'
                }`}
              >
                Doctors ({TEAM_MEMBERS.filter((m) => m.category === 'doctor').length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('embryology')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === 'embryology'
                    ? 'bg-[#603085] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#603085]'
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
                className="w-full bg-[#F5F2F8] rounded-2xl pt-1.5 px-3.5 pb-2.5 sm:pt-2 sm:px-4 sm:pb-3 border border-[#F0D5E6] hover:border-[#C49F64] shadow-[0_4px_16px_-4px_rgba(36,17,50,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group cursor-pointer hover:-translate-y-1"
                title={`Click to view full biography of ${doc.name}`}
              >
                {/* Doctor photos: cutout by default, clinic photo on hover */}
                <div className="relative w-full h-48 sm:w-36 sm:h-44 lg:w-40 lg:h-48 shrink-0 overflow-hidden bg-transparent img-shine-effect">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="absolute inset-0 w-full h-full object-contain object-bottom"
                    loading="lazy"
                  />
                  {doc.imageHover && (
                    <img
                      src={doc.imageHover}
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain object-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  )}
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3 pointer-events-none">
                    <span className="bg-white/95 text-[#603085] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      View Bio
                    </span>
                  </div>
                </div>

                {/* Doctor Details on right */}
                <div className="flex-1 min-w-0 flex flex-col justify-center pb-3.5 sm:pb-0">
                  {/* Role Tag */}
                  {doc.tag && (
                    <span className="inline-flex items-center gap-1.5 mb-1.5">
                      <span className="w-4 h-px bg-[#C49F64]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C49F64]">
                        {doc.tag}
                      </span>
                    </span>
                  )}

                  {/* Name: Purple by default, Gold on hover */}
                  <h3 className="font-serif text-[#603085] text-base sm:text-lg font-medium leading-snug mb-1 group-hover:text-[#C49F64] transition-colors duration-300">
                    {doc.name}
                  </h3>

                  {/* Role / Qualifications */}
                  <p className="text-[#6B7280] text-[11.5px] leading-relaxed mb-2 line-clamp-3">
                    {doc.role}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#603085] group-hover:text-[#C49F64] transition-colors duration-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" />
                    </svg>
                    <span className="font-medium">{doc.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA Banner */}
          <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#F5F2F8] via-[#F8E7F3] to-[#F5F2F8] rounded-3xl p-8 sm:p-12 border border-[#F0D5E6] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[#603085] font-bold text-xs uppercase tracking-wider block mb-1">
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
              className="shrink-0 px-7 py-3.5 bg-[#603085] hover:bg-[#4E276D] active:scale-95 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
            >
              MAKE AN APPOINTMENT
            </button>
          </div>

        </div>
      </section>

      {/* DETAILED TEAM MEMBER MODAL (Matching https://sequelivf.com/team/... design) */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto popup-scroll no-scrollbar bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#F0D5E6] overflow-hidden my-auto max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F5E6F0] bg-[#F5F2F8]/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C49F64]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#603085]">
                  Sequel IVF Specialist Profile
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="w-9 h-9 rounded-full bg-white hover:bg-[#F5F2F8] border border-[#F0D5E6] text-[#6B7280] hover:text-[#603085] flex items-center justify-center transition-colors cursor-pointer text-lg font-bold shadow-xs"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Scrollable Body: 2-Column Layout matching sequelivf.com */}
            <div className="overflow-y-auto popup-scroll no-scrollbar p-6 sm:p-8 lg:p-10 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                {/* LEFT COLUMN: Photo, Name in gold, Position, Experience, Location, Contact */}
                <div className="lg:col-span-5 flex flex-col">
                  {/* Photo Frame */}
                  <div className="w-full aspect-[4/5] sm:max-h-[380px] overflow-hidden bg-transparent mb-6 relative group/photo img-shine-effect">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="absolute inset-0 w-full h-full object-contain object-center"
                    />
                    {selectedMember.imageHover && (
                      <img
                        src={selectedMember.imageHover}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain object-center opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500"
                      />
                    )}
                  </div>

                  {selectedMember.tag && (
                    <span className="inline-flex items-center gap-1.5 mb-2">
                      <span className="w-5 h-px bg-[#C49F64]" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C49F64]">
                        {selectedMember.tag}
                      </span>
                    </span>
                  )}

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

                    {selectedMember.qualifications && (
                      <div>
                        <span className="font-semibold text-[#241132]">Qualifications:</span>{' '}
                        <span className="text-[#555555]">{selectedMember.qualifications}</span>
                      </div>
                    )}

                    <div>
                      <span className="font-semibold text-[#241132]">Experience:</span>{' '}
                      <span className="text-[#555555]">{selectedMember.experience}</span>
                    </div>

                    <div>
                      <span className="font-semibold text-[#241132]">Location:</span>{' '}
                      <span className="text-[#555555]">{selectedMember.location}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedMember(null)
                      if (onBookClick) onBookClick()
                    }}
                    className="w-full py-3.5 px-5 bg-[#603085] hover:bg-[#4E276D] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
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
                        <div key={idx} className="bg-[#F5F2F8]/60 p-4 rounded-xl border-l-4 border-[#C49F64]">
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
                            <span className="w-1.5 h-1.5 rounded-full bg-[#603085] shrink-0" />
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
