import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import HeroBg from "./heroBg"

const Hero = ({ children }) => {
  const data = useStaticQuery(graphql`
    query heroDAta {
      hero: allContentfulHero {
        edges {
          node {
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  return (
    <HeroBg heroUrl={data.hero.edges[0].node.heroImage.file.url}>
      {children}
    </HeroBg>
  )
}

export default Hero
