const QUERIES = {
  tabletOnly: '(max-width: 1200px) and (min-width: 768px)',
  tabletAndSmaller: '(max-width: 1200px)',
  mobileAndSmaller: '(max-width: 768px)',
};

const ATHLETES_ITEMS = [
  {
    number: '01',
    heading: 'CONNECTION',
    text: 'Connect with coaches directly, you can ping coaches to view profile.',
  },
  {
    number: '02',
    heading: 'COLLABORATION',
    text: 'Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.',
  },
  {
    number: '03',
    heading: 'GROWTH',
    text: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc',
  },
];

const PLAYERS_ITEMS = [
  {
    number: '01',
    heading: 'CONNECTION',
    text: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.',
  },
  {
    number: '02',
    heading: 'COLLABORATION',
    text: 'Work with recruiter to increase your chances of finding talented athlete.',
  },
  {
    number: '03',
    heading: 'GROWTH',
    text: 'Save your time, recruit proper athlets for your team.',
  },
];

export { QUERIES, ATHLETES_ITEMS, PLAYERS_ITEMS };
