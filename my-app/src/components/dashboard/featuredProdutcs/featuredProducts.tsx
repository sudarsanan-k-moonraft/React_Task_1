import {
  FeaturedContainer,
  FeaturedMessage,
  FeaturedHeading,
} from './featuredProductsStyle';
import ProductContent from '../../common/productDisplay/productDisplay';
import { content } from '../../../resources/string.js';

//Variables for checking featured items

let featuredTrue = 0,
  featuredFalse = 0;

//Declaring type for ProductType

type ProductType = {
  productData: {
    productId?: number;
    productName: string;
    productBrand: string;
    productImage: string;
    productPrice: number;
    productRating: number;
    featuredProduct: boolean;
  }[];
};

//Functional Component for featured products

const FeaturedProducts: React.FC<ProductType> = (props): JSX.Element => {
  return (
    <>
      <FeaturedHeading>Featured Content</FeaturedHeading>
      <FeaturedContainer>
        {props.productData.map((item: any, i: any) => {
          item.featuredProduct ? (featuredTrue = 0) : (featuredTrue = 1);
          if (featuredTrue === 0) featuredFalse = 1;
          return (
            <>
              {item.featuredProduct && (
                <ProductContent
                  id={i}
                  name={item.productName}
                  brand={item.brand}
                  image={item.productImage}
                  price={item.productPrice}
                  featured={item.featuredProduct}
                  ratings={item.productRating}
                />
              )}
            </>
          );
        })}
      </FeaturedContainer>
      {featuredFalse === 0 && (
        <FeaturedMessage>{content.featuredMsg}</FeaturedMessage>
      )}
    </>
  );
};

export default FeaturedProducts;
