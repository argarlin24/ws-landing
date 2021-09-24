import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`

const Arrow = styled.i`
  border: solid #000000;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 5px;
  transform: rotate(-45deg);
`

const Button = ({ secondary, children }) => {
  return (
    <StyledLink secondary={secondary}>
      {children}
      <Arrow />
    </StyledLink>
  )
}

export default Button
