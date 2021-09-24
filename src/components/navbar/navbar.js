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
          <NavItem>What's Included</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Sign In</NavItem>
          <Button>Get Started</Button>
        </NavSection>
        <MobileContainer toggle={menu}>
          <MobileSection>
            <MobileNavItem>What's Included</MobileNavItem>
            <MobileNavItem>Pricing</MobileNavItem>
            <MobileNavItem>Sign In</MobileNavItem>
            <Button>Get Started</Button>
          </MobileSection>
        </MobileContainer>
      </NavContainer>
    </nav>
  )
}

export default Navbar
