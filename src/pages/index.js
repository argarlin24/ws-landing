import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CTASection from "../components/ctaSection"
import Cards from "../components/Cards"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" />
    <CTASection />
    <Cards />
  </Layout>
)

export default IndexPage
