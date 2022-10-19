import placesTopPictureOne from '../images/places_top_block_img_1.png';
import placesTopPictureThree from '../images/places_top_block_img_3.png';
import { Iframe } from '../UI/Iframe';
import personFirst from '../images/person1.png';
import personSecond from '../images/person2.png';
import personThird from '../images/person3.png';
import saveWorldOne from '../images/saveWorld_1.png';
import saveWorldTwo from '../images/saveWorld_2.png';
import saveWorldThree from '../images/saveWorld_3.png';
import saveWorldFour from '../images/saveWorld_4.png';
import saveWorldFive from '../images/saveWorld_5.png';

export const listItems = [
  {
    id: 0,
    title: 'Home',
    link: 'home'
  },
  {
    id: 1,
    title: 'Our mission',
    link: 'mission'
  },
  {
    id: 2,
    title: 'Places',
    link: 'places'
  },
  {
    id: 3,
    title: 'Team',
    link: 'team'
  },
];

export const placesArr = [
  {
    img: placesTopPictureOne,
    alt: 'woman',
    title: '# Stories',
    description: 'Travel In Japan: The True Experience',
    link: 'https://www.japan.travel'
  },
  {
    iframe: Iframe,
    title: '# VideoTutor',
    description: 'Helping Wild Turtles',
    link: 'https://saveturtles.org'
  },
  {
    img: placesTopPictureThree,
    alt: 'bridge',
    title: '# Photostory',
    description: 'Threats of Indusrial World',
    link: 'https://subscription.packtpub.com'
  }
];

export const sliderBlockArr = [
  {
    title: 'Travel In Japan: The True Experience',
    description: 'When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics.',
    id: 0,
    color: '#FFBD9E',
  },
  {
    title: 'Helping Wild Turtles To Travel In Japan',
    description: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something.',
    id: 1,
    color: '#FFADAD',
  },
  {
    title: 'Threats of Modern Indusrial World',
    description: 'The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper.',
    id: 2,
    color: '#CBCBFF',
    
  },
];

export const ourTeamArr = [personFirst, personSecond, personThird];

export const questionsArr = [
  {
    question: 'What can I do to protect our planet?',
    answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    id: 0,
  },

  {
    question: 'How to save nature ecology?',
    answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    id: 1,
  },

  {
    question: 'What is nature conservation?',
    answer: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources',
    id: 2,
  },

];

export const saveWorldArr = [
  {
    img: saveWorldOne,
    id: 0,
    title: 'Avoid plastic',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    img: saveWorldTwo,
    id: 1,
    title: 'Choose organic',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    img: saveWorldThree,
    id: 2,
    title: 'Plant trees',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    img: saveWorldFour,
    id: 3,
    title: 'Save water',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
  {
    img: saveWorldFive,
    id: 4,
    title: 'Save energy',
    description: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
  },
];
