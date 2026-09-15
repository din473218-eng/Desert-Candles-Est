import { CapabilityItem, ServiceItem, ApproachStep, WhyChooseUsItem } from './types';

export const CORE_CAPABILITIES: CapabilityItem[] = [
  {
    number: '01',
    title: 'Strategic HR',
    description: 'Align people strategy with business objectives.',
    icon: 'Target',
  },
  {
    number: '02',
    title: 'Innovative Solutions',
    description: 'Technology-enabled HR solutions for modern organizations.',
    icon: 'Lightbulb',
  },
  {
    number: '03',
    title: 'Customized Strategies',
    description: 'Solutions designed around each organization\'s unique needs.',
    icon: 'Users',
  },
  {
    number: '04',
    title: 'Experienced Professionals',
    description: 'Seasoned HR expertise across various industries.',
    icon: 'Award',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'strategic-hr-planning',
    number: '01',
    title: 'Strategic HR Planning',
    shortDesc: 'Aligning HR strategies with business goals to enhance overall performance.',
    fullDesc: 'We work closely with leadership teams to design long-term human resource strategies that directly support overarching commercial objectives. By auditing organizational capabilities and forecasting workforce requirements, we bridge current team competencies with future operational priorities.',
    benefits: [
      'Synchronized corporate vision with talent execution',
      'Data-driven organizational design and workforce planning',
      'Scalable framework for sustainable business growth',
      'Optimized human capital budget allocation'
    ],
    features: [
      'Organizational structure evaluation',
      'Succession planning architectures',
      'Competency modeling and talent mapping',
      'Executive alignment workshops'
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'talent-acquisition',
    number: '02',
    title: 'Talent Acquisition and Management',
    shortDesc: 'Streamlining the recruitment process to attract and retain top talent.',
    fullDesc: 'Modern talent demands an agile, technology-driven hiring methodology. Desert Candles integrates structured screening methodologies and employer branding techniques that attract top-tier professionals while substantially decreasing time-to-hire.',
    benefits: [
      'Higher retention rates through precision cultural fit',
      'Accelerated onboarding and talent pipeline velocity',
      'Enhanced employer brand prestige across the region',
      'Reduction in cost-per-hire and redundant interview cycles'
    ],
    features: [
      'Full-lifecycle recruitment workflow design',
      'Executive search and targeted headhunting',
      'Structured interview matrices and assessment tools',
      'Digital onboarding journey design'
    ],
    icon: 'UserCheck',
  },
  {
    id: 'employee-engagement',
    number: '03',
    title: 'Employee Engagement Solutions',
    shortDesc: 'Developing programs and initiatives to boost morale and increase productivity.',
    fullDesc: 'An engaged workforce is the catalyst for sustainable organizational profitability. We craft custom engagement ecosystems that nurture belonging, recognize high performers, and maintain healthy, collaborative workplace cultures across physical and hybrid environments.',
    benefits: [
      'Measurable reduction in voluntary turnover',
      'Elevated daily workforce productivity and initiative',
      'Resilient team dynamics and psychological safety',
      'Unified workplace culture aligned with core values'
    ],
    features: [
      'Custom employee sentiment and engagement audits',
      'Recognition and rewards framework architecture',
      'Workplace well-being and satisfaction programs',
      'Internal communication and feedback loop design'
    ],
    icon: 'HeartHandshake',
  },
  {
    id: 'performance-management',
    number: '04',
    title: 'Performance Management',
    shortDesc: 'Implementing systems to assess and improve employee performance effectively.',
    fullDesc: 'Transform traditional backward-looking appraisals into forward-looking continuous development engines. We implement objective evaluation frameworks, OKR/KPI cascades, and feedback channels that empower team members to reach peak performance.',
    benefits: [
      'Clear, transparent accountability at every hierarchy level',
      'Fair, objective appraisals tied directly to deliverables',
      'Timely identification of skill gaps and training needs',
      'Cultivation of high-performance leadership habits'
    ],
    features: [
      'KPI and OKR alignment systems',
      '360-degree appraisal process setup',
      'Continuous coaching and check-in templates',
      'Performance improvement plan (PIP) protocols'
    ],
    icon: 'BarChart3',
  },
  {
    id: 'compliance-risk',
    number: '05',
    title: 'Compliance and Risk Management',
    shortDesc: 'Helping businesses navigate the complex landscape of HR regulations and standards.',
    fullDesc: 'Protect your enterprise from legal vulnerabilities and regulatory friction. Our seasoned specialists ensure your human resource policies, contracts, employment practices, and documentation conform rigorously with Saudi labor regulations and international standards.',
    benefits: [
      'Full peace of mind regarding Saudi labor law compliance',
      'Mitigation of operational risks and costly penalties',
      'Standardized documentation across all employment tiers',
      'Resilient dispute resolution protocols'
    ],
    features: [
      'Comprehensive labor law compliance audits',
      'Employee handbook and policy drafting',
      'Employment contract and dispute documentation',
      'Regulatory reporting and workplace governance'
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'customized-e-services',
    number: '06',
    title: 'Customized E-Services',
    shortDesc: 'Utilizing technology to enhance HR processes, from onboarding to payroll and beyond.',
    fullDesc: 'Modernize legacy administrative tasks through automated, technology-driven e-services. We help organizations implement modern HR platforms, paperless self-service portals, automated payroll workflows, and digital documentation systems that liberate HR leaders to focus on strategic impact.',
    benefits: [
      'Elimination of manual paper-heavy bottlenecks',
      'Seamless digital record-keeping and audit trails',
      'Rapid employee self-service access from any device',
      'Real-time HR analytics and managerial visibility'
    ],
    features: [
      'HRMS and digital platform architecture advisory',
      'Automated payroll and attendance integration workflows',
      'Digital employee portals and self-service dashboards',
      'Cloud document management and secure e-signatures'
    ],
    icon: 'Laptop',
  },
];

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    title: 'EXPERTISE',
    description: 'Seasoned HR professionals with extensive experience across various industries.',
    icon: 'Briefcase',
  },
  {
    title: 'INNOVATIVE SOLUTIONS',
    description: 'We leverage the latest technology to provide efficient and effective HR services.',
    icon: 'Cpu',
  },
  {
    title: 'CUSTOMIZED STRATEGIES',
    description: 'Our tailored approach ensures solutions are aligned with your business objectives.',
    icon: 'Sliders',
  },
  {
    title: 'COMMITMENT TO EXCELLENCE',
    description: 'We are dedicated to delivering exceptional service and results that drive your organization forward.',
    icon: 'CheckCircle2',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'UNDERSTAND',
    description: 'Understand the organization\'s challenges, goals, people, and operational needs.',
    details: [
      'In-depth stakeholder interviews and organizational diagnostic',
      'Workforce demographic and capability mapping',
      'Identification of operational bottlenecks and culture dynamics',
    ],
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    description: 'Develop customized HR strategies aligned with business objectives.',
    details: [
      'Formulation of targeted human capital roadmaps',
      'Tailored organizational design and policy alignment',
      'KPI framework and measurable development milestones',
    ],
  },
  {
    step: '03',
    title: 'ENABLE',
    description: 'Use technology and innovative e-services to improve HR processes.',
    details: [
      'Deployment of modern digital HR workflows and e-services',
      'Implementation of self-service and automated routines',
      'Change management support and team enablement',
    ],
  },
  {
    step: '04',
    title: 'TRANSFORM',
    description: 'Build sustainable HR practices that address current challenges and anticipate future needs.',
    details: [
      'Continuous performance loops and institutionalization',
      'Talent readiness for future market opportunities',
      'Long-term sustainable organizational excellence',
    ],
  },
];

export const IMPACT_ITEMS = [
  {
    title: 'Better HR Strategy',
    description: 'Cohesive alignment between business goals and human capital management.',
    icon: 'Compass',
  },
  {
    title: 'Stronger Talent',
    description: 'Precision acquisition, streamlined pipelines, and high capability retention.',
    icon: 'Users2',
  },
  {
    title: 'Engaged Employees',
    description: 'Vibrant workplace culture with elevated morale, purpose, and loyalty.',
    icon: 'Heart',
  },
  {
    title: 'More Efficient Processes',
    description: 'Technology-driven e-services eliminating friction from daily workflows.',
    icon: 'Zap',
  },
];
