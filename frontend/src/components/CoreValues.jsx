import {
  Award,
  BadgeCheck,
  Cog,
  Dna,
  FlaskConical,
  Globe,
  GraduationCap,
  HeartHandshake,
  LockKeyhole,
  MessagesSquare,
  Microscope,
  Route,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Trophy,
} from 'lucide-react'

const PURPLE = '#603085'

const GROUPS = [
  {
    title: 'CONSISTENCY',
    items: [
      { icon: Trophy, text: '30+ years of excellence.' },
      { icon: HeartHandshake, text: '60,000+ happy families.' },
      { icon: Globe, text: '25+ centres of support across the globe.' },
      { icon: FlaskConical, text: '100+ lab-designed solutions.' },
    ],
  },
  {
    title: 'PROFICIENCY',
    items: [
      { icon: Stethoscope, text: 'Expert clinical leadership.' },
      { icon: Microscope, text: 'ESHRE Certified Clinical Embryologists.' },
      { icon: GraduationCap, text: 'Accredited MUHS & ICOG fellowship mentorship.' },
      { icon: Dna, text: 'Advanced Embryology Laboratory.' },
    ],
  },
  {
    title: 'RELIABILITY',
    items: [
      { icon: ShieldCheck, text: 'Uncompromising safety protocols.' },
      { icon: BadgeCheck, text: 'Continuous Quality Assurance.' },
      { icon: Cog, text: 'Precision Technology.' },
      { icon: TrendingUp, text: 'Strict KPI monitoring.' },
    ],
  },
  {
    title: 'TRANSPARENCY',
    items: [
      { icon: Award, text: '100% regulatory compliance.' },
      { icon: Route, text: 'Clear step-by-step treatment pathways.' },
      { icon: MessagesSquare, text: 'Upfront communication.' },
      { icon: LockKeyhole, text: 'Absolute confidentiality.' },
    ],
  },
]

const LOOP = [...GROUPS, ...GROUPS]

function GoldRule({ flip }) {
  const fade = flip
    ? 'linear-gradient(90deg, #C49F64 0%, #E8D5A3 48%, transparent 100%)'
    : 'linear-gradient(90deg, transparent 0%, #E8D5A3 52%, #C49F64 100%)'

  return (
    <div className={`flex-1 flex items-center gap-2 sm:gap-2.5 max-w-[90px] sm:max-w-[200px] lg:max-w-[280px] ${flip ? 'flex-row-reverse' : ''}`}>
      <span className="shrink-0 w-[7px] h-[7px] rotate-45 bg-[#C49F64] shadow-[0_0_10px_rgba(196,159,100,0.45)]" />
      <div className="flex-1 flex flex-col gap-[3px]">
        <span className="block h-[1.5px] rounded-full" style={{ background: fade }} />
        <span className="block h-[1.5px] rounded-full opacity-80" style={{ background: fade }} />
      </div>
    </div>
  )
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-3">
      <GoldRule />
      <h3
        className="shrink-0 font-heading font-extrabold text-[13px] sm:text-[18px] md:text-[20px] tracking-[0.12em] sm:tracking-[0.18em] uppercase"
        style={{ color: PURPLE }}
      >
        {title}
      </h3>
      <GoldRule flip />
    </div>
  )
}

function ValueCard({ icon: Icon, text }) {
  return (
    <div className="relative flex items-center gap-2 sm:gap-3 rounded-[16px] sm:rounded-[20px] px-2 py-2 sm:px-3.5 sm:py-2.5 min-h-[62px] sm:min-h-[68px] bg-[#FBF8FD] border border-[#603085] shadow-[0_16px_28px_-12px_rgba(96,48,133,0.35)] overflow-hidden">
      <div className="relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.6px] border-[#603085] bg-[#603085] flex items-center justify-center shadow-[0_8px_16px_-6px_rgba(96,48,133,0.55)]">
        <Icon
          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
          strokeWidth={1.85}
        />
      </div>

      <p className="relative font-heading font-semibold sm:font-bold text-[12px] sm:text-[15px] lg:text-[15.5px] leading-snug sm:leading-tight text-[#4E276D]">
        {text}
      </p>
    </div>
  )
}

export default function CoreValues() {
  return (
    <div className="relative z-10 mx-auto max-w-[1400px] px-3.5 sm:px-6 lg:px-10 mt-4 sm:mt-5 pt-1 pb-1">
      <div className="values-marquee relative overflow-hidden h-[384px] sm:h-[400px] lg:h-[396px] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
        <div className="values-marquee-track will-change-transform">
          {LOOP.map((group, index) => (
            <div
              key={`${group.title}-${index}`}
              className="h-[192px] sm:h-[200px] lg:h-[132px] flex flex-col justify-center"
            >
              <SectionTitle title={group.title} />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                {group.items.map((item) => (
                  <ValueCard key={`${item.text}-${index}`} icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
