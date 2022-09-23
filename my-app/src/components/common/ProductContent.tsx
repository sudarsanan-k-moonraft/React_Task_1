import { SingleCard, ProductImage, ImageWrapper, ProductName } from "./styles";

//Interface for Product Content functional component

interface productProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  featured: boolean;
  ratings: number;
  image: string;
}

//Functional component Product content

const ProductContent: React.FC<productProps> = ({
  id,
  name,
  brand,
  price,
  featured,
  ratings,
  image,
}: productProps) => {
  return (
    <SingleCard>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>
      <ProductName>{name}</ProductName>
      <div>₹{price}</div>
      <div>Ratings: {ratings}/5</div>
    </SingleCard>
  );
};
export default ProductContent;
