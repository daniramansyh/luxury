export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  specs: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimal Leather Watch",
    category: "Accessories",
    price: 380,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=60", // jam leather minimal
    description: "Timeless elegance meets precision engineering. Handcrafted with premium Italian leather.",
    specs: ["Swiss Movement", "Sapphire Crystal", "50M Water Resistant", "Italian Leather Strap"],
    inStock: true,
  },
  {
    id: "2",
    name: "Premium Wireless Earbuds",
    category: "Technology",
    price: 299,
    rating: 4.9,
    reviews: 328,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=60", // earbuds
    description: "Crystal-clear sound with active noise cancellation and 12-hour battery life.",
    specs: ["Active Noise Cancellation", "12H Battery", "Wireless Charging", "IP54 Water Resistant"],
    inStock: true,
  },
  {
    id: "3",
    name: "Geometric Marble Pen",
    category: "Stationery",
    price: 85,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1546493918-8bcb44f37c8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2VvbWV0cmljJTIwTWFyYmxlJTIwUGVufGVufDB8fDB8fHww", // pen marmer
    description: "Handcrafted writing instrument with genuine marble accents and precision nib.",
    specs: ["Genuine Marble", "German Engineering", "Refillable Design", "Premium Packaging"],
    inStock: true,
  },
  {
    id: "4",
    name: "Carbon Fiber Wallet",
    category: "Accessories",
    price: 145,
    rating: 4.6,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=60", // carbon fiber wallet
    description: "Ultra-slim, RFID-protected wallet engineered with lightweight carbon fiber.",
    specs: ["RFID Protection", "Carbon Fiber Body", "12 Card Slots", "Lifetime Warranty"],
    inStock: true,
  },
  {
    id: "5",
    name: "Minimalist Desk Lamp",
    category: "Home",
    price: 220,
    rating: 4.8,
    reviews: 167,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/table-lamp/8/b/v/nordic-style-metal-desk-lamp-modern-minimalist-lamp-with-solid-original-imahdg483aav5nrh.jpeg?q=90", // minimalist desk lamp
    description: "Adjustable LED desk lamp with touch control and premium aluminum construction.",
    specs: ["Touch Dimming", "USB Charging Port", "Memory Settings", "360° Articulation"],
    inStock: true,
  },
  {
    id: "6",
    name: "Ceramic Coffee Set",
    category: "Home",
    price: 165,
    rating: 4.5,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=60", // set kopi keramik
    description: "Handmade ceramic set with porcelain finish. Includes kettle, cups, and saucers.",
    specs: ["Handmade Ceramic", "Porcelain Glaze", "Dishwasher Safe", "Thermal Resistant"],
    inStock: true,
  },
  {
    id: "7",
    name: "Titanium Phone Mount",
    category: "Technology",
    price: 95,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1623393945964-8f5d573f9358?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGl0YW5pdW0lMjBwaG9uZSUyMG1vdW50fGVufDB8fDB8fHww", // phone mount titanium
    description: "Universal phone mount crafted from aerospace-grade titanium alloy.",
    specs: ["Titanium Alloy", "Universal Fit", "360° Rotation", "Non-Slip Grips"],
    inStock: true,
  },
  {
    id: "8",
    name: "Linen Storage Box",
    category: "Home",
    price: 110,
    rating: 4.4,
    reviews: 58,
    image: "https://m.media-amazon.com/images/I/61+8tlHmvkL._AC_UL640_FMwebp_QL65_.jpg", // linen box
    description: "Sustainable linen storage solution with magnetic closures and elegant design.",
    specs: ["100% Natural Linen", "Magnetic Closure", "Collapsible", "Eco-Friendly"],
    inStock: true,
  },
  {
    id: "9",
    name: "Premium Sunglasses",
    category: "Accessories",
    price: 325,
    rating: 4.8,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=60", // sunglasses titanium
    description: "UV-protected lenses with titanium frames. Timeless design meets modern comfort.",
    specs: ["100% UV Protection", "Titanium Frame", "Anti-Reflective", "Lifetime Replacement"],
    inStock: true,
  },
  {
    id: "10",
    name: "Wireless Charging Pad",
    category: "Technology",
    price: 79,
    rating: 4.6,
    reviews: 412,
    image: "https://images.monoprice.com/productlargeimages/425191.jpg", // wireless charger
    description: "Fast-charging wireless pad with premium matte finish and universal compatibility.",
    specs: ["15W Fast Charge", "Matte Finish", "Thermal Control", "LED Indicator"],
    inStock: true,
  },
  {
    id: "11",
    name: "Silk Eye Mask",
    category: "Wellness",
    price: 62,
    rating: 4.9,
    reviews: 521,
    image: "https://p19-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/hDjmkQ/2025/3/17/f3ca9ec6-76dc-4a5e-95f4-4a1ba5bbd2e4.jpg~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1763531830&x-signature=gTGhaoFB4RxqjSBy5hOcIZppWIo%3D&x-signature-webp=feAqdEDO8ONmo8dl6bovbTHtmVA%3D", // silk eye mask
    description: "Hypoallergenic silk eye mask with adjustable strap for perfect comfort.",
    specs: ["100% Mulberry Silk", "Hypoallergenic", "Adjustable Fit", "Travel Case Included"],
    inStock: true,
  },
  {
    id: "12",
    name: "Minimalist Notebook",
    category: "Stationery",
    price: 38,
    rating: 4.5,
    reviews: 134,
    image: "https://floomingz.com/cdn/shop/files/Notebook_and_Pen_copy_1237bdb7-fe41-4c2d-8b33-a7417c5d1bba.webp?v=1738906450", // notebook leather
    description: "FSC-certified paper with genuine leather binding and ribbon bookmark.",
    specs: ["FSC-Certified Paper", "Leather Binding", "200 Pages", "Ribbon Bookmark"],
    inStock: true,
  },
];

export const categories = ["All", "Technology", "Accessories", "Home", "Stationery", "Wellness"];

export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $150", min: 50, max: 150 },
  { label: "$150 - $300", min: 150, max: 300 },
  { label: "$300+", min: 300, max: Infinity },
];
