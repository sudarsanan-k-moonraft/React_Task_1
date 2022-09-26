import styled from 'styled-components';
export const FeaturedMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 2rem;
  @font-face {
    font-family: 'Lora';
    src: url('../../assets/fonts/Lora_Regular');
  }
  font-family: 'Lora';
`;

export const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

export const FeaturedHeading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
`;
