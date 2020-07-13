/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Divider, GestaltProvider } from "gestalt"
import Header from "./header"
import Footer from "./footer"

import "./layout.css"
import "gestalt/dist/gestalt-future.css"

const GUTTER = 2

const FullWidth = ({ children }) => (
  <Box marginStart={-GUTTER} marginEnd={-2}>
    {children}
  </Box>
)
const FullWidthDivider = () => (
  <FullWidth>
    <Divider />
  </FullWidth>
)

const Layout = ({ children }) => {
  const [colorScheme, setColorScheme] = useState("light")
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <GestaltProvider colorScheme={colorScheme}>
      <Box paddingX={GUTTER} paddingY={2}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          onToggleColorScheme={() =>
            setColorScheme(colorScheme === "light" ? "dark" : "light")
          }
        />
        <Container>
          <FullWidthDivider />
          <main>
            <Box padding={2}>{children}</Box>
          </main>
          <FullWidthDivider />
          <Footer />
        </Container>
      </Box>
    </GestaltProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
