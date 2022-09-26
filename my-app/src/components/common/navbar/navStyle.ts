import styled from 'styled-components';
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

  font-family: 'QuickSand';
`;
export const LogoImage = styled.img`
  width: 120px;
`;
