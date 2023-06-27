export interface ProductList {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductBase {
  products: ProductList[];
  total: number;
  skip: number;
  limit: number;
}
