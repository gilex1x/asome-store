import { Controller } from '@nestjs/common';
import { Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('products')
  getProducts(@Query() params: any) {
    const { limit, offset } = params;
    return `Product:  ${limit}, ${offset}`;
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }
}
