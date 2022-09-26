import { ProductModel } from '../../Models/products';

export const mapProducts = (products: any[]): ProductModel[] => {
  const allProducts = [] as ProductModel[];

  if (!products.length) {
    return allProducts;
  }

  return products.map((product, i) => {
    return {
      productId: i,
      productName: product.productName,
      productImage: product.productImage,
      productPrice: product.productPrice,
      productRating: product.productRating,
      productBrand: product.brand,
      featuredProduct: product.featuredProduct,
    } as ProductModel;
  });
};
