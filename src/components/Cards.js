import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 66%;
  margin: 0 auto;
  justify-content: space-around;
`

const Card = styled.div`
  background: #ffffff;
  border-radius: 4px;
  flex-grow: 1;
  margin: 1rem;
  padding: 1.5rem;
`

const Cards = () => {
  return (
    <Container>
      <Card>
        <p>Agmented Reality</p>
        <p>An interactive experience like no other.</p>
      </Card>
      <Card>
        <p>Virtual Reality</p>
        <p>A truely immersive virutal experience</p>
      </Card>
      <Card>
        <p>Mobile</p>
        <p>Earn points on the go with our mobile app.</p>
      </Card>
    </Container>
  )
}

export default Cards
