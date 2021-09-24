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
  display: flex;
  flex-direction: row;
  align-content: center;
`
export const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`
export const NavItem = styled(Link)`
  font-weight: 700;
  margin: 0 1rem 0 1.25rem;
  color: #ffffff;
`
