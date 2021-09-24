import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../theme/globalStyles"
import theme from "../theme/theme"
import { ThemeProvider } from "styled-components"
import Hero from "./hero/hero"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Hero>
          <Header />
          <main>{children}</main>
        </Hero>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
