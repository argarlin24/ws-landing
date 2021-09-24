import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  padding: 1rem 0;
  cursor: pointer;
  color: #f65928;
  text-decoration: none;

  &:hover {
    opacity: 0.75;
  }
`

const Arrow = styled.i`
  border: solid #f65928;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
  transform: rotate(-45deg);
`

const Button = ({ to, secondary, children }) => {
  return (
    <StyledLink to={to} secondary={secondary}>
      {children}
      <Arrow />
    </StyledLink>
  )
}

export default Button
