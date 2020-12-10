const Books = [
  {
    id: 1,
    date: 'March , 2019',
    price: 37.86,
    title: 'Pro React 16',
    author: 'Adam Freeman',
    affiliate_link: 'https://amzn.to/36daDsH',
    affiliate: 'y',
    rating: 4.5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41W9YdrRslL._SX348_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/717r5Kf7K2L.jpg'
  },
  {
    id: 2,
    date: 'September , 2018',
    price: 27.65,
    title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
    author: 'Robin Wieruch',
    affiliate_link: 'https://amzn.to/2HL4ZEG',
    affiliate: 'y',
    rating: 4.5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41Bx4v6c-eL._SX384_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/41H5qPpC-TL.jpg'
  },
  {
    id: 3,
    date: 'Avril , 2018',
    price: 18.62,
    title:
      'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux (2nd Edition) 2nd Edition',
    author: 'Kirupa Chinnathambi',
    affiliate_link: 'https://amzn.to/37kwlKN',
    affiliate: 'y',
    rating: 4,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51bBG0BOZwL._SX385_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 4,
    date: 'December, 2019',
    price: 34.99,
    title:
      'React Projects: Build 12 real-world applications from scratch using React, React Native, and React 360',
    author: 'Roy Derks',
    affiliate_link: 'https://amzn.to/2VdyLVO',
    affiliate: 'y',
    rating: 5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51b4zK+t8HL._SX404_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71p5VH4lUvL.jpg'
  },
  {
    id: 5,
    date: 'September, 2017',
    price: 59.88,
    title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
    author: 'Anthony Accomazzo',
    affiliate_link: 'https://amzn.to/3lhUTZN',
    affiliate: 'y',
    rating: 4,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51CMUOgy8HL._SX384_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71TaLaFr0UL.jpg'
  },
  {
    id: 6,
    date: 'March , 2019',
    price: 25.72,
    title: 'React Explained: Your Step-by-Step Guide to React (2020 Edition)',
    author: 'Zac Gordon',
    affiliate_link: 'https://amzn.to/3q3oABr',
    affiliate: 'y',
    rating: 4,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/413n6ZDm0ZL._SX331_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/61ru8BKXzQL.jpg'
  },
  {
    id: 7,
    date: 'September , 2017',
    price: 27.5,
    title: 'React Quickly: Painless Web Apps with React, JSX, Redux, and GraphQL',
    author: 'Azat Mardan',
    affiliate_link: 'https://amzn.to/3fHTMRZ',
    affiliate: 'y',
    rating: 3.5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41lcOtVIojL._SX396_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 8,
    date: 'April , 2020',
    price: 34.99,
    title:
      'React and React Native: A complete hands-on guide to modern web and mobile development with React.js, 3rd Edition',
    author: 'Adam Boduch',
    affiliate_link: 'https://amzn.to/3mhRL1j',
    affiliate: 'y',
    rating: 4,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51FmXjcfdgL._SX404_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71DGYwYErlL.jpg'
  },
  {
    id: 9,
    date: 'March , 2019',
    price: 39.99,
    title:
      'React Design Patterns and Best Practices: Design, build and deploy production-ready web applications using standard industry practices, 2nd Edition',
    author: 'Carlos Santana Roldan',
    affiliate_link: 'https://amzn.to/3mhRNWZ',
    affiliate: 'y',
    rating: 4.5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41wI+bCmrTL._SX404_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71PYQj9c5oL.jpg'
  },
  {
    id: 10,
    date: 'October , 2019',
    price: 39.99,
    title: 'Learn React Hooks: Build and refactor modern React.js applications using Hooks',
    author: 'Daniel Bugl',
    affiliate_link: 'https://amzn.to/39u1D4B',
    affiliate: 'y',
    rating: 3.7,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/512zOgsWmdL._SX404_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 11,
    date: '',
    price: 5.5,
    title: 'JavaScript: The Good Parts: The Good Parts 1st Edition',
    author: 'Douglas Crockford',
    affiliate_link: 'https://amzn.to/3o9959j',
    affiliate: 'y',
    rating: 4.4,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 12,
    date: 'November , 2017',
    price: 16.99,
    title: 'Beginning React',
    author: 'Greg Lim',
    affiliate_link: 'https://amzn.to/3q6Ajit',
    affiliate: 'y',
    rating: 4.5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51b4YaBVLfL._SX404_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71ECTdqlCUL.jpg'
  },
  {
    id: 13,
    date: 'April , 2020',
    price: 26.99,
    title: 'Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition',
    author: 'Gayle Laakmann McDowell',
    affiliate_link: 'https://amzn.to/37fiV2t',
    affiliate: 'y',
    rating: 4.6,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 14,
    date: 'july , 2020',
    price: 36.38,
    title: 'Full Stack Serverless: Modern Application Development with React, AWS, and GraphQL',
    author: 'Nader Dabit',
    affiliate_link: 'https://amzn.to/2VbUduh',
    affiliate: 'y',
    rating: 5,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51sispcUPXL._SX379_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 15,
    date: 'februray',
    price: 28.99,
    title:
      'JavaScript Everywhere: Building Cross-Platform Applications with GraphQL, React, React Native, and Electron',
    author: 'Adam D. Scott',
    affiliate_link: 'https://amzn.to/2VewVnI',
    affiliate: 'y',
    rating: 4.1,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51sLoT+bdsL._SX379_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 16,
    date: '17-Apr-20',
    price: 34.99,
    title:
      'Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js, 2nd Edition',
    author: 'Shama Hoque',
    affiliate_link: 'https://amzn.to/39oiKEE',
    affiliate: 'y',
    rating: 3.7,
    img_link: 'https://images-na.ssl-images-amazon.com/images/I/71whevleuhL.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71sapHjutbL.jpg'
  },
  {
    id: 17,
    date: '',
    price: 27.19,
    title: 'Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker',
    author: 'Frank Zammetti',
    affiliate_link: 'https://amzn.to/39kY3cQ',
    affiliate: 'y',
    rating: 4.6,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41q4NK-yIAL._SX348_BO1,204,203,200_.jpg',
    img_link2: ''
  },
  {
    id: 18,
    date: '27-Dec-19',
    price: 39.99,
    title: 'ASP.NET Core 3 and React',
    author: 'Carl Rippon',
    affiliate_link: 'https://amzn.to/2KFx55g',
    affiliate: 'y',
    rating: 1.6,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/41wc6QnVB3L._SX404_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71SISGBw06L.jpg'
  },
  {
    id: 19,
    date: '24-Jan-19',
    price: 29.28,
    title:
      'The Road to React with Firebase: Your journey to master advanced React for business web applications',
    author: 'Robin Wieruch',
    affiliate_link: 'https://amzn.to/2KGik28',
    affiliate: 'y',
    rating: 4.9,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/4196dK7l-BL._SX384_BO1,204,203,200_.jpg',
    img_link2: 'https://images-na.ssl-images-amazon.com/images/I/71YYBeabgtL.jpg'
  },
  {
    id: 20,
    date: '',
    price: 59,
    title: 'Fullstack React Native: Create beautiful mobile apps with JavaScript and React Native',
    author: 'Sophia Shoemaker',
    affiliate_link: 'https://amzn.to/3fIfHIJ',
    affiliate: 'y',
    rating: 4.7,
    img_link:
      'https://images-na.ssl-images-amazon.com/images/I/51071Pm5H7L._SX404_BO1,204,203,200_.jpg',
    img_link2: ''
  }
];
