import mePicture from '../assets/images/me.webp';
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
    FIRSTNAME: 'Jibram ',
  },
  ABOUT:
    '5+ years experienced Software Engineer: Building innovative, user-centric Front-End solutions & integrating cutting-edge ML/AI to drive intelligent applications. Contact me for consultation, contract, or full-time roles.',
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
        'Launched several ads auction improvements on the Travel Ads team for over 2.5% revenue gains ($XX M).',
        'Empowered DNN models via feature engineering to improve accuracy by over 10% on different surfaces as the team expanded to many more verticals.',
        'Leveraged Vizier to create a simulation pipeline to tune hyperparameters in models after each release, selecting better configurations than would be in manual tuning.',
        'Advocated and implemented region-specific modeling to reach goals without negatively affecting small GEOs.',
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
        'Engineered modern single page e-commerce applications with Javascript, React, and NodeJS.',
        'Produced upticks in conversion rate with user-enabling features right from the checkout flow.',
        'Established a new stack for an internal tool, lowering 3rd-party expenditures by the company.',
        'Continuously improved and deployed safer and more efficient code for the Commerce Front-End team',
        'Promoted to Software Engineer in October 2021',
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
        'Developed on the Commerce Front-End team using Javascript, React, Redux, and Flow.',
        'Assisted Commerce team in developing, testing, and debugging checkout platform for Ancestry products.',
        'Communicated effectively with product managers through Agile for iterative and incremental development.',
        'Reduced size and page load time by over 30% by replacing dependencies with lightweight components.',
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
        'Conducted research for tracking bird species by mapping audio files into spectrogram images using Python.',
        'Investigated differences between feature extraction techniques to CNN pre-classification feature vectors.',
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
        'Object-Oriented Programming',
        'Networks and Distributed Systems',
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
