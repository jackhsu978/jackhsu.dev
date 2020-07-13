/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Divider, GestaltProvider, Link, Row, Text } from "gestalt"
import Header from "./header"

import "./layout.css"
import "gestalt/dist/gestalt-future.css"

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
      <Header
        siteTitle={data.site.siteMetadata.title}
        onToggleColorScheme={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      />
      <Divider />
      <Container>
        <main>{children}</main>
        <Divider />
        <footer>
          <Row paddingY={4}>
            <Text>
              © {new Date().getFullYear()}, Built with{" "}
              <Link inline href="https://www.gatsbyjs.org">
                <Text weight="bold">Gatsby</Text>
              </Link>{" "}
              and{" "}
              <Link inline href="https://gestalt.netlify.app">
                <Text weight="bold">Gestalt</Text>
              </Link>
            </Text>
          </Row>
        </footer>
      </Container>
    </GestaltProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
