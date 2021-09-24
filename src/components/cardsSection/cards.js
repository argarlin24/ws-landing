import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArrowLink from "../ui/arrowLink/arrowLink"
import { Container, Card, CardTitle, Img } from "./cardsStyles"

const Cards = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      cards: allContentfulCard {
        edges {
          node {
            cardBtnText
            cardImage {
              file {
                url
              }
            }
            cardText
            cardTitle
          }
        }
      }
    }
  `)
  return (
    <Container>
      {data.cards.edges.map((card, index) => {
        return (
          <Card key={index}>
            <Img
              alt={card.node.cardTitle}
              className={card.node.cardTitle.split(" ").join("")}
              src={card.node.cardImage.file.url}
            />
            <CardTitle>{card.node.cardTitle}</CardTitle>
            <p>{card.node.cardText}</p>
            <ArrowLink to="/">{card.node.cardBtnText}</ArrowLink>
          </Card>
        )
      })}
    </Container>
  )
}

export default Cards
