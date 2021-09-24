import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../ui/button/button"
import {
  Container,
  Tagline,
  MainHeading,
  Text,
  BtnContainer,
} from "./ctaStyles"

const Cta = ({ props }) => {
  const data = useStaticQuery(graphql`
    query ctaData {
      cta: allContentfulCtaSectionData {
        edges {
          node {
            btnTextOne
            btnTextTwo
            headline
            subheadBottom
            subheadTop
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Tagline>{data.cta.edges[0].node.subheadTop}</Tagline>
      <MainHeading>{data.cta.edges[0].node.headline}</MainHeading>
      <Text>{data.cta.edges[0].node.subheadBottom}</Text>
      <BtnContainer>
        <Button>{data.cta.edges[0].node.btnTextOne}</Button>
        <Button secondary="secondary">
          {data.cta.edges[0].node.btnTextTwo}
        </Button>
      </BtnContainer>
    </Container>
  )
}

export default Cta
