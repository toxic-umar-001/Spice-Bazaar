export const RESTAURANT = {
  name: "Spice Bazaar",
  urduName: "سپائیس بازار",
  tagline: "Traditional Flavours. Refined Experience.",
  eyebrow: "THE FLAVOURS OF PAKISTAN",
  supportingText:
    "Discover the rich flavours of Pakistan in an elegant dining experience in the heart of Gulberg, Lahore.",
  phone: "+92 311 1122103",
  phoneRaw: "+923111122103",
  whatsapp: "923111122103",
  website: "http://spicebazaar.pk/",
  menuUrl: "http://www.spicebazaar.pk/menu/",
  foodpandaUrl: "https://foodpanda.pk/restaurant/t2yo/spice-bazaar",
  rating: "4.3",
  reviewCount: "15,992+",
  priceRange: "Rs 2,000–7,000 per person",
  services: ["Dine-in", "Curbside pickup"],
  address: {
    line1: "T-01, Tipu Rd, off MM Alam Road,",
    line2: "Block T, Gulberg 2,",
    city: "Lahore, 54660, Pakistan",
    full: "T-01, Tipu Rd, off MM Alam Road, Block T, Gulberg 2, Lahore, 54660, Pakistan",
  },
  locationShort: "Gulberg 2 • Lahore",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Spice+Bazaar+Tipu+Road+MM+Alam+Road+Gulberg+Lahore",
  hours: "Open • Closes 11 PM",
  hoursNote: "Please contact the restaurant for current opening hours.",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const SIGNATURE_DISHES = [
  {
    name: "Royal Gulab Jamun",
    image:
      "https://images.pexels.com/photos/9198596/pexels-photo-9198596.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Royal Gulab Jamun dessert soaked in sweet syrup",
  category: "Desserts",
  description: "A regal take on the classic sweet, soaked in fragrant syrup.",
  span: "tall",
  link: RESTAURANT.menuUrl,
  linkLabel: "View Menu",
  hasLink: true,
  hasDescription: true,
  hasPrice: false,
  price: null as string | null,
  ingredients: null as string | null,
  servingSize: null as string | null,
  hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Chicken Cheese Kabab",
    image:
      "https://images.pexels.com/photos/9609850/pexels-photo-9609850.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Chicken cheese kabab served with chutney on a wooden tray",
    category: "Kebabs",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Mutton Karahi",
    image:
      "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Spicy mutton karahi curry garnished with fresh herbs in a brass pot",
    category: "Karahi",
    description: null,
    span: "wide",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Mutton Kunna",
    image:
      "https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mutton kunna curry served in a traditional copper bowl",
    category: "Karahi",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Chicken Malai Boti",
    image:
      "https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Chicken malai boti skewers sizzling over a charcoal grill",
    category: "BBQ",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Spice Bazaar Mixed Grilled",
    image:
      "https://images.pexels.com/photos/38399759/pexels-photo-38399759.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mixed grill platter with roasted chicken and assorted kebabs",
    category: "BBQ",
    description: null,
    span: "wide",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Hi Tea Platters",
    image:
      "https://images.pexels.com/photos/5639581/pexels-photo-5639581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hi tea platter with assorted pastries on a tiered stand",
    category: "Hi Tea",
    description: null,
    span: "tall",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "BBQ Platter",
    image:
      "https://images.pexels.com/photos/8963375/pexels-photo-8963375.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "BBQ platter with grilled meats, onions, and flatbread on a wooden table",
    category: "BBQ",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Salads",
    image:
      "https://images.pexels.com/photos/29138860/pexels-photo-29138860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Fresh gourmet salad artfully plated on a rustic dish",
    category: "Popular",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Fish Crackers",
    image:
      "https://images.pexels.com/photos/5848620/pexels-photo-5848620.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Crispy fish crackers elegantly arranged on a ceramic plate",
    category: "Popular",
    description: null,
    span: "normal",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
  {
    name: "Spice Bazaar Mix Grill",
    image:
      "https://images.pexels.com/photos/17794709/pexels-photo-17794709.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mixed grill platter with kebabs, saffron rice, and colorful sides",
    category: "BBQ",
    description: null,
    span: "wide",
    link: RESTAURANT.menuUrl,
    linkLabel: "View Menu",
    hasLink: true,
    hasDescription: false,
    hasPrice: false,
    price: null as string | null,
    ingredients: null as string | null,
    servingSize: null as string | null,
    hasIngredients: false,
    hasServingSize: false,
  },
];

export const MENU_CATEGORIES = [
  "Popular",
  "BBQ",
  "Kebabs",
  "Karahi",
  "Pakistani Classics",
  "Rice",
  "Breads",
  "Desserts",
  "Drinks",
  "Hi Tea",
] as const;

export const MENU_ITEMS: Record<
  string,
  { name: string; category: string; description: string | null }[]
> = {
  Popular: [
    { name: "Spice Bazaar Mixed Grilled", category: "BBQ", description: null },
    { name: "BBQ Platter", category: "BBQ", description: null },
    { name: "Salads", category: "Popular", description: null },
    { name: "Fish Crackers", category: "Popular", description: null },
  ],
  BBQ: [
    { name: "Spice Bazaar Mixed Grilled", category: "BBQ", description: null },
    { name: "BBQ Platter", category: "BBQ", description: null },
    { name: "Spice Bazaar Mix Grill", category: "BBQ", description: null },
    { name: "Chicken Malai Boti", category: "BBQ", description: null },
  ],
  Kebabs: [
    { name: "Chicken Cheese Kabab", category: "Kebabs", description: null },
    { name: "Chicken Malai Boti", category: "Kebabs", description: null },
  ],
  Karahi: [
    { name: "Mutton Karahi", category: "Karahi", description: null },
    { name: "Mutton Kunna", category: "Karahi", description: null },
  ],
  "Pakistani Classics": [
    { name: "Mutton Kunna", category: "Pakistani Classics", description: null },
    { name: "Mutton Karahi", category: "Pakistani Classics", description: null },
  ],
  Rice: [
    { name: "Biryani", category: "Rice", description: null },
    { name: "Pulao", category: "Rice", description: null },
  ],
  Breads: [
    { name: "Naan", category: "Breads", description: null },
    { name: "Garlic Naan", category: "Breads", description: null },
    { name: "Tandoori Roti", category: "Breads", description: null },
  ],
  Desserts: [
    {
      name: "Royal Gulab Jamun",
      category: "Desserts",
      description: "A regal take on the classic sweet, soaked in fragrant syrup.",
    },
  ],
  Drinks: [
    { name: "Mango Lassi", category: "Drinks", description: null },
    { name: "Fresh Lime Soda", category: "Drinks", description: null },
  ],
  "Hi Tea": [
    { name: "Hi Tea Platters", category: "Hi Tea", description: null },
  ],
};

export const EXPERIENCES = [
  {
    title: "Authentic Flavours",
    description: "Traditional Pakistani cuisine presented with care.",
    image:
      "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Traditional Pakistani curry in a brass pot",
  },
  {
    title: "Elegant Dining",
    description: "A refined environment designed for memorable meals.",
    image:
      "https://images.pexels.com/photos/20169244/pexels-photo-20169244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Elegant restaurant interior with warm lighting",
  },
  {
    title: "Family Gatherings",
    description: "A welcoming destination for families and special occasions.",
    image:
      "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Family enjoying a meal together at a restaurant",
  },
  {
    title: "Hi Tea Experience",
    description: "Showcasing the restaurant's celebrated Hi Tea platters.",
    image:
      "https://images.pexels.com/photos/5639687/pexels-photo-5639687.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hi tea platter with sandwiches and pastries on a tiered stand",
  },
];

export const REVIEW_THEMES = [
  "Variety of food",
  "Food quality",
  "Premium Pakistani dining",
  "Interior",
  "Family dining",
  "Hi Tea",
  "Mutton dishes",
  "Ambience",
];

export const GALLERY_CATEGORIES = [
  "All",
  "Food",
  "Interior",
  "Dining",
  "Karahi",
  "BBQ",
  "Desserts",
  "Hi Tea",
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.pexels.com/photos/18601877/pexels-photo-18601877.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Top view of traditional Pakistani biryani with raita and salad",
    category: "Food",
    width: 5184,
    height: 3456,
  },
  {
    src: "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Spicy lamb curry garnished with fresh herbs in a brass pot",
    category: "Karahi",
    width: 7902,
    height: 5268,
  },
  {
    src: "https://images.pexels.com/photos/20169244/pexels-photo-20169244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Luxurious restaurant interior with elegant decor and warm lighting",
    category: "Interior",
    width: 3569,
    height: 5354,
  },
  {
    src: "https://images.pexels.com/photos/8963375/pexels-photo-8963375.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Grilled meat selection served with onions and flatbread",
    category: "BBQ",
    width: 4660,
    height: 3107,
  },
  {
    src: "https://images.pexels.com/photos/9198596/pexels-photo-9198596.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Gulab jamun dessert soaked in sweet syrup",
    category: "Desserts",
    width: 4000,
    height: 6000,
  },
  {
    src: "https://images.pexels.com/photos/5639581/pexels-photo-5639581.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Hi tea platter with assorted pastries on a tiered stand",
    category: "Hi Tea",
    width: 3456,
    height: 5184,
  },
  {
    src: "https://images.pexels.com/photos/3184177/pexels-photo-3184177.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Family and friends enjoying a meal together at a restaurant",
    category: "Dining",
    width: 6000,
    height: 4000,
  },
  {
    src: "https://images.pexels.com/photos/36890237/pexels-photo-36890237.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Kebabs grilling over hot charcoal",
    category: "BBQ",
    width: 2384,
    height: 4238,
  },
  {
    src: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Warm restaurant interior with arched walls and chandelier lighting",
    category: "Interior",
    width: 3508,
    height: 5262,
  },
  {
    src: "https://images.pexels.com/photos/15059064/pexels-photo-15059064.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Aromatic chicken biryani in a traditional pot",
    category: "Food",
    width: 4480,
    height: 6720,
  },
  {
    src: "https://images.pexels.com/photos/9609850/pexels-photo-9609850.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Chicken malai tikka served with chutney on a wooden tray",
    category: "BBQ",
    width: 4355,
    height: 3266,
  },
  {
    src: "https://images.pexels.com/photos/5639687/pexels-photo-5639687.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Gourmet sandwiches and fries on a two-tiered serving tray",
    category: "Hi Tea",
    width: 3456,
    height: 5184,
  },
  {
    src: "https://images.pexels.com/photos/16851842/pexels-photo-16851842.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Freshly made garlic naan bread with herbs",
    category: "Food",
    width: 4000,
    height: 6000,
  },
  {
    src: "https://images.pexels.com/photos/17200460/pexels-photo-17200460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Refreshing mango lassi garnished with fresh mint",
    category: "Food",
    width: 3442,
    height: 2535,
  },
  {
    src: "https://images.pexels.com/photos/32738699/pexels-photo-32738699.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Beautifully set dining table in a warm restaurant atmosphere",
    category: "Dining",
    width: 3921,
    height: 5882,
  },
  {
    src: "https://images.pexels.com/photos/28674568/pexels-photo-28674568.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Spicy mutton curry garnished with fresh herbs and onions",
    category: "Karahi",
    width: 7801,
    height: 5201,
  },
  {
    src: "https://images.pexels.com/photos/36734922/pexels-photo-36734922.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Assorted grilled meats and vegetables on a rustic plate",
    category: "BBQ",
    width: 4240,
    height: 2832,
  },
  {
    src: "https://images.pexels.com/photos/38579056/pexels-photo-38579056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Elegant serving of gulab jamun in a brass dish with garnishes",
    category: "Desserts",
    width: 4672,
    height: 6224,
  },
  {
    src: "https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Luxurious modern restaurant interior with warm lighting",
    category: "Interior",
    width: 7008,
    height: 4672,
  },
  {
    src: "https://images.pexels.com/photos/11161475/pexels-photo-11161475.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Gourmet lamb shank served with biryani rice and fresh salads",
    category: "Food",
    width: 5760,
    height: 3840,
  },
];

export const INTERIOR_IMAGES = [
  {
    src: "https://images.pexels.com/photos/18813258/pexels-photo-18813258.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Warm restaurant interior with arched walls and chandelier lighting",
  },
  {
    src: "https://images.pexels.com/photos/20169244/pexels-photo-20169244.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Luxurious restaurant ambiance with elegant decor and warm lighting",
  },
  {
    src: "https://images.pexels.com/photos/32738699/pexels-photo-32738699.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Beautifully set dining table in a warm, inviting restaurant atmosphere",
  },
  {
    src: "https://images.pexels.com/photos/26729398/pexels-photo-26729398.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Luxurious modern restaurant interior with warm lighting and minimalist design",
  },
];

export const HERO_IMAGES = {
  primary:
    "https://images.pexels.com/photos/18601877/pexels-photo-18601877.jpeg?auto=compress&cs=tinysrgb&w=1920",
  primaryAlt:
    "Top view of traditional Pakistani biryani with raita and salad beautifully arranged",
  secondary:
    "https://images.pexels.com/photos/28674566/pexels-photo-28674566.jpeg?auto=compress&cs=tinysrgb&w=1600",
  secondaryAlt:
    "Spicy lamb curry garnished with fresh herbs in a traditional brass pot",
};

export const STORY_IMAGES = {
  main: "https://images.pexels.com/photos/7340914/pexels-photo-7340914.jpeg?auto=compress&cs=tinysrgb&w=1200",
  mainAlt: "Diverse spread of Pakistani dishes on an intricately carved table",
  supporting:
    "https://images.pexels.com/photos/36870366/pexels-photo-36870366.jpeg?auto=compress&cs=tinysrgb&w=800",
  supportingAlt: "Vibrant display of spices in a traditional Pakistani market",
};
