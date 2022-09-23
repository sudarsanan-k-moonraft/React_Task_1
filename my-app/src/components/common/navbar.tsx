import { img } from "../../resources/images.js";
import { content } from "../../resources/string.js";
import { NavbarContent, Navbar, LogoImage } from "./styles";

//Functional component for Navigation Bar

const Nav: React.FC = () => {
  return (
    <Navbar>
      <LogoImage src={img.logo} />
      <NavbarContent>{content.heading}</NavbarContent>
      <NavbarContent>{content.loginMsg}</NavbarContent>
      <NavbarContent>{content.categories}</NavbarContent>
      <NavbarContent>{content.profile}</NavbarContent>
    </Navbar>
  );
};
export default Nav;
