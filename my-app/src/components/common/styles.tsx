import styled from "styled-components";

//Navbar Style

export const NavbarContent = styled.p`
  color: blue;
  text-align: center;
  margin: 1rem;
  font-size: 1.3rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Navbar = styled.div`
  display: flex;
  background-color: #f1ffbe;
  justify-content: space-between;
  align-items: center;
  @font-face {
    font-family: "QuickSand";
    src: url("../../assets/fonts/Quicksand.ttf");
  }
  font-family: "QuickSand";
`;
export const LogoImage = styled.img`
  width: 120px;
`;

//Featured container style

export const FeaturedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;
export const SingleCard = styled.div`
  padding: 1rem;
  width: 25%;
  margin: 1rem;
  box-shadow: 1px 1px 10px;
  @font-face {
    font-family: "Lora";
    src: url("../../assets/fonts/Lora_Regular");
  }
  font-family: "Lora";
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
export const SearchBar = styled.input`
  padding: 1rem;
  margin: 1rem;
  width: 60%;
  margin-left: 5rem;
`;
export const AllProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

export const FeaturedMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 2rem;
  @font-face {
    font-family: "Lora";
    src: url("../../assets/fonts/Lora_Regular");
  }
  font-family: "Lora";
`;
