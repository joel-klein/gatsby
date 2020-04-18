import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
const blog = ({ data }) => {
  return (
    <Layout>
      <BlogList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
