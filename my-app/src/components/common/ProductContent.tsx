import { SingleCard,ProductImage,ImageWrapper,ProductName } from "./styles";
function ProductContent({id,name,brand,price,featured,ratings,image}:any){
    return(
        <SingleCard>
            <ImageWrapper>
        <ProductImage src={image}/>
        </ImageWrapper>
        <ProductName>{name}</ProductName>
       
        <div>₹{price}</div>
        <div>Ratings: {ratings}/5</div>
        
        {/* <img src={image}> */}
        </SingleCard>
    );
}
export default ProductContent;