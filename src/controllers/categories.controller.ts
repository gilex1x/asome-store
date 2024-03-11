import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categorieId')
  getCategorie(@Param('categorieId') categorieId: string) {
    return `Ctegorie ${categorieId}`;
  }

  @Get(':categorieId/products/:productId')
  getCategorieProduct(
    @Param('categorieId') categorieId: string,
    @Param('productId') productId: string,
  ) {
    return `Product ${productId}Categorie ${categorieId}`;
  }
}
