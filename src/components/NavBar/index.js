import {React} from   "react";
import {FaBars} from "react-icons/fa";
import { Nav,NavBarContainer,NavLogo,NavMenu,MobileIcon,NavItem,NavLink,NavBtnLink,      
    NavBtn} from "./NavBarElements";
const Navbar =({toggle}) =>{

    return (
        <>
       <Nav>
           <NavBarContainer>
                <NavLogo to="/">Like </NavLogo>
                    <MobileIcon onClick={toggle}>
                    <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="discover">Discover</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup">Sign up</NavLink>
                        </NavItem>
                        <NavBtn>
                        <NavBtnLink to="/signIn"> logIn
                        </NavBtnLink>      
                        </NavBtn>
                    </NavMenu>
                
            </NavBarContainer>
       </Nav>
       </>
    )
}

export default Navbar;