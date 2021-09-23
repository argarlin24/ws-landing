import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavContainer = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  width: 66%;
  margin: 0 auto;
  padding: 2rem;
`
const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`
const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`
const NavItem = styled(Link)`
  font-weight: 700;
  margin: 0 2rem 0 2rem;
  color: #ffffff;
`

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
        </NavSection>
      </NavContainer>
    </nav>
  )
}

export default Navbar
