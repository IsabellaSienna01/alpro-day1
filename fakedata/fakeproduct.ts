import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: 1,
    title: "ScreenWatch",
    price: 20,
    category: "wearables",
    image: "/products/1.png",
    description: "Smartwatch with health tracking and stylish design",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "SmartMouse",
    price: 80,
    category: "mouse",
    image: "/products/2.png",
    description: "Ergonomic wireless mouse with customizable buttons and RGB lighting",
    rating: { rate: 4.8, count: 250 },
  },
    {
    id: 3,
    title: "Smart Laser",
    price: 20,
    category: "wearables",
    image: "/products/3.png",
    description: "Laser pointer with smart features and long battery life",
    rating: { rate: 4.5, count: 120 },
  },
    {
    id: 4,
    title: "Holo Laptop",
    price: 20,
    category: "laptop",
    image: "/products/4.png",
    description: "High-performance laptop for gaming and productivity",
    rating: { rate: 4.5, count: 120 },
  },
]