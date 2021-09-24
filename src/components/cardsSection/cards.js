import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArrowLink from "../ui/arrowLink/arrowLink"
import { Container, Card, Img, ImgOne, ImgTwo, ImgThree } from "./cardsStyles"

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
          <Card>
            <Img
              className={card.node.cardTitle.split(" ").join("")}
              src={card.node.cardImage.file.url}
            />
            <p>{card.node.cardTitle}</p>
            <p>{card.node.cardText}</p>
            <ArrowLink>{card.node.cardBtnText}</ArrowLink>
          </Card>
        )
      })}
    </Container>
  )
}

export default Cards
