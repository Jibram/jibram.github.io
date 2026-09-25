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
    'Software Engineer with 5+ years of experience building ML and AI systems end to end, from models and data pipelines to the product and release infrastructure around them. At Google, built ML-driven reserve-pricing models that generated $10M+ in revenue and extended large-scale MLOps pipelines. Since then, has owned release infrastructure for the Letta desktop app and 0-to-1 engineering for early-stage startups. Skilled in Python, C++, TypeScript, and cloud-native architecture.',
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
        'Proposed and built a packaged e2e stage for the Letta desktop release pipeline, testing the fully built app users install and gating production promotion on failure.',
        'Caught a couple of packaging regressions (asar, native modules) the existing e2e suite missed in its first week, including an open user-reported bug; fixed both.',
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
        'Owned 0-to-1 engineering for two pre-seed startups, launching humanicore.ai and chelys.io with DNS, GitHub-connected Vercel preview and production pipelines, and initial AWS/Supabase services.',
        'Built a server-side submission flow in Astro with input scrubbing and rate limiting; advised founders on early technical and product direction.',
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
        'Extended an ELT pipeline to support a client-specific schema, including Snowflake loading, database migrations, and intermediate-table transformations, taking the client live on a production searchable database.',
        'Integrated the new data into the existing customer-matching and heuristic-ranking workflow across Python/FastAPI services, AWS RDS, and Snowflake.',
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
