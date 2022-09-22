import {img} from '../../resources/images.js';
import {content} from '../../data/string.js';
import { NavbarContent,Navbar,LogoImage} from './styles';
LogoImage.defaultProps={
    src:img.logo,
};
const Nav:React.FC=()=>{
    return(
        <Navbar>
        <LogoImage src={img.logo}/>  
        <NavbarContent>{content.heading}</NavbarContent>
        <NavbarContent>{content.loginMsg}</NavbarContent>
        <NavbarContent>{content.categories}</NavbarContent>
        <NavbarContent>{content.profile}</NavbarContent>
        </Navbar>
    );
};
 export default Nav;