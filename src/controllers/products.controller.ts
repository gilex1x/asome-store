import { Controller, Post } from '@nestjs/common';
import { Get, Param, Query, Body } from '@nestjs/common';

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

  @Post()
  createProduct(@Body() payload: any) {
    console.log(payload);
    return {
      message: 'Created ok',
      payload,
    };
  }
}
