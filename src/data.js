export const siteData = {
  profile: {
    nameEnglish: 'Jinzhao Lian',
    nameChinese: '连瑾昭',
    institution: 'Renmin University of China',
    email: '2023201891@ruc.edu.cn',
    cvLabel: 'Download CV',
    cvFilename: 'cv of Jinzhao Lian.pdf',
    lastUpdated: 'August 2026',
  },
  about: {
    id: 'about',
    eyebrow: 'About me',
    headline: {
      before: 'Building',
      highlight: 'efficient',
      after: ', scalable systems for foundation models.',
    },
    description: [
      'My research interests lie in efficient and scalable systems for foundation models, with a focus on algorithm–system co-design for LLM serving on heterogeneous GPU clusters.',
      'I am also interested in systems support for agentic workloads.',
    ],
  },
  updates: {
    id: 'updates',
    title: "What's New",
    items: [
      {
        date: 'Jul 2026',
        content: 'Started an on-site research assistantship at The University of Hong Kong under the supervision of Prof. Shinan Liu.',
      },
      {
        date: 'Oct 2025',
        content: 'Completed my research internship at the University of Alberta.',
      },
      {
        date: 'Jul 2025',
        content: 'Started a research internship at the University of Alberta in Edmonton, Canada, under the supervision of Prof. Yize Chen.',
      },
    ],
  },
  education: {
    id: 'education',
    title: 'Education',
    items: [
      {
        university: 'Renmin University of China',
        location: 'Beijing, China',
        period: 'Expected Jun 2027',
        degree: 'B.Sc. in Statistics and Data Science',
        details: [
          { label: 'GPA', value: '3.63 / 4.00' },
          {
            label: 'Selected coursework',
            value: 'Deep Learning · Parallel Computing · Reinforcement Learning · Machine Learning · Mathematical Statistics · Optimization Methods',
          },
        ],
      },
    ],
  },
  research: {
    id: 'research',
    title: 'Research Experience',
    items: [
      {
        institution: 'The University of Hong Kong',
        project: 'Efficient Agent',
        role: 'Student Research Assistant · Supervisor: Prof. Shinan Liu',
        period: 'May 2026 — Aug 2026',
        location: 'Hong Kong, China',
        bullets: [
          'Developed a latency-free intent-drift detection method, achieving 40.2% exact step-localization accuracy on the RootSE development set without additional LLM calls.',
          'Supported ToolPulse’s cross-model evaluation by running Terminal-Bench 1 and 2 workloads across 11 LLM backends in Codex and Claude Code.',
        ],
      },
      {
        institution: 'University of Alberta',
        project: 'Efficient LLM Serving Systems',
        role: 'Summer Research Intern · Supervisor: Prof. Yize Chen',
        period: 'Jun 2025 — Oct 2025',
        location: 'Edmonton, Canada',
        bullets: [
          'Designed Least-Laxity-First scheduling to quantify request urgency and reduce SLO violations by 62.8% versus FCFS under high concurrency.',
          'Fine-tuned a BERT classifier for output-length prediction and trained an LSTM on Azure traces to forecast traffic peaks for proactive scaling.',
          'Re-optimized cluster-wide GPU allocation and tensor-parallel configurations every 30 minutes via MILP, reducing over-provisioning.',
          'Integrated scheduling and prediction into a router for vLLM inference engines, achieving 28.6% energy savings on production workloads.',
        ],
      },
    ],
  },
  publications: {
    id: 'publications',
    title: 'Publications',
    items: [
      {
        title: 'FREESH: Fair, Resource- and Energy-Efficient Scheduling for LLM Serving on Heterogeneous GPUs',
        authors: 'X. He*, Z. Fang*, J. Lian*, D. H. K. Tsang, B. Zhang, Y. Chen',
        venue: 'Under submission to IEEE TPDS',
        note: '* Equal contribution',
        href: 'https://arxiv.org/abs/2511.00807',
        links: [],
      },
      {
        title: 'ToolPulse: Side-Channel Eavesdropping on Tool-Using LLM Agents',
        authors: 'Z. Dan, J. Zhang, J. Lian, Y. Chen, S. Liu',
        venue: 'Under submission to USENIX Security',
        note: 'Manuscript under review',
        links: [],
      },
    ],
  },
  awards: {
    id: 'awards',
    title: 'Awards & Honors',
    items: [
      { name: 'China Scholarship Council (CSC) State-Sponsored Scholarship', year: '2025' },
      { name: 'National Second Prize, CUMCM', year: '2024' },
      { name: 'Meritorious Winner, MCM/ICM', year: '2025' },
      { name: 'Merit Student Award, Renmin University of China', year: '2024 · 2025' },
    ],
  },
  more: {
    id: 'more',
    title: 'Beyond Research',
    intro: 'Outside research, I enjoy fitness, badminton, and skiing.',
    groups: [],
  },
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'updates', label: "What's New" },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'awards', label: 'Awards' },
  { id: 'more', label: 'More' },
];
