// based on https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-a-page-template-for-the-markdown-files
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, Heading, Icon, Row, Text } from "gestalt"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Row gap={1} paddingY={2}>
        <Box>
          <Link href="/">Home</Link>
        </Box>
        <Box>
          <Icon icon="arrow-forward" size={10} />
        </Box>
        <Box>
          <Text>{frontmatter.title}</Text>
        </Box>
      </Row>
      <Box width="100%">
        <Box>
          <Heading accessibilityLevel={1} size="lg">
            {frontmatter.title}
          </Heading>
          <Heading accessibilityLevel={2} size="sm" color="gray">
            {frontmatter.date}
          </Heading>
        </Box>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
