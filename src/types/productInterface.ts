export interface Product {
  id: string | number;
  name: string | { en: string; uk: string };
  price: number;
  image: string;
  category: string | { en: string; uk: string };
  date: string;
 
}

export interface Review {
  id: string;
  author: string;
  rating: number; 
  text: string | { en: string; uk: string };
  date: string;
  avatar: string;
}

export interface ProductDetail extends Product {
  category: string | { en: string; uk: string };
  subcategory: string | { en: string; uk: string };
  description: string | { en: string; uk: string };
  materials: string | { en: string; uk: string };
  availableColors: string[];
  availableSizes: string[];
  defaultColor: string;
  defaultSize: string;
  maxQuantity: number;
  images: string[];
  reviews: Review[]; 
  brand: string | { en: string; uk: string };
  age: number;
  // gender: string;
  // category: string;
  // date: string; 
}
