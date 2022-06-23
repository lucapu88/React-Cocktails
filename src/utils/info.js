import { IoSchool, IoPeopleCircleSharp } from 'react-icons/io5';
import { ImDatabase } from 'react-icons/im';
import titina from '../assets/image/signora.webp';
import gionni from '../assets/image/signore.webp';
import mario from '../assets/image/mimmo.jpg';
import matteo from '../assets/image/matteo.jpg';

export const valueCards = [
  {
    title: 'Educare',
    icon: <IoSchool className="icon card-icon" />,
    text: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
  },
  {
    title: 'Insegnare',
    icon: <IoPeopleCircleSharp className="icon card-icon" />,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: 'Centralizzare',
    icon: <ImDatabase className="icon card-icon" />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
];

export const teamCards = [
  {
    title: 'Mario Nero',
    img: `${matteo}`,
    subtitle: 'CEO & Founder',
  },
  {
    title: 'Tina Mennona',
    img: `${titina}`,
    subtitle: 'CTO',
  },
  {
    title: 'Giorgio Bevilalcol',
    img: `${gionni}`,
    subtitle: 'Stakeholder & Testimonial',
  },
  {
    title: 'Mimmo Merolo',
    img: `${mario}`,
    subtitle: 'Creative Director',
  },
];
