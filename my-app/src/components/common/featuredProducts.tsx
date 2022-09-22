import { FeaturedContainer } from "./styles";
import ProductDetails from "./productDetails";
import ProductContent from "./ProductContent";
var flag;
const FeaturedProducts:React.FC=()=>{
    return(
        
        
        <FeaturedContainer>
           {ProductDetails.map((item)=>{
            return item.featured && (
                <ProductContent id={item.productId} name={item.productName} brand={item.brand} image={item. productImage} price={item.productPrice} featured={item.featured} ratings={item.ratings} />
                )
           })}
        </FeaturedContainer>
    );
};

export default FeaturedProducts;