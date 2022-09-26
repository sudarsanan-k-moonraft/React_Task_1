import styled from 'styled-components';
import '../../../styles/font.css';
export const SingleCard = styled.div`
  padding: 1rem;
  width: 25%;
  margin: 1rem;
  box-shadow: 1px 1px 10px;

  font-family: 'Lora';
  &:hover {
    box-shadow: 1px 1px 10px blue;
    cursor: pointer;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
`;
export const ImageWrapper = styled.div`
  width: 160px;
`;
export const ProductName = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
