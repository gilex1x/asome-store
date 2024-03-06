import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  myMethod() {
    return 'New Route';
  }
  /*normal way */
  // @Get('product/:id')
  // getProduct(@Param() params: any) {
  //   return `Product ${params.id}`;
  // }

  @Get('product/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('categories/:categorieId')
  getCategorie(@Param('categorieId') categorieId: string) {
    return `Ctegorie ${categorieId}`;
  }

  @Get('categories/:categorieId/products/:productId')
  getCategorieProduct(
    @Param('categorieId') categorieId: string,
    @Param('productId') productId: string,
  ) {
    return `Product ${productId}Categorie ${categorieId}`;
  }
}
