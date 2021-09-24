import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  border-radius: 3px;
  color: #fff;
  background: ${props =>
    props.secondary ? props.theme.color.gray : props.theme.color.blue};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`

const Arrow = styled.i`
  border: solid #ffffff;
  border-width: 0 2.5px 2.5px 0;
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
