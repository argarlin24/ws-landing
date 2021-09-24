import React, { useState } from "react"
import Button from "../ui/button/button"
import {
  NavContainer,
  NavBrand,
  NavSection,
  NavItem,
  BurgerContainer,
  Bar,
  MobileContainer,
  MobileSection,
  MobileNavItem,
} from "./navbarStyles"
import logo from "../../images/brackets-logo.svg"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const menuHandler = () => {
    setMenu(!menu)
  }

  return (
    <nav>
      <NavContainer>
        <NavBrand>
          <img alt="Brackets" src={logo} />
        </NavBrand>
        <BurgerContainer onClick={menuHandler}>
          <Bar />
          <Bar />
          <Bar />
        </BurgerContainer>
        <NavSection>
          <NavItem to="/">What's Included</NavItem>
          <NavItem to="/">Pricing</NavItem>
          <NavItem to="/">Sign In</NavItem>
          <Button to="/">Get Started</Button>
        </NavSection>
        <MobileContainer toggle={menu}>
          <MobileSection>
            <MobileNavItem to="/">What's Included</MobileNavItem>
            <MobileNavItem to="/">Pricing</MobileNavItem>
            <MobileNavItem to="/">Sign In</MobileNavItem>
            <Button to="/">Get Started</Button>
          </MobileSection>
        </MobileContainer>
      </NavContainer>
    </nav>
  )
}

export default Navbar
