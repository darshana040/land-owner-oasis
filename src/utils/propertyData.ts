
export interface Owner {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  since: string;
}

export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  description: string;
  features: string[];
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  lotSize: number;
  yearBuilt: number;
  propertyType: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  listedDate: string;
  ownerId: string;
  landDetails: {
    surveyNumber: string;
    plotNumber: string;
    zoning: string;
    dimensions: string;
    taxes: number;
  };
}

export const owners: Owner[] = [
  {
    id: "OWN001",
    name: "James Wilson",
    phone: "(555) 123-4567",
    email: "james.wilson@example.com",
    address: "123 Maple Avenue, Portland, OR 97201",
    since: "2015-04-23"
  },
  {
    id: "OWN002",
    name: "Emma Rodriguez",
    phone: "(555) 234-5678",
    email: "emma.rodriguez@example.com",
    address: "456 Oak Street, Seattle, WA 98101",
    since: "2018-09-15"
  },
  {
    id: "OWN003",
    name: "Michael Chen",
    phone: "(555) 345-6789",
    email: "michael.chen@example.com",
    address: "789 Pine Drive, San Francisco, CA 94107",
    since: "2013-07-02"
  },
  {
    id: "OWN004",
    name: "Sarah Johnson",
    phone: "(555) 456-7890",
    email: "sarah.johnson@example.com",
    address: "1010 Cedar Lane, Denver, CO 80202",
    since: "2019-02-18"
  },
  {
    id: "OWN005",
    name: "Robert Garcia",
    phone: "(555) 567-8901",
    email: "robert.garcia@example.com",
    address: "1212 Elm Road, Austin, TX 78701",
    since: "2014-11-30"
  }
];

export const properties: Property[] = [
  {
    id: "PROP001",
    title: "Luxury Waterfront Estate",
    price: 2450000,
    address: "1234 Lakeview Drive",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    description: "Magnificent waterfront estate with panoramic views of Lake Washington. This 5-bedroom, 6-bathroom luxury home features high-end finishes throughout, including marble countertops, hardwood floors, and smart home technology. Enjoy private beach access and a boat dock for the ultimate waterfront lifestyle.",
    features: ["Private Beach", "Boat Dock", "Smart Home", "Wine Cellar", "Home Theater", "Outdoor Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 5,
    bathrooms: 6,
    area: 6800,
    lotSize: 0.75,
    yearBuilt: 2018,
    propertyType: "Single Family Home",
    status: "For Sale",
    listedDate: "2023-06-15",
    ownerId: "OWN001",
    landDetails: {
      surveyNumber: "SRV-8742",
      plotNumber: "PLT-1234",
      zoning: "Residential Single Family",
      dimensions: "150ft x 220ft",
      taxes: 24500
    }
  },
  {
    id: "PROP002",
    title: "Modern Downtown Penthouse",
    price: 1850000,
    address: "789 Urban Tower, Unit PH3",
    city: "Portland",
    state: "OR",
    zipCode: "97201",
    description: "Stunning penthouse with floor-to-ceiling windows offering 360-degree city views. This 3-bedroom, 3.5-bathroom luxury condominium features an open concept layout, chef's kitchen with top-of-the-line appliances, and a private rooftop terrace perfect for entertaining.",
    features: ["Floor-to-ceiling Windows", "Private Terrace", "Concierge Service", "Fitness Center", "Smart Home System", "2 Parking Spaces"],
    images: [
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2400,
    lotSize: 0,
    yearBuilt: 2020,
    propertyType: "Condominium",
    status: "For Sale",
    listedDate: "2023-08-21",
    ownerId: "OWN002",
    landDetails: {
      surveyNumber: "SRV-9350",
      plotNumber: "PLT-5678",
      zoning: "High-Density Residential",
      dimensions: "Unit Dimensions: 60ft x 40ft",
      taxes: 18200
    }
  },
  {
    id: "PROP003",
    title: "Historic Brownstone",
    price: 3200000,
    address: "567 Heritage Avenue",
    city: "San Francisco",
    state: "CA",
    zipCode: "94107",
    description: "Beautifully restored 19th-century brownstone in the heart of Pacific Heights. This 4-bedroom, 3.5-bathroom historic home combines period charm with modern amenities, featuring original hardwood floors, ornate moldings, updated kitchen and bathrooms, and a landscaped garden.",
    features: ["Original Architectural Details", "Wine Cellar", "Library", "Garden", "Fireplace", "Period Fixtures"],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 4,
    bathrooms: 3.5,
    area: 4200,
    lotSize: 0.15,
    yearBuilt: 1885,
    propertyType: "Townhouse",
    status: "For Sale",
    listedDate: "2023-05-03",
    ownerId: "OWN003",
    landDetails: {
      surveyNumber: "SRV-6125",
      plotNumber: "PLT-9012",
      zoning: "Historic Residential",
      dimensions: "25ft x 100ft",
      taxes: 29600
    }
  },
  {
    id: "PROP004",
    title: "Mountain View Ranch",
    price: 1750000,
    address: "1200 Ridge Road",
    city: "Denver",
    state: "CO",
    zipCode: "80202",
    description: "Spectacular ranch property with breathtaking mountain views. This 3-bedroom, 2-bathroom home sits on 15 acres of pristine land, featuring an updated farmhouse-style interior, large barn, riding arena, and direct access to hiking trails.",
    features: ["Mountain Views", "15 Acres", "Barn", "Riding Arena", "Hiking Trail Access", "Solar Panels"],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 2800,
    lotSize: 15,
    yearBuilt: 1995,
    propertyType: "Ranch",
    status: "For Sale",
    listedDate: "2023-07-12",
    ownerId: "OWN004",
    landDetails: {
      surveyNumber: "SRV-2340",
      plotNumber: "PLT-3456",
      zoning: "Agricultural Residential",
      dimensions: "Irregular, approx. 850ft x 770ft",
      taxes: 8900
    }
  },
  {
    id: "PROP005",
    title: "Contemporary Urban Loft",
    price: 5500,
    address: "456 Artist Alley, Unit 302",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    description: "Stylish industrial loft in a converted warehouse. This 2-bedroom, 2-bathroom open concept space features 14-foot ceilings, original brick walls, large factory windows, and modern finishes. Located in the vibrant arts district with restaurants, galleries, and shops just steps away.",
    features: ["14ft Ceilings", "Original Brick Walls", "Polished Concrete Floors", "Industrial Windows", "Open Concept", "Building Rooftop Deck"],
    images: [
      "https://images.unsplash.com/photo-1493150134366-cacb0bdc03fe?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 1850,
    lotSize: 0,
    yearBuilt: 2008,
    propertyType: "Loft",
    status: "For Rent",
    listedDate: "2023-09-05",
    ownerId: "OWN005",
    landDetails: {
      surveyNumber: "SRV-7810",
      plotNumber: "PLT-7890",
      zoning: "Mixed-Use Commercial/Residential",
      dimensions: "Unit Dimensions: 50ft x 37ft",
      taxes: 6200
    }
  },
  {
    id: "PROP006",
    title: "Riverside Family Estate",
    price: 1950000,
    address: "8901 Riverbank Lane",
    city: "Portland",
    state: "OR",
    zipCode: "97201",
    description: "Beautiful family estate situated on a riverfront lot. This 5-bedroom, 4-bathroom home features an open floor plan, gourmet kitchen, home office, and finished basement. The backyard includes a covered patio, swimming pool, and private dock with river access.",
    features: ["Riverfront", "Swimming Pool", "Private Dock", "Home Office", "Finished Basement", "3-Car Garage"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop"
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    lotSize: 0.65,
    yearBuilt: 2010,
    propertyType: "Single Family Home",
    status: "For Sale",
    listedDate: "2023-07-28",
    ownerId: "OWN001",
    landDetails: {
      surveyNumber: "SRV-4562",
      plotNumber: "PLT-2345",
      zoning: "Residential Single Family",
      dimensions: "130ft x 220ft",
      taxes: 17800
    }
  }
];

export const getOwnerById = (id: string): Owner | undefined => {
  return owners.find(owner => owner.id === id);
};

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};
