export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
 
}

export interface Review {
  id: string;
  author: string;
  rating: number; 
  text: string;
  date: string;
}

export interface ProductDetail extends Product {
  category: string;
  subcategory: string;
  description: string;
  materials: string;
  availableColors: string[];
  availableSizes: string[];
  defaultColor: string;
  defaultSize: string;
  maxQuantity: number;
  images: string[];
  reviews: Review[]; 
  brand: string;
  age: number;
  // gender: string;
  // category: string;
  // date: string; 
}
