import photoWebStudio from './images/photo_WebStudio.jpg';
import photoIceCream from './images/photo_IceCream.jpg';
import photoImageSearch from './images/photo_ImageSearch.jpg';
import photoPhonebook from './images/photo_Phonebook1.jpg';

export const projects = [
  {
    id: '1',
    title: 'WebStudio',
    subtitle: 'HTML, SASS, BEM, JavaScript, Mobile First Design',
    description:
      'Individual project - two page website with responsive layout, burger menu, modal windows.',
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
    title: 'Image Search',
    subtitle: 'React',
    description:
      'Individual project - development of the interface part of the program for searching and viewing images by keyword, using a public API.',
    image: photoImageSearch,
    link: 'https://nataly-moskalenko.github.io/goit-react-hw-03-image-finder/',
  },
  {
    id: '4',
    title: 'Phonebook',
    subtitle: 'React',
    description: 'Individual project - ',
    image: photoPhonebook,
    link: 'https://nataly-moskalenko.github.io/goit-react-hw-08-phonebook/',
  },
];
