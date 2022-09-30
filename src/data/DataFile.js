import html5 from '../Assets/Logo/html5.svg';
import css3 from '../Assets/Logo/css3-alt.svg';
import react from '../Assets/Logo/react.svg';
import js from '../Assets/Logo/js.svg';

const dataSet = {
  skillsSet: {
    languages: [
      { id: 1, item: html5, progress: '85' },
      { id: 2, item: css3, progress: '75' },
      { id: 3, item: js, progress: '79' },
      { id: 4, item: react, progress: '60' },
    ],
    myTools: [
      {
        id: 1,
        heading: 'Development platform',
        items: [
          { id: 1, item: 'VScode' },
          { id: 2, item: 'Atom' },
          { id: 3, item: 'Figma' },
        ],
      },
      {
        id: 2,
        heading: 'Organization Tools',
        items: [
          { id: 1, item: 'GitHub' },
          { id: 2, item: 'Slack' },
          { id: 3, item: 'Discord' },
          { id: 4, item: 'Zendesk' },
          { id: 5, item: 'Zoom, Teams, Meet, etc' },
        ],
      },
    ],
    myProductions: [
      {
        id: 1,
        heading: 'Front-end',
        items: [
          { id: 1, item: 'E-commerce' },
          { id: 2, item: 'Landing page' },
          { id: 3, item: 'Showcase website' },
          { id: 4, item: 'Reusable Components' },
        ],
      },

      {
        id: 2,
        heading: 'Back-end ',
        items: [
          { id: 1, item: 'Software Project Management' },
          { id: 2, item: 'Reusable Components' },
          { id: 3, item: 'Open Source Development' },
          { id: 4, item: 'Pair-Programming' },
        ],
      },
      {
        id: 3,
        heading: 'Mobile Application Development',
        items: [
          { id: 1, item: 'Native Apps' },
          { id: 2, item: 'Application & WebApp' },
        ],
      },
    ],
  },
  experiences: {
    Experience: [
      {
        id: 1,
        heading: 'Development platform',
        items: [
          { id: 1, item: 'VScode' },
          { id: 2, item: 'Atom' },
          { id: 3, item: 'Figma' },
        ],
      },
      {
        id: 2,
        heading: 'Organization Tools',
        items: [
          { id: 1, item: 'GitHub' },
          { id: 2, item: 'Slack' },
          { id: 3, item: 'Discord' },
          { id: 4, item: 'Zendesk' },
          { id: 5, item: 'Zoom, Teams, Meet, etc' },
        ],
      },
    ],
    training: [
      {
        id: 1,
        heading: 'Front-end',
        items: [
          { id: 1, item: 'E-commerce' },
          { id: 2, item: 'Landing page' },
          { id: 3, item: 'Showcase website' },
          { id: 4, item: 'Reusable Components' },
        ],
      },

      {
        id: 2,
        heading: 'Back-end ',
        items: [
          { id: 1, item: 'Software Project Management' },
          { id: 2, item: 'Reusable Components' },
          { id: 3, item: 'Open Source Development' },
          { id: 4, item: 'Pair-Programming' },
        ],
      },
      {
        id: 3,
        heading: 'Mobile Application Development',
        items: [
          { id: 1, item: 'Native Apps' },
          { id: 2, item: 'Application & WebApp' },
        ],
      },
    ],
  },
};

export default dataSet;
