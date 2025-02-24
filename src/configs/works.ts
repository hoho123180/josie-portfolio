const TAG = {
  '0-1': '0-1',
  'user research': 'user research',
  'usability test2C': 'usability test2C',
  '2C': '2C',
  'Product roadmap': 'Product roadmap',
  UIUX: 'UIUX',
  UI: 'UI',
  CSS: 'CSS',
  AI: 'AI',
  Web: 'Web',
  '2B': '2B',
  Saas: 'Saas',
  'core-feature': 'core-feature',
  'Product Management': 'Product Management',
  'IP design': 'IP design',
  dashboard: 'dashboard',
  Graphic: 'Graphic',
  LABEL: 'LABEL',
} as const

export const Works: WorkGroups = {
  core: [
    {
      image: 'portfolio-cake-meet.png',
      title: 'Cake Meet',
      description:
        'I led the design of “Cake Meet” from 0-1, from user research, drawing up mechanism, to designing implementation.',
      tags: [
        TAG['0-1'],
        TAG['user research'],
        TAG['usability test2C'],
        TAG['2C'],
      ],
      href: 'https://www.figma.com/proto/FyBBBnYeovZZwMIb9L3zRz/[Demo]Cake-Meet?page-id=0%3A1&node-id=1-3485&viewport=1253%2C445%2C0.05&t=NTNeYdzOpcW166uV-1&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A3485',
      isWorking: false,
    },
    {
      image: 'portfolio-cake-app-resume-builder.png',
      title: 'Cake Resume Builder for APP',
      description:
        'Transition web-based Resume Builder tool into mobile app, for a better edit experience.',
      tags: [TAG['Product roadmap'], TAG.UIUX, TAG.CSS, TAG['2C']],
      href: 'https://www.figma.com/proto/UnAJ9bjyvBCnsjdleigb2m/[Demo]Cake-App-Resume-builder?page-id=0%3A1&node-id=2006-2363&viewport=2781%2C483%2C0.08&t=ZglXueSVI7kZv1do-1&scaling=contain&content-scaling=fixed',
      isWorking: false,
    },
    {
      image: 'portfolio-AI-resume-checker.png',
      title: 'Cake AI Resume Health Checker',
      description:
        'Transition web-based Resume Builder tool into mobile app, for a better edit experience.',
      tags: [TAG.AI, TAG.UIUX, TAG.Web, TAG['2C']],
      href: 'https://www.behance.net/gallery/204779651/Cake-AI-Resume-Health-Checker',
      isWorking: false,
    },
    {
      image: 'portfolio-cake-ctm.png',
      title: 'Cake Employer Dashboard',
      description:
        'We are improving our B2B services by providing recruiters with an easier, all-in-one workspace, including Talent Search, ATS, Company Page, and other core B2B features revamp. ',
      tags: [TAG['2B'], TAG.Saas, TAG['core-feature']],
      href: '',
      isWorking: true,
    },
    {
      image: 'portfolio-cake-ats.png',
      title: 'Cake Applicants Tracking System ',
      description:
        'Redesigned the legacy ATS system and integrated it into the CTM Dashboard framework, creating an improved experience that allows employers to manage jobs, talent, applications, and interviews more easily.',
      tags: [TAG['2B'], TAG.Saas, TAG['core-feature']],
      href: '',
      isWorking: true,
    },
  ],
  other: [
    {
      image: 'portfolio-japan-currency-APP.gif',
      title: 'Side Project｜JAPAN GO APP',
      description:
        'Helping budget-conscious Taiwanese travelers easily manage their expenses during a busy trip to Japan.',
      tags: [TAG['0-1'], TAG['user research'], TAG['Product roadmap']],
      href: 'https://docs.google.com/presentation/d/1zNfDfN8v-gyBbybnRFXbf3hIGwU3lVyvioB0Qv-8sBU/edit?usp=sharing',
      isWorking: false,
    },
    {
      image: 'portofolio-wemo-annual-campaign.jpg',
      title: 'ＷeMo｜Xmas Campaign',
      description:
        'Project work was 80% UI and 20% UX, focusing on web and app interface design, event visuals, and event IP design.',
      tags: [TAG.UI, TAG['IP design'], TAG.Graphic],
      href: 'https://www.behance.net/gallery/133904873/APPWEB-Xmas-Campaign-UI',
      isWorking: false,
    },
    {
      image: 'portfolio-biketracking.jpg',
      title: 'ＷeMo｜Bike Tracking System',
      description:
        "Designed the 2b dashboard of bike tracking system, planning workflows and interfaces based on stakeholders' requirements.",
      tags: [TAG['2B'], TAG.Saas, TAG.dashboard],
      href: 'https://docs.google.com/presentation/d/1E_WAXmgm04Vt5ymxTiTxRy7g31jPq82ZYUoV7oXUYk8/edit?usp=sharing',
      isWorking: false,
    },
  ],
}

export type WorkGroups = {
  core: Work[]
  other: Work[]
}

export type Work = {
  image: string
  title: string
  description: string
  tags: string[]
  href: string
  isWorking: boolean
}
