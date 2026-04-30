import mePicture from '../assets/images/me.jpg';
import gmailLogo from '../assets/images/gmail.webp';
import linkedinLogo from '../assets/images/linkedIn.webp';
import githubLogo from '../assets/images/github.svg';
import githubLogoDark from '../assets/images/github-darkmode.svg';
import ancestryLogo from '../assets/images/ancestry.webp';
import googleLogo from '../assets/images/google.webp';
import ucmcvlLogo from '../assets/images/ucmcvl.webp';
import palsLogo from '../assets/images/pals.webp';
import ucmLogo from '../assets/images/ucmerced.webp';
import yonseiLogo from '../assets/images/yonsei.webp';

var content = {
  ME: {
    PHOTO: mePicture,
    NAME: 'Jibram Jimenez-Loza',
  },
  ABOUT:
    'Full-Stack ML Engineer with 5 years of experience building production-scale MLOps pipelines (Google) and full-stack web applications (Ancestry). Proven ability to train deep neural networks (DNNs) and deploy them into end-to-end, user-facing systems.',
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
      LOGO: googleLogo,
      COMPANY: 'Google',
      LINK: 'https://www.google.com/travel/search',
      ROLE: 'Software Engineer',
      LOCATION: 'Mountain View, CA',
      START: '10/2021',
      END: '11/2024',
      INFO: [
        'Engineered ML-driven reserve pricing models to optimize yield in sparse auction environments, improving market efficiency and driving over 2.5% in revenue gains ($10M+).',
        `Extended large-scale data and MLOps pipelines for Deep Neural Networks (DNNs) using Google's C++ distributed framework Flume and TFX, improving accuracy by 10% across new verticals.`,
        'Automated hyperparameter tuning (Google Vizier / Bayesian Optimization) by creating a simulation pipeline to evaluate model configurations post-release, saving 10 dev-hours per cycle.',
        'Deployed region-specific model architectures, optimizing inference and ad ranking for targeted geographies to maximize click-through rate (CTR) and revenue.',
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
        'Contributed to over 5% user growth with GTM features, empowering users in new international markets.',
        'Maintained regex-based input validation for checkout forms, improving data accuracy and preventing invalid submissions.',
      ],
    },
    {
      LOGO: ancestryLogo,
      COMPANY: 'Ancestry',
      LINK: 'http://ancestry.com/',
      ROLE: 'Software Developer Intern',
      LOCATION: 'San Francisco, CA',
      START: '05/2019',
      END: '08/2019',
      INFO: [
        'Built and shipped frontend UI components and user flows for the Commerce platform using React, Redux, and JavaScript.',
        'Raised core component library code coverage to over 90% with Jest and Cypress, and reduced page load time by 30% by replacing 3rd party dependencies.',
      ],
    },
    {
      LOGO: ucmcvlLogo,
      COMPANY: 'Computer Vision Lab at UCMerced',
      LINK: 'http://vision.ucmerced.edu/',
      ROLE: 'Undergraduate Researcher',
      LOCATION: 'Merced, CA',
      START: '02/2019',
      END: '05/2019',
      INFO: [
        'In pursuit of identifying bird species by their song alone, researched the impact of converting audio files into visual data (spectrograms) in order to be classified by CNNs in PyTorch.',
      ],
    },
    {
      LOGO: palsLogo,
      COMPANY: 'Bright Success Center at UCMerced',
      LINK: 'https://learning.ucmerced.edu/programs/tutoring',
      ROLE: 'Peer Assistant for Math and Computer Science',
      LOCATION: 'Merced, CA',
      START: '02/2017',
      END: '05/2019',
      INFO: [
        'Tutored university level students math, object-oriented programming, data structures, and algorithms.',
        'Helped over 50 students every semester with noticeable increase in grades after attending my sessions.',
      ],
    },
  ],
  SCHOOLS: [
    {
      LOGO: ucmLogo,
      NAME: 'University of California, Merced',
      DEGREE: 'BSc in Computer Science',
      EXTRA: 'Honors (3.6 GPA)',
      START: '08/2016',
      END: '12/2019',
      CLASSES: [
        'Algorithm Analysis',
        'Computer Networks',
        'Distributed Systems',
      ],
    },
    {
      LOGO: yonseiLogo,
      NAME: 'Yonsei University, Seoul',
      DEGREE: 'Study Abroad',
      START: '08/2017',
      END: '06/2018',
      CLASSES: [
        'Artificial Intelligence',
        'Computer Vision',
        'Data Structures',
        'Theory of Computation',
      ],
    },
  ],
  SKILLS: {
    LANGUAGES: ['Javascript', 'Python', 'C++', 'SQL', 'Java', 'Matlab'],
    TECHNOLOGIES: [
      'Tensorflow',
      'TFX',
      'OpenCV',
      'Scikit',
      'GWS',
      'gRPC',
      'React.js',
      'Node.js',
      'Redux.js',
      'Jest',
      'Cypress',
      'Jenkins',
    ],
    MISC: ['English 🇺🇸', 'Español 🇲🇽', '한국어 🇰🇷'],
  },
  AWARDS: [],
};

export default content;
