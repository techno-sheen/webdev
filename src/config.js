module.exports = {
  siteTitle: 'Sean Mahoney | Front-End Developer',
  siteDescription:
    'Sean Mahoney is a front-end developer based in New York, NY who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Sean Mahoney, Sean, Mahoney, technosheen, software engineer, front-end developer, web developer, javascript, northeastern',
  siteUrl: 'https://technosheen.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sean Mahoney',
  location: 'New York, NY',
  email: 'sean@technosheen.com',
  github: 'https://github.com/technosheen',
  twitterHandle: '@technosheen',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/technosheen',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/seantmahoney92',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/technosheen',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/technosheen',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/technosheen',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
