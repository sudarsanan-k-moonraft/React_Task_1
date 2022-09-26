import {
  SingleCard,
  ProductImage,
  ImageWrapper,
  ProductName,
} from './productDisplayStyle';

// Interface for productsprops

interface productProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  featured: boolean;
  ratings: number;
  image: string;
}

// Functional component for Product Content to display all the products

const ProductContent: React.FC<productProps> = ({
  id,
  name,
  brand,
  price,
  featured,
  ratings,
  image,
}: productProps): JSX.Element => {
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
