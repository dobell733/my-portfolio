import choreAppImage from '../assets/chore_app.png';
import setTableImage from '../assets/set_table.png';
import dataBallImage from '../assets/data_ball.png';
import hashMapImage from '../assets/hash_map.png';

export const projectsData = [
  { 
    image: choreAppImage,
    title: 'Chore App 🧹', 
    description: 'An app that I built to track and incentivize my kids to do their chores. Please give the backend a moment to wake up if you visit.', 
    link: 'https://unique-muffin-22a3b9.netlify.app/', 
    github: 'https://github.com/dobell733/chore_app'
  },
  { 
    image: setTableImage,
    title: 'Set Table 💪', 
    description: 'Set Table is an app that I built in order to easily keep track of and log my workouts. The main technologies that I used to build this app are MongoDB, Express, and Node.js for the backend and React for the frontend.' ,
    github: 'https://github.com/dobell733/set-table'
  },
  { 
    image: dataBallImage,
    title: 'Data Ball 🏀', 
    description: 'Data Ball was primarily a learning project to gain more familiarity with MySQL database design and implementation. The database stored information on Seasons, Players, Teams, and Games as well as the relationships between them. The app was built using Jinja templates and Flask/Python', 
    github: 'https://github.com/dobell733/data_ball' 
  },
  { 
    image: hashMapImage,
    title: 'Hash Map 🗺️', 
    description: 'This was another learning project that I built in order to gain a better understanding of how hash maps work and two different ways of implementing them.', 
    github: 'https://github.com/dobell733/hash_map' 
  }
];
