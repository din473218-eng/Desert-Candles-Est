import { ServiceItem, CapabilityItem, WhyChooseUsItem, ApproachStep, Language } from './types';

export interface TranslationData {
  dir: 'ltr' | 'rtl';
  brand: {
    name: string;
    sub: string;
    est: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    approach: string;
    whyUs: string;
    visionMission: string;
    contact: string;
    letsTalk: string;
    langSwitchLabel: string;
    currentLangCode: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    talkToExperts: string;
    exploreServices: string;
  };
  capabilities: CapabilityItem[];
  about: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    paragraph1: string;
    paragraph2: string;
    cta: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    learnMore: string;
    items: ServiceItem[];
  };
  serviceModal: {
    keyBenefits: string;
    coreDeliverables: string;
    bookConsultation: string;
    close: string;
  };
  whyChooseUs: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  approach: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  techVision: {
    tag: string;
    techHrTitle: string;
    techHrDesc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    transformTitle: string;
    transformDesc: string;
  };
  impact: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      icon: string;
    }[];
  };
  finalCta: {
    title: string;
    description: string;
    getInTouch: string;
    exploreServices: string;
  };
  contact: {
    title: string;
    description: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    sendAnother: string;
    errorRequired: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    dir: 'ltr',
    brand: {
      name: 'Desert Candles',
      sub: 'HR Consultancy & E-Services',
      est: 'Est.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      approach: 'Our Approach',
      whyUs: 'Why Choose Us',
      visionMission: 'Vision & Mission',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      langSwitchLabel: 'العربية',
      currentLangCode: 'EN',
    },
    hero: {
      eyebrow: 'DESERT CANDLES EST.',
      titleLine1: 'Illuminate Your Path',
      titleLine2: 'to HR Success',
      description:
        'Empowering organizations through strategic HR practices, innovative solutions, and technology-driven e-services.',
      talkToExperts: 'Talk to Our Experts',
      exploreServices: 'Explore Our Services',
    },
    capabilities: [
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
        description: "Solutions designed around each organization's unique needs.",
        icon: 'Users',
      },
      {
        number: '04',
        title: 'Experienced Professionals',
        description: 'Seasoned HR expertise across various industries.',
        icon: 'Award',
      },
    ],
    about: {
      eyebrow: 'ABOUT DESERT CANDLES',
      titleLine1: 'Human Capital. Technology.',
      titleLine2: 'Sustainable Growth.',
      paragraph1:
        'Desert Candles is a premier HR consultancy firm specializing in providing innovative e-services tailored to the unique needs of modern businesses.',
      paragraph2:
        'We help organizations optimize their human capital and leverage technology to foster a productive and engaged workforce.',
      cta: 'Discover Our Approach',
    },
    servicesSection: {
      eyebrow: 'OUR HR SOLUTIONS',
      title:
        "Comprehensive HR consulting and technology-driven services designed around your organization's needs.",
      learnMore: 'Learn More',
      items: [
        {
          id: 'strategic-hr-planning',
          number: '01',
          title: 'Strategic HR Planning',
          shortDesc: 'Aligning HR strategies with business goals to enhance overall performance.',
          fullDesc:
            'We work closely with leadership teams to design long-term human resource strategies that directly support overarching commercial objectives. By auditing organizational capabilities and forecasting workforce requirements, we bridge current team competencies with future operational priorities.',
          benefits: [
            'Synchronized corporate vision with talent execution',
            'Data-driven organizational design and workforce planning',
            'Scalable framework for sustainable business growth',
            'Optimized human capital budget allocation',
          ],
          features: [
            'Organizational structure evaluation',
            'Succession planning architectures',
            'Competency modeling and talent mapping',
            'Executive alignment workshops',
          ],
          icon: 'TrendingUp',
        },
        {
          id: 'talent-acquisition',
          number: '02',
          title: 'Talent Acquisition and Management',
          shortDesc: 'Streamlining the recruitment process to attract and retain top talent.',
          fullDesc:
            'Modern talent demands an agile, technology-driven hiring methodology. Desert Candles integrates structured screening methodologies and employer branding techniques that attract top-tier professionals while substantially decreasing time-to-hire.',
          benefits: [
            'Higher retention rates through precision cultural fit',
            'Accelerated onboarding and talent pipeline velocity',
            'Enhanced employer brand prestige across the region',
            'Reduction in cost-per-hire and redundant interview cycles',
          ],
          features: [
            'Full-lifecycle recruitment workflow design',
            'Executive search and targeted headhunting',
            'Structured interview matrices and assessment tools',
            'Digital onboarding journey design',
          ],
          icon: 'UserCheck',
        },
        {
          id: 'employee-engagement',
          number: '03',
          title: 'Employee Engagement Solutions',
          shortDesc: 'Developing programs and initiatives to boost morale and increase productivity.',
          fullDesc:
            'An engaged workforce is the catalyst for sustainable organizational profitability. We craft custom engagement ecosystems that nurture belonging, recognize high performers, and maintain healthy, collaborative workplace cultures across physical and hybrid environments.',
          benefits: [
            'Measurable reduction in voluntary turnover',
            'Elevated daily workforce productivity and initiative',
            'Resilient team dynamics and psychological safety',
            'Unified workplace culture aligned with core values',
          ],
          features: [
            'Custom employee sentiment and engagement audits',
            'Recognition and rewards framework architecture',
            'Workplace well-being and satisfaction programs',
            'Internal communication and feedback loop design',
          ],
          icon: 'HeartHandshake',
        },
        {
          id: 'performance-management',
          number: '04',
          title: 'Performance Management',
          shortDesc: 'Implementing systems to assess and improve employee performance effectively.',
          fullDesc:
            'Transform traditional backward-looking appraisals into forward-looking continuous development engines. We implement objective evaluation frameworks, OKR/KPI cascades, and feedback channels that empower team members to reach peak performance.',
          benefits: [
            'Clear, transparent accountability at every hierarchy level',
            'Fair, objective appraisals tied directly to deliverables',
            'Timely identification of skill gaps and training needs',
            'Cultivation of high-performance leadership habits',
          ],
          features: [
            'KPI and OKR alignment systems',
            '360-degree appraisal process setup',
            'Continuous coaching and check-in templates',
            'Performance improvement plan (PIP) protocols',
          ],
          icon: 'BarChart3',
        },
        {
          id: 'compliance-risk',
          number: '05',
          title: 'Compliance and Risk Management',
          shortDesc: 'Helping businesses navigate the complex landscape of HR regulations and standards.',
          fullDesc:
            'Protect your enterprise from legal vulnerabilities and regulatory friction. Our seasoned specialists ensure your human resource policies, contracts, employment practices, and documentation conform rigorously with Saudi labor regulations and international standards.',
          benefits: [
            'Full peace of mind regarding Saudi labor law compliance',
            'Mitigation of operational risks and costly penalties',
            'Standardized documentation across all employment tiers',
            'Resilient dispute resolution protocols',
          ],
          features: [
            'Comprehensive labor law compliance audits',
            'Employee handbook and policy drafting',
            'Employment contract and dispute documentation',
            'Regulatory reporting and workplace governance',
          ],
          icon: 'ShieldCheck',
        },
        {
          id: 'customized-e-services',
          number: '06',
          title: 'Customized E-Services',
          shortDesc: 'Utilizing technology to enhance HR processes, from onboarding to payroll and beyond.',
          fullDesc:
            'Modernize legacy administrative tasks through automated, technology-driven e-services. We help organizations implement modern HR platforms, paperless self-service portals, automated payroll workflows, and digital documentation systems that liberate HR leaders to focus on strategic impact.',
          benefits: [
            'Elimination of manual paper-heavy bottlenecks',
            'Seamless digital record-keeping and audit trails',
            'Rapid employee self-service access from any device',
            'Real-time HR analytics and managerial visibility',
          ],
          features: [
            'HRMS and digital platform architecture advisory',
            'Automated payroll and attendance integration workflows',
            'Digital employee portals and self-service dashboards',
            'Cloud document management and secure e-signatures',
          ],
          icon: 'Laptop',
        },
      ],
    },
    serviceModal: {
      keyBenefits: 'Key Strategic Benefits',
      coreDeliverables: 'Core Deliverables & Scope',
      bookConsultation: 'Book Consultation for This Solution',
      close: 'Close',
    },
    whyChooseUs: {
      eyebrow: 'WHY CHOOSE DESERT CANDLES',
      titleLine1: 'Why Organizations Choose',
      titleLine2: 'Desert Candles',
      description:
        'We combine deep HR expertise with innovative technology to deliver tailored solutions that drive real results.',
      items: [
        {
          title: 'Expertise',
          description: 'Seasoned HR professionals with extensive experience across various industries.',
          icon: 'Award',
        },
        {
          title: 'Innovative Solutions',
          description: 'Leveraging modern technology to provide efficient and effective HR services.',
          icon: 'Cpu',
        },
        {
          title: 'Customized Strategies',
          description: "Tailored solutions aligned with each organization's unique business objectives.",
          icon: 'Sliders',
        },
        {
          title: 'Commitment to Excellence',
          description: 'Dedicated to delivering exceptional service and results that move organizations forward.',
          icon: 'ShieldCheck',
        },
      ],
    },
    approach: {
      eyebrow: 'OUR APPROACH',
      titleLine1: 'Your Organization Is Unique.',
      titleLine2: 'Your HR Strategy Should Be Too.',
      description:
        'We believe every organization is different and deserves tailored solutions. Our team combines industry expertise with technology to create sustainable HR practices that anticipate future needs.',
      steps: [
        {
          number: '01',
          title: 'Understand',
          desc: "Understand the organization's challenges, goals, people, and operational needs.",
        },
        {
          number: '02',
          title: 'Strategize',
          desc: 'Develop customized HR strategies aligned with business objectives.',
        },
        {
          number: '03',
          title: 'Enable',
          desc: 'Use technology and innovative e-services to improve HR processes.',
        },
        {
          number: '04',
          title: 'Transform',
          desc: 'Build sustainable HR practices that address current challenges and anticipate future needs.',
        },
      ],
    },
    techVision: {
      tag: 'TECHNOLOGY + HR',
      techHrTitle: 'Where HR Expertise Meets Technology',
      techHrDesc: 'Desert Candles combines seasoned HR expertise with cutting-edge e-services for modern organizations.',
      visionTitle: 'Vision',
      visionDesc: 'To be a leading HR consultancy recognized for our innovative solutions and commitment to excellence.',
      missionTitle: 'Mission',
      missionDesc: 'To empower organizations through strategic HR practices and technology-driven e-services to foster a thriving workplace culture.',
      transformTitle: 'Transform',
      transformDesc: 'Build sustainable HR practices that address current challenges and anticipate future needs.',
    },
    impact: {
      title: 'The Impact We Create',
      subtitle: 'Helping organizations build stronger teams, better processes and a brighter future.',
      items: [
        { title: 'Better HR Strategy', icon: 'TrendingUp' },
        { title: 'Stronger Talent', icon: 'Users' },
        { title: 'Engaged Employees', icon: 'Heart' },
        { title: 'More Efficient Processes', icon: 'Cog' },
      ],
    },
    finalCta: {
      title: 'Ready to Transform Your HR?',
      description:
        "Let's explore how strategic HR practices and technology-driven e-services can support your organization's goals.",
      getInTouch: 'Get in Touch',
      exploreServices: 'Explore Our Services',
    },
    contact: {
      title: "Let's Start a Conversation",
      description:
        'If you are looking to transform your HR practices and leverage the power of e-services, Desert Candles is here to help.',
      namePlaceholder: 'Name *',
      emailPlaceholder: 'Email *',
      phonePlaceholder: 'Phone *',
      companyPlaceholder: 'Company *',
      messagePlaceholder: 'Message *',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Thank You for Your Inquiry',
      successDesc: 'Your message has been received. Our team will get back to you shortly.',
      sendAnother: 'Send Another Message',
      errorRequired: 'Please fill in required fields (Name, Email, Message).',
    },
    footer: {
      tagline: 'Strategic HR solutions and technology-driven e-services for modern organizations.',
      rights: '© Desert Candles Est. All rights reserved.',
    },
  },
  ar: {
    dir: 'rtl',
    brand: {
      name: 'شموع الصحراء',
      sub: 'استشارات الموارد البشرية والخدمات الإلكترونية',
      est: 'مؤسسة',
    },
    nav: {
      home: 'الرئيسية',
      about: 'عن المؤسسة',
      services: 'خدماتنا',
      approach: 'منهجيتنا',
      whyUs: 'لماذا تختارنا',
      visionMission: 'الرؤية والرسالة',
      contact: 'اتصل بنا',
      letsTalk: 'تواصل معنا',
      langSwitchLabel: 'English',
      currentLangCode: 'عربي',
    },
    hero: {
      eyebrow: 'مؤسسة شموع الصحراء',
      titleLine1: 'أنِر طريقك نحو',
      titleLine2: 'النجاح في الموارد البشرية',
      description:
        'تمكين المنظمات والشركات عبر ممارسات الموارد البشرية الاستراتيجية، والحلول المبتكرة، والخدمات الإلكترونية المتقدمة.',
      talkToExperts: 'تحدث مع خبرائنا',
      exploreServices: 'استكشف خدماتنا',
    },
    capabilities: [
      {
        number: '01',
        title: 'الموارد البشرية الاستراتيجية',
        description: 'مواءمة استراتيجية الأفراد مع الأهداف التجارية للمنظمة.',
        icon: 'Target',
      },
      {
        number: '02',
        title: 'حلول مبتكرة',
        description: 'حلول موارد بشرية مدعومة بالتقنية للمؤسسات العصرية.',
        icon: 'Lightbulb',
      },
      {
        number: '03',
        title: 'استراتيجيات مخصصة',
        description: 'حلول مصممة بدقة وفقاً للاحتياجات الفريدة لكل منشأة.',
        icon: 'Users',
      },
      {
        number: '04',
        title: 'كفاءات متمرسة',
        description: 'خبرات رائدة في استشارات الموارد البشرية عبر مختلف القطاعات.',
        icon: 'Award',
      },
    ],
    about: {
      eyebrow: 'عن شموع الصحراء',
      titleLine1: 'رأس المال البشري. التقنية.',
      titleLine2: 'النمو المستدام.',
      paragraph1:
        'تُعد مؤسسة شموع الصحراء بيت خبرة رائد في تقديم الاستشارات الإدارية وحلول الموارد البشرية والخدمات الإلكترونية المبتكرة المصممة خصيصاً لتلبية متطلبات بيئات الأعمال الحديثة.',
      paragraph2:
        'نساعد المنظمات على الارتقاء برأس مالها البشري والاستفادة المثلى من التقنية لبناء فرق عمل منتجة وعالية التفاعل والكفاءة لتحقيق النمو المستدام.',
      cta: 'اكتشف منهجية عملنا',
    },
    servicesSection: {
      eyebrow: 'حلولنا في الموارد البشرية',
      title:
        'خدمات استشارية وتقنية شاملة في الموارد البشرية مصممة خصيصاً لتلبية احتياجات منظمتك وتحقيق تطلعاتها.',
      learnMore: 'المزيد من التفاصيل',
      items: [
        {
          id: 'strategic-hr-planning',
          number: '01',
          title: 'التخطيط الاستراتيجي للموارد البشرية',
          shortDesc: 'مواءمة استراتيجيات الموارد البشرية مع أهداف العمل للارتقاء بالأداء المؤسسي الشامل.',
          fullDesc:
            'نعمل عن كثب مع القيادات التنفيذية لتصميم استراتيجيات طويلة المدى لإدارة رأس المال البشري بما يدعم الأهداف التجارية العليا. من خلال تشخيص القدرات الحالية والتنبؤ باحتياجات الكفاءات المستقبلية، نربط قدرات الفريق الحالية بالأولويات التشغيلية والاستراتيجية.',
          benefits: [
            'مواءمة كاملة بين رؤية المنظمة والتنفيذ الفعلي للكفاءات',
            'تصميم تنظيمي وتخطيط للقوى العاملة مبني على البيانات',
            'إطار عملي مرن وقابل للتوسع لتحقيق نمو مستدام',
            'تحسين كفاءة توظيف ميزانيات رأس المال البشري',
          ],
          features: [
            'تقييم وتطوير الهياكل التنظيمية',
            'بناء خطط التعاقب الوظيفي وإدارة المواهب الواعدة',
            'نمذجة الجدارات الوظيفية ورسم خرائط المهارات',
            'ورش عمل لمواءمة القيادات التنفيذية',
          ],
          icon: 'TrendingUp',
        },
        {
          id: 'talent-acquisition',
          number: '02',
          title: 'استقطاب وإدارة المواهب',
          shortDesc: 'تبسيط مسار التوظيف واستقطاب الكفاءات الاستثنائية والاحتفاظ بها بفاعلية.',
          fullDesc:
            'يتطلب جذب أفضل الكفاءات منهجيات توظيف ذكية قائمة على التقنية الحديثة. تقدم شموع الصحراء أساليب تقييم دقيقة وبناء هوية المنشأة كوجهة عمل مفضلة لجذب الكوادر المميزة مع تقليص وقت وتكلفة التوظيف.',
          benefits: [
            'رفع معدلات الاستبقاء من خلال الملاءمة الثقافية الدقيقة',
            'تسريع وتيرة إلحاق وتأهيل الموظفين الجدد',
            'تعزيز سمعة وجاذبية المنشأة في سوق العمل المحلي والإقليمي',
            'خفض كلفة التوظيف وإلغاء المراحل الإجرائية المكررة',
          ],
          features: [
            'تصميم دورة التوظيف والاستقطاب المتكاملة',
            'البحث التنفيذي واستقطاب القيادات العليا المتخصصة',
            'أدوات ومصفوفات المقابلات المنظمة والاختبارات المهنية',
            'تصميم رحلة التأهيل والاندماج الرقمي للموظفين الجدد',
          ],
          icon: 'UserCheck',
        },
        {
          id: 'employee-engagement',
          number: '03',
          title: 'حلول تعزيز اندماج وتفاعل الموظفين',
          shortDesc: 'تطوير مبادرات نوعية لرفع المعنويات وتحفيز الإنتاجية والانتماء المؤسسي.',
          fullDesc:
            'فريق العمل المندمج هو الركيزة الأساسية للربحية والاستقرار المؤسسي. نقوم بتصميم منظومات تفاعل مخصصة تغرس روح الانتماء، وتكافئ أصحاب الإنجاز، وتحافظ على بيئة عمل إيجابية ومحفزة في المقرات الرسمية وبيئات العمل الهجينة.',
          benefits: [
            'انخفاض ملموس في معدلات الدوران الوظيفي الطوعي',
            'زيادة ملحوظة في الإنتاجية والمبادرة اليومية للموظفين',
            'تعزيز الأمان النفسي وديناميكية العمل الجماعي',
            'ثقافة مؤسسية متماسكة ومنسجمة مع قيم المنظمة',
          ],
          features: [
            'استطلاعات ودراسات دورية لقياس رضا وتفاعل الموظفين',
            'تصميم برامج التقدير والمكافآت والحوافز',
            'مبادرات تعزيز جودة الحياة والصحة المهنية في بيئة العمل',
            'تطوير قنوات التواصل الداخلي وحلقات التغذية الراجعة',
          ],
          icon: 'HeartHandshake',
        },
        {
          id: 'performance-management',
          number: '04',
          title: 'إدارة وتطوير الأداء',
          shortDesc: 'تطبيق أنظمة ذكية لتقييم وتحسين أداء الموظفين وربطه بالنتائج بدقة وموضوعية.',
          fullDesc:
            'تحويل عمليات التقييم التقليدية إلى محركات تطور مستمرة ومستقبلية. نساعدك في تطبيق أطر تقييم موضوعية، وربط مؤشرات الأداء الرئيسية (KPIs) والأهداف والنتائج الرئيسية (OKRs)، لتمكين كل فرد من الوصول إلى أقصى طاقاته الإنتاجية.',
          benefits: [
            'مسؤولية واضحة وشفافة على كافة المستويات الإدارية',
            'تقييم عادل وموضوعي يرتبط بالمخرجات والإنجازات الحقيقية',
            'اكتشاف الفجوات التدريبية والمهارية وسرعة معالجتها',
            'غرس ثقافة الإنجاز والتميز القيادي في فرق العمل',
          ],
          features: [
            'تطوير وتطبيق أنظمة مؤشرات الأداء (KPIs) و(OKRs)',
            'إعداد وتفعيل نظام التقييم الشامل (360 درجة)',
            'نماذج المتابعة والتوجيه المستمر بين المدراء والموظفين',
            'بروتوكولات خطط تحسين وتطوير الأداء (PIP)',
          ],
          icon: 'BarChart3',
        },
        {
          id: 'compliance-risk',
          number: '05',
          title: 'الامتثال وإدارة المخاطر العمالية',
          shortDesc: 'مساعدة المنشآت في الامتثال للأنظمة واللوائح العمالية وحماية استقرار الأعمال.',
          fullDesc:
            'حماية منشأتك من الثغرات القانونية والنزاعات الإدارية. يضمن خبراؤنا مواءمة سياسات الموارد البشرية، والعقود، واللوائح التنظيمية، وإجراءات العمل مع نظام العمل السعودي والتشريعات المحلية والمعايير المعتمدة.',
          benefits: [
            'راحة بال تامة حيال الامتثال لنظام العمل السعودي ولوائحه',
            'تفادي المخاطر التشغيلية والغرامات والنزاعات القانونية',
            'توحيد وتوثيق الإجراءات والعقود لمختلف الفئات الوظيفية',
            'آليات احترافية لإدارة النزاعات وحفظ حقوق جميع الأطراف',
          ],
          features: [
            'تدقيق شامل للامتثال العمالي والسياسات الداخلية',
            'صياغة واعتماد لوائح تنظيم العمل ودليل الموظف',
            'صياغة العقود وتوثيق النماذج والإجراءات النظامية',
            'إدارة متطلبات الحوكمة والتقارير التنظيمية',
          ],
          icon: 'ShieldCheck',
        },
        {
          id: 'customized-e-services',
          number: '06',
          title: 'الخدمات الإلكترونية المخصصة للموارد البشرية',
          shortDesc: 'توظيف الحلول الرقمية لأتمتة وتسهيل عمليات الموارد البشرية من التعيين حتى الرواتب.',
          fullDesc:
            'تحديث المهام الإدارية الروتينية عبر خدمات إلكترونية مؤتمتة وموثوقة. نساعد المؤسسات في تطبيق منصات الموارد البشرية الحديثة، وبوابات الخدمة الذاتية الخالية من الأوراق، وأتمتة مسيرات الرواتب والمستندات الرقمية لتفرغ الإدارة للتركيز على الأهداف الاستراتيجية.',
          benefits: [
            'التخلص التام من المعاملات الورقية والتعطيل الإداري',
            'أرشفة وسجلات رقمية آمنة ومتاحة للتدقيق الفوري',
            'خدمة ذاتية سلسة للموظفين عبر مختلف الأجهزة الذكية',
            'لوحات تحليلات ومؤشرات لحظية تدعم اتخاذ القرار',
          ],
          features: [
            'استشارات اختيار وتطبيق أنظمة الموارد البشرية (HRMS)',
            'أتمتة دورات الرواتب والحضور والانصراف والإجازات',
            'تطوير بوابات الموظفين والخدمات الذاتية الذكية',
            'إدارة الوثائق السحابية والتوقيع الإلكتروني المعتمد',
          ],
          icon: 'Laptop',
        },
      ],
    },
    serviceModal: {
      keyBenefits: 'أبرز المزايا الاستراتيجية',
      coreDeliverables: 'نطاق العمل والمخرجات الرئيسية',
      bookConsultation: 'طلب استشارة لهذه الخدمة',
      close: 'إغلاق',
    },
    whyChooseUs: {
      eyebrow: 'لماذا تختار شموع الصحراء',
      titleLine1: 'لماذا تختار المنظمات',
      titleLine2: 'مؤسسة شموع الصحراء',
      description:
        'نجمع بين الخبرة العميقة في الموارد البشرية والحلول التقنية المبتكرة لنقدم نتائج ملموسة تحقق تطلعاتك.',
      items: [
        {
          title: 'الخبرة والكفاءة',
          description: 'مستشارون ومحترفون متمرسون بخبرات استشارية وتشغيلية واسعة في مختلف القطاعات.',
          icon: 'Award',
        },
        {
          title: 'حلول مبتكرة',
          description: 'توظيف أحدث التقنيات لتقديم خدمات وممارسات موارد بشرية فائقة الفاعلية والسرعة.',
          icon: 'Cpu',
        },
        {
          title: 'استراتيجيات مخصصة',
          description: 'حلول مرنة ومدروسة تتوافق تماماً مع الأهداف التشغيلية والهوية الفريدة لكل منشأة.',
          icon: 'Sliders',
        },
        {
          title: 'الالتزام بالتميز',
          description: 'تفانٍ كامل في تقديم أعلى معايير الجودة والنتائج الملموسة التي تدفع منظمتك نحو الريادة.',
          icon: 'ShieldCheck',
        },
      ],
    },
    approach: {
      eyebrow: 'منهجية عملنا',
      titleLine1: 'منظمتك فريدة ومميزة.',
      titleLine2: 'واستراتيجيتك يجب أن تكون كذلك.',
      description:
        'نؤمن بأن لكل منظمة هويتها وتحدياتها الخاصة. يجمع فريقنا بين المعرفة المعمقة في السوق السعودي والحلول التقنية لابتكار ممارسات مستدامة تواكب التطلعات وتستشرف المستقبل.',
      steps: [
        {
          number: '01',
          title: 'الفهم والتشخيص',
          desc: 'فهم عميق ودقيق لتحديات المنشأة، أهدافها الاستراتيجية، كوادرها، واحتياجاتها التشغيلية.',
        },
        {
          number: '02',
          title: 'التخطيط والاستراتيجية',
          desc: 'بناء وتطوير استراتيجيات موارد بشرية مفصلة تتناغم تماماً مع أهداف العمل التجارية.',
        },
        {
          number: '03',
          title: 'التمكين والتقنية',
          desc: 'توظيف الحلول والخدمات الإلكترونية المبتكرة لأتمتة ورفع كفاءة وسلاسة العمليات.',
        },
        {
          number: '04',
          title: 'التحول والاستدامة',
          desc: 'ترسيخ ممارسات موارد بشرية مستدامة تعالج تحديات اليوم وتستبق متطلبات الغد.',
        },
      ],
    },
    techVision: {
      tag: 'التقنية + الموارد البشرية',
      techHrTitle: 'حيث تلتقي خبرة الموارد البشرية بالتقنية',
      techHrDesc:
        'تجمع شموع الصحراء بين الاستشارات المتخصصة وأحدث الخدمات الإلكترونية لتمكين بيئات الأعمال الحديثة.',
      visionTitle: 'رؤيتنا',
      visionDesc:
        'أن نكون بيت الخبرة الرائد في استشارات الموارد البشرية والحلول الرقمية المبتكرة في المملكة والمنطقة.',
      missionTitle: 'رسالتنا',
      missionDesc:
        'تمكين المنظمات عبر ممارسات استراتيجية وخدمات إلكترونية ذكية تعزز ثقافة عمل منتجة ومحفزة على الإبداع.',
      transformTitle: 'التحول المؤسسي',
      transformDesc:
        'بناء ممارسات مستدامة تعالج تحديات الحاضر وتستبق الاحتياجات المستقبلية بثقة.',
    },
    impact: {
      title: 'الأثر الذي نصنعه',
      subtitle: 'مساعدة المنظمات على بناء كفاءات أقوى، وعمليات أكثر كفاءة، ومستقبل أكثر إشراقاً.',
      items: [
        { title: 'استراتيجية موارد بشرية متطورة', icon: 'TrendingUp' },
        { title: 'استقطاب وتنمية أفضل المواهب', icon: 'Users' },
        { title: 'بيئة عمل محفزة وموظفون مندمجون', icon: 'Heart' },
        { title: 'عمليات وإجراءات أكثر سلاسة وكفاءة', icon: 'Cog' },
      ],
    },
    finalCta: {
      title: 'هل أنت مستعد لتطوير منظومة الموارد البشرية؟',
      description:
        'دعنا نستكشف معاً كيف ترتقي الممارسات الاستراتيجية والخدمات الإلكترونية بأهداف وتطلعات منشأتك.',
      getInTouch: 'تواصل معنا اليوم',
      exploreServices: 'استكشف خدماتنا',
    },
    contact: {
      title: 'ابدأ معنا محادثة مثمرة',
      description:
        'إذا كنت تتطلع إلى الارتقاء بممارسات الموارد البشرية والاستفادة من قوة الخدمات الإلكترونية، فإن فريق شموع الصحراء على أتم الاستعداد لمساعدتك.',
      namePlaceholder: 'الاسم الكريم *',
      emailPlaceholder: 'البريد الإلكتروني *',
      phonePlaceholder: 'رقم الهاتف / الجوال *',
      companyPlaceholder: 'اسم المنشأة أو الشركة *',
      messagePlaceholder: 'اكتب رسالتك أو استفسارك هنا *',
      sendMessage: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      successTitle: 'شكراً لتواصلك معنا',
      successDesc: 'تم استلام رسالتك بنجاح، وسيتواصل معك مستشارونا في أقرب وقت ممكن.',
      sendAnother: 'إرسال رسالة أخرى',
      errorRequired: 'يرجى تعبئة الحقول المطلوبة (الاسم، البريد الإلكتروني، الرسالة).',
    },
    footer: {
      tagline: 'حلول استراتيجية في الموارد البشرية وخدمات إلكترونية متطورة للمنظمات الحديثة.',
      rights: '© جميع الحقوق محفوظة لمؤسسة شموع الصحراء.',
    },
  },
};
