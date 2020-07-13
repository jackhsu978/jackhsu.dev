import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "gestalt"

const PostLink = ({ post }) => (
  <Box>
    <Link to={post.frontmatter.slug} style={{ textDecoration: "none" }}>
      <Heading size="md">{post.frontmatter.title}</Heading>
      <Heading size="sm" color="gray">
        {post.frontmatter.date}
      </Heading>
      <Text>{post.frontmatter.spoiler}</Text>
    </Link>
  </Box>
)

export default PostLink
