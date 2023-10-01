import photoWebStudio from './images/photo_WebStudio.jpg';
import photoIceCream from './images/photo_IceCream.jpg';
import photoImageSearch from './images/photo_ImageSearch.jpg';
import photoPhonebook from './images/photo_Phonebook1.jpg';
import photoMovies from './images/photo_Movies.jpg';
import photoSwagger from './images/photo_Swagger.jpg';
import photoTweets from './images/photo_TweetCards.jpg';
import photoNews from './images/photo_News.jpg';
import photoTaskPro from './images/photo_TaskPro.jpg';
import photoCarpTravel from './images/photo_CarpTravel.jpg';
import photoIMConsulting from './images/photo_IM_CONSULTING.jpg';

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
  {
    id: '6',
    title: 'Tweet Cards App',
    subtitle: 'React, React-router-dom, Axios, React-icons, Localstorage, Pagination',
    description:
      "Individual project - Tweet Cards App which enables users to view a list of tweets with the ability to filter by the user's subscription status.",
    image: photoTweets,
    link: 'https://nataly-moskalenko.github.io/test-task-tweet-cards/',
  },
  {
    id: '7',
    title: 'News Project',
    subtitle: 'JavaScript, Date-fns, Flatpickr, Notiflix, Vanilla-js-accordion',
    description:
      'Team project - News Project which enables users to read, filter and save favorite news, see readed news. Role: Scrum Master, Developer.',
    image: photoNews,
    link: 'https://tkachenko01001.github.io/news-project/',
  },
  {
    id: '8',
    title: 'Nodejs Rest Api',
    subtitle: 'Nodejs, Express, Gravatar, Joi, Nodemailer, Swagger-ui-express',
    description:
      'Individual project - Backend part of the Api with Swagger and Dockerfile which enables register users to save, add, update and other operations with their contacts.',
    image: photoSwagger,
    link: 'https://nodejs-rest-api-ry5x.onrender.com/api-docs',
  },
  {
    id: '9',
    title: 'Task Pro',
    subtitle:
      'React-redux, React-router-dom, React-day-picker, React-dropzone, Date-fns, Formik, Yup, Nodejs, Cloudinary, Cross-env, Express, Joi, Jsonwebtoken, Mongoose, Swagger-ui-express',
    description:
      'Team project - allows to create boards, lists, and cards that help organize tasks and projects in a visual board format.',
    image: photoTaskPro,
    link: 'https://tkachenko01001.github.io/project-REACT_NODE/',
  },
  {
    id: '10',
    title: 'Carpathians Travel',
    subtitle:
      'React, React-dom, Nextjs, React-scroll, React-hook-form, Swiper, Tailwindcss',
    description:
      'Individual project which offers you unforgettable and extraordinary trips to the most beautiful parts of the Carpathians: Hoverla, Yaremche, Zakarpattia, Vorokhta, Synevyr Lake, Bukovel.',
    image: photoCarpTravel,
    link: 'https://carpathians-travel.vercel.app/',
  },
  {
    id: '11',
    title: 'IM-CONSULTING',
    subtitle:
      'React, React-dom, Nextjs, React-scroll, React-hook-form, Swiper, Tailwindcss, yup, nodemailer, @headlessui/react',
    description:
      'A business card site for creating a personal brand and attracting new customers and partners. The client of the project: Ilya Mushkovskyi, business trainer, top consultant, anti-crisis manager, coach.',
    image: photoIMConsulting,
    link: 'https://im-consulting.vercel.app/',
  },
];
