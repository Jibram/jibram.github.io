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
    "Software engineer with 5+ years building ML and AI systems end to end, from models and data pipelines to the product and release infrastructure around them. At Google, built ML reserve-pricing models that generated $10M+ in revenue, plus the MLOps pipelines that trained and tuned them. Currently building release infrastructure for Letta's desktop app.",
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
      ROLE: 'Senior Software Engineer (Contracting for Letta, an AI research lab)',
      LOCATION: 'Remote (SF Bay Area)',
      START: '08/2026',
      END: 'Present',
      INFO: [
        "Proposed and built a packaged end-to-end (e2e) test stage in GitHub Actions for Letta's Electron desktop app, testing the fully built app users install and gating production promotion on failure.",
        'Caught a couple of packaging regressions (asar, native modules) that the existing e2e suite missed in its first week, including an open user-reported bug; fixed both.',
      ],
    },
    {
      MONOGRAM: 'HC',
      COMPANY: 'HumaniCore / Chelys',
      LINK: 'https://www.humanicore.ai/',
      ROLE: 'Independent Software Engineer',
      LOCATION: 'Remote (SF Bay Area)',
      START: '03/2026',
      END: 'Present',
      LINKS: {
        'humanicore.ai': 'https://www.humanicore.ai/',
        'chelys.io': 'https://chelys.io/',
      },
      INFO: [
        'Built and launched the marketing sites and user intake funnels for two pre-seed startups (chelys.io, humanicore.ai), setting up DNS, GitHub-connected Vercel preview and production deploys, and initial AWS/Supabase services.',
        'Built the server-side intake flow in Astro with input scrubbing and rate limiting; advised founders on product direction and the feasibility and scaling of services.',
      ],
    },
    {
      LOGO: datavantLogo,
      COMPANY: 'Datavant',
      LINK: 'https://datavant.com/',
      ROLE: 'Software Engineer',
      LOCATION: 'Remote (SF Bay Area)',
      START: '09/2025',
      END: '11/2025',
      INFO: [
        'Extended an ELT pipeline (Python, SQL, Snowflake) to support a client-specific schema, including database migrations and intermediate-table transformations, taking the client live on a production searchable database.',
        'Integrated the new data into the existing customer-matching and heuristic-ranking workflow across Python/FastAPI services, AWS RDS, and Snowflake.',
      ],
    },
    {
      LOGO: googleLogo,
      COMPANY: 'Google',
      LINK: 'https://www.google.com/',
      ROLE: 'Software Engineer',
      LOCATION: 'Remote',
      START: '10/2021',
      END: '11/2024',
      INFO: [
        'Engineered ML reserve-pricing models for sparse travel-ads auctions and deployed region-specific variants, generating 2.5%+ revenue lift ($10M+).',
        'Extended large-scale MLOps pipelines for deep neural networks (TensorFlow, TFX, distributed C++ data processing with Flume) to new ad verticals, tuning model capacity, layers, and training stability for each.',
        'Built a simulation pipeline on Google Vizier (Bayesian optimization) that automated hyperparameter retuning after model or data changes, replacing manual engineer tuning with configs optimized for maximum profit and minimal click loss.',
      ],
    },
    {
      LOGO: ancestryLogo,
      COMPANY: 'Ancestry',
      LINK: 'http://ancestry.com/',
      ROLE: 'Associate Software Engineer',
      LOCATION: 'Remote',
      START: '01/2020',
      END: '10/2021',
      INFO: [
        'Improved checkout conversion by using funnel drop-off and error-rate dashboards to find struggling user groups, then shipping and A/B testing React component fixes.',
        'Built go-to-market features, including multi-region and multi-language validation, that opened new international markets and contributed to 5%+ user growth.',
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
      ['TensorFlow', 'TFX', 'Vizier', 'Snowflake'],
      ['AWS', 'GCP', 'GitHub Actions', 'CI/CD', 'Vercel', 'Supabase'],
      [
        'FastAPI',
        'Node.js',
        'gRPC',
        'React',
        'Electron',
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
