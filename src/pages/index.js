import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CTASection from "../components/ctaSection"

const IndexPage = props => (
  <Layout>
    <Seo title="Home" />
    <CTASection />
  </Layout>
)

export default IndexPage
