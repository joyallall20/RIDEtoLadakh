export const hotelListings = [
  {
    _id: "64fa01c2e4b0f5a3d2b8c001",
    name: "The Grand Dragon Ladakh",
    location: "Leh",
    rating: 5,
    pricePerNight: 1500,
    amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Fitness Center", "Laundry", "Mountain View", "24-hour Front Desk"],
    roomTypes: [
      { type: "Deluxe Room", capacity: 2, price: 1500 },
      { type: "Suite", capacity: 2, price: 2500 },
    ],
    contact: { phone: "+91-9876543210", email: "info@granddragon.com" },
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c002",
    name: "Nubra Valley Camp",
    location: "Nubra Valley",
    rating: 4,
    pricePerNight: 1200,
    amenities: ["Luxury Tents", "Local Cuisine", "Heated Tents", "Campfire Nights", "Mountain Views", "Hot Water"],
    roomTypes: [
      { type: "Luxury Tent", capacity: 2, price: 1200 },
      { type: "Family Tent", capacity: 4, price: 2000 },
    ],
    contact: { phone: "+91-9876543211", email: "stay@nubracamp.com" },
    images: [
      "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c003",
    name: "Pangong Lake Resort",
    location: "Pangong Tso",
    rating: 4,
    pricePerNight: 1800,
    amenities: ["Lakeside Views", "Heated Rooms", "Restaurant", "Stargazing", "Mountain View", "Room Service"],
    roomTypes: [
      { type: "Lake View Room", capacity: 2, price: 1800 },
      { type: "Premium Cottage", capacity: 2, price: 2800 },
    ],
    contact: { phone: "+91-9876543212", email: "info@pangongresort.com" },
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569949381669-ecf87ae461b7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c004",
    name: "Kargil Heights Hotel",
    location: "Kargil",
    rating: 3,
    pricePerNight: 800,
    amenities: ["Budget-friendly", "Restaurant", "Free Parking", "24-hour Front Desk", "Heating", "Tour Desk"],
    roomTypes: [
      { type: "Standard Room", capacity: 2, price: 800 },
      { type: "Deluxe Room", capacity: 2, price: 1200 },
    ],
    contact: { phone: "+91-9876543213", email: "bookings@kargilheights.com" },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c005",
    name: "Leh Palace Heritage",
    location: "Leh",
    rating: 4,
    pricePerNight: 2000,
    amenities: ["Cultural Activities", "Fine Dining", "Spa", "Mountain View", "Garden", "Free Wi-Fi"],
    roomTypes: [
      { type: "Heritage Room", capacity: 2, price: 2000 },
      { type: "Royal Suite", capacity: 2, price: 3500 },
    ],
    contact: { phone: "+91-9876543214", email: "heritage@lehpalace.com" },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c006",
    name: "Desert Gold Camp",
    location: "Nubra Valley",
    rating: 3,
    pricePerNight: 900,
    amenities: ["Tent Camp", "Adventure Activities", "Local Guides", "Campfire", "Basic Accommodation", "Meals Included"],
    roomTypes: [
      { type: "Standard Tent", capacity: 2, price: 900 },
      { type: "Deluxe Tent", capacity: 2, price: 1500 },
    ],
    contact: { phone: "+91-9876543215", email: "camp@desertgold.com" },
    images: [
      "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c007",
    name: "Blue Waters Pangong",
    location: "Pangong Tso",
    rating: 4,
    pricePerNight: 2200,
    amenities: ["Lakeside Tents", "Morning Tea", "Solar Power", "River Access", "Eco-friendly", "Stargazing"],
    roomTypes: [
      { type: "Lakeside Tent", capacity: 2, price: 2200 },
      { type: "View Cottage", capacity: 2, price: 3200 },
    ],
    contact: { phone: "+91-9876543216", email: "hello@bluewaters.com" },
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569949381669-ecf87ae461b7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c008",
    name: "Kargil Inn",
    location: "Kargil",
    rating: 3,
    pricePerNight: 700,
    amenities: ["Budget-friendly", "Free Parking", "Restaurant", "Family Rooms", "Breakfast Included", "Tour Assistance"],
    roomTypes: [
      { type: "Economy Room", capacity: 2, price: 700 },
      { type: "Family Room", capacity: 4, price: 1500 },
    ],
    contact: { phone: "+91-9876543217", email: "stay@kargilinn.com" },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c009",
    name: "Zenith Leh",
    location: "Leh",
    rating: 5,
    pricePerNight: 2800,
    amenities: ["Luxury Spa", "Indoor Pool", "Fine Dining", "Bar", "Fitness Center", "Airport Shuttle"],
    roomTypes: [
      { type: "Superior Room", capacity: 2, price: 2800 },
      { type: "Executive Suite", capacity: 2, price: 4500 },
    ],
    contact: { phone: "+91-9876543218", email: "reservations@zenithleh.com" },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c010",
    name: "Sand Dunes Retreat",
    location: "Nubra Valley",
    rating: 4,
    pricePerNight: 1600,
    amenities: ["Deluxe Tents", "Heated Water Bottles", "Local Cuisine", "Cultural Activities", "Garden", "Free Parking"],
    roomTypes: [
      { type: "Desert Tent", capacity: 2, price: 1600 },
      { type: "Luxury Swiss Tent", capacity: 2, price: 2400 },
    ],
    contact: { phone: "+91-9876543219", email: "info@sanddunes.com" },
    images: [
      "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c011",
    name: "Pangong Eco Camp",
    location: "Pangong Tso",
    rating: 3,
    pricePerNight: 1100,
    amenities: ["Eco-friendly Lodging", "Solar Power", "Basic Tents", "Shared Bathrooms", "River Access", "Budget-friendly"],
    roomTypes: [
      { type: "Eco Tent", capacity: 2, price: 1100 },
      { type: "Group Tent", capacity: 6, price: 2500 },
    ],
    contact: { phone: "+91-9876543220", email: "eco@pangongcamp.com" },
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569949381669-ecf87ae461b7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c012",
    name: "Kargil View Hotel",
    location: "Kargil",
    rating: 3,
    pricePerNight: 950,
    amenities: ["Mountain Views", "Restaurant", "Free Wi-Fi", "Laundry Service", "24-hour Front Desk", "Heated Rooms"],
    roomTypes: [
      { type: "Mountain View Room", capacity: 2, price: 950 },
      { type: "Suite", capacity: 2, price: 1600 },
    ],
    contact: { phone: "+91-9876543221", email: "book@kargilview.com" },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c013",
    name: "Leh Mountain Resort",
    location: "Leh",
    rating: 4,
    pricePerNight: 1900,
    amenities: ["Mountain View", "Terrace", "Shared Lounge", "Café", "Tour Desk", "Free Parking"],
    roomTypes: [
      { type: "Mountain Facing", capacity: 2, price: 1900 },
      { type: "Valley View", capacity: 2, price: 2600 },
    ],
    contact: { phone: "+91-9876543222", email: "resort@lehmountain.com" },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c014",
    name: "Double Hump Camp",
    location: "Nubra Valley",
    rating: 4,
    pricePerNight: 1400,
    amenities: ["Close to Diskit", "In-house Dining", "Hot Water", "Comfortable Tents", "Power Backup", "Adventure Activities"],
    roomTypes: [
      { type: "Standard Camp", capacity: 2, price: 1400 },
      { type: "Luxury Camp", capacity: 2, price: 2200 },
    ],
    contact: { phone: "+91-9876543223", email: "camp@doublehump.com" },
    images: [
      "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c015",
    name: "Pangong Star Camp",
    location: "Pangong Tso",
    rating: 3,
    pricePerNight: 1300,
    amenities: ["Stargazing", "Lakeside Views", "Basic Accommodation", "Campsite", "Shared Bathrooms", "Budget-friendly"],
    roomTypes: [
      { type: "Star Gazer Tent", capacity: 2, price: 1300 },
      { type: "Lake Side Tent", capacity: 2, price: 1800 },
    ],
    contact: { phone: "+91-9876543224", email: "stars@pangongcamp.com" },
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569949381669-ecf87ae461b7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c016",
    name: "Kargil Base Hotel",
    location: "Kargil",
    rating: 2,
    pricePerNight: 600,
    amenities: ["Budget-friendly", "Basic Accommodation", "Restaurant", "Free Parking", "Tour Assistance", "Family Rooms"],
    roomTypes: [
      { type: "Basic Room", capacity: 2, price: 600 },
      { type: "Double Room", capacity: 2, price: 900 },
    ],
    contact: { phone: "+91-9876543225", email: "base@kargilhotel.com" },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c017",
    name: "Leh Organic Stay",
    location: "Leh",
    rating: 4,
    pricePerNight: 1700,
    amenities: ["Organic Farm", "Eco-friendly", "Garden", "Local Cuisine", "Cultural Activities", "Free Wi-Fi"],
    roomTypes: [
      { type: "Farm View Room", capacity: 2, price: 1700 },
      { type: "Garden Cottage", capacity: 2, price: 2400 },
    ],
    contact: { phone: "+91-9876543226", email: "organic@lehstay.com" },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c018",
    name: "Nubra Oasis",
    location: "Nubra Valley",
    rating: 4,
    pricePerNight: 1750,
    amenities: ["Orchard Garden", "Lounge Bar", "Heated Tents", "Local Guides", "Dining Hall", "Laundry Service"],
    roomTypes: [
      { type: "Garden Tent", capacity: 2, price: 1750 },
      { type: "Premium Tent", capacity: 2, price: 2600 },
    ],
    contact: { phone: "+91-9876543227", email: "oasis@nubrastay.com" },
    images: [
      "https://images.unsplash.com/photo-1534187886935-1e1236e856c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c019",
    name: "Pangong Luxury Camp",
    location: "Pangong Tso",
    rating: 5,
    pricePerNight: 3000,
    amenities: ["Luxury Tents", "Heated Water", "Fine Dining", "Spa", "Private Lake Access", "Guided Tours"],
    roomTypes: [
      { type: "Luxury Lake Tent", capacity: 2, price: 3000 },
      { type: "Executive Tent", capacity: 2, price: 4500 },
    ],
    contact: { phone: "+91-9876543228", email: "luxury@pangong.com" },
    images: [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569949381669-ecf87ae461b7?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  },
  {
    _id: "64fa01c2e4b0f5a3d2b8c020",
    name: "Kargil Comfort Inn",
    location: "Kargil",
    rating: 3,
    pricePerNight: 850,
    amenities: ["Near Main Market", "City View", "Breakfast Included", "Room Service", "Laundry", "Wi-Fi"],
    roomTypes: [
      { type: "City View Room", capacity: 2, price: 850 },
      { type: "Executive Room", capacity: 2, price: 1300 },
    ],
    contact: { phone: "+91-9876543229", email: "comfort@kargilinn.com" },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop"
    ],
    createdAt: new Date().toISOString(),
    button: "BOOK NOW",
  }
];
