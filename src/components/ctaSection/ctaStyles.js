import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin: 0 auto;
`
export const BtnContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.875rem;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.tablet}) {
    flex-direction: row;
    text-algin: left;
  }

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.laptop}) {
    width: 40%;
  }
`
export const Tagline = styled.p`
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  padding: 1rem 0;
`
export const Text = styled.p`
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 1rem 0;
`
export const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  padding: 1rem 0;
  line-height: 67.77px;

  @media only screen and (min-width: ${props =>
      props.theme.breakpoint.tablet}) {
    width: 420px;
  }
`
