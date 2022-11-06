let activities = [
  {
    id: "it1",
    cityId: "city4",
    name: "Cruice on the Seine",
    photo: [
      "https://cdn.getyourguide.com/img/tour/cf879ee295abc8e4.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/04523c58edcfe4a7.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/60dcb1e6883f21ff.jpeg/145.jpg",
    ],
    description:
      "Admire the iconic sights of Paris during a relaxing cruise down the Seine River. enjoy the explanations of the audio guide and learn more about places like the Eiffel Tower and Notre Dame.",
    price: 16,
    duration: 1,
    userId: "user3",
  },
  {
    id: "it2",
    cityId: "city4",
    name: "Dinner show at the Moulin Rouge",
    photo: [
      "https://cdn.getyourguide.com/img/tour/a75e4544622b5519.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/d9728daeacdd4d32.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/3ba3e6d80bcd15c2.jpeg/145.jpg",
    ],
    description:
      "Discover the fantastic atmosphere of the Moulin Rouge in Paris with the 'Féerie' show while enjoying a delicious dinner based on traditional French dishes, with vegetarian and vegan options.",
    price: 95,
    duration: 4,
    userId: "user4",
  },
  {
    id: "it3",
    cityId: "city6",
    name: "Los Angeles at Night Helicopter Flight",
    photo: [
      "https://cdn.getyourguide.com/img/tour/4f5e5afb94e57.png/145.jpg",
      "https://cdn.getyourguide.com/img/tour/4f5e5db613107.png/145.jpg",
      "https://cdn.getyourguide.com/img/tour/4f5e57aba1275.png/145.jpg",
    ],
    description:
      "Fly over Los Angeles on a 30-minute helicopter night flight to see the city ablaze with illuminations. Cruise over the downtown skyline as it glows in the evening darkness. Peer down at sights, such as the Griffith Observatory, Hollywood Sign, and more.",
    price: 319,
    duration: 0.5,
    userId: "user2",
  },
  {
    id: "it4",
    cityId: "city6",
    name: "Hollywood & Celebrity Homes Open-Air Bus Tour",
    photo: [
      "https://cdn.getyourguide.com/img/tour/5cb08f5960382.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5cb08f1c2c88d.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/60cb17f33abbd.jpeg/145.jpg",
    ],
    description:
      "See where the rich and famous hang out on a guided tour of Hollywood, West Hollywood and Beverly Hills by open-top bus. Discover the hot spots and celebrity homes of the world's entertainment capital.",
    price: 37,
    duration: 2,
    userId: "user1",
  },
  {
    id: "it5",
    cityId: "city7",
    name: "Whale Watching Tour by Catamaran",
    photo: [
      "https://cdn.getyourguide.com/img/tour/60a4e3fd54be2.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/60a4e40d38273.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/6302d69fee984.jpeg/145.jpg",
    ],
    description:
      "Go on a whale watching tour in Sydney onboard a large, custom-built catamaran, combining high-speed sailing with 3 levels of viewing decks.",
    price: 57,
    duration: 3,
    userId: "user2",
  },
  {
    id: "it6",
    cityId: "city7",
    name: "Blue Mountains Full-Day Trip with Cruise",
    photo: [
      "https://cdn.getyourguide.com/img/tour/ce049946799b3d7e.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/112dd97fc439b0f4.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/d7d7f2d144d40406.jpeg/145.jpg",
    ],
    description:
      "Discover the natural beauty of the Blue Mountains on a full-day tour that takes you to Featherdale Wildlife Park. See a variety of native Australian animals, stop at Echo Point for panoramic views and enjoy 3 different rides at Scenic World.",
    price: 109,
    duration: 10,
    userId: "user4",
  },
  {
    id: "it7",
    cityId: "city10",
    name: "Fully-Guided Big Bus Night Tour",
    photo: [
      "https://cdn.getyourguide.com/img/tour/5d95e2362e1ad.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/627b76a7cc2fc.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/627b779b7cb50.jpeg/145.jpg",
    ],
    description:
      "Feel the pulse of the city after dark on a evening city tour. See the sunset at Marina Barrage, try local cuisine at Lau Pa Sat, and catch a light show at Gardens by the Bay.",
    price: 34,
    duration: 3,
    userId: "user2",
  },
  {
    id: "it8",
    cityId: "city10",
    name: " Chinatown and Little India Guided Walking Tour",
    photo: ["./img/little-india1.jpg", "./img/little-india2.jpg", "./img/little-india3.jpg"],
    description:
      "Discover the best of Singapore on a guided cultural walking tour through Chinatown, Little India, and Kampong Gelam. Learn about the history of these ethnic neighborhoods with plenty of photo stops!",
    price: 60,
    duration: 3,
    userId: "user3",
  },
  {
    id: "it9",
    cityId: "city12",
    name: "Croco Cun Interactive Zoo Tour",
    photo: [
      "https://cdn.getyourguide.com/img/tour/62724c2f1d1c2.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/627243e70be4a.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/62724a551af68.jpeg/145.jpg",
    ],
    description:
      "Get inspired through a guided tour of Croco Cun Zoo, a local conservation center. Meet vulnerable species, and learn how to protect wild animals while interacting with these amazing creatures.",
    price: 33,
    duration: 1,
    userId: "user4",
  },
  {
    id: "it10",
    cityId: "city12",
    name: "Guided Day Trip to Tulum",
    photo: ["./img/tulum1.jpg", "./img/tulum2.jpg", "./img/tulum3.jpg"],
    description:
      "Experience a guided day trip into Mayan history from Cancun or Puerto Morelos. Explore the archaeological ruins of Tulum, plunge into a jungle cenote, and visit stylish boutiques in Playa del Carmen.",
    price: 50,
    duration: 24,
    userId: "user3",
  },
  {
    id: "it11",
    cityId: "city1",
    name: "Highlights of Buenos Aires: Small Group 3-Hour Guided Tour",
    photo: [
      "https://cdn.getyourguide.com/img/tour/5dca9f37d7e24.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5ae1ed55773ac.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5acb756c83e1e.jpeg/145.jpg",
    ],
    description:
      "Enjoy a small group tour of the major sites of Buenos Aires and the city’s neighborhoods. Travel by air-conditioned mini-van with a professional guide to see San Telmo, the oldest residential area in the city, and La Boca, where tango is king, and more!",
    price: 29,
    duration: 3,
    userId: "user2",
  },
  {
    id: "it12",
    cityId: "city1",
    name: "Buenos Aires: Tango Show at Tango Porteño & Optional Dinner",
    photo: [
      "https://cdn.getyourguide.com/img/tour/61bb54fb84be2.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5cf8cf2503b8f.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5cf8cf1fccc9d.jpeg/145.jpg",
    ],
    description:
      "Experience the passion of the Tango with a ticket to the “Tango Porteño” show. Witness the beauty of this classic Argentinian dance in a gorgeous theater, with optional dinner and drinks.",
    price: 41,
    duration: 1,
    userId: "user1",
  },
];
export default activities;
