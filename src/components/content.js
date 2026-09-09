import mePicture from '../assets/images/me.jpg';
import gmailLogo from '../assets/images/gmail.webp';
import linkedinLogo from '../assets/images/linkedIn.webp';
import githubLogo from '../assets/images/github.svg';
import githubLogoDark from '../assets/images/github-darkmode.svg';
import ancestryLogo from '../assets/images/ancestry.webp';
import googleLogo from '../assets/images/google.webp';
import datavantLogo from '../assets/images/datavant.webp';
import ucmLogo from '../assets/images/ucmerced.webp';

var content = {
  ME: {
    PHOTO: mePicture,
    NAME: 'Jibram Jimenez-Loza',
  },
  ABOUT:
    'Versatile Software Engineer with 5+ years of experience building scalable production systems and early-stage infrastructure. Proven track record at Google generating $10M+ in revenue through ML-driven pricing models and optimizing MLOps pipelines. Experienced in both high-scale distributed systems and rapid, independent product development. Skilled in Python, JavaScript, C++, and cloud-native architecture, with a focus on ownership, reliability, and measurable business impact.',
  CONTACT: [
    {
      SRC: gmailLogo,
      ALT: 'jibramswe@gmail.com',
      HREF: 'mailto:jibramswe@gmail.com',
    },
    {
      SRC: linkedinLogo,
      ALT: 'LinkedIn',
      HREF: 'https://www.linkedin.com/in/Jibram',
    },
    {
      SRC: githubLogo,
      SRCDARK: githubLogoDark,
      ALT: 'GitHub',
      HREF: 'https://www.github.com/Jibram',
    },
  ],
  EXPERIENCES: [
    {
      MONOGRAM: 'NH',
      COMPANY: 'Nob Hill Labs',
      LINK: 'https://nobhill.dev/',
      ROLE: 'Senior Software Engineer (Contracting for Letta)',
      LOCATION: 'San Francisco, CA',
      START: '08/2026',
      END: 'Present',
      INFO: [
        'Built and integrated a packaged smoke-test stage into the Letta desktop app release pipeline; caught and fixed a Linux regression and established automated gating before production promotion.',
      ],
    },
    {
      MONOGRAM: 'HC',
      COMPANY: 'HumaniCore / Chelys',
      LINK: 'https://www.humanicore.ai/',
      ROLE: 'Independent Software Engineer',
      LOCATION: 'San Francisco, CA',
      START: '03/2026',
      END: 'Present',
      LINKS: {
        'humanicore.ai': 'https://www.humanicore.ai/',
        'chelys.io': 'https://chelys.io/',
      },
      INFO: [
        'Built and deployed the humanicore.ai and chelys.io websites, configuring DNS, GitHub-connected Vercel preview and production deployments, and initial AWS/Supabase services.',
        'Implemented an Astro server-side user-submission flow with input scrubbing and rate limiting; contributed early technical and product-direction input for both pre-seed initiatives.',
      ],
    },
    {
      LOGO: datavantLogo,
      COMPANY: 'Datavant',
      LINK: 'https://datavant.com/',
      ROLE: 'Software Engineer',
      LOCATION: 'San Francisco, CA',
      START: '09/2025',
      END: '11/2025',
      INFO: [
        'Extended a customer data-ingestion workflow for a client-specific schema, including Snowflake-backed data loading, database migrations, and intermediate-table transformations for a production searchable database.',
        'Integrated the new data with an existing customer-matching and heuristic-ranking workflow across Python/FastAPI services, AWS RDS, and Snowflake.',
      ],
    },
    {
      LOGO: googleLogo,
      COMPANY: 'Google',
      LINK: 'https://www.google.com/',
      ROLE: 'Software Engineer',
      LOCATION: 'Mountain View, CA',
      START: '10/2021',
      END: '11/2024',
      INFO: [
        'Engineered ML-driven reserve-pricing models for sparse auction environments, improving market efficiency and generating 2.5%+ revenue lift ($10M+).',
        `Extended large-scale data and MLOps pipelines for deep neural networks using Google's C++ distributed framework, Flume, and TFX; improved accuracy by 10% across new verticals.`,
        'Automated hyperparameter tuning with Google Vizier / Bayesian optimization by creating a simulation pipeline to evaluate model configurations after release, saving 10 developer-hours per cycle.',
        'Deployed region-specific model architectures, optimizing inference and ad ranking for targeted geographies to maximize click-through rate and revenue.',
      ],
    },
    {
      LOGO: ancestryLogo,
      COMPANY: 'Ancestry',
      LINK: 'http://ancestry.com/',
      ROLE: 'Associate Software Engineer',
      LOCATION: 'San Francisco, CA',
      START: '01/2020',
      END: '10/2021',
      INFO: [
        'Optimized checkout UX through iterative experiments on component design, improving conversion rates.',
        'Contributed to over 5% user growth with go-to-market features that enabled users in new international markets.',
        'Implemented multi-region and multi-language validation, supporting international go-to-market campaigns.',
      ],
    },
  ],
  SCHOOLS: [
    {
      LOGO: ucmLogo,
      NAME: 'University of California, Merced',
      DEGREE: 'BSc in Computer Science and Engineering',
      EXTRA: "Dean's Honors (3.6 GPA)",
      START: '08/2016',
      END: '12/2019',
      CLASSES: [
        'Algorithm Analysis',
        'Computer Networks',
        'Distributed Systems',
      ],
    },
  ],
  // Each list is split into clusters, strongest/most-central first. The UI
  // renders clusters inline, separated by a middot, with no sub-headings.
  SKILLS: {
    LANGUAGES: [
      ['Python', 'C++', 'SQL'],
      ['TypeScript', 'JavaScript'],
    ],
    TECHNOLOGIES: [
      ['FastAPI', 'Node.js', 'gRPC', 'Snowflake', 'AWS RDS'],
      ['AWS', 'GCP', 'Vercel', 'Supabase', 'CI/CD'],
      [
        'TensorFlow',
        'TFX',
        'Pandas',
        'scikit-learn',
        'React',
        'Astro',
        'Jest',
        'Cypress',
      ],
    ],
    SPOKEN: [['English 🇺🇸', 'Español 🇲🇽', '한국어 🇰🇷']],
  },
  AWARDS: [],
};

export default content;
