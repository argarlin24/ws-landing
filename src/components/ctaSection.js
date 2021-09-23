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

const CTASection = props => {
  return (
    <Container>
      <p>America's #1 Rated Adventure Platform</p>
      <p>Take control of your weekends</p>
      <p>Find adventure anywhere</p>
      <ButtonContainer>
        <Button>Get started</Button>
        <Button secondary>
          <span>Request a demo</span>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default CTASection
