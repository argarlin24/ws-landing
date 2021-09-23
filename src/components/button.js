import { Link } from "gatsby"
import styled from "styled-components"

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  background: ${props =>
    props.secondary ? props.theme.color.gray : props.theme.color.blue};

  &:hover {
    opacity: 0.75;
  }

  &:after {
    content: "";
    position: absolute;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
    transform: rotate(-45deg);
  }
`
export default Button
