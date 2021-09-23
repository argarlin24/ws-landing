import React from "react"
import styled from "styled-components"
import Button from "./button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  margin: 0 auto;
  padding-top: 4rem;
`

const ButtonContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
`
const Tagline = styled.p`
  font-size: 1.125rem;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
`
const Text = styled.p`
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 400;
`
const MainHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
`

const CTASection = props => {
  return (
    <Container>
      <Tagline>America's #1 Rated Adventure Platform</Tagline>
      <MainHeading>Take control of your weekends</MainHeading>
      <Text>Find adventure anywhere</Text>
      <ButtonContainer>
        <Button>Get started</Button>
        <Button secondary="secondary">
          <span>Request a demo</span>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default CTASection
