import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Avatar, Box, Container, IconButton, Row, Heading } from "gestalt"
import avatar from "./avatar.png"

const Header = ({ siteTitle, onToggleColorScheme }) => (
  <Box paddingY={4}>
    <Container>
      <Row justifyContent="between">
        <Heading size="lg">
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              color: "var(--gestalt-blue)",
            }}
          >
            <Row>
              <Box paddingX={1}>
                <Avatar name="Jack Hsu" src={avatar} size="md" />
              </Box>
              <Box paddingX={1}>{siteTitle}</Box>
            </Row>
          </Link>
        </Heading>
        <IconButton
          size="md"
          accessibilityLabel="toggle color scheme: light / dark mode views"
          icon="workflow-status-in-progress"
          onClick={() => onToggleColorScheme()}
        />
      </Row>
    </Container>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onToggleColorScheme: PropTypes.func.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
