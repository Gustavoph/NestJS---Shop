import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dtos/CreateProductDto';
import { ProductRepository } from './product.repository';

@Controller('/product')
export class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Get()
  async getProducts() {
    return this.productRepository.get();
  }

  @Post()
  async createProduct(@Body() product: CreateProductDTO) {
    return this.productRepository.create(product);
  }
}
