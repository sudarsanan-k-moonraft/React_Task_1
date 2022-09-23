import { FeaturedContainer, FeaturedMessage } from "./styles";
import ProductDetails from "./products";
import ProductContent from "./ProductContent";
import { content } from "../../resources/string.js";

//Variables for checking if there is no featured products

let featuredTrue = 0,
  featuredFalse = 0;

//Functional component to display all featured products

const FeaturedProducts: React.FC = () => {
  return (
    <>
      <FeaturedContainer>
        {ProductDetails.map((item, i) => {
          item.featured ? (featuredTrue = 0) : (featuredTrue = 1);
          if (featuredTrue == 0) featuredFalse = 1;
          return (
            <>
              {item.featured && (
                <ProductContent
                  key={i}
                  id={item.productId}
                  name={item.productName}
                  brand={item.brand}
                  image={item.productImage}
                  price={item.productPrice}
                  featured={item.featured}
                  ratings={item.ratings}
                />
              )}
            </>
          );
        })}
      </FeaturedContainer>
      {featuredFalse == 0 && (
        <FeaturedMessage>{content.featuredMsg}</FeaturedMessage>
      )}
    </>
  );
};

export default FeaturedProducts;
