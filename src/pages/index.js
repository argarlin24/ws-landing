import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cta from "../components/ctaSection/cta"
import Cards from "../components/cardsSection/cards"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Cta />
      <Cards />
    </Layout>
  )
}
export default IndexPage
