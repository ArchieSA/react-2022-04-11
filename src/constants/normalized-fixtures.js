export const normalizedRestaurants = [
  {
    id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Dishoom",
    menu: [
      "d75f762a-eadd-49be-8918-ed0daa8dd024",
      "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
      "bd129641-c0eb-432b-84b6-8b81d2930358",
    ],
    reviews: [
      "5909796d-5030-4e36-adec-68b8f9ec2d96",
      "429dea85-11dd-4054-a31e-c60c92e17255",
    ],
  },
  {
    id: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
    name: "Homeslice",
    menu: [
      "25402233-0095-49ea-9939-1e67ed89ffb9",
      "90902233-0095-49ea-9939-1e67ed89ffb9",
    ],
    reviews: [
      "53b642d7-5e86-4717-a466-0640a1dee076",
      "c27ab88e-375c-4e98-aa94-8a180150a797",
      "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    ],
  },
  {
    id: "982bfbce-c5e0-41a0-9f99-d5c20ecee49d",
    name: "Fabrique",
    menu: [
      "08c9ffa0-d003-4310-9e15-20978743296e",
      "64a4967c-2080-4a99-9074-4655a4569a95",
      "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    ],
    reviews: ["13b642d7-5e86-4717-a466-0640a1dee076"],
  },
  {
    id: "d9241927-09e1-44f3-8986-a76346869037",
    name: "Flat Iron",
    menu: [
      "6c02c2ce-b868-4191-b4a7-8686429f4bac",
      "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
    ],
    reviews: [
      "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
      "381b0c31-6360-43ff-80d1-581a116159d8",
    ],
  },
];

export const normalizedProducts = [
  {
    id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
    name: "Chicken tikka masala",
    price: 12,
    ingredients: ["chicken", "rice"],
  },
  {
    id: "c3cb8f92-a2ed-4716-92a1-b6ea813e9049",
    name: "Naan",
    price: 3,
    ingredients: ["bread"],
  },
  {
    id: "bd129641-c0eb-432b-84b6-8b81d2930358",
    name: "Samosa",
    price: 8,
    ingredients: ["chicken", "bread"],
  },
  {
    id: "25402233-0095-49ea-9939-1e67ed89ffb9",
    name: "Margarita",
    price: 9,
    ingredients: ["bread", "cheese", "tomatoes"],
  },
  {
    id: "90902233-0095-49ea-9939-1e67ed89ffb9",
    name: "Chef pizza",
    price: 10,
    ingredients: ["bread", "cheese", "tomatoes", "chicken"],
  },
  {
    id: "08c9ffa0-d003-4310-9e15-20978743296e",
    name: "Cinnamon buns",
    price: 5,
    ingredients: ["bread"],
  },
  {
    id: "64a4967c-2080-4a99-9074-4655a4569a95",
    name: "Semlor",
    price: 2,
    ingredients: ["bread", "cream"],
  },
  {
    id: "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
    name: "Saffron bun",
    price: 4,
    ingredients: ["bread"],
  },
  {
    id: "6c02c2ce-b868-4191-b4a7-8686429f4bac",
    name: "Flat Iron Steak",
    price: 10,
    ingredients: ["beef"],
  },
  {
    id: "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
    name: "Flat Iron Burger",
    price: 10,
    ingredients: ["bread", "beef"],
  },
];

export const normalizedReviews = [
  {
    id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
    userId: "a304959a-76c0-4b34-954a-b38dbf310360",
    text: "Not bad",
    rating: 5,
  },
  {
    id: "429dea85-11dd-4054-a31e-c60c92e17255",
    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    text: "No burgers",
    rating: 3,
  },
  {
    id: "53b642d7-5e86-4717-a466-0640a1dee076",
    userId: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
    text: "Perfect Margarita",
    rating: 5,
  },
  {
    id: "c27ab88e-375c-4e98-aa94-8a180150a797",
    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    text: "No burgers again. But Chef Pizza is the best one",
    rating: 4,
  },
  {
    id: "abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a",
    userId: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
    text: "Good for lunch",
    rating: 5,
  },
  {
    id: "13b642d7-5e86-4717-a466-0640a1dee076",
    userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
    text: "Best bakery",
    rating: 5,
  },
  {
    id: "5db6247b-ab1c-49db-be1f-8dd27fd38b81",
    userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    text: "Finally! This place is amazing place for breakfast, lunch, dinner and supper",
    rating: 5,
  },
  {
    id: "381b0c31-6360-43ff-80d1-581a116159d8",
    userId: "1547335a-ea18-4547-a73d-32bd6e9f651c",
    text: "Meat here is extremely delicious",
    rating: 5,
  },
];

export const normalizedUsers = [
  {
    id: "a304959a-76c0-4b34-954a-b38dbf310360",
    name: "Antony",
  },
  {
    id: "20bed9b5-9c7b-4771-8221-75b74ed1904a",
    name: "Diana",
  },
  {
    id: "c3d4abd4-c3ef-46e1-8719-eb17db1d6e99",
    name: "Lolly",
  },
  {
    id: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
    name: "Agata",
  },
  {
    id: "1547335a-ea18-4547-a73d-32bd6e9f651c",
    name: "Rebeca",
  },
  {
    id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    name: "Sam",
  },
];
