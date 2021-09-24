import styled from "styled-components"
import { Link } from "gatsby"

export const NavContainer = styled.div`
  display: flex;
  direction: row;
  justify-content: space-between;
  width: 66%;
  margin: 0 auto;
  padding: 2rem;
`
export const NavSection = styled.div`
  display: none;
  flex-direction: column;
  align-content: center;
  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    display: flex;
    flex-direction: row;
  }
`
export const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`
export const NavItem = styled(Link)`
  font-weight: 700;
  margin: 0 1.25rem 0 1rem;
  color: #ffffff;
  padding: 0.75rem 0;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`
export const MobileNavItem = styled(NavItem)`
  color: #000000;
`
export const BurgerContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`
export const Bar = styled.div`
  width: 35px;
  height: 4px;
  background-color: #fff;
  margin: 6px 0;
  border-radius: 3px;
  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    display: none;
  }
`
export const MobileContainer = styled.div`
  display: ${props => (props.toggle ? "block" : "none")};
  position: absolute;
  top: 90px;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 1000;
`
export const MobileSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
`
