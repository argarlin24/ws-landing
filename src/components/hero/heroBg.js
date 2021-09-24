import styled from "styled-components"

const HeroBg = styled.div`
  background: linear-gradient(90deg, #000000 5%, rgba(0, 0, 0, 0) 107.34%),
    linear-gradient(360deg, #000000 13.96%, rgba(0, 0, 0, 0) 107.34%),
    url(${props => props.heroUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    height: 100vh;
  }
`

export default HeroBg
