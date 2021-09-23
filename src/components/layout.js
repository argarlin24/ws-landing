import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../theme/globalStyles"
import theme from "../theme/theme"
import { ThemeProvider } from "styled-components"
import HeroBg from "./heroBg"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <HeroBg>
          <Header />
          <main>{children}</main>
        </HeroBg>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
