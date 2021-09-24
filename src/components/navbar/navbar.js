import React from "react"
import Button from "../ui/button/button"
import { NavContainer, NavBrand, NavSection, NavItem } from "./navbarStyles"

const Navbar = () => {
  return (
    <nav>
      <NavContainer>
        <NavSection>
          <NavBrand>Brackets</NavBrand>
        </NavSection>
        <NavSection>
          <NavItem>What's Included</NavItem>
          <NavItem>Pricing</NavItem>
          <NavItem>Sign In</NavItem>
          <Button>Get Started</Button>
        </NavSection>
      </NavContainer>
    </nav>
  )
}

export default Navbar
