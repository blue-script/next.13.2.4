export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  'rating': {
    'rate': number,
    'count': number
  }
}

export interface IProductData {
  products: IProduct[];
}

export interface IProductDataSingle {
  product: IProduct;
}

