import { Injectable } from '@nestjs/common';

type Product = {
  name: string;
  value: number;
  AmountAvailable: number;
  description: string;
  features: {
    name: string;
    description: string;
  }[];
  images: {
    url: string;
    description: string;
  }[];
  category: string;
  dateCreation: Date;
  dateUpdate: Date;
};

@Injectable()
export class ProductRepository {
  private products: Product[] = [];

  async create(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async get(): Promise<Product[]> {
    return this.products;
  }
}
