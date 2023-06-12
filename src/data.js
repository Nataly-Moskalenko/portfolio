import photoWebStudio from './images/photo_WebStudio.jpg';
import photoIceCream from './images/photo_IceCream.jpg';
import photoImageSearch from './images/photo_ImageSearch.jpg';
import photoPhonebook from './images/photo_Phonebook1.jpg';
import photoMovies from './images/photo_Movies.jpg';

export const projects = [
  {
    id: '1',
    title: 'WebStudio',
    subtitle: 'HTML, SASS, BEM, JavaScript, Mobile First Design',
    description:
      'Individual project - two page website with responsive layout, burger menu, modal windows, using SASS, BEM, Mobile First Design.',
    image: photoWebStudio,
    link: 'https://nataly-moskalenko.github.io/goit-markup-hw-08/',
  },
  {
    id: '2',
    title: 'IceCream',
    subtitle: 'HTML, SASS, JavaScript, Mobile First Design, Parcel',
    description:
      'Team project - Landing Page for the company IceCream with responsive layout, burger menu, modal windows and attractive design. Role: Developer.',
    image: photoIceCream,
    link: 'https://makaronnik.github.io/ice-cream-landing/',
  },
  {
    id: '3',
    title: 'Image Search App',
    subtitle: 'React, React-icons, Axios, React-toastify',
    description:
      'Individual project - Image Search App - development of the interface part of the program for searching and viewing images by keyword, using a public API.',
    image: photoImageSearch,
    link: 'https://nataly-moskalenko.github.io/goit-react-hw-04-images/',
  },
  {
    id: '4',
    title: 'Phonebook',
    subtitle: 'React, React-redux, React-router-dom, Axios',
    description:
      'Individual project - Phonebook developed on React using Redux, private routes and public routes. This application enables users to save their phone contacts information.',
    image: photoPhonebook,
    link: 'https://nataly-moskalenko.github.io/goit-react-hw-08-phonebook/',
  },
  {
    id: '5',
    title: 'Movie Search App',
    subtitle: 'React, React-router-dom, Axios, React-toastify',
    description:
      'Individual project - Movie Search App on React using React-router-dom. This App enables users to know about today trends movies and to find movies by search query.',
    image: photoMovies,
    link: 'https://nataly-moskalenko.github.io/goit-react-hw-05-movies/',
  },
];
